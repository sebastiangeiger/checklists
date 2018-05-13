describe('Landing Page', function () {
  it('exists', function () {
    cy.visit('http://localhost:3000')
      .get('body')
      .should('contain', "Welcome to React")
  })
})
