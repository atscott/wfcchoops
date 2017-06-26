import {ModuleWithProviders, NgModule} from '@angular/core';
import {MdButtonModule, MdCardModule, MdIconModule, MdListModule, MdMenuModule, MdSidenavModule, MdTabsModule, MdToolbarModule} from '@angular/material';

@NgModule({
  exports: [
    MdButtonModule, MdCardModule, MdMenuModule, MdToolbarModule, MdIconModule,
    MdSidenavModule, MdTabsModule, MdListModule
  ],
  imports: [
    MdButtonModule, MdCardModule, MdMenuModule, MdToolbarModule, MdIconModule,
    MdSidenavModule, MdTabsModule, MdListModule
  ]
})
export class MdModule {
}
