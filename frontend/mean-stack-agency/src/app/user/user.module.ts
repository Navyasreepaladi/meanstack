import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from '../register/register.component';
import { LoginComponent } from '../login/login.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [LoginComponent,RegisterComponent],
  imports: [
    CommonModule,RouterModule
  ],
  exports:[LoginComponent,RegisterComponent]
})
export class UserModule { }
