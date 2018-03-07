var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "@angular/core", "primeng-wl/api"], function (require, exports, core_1, api_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var AppComponent = (function () {
        function AppComponent(confirmationService) {
            this.confirmationService = confirmationService;
            this.caption = 'Hello world!';
            this.display_dialog = false;
            this.display_sidebar = false;
            this.images = [];
            this.images.push({ source: 'https://misanimales.com/wp-content/uploads/2016/10/crecen-los-gatos.jpg', thumbnail: "https://t1.ea.ltmcdn.com/es/images/5/4/7/img_por_que_mi_gato_no_se_deja_tocar_22745_paso_0_600.jpg", title: 'Sopranos 1' });
            this.images.push({ source: 'https://misanimales.com/wp-content/uploads/2016/10/crecen-los-gatos.jpg', thumbnail: "https://t1.ea.ltmcdn.com/es/images/5/4/7/img_por_que_mi_gato_no_se_deja_tocar_22745_paso_0_600.jpg", title: 'Sopranos 2' });
            this.images.push({ source: 'https://misanimales.com/wp-content/uploads/2016/10/crecen-los-gatos.jpg', thumbnail: "https://t1.ea.ltmcdn.com/es/images/5/4/7/img_por_que_mi_gato_no_se_deja_tocar_22745_paso_0_600.jpg", title: 'Sopranos 3' });
            this.images.push({ source: 'https://misanimales.com/wp-content/uploads/2016/10/crecen-los-gatos.jpg', thumbnail: "https://t1.ea.ltmcdn.com/es/images/5/4/7/img_por_que_mi_gato_no_se_deja_tocar_22745_paso_0_600.jpg", title: 'Sopranos 4' });
        }
        AppComponent.prototype.showDialog = function () {
            this.display_dialog = true;
        };
        AppComponent.prototype.confirm = function () {
            this.confirmationService.confirm({
                message: 'Are you sure that you want to perform this action?',
                header: 'Confirmation',
                icon: 'fa-question-circle',
                accept: function () {
                },
                reject: function () {
                }
            });
        };
        return AppComponent;
    }());
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app',
            templateUrl: '/o/overlayprime/js/app/app.html',
            providers: [api_1.ConfirmationService]
        }),
        __metadata("design:paramtypes", [api_1.ConfirmationService])
    ], AppComponent);
    exports.AppComponent = AppComponent;
});
//# sourceMappingURL=app.component.js.map