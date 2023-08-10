describe('User Login using the correct credentials', () => {
  it('Given user is already in login page', () => {
    cy.visit('https://secondhand-store.herokuapp.com/')

    cy.contains('Masuk').click()

  })

  it('When user inputnpm correct credential and press Masuk button', () => {
    
    cy.get('#exampleInputEmail1').type('andiko.gunawan@gmail.com'),

    cy.get('input[id="exampleInputPassword1 "]').type('12345678')

    cy.get('button').click()

  });
})