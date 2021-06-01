import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AddBandComponent } from "./add-band.component";

@NgModule({
  declarations: [AddBandComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ], exports:[AddBandComponent]
})
export class AddBandModule { }
