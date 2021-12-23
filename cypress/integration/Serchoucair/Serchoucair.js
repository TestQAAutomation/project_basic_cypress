import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import JobsPage from '../../support/PageObjects/JobsPage';

const jobsPage = new JobsPage();

Given('Que estoy en la pagina de empleados', () => {

    cy.visit('/empleos-testing/')
    
})

When('le doy click al texto ¿Que es ser Choucair?', () => {

    jobsPage.clickTextSerChoucair()

})

Then('Debera mostar un texto con la información que es ser choucair', (title) =>{

    jobsPage.textSerChoucair()

})
