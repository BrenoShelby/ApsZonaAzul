import { Component, ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { CartaoService } from '../services/cartao.service';
import { VeiculoService } from '../services/veiculo.service';
import { Compra, CompraService } from '../services/compra.service';

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
  private initLat: number = -23.573172;
  private initLon: number = -46.629758;
  private geocoder = new google.maps.Geocoder();

  @ViewChild('map', {read: ElementRef, static: false}) mapRef: ElementRef;

  public placaSelecionada;
  public cartaoSelecionado;
  public endereco; 
  compra : Compra 
  public cartoesCadastrados = this.cartaoService.cartoesCadastrados;
  public veiculosCadastrados = this.veiculoService.veiculos;
  public hidden = true;

  constructor(
    private compraService : CompraService,
    private alertController : AlertController, 
    private route: ActivatedRoute, 
    private router: Router, 
    private cartaoService : CartaoService, 
    private veiculoService : VeiculoService,
    private ngZone: NgZone) {
    console.log(google)
    this.router = router;
    
  }





  ionViewDidEnter() {
    this.showMap(this.initLat, this.initLon);
  }

  showMap(lat: number, lon: number) {
    const location = new google.maps.LatLng(lat, lon);
    const options = {
      center: location,
      zoom: 15,
      disableDefaultUI: true
    };

    this.map = new google.maps.Map(this.mapRef.nativeElement, options);
  }

  searchChanged() {
    if (!this.search.trim().length) return; 

    this.hidden=false;
    this.googleAutocomplete.getPlacePredictions({ input: this.search }, predictions => {
      this.ngZone.run(() => {
        this.searchResults = predictions;
      })
    });
  }

  changeLocation(result) {
    
    this.geocoder.geocode({ 'placeId': result.place_id }, responses => {
      const lat = responses[0].geometry.location.lat();
      const lon = responses[0].geometry.location.lng();

      this.showMap(lat, lon);

      new google.maps.Marker({
        position: new google.maps.LatLng(lat, lon),
        map: this.map,
      });
    });
    
    this.search = result.description;
    this.hidden = true;
    this.endereco = this.search;
  }

  ngOnInit() {
  }


  public confirmar() {
    if(this.cartaoSelecionado == undefined || this.placaSelecionada == undefined){ //
      this.dispararAlerta();
    }else if(!this.search.trim().length){
      this.dispararAlertaEnderecoVazio();
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

            this.compra = {
              id: 0,
              placaVeiculo : this.placaSelecionada,
              localizacao: this.endereco,
              dataHora: new Date()
            }


            this.compraService.salvar(this.compra);
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

  private async dispararAlertaEnderecoVazio(){
    const alert = await this.alertController.create({
      header: "Atenção!",
      message: "A localização deve ser informada!",
      buttons:["OK"]
    });

    alert.present();
  }

}
