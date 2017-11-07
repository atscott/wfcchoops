import {ModuleWithProviders, NgModule} from '@angular/core';
import {MatButtonModule, MatCardModule, MatIconModule, MatListModule, MatMenuModule, MatSidenavModule, MatTabsModule, MatToolbarModule} from '@angular/material';

@NgModule({
  exports: [
    MatButtonModule, MatCardModule, MatMenuModule, MatToolbarModule, MatIconModule,
    MatSidenavModule, MatTabsModule, MatListModule
  ],
  imports: [
    MatButtonModule, MatCardModule, MatMenuModule, MatToolbarModule, MatIconModule,
    MatSidenavModule, MatTabsModule, MatListModule
  ]
})
export class MatModule {
}
