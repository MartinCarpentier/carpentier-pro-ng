import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ItsecurityComponent} from './itsecurity.component';
import {NgMaterialModule} from '../ng-material/ng-material.module';
import {AppRoutingModule} from '../app-routing.module';
import {AsymencryptionModule} from './asymencryption/asymencryption.module';
import {SymencryptionModule} from './symencryption/symencryption.module';
import {HashingModule} from './hashing/hashing.module';

@NgModule({
  imports: [
    CommonModule,
    NgMaterialModule,
    AppRoutingModule,
    AsymencryptionModule,
    SymencryptionModule,
    HashingModule
  ],
  declarations: [ItsecurityComponent]
})
export class ItsecurityModule { }
