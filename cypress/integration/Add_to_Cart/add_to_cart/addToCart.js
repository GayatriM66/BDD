import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"

Given('Visit the Ecomm Site', () => {
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
})

When(`Search the product which starts from {string}`, function (string1) {
    cy.get('.search-keyword').type(string1)
    cy.get('.search-button').click()
})

And(`Add {string} in the cart`, (title) => {
    cy.get('h4.product-name').each((el) => {
        let veggieName = el.text().split(" ")
        if (veggieName[0] == title) {
            cy.log(el.parent().find('button').click())
        }
    })
})

Then('Place order And select country and check condition', () => {
    cy.get('[alt="Cart"]').click()
    // cy.get('[class="action-block"]').first().click()
    cy.get('[class="action-block"] button').first().click()
    cy.contains('Place Order').click()
    cy.get('select').select('India')
    cy.get('.chkAgree').check()
    cy.contains('Proceed').click()

})

And('Validate the Thank You message', () => {
    cy.contains('Thank you, your order has been placed successfully').should('be.visible')
})