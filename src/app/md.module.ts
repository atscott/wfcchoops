import {ModuleWithProviders, NgModule} from '@angular/core';
import {MdButtonModule} from '@angular2-material/button';
import {MdCardModule} from '@angular2-material/card';
import {MdIconModule} from '@angular2-material/icon';
import {MdListModule} from '@angular2-material/list';
import {MdMenuModule} from '@angular2-material/menu';
import {MdSidenavModule} from '@angular2-material/sidenav';
import {MdTabsModule} from '@angular2-material/tabs';
import {MdToolbarModule} from '@angular2-material/toolbar';

@NgModule({
  exports: [
    MdButtonModule, MdCardModule, MdMenuModule, MdToolbarModule, MdIconModule,
    MdSidenavModule, MdTabsModule, MdListModule
  ]
})
export class MdModule {
  static forRoot():ModuleWithProviders {
    return {ngModule: MdModule};
  }
}
