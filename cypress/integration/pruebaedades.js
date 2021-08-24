const URL = "http://127.0.0.1:8080/tareas/clase-6/calculo-edades/ejercicio1.html";

context('Cálculo de edades', () => {
    before(() => {
        cy.visit(URL);
    })

    describe('Utiliza formulario', () => {
        it('no escribe número de integrantes', () => {
            cy.get("#siguiente").click();
            cy.get('.edad-input').should('not.exist');
        })

        it('Escribe numero de integrantes', () => {
            cy.get('#numero-integrantes').type(3);
            cy.get("#siguiente").click();
            cy.get('.edad-input').should('have.length', 3);
        })
    })
});