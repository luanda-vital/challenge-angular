import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
    BrowserModule
  ],
  providers: [ PaisesService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
