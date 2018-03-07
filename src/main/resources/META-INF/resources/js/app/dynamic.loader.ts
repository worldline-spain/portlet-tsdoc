import {
	ApplicationRef,
	ComponentFactoryResolver,
	Injector,
	NgZone,
	Type,
} from '@angular/core';

export class DynamicLoader {
	/**
	* Comment for method ´constructor()´.
	* @param target  Comment for parameter ´target´.
	* @returns       Comment for return value.
	*/	
	constructor(private injector: Injector) {}

	// Load an Angular component dinamically so that we can attach it to
	// the portlet's DOM, which is different for each portlet instance and,
	// thus, cannot be determined until the page is rendered (during runtime).
	
	/**
	* Comment for method ´loadComponent()´.
	* @param target  Comment for parameter ´target´.
	* @returns       Comment for return value.
	*/	
	loadComponent<T>(component: Type<T>, dom: Element) {
		(<NgZone>this.injector.get(NgZone)).run(() => {
			const componentFactory = this.injector
				.get(ComponentFactoryResolver)
				.resolveComponentFactory(component);
			const componentRef = componentFactory.create(
				this.injector,
				[],
				dom,
			);
			this.injector.get(ApplicationRef).attachView(componentRef.hostView);
		});
	}
}