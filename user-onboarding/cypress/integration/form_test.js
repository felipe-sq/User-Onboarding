describe('User Onboarding App', () => {

    //helper functions
    const firstName = () => cy.get('[name="first-name"]')
    
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
    })
})