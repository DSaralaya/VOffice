import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  {

  model: {};
	form = new FormGroup({});
	fields = [
		{
			key: 'firstName',
			type: 'input',
			templateOptions: {
				label: 'First Name',
				placeholder: 'Enter First Name',
				required: true
			}
		},
		{
			key: 'lastName',
			type: 'input',
			templateOptions: {
				label: 'Last Name',
				placeholder: 'Enter Last Name',
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
		}
	];

}
