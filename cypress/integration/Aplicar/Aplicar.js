import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import JobsPage from '../../support/PageObjects/JobsPage';

const jobsPage = new JobsPage();

Given('Que estoy en la pagina de empleados', () => {
    cy.visit('/empleos-testing/')
})

When('le doy click al texto Prepararse para aplicar', () => {

    jobsPage.clickTextAplicar()

})

Then('Debera mostrar el texto prepararse para aplicar', (title) => {

    jobsPage.textAplicar()

})