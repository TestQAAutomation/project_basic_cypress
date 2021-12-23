


class JobsPage {
    clickTextSerChoucair() {
        cy.get('a[href="#ser"]').contains('¿Qué es ser Choucair?').as('texto')
        cy.get('@texto').should('be.visible')
        cy.get('@texto').click()

        return cy.get('@texto');
    }

    clickButtonEmpleos() {
        cy.get('span[class="elementor-button-text"]').first().contains('Ir al portal de empleos').as('empleos')
        cy.get('@empleos').should('exist')
        cy.get('@empleos').click()

        return cy.get('@empleos')
    }

    clickTextAplicar() {
        cy.get('a[href="#prepararse"]').contains('Prepararse para aplicar').as('aplicar')
        cy.get('@aplicar').should('be.visible')
        cy.get('@aplicar').click()

        return cy.get('@aplicar');
    }

    textSerChoucair() {
        cy.get('div').children('div').children('div').contains('Significa estar comprometido').as('informacion')
        cy.get('@informacion').should('be.visible')

        return cy.get('@informacion');
    }

    textAplicar() {
        cy.get('div').children('div').children('div').contains('Si quieres hacer parte de esta compañía').as('informacionAPlicar')
        cy.get('@informacionAPlicar').should('be.visible')

        return cy.get('@informacionAPlicar')
    }

    getButtonContinuar() {
        cy.get('span[class="elementor-button-text"]').contains('Continuar').as('continuar')
        cy.get('@continuar').should('exist')

        return cy.get('@continuar');
    }



}

export default JobsPage;