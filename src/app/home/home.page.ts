import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { CartaoService } from '../services/cartao.service';
import { VeiculoService } from '../services/veiculo.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  public cartoesCadastrados = this.cartaoService.cartoesCadastrados;
  public veiculosCadastrados = this.veiculoService.veiculos;

  constructor(private alertController : AlertController , private cartaoService : CartaoService, private veiculoService : VeiculoService,  private router: Router) { 

  }

  ngOnInit() {
  }

  private texto = "emy-9898";

  public checarListas(){
    if(this.cartoesCadastrados.length == 0 || this.veiculosCadastrados.length == 0){
      this.dispararAlerta();
    }else{
      this.router.navigate(['/map']);
    }
    
  }

  private async dispararAlerta(){
    const alert = await this.alertController.create({
      header: "Atenção!",
      message: "Você precisa cadastrar um cartão e um veículo para usar essa funcionalidade!",
      buttons:["OK"]
    });

    alert.present();
  }


}
