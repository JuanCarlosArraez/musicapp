(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["music-music-login-music-login-module"],{

/***/ "C49j":
/*!*********************************************************!*\
  !*** ./src/app/music/music-login/music-login.module.ts ***!
  \*********************************************************/
/*! exports provided: MusicLoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MusicLoginPageModule", function() { return MusicLoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _music_login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./music-login-routing.module */ "Uvc5");
/* harmony import */ var _music_login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./music-login.page */ "zXeV");







let MusicLoginPageModule = class MusicLoginPageModule {
};
MusicLoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _music_login_routing_module__WEBPACK_IMPORTED_MODULE_5__["MusicLoginPageRoutingModule"]
        ],
        declarations: [_music_login_page__WEBPACK_IMPORTED_MODULE_6__["MusicLoginPage"]]
    })
], MusicLoginPageModule);



/***/ }),

/***/ "Uvc5":
/*!*****************************************************************!*\
  !*** ./src/app/music/music-login/music-login-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: MusicLoginPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MusicLoginPageRoutingModule", function() { return MusicLoginPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _music_login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./music-login.page */ "zXeV");




const routes = [
    {
        path: '',
        component: _music_login_page__WEBPACK_IMPORTED_MODULE_3__["MusicLoginPage"]
    }
];
let MusicLoginPageRoutingModule = class MusicLoginPageRoutingModule {
};
MusicLoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MusicLoginPageRoutingModule);



/***/ }),

/***/ "V8Ep":
/*!*********************************************************!*\
  !*** ./src/app/music/music-login/music-login.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtdXNpYy1sb2dpbi5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "qGzi":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/music/music-login/music-login.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("  \r\n\r\n\r\n<ion-content class=\"centro\">\r\n<div class=\"fondologin\"></div>\r\n   \r\n  \r\n<div class=\"center\"><ion-icon name=\"planet\" color=\"light\" class=\"imagenintro\"></ion-icon></div>\r\n  \r\n<div class=\"card\">\r\n<ion-card class=\"card2\" color=\"\">\r\n<ion-card-content>\r\n<br>\r\n  \r\n<h1 class=\"ion-text-center\"> ¡Hola! </h1>\r\n<div color=\"light\">\r\n<form> \r\n<ion-item lines=\"full\">\r\n<ion-label position=\"floating\" >Email</ion-label>\r\n<ion-input type=\"email\" #email required=\"true\" maxlength=\"40\" autocomplete></ion-input>\r\n</ion-item>\r\n<ion-item lines=\"full\">\r\n<ion-label position=\"floating\">Contraseña</ion-label>\r\n<ion-input type=\"password\" #password required=\"true\" maxlength=\"10\" minlength=\"6\"></ion-input>\r\n</ion-item>\r\n<br>\r\n<br>\r\n\r\n\r\n<ion-row >\r\n<ion-col>\r\n<ion-button\r\nclass=\"center\"\r\n type=\"submit\"\r\n(click)=\"onLogin(email, password)\" \r\nshape=\"round\"\r\ncolor=\"light\"\r\nmode=\"ios\">Login</ion-button>\r\n</ion-col>\r\n</ion-row> \r\n<br>\r\n</form>\r\n</div>\r\n</ion-card-content>\r\n</ion-card>\r\n</div>\r\n          \r\n  \r\n<ion-row>\r\n<ion-col>\r\n<p class=\"ion-text-center\">\r\n<a routerLink=\"/music-forgot-password\" color=\"dark\" class=\"nopuedesentrar\"> ¿No puedes entrar? </a>\r\n</p>\r\n</ion-col>\r\n</ion-row>\r\n  \r\n\r\n<div  *ngIf=\"user$  | async as user; else noregister \"></div>\r\n\r\n<ng-template #noregister>\r\n<ion-row>\r\n<ion-col>\r\n<ion-button\r\nclass=\"ion-text-center\" \r\nrouterLink=\"/music-register\"\r\n shape=\"round\"\r\nexpand=\"block\"\r\ncolor=\"light\"\r\nmode=\"ios\">¡Regístrate!</ion-button>\r\n </ion-col>\r\n</ion-row>\r\n</ng-template>\r\n\r\n\r\n\r\n  </ion-content>\r\n");

/***/ }),

/***/ "zXeV":
/*!*******************************************************!*\
  !*** ./src/app/music/music-login/music-login.page.ts ***!
  \*******************************************************/
/*! exports provided: MusicLoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MusicLoginPage", function() { return MusicLoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_music_login_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./music-login.page.html */ "qGzi");
/* harmony import */ var _music_login_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./music-login.page.scss */ "V8Ep");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "lGQG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");








let MusicLoginPage = class MusicLoginPage {
    constructor(afAuth, authSvc, router, toastController) {
        this.afAuth = afAuth;
        this.authSvc = authSvc;
        this.router = router;
        this.toastController = toastController;
        this.user$ = this.authSvc.afAuth.user;
        this.afAuth.authState.subscribe(user => {
            if (user) {
                this.userId = user.uid;
            }
        });
    }
    toastdatosincompatibles() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: 'Algunos datos suministrados son incorrectos.',
                duration: 2000,
                cssClass: 'eltoast',
                color: 'light',
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
    onLogin(email, password) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const user = yield this.authSvc.login(email.value, password.value);
                if (user) {
                    /*    this.showSpinner = true;
                       localStorage.setItem('showSpinner', 'true'); */
                    const isVerified = this.authSvc.isEmailVerified(user);
                    this.redirectUser(isVerified);
                }
            }
            catch (error) {
                this.toastdatosincompatibles();
            }
        });
    }
    redirectUser(isVerified) {
        if (isVerified) {
            this.router.navigate(['/folder/Inicio']);
        }
        else {
            this.router.navigate(['music-verifyemail']);
        }
    }
    ngOnInit() {
    }
};
MusicLoginPage.ctorParameters = () => [
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__["AngularFireAuth"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"] }
];
MusicLoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-music-login',
        template: _raw_loader_music_login_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_music_login_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], MusicLoginPage);



/***/ })

}]);
//# sourceMappingURL=music-music-login-music-login-module.js.map