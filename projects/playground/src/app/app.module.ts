import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NgxDatetimeModule } from 'projects/ngx-datetime/src/public-api';

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, NgxDatetimeModule],
  bootstrap: [AppComponent],
  declarations: [AppComponent],
})
export class AppModule {}
