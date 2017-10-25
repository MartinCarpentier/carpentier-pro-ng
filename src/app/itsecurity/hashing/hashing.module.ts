import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HashingComponent } from './hashing.component';
import {NgMaterialModule} from '../../ng-material/ng-material.module';
import {AppRoutingModule} from '../../app-routing.module';
import {Md5Component} from './md5/md5.component';
import {Sha256Component} from './sha256/sha256.component';
import {Sha1Component} from './sha1/sha1.component';
import { Sha512Component } from './sha512/sha512.component';

@NgModule({
  imports: [
    CommonModule,
    NgMaterialModule,
    AppRoutingModule
  ],
  declarations: [HashingComponent, Sha1Component, Sha256Component, Md5Component, Sha512Component]
})
export class HashingModule { }
