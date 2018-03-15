import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddPlacePage } from './add-place';
import {AgmCoreModule} from "@agm/core";

@NgModule({
  declarations: [
    AddPlacePage,
  ],
  imports: [
    IonicPageModule.forChild(AddPlacePage),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCVE5Dk8bqBSqF0xcAdwyc-Fq9NetTAXxA'
    })
  ],
  exports: [
    AddPlacePage
  ]
})
export class AddPlacePageModule {}
