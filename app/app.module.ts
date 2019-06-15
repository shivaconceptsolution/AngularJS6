import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SiComponent } from './si/si.component';
import { SwapComponent } from './swap/swap.component';


@NgModule({
  declarations: [
    AppComponent,
    SiComponent,
    SwapComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
