import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import JobsPage from '../../support/PageObjects/JobsPage';

const jobsPage = new JobsPage();

Given('Que estoy en la pagina de empleados', () => {
    cy.visit('/empleos-testing/')
})

When('le doy click al boton ir al portal de empleos', () => {

    jobsPage.clickButtonEmpleos()

})

Then('Debera de mostrar el boton continuar', (title) =>{

    jobsPage.getButtonContinuar()
    
})