import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
	selector: 'app-uprofile',
	templateUrl: './profile.component.html',
	styleUrls: [ './profile.component.css' ]
})
export class ProfileComponent implements OnInit {
	model: {};
	form = new FormGroup({});
	fields = [
		{
			fieldGroupClassName: 'row',
			fieldGroup: [
				{
					key: 'firstName',
					type: 'input',
					className: 'col-sm-6',
					templateOptions: {
						label: 'First Name',
						placeholder: 'Enter First Name',
						required: true
					}
				},
				{
					key: 'lastName',
					type: 'input',
					className: 'col-sm-6',
					templateOptions: {
						label: 'Last Name',
						placeholder: 'Enter Last Name',
						required: true
					}
				},
				{
					key: 'Address',
					type: 'input',
					className: 'col-sm-12',
					templateOptions: {
						label: 'Address',
						placeholder: 'Enter your Address',
						required: true
					}
				},
				{
					key: 'city',
					type: 'input',
					className: 'col-sm-6',
					templateOptions: {
						label: 'City',
						placeholder: 'Enter your city',
						required: true
					}
				},

				{
					key: 'zipcode',
					type: 'input',
					className: 'col-sm-6',
					templateOptions: {
						label: 'Zip/Post Code',
						placeholder: 'Enter your Zip/Post Code',
						required: true
					}
				},
				{
					key: 'state',
					type: 'input',
					className: 'col-sm-6',
					templateOptions: {
						label: 'State',
						placeholder: 'Enter your State',
						required: true
					}
				},
				{
					key: 'country',
					type: 'input',
					className: 'col-sm-6',
					templateOptions: {
						label: 'Country',
						placeholder: 'Enter your Country',
						required: true
					}
				},
				{
					key: 'charge',
					type: 'input',
					className: 'col-sm-6',
					templateOptions: {
						label: 'Salary/Hourly Rate',
						placeholder: 'Enter Salary/Hourly Rate',
						required: true
					}
				},
				{
					key: 'skills',
					type: 'input',
					className: 'col-sm-6',
					templateOptions: {
						label: 'Skills',
						placeholder: 'Enter your skills',
						required: true
					}
				}
			]
		},
		{
			fieldGroupClassName: 'section-label',
			template: '<div><strong>Education:</strong></div>'
		},
		{
			fieldGroupClassName: 'row',
			fieldGroup: [
				{
					key: 'graduate',
					type: 'input',
					className: 'col-sm-12',
					templateOptions: {
						label: 'Graduate',
						placeholder: 'Enter your graduation',
						required: true
					}
				}
			]
		}
	];
	constructor() {}

	ngOnInit() {}
}
