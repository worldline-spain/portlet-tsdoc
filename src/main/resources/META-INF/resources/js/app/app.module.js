var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "@angular/core", "@angular/platform-browser", "@angular/forms", "./app.component", "../../libs/animations/src/animations", "primeng-wl/confirmdialog", "primeng-wl/lightbox", "primeng-wl/overlaypanel", "primeng-wl/dialog", "primeng-wl/sidebar", "primeng-wl/tooltip", "primeng-wl/card", "primeng-wl/primeng", "chart.js/dist/Chart.min"], function (require, exports, core_1, platform_browser_1, forms_1, app_component_1, animations_1, confirmdialog_1, lightbox_1, overlaypanel_1, dialog_1, sidebar_1, tooltip_1, card_1, primeng_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var AppModule = (function () {
        function AppModule() {
        }
        // Avoid bootstraping any component statically because we need to attach to
        // the portlet's DOM, which is different for each portlet instance and,
        // thus, cannot be determined until the page is rendered (during runtime).
        AppModule.prototype.ngDoBootstrap = function () { };
        return AppModule;
    }());
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                card_1.CardModule,
                tooltip_1.TooltipModule,
                sidebar_1.SidebarModule,
                dialog_1.DialogModule,
                overlaypanel_1.OverlayPanelModule,
                lightbox_1.LightboxModule,
                confirmdialog_1.ConfirmDialogModule,
                animations_1.BrowserAnimationsModule,
                primeng_1.InputTextModule,
                primeng_1.ButtonModule,
                primeng_1.RadioButtonModule,
                forms_1.FormsModule,
                primeng_1.ChartModule
            ],
            declarations: [app_component_1.AppComponent],
            entryComponents: [app_component_1.AppComponent],
            bootstrap: [],
            providers: [],
            exports: []
        })
    ], AppModule);
    exports.AppModule = AppModule;
});
//# sourceMappingURL=app.module.js.map