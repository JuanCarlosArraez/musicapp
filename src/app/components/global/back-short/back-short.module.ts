import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { BackShortComponent } from "./back-short.component";

@NgModule({
  declarations: [BackShortComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ], exports:[BackShortComponent]
})
export class BackShortModule { }
