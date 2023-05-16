import React from 'react'
import CreatePlayer from '../CreatePlayer'

describe('<CreatePlayer />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<CreatePlayer />)
  })
  Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })
})