/// <reference types="cypress" />

import { AllPage } from "../page-object/all-page"

const allPage = new AllPage()

function userID_Alpha() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    for (var i = 0; i < 10; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
  }

function userID_Alpha_Numeric() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 10; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
  }

describe('User want to register an account', () => {
    it('Given user already open the register page', () => {
        allPage.openRegister()
        allPage.validRegisterPage()
    })

    it('When user input name', () => {
        cy.get('#inputAddress').type(userID_Alpha())
    })

    it('And user input unregistered email', () => {
        cy.get('#exampleInputEmail1').type(userID_Alpha_Numeric()+'@gmail.com')
    })

    it('And user input correct format password and pressed the daftar button', () => {
        allPage.inputPassword()
        cy.get('.btn').click()
    })

    it('Then user gets asked to verify account', () => {
        cy.get('.alert > strong').should('contain.text','Silahkan verifikasi email agar dapat menggunakan layanan kami')
    })
})

describe('User want to register an account using an already registered email', () => {
  it('Given user already open the register page', () => {
      allPage.openRegister()
      allPage.validRegisterPage()
  })

  it('When user input name', () => {
      cy.get('#inputAddress').type(userID_Alpha())
  })

  it('And user input registered email', () => {
      cy.get('#exampleInputEmail1').type('andiko.gunawan@gmail.com')
  })

  it('And user input correct format password and pressed the daftar button', () => {
      allPage.inputPassword()
      cy.get('.btn').click()
  })

  it('Then user gets email already registered alert', () => {
      cy.get('.alert > strong').should('contain.text','Email sudah digunakan')
  })
})

describe('User want to register using an invalid format email', () => {
    it('Given user already in register page', () => {
        allPage.openRegister()
        allPage.validRegisterPage()
    })
    it('When user input name', () => {
        cy.get('#inputAddress').type(userID_Alpha())
    })

    it('User input invalid format email', () => {
        cy.get('#exampleInputEmail1').type('.com@@')
    })

    it('And user input correct format password and pressed the daftar button', () => {
        allPage.inputPassword()
        cy.get('.btn').click()
    })

    it('Then user will stay in register page', () => {
        cy.get('strong').should('have.text', 'Daftar')
    })
})