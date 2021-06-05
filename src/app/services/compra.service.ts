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
    {
      id: 1,
      placaVeiculo: 'ABC-1234',
      localizacao: 'Rua 123456',
      dataHora: new Date(),
    },

    {
      id: 2,
      placaVeiculo: 'AXY-4567',
      localizacao: 'Rua DOS BOBOS',
      dataHora: new Date(),
    }
  ]
}
