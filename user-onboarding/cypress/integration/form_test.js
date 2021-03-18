describe('User Onboarding App', () => {

    //helper functions
    const firstName = () => cy.get('[name="first_name"]')
    const lastName = () => cy.get('[name="last_name"]')
    const emailInput = () => cy.get('[name="email"]')
    const passwordInput = () => cy.get('[name="password"]')
    const yesCheckbox = () => cy.get('[name="yes"]')
    // const noCheckbox = () => cy.get('[name="no"]')
    const submitButton = () => cy.get('#submit')


    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    it('example test', () => {
        const person ={name: 'Felipe'}
        expect(2 + 4).to.equal(6)
        expect('Felipe').to.equal('Felipe')
        expect(person).to.equal(person)
    })

    it('renders properly', () => {
        firstName().should('exist')
        lastName().should('exist')
        emailInput().should('exist')
        passwordInput().should('exist')
        yesCheckbox().should('exist')
        // noCheckbox().should('exist')
    })
})