/// <reference types="cypress" />

describe('User Login using the correct credentials', () => {
  it('Given user is already in login page', () => {
    cy.visit('https://secondhand-store.herokuapp.com/')

    cy.contains('Masuk').click()

    cy.get('strong').should('have.text', 'Masuk')

    cy.get('#exampleInputEmail1').should('not.contain.text')

    cy.get('input[id="exampleInputPassword1 "]').should('not.contain.text')

  })  

  it('When user input correct credential and press Masuk button', () => {
    
    cy.get('#exampleInputEmail1', {timeout: 6000}).type('andiko.gunawan@gmail.com'),

    cy.get('input[id="exampleInputPassword1 "]').type('12345678')

    cy.get('button').click()

  });
})