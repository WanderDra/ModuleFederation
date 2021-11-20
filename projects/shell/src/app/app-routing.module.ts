import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'mfe', loadChildren: () => loadRemoteModule(({
    remoteEntry: 'http://localhost:3000/remoteEntry.js',
    remoteName: 'mfe',
    exposedModule: './Module'
  })).then(m => m.DemoModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
