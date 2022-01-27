import { state } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import{ FormGroup, FormControl, Validators} from '@angular/forms'


@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  loginForm=new FormGroup({
    email:new FormControl('',Validators.required),
    pswd:new FormControl('',[Validators.required,Validators.minLength(6)]),
    fname:new FormControl('',Validators.required),
    lname:new FormControl('',Validators.required),
    uname:new FormControl('',Validators.required),
    street:new FormControl('',Validators.required),
    state:new FormControl('',Validators.required),
    city:new FormControl('',Validators.required),
    zip:new FormControl('',Validators.required)
  })

    get email(){
      return this.loginForm.controls;
    }
    get pswd(){
      return this.loginForm.controls;
    }
    get fname(){
      return this.loginForm.controls;
    }
    get lname(){
      return this.loginForm.controls;
    }
    get uname(){
      return this.loginForm.controls;
    }
    get street(){
      return this.loginForm.controls;
    }
    get state(){
      return this.loginForm.controls;
    }
    get city(){
      return this.loginForm.controls;
    }
    get zip(){
      return this.loginForm.controls;
    }


}
