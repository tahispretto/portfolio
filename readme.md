# Portfolio de Testes e Automação

Bem-vindo ao meu portfólio! Este repositório contém uma coleção de projetos, scripts e exemplos de testes de software que desenvolvi ao longo da minha jornada como Analista de Testes. Aqui, compartilho as habilidades e ferramentas que venho aprendendo, incluindo automação de testes, integração contínua, práticas de qualidade de software e muito mais.

## Sobre Mim

Sou **Tahis**, analista de testes de software atualmente com foco em automação. Trabalho na área de qualidade e testes a mais ou menos 5 anos, ajudando a garantir que as soluções entregues sejam confiáveis e funcionais, utilizando diversas ferramentas e práticas de qualidade, como testes manuais, testes automatizados, integração contínua (CI) e pipelines de CI/CD.

Atualmente, busco aprender mais sobre ferramentas de automação de testes e aprofundar meu conhecimento nas práticas ágeis de desenvolvimento de software.

**Minhas principais habilidades incluem:**
- **Testes Funcionais e Não Funcionais**: Desenvolvimento de scripts e execução de testes manuais e automatizados para garantir o funcionamento correto das aplicações.
- **Ferramentas de Automação de Testes**:
  - **Selenium**: Automação de testes de interface (UI) e integração com outras ferramentas de CI/CD.
  - **Cypress**: Implementação de testes de ponta a ponta (E2E) e integração com sistemas de CI.
  - **K6**: Automação de testes de carga e desempenho para APIs.
  - **Jenkins**: Criação de pipelines de CI/CD e geração de relatórios.
  - **Postman/Newman**: Testes de APIs RESTful, validação de endpoints e integração com pipelines automatizados.
- **Azure DevOps**: Planejamento e execução de testes utilizando Azure Test Plan, além da gestão de casos de teste e planos de teste.

**Metodologias e Práticas Ágeis:**
- **Scrum e Kanban**: Colaboração em equipes ágeis, utilizando essas metodologias para realizar entregas contínuas de software de alta qualidade.
- **Test-Driven Development (TDD)**: Aplicação de práticas de desenvolvimento orientado a testes para garantir a qualidade do código desde o início.
- **Continuous Integration/Continuous Deployment (CI/CD)**: Integração de testes automatizados nas pipelines de CI/CD, assegurando que o código seja testado continuamente e sem erros.

## Projetos

Este repositório contém os seguintes projetos:

### 1. **Testes de API com Postman e Newman**
- **Objetivo:** Automatizar e validar APIs RESTful para garantir que os endpoints funcionem conforme esperado.
- **Ferramentas:** Postman, Newman, Jenkins (CI/CD).
- **Descrição:** Testes automatizados realizados com o Postman, executados via Newman para integração em Jenkins, com validação de respostas de endpoints e verificação de comportamentos esperados.

### 2. **Automação de Testes E2E com Cypress**
- **Objetivo:** Garantir que as interfaces e interações de usuário funcionem corretamente em diversas páginas e fluxos de um sistema web.
- **Ferramentas:** Cypress, Jenkins.
- **Descrição:** Scripts de testes automatizados para simular ações do usuário e garantir a estabilidade da aplicação. A execução desses testes é automatizada dentro de uma pipeline Jenkins para facilitar os testes contínuos.

### 3. **Testes de Desempenho com K6**
- **Objetivo:** Validar a performance de APIs e sistemas sob carga.
- **Ferramentas:** K6.
- **Descrição:** Utilização do K6 para realizar testes de carga e gerar relatórios de desempenho, simulando um número elevado de requisições para verificar como a API ou sistema lida com o tráfego.

### 4. **Automação de Testes de Interface com Selenium**
- **Objetivo:** Automatizar a interação com páginas web, garantindo que as funcionalidades críticas da aplicação sejam testadas constantemente.
- **Ferramentas:** Selenium, Jenkins.
- **Descrição:** Testes de automação utilizando Selenium WebDriver para simular interações em uma aplicação web. Os testes são executados automaticamente sempre que há alterações no código, através da integração com Jenkins.

### 5. **Gestão de Testes com Azure DevOps**
- **Objetivo:** Criar planos de testes, definir casos de teste e integrá-los ao processo de desenvolvimento ágil no Azure DevOps.
- **Ferramentas:** Azure Test Plan, Excel.
- **Descrição:** Organização e execução de testes no Azure DevOps, com gestão de casos de teste e planos de teste para projetos de sistemas como TMS, ERP e e-commerce.


## Como Rodar os Projetos

Cada projeto contém arquivos de configuração e exemplos de testes. Para começar a usar, siga os passos abaixo:

1. **Clone este repositório:**
   ```bash
   git clone https://github.com/SeuUsuario/Portfolio.git

Instale as dependências (para projetos que requerem Node.js): Navegue até o diretório do projeto e execute

2. **Execução dos Testes:**

2.1. Para Cypress:
npx cypress open  - executando em tempo real
 npx cypress run - executando criando logs, imagens e vídeo

2.2. Para Newman (Postman):
 newman run <caminho-do-arquivo-postman>.json

2.3. para K6:
 k6 run <caminho-do-script>.js

--

3. **Verificação dos Relatórios:**
Após a execução dos testes, os relatórios de execução de testes serão gerados nas pastas apropriadas, como allure-results (para Allure Reports) ou diretamente no console (para Postman/Newman, K6, etc.).

Exemplos de onde os relatórios podem ser encontrados:

Relatórios do Allure em allure-results/
Relatórios do Postman/Newman em postman-report.html
Relatórios de K6 em k6-load-test-report.json