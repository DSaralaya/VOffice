import { APP_BASE_HREF, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './shared/component/header/header.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { JobsComponent } from './company/jobs/jobs.component';
import { ApplicationsComponent } from './company/applications/applications.component';
import { SearchjobComponent } from './user/searchjob/searchjob.component';
import { JobinfoComponent } from './user/jobinfo/jobinfo.component';
import { UserinfoComponent } from './company/userinfo/userinfo.component';
import { CProfileComponent } from './company/profile/cprofile.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';

import { JobListComponent } from './formly/joblist';
import { AppListComponent } from './formly/applist';
import { ProfileComponent } from './user/profile/profile.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './shared/services/AuthInterceptor';
import { remoteService } from './shared/services/remoteservice';
import { AuthGuardService as AuthGuard } from './shared/services/AuthGuardService';
import { RoleGuardService as RoleGuard } from './shared/services/role-guard.service';
import { JwtHelperService, JwtModule } from '@auth0/angular-jwt';
import { CompanyDashboardComponent } from './company/dashboard/cdashboard.component';
import { UserDashboardComponent } from './user/dashboard/dashboard.component';
import { AuthService } from './shared/services/auth.service';
import { ShowAuthedDirective } from './directives/show-authed.directive';
import { SettingsComponent } from './settings/settings.component';

const appRoutes: Routes = [
	{ path: '', redirectTo: 'home', pathMatch: 'full' },
	{ path: 'home', component: HomeComponent },
	{ path: 'login', component: LoginComponent },
	{ path: 'register', component: RegisterComponent },
	{ path: 'dashboard', component: DashboardComponent, canActivate: [ AuthGuard ] },
	{ path: 'jobinfo/:id', component: JobinfoComponent, canActivate: [ AuthGuard ] },
	{ path: 'searchjob', component: SearchjobComponent, canActivate: [ AuthGuard ] },
	{ path: 'register', component: RegisterComponent },
	{ path: 'job', component: JobsComponent, canActivate: [ AuthGuard ] },
	{ path: 'applications', component: ApplicationsComponent, canActivate: [ AuthGuard ] },
	{ path: 'userinfo/:id/:uid', component: UserinfoComponent, canActivate: [ AuthGuard ] },
	{ path: 'cprofile', component: CProfileComponent, canActivate: [ AuthGuard ] },
	{ path: 'uprofile', component: ProfileComponent, canActivate: [ AuthGuard ] },
	{ path: 'cdashboard', component: CompanyDashboardComponent, canActivate: [ AuthGuard ] },
	{ path: 'udashboard', component: UserDashboardComponent, canActivate: [ AuthGuard ] },
	{ path: 'settings', component: SettingsComponent },
	{ path: '**', redirectTo: '' }
];

const formyconfig = FormlyModule.forRoot({
	types: [ { name: 'joblist', component: JobListComponent }, { name: 'applist', component: AppListComponent } ],
	validationMessages: [
		{
			name: 'required',
			message: (error, field) => `${field.templateOptions.label} is required.`
		}
	]
});

export const httpInterceptorProviders = [ { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true } ];
export function getToken(): string {
	return localStorage.getItem('id_token');
}

@NgModule({
	declarations: [
		ShowAuthedDirective,
		AppComponent,
		LoginComponent,
		HeaderComponent,
		DashboardComponent,
		JobsComponent,
		ApplicationsComponent,
		SearchjobComponent,
		JobinfoComponent,
		UserinfoComponent,
		CProfileComponent,
		RegisterComponent,
		HomeComponent,
		JobListComponent,
		AppListComponent,
		ProfileComponent,
		UserDashboardComponent,
		CompanyDashboardComponent,
		SettingsComponent
	],
	imports: [
		JwtModule.forRoot({
			config: {
				tokenGetter: getToken
			}
		}),
		BrowserModule,
		HttpClientModule,
		ReactiveFormsModule,
		formyconfig,
		FormlyMaterialModule,
		BrowserAnimationsModule,
		RouterModule.forRoot(appRoutes),
		MatButtonModule,
		MatCardModule,
		MatListModule,
		MatTabsModule
	],
	providers: [ AuthService, AuthGuard, JwtHelperService, remoteService, httpInterceptorProviders, { provide: LocationStrategy, useClass: HashLocationStrategy }, { provide: APP_BASE_HREF, useValue: '/' } ],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
