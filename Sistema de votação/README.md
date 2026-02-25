# 🗳️ Voting System: Secure & Scalable Election Platform

Este repositório contém um sistema de votação robusto, desenvolvido para garantir integridade, transparência e agilidade no processamento de votos. O projeto foi estruturado para atender tanto requisitos acadêmicos quanto desafios técnicos de alto nível.

---

## 🚀 Funcionalidades Principais

1.  **Gestão de Candidatos:** Cadastro, edição e visualização dos participantes do pleito.
2.  **Autenticação de Eleitores:** Sistema de validação para garantir que cada eleitor vote apenas uma vez.
3.  **Processamento em Tempo Real:** Apuração dos votos com atualização imediata dos resultados.
4.  **Relatórios de Auditoria:** Geração de logs e arquivos JSON para conferência da integridade da urna.
5.  **Interface Responsiva:** Visual otimizado para diferentes dispositivos (Desktop e Mobile).

---

## 📸 Visual do Sistema

### 🌐 Fluxo de Votação
Veja como o sistema processa as informações desde o clique até a persistência no banco.
![Workflow do Sistema](IMG/workflow-votação.png)

### 📊 Dashboard de Resultados
| Painel do Administrador | Comprovante de Voto |
| :---: | :---: |
| ![Dashboard](IMG/dashboard.png) | ![Comprovante](IMG/comprovante.png) |

---

## 🛠️ Tecnologias Utilizadas

* **Linguagem:** JavaScript (Node.js) para o backend e lógica de processamento.
* **Banco de Dados:** Estrutura baseada em arquivos JSON para persistência rápida e portabilidade.
* **Interface:** HTML5/CSS3 com foco em UX (User Experience).
* **Versionamento:** Git para controle de histórico e colaboração.

---

## 📂 Estrutura de Pastas

* **`bot/`**: Scripts de automação para testes de estresse (simulação de milhares de votos simultâneos).
* **`json/`**: Armazenamento dos dados de candidatos e o "livro de votos" (ledger).
* **`IMG/`**: Documentação visual e capturas de tela das interfaces.
* **`src/`**: Código-fonte principal da aplicação.

---

## 📦 Como Instalar e Rodar

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/SEU_USUARIO/NOME_DO_REPO.git](https://github.com/SEU_USUARIO/NOME_DO_REPO.git)
    ```
2.  **Acesse a pasta do projeto:**
    ```bash
    cd NOME_DO_REPO
    ```
3.  **Instale as dependências (se houver):**
    ```bash
    npm install
    ```
4.  **Inicie o sistema:**
    ```bash
    npm start
    ```

---

## ⚖️ Licença

Este projeto está sob a licença MIT. Sinta-se livre para usar, estudar e modificar.

---
🚀 *Desenvolvido para transformar processos democráticos através da tecnologia.*
