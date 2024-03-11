import {API} from '../../src/app/config/api.config';
describe('Visite Cv page', () => {

  it('should access to cv page', () => {
    // this is an an action and an expectation, we expect to visit the page cv
    cy.visit('/cv');
  })
  it('should have a list of cvs', () => {
    cy.intercept(API.cv, { fixture: 'cvs' });
    cy.visit('/cv');
    const list = cy.get('[data-cy=cvlist]'); //.then(listcvs => cy.log('Text: '+listcvs.text()));
    const listFirst = list.first().then( listFirstElements => {
      console.log('listFirstElements' );
      console.log(listFirstElements);
      // list.then((listcvss) => cy.log('listcvs : ' + listcvss.text()));

      // console.log('list === listFirst', listFirst === list);

    });

    listFirst.contains('Aymen');

    cy.get('[data-cy=cvCard]').should('not.exist');
    listFirst.click();
    cy.get('[data-cy=cv-card]').contains('Aymen');
    cy.intercept(API.cv+1, { fixture: 'cv1' });
    cy.get('[data-cy=details-cv-button]').click({force:true});
    cy.location().should((location) => {
      expect(location.pathname).to.equal('/cv/1');
    });

  })
})
