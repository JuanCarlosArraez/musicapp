(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["music-music-register-music-register-module"],{

/***/ "A0vy":
/*!***************************************************************!*\
  !*** ./src/app/music/music-register/music-register.page.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtdXNpYy1yZWdpc3Rlci5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "JhlR":
/*!*************************************************************!*\
  !*** ./src/app/music/music-register/music-register.page.ts ***!
  \*************************************************************/
/*! exports provided: MusicRegisterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MusicRegisterPage", function() { return MusicRegisterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_music_register_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./music-register.page.html */ "PWAh");
/* harmony import */ var _music_register_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./music-register.page.scss */ "A0vy");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth.service */ "lGQG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");









let MusicRegisterPage = class MusicRegisterPage {
    constructor(firestore, afAuth, authSvc, router, toastController) {
        this.firestore = firestore;
        this.afAuth = afAuth;
        this.authSvc = authSvc;
        this.router = router;
        this.toastController = toastController;
        this.afAuth.authState.subscribe(user => {
            if (user) {
                this.userId = user.uid;
            }
        });
    }
    toastusuarioyaregistrado() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: 'Ya has registrado una cuenta con este Email.',
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
    onRegister(email, password) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const user = yield this.authSvc.register(email.value, password.value);
                if (user) {
                    const isVerified = this.authSvc.isEmailVerified(user);
                    this.redirectUser(isVerified);
                    return this.firestore.collection('users').doc(this.userId).set({
                        Password: password.value,
                        rol: "cliente",
                        Intro: "False",
                        createdTime: new Date()
                    });
                }
            }
            catch (error) {
                /*   console.log('Error', error); */
            }
        });
    }
    redirectUser(isVerified) {
        if (isVerified) {
            this.router.navigate(['music-login']);
        }
        else {
            this.router.navigate(['music-verifyemail']);
        }
    }
    ngOnInit() {
    }
};
MusicRegisterPage.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__["AngularFirestore"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__["AngularFireAuth"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"] }
];
MusicRegisterPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-music-register',
        template: _raw_loader_music_register_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_music_register_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], MusicRegisterPage);



/***/ }),

/***/ "PWAh":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/music/music-register/music-register.page.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n<ion-content class=\"centro\">\r\n\r\n<ion-content>\r\n<div class=\"fondologin\"></div>\r\n\r\n<br>\r\n<div class=\"center\"><ion-icon name=\"planet\" color=\"light\" class=\"imagenintro\"></ion-icon></div>\r\n\r\n<div class=\"card\">\r\n<ion-card class=\"card2\">\r\n<ion-card-content>\r\n<br>\r\n\r\n<h1 class=\"ion-text-center\"> ¡Atrévete! </h1>\r\n<div color=\"warning\">\r\n<form>\r\n<ion-item lines=\"full\">\r\n<ion-label position=\"floating\">Email</ion-label>\r\n<ion-input type=\"text\" #email required=\"true\" maxlength=\"40\" autocomplete></ion-input>\r\n</ion-item>\r\n<ion-item lines=\"full\">\r\n<ion-label position=\"floating\">Contraseña</ion-label>\r\n<ion-input type=\"password\" #password required=\"true\" maxlength=\"10\" minlength=\"6\" name=\"password\" ></ion-input>\r\n</ion-item>\r\n<br>\r\n\r\n<ion-row>\r\n<ion-col>\r\n<ion-button class=\"center\" type=\"submit\" (click)=\"onRegister(email, password)\" shape=\"round\" required\r\ncolor=\"light\"\r\nmode=\"ios\">Listo</ion-button>\r\n</ion-col>\r\n</ion-row>\r\n</form>\r\n \r\n</div>\r\n</ion-card-content>\r\n</ion-card>\r\n</div>\r\n<br>\r\n\r\n\r\n<ion-row>\r\n<ion-col>\r\n<p class=\"ion-text-center\">\r\n<a routerLink=\"/music-login\" color=\"dark\" class=\"alreadyaccount\">¿Ya tienes una Cuenta? </a>\r\n</p>\r\n</ion-col>\r\n</ion-row>\r\n\r\n \r\n\r\n</ion-content>");

/***/ }),

/***/ "c6zV":
/*!***********************************************************************!*\
  !*** ./src/app/music/music-register/music-register-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: MusicRegisterPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MusicRegisterPageRoutingModule", function() { return MusicRegisterPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _music_register_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./music-register.page */ "JhlR");




const routes = [
    {
        path: '',
        component: _music_register_page__WEBPACK_IMPORTED_MODULE_3__["MusicRegisterPage"]
    }
];
let MusicRegisterPageRoutingModule = class MusicRegisterPageRoutingModule {
};
MusicRegisterPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MusicRegisterPageRoutingModule);



/***/ }),

/***/ "uj9Q":
/*!***************************************************************!*\
  !*** ./src/app/music/music-register/music-register.module.ts ***!
  \***************************************************************/
/*! exports provided: MusicRegisterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MusicRegisterPageModule", function() { return MusicRegisterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _music_register_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./music-register-routing.module */ "c6zV");
/* harmony import */ var _music_register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./music-register.page */ "JhlR");







let MusicRegisterPageModule = class MusicRegisterPageModule {
};
MusicRegisterPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _music_register_routing_module__WEBPACK_IMPORTED_MODULE_5__["MusicRegisterPageRoutingModule"]
        ],
        declarations: [_music_register_page__WEBPACK_IMPORTED_MODULE_6__["MusicRegisterPage"]]
    })
], MusicRegisterPageModule);



/***/ })

}]);
//# sourceMappingURL=music-music-register-music-register-module.js.map