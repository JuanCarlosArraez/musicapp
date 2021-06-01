import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ButtonsStartComponent } from "./buttons-start.component";


@NgModule({
  declarations: [ButtonsStartComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],  exports:[ButtonsStartComponent]
})
export class ButtonsStartModule { }
