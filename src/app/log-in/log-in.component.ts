import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PartyService } from '../party.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.css'
})
export class LogInComponent implements OnInit{
  loginForm!: FormGroup;

  constructor(private formBuilder: FormBuilder,
                private party:PartyService,
              private router:Router) { }

  ngOnInit(): void {
    if (localStorage.getItem('token')) {
      this.router.navigate(['partList'])
    }
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      // Form is valid, handle login logic here
      console.log('Form submitted:', this.loginForm.value);
      this.party.logIn(this.loginForm.value);
    } else {
      // Form is invalid, mark all fields as touched to show errors
      this.markFormGroupTouched(this.loginForm);
    }
  }

  // Function to mark all fields in a form group as touched
  markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();

      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }}
