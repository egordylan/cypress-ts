import { faker } from '@faker-js/faker'
import landingPage from '../support/pageObjects/landingPage'

describe('Check the simple banking application', () => {
    it('Create and verify customers account', () => {
        //invoke application
        //verify bank name
        landingPage
            .invokeApp()
            .verifyBankName('XYZ Bank')
        //login as a manager
        cy.contains('Bank Manager Login').click()
        //select customer table
        cy.contains('Customers').click()
        //delete all existing customers
        cy.get('table').find('button').each(($el: string) => {
            cy.get($el).contains('Delete').click()
            cy.wait(1000)
        })
        //navigate to Add Customer
        cy.contains('Add Customer').click()
        //add customers
        cy.get('[ng-model="fName"]').click().type('Ken')
        cy.get('[ng-model="lName"]').click().type('Kaneki')
        cy.get('[ng-model="postCd"]').click().type('8-848')
        cy.get('[type="submit"]').contains('Add Customer').click()

        const firtsName: string = faker.person.firstName()
        const lastName: string = faker.person.lastName()
        const zipCode: string = faker.location.zipCode()

        cy.contains('Add Customer').click()
        cy.get('[ng-model="fName"]').click().type(firtsName)
        cy.get('[ng-model="lName"]').click().type(lastName)
        cy.get('[ng-model="postCd"]').click().type(zipCode)
        cy.get('[type="submit"]').contains('Add Customer').click()

        const firtsName1: string = faker.person.firstName()
        const lastName1: string = faker.person.lastName()
        const zipCode1: string = faker.location.zipCode()

        cy.contains('Add Customer').click()
        cy.get('[ng-model="fName"]').click().type(firtsName1)
        cy.get('[ng-model="lName"]').click().type(lastName1)
        cy.get('[ng-model="postCd"]').click().type(zipCode1)
        cy.get('[type="submit"]').contains('Add Customer').click()

        //navigate to Open Account
        //open account to a customer
        const fullName: string = 'Ken Kaneki'
        //Rupee
        cy.get('button').contains('Open Account').click()
        cy.get('#userSelect').select(fullName)
        cy.get('#currency').select('Rupee')
        cy.get('[type="submit"]').contains('Process').click()
        //Dollar
        cy.get('button').contains('Open Account').click()
        cy.get('#userSelect').select(fullName)
        cy.get('#currency').select('Dollar')
        cy.get('[type="submit"]').contains('Process').click()
        //Pound
        cy.get('button').contains('Open Account').click()
        cy.get('#userSelect').select(fullName)
        cy.get('#currency').select('Pound')
        cy.get('[type="submit"]').contains('Process').click()
    })

    it('Landing Page verifications', () => {
        //common tests:
        //verify tooltip across pages

        //Bank Manager Home page:
        //Bank name, Home page should be visible
        //Add Customer, Open Account, Customers should be visible
        //selected tab should be highlighted

        //Customer Page:
        //on creating customer details should be displayd
        //search customer
        //delete customer
        //first name, last name, post code, account numbers, delete customer labels should be displayed
        //account numbers should be appended on adding accounts for the same customer
        //sorting customers by first name, last name, post code

        //add customer:
        //verify that labels are displayed
        //verify mandatory fields
        //add 10 customers
        //verify pop-up (success) on adding customer

        //open account:
        //added customer should be loaded into customer dropdown
        //currency should have dollar, pound, rupie
        //verify mandatory fields
        //verify pop-up (success message)
        
        //customer loging page:
        //should have list of customers in the dropdown
        //verify login in

        //customer home page:
        //labels should be displayed (Account number, Balance, Currency)
        //welcome message
        //list of accounts
        //list of transactions should be displayed
        //change account > change currency
        //log out should be displayed

        //customer transaction:
        //list of transactions should be displayed
        //sorting date-time
        //dropdown

    })
})