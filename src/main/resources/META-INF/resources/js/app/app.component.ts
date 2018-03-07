import { Component } from '@angular/core';
import { ConfirmDialogModule } from 'primeng-wl/confirmdialog';
import { ConfirmationService } from 'primeng-wl/api';


@Component({
	selector: 'app',
	templateUrl: '/o/overlayprime/js/app/app.html',
	providers: [ConfirmationService]
})

export class AppComponent {

	/**
	 * Comment for caption
	 */
	caption = 'Hello world!';
	/**
	 * Comment for images
	 */
	images: any[];
	/**
	 * Comment for display_dialog
	 */
	display_dialog: boolean = false;
	/**
	 * Comment for display_sidebar
	 */
	display_sidebar: boolean = false;

	/**
 	* Comment for method ´constructor()´.
 	* @param target  Comment for confirmationService.
 	* @returns       Comment for return value.
 	*/
	constructor(private confirmationService: ConfirmationService) {
		this.images = [];
		this.images.push({ source: 'https://misanimales.com/wp-content/uploads/2016/10/crecen-los-gatos.jpg', thumbnail: "https://t1.ea.ltmcdn.com/es/images/5/4/7/img_por_que_mi_gato_no_se_deja_tocar_22745_paso_0_600.jpg", title: 'Sopranos 1' });
		this.images.push({ source: 'https://misanimales.com/wp-content/uploads/2016/10/crecen-los-gatos.jpg', thumbnail: "https://t1.ea.ltmcdn.com/es/images/5/4/7/img_por_que_mi_gato_no_se_deja_tocar_22745_paso_0_600.jpg", title: 'Sopranos 2' });
		this.images.push({ source: 'https://misanimales.com/wp-content/uploads/2016/10/crecen-los-gatos.jpg', thumbnail: "https://t1.ea.ltmcdn.com/es/images/5/4/7/img_por_que_mi_gato_no_se_deja_tocar_22745_paso_0_600.jpg", title: 'Sopranos 3' });
		this.images.push({ source: 'https://misanimales.com/wp-content/uploads/2016/10/crecen-los-gatos.jpg', thumbnail: "https://t1.ea.ltmcdn.com/es/images/5/4/7/img_por_que_mi_gato_no_se_deja_tocar_22745_paso_0_600.jpg", title: 'Sopranos 4' });
	}

    /**
	* Comment for method ´showDialog()´.
	* @returns       Comment for return value.
	*/
	showDialog() {
		this.display_dialog = true;
	}

	/**
	* Comment for method 'confirm()'.
	* @returns       Comment for return value.
	*/
	confirm() {
		this.confirmationService.confirm({
			message: 'Are you sure that you want to perform this action?',
			header: 'Confirmation',
			icon: 'fa-question-circle',
			accept: () => {
			},
			reject: () => {
			}
		});
	}

}