describe('MyTestSuite',()=>{

    it('Data Driven Test',()=>{

       cy.fixture('orangehrm2').then((data)=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        data.forEach((userdata)=>{
        cy.get('[name="username"]').type(userdata.username)
        cy.get('[name="password"]').type(userdata.password)
        cy.get('[type="submit"]').click();

        cy.wait(2000)
        if(userdata.username == 'Admin' && userdata.password == 'admin123'){
            cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('have.text',userdata.expected) // Dashboard
            cy.get('.oxd-userdropdown-tab > .oxd-icon').click() // logout
            cy.get(':nth-child(4) > .oxd-userdropdown-link').click() // logout
        }
        else{
            cy.get('.oxd-alert-content > .oxd-text').should('have.text',userdata.expected)
        }
        })
       })

    })
})