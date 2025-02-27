describe('My First Test', () => {
    it('Verify title-positive', () => {
cy.visit("https://opensource-demo.orangehrmlive.com/")
      cy.title().should('eq','OrangeHRM')
    })

    it('Verify title-negative test', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/")
              cy.title().should('eq','OrangeHRM123')
            })
  })

  // Run the test using the following command:
  // npx cypress run --spec cypress/e2e/MyFirstTest.cy.js
  // The test results will be displayed in the terminal. to generate html report 