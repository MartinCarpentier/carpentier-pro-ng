import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SymencryptionComponent } from './symencryption.component';
import {AesComponent} from './aes/aes.component';
import {TripledesComponent} from './tripledes/tripledes.component';
import { GeneratekeyComponent } from './generatekey/generatekey.component';
import {NgMaterialModule} from '../../ng-material/ng-material.module';
import {AppRoutingModule} from '../../app-routing.module';

@NgModule({
  imports: [
    CommonModule,
    NgMaterialModule,
    AppRoutingModule
  ],
  declarations: [SymencryptionComponent, TripledesComponent, AesComponent, GeneratekeyComponent]
})
export class SymencryptionModule { }
