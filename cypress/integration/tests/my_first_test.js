describe('Giftli Sanity Tests', function(){
    it('Homepage loads', function(){
        cy.visit('https://uat-giftli-client.azurewebsites.net/')
        window.sessionStorage.setItem('uiFlags', '{"hideStoryIntroModal": false}')
        cy.get('[data-test=CreateYourGiftcard]')
          .click()
        cy.url().should('include', 'build/recipient')
        cy.get('[data-test=recipientNameInput]')
          .clear()
          .type('Lexington', { delay : 100 })
        cy.get('[data-test=createStoryButton]')
          .click()
        cy.url().should('include', 'build/story')
        cy.get('[data-test="StoryIntroModal-continue"]')
          .click()
        cy.get('[data-test=EditStoryCoverPageButton]')
          .click()
        cy.get('[class="indexstyle__DesignInner-sc-1vz59ug-2 ikHSnT"]')
          .click()
        cy.get('[data-test="saveDesignChanges"]')
          .click()

    })
})
