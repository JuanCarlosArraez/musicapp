(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["music-music-forgot-password-music-forgot-password-module"],{

/***/ "SZ+M":
/*!*****************************************************************************!*\
  !*** ./src/app/music/music-forgot-password/music-forgot-password.page.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".resetpass {\n  height: 150px;\n  width: 150px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxtdXNpYy1mb3Jnb3QtcGFzc3dvcmQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLFlBQUE7QUFDSiIsImZpbGUiOiJtdXNpYy1mb3Jnb3QtcGFzc3dvcmQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlc2V0cGFzc3tcclxuICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbn0iXX0= */");

/***/ }),

/***/ "TYR8":
/*!*************************************************************************************!*\
  !*** ./src/app/music/music-forgot-password/music-forgot-password-routing.module.ts ***!
  \*************************************************************************************/
/*! exports provided: MusicForgotPasswordPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MusicForgotPasswordPageRoutingModule", function() { return MusicForgotPasswordPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _music_forgot_password_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./music-forgot-password.page */ "dYjP");




const routes = [
    {
        path: '',
        component: _music_forgot_password_page__WEBPACK_IMPORTED_MODULE_3__["MusicForgotPasswordPage"]
    }
];
let MusicForgotPasswordPageRoutingModule = class MusicForgotPasswordPageRoutingModule {
};
MusicForgotPasswordPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MusicForgotPasswordPageRoutingModule);



/***/ }),

/***/ "b4UP":
/*!*****************************************************************************!*\
  !*** ./src/app/music/music-forgot-password/music-forgot-password.module.ts ***!
  \*****************************************************************************/
/*! exports provided: MusicForgotPasswordPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MusicForgotPasswordPageModule", function() { return MusicForgotPasswordPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _music_forgot_password_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./music-forgot-password-routing.module */ "TYR8");
/* harmony import */ var _music_forgot_password_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./music-forgot-password.page */ "dYjP");







let MusicForgotPasswordPageModule = class MusicForgotPasswordPageModule {
};
MusicForgotPasswordPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _music_forgot_password_routing_module__WEBPACK_IMPORTED_MODULE_5__["MusicForgotPasswordPageRoutingModule"]
        ],
        declarations: [_music_forgot_password_page__WEBPACK_IMPORTED_MODULE_6__["MusicForgotPasswordPage"]]
    })
], MusicForgotPasswordPageModule);



/***/ }),

/***/ "dYjP":
/*!***************************************************************************!*\
  !*** ./src/app/music/music-forgot-password/music-forgot-password.page.ts ***!
  \***************************************************************************/
/*! exports provided: MusicForgotPasswordPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MusicForgotPasswordPage", function() { return MusicForgotPasswordPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_music_forgot_password_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./music-forgot-password.page.html */ "do+1");
/* harmony import */ var _music_forgot_password_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./music-forgot-password.page.scss */ "SZ+M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/auth.service */ "lGQG");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");







let MusicForgotPasswordPage = class MusicForgotPasswordPage {
    constructor(authSvc, router, toastController) {
        this.authSvc = authSvc;
        this.router = router;
        this.toastController = toastController;
    }
    toastemailincorrecto() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: 'Ingresa un Email válido',
                duration: 2000,
                cssClass: 'eltoastregister',
                color: 'light',
                position: 'top',
                buttons: [
                    {
                        side: 'start',
                        icon: 'lock-closed',
                    }
                ]
            });
            toast.present();
        });
    }
    toastresetpassword() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: 'Debes estar registrado primero.',
                duration: 2000,
                cssClass: 'eltoastregister',
                color: 'light',
                position: 'top',
                buttons: [
                    {
                        side: 'start',
                        icon: 'lock-closed',
                    }
                ]
            });
            toast.present();
        });
    }
    onResetPassword(email) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                yield this.authSvc.resetPassword(email.value);
                this.router.navigate(['/music-login']);
            }
            catch (error) {
                if (error.code === 'auth/invalid-email') {
                    this.toastemailincorrecto();
                    this.router.navigate(['/forgot-password']);
                }
                if (error.code === 'auth/user-not-found') {
                    this.toastresetpassword();
                    this.router.navigate(['/forgot-password']);
                }
                /*  console.log('Error->', error); */
            }
        });
    }
    ngOnInit() {
    }
};
MusicForgotPasswordPage.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"] }
];
MusicForgotPasswordPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-music-forgot-password',
        template: _raw_loader_music_forgot_password_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_music_forgot_password_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], MusicForgotPasswordPage);



/***/ }),

/***/ "do+1":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/music/music-forgot-password/music-forgot-password.page.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n<ion-content class=\"centro\">\r\n<div class=\"fondologin\"></div>\r\n  \r\n<br>\r\n<div class=\"center\"><ion-icon name=\"planet\" color=\"light\" class=\"imagenintro\"></ion-icon></div>\r\n  \r\n  \r\n<div class=\"card\">\r\n<ion-card class=\"card2\">\r\n<ion-card-content>\r\n\r\n<div class=\"center\"><img src=\"assets/img/forgotpassword.svg\" alt=\"\"  class=\"resetpass\"></div>\r\n<br>\r\n\r\n<h1 class=\"ion-text-center\"> ¡Será Sencillo! </h1>\r\n<div color=\"light\">\r\n<form>\r\n<ion-item lines=\"full\">\r\n<ion-label position=\"floating\">Email</ion-label>\r\n<ion-input type=\"text\" #email required></ion-input>\r\n</ion-item>\r\n\r\n<ion-row>\r\n<ion-col>\r\n<ion-button type=\"submit\" \r\n(click)=\"onResetPassword(email)\" \r\nexpand=\"block\"\r\ncolor=\"light\"\r\nmode=\"ios\">Restablecer</ion-button>\r\n</ion-col>\r\n</ion-row>\r\n</form>\r\n</div>\r\n</ion-card-content>\r\n</ion-card>\r\n</div>\r\n<br>\r\n      \r\n  \r\n<ion-row>\r\n<ion-col>\r\n<ion-button\r\nclass=\"ion-text-center\" \r\nrouterLink=\"/music-login\"\r\nexpand=\"block\"\r\ncolor=\"light\"\r\nmode=\"ios\">Login\r\n</ion-button>\r\n</ion-col>\r\n</ion-row>\r\n  \r\n\r\n  </ion-content>");

/***/ })

}]);
//# sourceMappingURL=music-music-forgot-password-music-forgot-password-module.js.map