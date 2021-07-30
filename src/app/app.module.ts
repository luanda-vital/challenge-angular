import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ScrollingModule} from '@angular/cdk/scrolling';

import { AppComponent } from './app.component';
import { PaisesListagemComponent } from './paises-listagem/paises-listagem.component';
import { PaisesService } from './paises.service';

@NgModule({
  declarations: [
    AppComponent,
    PaisesListagemComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    ScrollingModule
  ],
  providers: [ PaisesService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
