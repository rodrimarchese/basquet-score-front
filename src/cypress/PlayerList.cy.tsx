import React from 'react'
import PlayerList from '../PlayerList'

describe('<PlayerList />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<PlayerList />)
  })
  Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })
})