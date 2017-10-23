import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard/dashboard.component';
import {ItsecurityComponent} from './itsecurity/itsecurity.component';
import {Sha1Component} from './itsecurity/hashing/sha1/sha1.component';
import {Sha256Component} from './itsecurity/hashing/sha256/sha256.component';
import {Md5Component} from './itsecurity/hashing/md5/md5.component';
import {TripledesComponent} from './itsecurity/symencryption/tripledes/tripledes.component';
import {AesComponent} from './itsecurity/symencryption/aes/aes.component';
import {HashingComponent} from './itsecurity/hashing/hashing.component';
import {SymencryptionComponent} from "./itsecurity/symencryption/symencryption.component";
import {AsymencryptionModule} from "./itsecurity/asymencryption/asymencryption.module";
import {DiffiehellmannComponent} from "./itsecurity/asymencryption/diffiehellmann/diffiehellmann.component";
import {AsymencryptionComponent} from "./itsecurity/asymencryption/asymencryption.component";
import {RsaComponent} from "./itsecurity/asymencryption/rsa/rsa.component";
import {GeneratekeypairComponent} from "./itsecurity/asymencryption/generatekeypair/generatekeypair.component";
import {GeneratekeyComponent} from "./itsecurity/symencryption/generatekey/generatekey.component";


const routes: Routes = [
  {path: '', component: DashboardComponent},
  {
    path: 'itsecurity',
    component: ItsecurityComponent,
    children: [
      { path: '', redirectTo: 'hashing', pathMatch: 'full' },
      { path: 'hashing', component: HashingComponent,
        children: [
          { path: '', redirectTo: 'sha1', pathMatch: 'full' },
          { path: 'sha1', component: Sha1Component },
          { path: 'sha256', component: Sha256Component },
          { path: 'md5', component: Md5Component },
        ]
      },
      { path: 'symencryption', component: SymencryptionComponent,
        children: [
          { path: '', redirectTo: 'generatekey', pathMatch: 'full' },
          { path: 'generatekey', component: GeneratekeyComponent },
          { path: 'tripledes', component: TripledesComponent },
          { path: 'aes', component: AesComponent },
        ]
      },
      { path: 'asymencryption', component: AsymencryptionComponent,
        children: [
          { path: '', redirectTo: 'generatekeypair', pathMatch: 'full' },
          { path: 'generatekeypair', component: GeneratekeypairComponent },
          { path: 'diffiehellmann', component: DiffiehellmannComponent },
          { path: 'rsa', component: RsaComponent },
        ]
      },
    ]
  },
  {path: 'dashboard', component: DashboardComponent},
  {path: '**', component: DashboardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
