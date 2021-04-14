import { Component, OnInit } from '@angular/core';

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
  veiculoPrincipal: boolean;

  constructor(id, marca, modelo, placa, cor) {
    this.id = id;
    this.marca = marca;
    this.modelo = modelo;
    this.placa = placa; 
    this.cor = cor;
    this.veiculoPrincipal = false;
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
  public veiculoPrincipal: boolean = false;
  
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
    veiculoPrincipal: false
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
      urlImgModelo: "https://lh3.googleusercontent.com/proxy/32D9SHrVhAtefQKZBL-UKChNVO3cP-xHHzXlQMdYI0EFVZM8qNikMnRxHUEN-sT53w9V3MDj-hK3pYDkFsYIKU0YSkJgjqS2kj9krwskP58i39CbjgJ-7R9N_rKw9VgulPFUV8vv"
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

 
  constructor() { }

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

    if(marcaRetorno != undefined){
      console.log("não é undefined")
    }else{
      console.log("é undefined")
    }
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
    this.veiculoAlteracao.placa = this.placa;
    this.veiculoAlteracao.cor =  this.cor;
    this.veiculoAlteracao.marca = this.buscarMarcaPorId(this.idMarcaSelecionada);
    this.veiculoAlteracao.modelo = this.buscarModeloPorId(this.idModeloSelecionado);
    this.veiculoAlteracao.veiculoPrincipal = this.veiculoPrincipal;
  }


}
