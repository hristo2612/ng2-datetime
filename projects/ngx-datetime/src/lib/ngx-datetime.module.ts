import { NgModule } from '@angular/core';
import { NgxDatetimeComponent } from './ngx-datetime.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [NgxDatetimeComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [NgxDatetimeComponent],
})
export class NgxDatetimeModule {}
