describe("Alerts", () => {
    //1) Javascript Alert: It will have some text and an ok button
    it.skip("Javascript Alert", () => {
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        //cy.get('button[onclick="jsAlert()"]')
        cy.get('button').contains("Click for JS Alert").click()

        cy.on("window:alert", (str) => {  // str is the text of the alert
            expect(str).to.equal("I am a JS Alert")
        })
        cy.get("#result").should("have.text", "You successfully clicked an alert")
    })

    //2) Javascript Confirm: It will have some text, an ok button and a cancel button
    it.skip("Javascript Confirm", () => {
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get('button').contains("Click for JS Confirm").click()

        cy.on("window:confirm", (str) => {  // str is the text of the alert 
            expect(str).to.equal("I am a JS Confirm")
            // return true // Clicks OK
            return false // Clicks Cancel
        })
        // cy.on("window:alert", () => false);  // if we not using return false, we can use this line to click cancel
        // cypress automatically clicks OK
       // cy.get("#result").should("have.text", "You clicked: Ok")
        cy.get("#result").should("have.text", "You clicked: Cancel")
    })

    //3) Javascript Prompt: It will have some text, an input field, an ok button and a cancel button
    it.skip("Javascript Prompt", () => {
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
       
        cy.window().then((win) => { // win is the window object
            cy.stub(win, 'prompt').returns('Hello Raksha') // stub is used to mock the prompt
            cy.get('button').contains("Click for JS Prompt").click()
        })
        // to cancel the prompt
    //    cy.on("window:prompt", () => false);
       
        cy.get("#result").should("have.text", "You entered: Hello Raksha")
    })

    //4) Authentication Alert: It will have a username and password field, an ok button and a cancel button
    it.only("Authentication Alert", () => {
         // approch 1
        // cy.visit("https://the-internet.herokuapp.com/basic_auth", {
        //     auth: {
        //         username: "admin",
        //         password: "admin"
        //     }
        // })
        // cy.get('.example').should("have.contain", "Congratulations")
        //approch 2
        cy.visit("https://admin:admin@the-internet.herokuapp.com/basic_auth") // username:password@
        cy.get('.example').should("have.contain", "Congratulations")
    })
})