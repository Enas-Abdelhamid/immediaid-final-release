import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AidProviderCreateComponent } from './components/aid-provider-create/aid-provider-create.component';
import { AidProviderListComponent } from './components/aid-provider-list/aid-provider-list.component';
import { AidProviderEditComponent } from './components/aid-provider-edit/aid-provider-edit.component';
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'create-employee' },
  { path: 'create-aidprovider', component: AidProviderCreateComponent },
  { path: 'edit-aidprovider/:id', component: AidProviderEditComponent },
  { path: 'aidproviders-list', component: AidProviderListComponent }  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }