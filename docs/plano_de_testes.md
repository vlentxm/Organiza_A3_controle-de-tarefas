# Plano de Testes — Organiza

## 1. Objetivo
Verificar se o Sistema de Controle de Tarefas atende às funcionalidades do projeto acadêmico: cadastrar, listar, editar, excluir e alterar status das tarefas, mantendo os dados após recarregar a página.

## 2. Escopo
**Incluído:** validação de campos obrigatórios; cadastro; listagem; edição; exclusão; alteração de status; pesquisa e filtro implementados; persistência no LocalStorage; testes automatizados das regras centrais; testes exploratórios de pesquisa e vencimento.

**Fora do escopo:** autenticação, múltiplos usuários, sincronização em nuvem, backend e banco de dados remoto.

## 3. Dados mínimos
Cada tarefa contém título, descrição, responsável, data de vencimento e status. Na implementação, título, responsável e data são obrigatórios; descrição é opcional. Status disponíveis: Pendente, Em andamento e Concluída.

## 4. Estratégia
- **Caixa preta:** validar entradas e saídas sem considerar a implementação interna.
- **Caixa branca:** analisar condições de validação e caminhos relevantes do código.
- **Funcional:** executar cadastro, listagem, edição, exclusão e alteração de status.
- **Integração:** verificar interação entre formulário, lista, filtros e LocalStorage.
- **Regressão:** reexecutar cenários após eventual correção.
- **Automação:** executar `npm test` na raiz do projeto.

## 5. Ambiente
- Sistema operacional: Windows 11.
- Navegador: Google Chrome.
- Node.js: v26.13.1.
- npm: 11.20.0.
- Data: 26/11/2026.

## 6. Critérios de entrada e saída
**Entrada:** aplicação aberta sem erro impeditivo e ambiente disponível.

**Saída:** casos planejados executados; resultados registrados; evidências disponíveis; limitações exploratórias documentadas; testes automatizados executados.

## 7. Riscos e limitações
Os dados são armazenados localmente no navegador. Limpar os dados do navegador remove os registros. A aplicação não possui autenticação, backend ou compartilhamento entre dispositivos. A persistência testada refere-se às tarefas; a seleção do filtro não é preservada após recarregar a página, e isso não foi considerado falha porque não é requisito expresso no enunciado.
