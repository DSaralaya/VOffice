import { Component, OnInit } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
	selector: 'app-apps-list',
	template: `
   
    <div class="list-item row" *ngFor="let folder of model.folders">
 
    <div class="col-sm-2">
     <img src="http://placehold.it/500x300" alt="..." class="img-thumbnail"/>
    </div>
    <div class="col-sm-8">
    <h4 mat-line>{{folder.name}}</h4>
    <p mat-line> {{folder.updated}} </p>
    </div>
    <div class="col-sm-2">
    <button type="button" [routerLink]="['/userinfo',2,3]"  mat-raised-button color="primary" >Apply</button>
    </div>
    </div>
   
    `
})
export class AppListComponent extends FieldType {}
