describe('MyTestSuite', ()=> {
    // Hooks
    // before  -> once before all tests
    // after -> once after all tests
    // beforeEach -> before each test
    // afterEach -> after each test

    // Tags
    // skip -> skip the test
    // only -> run only this test

    before(()=> {
        cy.log('----Lunch application----')
    })

    after(()=> {
        cy.log('----Close application----')
    })

    beforeEach(()=> {
        cy.log('----Login application----')
    })

    afterEach(()=> {
        cy.log('----Logout application----')
    })

    it('search', ()=> {
        cy.log('search')
    })

    it.skip('advancedSearch', ()=> {
        cy.log('advancedSearch')
    })

    it.only('listing products', ()=> {
        cy.log('listing products')
    })
})