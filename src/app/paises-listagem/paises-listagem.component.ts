import { Component, OnInit } from '@angular/core';
import { PaisesService } from '../paises.service';

@Component({
  selector: 'app-paises-listagem',
  templateUrl: './paises-listagem.component.html',
  styleUrls: ['./paises-listagem.component.scss']
})
export class PaisesListagemComponent implements OnInit {

  paises!: Array<any>;

  constructor(private paisesService: PaisesService) { }

  ngOnInit() {
    this.listar();
  }

  listar(){
    this.paisesService.listar().subscribe(dados => this.paises = dados)
  }

}
