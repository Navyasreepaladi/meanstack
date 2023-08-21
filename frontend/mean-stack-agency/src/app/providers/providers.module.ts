import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProvidersComponent } from './providers.component';
import { AddProvidersComponent } from './add-providers/add-providers.component';
import { DeleteProvidersComponent } from './delete-providers/delete-providers.component';
import { DetailsProvidersComponent } from './details-providers/details-providers.component';
import { EditProvidersComponent } from './edit-providers/edit-providers.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [ProvidersComponent,AddProvidersComponent,DeleteProvidersComponent,DetailsProvidersComponent,EditProvidersComponent],
  imports: [
    CommonModule,RouterModule,ReactiveFormsModule
  ],
  exports:[
    ProvidersComponent,AddProvidersComponent,DeleteProvidersComponent,DetailsProvidersComponent,EditProvidersComponent,ReactiveFormsModule
  ]
})
export class ProvidersModule { }
