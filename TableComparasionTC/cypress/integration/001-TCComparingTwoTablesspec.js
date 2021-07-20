/// <reference types="cypress" />

it('TC-001 Comparing data of two tables row by row', () => {

    cy.visit('https://the-internet.herokuapp.com/tables')

    let i = 0; // This variable is used for a loop

    cy.get('[id=table1] tbody tr td').each(() => { // I am getting the the text of cell 1 of table1. 
            
    let a = i; // Adding 'a' is equal to i for comparing two tables. 
            
    cy.get('[id=table2] tbody tr td').eq(i).invoke('text') // I am getting the the text of cell 1 of table2 and invoking the text.
    .then((t2Text) => { //Lets sabe it in t2Text variable
    cy.get('td').eq(a).should('contain.text',t2Text) //Assertion applies here
    });
    
    i++;
                
    })
});