(() => {
  const STORAGE_KEY = "organiza.tasks.v1";
  const $ = (id) => document.getElementById(id);
  const form = $("task-form");
  const list = $("task-list");
  let tasks = loadTasks();

  function loadTasks() {
    try {
      const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  }
  function saveTasks() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  }
  function message(text, success = false) {
    $("form-message").textContent = text;
    $("form-message").className = success ? "form-message success" : "form-message";
  }
  function resetForm() {
    form.reset();
    $("task-id").value = "";
    $("form-heading").textContent = "Cadastrar tarefa";
    $("submit-button").textContent = "Salvar tarefa";
    $("cancel-edit").classList.add("hidden");
    message("");
  }
  function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, (char) => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
    })[char]);
  }
  function statusClass(status) {
    return status === "Concluída" ? "status-concluida" :
      status === "Em andamento" ? "status-andamento" : "status-pendente";
  }
  function render() {
    const query = $("search").value.trim().toLocaleLowerCase("pt-BR");
    const statusFilter = $("filter-status").value;
    const visible = tasks.filter((task) => {
      const matchesQuery = `${task.title} ${task.assignee}`.toLocaleLowerCase("pt-BR").includes(query);
      return matchesQuery && (!statusFilter || task.status === statusFilter);
    });
    $("total-count").textContent = tasks.length;
    $("pending-count").textContent = tasks.filter(t => t.status === "Pendente").length;
    $("done-count").textContent = tasks.filter(t => t.status === "Concluída").length;
    $("visible-count").textContent = `${visible.length} ${visible.length === 1 ? "tarefa" : "tarefas"}`;

    if (!visible.length) {
      list.innerHTML = `<div class="empty-state"><span>✓</span><strong>${tasks.length ? "Nenhum resultado encontrado" : "Nenhuma tarefa por aqui"}</strong><p>${tasks.length ? "Tente alterar a busca ou o filtro." : "Cadastre sua primeira atividade ao lado."}</p></div>`;
      return;
    }
    list.innerHTML = visible.map(task => `
      <article class="task-card" data-id="${escapeHtml(task.id)}">
        <div>
          <h3 class="task-title">${escapeHtml(task.title)}</h3>
          ${task.description ? `<p class="task-description">${escapeHtml(task.description)}</p>` : ""}
          <div class="task-meta">
            <span>Responsável: ${escapeHtml(task.assignee)}</span>
            <span>Vencimento: ${escapeHtml(TaskCore.formatDate(task.dueDate))}</span>
            <span class="status ${statusClass(task.status)}">${escapeHtml(task.status)}</span>
          </div>
          <label class="sr-only" for="status-${escapeHtml(task.id)}">Alterar status de ${escapeHtml(task.title)}</label>
          <select class="inline-status" id="status-${escapeHtml(task.id)}" data-action="status" data-id="${escapeHtml(task.id)}" aria-label="Alterar status">
            ${TaskCore.STATUSES.map(s => `<option ${task.status === s ? "selected" : ""}>${s}</option>`).join("")}
          </select>
        </div>
        <div class="task-actions">
          <button class="icon-button" type="button" data-action="edit" data-id="${escapeHtml(task.id)}">Editar</button>
          <button class="icon-button delete" type="button" data-action="delete" data-id="${escapeHtml(task.id)}">Excluir</button>
        </div>
      </article>`).join("");
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const raw = {
      title: $("title").value,
      description: $("description").value,
      assignee: $("assignee").value,
      dueDate: $("dueDate").value,
      status: $("status").value
    };
    const result = TaskCore.validateTask(raw);
    if (!result.valid) {
      message(result.errors.join(" "));
      return;
    }
    const id = $("task-id").value;
    if (id) {
      const index = tasks.findIndex(t => t.id === id);
      if (index !== -1) tasks[index] = { ...tasks[index], ...result.task };
      message("Tarefa atualizada com sucesso.", true);
    } else {
      tasks.unshift({ id: (crypto.randomUUID ? crypto.randomUUID() : String(Date.now())), ...result.task, createdAt: new Date().toISOString() });
      message("Tarefa cadastrada com sucesso.", true);
    }
    saveTasks();
    render();
    resetForm();
  });

  list.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-action]");
    if (!button) return;
    const task = tasks.find(t => t.id === button.dataset.id);
    if (!task) return;
    if (button.dataset.action === "edit") {
      $("task-id").value = task.id;
      $("title").value = task.title;
      $("description").value = task.description;
      $("assignee").value = task.assignee;
      $("dueDate").value = task.dueDate;
      $("status").value = task.status;
      $("form-heading").textContent = "Editar tarefa";
      $("submit-button").textContent = "Salvar alterações";
      $("cancel-edit").classList.remove("hidden");
      message("");
      $("title").focus();
    }
    if (button.dataset.action === "delete") {
      if (!confirm(`Deseja excluir a tarefa "${task.title}"?`)) return;
      tasks = tasks.filter(t => t.id !== task.id);
      saveTasks();
      render();
      if ($("task-id").value === task.id) resetForm();
    }
  });

  list.addEventListener("change", (event) => {
    if (event.target.matches('select[data-action="status"]')) {
      const task = tasks.find(t => t.id === event.target.dataset.id);
      if (!task || !TaskCore.STATUSES.includes(event.target.value)) return;
      task.status = event.target.value;
      saveTasks();
      render();
    }
  });
  $("cancel-edit").addEventListener("click", resetForm);
  $("search").addEventListener("input", render);
  $("filter-status").addEventListener("change", render);
  render();
})();
