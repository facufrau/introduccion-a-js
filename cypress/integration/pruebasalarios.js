/// <reference types="cypress"/>

const URL = "http://127.0.0.1:8080/tareas/clase-6/calculo-salarios/ejercicio2.html";

context('Cálculo de salarios', () => {
    before(() => {
        cy.visit(URL);
    })
    
    describe('Utiliza formulario', () => {
        it('Prueba agregar y quitar integrantes', () => {
            for (let i = 0; i < 5; i++) {
                cy.get("#boton-agregar").click();
            }
            cy.get('.integrante').should('have.length', 5);
            for (let i = 0; i < 5; i++) {
                cy.get("#boton-quitar").click();
            }
            cy.get('.integrante').should('not.exist');
        })

        it('Crea 2 integrantes y completa con salarios no válidos', () => {
            for (let i = 0; i < 2; i++) {
                cy.get("#boton-agregar").click();
                cy.get(".salario-input").eq(i).type(-111*(i+1));
            }
            cy.get("#boton-calcular").click();
            cy.get("li").should("have.length", 2);
        })

        it('Completa con salarios válidos y verifica resultados.', () => {
            for (let i = 0; i < 2; i++) {
                cy.get(".salario-input").eq(i).clear().type(120 * (i + 1));
            }
            cy.get("#boton-calcular").click();
            cy.get("li").should("not.exist");

            cy.get('#mayor-salario').should('have.text', '240');
            cy.get('#menor-salario').should('have.text', '120');
            cy.get('#salario-anual-promedio').should('have.text', '180');
            cy.get('#salario-mensual-promedio').should('have.text', '15');

        })

    })
});
