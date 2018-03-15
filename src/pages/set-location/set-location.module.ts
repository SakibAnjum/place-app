import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SetLocationPage } from './set-location';
import {AgmCoreModule} from "@agm/core";

@NgModule({
  declarations: [
    SetLocationPage,
  ],
  imports: [
    IonicPageModule.forChild(SetLocationPage),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCVE5Dk8bqBSqF0xcAdwyc-Fq9NetTAXxA'
    })
  ],
  exports: [
    SetLocationPage
  ]
})
export class SetLocationPageModule {}
