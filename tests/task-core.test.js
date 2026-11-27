const test = require("node:test");
const assert = require("node:assert/strict");
const { validateTask, normalizeTask, formatDate, STATUSES } = require("../app/task-core.js");

const valid = {
  title: "Preparar apresentação",
  description: "Revisar os slides",
  assignee: "Ana",
  dueDate: "2026-11-30",
  status: "Pendente"
};

test("aceita tarefa válida", () => {
  assert.equal(validateTask(valid).valid, true);
});

test("rejeita título vazio ou composto apenas por espaços", () => {
  const result = validateTask({ ...valid, title: "   " });
  assert.equal(result.valid, false);
  assert.ok(result.errors.includes("Informe o título da tarefa."));
});

test("rejeita responsável ausente", () => {
  assert.equal(validateTask({ ...valid, assignee: "" }).valid, false);
});

test("rejeita data de vencimento ausente", () => {
  assert.equal(validateTask({ ...valid, dueDate: "" }).valid, false);
});

test("aceita somente os três status previstos", () => {
  assert.equal(STATUSES.length, 3);
  assert.equal(validateTask({ ...valid, status: "Cancelada" }).valid, false);
});

test("remove espaços extras no início e no fim", () => {
  const task = normalizeTask({ ...valid, title: "  Estudar  ", assignee: "  João " });
  assert.equal(task.title, "Estudar");
  assert.equal(task.assignee, "João");
});

test("formata data ISO para padrão brasileiro", () => {
  assert.equal(formatDate("2026-11-30"), "30/11/2026");
});

test("mantém descrição opcional", () => {
  assert.equal(validateTask({ ...valid, description: "" }).valid, true);
});
