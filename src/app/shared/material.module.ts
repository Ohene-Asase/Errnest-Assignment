import { NgModule } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatDialogModule} from '@angular/material/dialog';
import {MatListModule} from '@angular/material/list';

@NgModule({
  exports: [
  MatInputModule,
  MatButtonModule,
  MatSelectModule,
  MatDialogModule,
  MatListModule,
  MatDialogModule
  ],
})
export class MaterialModule {}
