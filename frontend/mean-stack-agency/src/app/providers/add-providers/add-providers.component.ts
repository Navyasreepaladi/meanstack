import { Component,OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProviderClass } from 'src/app/models/providers.class';
import { ProviderService } from 'src/app/services/provider.service';


@Component({
  selector: 'app-add-providers',
  templateUrl: './add-providers.component.html',
  styles: [
  ]
})
export class AddProvidersComponent implements OnInit {
  providers: ProviderClass[] = [];
  submitted = false;
  emailError = false;
  emailErrorMsg="Invalid email.Try again or contact us";
  provider = new ProviderClass();
  providersForm!: FormGroup;
constructor(private providerService: ProviderService ){}
ngOnInit():void{

this.buildFormControls();
this.loadData();
}

get f(){
  return this.providersForm.controls;
}
handleSubmit(){
console.log(this.providersForm.value);
this.buildProvider();
if(!this.isInvalidEmail()){
  this.providerService.addProvider(this.provider)
  .subscribe({
    next:(data:ProviderClass[])=>{
      this.submitted = true;
      this.emailError = false;
    },
    error:(error)=>{
      console.log(error);
    },
  });

}

   //   this.submitted = true;
   // this.providers.push(this.provider);

}
//getall records from database
loadData(){
  this.providerService.getProviders()
  .subscribe({
    next:(data:ProviderClass[])=>{
      this.providers = data;
    },
    error:(error)=>{
      console.log(error);
    },
  });

}
//check for duplicate mails
isInvalidEmail(){
  let email = this.providersForm.controls['email'].value;
  if(this.providers.filter(el=>el.company.email == email).length>0){
    this.emailError = true;
    return true;
  }
return false;
}
//generate new id
getNewId(){
  let newId: number;
  while(true){
    newId = Math.floor(Math.random()*10000)+99999;
    if(this.providers.findIndex(el=>el.id == newId)== -1){
      return newId;
    }
  }
}
//build new provider object
buildProvider(){
  let p = this.providersForm.value;
    this.provider.id = this.getNewId();
    this.provider.firstname = p.firstname;
    this.provider.lastname = p.lastname;
    this.provider.position = p.position;
    this.provider.company ={
      company_name:p.company_name,
      address:p.address,
      address2:p.address2,
      city:p.city,
      state:p.state,
      postal_code:p.postal_code,
      phone:p.phone,
      email:p.email,
      description:p.description,
      tagline:p.tagline

    };
}
//build form controls
buildFormControls(){
  this.providersForm = new FormGroup({
    firstname : new FormControl('Navya',[Validators.required,Validators.minLength(2)]),
    lastname : new FormControl('Paladi'),
    position : new FormControl(),
    email: new FormControl('',[Validators.required,Validators.email]),
    phone : new FormControl('',[Validators.required,Validators.pattern('^[0-9]{2}-[0-9]{10}$')]),
    company_name : new FormControl(),
    address : new FormControl(),
    address2 : new FormControl(),
    city : new FormControl(),
    state : new FormControl(),
    postal_code : new FormControl(),
    description : new FormControl(),
    tagline : new FormControl(),
  });
}
}
