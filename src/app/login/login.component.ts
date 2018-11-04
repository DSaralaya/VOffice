import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: [ './login.component.css' ]
})
export class LoginComponent implements OnInit {
	model: {};
	form = new FormGroup({});
	fields = [
		{
			key: 'email',
			type: 'input',
			templateOptions: {
				type: 'email',
				label: 'Email address',
				placeholder: 'Enter email',
				required: true
			}
		},
		{
			key: 'password',
			type: 'input',
			templateOptions: {
				type: 'password',
				label: 'Password',
				placeholder: 'Enter password',
				required: true
			}
		}
	];

	constructor() {}

	ngOnInit() {}
}
