import { Given, And, Then, When } from "cypress-cucumber-preprocessor/steps"

Given('Visit Practice Automation site', () => {
    cy.visit('https://practicetestautomation.com/practice-test-login/')
})

When('Enter the Valid Username', () => {
    cy.get('#username').type('student')
})

And('Enter the Valid Password', () => {
    cy.get('#password').type('Password123')
})

Then('Click on Login button', () => {
    cy.get('.btn').click()
})

And('Validate the Dashborad', () => {
    cy.contains('Logged In Successfully').should('be.visible')
})

When('Enter the Invalid Username',()=>{
    cy.get('#username').type('studentABC')
})

And('Enter the Invalid Password',()=>{
    cy.get('#password').type('Password123')
})

And('Validate the Error',()=>{
    cy.get('#error').should('be.visible')
})