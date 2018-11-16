import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent  {

  model: {};
	form = new FormGroup({});
	fields = [
		{
			key: 'title',
			type: 'input',
			templateOptions: {
				label: 'Title',
				placeholder: 'Enter Job Title',
				required: true
			}
		},
		{
			key: 'jobType',
			type: 'input',
			templateOptions: {
				label: 'Job Type',
				placeholder: 'Enter Job Type',
				required: true
			}
		},{
			key: 'Salaray',
			type: 'input',
			templateOptions: {
				label: 'Salary/Payment',
				placeholder: 'Salary/Payment',
				required: true
			}
		},{
			key: 'Description',
			type: 'input',
			templateOptions: {
				label: 'Description',
				placeholder: 'Enter Mobile Number',
				required: true
			}
		}
	];

}
