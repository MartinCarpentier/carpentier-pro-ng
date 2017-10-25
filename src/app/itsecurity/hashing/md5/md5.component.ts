/// <reference path="../../../../../node_modules/@types/node-forge/index.d.ts" />
import * as forge from 'node-forge';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-md5',
  templateUrl: './md5.component.html',
  styleUrls: ['./md5.component.scss']
})
export class Md5Component implements OnInit {
  private forge: any;
  public noHash: string;
  public hash: string;
  constructor() {
    this.forge = forge;
  }

  onSubmit() {
    const md = this.forge.md.md5.create();
    md.update(this.noHash);
    this.hash = md.digest().toHex();
    console.log(this.hash);
  }

  ngOnInit() {
  }

}
