import {Component} from '@angular/core';
import {async, ComponentFixture, inject, TestBed} from '@angular/core/testing';
import {addProviders, inject} from '@angular/core/testing';
import {provideRoutes, RouterModule, Routes} from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';

import {App} from './app.component';
import {MdModule} from './md.module';

@Component({selector: 'as-test-cmp', template: ''})
class BlankCmp {
}

let config:Routes = [{path: '', component: BlankCmp}];

describe('App', () => {

  let fixture:ComponentFixture<App>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [App],
      imports: [MdModule.forRoot(), RouterTestingModule, RouterModule],
      // TODO: routertestingmodule.withroutes when it's available
      providers: [provideRoutes(config)]
    });
    TestBed.compileComponents().then(
        () => {
          fixture = TestBed.createComponent(App);
        });

  }));

  it('should only have routes with titles', () => {
    expect(fixture.componentInstance.routes.every(r => r.data['title']))
        .toBe(true);
  });

  it('should set sidenav mode to "over" for small screens', async(() => {
    fixture.detectChanges();

    fixture.componentInstance.onResize(300);
    expect(fixture.componentInstance.sidenavMode).toEqual('over');

    fixture.detectChanges();
    const sidenav = fixture.nativeElement.querySelector('md-sidenav');
    expect(sidenav.getAttribute('ng-reflect-mode')).toEqual('over');
  }));

});
