(function (root) {
  const STATUSES = ["Pendente", "Em andamento", "Concluída"];

  function normalizeTask(input) {
    return {
      title: String(input.title || "").trim(),
      description: String(input.description || "").trim(),
      assignee: String(input.assignee || "").trim(),
      dueDate: String(input.dueDate || "").trim(),
      status: String(input.status || "Pendente").trim()
    };
  }

  function validateTask(input) {
    const task = normalizeTask(input);
    const errors = [];
    if (!task.title) errors.push("Informe o título da tarefa.");
    if (!task.assignee) errors.push("Informe o responsável.");
    if (!task.dueDate) errors.push("Informe a data de vencimento.");
    if (task.status && !STATUSES.includes(task.status)) errors.push("Selecione um status válido.");
    return { valid: errors.length === 0, errors, task };
  }

  function formatDate(value) {
    if (!value) return "";
    const parts = value.split("-");
    return parts.length === 3 ? `${parts[2]}/${parts[1]}/${parts[0]}` : value;
  }

  const api = { STATUSES, normalizeTask, validateTask, formatDate };
  if (typeof module !== "undefined" && module.exports) module.exports = api;
  root.TaskCore = api;
})(typeof globalThis !== "undefined" ? globalThis : this);
