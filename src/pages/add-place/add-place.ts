import { Component } from '@angular/core';
import {IonicPage, ModalController, NavController, NavParams} from 'ionic-angular';
import {NgForm} from "@angular/forms";
import {Location} from "../../models/location";

import { Geolocation } from '@ionic-native/geolocation';


@IonicPage()
@Component({
  selector: 'page-add-place',
  templateUrl: 'add-place.html',
})
export class AddPlacePage {

  location: Location ={
    lat: 40.7624324,
    lng: -73.9759827
  };

  public locationIsSet = false;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private modalCtrl: ModalController,
    public geoLocation: Geolocation) {}



  onSubmit(form: NgForm){
      console.log(form.value);
  }

  onOpenMap(){
    const modal = this.modalCtrl.create('SetLocationPage',{location: this.location, isSet: this.locationIsSet});
    modal.present();

    modal.onDidDismiss(
      data =>{
        if(data){
          this.location = data.location;
          this.locationIsSet = true;
        }
      }
    )
  }


  onLocate(){
    this.geoLocation.getCurrentPosition()
      .then(
        (l) => {
          this.location.lat = l.coords.latitude;
          this.location.lng = l.coords.longitude;
          this.locationIsSet = true;
        }
      )
      .catch(
        error =>{
          console.log(error)
        }
      );

  }



}
