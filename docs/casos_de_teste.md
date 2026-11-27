# Casos de Teste — Organiza

**Projeto:** Sistema de Controle de Tarefas (Organiza)  
**Data:** 26/11/2026  
**Ambiente:** Windows 11; Google Chrome; Node.js v26.13.1; npm 11.20.0.

Os casos CT01 a CT09 foram executados manualmente. Os resultados abaixo refletem as execuções e confirmações feitas durante a sessão.

| ID | Cenário / procedimento | Resultado esperado | Resultado observado | Status |
|---|---|---|---|---|
| CT01 | Cadastrar tarefa válida | Tarefa aparece na lista e total aumenta | Tarefa cadastrada e exibida | Aprovado |
| CT02 | Alterar status para Concluída | Status e indicadores são atualizados | Status passou para Concluída e indicadores foram atualizados | Aprovado |
| CT03 | Pesquisar por responsável e por termo inexistente | Exibir registros correspondentes e estado vazio quando não houver correspondência | Pesquisa encontrou o responsável e exibiu estado vazio para termo inexistente | Aprovado |
| CT04 | Cadastrar segunda tarefa para outro responsável e pesquisar os registros | Registros correspondentes devem ser localizados separadamente | Tarefas de Iury e João foram localizadas separadamente; ao limpar a busca, ambas apareceram | Aprovado |
| CT05 | Filtrar tarefas por status | Exibir somente tarefas do status escolhido | Filtro Em andamento exibiu somente a tarefa correspondente | Aprovado |
| CT06 | Editar tarefa existente | Dados alterados aparecem na listagem | Título e descrição foram atualizados; demais dados foram mantidos | Aprovado |
| CT07 | Excluir tarefa | Tarefa deixa de aparecer na lista | Tarefa foi removida | Aprovado |
| CT08 | Cadastrar sem título, mantendo os demais campos obrigatórios | Exibir validação e não cadastrar | Mensagem “Informe o título da tarefa.”; cadastro impedido | Aprovado |
| CT09 | Recarregar página após cadastrar tarefas | Tarefas continuam armazenadas e visíveis | Após Ctrl+R, tarefa permaneceu na lista com dados e status | Aprovado |

## Testes exploratórios adicionais

| ID | Cenário | Resultado observado | Interpretação |
|---|---|---|---|
| EXP01 | Pesquisar por “João” e depois por “Joao” | “João” encontrou a tarefa; “Joao” não encontrou | Comportamento reproduzível, registrado como BUG01. |
| EXP02 | Pesquisar usando somente um espaço | As três tarefas foram exibidas | Aprovado. |
| EXP03 | Cadastrar tarefa com vencimento em 01/01/2025 e alterar o status | Tarefa foi aceita e permaneceu Pendente/Em andamento, sem sinalização visual de atraso | Comportamento reproduzível, registrado como BUG02. |
| EXP04 | Atualizar a página com filtro Em andamento selecionado | Tarefas foram preservadas, mas o filtro voltou para Todos os status | Observado; não classificado como defeito porque persistência do filtro não é requisito expresso. |

## Testes automatizados

Comando executado na raiz do projeto: `npm test`.

- Testes executados: 8
- Aprovados: 8
- Reprovados: 0
- Aprovação: 100%

A captura do terminal está em `evidencias/TA01_resultado_8_testes_automatizados.png`.

## Evidências

A pasta `evidencias/` contém capturas reais fornecidas durante a execução. Nem todos os casos manuais possuem uma captura individual nesta versão do pacote; os resultados foram registrados com base nas execuções e confirmações realizadas.
