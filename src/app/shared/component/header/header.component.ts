import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: [ './header.component.css' ]
})
export class HeaderComponent {
	isauth = false;
	constructor(public router: Router) {}

	logout() {
		localStorage.removeItem('id_token');
	}
}
