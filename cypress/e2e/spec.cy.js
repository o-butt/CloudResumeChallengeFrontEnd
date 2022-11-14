describe('My API page tests', () => {
  it('Requests my CRC API endpoint', () => {
    // Requests API page
    cy.request('https://ga82v3zdxf.execute-api.us-east-1.amazonaws.com/prod/GET')
  })
})

describe('My CRC webpage tests', () => {
  it('Visits my CRC webpage', () => {
    // visits crc webpage
    cy.visit('https://crc.omarbutt.net')
    // looks for a few key words
    cy.contains('Experience')
    cy.contains('Skills')
    cy.contains('Certifications')
    cy.contains('visitor')
  })
})