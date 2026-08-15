const pageData = window.templatePageData || { templates: [] };
const pageTemplates = pageData.templates || [];
let selectedTemplateId = pageTemplates[0]?.id || null;
let pendingTemplateDownload = null;

const previewTitle = document.querySelector("#previewTitle");
const previewDescription = document.querySelector("#previewDescription");
const previewCategory = document.querySelector("#previewCategory");
const previewSituation = document.querySelector("#previewSituation");
const previewBody = document.querySelector("#previewBody");
const previewDownloadDoc = document.querySelector("#previewDownloadDoc");
const previewDownloadTxt = document.querySelector("#previewDownloadTxt");
const leadModal = document.querySelector("#leadModal");
const leadForm = document.querySelector("#leadForm");
const leadClose = document.querySelector("#leadClose");
const leadError = document.querySelector("#leadError");
const leadName = document.querySelector("#leadName");
const leadEmail = document.querySelector("#leadEmail");
const leadUseCase = document.querySelector("#leadUseCase");
const leadTemplate = document.querySelector("#leadTemplate");
const leadFormat = document.querySelector("#leadFormat");
const leadCapturedAt = document.querySelector("#leadCapturedAt");
const toast = document.querySelector("#toast");
const leadStorageKey = "recommendationTemplateLead";

function escapeHtml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function slugify(text) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function findTemplate(id) {
  return pageTemplates.find((template) => template.id === id) || pageTemplates[0];
}

function formatPreviewBody(template) {
  return `
    <h3>${escapeHtml(template.title)}</h3>
    ${template.body
      .map((line) => `<p>${escapeHtml(line).replace(/\[([^\]]+)\]/g, '<span class="field">[$1]</span>')}</p>`)
      .join("")}
  `;
}

function renderPreview(template) {
  if (!template) return;
  selectedTemplateId = template.id;
  previewTitle.textContent = template.title;
  previewDescription.textContent = template.description;
  previewCategory.textContent = template.category;
  previewSituation.textContent = template.situation;
  previewBody.innerHTML = formatPreviewBody(template);
}

function plainText(template) {
  return `${template.title}\n\n${template.body.join("\n\n")}`;
}

function docHtml(template) {
  return `<!doctype html>
    <html>
      <head>
        <meta charset="utf-8" />
        <title>${escapeHtml(template.title)}</title>
        <style>
          body { font-family: Georgia, 'Times New Roman', serif; line-height: 1.6; color: #222; }
          .page { max-width: 720px; margin: 40px auto; }
          h1 { font-size: 24px; }
          p { margin: 0 0 16px; }
        </style>
      </head>
      <body>
        <div class="page">
          <h1>${escapeHtml(template.title)}</h1>
          ${template.body.map((line) => `<p>${escapeHtml(line)}</p>`).join("")}
        </div>
      </body>
    </html>`;
}

function saveBlob(blob, filename) {
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function downloadTemplate(template, format) {
  const isDoc = format === "DOC";
  const content = isDoc ? docHtml(template) : plainText(template);
  const type = isDoc ? "application/msword" : "text/plain";
  const extension = isDoc ? "doc" : "txt";
  saveBlob(new Blob([content], { type }), `${slugify(template.title)}.${extension}`);
  showToast(`${template.title} downloaded as ${format}.`);
}

function hasLeadAccess() {
  try {
    const lead = JSON.parse(localStorage.getItem(leadStorageKey) || "null");
    return Boolean(lead && lead.email && lead.name);
  } catch {
    return false;
  }
}

function openLeadModal(template, format) {
  document.body.classList.add("modal-open");
  leadModal.classList.remove("hidden");
  leadError.textContent = "";
  document.querySelector("#leadModalTitle").textContent = `Download ${template.title}`;
  leadTemplate.value = template.title;
  leadFormat.value = format;
  leadCapturedAt.value = new Date().toISOString();
  window.setTimeout(() => leadName.focus(), 0);
}

function closeLeadModal() {
  document.body.classList.remove("modal-open");
  leadModal.classList.add("hidden");
  leadError.textContent = "";
}

function requestDownload(template, format) {
  if (!template) return;
  if (hasLeadAccess()) {
    downloadTemplate(template, format);
    return;
  }
  pendingTemplateDownload = { templateId: template.id, format };
  openLeadModal(template, format);
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function submitLead(event) {
  event.preventDefault();
  const name = leadName.value.trim();
  const email = leadEmail.value.trim();
  const useCase = leadUseCase.value;
  const templateName = leadTemplate.value;
  const format = leadFormat.value;
  const capturedAt = new Date().toISOString();

  if (!name) {
    leadError.textContent = "Please enter your name.";
    leadName.focus();
    return;
  }

  if (!isValidEmail(email)) {
    leadError.textContent = "Please enter a valid email address.";
    leadEmail.focus();
    return;
  }

  try {
    localStorage.setItem(
      leadStorageKey,
      JSON.stringify({ name, email, useCase, template: templateName, format, capturedAt })
    );
  } catch {
    // Continue with the current download even if local storage is unavailable.
  }

  leadCapturedAt.value = capturedAt;
  closeLeadModal();
  showToast("Contact saved. Your download is starting.");

  if (pendingTemplateDownload) {
    const template = findTemplate(pendingTemplateDownload.templateId);
    const downloadFormat = pendingTemplateDownload.format;
    pendingTemplateDownload = null;
    window.setTimeout(() => downloadTemplate(template, downloadFormat), 0);
  }

  sendLeadToNetlify();
}

function sendLeadToNetlify() {
  try {
    const formData = new FormData(leadForm);
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString()
    }).catch(() => {
      // Local file previews cannot submit Netlify Forms; deployed Netlify pages will collect it.
    });
  } catch {
    // Never block the download if background lead capture is unavailable.
  }
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  window.setTimeout(() => toast.classList.remove("show"), 2200);
}

document.addEventListener("click", (event) => {
  const previewButton = event.target.closest("[data-preview]");
  const downloadButton = event.target.closest("[data-download]");

  if (previewButton) {
    const template = findTemplate(previewButton.dataset.preview);
    renderPreview(template);
    document.querySelector("#template-preview").scrollIntoView({ behavior: "smooth", block: "start" });
  }

  if (downloadButton) {
    requestDownload(findTemplate(downloadButton.dataset.download), downloadButton.dataset.format || "DOC");
  }
});

previewDownloadDoc.addEventListener("click", () => requestDownload(findTemplate(selectedTemplateId), "DOC"));
previewDownloadTxt.addEventListener("click", () => requestDownload(findTemplate(selectedTemplateId), "TXT"));
leadForm.addEventListener("submit", submitLead);
leadClose.addEventListener("click", () => {
  pendingTemplateDownload = null;
  closeLeadModal();
});
leadModal.addEventListener("click", (event) => {
  if (event.target === leadModal) {
    pendingTemplateDownload = null;
    closeLeadModal();
  }
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !leadModal.classList.contains("hidden")) {
    pendingTemplateDownload = null;
    closeLeadModal();
  }
});
