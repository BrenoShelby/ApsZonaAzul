import { Component, OnInit } from '@angular/core';


class Cartao{
  id: number;
  nomeTitular: String;
  numero: String;
  bandeira: Bandeira;
  validade: Date;
  codSeguranca: number;
  cpf: String;

  constructor(id, nomeTitular, numero, validade, codSeguranca, cpf, bandeira) {
    this.id = id;
    this.nomeTitular = nomeTitular;
    this.numero = numero;
    this.bandeira = bandeira;
    this.validade = validade;
    this.codSeguranca = codSeguranca;
    this.cpf = cpf;
  }

  public getFinalNumeroCartao(): String{
    return this.numero.substring(12);
  }
  

}


class Bandeira {
  id: number;
  nome: String;
  urlImagem: String;
 
  constructor(id, nome, urlImagem) {
    this.id = id;
    this.nome = nome;
    this.urlImagem = urlImagem;
  }
}


@Component({
  selector: 'app-pagamentos',
  templateUrl: './pagamentos.page.html',
  styleUrls: ['./pagamentos.page.scss'],
})
export class PagamentosPage implements OnInit {

  public cartoesCadastrados : Cartao[] = [ 

  ]


  constructor() {
    
    let cartao1 = new Cartao(1,"Carolina Fernanda Aragão","5021870025717441", new Date(2025, 8),625, "321.985.325-02",{id:1,nome: "Mastercard", urlImagem: "https://pngimg.com/uploads/mastercard/mastercard_PNG21.png"});
    this.cartoesCadastrados.push(cartao1);

    let cartao2 = new Cartao(2,"Carolina Fernanda Aragão","5067435079305021", new Date(2028, 1),865, "985.025.658-98",{id:2,nome: "Visa", urlImagem: "https://icons.iconarchive.com/icons/designbolts/credit-card-payment/256/Visa-icon.png"});
    this.cartoesCadastrados.push(cartao2);

    let cartao3 = new Cartao(3,"Carolina Fernanda Aragão","4350829241742131", new Date(2026, 3),328, "985.025.658-98",{id:3,nome: "Elo", urlImagem: "https://i.pinimg.com/originals/61/e1/e9/61e1e92d1cba837bba6f64f1a03a9b8e.png"});
    this.cartoesCadastrados.push(cartao3);
   }

  ngOnInit() {
  }


public removerCartao(cartaoId:number){
 let index: number;
 
  this.cartoesCadastrados.forEach(cartao => {
      if(cartao.id === cartaoId){
        index = this.cartoesCadastrados.indexOf(cartao);
      }
  });

  this.cartoesCadastrados.splice(index,1);
  console.log(this.cartoesCadastrados);
  }
}


