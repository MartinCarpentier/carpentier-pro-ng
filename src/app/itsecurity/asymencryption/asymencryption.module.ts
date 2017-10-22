import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsymencryptionComponent } from './asymencryption.component';
import { DiffiehellmannComponent } from './diffiehellmann/diffiehellmann.component';
import { RsaComponent } from './rsa/rsa.component';
import {AppRoutingModule} from '../../app-routing.module';
import {NgMaterialModule} from '../../ng-material/ng-material.module';
import { GeneratekeypairComponent } from './generatekeypair/generatekeypair.component';

@NgModule({
  imports: [
    CommonModule,
    NgMaterialModule,
    AppRoutingModule
  ],
  declarations: [AsymencryptionComponent, DiffiehellmannComponent, RsaComponent, GeneratekeypairComponent]
})
export class AsymencryptionModule { }
