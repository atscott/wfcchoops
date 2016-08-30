import {addProviders, inject} from '@angular/core/testing';

// Load the implementations that should be tested
import {App} from './app.component';

describe('App', () => {
  // provide our implementations or mocks to the dependency injector
  beforeEach(() => addProviders([App]));

  it('should only have routes with titles', inject([App], (app) => {
       expect(app.routes.every(r => r.data['title'])).toBe(true);
     }));

});
