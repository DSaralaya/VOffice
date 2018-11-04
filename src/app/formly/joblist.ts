import { Component, OnInit } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
	selector: 'app-job-list',
	template: `
    
    <mat-list-item *ngFor="let folder of model.folders">
   <img src="..." alt="..." class="img-thumbnail">
        <h4 mat-line>{{folder.name}}</h4>
        <p mat-line> {{folder.updated}} </p>
        <mat-divider></mat-divider>
     </mat-list-item>
    `
})
export class JobListComponent extends FieldType {}
