/// <reference path="../../../../../node_modules/@types/node-forge/index.d.ts" />
import * as forge from 'node-forge';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-md5',
  templateUrl: './md5.component.html',
  styleUrls: ['./md5.component.css']
})
export class Md5Component implements OnInit {
  private forge: any;
  constructor() {
    this.forge = forge;
  }

  onSubmit() {
    const md = this.forge.md.md5.create();
    md.update('The quick brown fox jumps over the lazy dog');
    console.log(md.digest().toHex());
  }


  ngOnInit() {
  }

}
