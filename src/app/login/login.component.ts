import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { remoteService } from '../shared/services/remoteservice';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: [ './login.component.css' ]
})
export class LoginComponent implements OnInit {
	model = {};
	form = new FormGroup({});
	fields = [
		{
			key: 'username',
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

	constructor(private auth: AuthService, private service: remoteService, public router: Router, public jwtHelper: JwtHelperService) {}

	ngOnInit() {
		this.auth.Authenticate();
	}

	submit() {
		this.service.post('login', this.model).subscribe((result) => {
			var token = this.jwtHelper.decodeToken(result.Authorization);
			localStorage.setItem('id_token', result.Authorization);
			this.auth.Authenticate();
			if (token.role === 'admin') {
				this.router.navigate([ '/dashboard' ]);
			} else if (token.role === 'comapny') {
				this.router.navigate([ '/cdashboard' ]);
			} else {
				this.router.navigate([ '/udashboard' ]);
			}
		});
	}
}
