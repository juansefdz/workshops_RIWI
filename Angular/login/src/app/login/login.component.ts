import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
  ) { 
    this.loginForm= this.formBuilder.group({
      username: ['',[Validators.required,Validators.email] ],
      password: ['', Validators.required],
    })

  }

  ngOnInit(): void {
  }

  onSubmit(event: Event){
    event.preventDefault();
    if(this.loginForm.invalid){
      return;
    }
   const {username, password} = this.loginForm.value;
   console.log('username', username);
   
  }

}
