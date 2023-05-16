import React from 'react'
import DropdownSelectPlayer from '../../src/DropdownSelectPlayer'

describe('<DropdownSelectPlayer />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<DropdownSelectPlayer />)
  })
  Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })
})