import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

import { AuthService } from '../shared/services/auth.service';

@Directive({ selector: '[showAuthed]' })
export class ShowAuthedDirective {
	constructor(private templateRef: TemplateRef<any>, private authservice: AuthService, private viewContainer: ViewContainerRef) {}

	condition: boolean;

	@Input()
	set showAuthed(condition: boolean) {
		this.condition = condition;
	}

	ngOnInit() {
		this.authservice.authenticated.subscribe((isAuthenticated) => {
			debugger;
			isAuthenticated = this.authservice.isAuthenticated();
			if ((isAuthenticated && this.condition) || (!isAuthenticated && !this.condition)) {
				this.viewContainer.clear();
				this.viewContainer.createEmbeddedView(this.templateRef);
			} else {
				this.viewContainer.clear();
			}
		});
	}
}
