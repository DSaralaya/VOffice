import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
	selector: 'app-searchjob',
	templateUrl: './searchjob.component.html',
	styleUrls: [ './searchjob.component.css' ]
})
export class SearchjobComponent implements OnInit {
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
			type: 'joblist',
			templateOptions: {
				type: 'email',
				label: 'Email address',
				placeholder: 'Enter email',
				required: true
			}
		}
	];

	constructor() {}

	ngOnInit() {}
}
