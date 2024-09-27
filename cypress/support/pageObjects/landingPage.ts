class LandingPage {
    get bankName() {
        return cy.get('.mainHeading')
    }
    get homeBtn() {
        return cy.get('.btn.home')
    }
    get customerLoginBtn() {
        return cy.get('.btn.btn-primary.btn-lg').contains('Customer Login')
    }
    get bankManagerLoginBtn() {
        return cy.get('.btn.btn-primary.btn-lg').contains('Bank Manager Login')
    }

    public invokeApp() {
        cy.visit('/')
        return this
    }

    public verifyBankName(value:string) {
        this.bankName.should('be.visible')
        this.bankName.should('have.text', value)
        cy.get('.mainHeading').then((theElement) => {
            theElement.text() 
          });

        return this
    }

    public verifyHomeBtn() {
        this.homeBtn.should('be.visible')
        this.homeBtn.should('have.text', 'Home')
        return this
    }

    public verifyCustomerLoginBtn() {
        this.customerLoginBtn.should('be.visible')
        return this
    }

    public verifyBankManagerLoginBtn() {
        this.bankManagerLoginBtn.should('be.visible')
        return this
    }

    public vrifyRedirectToNewPage(value: string) {
        cy.location('href').should('contain', `#/${value}`)
        return this
    }

    public clickCustomerLoginBtn() {
        this.customerLoginBtn.click()
        return this
    }

    public clickBankManagerLoginBtn() {
        this.bankManagerLoginBtn.click()
        return this
    }

    public clickHomeBtn() {
        this.homeBtn.click()
        return this
    }
}

export default new LandingPage()
