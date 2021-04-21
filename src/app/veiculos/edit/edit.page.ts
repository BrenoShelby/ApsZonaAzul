import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

type Cor = "Prata" | "Preto" | "Branco" | "Cinza" | "Azul" | "Verde" | "Vermelho" | "Amarelo" | "Marrom" ;

class Marca{
  id: number;
  nome: String;
  
  constructor(id, nome, ) {
    this.id = id;
    this.nome = nome;
  }

}

class Modelo {
  id: number;
  nome: String;
  marcaId: number;
  urlImgModelo: String

  constructor(id, nome, marcaId, urlImgModelo) {
    this.id = id;
    this.nome = nome;
    this.marcaId =  marcaId;
    this.urlImgModelo = urlImgModelo;
  }
}


class Veiculo{
  id: number
  marca: Marca ;
  modelo: Modelo;
  placa: String;
  cor: Cor;

  constructor(id, marca, modelo, placa, cor) {
    this.id = id;
    this.marca = marca;
    this.modelo = modelo;
    this.placa = placa; 
    this.cor = cor;
  }
}

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {

  
  public placa : String = "FHP-7200";
  public cor :Cor =  "Marrom";
  public idMarcaSelecionada : number = 3;
  public idModeloSelecionado : number = 14;
  
  veiculoAlteracao: Veiculo = {
    id: 1,
    marca:{
      id: 3,
      nome: "Jeep",
    },
    modelo: {
      id:14,
      nome: "Renegade",
      marcaId: 3,
      urlImgModelo: "https://www.newsedan.com.br/pub/modelos/jeep/renegade/colorizer/colorizer-renegade-limited-metalica-deep-brown.png"
    },
    placa: "FHP-7200",
    cor: "Marrom",
  }


  public marcas: Marca[] = [
   {
    id: 1,
    nome: "Honda"
   },
   {
    id: 2,
    nome: "Toyota"
   },
   {
    id: 3,
    nome: "Jeep",
   },
  ]

  private modelos: Modelo[] = [
    //Honda
    {
      id:1,
      nome: "Accord",
      marcaId: 1,
      urlImgModelo: "https://svg-image.s3.amazonaws.com/south-honda/019-0121-SHO873/model1.png"
   },
    {
      id:2,
      nome: "City",
      marcaId: 1,
      urlImgModelo: "https://carsguide-res.cloudinary.com/image/upload/f_auto,fl_lossy,q_auto,t_default/v1/editorial/vhs/Honda-City.png"
    },
    {
      id:3,
      nome: "Civic", 
      marcaId: 1,
      urlImgModelo: "https://images.dealer.com/ddc/vehicles/2020/Honda/Civic%20Si/Sedan/perspective/front-left/2020_76.png"
    },
    {
      id:4,
      nome: "Cr-V", 
      marcaId: 1,
      urlImgModelo: "https://file.kelleybluebookimages.com/kbb/base/evox/CP/14219/2020-Honda-CR-V-front_14219_032_1843x887_BU_cropped.png"
    },
    {
      id:5,
      nome: "Fit", 
      marcaId: 1,
      urlImgModelo: "https://file.kelleybluebookimages.com/kbb/base/evox/CP/12183/2020-Honda-Fit-front_12183_032_1857x884_OR_cropped.png"
    },
    {
      id:6,
      nome: "Hr-V", 
      marcaId: 1,
      urlImgModelo: "https://file.kelleybluebookimages.com/kbb/base/evox/CP/13026/2020-Honda-HR-V-front_13026_032_1848x876_BL_cropped.png"
    },
  
    //Toyota
   
    {
      id:7,
      nome: "Corolla", 
      marcaId: 2,
      urlImgModelo: "https://file.kelleybluebookimages.com/kbb/base/evox/CP/13483/2020-Toyota-Corolla-front_13483_032_1823x768_1F7_cropped.png"
    },
    {
      id:8,
      nome: "Yaris", 
      marcaId: 2,
      urlImgModelo: "https://cloudflarestockimages.dealereprocess.com/resrc/images/stockphoto_asset-c_limit,f_auto,fl_lossy,w_auto/v1/svp/Colors_PNG1280/2019/19toyota/19toyotayarislesd3ra/toyota_19yarislesd3ra_angularfront_graphite"
    },
    {
      id:9,
      nome: "Hilux", 
      marcaId: 2,
      urlImgModelo: "https://i.xeoto.com.vn/auto/toyota/hilux/toyota-hilux-phien-ban-24-4x4-mt-29291.png"
    },
    {
      id:10,
      nome: "Hilux Sw4", 
      marcaId: 2,
      urlImgModelo: "https://carsguide-res.cloudinary.com/image/upload/f_auto,fl_lossy,q_auto,t_default/v1/editorial/vhs/Toyota-Fortuner_1.png"
    },
    {
      id:11,
      nome: "Rav-4", 
      marcaId: 2,
      urlImgModelo: "https://images.dealer.com/ddc/vehicles/2020/Toyota/RAV4%20Hybrid/SUV/perspective/front-left/2020_76.png"
    },
    
    //Jeep
    {
      id:12,
      nome: "Cherokee",
      marcaId: 3,
      urlImgModelo: "http://assets-clean.local-car-finder.com/images/14039/14039_st1280_089.png"
    },
    {
      id:13,
      nome: "Compass", 
      marcaId: 3,
      urlImgModelo: "https://carsguide-res.cloudinary.com/image/upload/f_auto,fl_lossy,q_auto,t_default/v1/editorial/vhs/Jeep-Compass_0.png"
    },
    {
      id:14,
      nome: "Renegade",
      marcaId: 3,
      urlImgModelo: "https://www.newsedan.com.br/pub/modelos/jeep/renegade/colorizer/colorizer-renegade-limited-metalica-deep-brown.png"
    },
  ]

  public modelosDaMarca : Modelo[] =[
    {
      id:12,
      nome: "Cherokee",
      marcaId: 3,
      urlImgModelo: "http://assets-clean.local-car-finder.com/images/14039/14039_st1280_089.png"
    },
    {
      id:13,
      nome: "Compass", 
      marcaId: 3,
      urlImgModelo: "https://carsguide-res.cloudinary.com/image/upload/f_auto,fl_lossy,q_auto,t_default/v1/editorial/vhs/Jeep-Compass_0.png"
    },
    {
      id:14,
      nome: "Renegade",
      marcaId: 3,
      urlImgModelo: "https://www.newsedan.com.br/pub/modelos/jeep/renegade/colorizer/colorizer-renegade-limited-metalica-deep-brown.png"
    },
  ]

 
  constructor(private alertController : AlertController) { }

  ngOnInit() {
  }

   
  public carregarModelos(){
    this.limparListaModelosDaMarca();
    this.idModeloSelecionado = null;
    this.modelos.forEach(modelo => {
        if(modelo.marcaId === this.idMarcaSelecionada){
          this.modelosDaMarca.push(modelo);
        }
    });
  }

  private limparCamposForm(){
    this.placa="";
    this.cor= null;
    this.idMarcaSelecionada = null;
    this.idModeloSelecionado = null;
  }
  
  private limparListaModelosDaMarca(){
    while(this.modelosDaMarca.length > 0){
      this.modelosDaMarca.pop();
    }
  }



  private buscarMarcaPorId(marcaId):Marca{ 
    let marcaRetorno : Marca = null;

    this.marcas.forEach(marca => {
      if(marca.id === marcaId){
         marcaRetorno =  marca;
      }
    });

    return marcaRetorno;
  }

  private buscarModeloPorId(modeloId): Modelo{
    let modeloRetorno : Modelo = null;

    this.modelos.forEach(modelo => {
      if(modelo.id === modeloId){
        modeloRetorno = modelo;
      }
    });
    return modeloRetorno;
  }


  
  public atualizarVeiculo(){

    if(this.placa.trim().length != 0 && this.placa != undefined && this.placa.length == 8 && this.cor != undefined && this.idMarcaSelecionada != undefined && this.idModeloSelecionado != undefined){
      
      this.veiculoAlteracao.placa = this.placa;
      this.veiculoAlteracao.cor =  this.cor;
      this.veiculoAlteracao.marca = this.buscarMarcaPorId(this.idMarcaSelecionada);
      this.veiculoAlteracao.modelo = this.buscarModeloPorId(this.idModeloSelecionado);
      
    }else{
      this.dispararAlerta();
    }
    
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
