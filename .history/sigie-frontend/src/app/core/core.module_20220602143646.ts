import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigieHeaderComponent } from './sigie-header/sigie-header.component';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [
    SigieHeaderComponent
  ],
  imports: [
    CommonModule,FlexLayoutModule
  ],
  exports:[
    
  ]
})
export class CoreModule { }
