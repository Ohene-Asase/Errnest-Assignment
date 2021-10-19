import { NgModule } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
@NgModule({
  exports: [
  MatInputModule,
  MatButtonModule,
  MatSelectModule
  ],
})
export class MaterialModule {}
