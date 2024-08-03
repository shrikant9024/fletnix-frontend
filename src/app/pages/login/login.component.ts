import { NgIf } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import {FormGroup,FormBuilder,ReactiveFormsModule, Validators} from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,HttpClientModule,NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm!:FormGroup
  errorMessage: string = '';
  successMessage: string = '';
  submitted:boolean = false;

  constructor(
    private formbuilder:FormBuilder,
    private http: HttpClient,
    private router: Router
  ){}

  ngOnInit(): void {
    
    this.loginForm = this.formbuilder.group({
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(6)]]
    })
  }

  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      this.errorMessage = "All Fields are required";
      console.log("Form Errors:", this.loginForm.errors);
      return;
    }
    const formData = this.loginForm.value;
    console.log("Form Data:", formData); // Debug log
    this.http.post('http://localhost:8000/login', formData).subscribe({
      next: (response: any) => {
        this.successMessage = "Login Successful";
        localStorage.setItem('authFlag', 'true');
        this.router.navigate(['']);
      },
      error: (error) => {
        console.error('Login error', error);
        this.errorMessage = "Invalid email or password. Please Try Again";
      }
    });
  }
  
}
