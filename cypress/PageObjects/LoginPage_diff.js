class Login{
    txtUsername = '[name="username"]'
    txtPassword = '[name="password"]'
    btnLogin = '[type="submit"]'
    lblDashboard = '.oxd-topbar-header-breadcrumb > .oxd-text'

    setUserName(username){
       return cy.get(this.txtUsername).type(username)  // this is used to refer to the class variable
    }
    setPassword(password){
        return cy.get(this.txtPassword).type(password)
    }
    clickSubmit(){
        return cy.get(this.btnLogin).click()
    }
    verifyLogin(){
        return cy.get(this.lblDashboard).should('have.text','Dashboard')
    }
} 

export default Login;