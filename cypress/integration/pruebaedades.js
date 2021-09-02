/// <reference types="cypress"/>

const URL = "http://127.0.0.1:8080/tareas/clase-6/calculo-edades/ejercicio1.html";

context('Cálculo de edades', () => {
    before(() => {
        cy.visit(URL);
    })

    describe('Utiliza formulario', () => {
        it('No escribe número de integrantes', () => {
            cy.get("#siguiente").click();
            cy.get('.edad-input').should('not.exist');
        })

        it('Escribe numero de integrantes', () => {
            cy.get('#numero-integrantes').type(3);
            cy.get("#siguiente").click();
            cy.get('.edad-input').should('have.length', 3);
        })

        it('Completa con edades no válidas', () => {
            cy.get('.edad-input').each(($element) => {
                cy.wrap($element).clear().type(9999);
            })
            cy.get('#boton-calcular').click();
            cy.get('#errores').should('not.have.class', 'oculto');
        })

        it('Completa con edades válidas', () => {
            cy.get('.edad-input').each(($element, i) => {
                cy.wrap($element).clear().type((i+1) * 10);
            })
            cy.get('#boton-calcular').click();
            cy.get('#resultados').should('not.have.class', 'oculto');
            cy.get('#mayor-edad').should('have.text', '30');
            cy.get('#menor-edad').should('have.text', '10');
            cy.get('#promedio-edad').should('have.text', '20.00');
        })
    })
});
