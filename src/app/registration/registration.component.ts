import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor() { }

  registerForm:any;

  ngOnInit(): void {
    this.registerForm = new FormGroup({
     "firstname": new FormControl(null,[Validators.required,Validators.pattern('[a-zA-Z]*')]),
     "lastname": new FormControl(null,[Validators.required,Validators.pattern('[a-zA-Z]*')]),
     "email": new FormControl(null,[Validators.required,Validators.email]),
     "mobilenumber": new FormControl(null,[Validators.required,Validators.pattern('[0-9]*')])
    })
  }
  
  //submit function
  Submitform(){
    console.log(this.registerForm.value);
    if(this.registerForm.valid){
      alert(`Thank you ${this.registerForm.value.firstname}`);
      this.registerForm.reset();
    }
  }

  get firstname(){
    return this.registerForm.get('firstname');
  }
   
  get lastname(){
    return this.registerForm.get('lastname');
  }

  get email(){
    return this.registerForm.get('email');
  }
  
  get mobilenumber(){
    return this.registerForm.get('mobilenumber');
  }
}
