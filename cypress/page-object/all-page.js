export class AllPage {
    openWeb() {
        cy.visit('https://secondhand-store.herokuapp.com/')
    }

    openLogin() {
        cy.visit('https://secondhand-store.herokuapp.com/login')
    }

    openRegister() {
        cy.visit('https://secondhand-store.herokuapp.com/signup')
    }

    validRegisterPage() {
        cy.get('strong').should('have.text', 'Daftar')
        cy.get('#inputAddress').should('not.contain.text')
        cy.get('#exampleInputEmail1').should('not.contain.text')
        cy.get('input[id="exampleInputPassword1 "]').should('not.contain.text')
    }

    validLoginPage() {
        cy.get('strong').should('have.text', 'Masuk')

        cy.get('#exampleInputEmail1').should('not.contain.text')

        cy.get('input[id="exampleInputPassword1 "]').should('not.contain.text')
    }

    inputEmail() {
        cy.get('#exampleInputEmail1').type('andiko.gunawan@gmail.com')
    }

    inputPassword() {
        cy.get('input[id="exampleInputPassword1 "]').type('12345678')
    }

    wrongEmail() {
        cy.get('#exampleInputEmail1').type('asd@xyz.com')
    }

    wrongPassword() {
        cy.get('input[id="exampleInputPassword1 "]').type('aijsdiasjdi')
    }

    userLogin() {
        cy.visit('https://secondhand-store.herokuapp.com/login')
        cy.get('#exampleInputEmail1').type('andiko.gunawan@gmail.com')
        cy.get('input[id="exampleInputPassword1 "]').type('12345678')
        cy.get('button').click()
        cy.get('#user').should('be.visible')
        cy.get('#notification').should('be.visible')
        cy.get('.nav-link').should('be.visible')
    }
}