import {NgModule} from '@angular/core';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatTableModule,
  MatCardModule,
  MatToolbarModule,
  MatMenuModule,
  MatIconModule,
  MatSidenavModule,
  MatSlideToggleModule
} from '@angular/material';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatTableModule,
    MatCardModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatSidenavModule,
    MatSlideToggleModule,
    BrowserAnimationsModule,
    FlexLayoutModule]
})
export class MaterialModule { }
