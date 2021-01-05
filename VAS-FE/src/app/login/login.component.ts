import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	constructor(
		private title: Title,
		private formBuilder: FormBuilder) {
		title.setTitle("Login")
	}
	loginForm: FormGroup;
	ngOnInit(): void {
		this.loginForm = this.formBuilder.group({
			username: new FormControl('', [Validators.required, Validators.minLength(6)]),
			password: new FormControl('', [Validators.required, Validators.minLength(6)])
		})
	}
	get userNameErrorMess(): string {
		const formControl = this.loginForm.get('username');
		return formControl.hasError('required') ? 'you must enter username' : (formControl.hasError('minlength') ? 'username is more than 6 character' : '');
	}
	get passwordErrorMess(): string {
		const formControl = this.loginForm.get('password');
		return formControl.hasError('required') ? 'you must enter password' : (formControl.hasError('minlength') ? 'password is more than 6 character' : '');
	}





}
