import Login from '../PageObjects/LoginPage_diff.js'
describe('POM',( ) => {
    
    it('Login Test', () =>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        cy.get('[name="username"]').type('Admin')
        cy.get('[name="password"]').type('admin123')
        cy.get('[type="submit"]').click();

        cy.wait(2000)
        cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('have.text','Dashboard')
    })
    // using POM
    it('Login Test', () =>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        const lp = new Login()
        lp.setUserName('Admin')
        lp.setPassword('admin123')
        lp.clickSubmit()
        lp.verifyLogin()
    })
    // using POM with fixture
    it.only('Login Test', () =>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.fixture('orangehrm').then((data) => {
            const lp = new Login()
            lp.setUserName(data.username)
            lp.setPassword(data.password)
            lp.clickSubmit()
            lp.verifyLogin()
        })
    })
   
})