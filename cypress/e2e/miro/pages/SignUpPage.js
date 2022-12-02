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
    signUpLabel = ':nth-child(1) > .signup__title-form'
    languageJA = '[data-testid="item-ja"] > .Box--803j5x > .link-text'
    languageEN = '[data-testid="item-en"] > .Box--803j5x > .link-text'
    languageIT = '[data-testid="item-it"] > .Box--803j5x > .link-text'
    languageES = '[data-testid="item-es"] > .Box--803j5x > .link-text'
    languageFR = '[data-testid="item-fr"] > .Box--803j5x > .link-text'
    languageDE = '[data-testid="item-de"] > .Box--803j5x > .link-text'
    languageNL = '[data-testid="item-nl"] > .Box--803j5x > .link-text'
    languagePT = '[data-testid="item-pt"] > .Box--803j5x > .link-text'
    languageButton = '.SwitcherCurrentLocale--72i0xo'
    termsLink = 'form[method="post"] a:nth-child(1)'
    privacyLink = 'form[method="post"] a:nth-child(2)'


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

    clickTermsLink() {
        cy.get(this.termsLink).invoke('removeAttr', 'target').click()
    }

    clickPrivacyLink() {
        cy.get(this.privacyLink).invoke('removeAttr', 'target').click()
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

    clickLanguageBtn() {
        cy.get(this.languageButton).click()
    }

    selectLanguage(languageOption) {
        cy.get(languageOption).click()
    }

    getSignUpText() {
        let text = cy.get(this.signUpLabel).invoke('text')
        return text
    }

}
export default SignUpPage