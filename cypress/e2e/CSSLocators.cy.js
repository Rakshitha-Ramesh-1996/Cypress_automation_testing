
describe('CSS Locators', () => {
it("csslocators", () => {
cy.visit("http://www.automationpractice.pl/index.php")
cy.get("#search_query_top").type("T-shirts") // ID
cy.get('[name="submit_search"]').click() // attribute
cy.get('.lighter').contains('T-shirts') // class & Assertion
})
})