# Other Tools

Este diretório agrupa exemplos e configurações de ferramentas que eu utilizo no meu dia a dia, assim engloba o processo de testes e automação, otimizando o desenvolvimento e o gerenciamento de projetos.
As ferramentas abordadas são amplamente utilizadas na criação de pipelines, testes de desempenho, gestão de planos de teste e automação de tarefas.

Cada subdiretório ou arquivo contém materiais que são utilizados como base prática que pode ser adaptados e utilizados em diversos projetos.

---

## Conteúdo

### 1. **Docker**
- **Objetivo:** Prover ambientes isolados para execução de testes ou sistemas.
- **Conteúdo:**  
  - `Dockerfile`: Define a configuração do ambiente para criar a imagem Docker.
  - `docker-compose.yml`: Configuração para orquestração de múltiplos containers.
- **Exemplos de uso:**
  - Construção de imagens para rodar aplicações de teste.
  - Configuração de um ambiente multi-serviço para testes de integração.

---

### 2. **K6**
- **Objetivo:** Realizar testes de carga e desempenho em APIs ou sistemas.
- **Conteúdo:**
  - `load-test-script.js`: Script K6 configurado para simular usuários simultâneos e medir tempos de resposta.
- **Exemplos de execução:**
  - `k6 run load-test-script.js`: Para executar o teste localmente.
  - `k6 cloud load-test-script.js`: Para enviar os testes para a nuvem (K6 Cloud).

---

### 3. **Jenkins com Allure Reports**
- **Objetivo:** Criar pipelines de CI/CD e integrar relatórios visuais de testes com o Allure.
- **Conteúdo:**
  - `Jenkinsfile`: Script declarativo para configurar o pipeline no Jenkins.
  - Diretório `allure-results`: Contém exemplos de resultados de testes que podem ser renderizados com o Allure.
- **Exemplos:**
  - Configuração de etapas no Jenkins para build, teste e geração de relatórios.
  - Integração com Selenium ou Cypress para automação de testes.

---

### 4. **Postman e Newman**
- **Objetivo:** Automatizar e gerenciar testes de APIs.
- **Conteúdo:**
  - `PostmanCollection.json`: Uma coleção de APIs organizadas para testes funcionais.
  - `EnvironmentVariables.json`: Configurações de ambiente (URLs, tokens, etc.).
- **Exemplos de execução:**
  - `newman run PostmanCollection.json -e EnvironmentVariables.json`: Executa a coleção usando Newman no terminal.

---

### 5. **Azure Test Plan**
- **Objetivo:** Exemplificar como estruturar e importar planos e casos de teste no Azure Test Plan.
- **Conteúdo:**
  - **Casos de Teste**
    - `Casos_de_Teste_TMS.csv`: Casos de teste para um sistema de gerenciamento de transporte (TMS).
    - `Casos_de_Teste_ERP.csv`: Casos de teste para um sistema ERP.
    - `Casos_de_Teste_Ecommerce.csv`: Casos de teste para um sistema de e-commerce.
  - **Planos de Teste**
    - `Planos_de_Teste_TMS.csv`: Planos de teste para funcionalidades de um TMS.
    - `Planos_de_Teste_ERP.csv`: Planos de teste para processos de ERP.
    - `Planos_de_Teste_Ecommerce.csv`: Planos de teste para um e-commerce.
- **Importação para Azure:**
  - Navegue até o Azure Test Plan, selecione a opção de importar e escolha o arquivo CSV.

---

## Como Navegar

1. Abra o subdiretório ou arquivo correspondente à ferramenta que deseja explorar.
2. Leia os comentários nos scripts ou os conteúdos dos arquivos para entender como utilizá-los.

---
