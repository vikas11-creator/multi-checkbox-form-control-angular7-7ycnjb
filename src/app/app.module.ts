import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MultiCheckboxExampleComponent } from './multi-checkbox-example/multi-checkbox-example.component';

@NgModule({
  imports:      [ BrowserModule, ReactiveFormsModule ],
  declarations: [ AppComponent, MultiCheckboxExampleComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
