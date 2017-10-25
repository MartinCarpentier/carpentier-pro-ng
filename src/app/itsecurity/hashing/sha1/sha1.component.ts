/// <reference path="../../../../../node_modules/@types/node-forge/index.d.ts" />
import * as forge from 'node-forge';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sha1',
  templateUrl: './sha1.component.html',
  styleUrls: ['./sha1.component.scss']
})
export class Sha1Component implements OnInit {
  private forge: any;
  public noHash: string;
  public hash: string;
  constructor() {
    this.forge = forge;
  }

  ngOnInit() {
  }

  onSubmit() {
    const md = this.forge.md.sha1.create();
    md.update(this.noHash);
    this.hash = md.digest().toHex();
    console.log(this.hash);
  }

}
