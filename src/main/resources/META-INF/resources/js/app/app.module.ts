import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '../../libs/animations/src/animations';
import 'chart.js/dist/Chart.min';
import {ConfirmDialogModule} from 'primeng-wl/confirmdialog';
import { LightboxModule } from 'primeng-wl/lightbox';
import { OverlayPanelModule } from 'primeng-wl/overlaypanel';
import { DialogModule } from 'primeng-wl/dialog';
import { SidebarModule } from 'primeng-wl/sidebar';
import { TooltipModule } from 'primeng-wl/tooltip';
import { CardModule } from 'primeng-wl/card';
import { InputTextModule, ButtonModule, RadioButtonModule,ChartModule } from 'primeng-wl/primeng';

@NgModule({
	imports: [
		BrowserModule,
		CardModule,
		TooltipModule,
		SidebarModule,
		DialogModule,
		OverlayPanelModule,
		LightboxModule,
		ConfirmDialogModule,
		BrowserAnimationsModule,
		InputTextModule,
		ButtonModule,
		RadioButtonModule,
		FormsModule,
		ChartModule
	],
	declarations: [AppComponent],
	entryComponents: [AppComponent],
	bootstrap: [], // Don't bootstrap any component statically (see ngDoBootstrap() below)
	providers: [],
	exports: []
})

export class AppModule {
	// Avoid bootstraping any component statically because we need to attach to
	// the portlet's DOM, which is different for each portlet instance and,
	// thus, cannot be determined until the page is rendered (during runtime).
	
	/**
	* Comment for method ´ngDoBootstrap()´.
	* @returns       Comment for return value.
	*/
	ngDoBootstrap() { }
}