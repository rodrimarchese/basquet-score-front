describe('Navigation Test', () => {
  it('Mounts', () => {
    cy.visit('http://localhost:5173')
    cy.contains('Create Player').click()
    cy.url().should('include', '/create-player');
  })
  it('Navigates to Create Player', () => {
    cy.visit('http://localhost:5173')
    cy.contains('Create Player').click()
    cy.url().should('include', '/create-player');
  })
  it('Navigates to Create Team', () => {
    cy.visit('http://localhost:5173')
    cy.contains('Create Team').click()
    cy.url().should('include', '/create-team');
  })
  it('Navigates to Start Game', () => {
    cy.visit('http://localhost:5173')
    cy.contains('Create Team').click()
    cy.url().should('include', '/create-team');
  })
  it('Navigates to Create Team and Back Button Works', () => {
    cy.visit('http://localhost:5173')
    cy.contains('Create Team').click()
    cy.url().should('include', '/create-team');
    cy.contains('Back').click()
    cy.url().should('eq', 'http://localhost:5173/');
  })
  it('Navigates to Create Player and Back Button Works', () => {
    cy.visit('http://localhost:5173')
    cy.contains('Create Player').click()
    cy.url().should('include', '/create-player');
    cy.contains('Back').click()
    cy.url().should('eq', 'http://localhost:5173/');
  })
  it('Navigates to Start Game and Back Button Works', () => {
    cy.visit('http://localhost:5173')
    cy.contains('Start Game').click()
    cy.url().should('include', '/start-game');
    cy.contains('Back').click()
    cy.url().should('eq', 'http://localhost:5173/');
  })

})