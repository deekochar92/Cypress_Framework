class SignUpPage {
    emailInput = '[data-testid="mr-form-signup-email-1"]'
    emailSubmitButton = '[data-testid="mr-form-signup-btn-start-1"]'
    nameInput = '[data-testid="mr-form-signup-name-1"]'
    nameSubmitButton = '[data-testid="mr-form-signup-btn-start-2"]'
    passwordInput = '[data-testid="mr-form-signup-password-1"]'
    passwordSubmitButton = '[data-testid="mr-form-signup-btn-start-3"]'
    termsCheckBox = '[data-testid="mr-form-signup-terms-1"] > .mr-checkbox-1__wrap > .mr-checkbox-1__check'
    emailError = ':nth-child(2) > .signup__error > #emailError'
    nameError = '#nameError'
    passwordError = '[data-testid="please-enter-your-password-1"]'
    invalidPasswordError = '#password-hint > #signup-form-password'
    termsError = '#termsError'


    enterEmail(email) {
        cy.get(this.emailInput).type(email)
    }

    submitEmail() {
        cy.get(this.emailSubmitButton).click()

    }

    enterName(name) {
        cy.get(this.nameInput).type(name)
    }

    submitName() {
        cy.get(this.nameSubmitButton).click()

    }

    enterPassword(password) {
        cy.get(this.passwordInput).type(password)
    }

    submitPassword() {
        cy.get(this.passwordSubmitButton).click()
    }

    clickTermsCheckBox() {
        cy.get(this.termsCheckBox).click()
    }


    registration(email, name, password) {
        this.enterEmail(email)
        this.submitEmail()
        this.enterName(name)
        this.submitName()
        this.enterPassword(password)
        this.clickTermsCheckBox()
        this.submitPassword()
    }

}
export default SignUpPage