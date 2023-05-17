describe('Navigation Test', () => {
  it('Mounts', () => {
    cy.visit('http://localhost:5173')
  })
  it('Navigates to Create Player', () => {
    cy.visit('http://localhost:5173')
    cy.get('.MuiTabs-flexContainer > :nth-child(2)').click()
    cy.contains('Create Player').click()
    cy.url().should('include', '/create-player');
  })
  it('Navigates to Create Team', () => {
    cy.visit('http://localhost:5173')
    cy.get('.MuiTabs-flexContainer > :nth-child(3)').click()
    cy.contains('Create Team').click()
    cy.url().should('include', '/create-team');
  })
  it('Navigates to Start Game', () => {
    cy.visit('http://localhost:5173')
    cy.get('.MuiTabs-flexContainer > :nth-child(1)').click()
    cy.contains('Start Game').click()
    cy.url().should('include', '/start-game');
  })
  it('Navigates to Create Team and Back Button Works', () => {
    cy.visit('http://localhost:5173')
    cy.get('.MuiTabs-flexContainer > :nth-child(1)').click()
    cy.contains('Start Game').click()
    cy.url().should('include', '/start-game');
    cy.contains('Back').click()
    cy.url().should('eq', 'http://localhost:5173/');
  })
  it('Navigates to Create Player and Back Button Works', () => {
    cy.visit('http://localhost:5173')
    cy.get('.MuiTabs-flexContainer > :nth-child(2)').click()
    cy.contains('Create Player').click()
    cy.url().should('include', '/create-player');
    cy.contains('Back').click()
    cy.url().should('eq', 'http://localhost:5173/');
  })
  it('Navigates to Start Game and Back Button Works', () => {
    cy.visit('http://localhost:5173')
    cy.get('.MuiTabs-flexContainer > :nth-child(1)').click()
    cy.contains('Start Game').click()
    cy.url().should('include', '/start-game');
    cy.contains('Back').click()
    cy.url().should('eq', 'http://localhost:5173/');
  })

})