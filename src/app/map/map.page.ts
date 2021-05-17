import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { CartaoService } from '../services/cartao.service';
import { VeiculoService } from '../services/veiculo.service';

declare var google: any;

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {

  map: any;
  public search: string = '';
  private googleAutocomplete = new google.maps.places.AutocompleteService();
  public searchResults = new Array<any>();
  public lat = -23.573172;
  public lon = -46.629758;

  @ViewChild('map', {read: ElementRef, static: false}) mapRef: ElementRef;

  public placaSelecionada;
  public cartaoSelecionado;
  public endereco = "Av. Paulista, 1200";

  public cartoesCadastrados = this.cartaoService.cartoesCadastrados;
  public veiculosCadastrados = this.veiculoService.veiculos;


  constructor(private alertController : AlertController, private route: ActivatedRoute ,private router: Router, 
    private cartaoService : CartaoService, private veiculoService : VeiculoService) {
    console.log(google)
    this.router = router;
  }

  ionViewDidEnter() {
    this.showMap();
  }

  showMap() {
    const location = new google.maps.LatLng(this.lat, this.lon);
    const options = {
      center: location,
      zoom: 15,
      disableDefaultUI: true
    }
    this.map = new google.maps.Map(this.mapRef.nativeElement, options)
  }

  searchChanged() {
    if (!this.search.trim().length) return;

    this.googleAutocomplete.getPlacePredictions({ input: this.search }, predictions => {
      this.searchResults = predictions;
      console.log(predictions);
    });
  }

  ngOnInit() {
  }


  public confirmar() {
    if(this.cartaoSelecionado == undefined || this.placaSelecionada == undefined){
      this.dispararAlerta();
    }else{
      this.confirmarPagamentoAlert();
    }
     
  }

  private async confirmarPagamentoAlert(){
    const alert = await this.alertController.create({
      header: "Atenção!",
      message: "Você confirma a compra?",
      buttons:[
        {
          text: 'Cancelar',
        },
        {
          text: "Confirmar",
          handler: () => {
            this.router.navigate(['/map/comprovante'], { queryParams: { placa: this.placaSelecionada , endereco: this.endereco, dataHora: new Date()}});
          }
        }
      ]
    });

    alert.present();
  }

  private async dispararAlerta(){
    const alert = await this.alertController.create({
      header: "Atenção!",
      message: "O método de pagamento e a placa do veículo devem ser selecionados!",
      buttons:["OK"]
    });

    alert.present();
  }


}
