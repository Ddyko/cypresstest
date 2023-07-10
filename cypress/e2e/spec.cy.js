describe('User Login using the correct credentials', () => {
  it('Given user is already in login page', () => {
    cy.visit('https://secondhand-store.herokuapp.com/')

    cy.contains('Masuk').click()
  })
})