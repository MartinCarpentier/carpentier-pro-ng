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
  public noHash: string;
  public hash: string;
  constructor() {
    this.forge = forge;
  }

  ngOnInit() {
  }

  onSubmit() {
    const md = this.forge.md.sha512.create();
    md.update(this.noHash);
    this.hash = md.digest().toHex();
    console.log(this.hash);
  }
}
