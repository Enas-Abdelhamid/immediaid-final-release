import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ApiService } from './service/api.service';


import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AidProviderCreateComponent } from './components/aid-provider-create/aid-provider-create.component';
import { AidProviderEditComponent } from './components/aid-provider-edit/aid-provider-edit.component';
import { AidProviderListComponent } from './components/aid-provider-list/aid-provider-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AidProviderCreateComponent,
    AidProviderEditComponent,
    AidProviderListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
