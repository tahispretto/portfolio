// Para rodar o projeto execute o comando npm install cypress --save-dev para instalar o cypress (já tendo o node.js)
// para abrir o projeto execute o comando npx cypress run para gerar os relatórios e logs e etc.

// Início do script de automação com Cypress para o site DemoQA
describe('DemoQA Test Suite', () => {

    // Antes de cada teste, acessa o site principal
    beforeEach(() => {
      cy.visit('https://demoqa.com/elements'); // Acessa a página inicial
    });
  
    // 1. Testar preenchimento do Text Box
    it('Should fill and validate the Text Box form', () => {
      cy.contains('Text Box').click(); // Navega até a seção "Text Box"
      cy.get('#userName').type('John Doe'); // Insere o nome no campo
      cy.get('#userEmail').type('johndoe@example.com'); // Insere o email no campo
      cy.get('#currentAddress').type('123 Main St'); // Insere o endereço atual
      cy.get('#permanentAddress').type('456 Secondary St'); // Insere o endereço permanente
      cy.get('#submit').click(); // Submete o formulário
      cy.get('#output').should('contain', 'John Doe') // Verifica a saída para o nome
        .and('contain', 'johndoe@example.com'); // Verifica a saída para o email
    });
  
    // 2. Seleção de Check Box
    it('Should select and validate a Check Box', () => {
      cy.contains('Check Box').click(); // Navega para a seção "Check Box"
      cy.get('.rct-checkbox').first().click(); // Seleciona o primeiro checkbox
      cy.get('.rct-node-selected').should('exist'); // Verifica se o nó foi selecionado
    });
  
    // 3. Seleção de Radio Button
    it('Should select a Radio Button and verify it', () => {
      cy.contains('Radio Button').click(); // Navega até "Radio Button"
      cy.get('label').contains('Yes').click(); // Seleciona a opção "Yes"
      cy.get('.text-success').should('contain', 'Yes'); // Verifica o texto de sucesso
    });
  
    // 4. Adição de itens na Web Table
    it('Should add a user to the Web Table', () => {
      cy.contains('Web Tables').click(); // Navega até "Web Tables"
      cy.get('#addNewRecordButton').click(); // Clica no botão de adicionar
      cy.get('#firstName').type('Jane'); // Preenche o nome
      cy.get('#lastName').type('Doe'); // Preenche o sobrenome
      cy.get('#userEmail').type('jane.doe@example.com'); // Preenche o email
      cy.get('#age').type('28'); // Preenche a idade
      cy.get('#salary').type('50000'); // Preenche o salário
      cy.get('#department').type('Engineering'); // Preenche o departamento
      cy.get('#submit').click(); // Salva o registro
      cy.get('.rt-tbody').should('contain', 'Jane'); // Verifica a presença do nome na tabela
    });
  
    // 5. Upload de arquivo
    it('Should upload a file', () => {
      cy.contains('Upload and Download').click(); // Navega até "Upload and Download"
      cy.get('#uploadFile').attachFile('exampleFile.txt'); // Faz o upload de um arquivo
      cy.get('#uploadedFilePath').should('contain', 'exampleFile.txt'); // Verifica o nome do arquivo carregado
    });
  
    // 6. Testar botões dinâmicos
    it('Should test Dynamic Buttons', () => {
      cy.contains('Buttons').click(); // Navega até "Buttons"
      cy.get('button').contains('Click Me').click(); // Clica no botão "Click Me"
      cy.get('#dynamicClickMessage').should('exist'); // Verifica a mensagem de clique
    });
  
    // 7. Interação com a Modal Dialog
    it('Should handle Modal Dialog', () => {
      cy.contains('Modal Dialogs').click(); // Navega para "Modal Dialogs"
      cy.get('#showSmallModal').click(); // Abre o modal pequeno
      cy.get('.modal-body').should('exist'); // Verifica o conteúdo do modal
      cy.get('#closeSmallModal').click(); // Fecha o modal
    });
  
    // 8. Preencher formulário de automação de prática
    it('Should fill Practice Form', () => {
      cy.contains('Practice Form').click(); // Navega até "Practice Form"
      cy.get('#firstName').type('John'); // Preenche o primeiro nome
      cy.get('#lastName').type('Doe'); // Preenche o sobrenome
      cy.get('#userEmail').type('johndoe@example.com'); // Preenche o email
      cy.get('#gender-radio-1').check({ force: true }); // Seleciona o gênero
      cy.get('#userNumber').type('1234567890'); // Preenche o número de telefone
      cy.get('#submit').click(); // Envia o formulário
      cy.get('.modal-content').should('exist'); // Verifica se o modal de sucesso aparece
    });
  
    // 9. Testar Drag and Drop
    it('Should perform Drag and Drop', () => {
      cy.contains('Droppable').click(); // Navega até "Droppable"
      cy.get('#draggable').trigger('dragstart'); // Inicia o drag
      cy.get('#droppable').trigger('drop'); // Solta o elemento
      cy.get('#droppable').should('contain', 'Dropped!'); // Verifica se o drop foi bem-sucedido
    });
  
    // 10. Selecionar opção de menu
    it('Should select an option from Menu', () => {
      cy.contains('Menu').click(); // Navega até "Menu"
      cy.get('#nav > :nth-child(2)').trigger('mouseover'); // Passa o mouse sobre o menu pai
      cy.contains('Sub Item').click(); // Clica no subitem
      // Não há verificação de sucesso porque este é apenas um clique
    });
  });
  