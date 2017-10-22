import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard/dashboard.component';
import {ItsecurityComponent} from './itsecurity/itsecurity.component';
import {Sha1Component} from './itsecurity/sha1/sha1.component';
import {Sha256Component} from "./itsecurity/sha256/sha256.component";
import {Md5Component} from "./itsecurity/md5/md5.component";
import {TripledesComponent} from "./itsecurity/tripledes/tripledes.component";
import {AesComponent} from "./itsecurity/aes/aes.component";


const routes: Routes = [
  {path: '', component: DashboardComponent},
  {
    path: 'itsecurity',
    component: ItsecurityComponent,
    children: [
      { path: '', redirectTo: 'sha1', pathMatch: 'full' },
      { path: 'sha1', component: Sha1Component },
      { path: 'sha256', component: Sha256Component },
      { path: 'md5', component: Md5Component },
      { path: 'tripledes', component: TripledesComponent },
      { path: 'aes', component: AesComponent },
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
