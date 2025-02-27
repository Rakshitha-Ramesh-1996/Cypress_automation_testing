class Login{
    setUserName(username){
       return cy.get('[name="username"]').type(username) 
    }
    setPassword(password){
        return cy.get('[name="password"]').type(password)
    }
    clickSubmit(){
        return cy.get('[type="submit"]').click()
    }
    verifyLogin(){
        return cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('have.text','Dashboard')
    }
} 

export default Login;