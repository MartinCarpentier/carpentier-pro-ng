/// <reference path="../../../../../node_modules/@types/node-forge/index.d.ts" />
import * as forge from 'node-forge';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sha256',
  templateUrl: './sha256.component.html',
  styleUrls: ['./sha256.component.css']
})
export class Sha256Component implements OnInit {
  private forge: any;
  constructor() {
    this.forge = forge;
  }

  ngOnInit() {
  }

  onSubmit() {
    const md = this.forge.md.sha256.create();
    md.update('The quick brown fox jumps over the lazy dog');
    console.log(md.digest().toHex());
  }
}
