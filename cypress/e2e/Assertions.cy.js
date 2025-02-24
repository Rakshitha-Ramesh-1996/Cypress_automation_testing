describe("Assertions demo", () => {

    it("Implicit assertions", () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    // cy.url().should("include", "index.php/auth/login")
    // cy.url().should("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    // cy.url().should("contain", "orangehrm")

    cy.url().should("include", "index.php/auth/login")
    .and("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    .and("contain", "orangehrm")
    .and("not.contain", "admin")

    cy.title().should("include", "Orange")
    .and("eq", "OrangeHRM")
    .and("contain", "HRM")

    cy.get('.orangehrm-login-branding > img').should("be.visible") // log visible
    .and('exist')
    cy.xpath("//a").should("have.length", 5) // 5 links

    cy.get('[name="username"]').type("Admin") // type
    cy.get('[name="username"]').should("have.value", "Admin") // check value
    cy.get('[name="password"]').type("admin123")
    })

    it("Explicit assertions", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get('[name="username"]').type("Admin") // type
        cy.get('[name="password"]').type("admin123")
        cy.get('[type="submit"]').click()

        let expName="oversoul_16 sabadilla 90";

        cy.get('.oxd-userdropdown-name').then((ele) => {
            let actName = ele.text();

            // BDD style
            expect(actName).to.not.equal(expName)
            expect(actName).to.eq(expName)
            

            // TDD style
            assert.equal(actName, expName)
            assert.notEqual(actName, expName)
        })
    })

})