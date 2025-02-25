import 'cypress-iframe';
describe("Handling frames", () => {
    it('Approach 1', () => {
        cy.visit("http://the-internet.herokuapp.com/iframe");
        cy.get("#mce_0_ifr").then($iframe => {
            const body = $iframe.contents().find("body");
            cy.wrap(body).clear().type("Hello World{cmd+a}");
            cy.get("aria-label=Bold").click();
        });
    });
    it('Approach 2 = by using custom command', () => {
        cy.visit("http://the-internet.herokuapp.com/iframe");
        cy.getIframe('#mce_0_ifr').find('body').clear().type('Hello World{cmd+a}')
            .get("aria-label=Bold").click();
    });
    it('Approach 3 = by using plugin', () => {
        cy.visit("http://the-internet.herokuapp.com/iframe");
        cy.frameLoaded('#mce_0_ifr')  // wait for the iframe to be loaded
        cy.iframe('#mce_0_ifr').find('body').clear().type('Hello World{cmd+a}')
        cy.get("aria-label=Bold").click();
    })
})