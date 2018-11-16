import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class AuthService {
	constructor(public jwtHelper: JwtHelperService) {}
	public authenticated = new BehaviorSubject(false);

	public isAuthenticated(): boolean {
		const token = localStorage.getItem('id_token');

		// Check whether the token is expired and return
		// true or false
		var isauth = !this.jwtHelper.isTokenExpired(token);

		return isauth;
	}

	public Authenticate() {
		if (this.isAuthenticated()) {
			this.authenticated.next(true);
		} else {
			this.authenticated.next(false);
		}
	}
}
