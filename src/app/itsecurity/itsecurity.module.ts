import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItsecurityComponent } from './itsecurity.component';
import { Sha1Component } from './sha1/sha1.component';
import {NgMaterialModule} from '../ng-material/ng-material.module';
import {AppRoutingModule} from '../app-routing.module';
import { Sha256Component } from './sha256/sha256.component';
import { Md5Component } from './md5/md5.component';
import { TripledesComponent } from './tripledes/tripledes.component';
import { AesComponent } from './aes/aes.component';

@NgModule({
  imports: [
    CommonModule,
    NgMaterialModule,
    AppRoutingModule
  ],
  declarations: [ItsecurityComponent, Sha1Component, Sha256Component, Md5Component, TripledesComponent, AesComponent]
})
export class ItsecurityModule { }
