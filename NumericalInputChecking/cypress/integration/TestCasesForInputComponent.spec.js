describe('Testing the Input Component',() =>{

// Passing 150 as input and checking the input componenet is accepting the numeric value
it('verify the input component should accept numeric value only', () => {
    cy.visit('https://the-internet.herokuapp.com/inputs')
    cy.get('input').focus().type('150').click()
    cy.get('input').should('be.visible') // assert number is hold by the box
    cy.wait(3000) // I have added a delay for the examiner to check it. 
});

//Passing a string in the input componenet and verify it doesn't accept it.
it("Verify that the input component doesn't accept string", () =>{
    cy.visit('https://the-internet.herokuapp.com/inputs')
    cy.get('input').focus().type("AyeshaKhalid").click()
    .should('be.empty')
    cy.wait(3000) // I have added a delay for the examiner to check it. 
})

//Passing value and increasing when arrow up is clicked.
it('Verify if the up arrow in the input component increases a value "30" by 1 when clicked once', () => {
    cy.visit('https://the-internet.herokuapp.com/inputs')
    const InputValue=cy.get('input').focus().type('30{uparrow}{enter}')
    .invoke('val') //-- then I have invoked this value as the Input component is not holding the value once the focus is out
    .then(InputValue => cy.log(InputValue)); // InputValue is a variable and Input value is assigned to it.
    if(InputValue !=30)
    cy.log("Pass")
    cy.wait(3000) // I have added a delay for the examiner to check it. 
    
});

//Passing value and decreasing when arrow down is clicked.
it('Verify if the down arrow in the input component decreases a value "30" by 1 when clicked once', () => {
    cy.visit('https://the-internet.herokuapp.com/inputs')
    const InputValue= cy.get('input').focus().type('30{downarrow}{enter}')
    .invoke('val') //-- then I have invoked this value as the Input component is not holding the value once the focus is out
    .then(InputValue => cy.log(InputValue)); // InputValue is a variable and Input value is assigned to it.
    if(InputValue != 30)
    cy.log("Pass")
    cy.wait(3000) // I have added a delay for the examiner to check it. 
}); 

//Passing value in decimal and checking if upon increasing, it is converting into integer as the input component accepts integers only.
it('Verify decimal number "44.4" is converted to its ceiling integer number upon clicking arrow up ', () => {
    cy.visit('https://the-internet.herokuapp.com/inputs')
    const InputValue= cy.get('input').focus().type('44.4{uparrow}{enter}')
    .invoke('val') //-- then I have invoked this value as the Input component is not holding the value once the focus is out
    .then(InputValue => cy.log(InputValue))
    .should('match',/45/)   
    cy.wait(3000) // I have added a delay for the examiner to check it. 
    
}); 

//Passing value in decimal and checking if upon decreasing, it is converting into integer as the input component accepts integers only.
it('Verify decimal number "45.8" is converted to its floor integer number upon clicking arrow down ', () => {
    cy.visit('https://the-internet.herokuapp.com/inputs')
    const InputValue= cy.get('input').focus().type('45.8{downarrow}{enter}')
    .invoke('val') //-- then I have invoked this value as the Input component is not holding the value once the focus is out
    .then(InputValue => cy.log(InputValue))
    .should('match',/45/)   
    cy.wait(3000) // I have added a delay for the examiner to check it. 
    
}); 

//Checking the Backspace option while the number is entered in the Input component.
it('Verify the Input component behavior when the Backspace is press while number being entered', () => {
    cy.visit('https://the-internet.herokuapp.com/inputs')
    cy.get('input').focus().type('45')
    cy.wait(3000) // Added a delay for the examiner to find it out while checking)/
    cy.get('input').clear()
    .should('be.empty')
})

});
    
