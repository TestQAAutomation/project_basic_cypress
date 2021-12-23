import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';


Given('Me encuentro en la pagina de choucair', () => {
    cy.visit('/')
})

When('Abro la pagina de empleos', () => {
    cy.visit('/empleos-testing/')
})

Then('Debo estar en la pagina de {string}', (title) =>{
    cy.title('').should('include', title)
})

