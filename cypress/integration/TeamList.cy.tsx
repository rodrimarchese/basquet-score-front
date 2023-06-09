import React from 'react'
import TeamList from '../../src/TeamList'

describe('<TeamList />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<TeamList />)
  })
  Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })
})