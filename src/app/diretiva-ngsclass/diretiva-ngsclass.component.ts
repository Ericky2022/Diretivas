import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngsclass',
  templateUrl: './diretiva-ngsclass.component.html',
  styleUrls: ['./diretiva-ngsclass.component.scss']
})
export class DiretivaNgsclassComponent implements OnInit{

  meuFavorito: boolean = false;
  meuFavorito2: string = 'vazio';


  constructor(){  }

  ngOnInit(){

  }

  onClick(){
    this.meuFavorito = !this.meuFavorito
    this.meuFavorito2 = 'cheio'
  }

}
