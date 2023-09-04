/// <reference types="cypress" />

import { AllPage } from "../page-object/all-page"

const allPage = new AllPage()

describe('User want to see detail of product in homepage', () => {
    it('Given user already logged in', () => {
        allPage.userLogin()
    })

    it('When user click on product', () => {
        cy.get('.products > :nth-child(1)').click()
    })
    
    it('Then user can see product details', () => {
        cy.get('.col-md-6 > .card > .card-body > .card-text').should('not.be.empty')
        cy.get('.col-md-6 > .card > .card-body > .card-text').should('not.be.empty')
        cy.get('.col-md-6 > .card > .card-body > .card-text').should('not.be.empty')
        cy.get('.col-md-6 > .card > .card-body > .card-text').should('not.be.empty')
    })
})