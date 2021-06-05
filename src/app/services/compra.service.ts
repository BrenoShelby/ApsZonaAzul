import { Injectable } from '@angular/core';


export interface Compra{
id: number;
placaVeiculo: String;
localizacao: String;
dataHora: Date;
}

@Injectable({
  providedIn: 'root'
})
export class CompraService {

  constructor() { }

  private chaveSequencialCompras: number = 1;

  public compras : Compra[] = [

  ]

public salvar( compra : Compra){
  compra.id = this.chaveSequencialCompras;
  this.compras.push(compra);
  this.chaveSequencialCompras++;
}

}
