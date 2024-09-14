import { faker } from '@faker-js/faker'

describe('Check the simple banking application', () => {
    it('Create and verify customers account', () => {
        //invoke application
        cy.visit('https://www.way2automation.com/angularjs-protractor/banking/#/login')
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
        cy.get('button').contains('Open Account').click()
        cy.get('#userSelect').select(fullName)
        cy.get('#currency').select('Dollar')
        cy.get('[type="submit"]').contains('Process').click()
    })
})