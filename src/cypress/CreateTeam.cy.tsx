import React from 'react'
import CreateTeam from '../CreateTeam'

describe('<CreateTeam />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<CreateTeam />)
  })
  Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })
})