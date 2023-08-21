import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styles: [
  ]
})
export class ContactComponent implements OnInit{

  constructor(){}
ngOnInit(): void {
    
}
handleSubmit(contactForm:NgForm){
console.log(contactForm);
console.log(contactForm.value);
console.log(contactForm.value.message);
}
}
