import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';


class Cartao{
  id: number;
  nomeTitular: String;
  numero: String;
  bandeira: Bandeira;
  validade: Date;
  codSeguranca: number;
  cpf: String;

  constructor(id, nomeTitular, numero, bandeira, validade, codSeguranca, cpf) {
    this.id = id;
    this.nomeTitular = nomeTitular;
    this.numero = numero;
    this.bandeira = bandeira;
    this.validade = validade;
    this.codSeguranca = codSeguranca;
    this.cpf = cpf;
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
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {


  public nomeTitular: String;
  public numeroCartao: String;
  public bandeiraSelecionadaId : number;
  public validade: Date;
  public codSeguranca: number;
  public cpf: String;
  private chaveSequencialCartoes: number = 1;

  public bandeiras : Bandeira[] = [

  ]

  public cartoesCadastrados : Cartao[] = [

  ]

  constructor(private alertController : AlertController) {
    let bandeira1 = new Bandeira(1, "Mastercard", "https://pngimg.com/uploads/mastercard/mastercard_PNG21.png");
    this.bandeiras.push(bandeira1);

    let bandeira2 = new Bandeira(2, "Visa", "https://icons.iconarchive.com/icons/designbolts/credit-card-payment/256/Visa-icon.png");
    this.bandeiras.push(bandeira2);

    let bandeira3 = new Bandeira(3, "Elo", "https://i.pinimg.com/originals/61/e1/e9/61e1e92d1cba837bba6f64f1a03a9b8e.png");
    this.bandeiras.push(bandeira3);

   }

  ngOnInit() {
  }


  public cadastrarCartao(){
    
    if(this.nomeTitular === undefined || this.numeroCartao === undefined || this.bandeiraSelecionadaId === null 
      || this.bandeiraSelecionadaId === undefined || this.validade === null || this.validade === undefined || this.codSeguranca === undefined || this.cpf === undefined){
      this.dispararAlerta();
    }else{
      if(this.nomeTitular.trim().length == 0 || this.numeroCartao.trim().length == 0 || this.cpf.trim().length == 0){
        this.dispararAlerta();
      }else{
        let bandeira = this.buscarBandeiraPorId(this.bandeiraSelecionadaId);
        const novoCartao = new Cartao(this.chaveSequencialCartoes, this.nomeTitular, this.numeroCartao, bandeira, this.validade, this.codSeguranca, this.cpf);
        this.cartoesCadastrados.push(novoCartao);
        this.chaveSequencialCartoes++;
        console.log("lista de cartões cadastrados >>>",this.cartoesCadastrados);
        this.limparCamposForm();
      }
    }

    
  }


  private buscarBandeiraPorId(bandeiraId:number):Bandeira{
    let retorno : Bandeira = null;

    this.bandeiras.forEach(bandeira => {
      if(bandeira.id === bandeiraId){
        retorno = bandeira;
        
      }  
    });
      return retorno;
  }
    
    
    private limparCamposForm(){
    this.nomeTitular = " ";
    this.numeroCartao = " ";
    this.bandeiraSelecionadaId =  null;
    this.validade = null;
    this.codSeguranca =  null;
    this.cpf = " ";
    }

    private async dispararAlerta(){
      const alert = await this.alertController.create({
        header: "Atenção!",
        message: "Preencha o formulário corretamente!",
        buttons:["OK"]
      });
  
      alert.present();
    }

}




