import landingPage from '../support/pageObjects/landingPage'

describe('Landing Page', () => {
    it('T-01: Landing Page verifications', () => {
        //invoke application
        //verify bank name
        landingPage
            .invokeApp()
            .verifyBankName('XYZ Bank')
        //verify Home button is on the Landing page
        landingPage.verifyHomeBtn()
        //verify Customer Login is on the Landing page
        landingPage.verifyCustomerLoginBtn()
        //verify Customer Login is available
        landingPage
            .clickCustomerLoginBtn()
            .vrifyRedirectToNewPage('customer')
        //verify Home button is available
        landingPage.clickHomeBtn()
        //verify Bank Manager is on the Landing page
        landingPage.verifyBankManagerLoginBtn()
        //verify Bank Manager is available
        landingPage
            .clickBankManagerLoginBtn()
            .vrifyRedirectToNewPage('manager')
    })
})
