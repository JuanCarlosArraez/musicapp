import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { BackComponent } from "./back.component";

@NgModule({
  declarations: [BackComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ], exports:[BackComponent]
})
export class BackModule { }
