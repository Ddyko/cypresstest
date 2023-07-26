export class AllPage {
    openWeb() {
        cy.visit('https://secondhand-store.herokuapp.com/')
    }

    openLogin() {
        cy.visit('https://secondhand-store.herokuapp.com/login')
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
}