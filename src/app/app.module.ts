import { APP_BASE_HREF, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './shared/header/header.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { JobsComponent } from './company/jobs/jobs.component';
import { ApplicationsComponent } from './company/applications/applications.component';
import { SearchjobComponent } from './user/searchjob/searchjob.component';
import { JobinfoComponent } from './user/jobinfo/jobinfo.component';
import { UserinfoComponent } from './company/userinfo/userinfo.component';
import { ProfileComponent } from './company/profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';

import { JobListComponent } from './formly/joblist';
const appRoutes: Routes = [
	{ path: '', redirectTo: 'home', pathMatch: 'full' },
	{ path: 'home', component: HomeComponent },
	{ path: 'login', component: LoginComponent },
	{ path: 'register', component: RegisterComponent },
	{ path: 'dashboard', component: DashboardComponent },
	{ path: 'jobinfo', component: JobinfoComponent },
	{ path: 'searchjob', component: SearchjobComponent },
	{ path: 'register', component: RegisterComponent }
];
const formyconfig = FormlyModule.forRoot({
	types: [ { name: 'joblist', component: JobListComponent } ],
	validationMessages: [
		{
			name: 'required',
			message: (error, field) => `${field.templateOptions.label} is required.`
		}
	]
});
@NgModule({
	declarations: [ AppComponent, LoginComponent, HeaderComponent, DashboardComponent, JobsComponent, ApplicationsComponent, SearchjobComponent, JobinfoComponent, UserinfoComponent, ProfileComponent, RegisterComponent, HomeComponent, JobListComponent ],
	imports: [ BrowserModule, ReactiveFormsModule, formyconfig, FormlyMaterialModule, BrowserAnimationsModule, RouterModule.forRoot(appRoutes), MatButtonModule, MatCardModule, MatListModule ],
	providers: [ { provide: LocationStrategy, useClass: HashLocationStrategy }, { provide: APP_BASE_HREF, useValue: '/' } ],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
