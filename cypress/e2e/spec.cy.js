/// <reference types="cypress" />

import { AllPage } from "../page-object/all-page"

const allPage = new AllPage()

describe('User Login using the correct credentials', () => {
 

  it('Given user is already in login page', () => {

    allPage.openWeb()

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

  it('Then user successfully login', () => {
    
    cy.get('#user').should('have.id','user')

  });

})

describe('User unable to login using non registered email', () =>{
  it('Given user already in login page', () => {

    allPage.openLogin()

    allPage.validLoginPage()
  })

  it('When user input non registered email', () =>{

    allPage.wrongEmail()

  })

  it('And user input correct password', () =>{

    allPage.inputPassword()

  })

  it('And user click the Masuk Button', () =>{

    cy.get('button').click()

  })

  it('Then user gets account not found notification', () =>{

    cy.get('.alert').should('have.text', 'Akun tidak ditemukan×')

  })
})

describe('User wants to login using unverified email', () => {
    
  it('Given user already in login page', () => {
    allPage.openLogin()
    
    allPage.validLoginPage()
  })

  it('When user input unverified email and correct password', () =>{
    cy.get('#exampleInputEmail1').type('andiko@gmail.com')

    allPage.inputPassword()
  })

  it('And user press login button', () => {
    cy.get('button').click()
  })

  it('Then user will get notification to verify the email first', () => {
    cy.get('.alert').should('have.text', 'Silahkan cek email anda untuk melakukan verifikasi terlebih dahulu×')
  })
})

describe('User trying to login without filling the user field and password', ()=> {
  it('Given user already in login page', ()=>{
    allPage.openLogin()
    allPage.validLoginPage()
  })

  it('When user directly press the masuk button', ()=> {
    cy.get('button').click()
  })

  it('Then user will stay on the login page', ()=> {
    cy.get('strong').should('have.text', 'Masuk')
  })
})