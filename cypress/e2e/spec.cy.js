describe('My API page tests', () => {
  it('Requests my CRC API endpoint', () => {
    // Requests API page
    cy.request('https://tomx98y9ib.execute-api.us-east-1.amazonaws.com/prod')
    //cy.contains('count')
    // cy.get('#idgoeshere').should('be.gt', 100)
  })
})

describe('My CRC webpage tests', () => {
  it('Visits my CRC webpage', () => {
    // visits crc webpage
    cy.visit('https://crc.omarbutt.net')
    // looks for a few key words
    //cy.contains('CRC')
    cy.contains('Experience')
    cy.contains('Skills')
    cy.contains('Certifications')
    cy.contains('Education')
    cy.contains('References')
    // cy.contains('You are visitor').should('be.visible')
    // cy.get('#idgoeshere').should('be.gt', 100) 
  })
})