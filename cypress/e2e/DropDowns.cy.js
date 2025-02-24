describe("Handle dropDowns", () => {
    it.skip('Dropdown with select', () => {
        cy.visit('https://www.zoho.com/commerce/free-demo.html')
        cy.get('#zcf_address_country').select('India').should('have.value', 'India')
    })
    it.skip('Dropdown without select', () => {
        cy.visit('https://www.dummyticket.com/dummy-ticket-for-visa-application/')
        cy.get('#select2-billing_country-container').click()
        cy.get('.select2-search__field').type('Italy{enter}')
        cy.get('#select2-billing_country-container').should('have.text', 'Italy')
    })
    it.skip('Auto select Dropdown', () => {
        cy.visit('https://www.wikipedia.org/')
        cy.get('#searchInput[name="search"]').type('Delhi')
        cy.get('.suggestion-text').contains('Delhi University').click()
    })
    it('Dynamic select Dropdown', () => {
        cy.visit('https://www.google.ca/')
        cy.get('[title="Search"]').type('Cypress automation')
        cy.wait(3000)
        // total number of dropdowns
        cy.get('div.wM6W7d>span').should('have.length', 13)
        // iterate over the dropdown and select the value
        cy.get('div.wM6W7d>span').each(($el, index, $list) => { // $list is the list of all the elements -index is the index of the element
            if ($el.text() === 'cypress automation tutorial') {
                cy.wrap($el).click()
            }
        })
        cy.get('[title="Search"]').should('have.value', 'cypress automation tutorial')
    })
})