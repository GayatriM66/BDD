import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"

Given('I open Google page', function () {
    cy.visit('https://www.google.co.in/')
})

Then(`I see {string} in the title`,(title)=>{
    cy.title().should('contain',title)
})



Given(`I open Facebook page`,function(){
    cy.visit('https://www.facebook.com/')
})

Then(`I see {string} in the title`,(title)=>{
    cy.title().should('have.text',title)
})