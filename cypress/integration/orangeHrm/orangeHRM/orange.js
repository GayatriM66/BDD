import {Given, When, And , Then} from "cypress-cucumber-preprocessor/steps"

Given('Visit Orange HRM site',()=>{
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
})

When('Enter the Orange HRM Valid Username',()=>{
    cy.get('[name="username"]').type('Admin')
})

And('Enter the Orange HRM Valid Password',()=>{
    cy.get('[name="password"]').type('admin123')
})

Then('Click on Orange HRM Login button',()=>{
    cy.get('[type="submit"]').click()
})

And('Validate the Orange HRM Dashborad',()=>{
    cy.contains('Dashboard').should('be.visible')
})