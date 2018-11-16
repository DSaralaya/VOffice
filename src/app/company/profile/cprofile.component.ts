import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'capp-profile',
  templateUrl: './cprofile.component.html'
 
})
export class CProfileComponent  {

  model: {};
	form = new FormGroup({});
	fields = [
		{
			key: 'companyName',
			type: 'input',
			templateOptions: {
				label: 'Company Name',
				placeholder: 'Enter Company Name',
				required: true
			}
		},
		{
			key: 'companyLevel',
			type: 'input',
			templateOptions: {
				label: 'Level',
				placeholder: 'Enter Comapny Level',
				required: true
			}
		},{
			key: 'emailId',
			type: 'input',
			templateOptions: {
				label: 'Email ID',
				placeholder: 'Enter Email Id',
				required: true
			}
		},{
			key: 'mobileNo',
			type: 'input',
			templateOptions: {
				label: 'Mobile',
				placeholder: 'Enter Mobile Number',
				required: true
			}
		},
		{
			key: 'noEmployees',
			type: 'input',
			templateOptions: {
				label: 'No of Employees',
				placeholder: 'Enter Number of Employees',
				required: true
			}
		},
		{
			key: 'address',
			type: 'input',
			templateOptions: {
				label: 'Address',
				placeholder: 'Enter Address',
				required: true
			}
		},{
			key: 'zipcode',
			type: 'input',
			templateOptions: {
				label: 'Zip Code',
				placeholder: 'Enter Zip code',
				required: true
			}
		}
	];

}
