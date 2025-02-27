describe('Visitor can', () => {

  beforeEach(function () {
    cy.server();
    cy.route({
      method: 'POST',
      url: 'http://localhost:3002/api/v1/posts',
      response: 'fixture:create_post_no_success.json',
      status: 422,
    })
    cy.visit('http://localhost:3000')
    cy.get('#map-icon-plus').click()
    cy.get('#caption').type('This is a very long caption and i should get an error message if I write it in the caption field! This is a very long caption and i should get an error message if I write it in the caption field!')
    cy.get('#upload-button').click()
  })

  it('not create post if image is not uploaded and/or caption is over 140 characters long', () => {
    
    cy.contains('Your post could not be created since')
    cy.contains('Caption is too long (maximum is 140 characters)')
    cy.contains('You need to upload an image')
  })

  it('not continue creating post without closing error message', () => {
    cy.get('#caption').should('not.be.visible')
    cy.get('#upload-button').should('not.be.visible')
  })

  it('close error message and continue to create a post', () => {
    cy.get('#close-topsidebar-error').click()
    cy.get('#caption').type('This works fine!')
  })
})
