describe('MySuite', () => {

    it('Capture Screenshots And Videos', () => {
        cy.visit('https://demo.opencart.com/')
        // cy.screenshot('HomePage')
        // cy.wait(2000)
        // cy.get('[title="Your Store"]').screenshot('Logo')

        // Automatically capture screenshots and videos for all tests - only when you execute the test from the command line
        cy.wait(5000)
        cy.get(':nth-child(7) > .nav-link').click() // Cameras
        cy.get('h2').should('have.text', 'Tables') // Assertion to fail
    })

})
    // Run this test from the command line
    // npx cypress run --spec cypress/e2e/CaptureScreenshotsAndVideos.cy.js
    // The screenshots and videos will be saved in the cypress/screenshots and cypress/videos directories respectively.
