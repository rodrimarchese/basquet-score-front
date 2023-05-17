describe('template spec', () => {
  it('Create Team', () => {
    cy.visit('http://localhost:5173')
    cy.get('.MuiTabs-flexContainer > :nth-child(3)').click()
    cy.contains('Create Team').click()
    cy.url().should('include', '/create-team');
    cy.contains('Name')
        .invoke('attr', 'style', 'pointer-events: auto')
        .type('Example Team');
    cy.contains('Submit Team').click()
  })

  it('Create Player', () => {
    cy.visit('http://localhost:5173')
    cy.get('.MuiTabs-flexContainer > :nth-child(2)').click()
    cy.contains('Create Player').click()
    cy.url().should('include', '/create-player');
    cy.contains('Name')
        .invoke('attr', 'style', 'pointer-events: auto')
        .type('Example Name');
    cy.contains('Surname')
        .invoke('attr', 'style', 'pointer-events: auto')
        .type('Example surname');
    cy.contains('Position')
        .invoke('attr', 'style', 'pointer-events: auto')
        .type('Example Position');
    cy.contains('Shirt Number')
        .invoke('attr', 'style', 'pointer-events: auto')
        .type('15');
    cy.contains('Submit Player').click()
  })
  it('Start Game', () => {
    cy.visit('http://localhost:5173')
    cy.get('.MuiTabs-flexContainer > :nth-child(1)').click()
    cy.contains('Start Game').click()
    cy.url().should('include', '/start-game');
    cy.get(':nth-child(1) > .MuiInputBase-root > .MuiSelect-select').click()
    cy.get('[data-cy="option-3a0d3efd-d74b-4672-bf25-c6ca41119a61"]').click()
    cy.get(':nth-child(2) > .MuiInputBase-root > .MuiSelect-select').click()




  })
})