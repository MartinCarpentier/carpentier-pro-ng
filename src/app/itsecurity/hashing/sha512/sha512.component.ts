/// <reference path="../../../../../node_modules/@types/node-forge/index.d.ts" />
import * as forge from 'node-forge';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sha512',
  templateUrl: './sha512.component.html',
  styleUrls: ['./sha512.component.scss']
})
export class Sha512Component implements OnInit {
  private forge: any;
  constructor() {
    this.forge = forge;
  }

  ngOnInit() {
  }

  onSubmit() {
    const md = this.forge.md.sha512.create();
    md.update('The quick brown fox jumps over the lazy dog');
    console.log(md.digest().toHex());
  }
}
