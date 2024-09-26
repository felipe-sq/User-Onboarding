describe('User Onboarding App', () => {

    //helper functions
    const firstName = () => cy.get('[name="first_name"]')
    const lastName = () => cy.get('[name="last_name"]')
    const emailInput = () => cy.get('[name="email"]')
    const passwordInput = () => cy.get('[name="password"]')
    const yesCheckbox = () => cy.get('[name="yes"]')
    const submitButton = () => cy.get('[name="button"]')

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
        submitButton().should('exist')
    })

    describe('Fills out the input fields', () => {
        it('can type in the input fields', () => {
            firstName()
            .should('have.value', '')
            .type('Ronald')
            .should('have.value', 'Ronald')

            lastName()
            .should('have.value', '')
            .type('McDonald')
            .should('have.value', 'McDonald')

            emailInput()
            .should('have.value', '')
            .type('clown@burgers.com')
            .should('have.value', 'clown@burgers.com')

            passwordInput()
            .should('have.value', '')
            .type('Whoppers123')
            .should('have.value', 'Whoppers123')

            yesCheckbox().click()
            submitButton().click()
        })
    })
})