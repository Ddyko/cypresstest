/// <reference types="cypress" />

import { AllPage } from "../page-object/all-page"

const allPage = new AllPage()

describe('User want to register an account', () => {
    it('Given user already open the register page', () => {
        allPage.openRegister()
        allPage.validRegisterPage()
    })
})