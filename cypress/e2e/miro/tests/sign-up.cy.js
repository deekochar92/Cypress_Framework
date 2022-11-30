import { faker } from '@faker-js/faker';
import SignUpPage from "../pages/SignUpPage"
import error from '../../../fixtures/errors.json'


describe('Sign-Up Test Suite', () => {
  const signupPage = new SignUpPage()

  beforeEach(() => {
    cy.visit(Cypress.env('signup_url'))
  })

  context('Positive Cases', () => {
    it.only('TC-01 Verifies successful registration for valid email', () => {
      signupPage.registration(faker.internet.email(), faker.name.fullName(), faker.internet.password())
      cy.verifyCurrentURL(Cypress.env('confirm_email_url'))
    })
  })

  context('Negative Cases', () => {
    it('TC-02 Verifies error for blank email', () => {
      signupPage.submitEmail()
      cy.verifyErrorText(signupPage.emailError, error.blank_email_error)
    })

    it('TC-03 Verifies error for invalid email', () => {
      signupPage.enterEmail(faker.internet.userName())
      signupPage.submitEmail()
      cy.verifyErrorText(signupPage.emailError, error.invalid_email_error)
    })

    it('TC-04 Verifies error for blank name', () => {
      signupPage.enterEmail(faker.internet.email())
      signupPage.submitEmail()
      signupPage.submitName()
      cy.verifyErrorText(signupPage.nameError, error.blank_name_error)
    })

    it('TC-05 Verifies error for blank password', () => {
      signupPage.enterEmail(faker.internet.email())
      signupPage.submitEmail()
      signupPage.enterName(faker.name.fullName())
      signupPage.submitName()
      signupPage.clickTermsCheckBox()
      signupPage.submitPassword()
      cy.verifyErrorText(signupPage.passwordError, error.blank_password_error)
    })

    it('TC-06 Verifies error for invalid password', () => {
      signupPage.registration(faker.internet.email(), faker.name.fullName(), faker.internet.password(7))
      cy.verifyErrorText(signupPage.invalidPasswordError, error.invalid_password_error)
    })

    it('TC-07 Verifies error for unchecked TnC', () => {
      signupPage.enterEmail(faker.internet.email())
      signupPage.submitEmail()
      signupPage.enterName(faker.name.fullName())
      signupPage.submitName()
      signupPage.enterPassword(faker.internet.password())
      signupPage.submitPassword()
      cy.verifyErrorText(signupPage.termsError, error.t_n_c_unchecked_error)
    })

    it('TC-08 Verifies error for existing email', () => {
      signupPage.enterEmail(Cypress.env('user_email'))
      signupPage.enterName(faker.name.fullName())
      signupPage.enterPassword(faker.internet.password())
      cy.verifyErrorText(signupPage.emailError, error.existing_email_error)
    })

  })
})