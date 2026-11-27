# Organiza — Sistema de Controle de Tarefas

Mini projeto acadêmico de Garantia da Qualidade de Software.

## 1. Requisitos
- Navegador atualizado.
- Node.js (somente para executar os testes automatizados).

## 2. Executar a aplicação
1. Extraia a pasta do projeto.
2. Abra "app/index.html" no navegador.
3. Cadastre tarefas pelo formulário. Os dados ficam salvos no LocalStorage do navegador utilizado.

Não é necessário backend, banco de dados ou instalação de dependências.

## 3. Funcionalidades
- Cadastrar tarefa com título, descrição, responsável, data de vencimento e status.
- Listar tarefas.
- Editar e excluir tarefas.
- Alterar status entre Pendente, Em andamento e Concluída.
- Pesquisar por título ou responsável e filtrar por status.
- Persistir os registros no LocalStorage.

## 4. Executar testes automatizados
Na raiz do projeto, execute:
```bash
npm test
```
Ou, sem instalar pacotes:
```bash
node --test tests/task-core.test.js


## 5. Estrutura
- app: aplicação web.
- tests: testes automatizados da validação e formatação.
- docs: plano, casos de teste e registro de defeitos.

## 6. Evidências e documentação
A pasta "docs" contém plano de testes, casos executados, registro de limitações exploratórias e relatório final. A pasta "evidencias" reúne capturas reais fornecidas durante a execução.
