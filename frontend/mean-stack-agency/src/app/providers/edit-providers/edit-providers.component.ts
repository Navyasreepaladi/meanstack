import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProviderClass } from 'src/app/models/providers.class';
import { ProviderService } from 'src/app/services/provider.service';

@Component({
  selector: 'app-edit-providers',
  templateUrl: './edit-providers.component.html',
  styles: [
  ]
})
export class EditProvidersComponent 
implements OnInit {
  providers: ProviderClass[] = [];
  submitted = false;
  emailError = false;
  emailErrorMsg="Invalid email.Try again or contact us";
  provider = new ProviderClass();
  providersForm!: FormGroup;
  id!: number; //Service provider's id from URL
  email!: string;//Service provider's default mail
  ready = false ;//load form only when data is present 
constructor(private providerService: ProviderService ,private route:ActivatedRoute){}
ngOnInit():void{

this.buildFormControls();
this.loadData();
this.route.paramMap.subscribe(params => {
  const idParam = params.get('id');
  if (idParam !== null) {
  this.id = parseInt(idParam);
  }
}
  );
  this.providerService.getProvider(this.id)
  .subscribe({
    next:(data:ProviderClass[])=>{
      this.provider = data[0];
      console.log(data);
      //flatten object
      const temp : {[key:string]:any}={};
      for(const [k1,v1] of Object.entries(this.provider)){
        switch(k1){
          case '_id' || 'id' :break;
          case 'company':
            for(const[k2,v2] of Object.entries(this.provider[k1])){
              if(k2!= "_id"){
                temp[k2]= v2;
              }
            }
            break;
            default:
              temp[k1]=v1;
        }
      }
      console.log(temp);
      // setTimeout(()=>{
        this.providersForm.patchValue(temp)
        this.ready = true;
        //so this helps the server to load data fully instead of slow partial loading
      // },1000)

    },
    error:(error)=>{
      console.log(error);
    },
  });
}


get f(){
  return this.providersForm.controls;
}
handleSubmit(){
console.log(this.providersForm.value);
this.buildProvider();
if(!this.isInvalidEmail()){
  this.providerService.updateProvider(this.id,this.provider)
  .subscribe({
    next:(data)=>{
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
  if(this.email ==email && this.providers.filter(el=>el.company.email == email).length>0){
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
