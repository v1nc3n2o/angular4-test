import {NgModule} from '@angular/core';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatTableModule,
  MatCardModule,
  MatToolbarModule,
  MatMenuModule,
  MatIconModule,
  MatInputModule,
  MatFormFieldModule,
  MatSelectModule,
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
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatSidenavModule,
    MatSlideToggleModule,
    BrowserAnimationsModule,
    FlexLayoutModule]
})
export class MaterialModule { }
