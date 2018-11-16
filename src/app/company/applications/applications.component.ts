import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.css']
})
export class ApplicationsComponent implements OnInit {
  form = new FormGroup({});
	model = {
		folders: [
			{
				name: 'Photos',
				updated: ''
			},
			{
				name: 'Recipes',
				updated: ''
			},
			{
				name: 'Work',
				updated: ''
			}
		]
	};

	fields = [
		{
			key: 'folders',
			type: 'applist',
			templateOptions: {
				type: 'email',
				label: 'Email address',
				placeholder: 'Enter email',
				required: true
			}
		}
	];
  constructor() { }

  ngOnInit() {
  }

}
