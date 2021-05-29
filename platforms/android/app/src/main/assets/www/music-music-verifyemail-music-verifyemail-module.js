(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["music-music-verifyemail-music-verifyemail-module"],{

/***/ "GvVG":
/*!*******************************************************************!*\
  !*** ./src/app/music/music-verifyemail/music-verifyemail.page.ts ***!
  \*******************************************************************/
/*! exports provided: MusicVerifyemailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MusicVerifyemailPage", function() { return MusicVerifyemailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_music_verifyemail_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./music-verifyemail.page.html */ "wMer");
/* harmony import */ var _music_verifyemail_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./music-verifyemail.page.scss */ "TFXr");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "lGQG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");






let MusicVerifyemailPage = class MusicVerifyemailPage {
    constructor(authSvc, router) {
        this.authSvc = authSvc;
        this.router = router;
        this.user$ = this.authSvc.afAuth.user;
    }
    onSendEmail() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                yield this.authSvc.sendVerifcationEmail();
            }
            catch (error) {
                console.log('Error->', error);
            }
        });
    }
    ngOnDestroy() {
        this.authSvc.logout();
    }
    ngOnInit() {
        setTimeout((router) => {
            this.router.navigate(['/music-login']);
        }, 6000);
    }
};
MusicVerifyemailPage.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
MusicVerifyemailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-music-verifyemail',
        template: _raw_loader_music_verifyemail_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_music_verifyemail_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], MusicVerifyemailPage);



/***/ }),

/***/ "O+HZ":
/*!*********************************************************************!*\
  !*** ./src/app/music/music-verifyemail/music-verifyemail.module.ts ***!
  \*********************************************************************/
/*! exports provided: MusicVerifyemailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MusicVerifyemailPageModule", function() { return MusicVerifyemailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _music_verifyemail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./music-verifyemail-routing.module */ "UtJm");
/* harmony import */ var _music_verifyemail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./music-verifyemail.page */ "GvVG");







let MusicVerifyemailPageModule = class MusicVerifyemailPageModule {
};
MusicVerifyemailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _music_verifyemail_routing_module__WEBPACK_IMPORTED_MODULE_5__["MusicVerifyemailPageRoutingModule"]
        ],
        declarations: [_music_verifyemail_page__WEBPACK_IMPORTED_MODULE_6__["MusicVerifyemailPage"]]
    })
], MusicVerifyemailPageModule);



/***/ }),

/***/ "TFXr":
/*!*********************************************************************!*\
  !*** ./src/app/music/music-verifyemail/music-verifyemail.page.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtdXNpYy12ZXJpZnllbWFpbC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "UtJm":
/*!*****************************************************************************!*\
  !*** ./src/app/music/music-verifyemail/music-verifyemail-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: MusicVerifyemailPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MusicVerifyemailPageRoutingModule", function() { return MusicVerifyemailPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _music_verifyemail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./music-verifyemail.page */ "GvVG");




const routes = [
    {
        path: '',
        component: _music_verifyemail_page__WEBPACK_IMPORTED_MODULE_3__["MusicVerifyemailPage"]
    }
];
let MusicVerifyemailPageRoutingModule = class MusicVerifyemailPageRoutingModule {
};
MusicVerifyemailPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MusicVerifyemailPageRoutingModule);



/***/ }),

/***/ "wMer":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/music/music-verifyemail/music-verifyemail.page.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content class=\"center\"  *ngIf=\"user$ | async as user\">\r\n<div class=\"fondologin\"></div>\r\n  \r\n<br>\r\n<br>\r\n<br>\r\n<div class=\"center\"><ion-icon name=\"planet\" color=\"light\" class=\"imagenintro\"></ion-icon></div>\r\n  \r\n<div class=\"card\">\r\n<ion-card class=\"card2\">\r\n<ion-card-content>\r\n<br>\r\n  \r\n<div>\r\n<div class=\"center\"><img src=\"assets/img/check-circle.png\" alt=\"\" style=\"width: 80px; height: 80px;\"></div>\r\n<ion-row>\r\n<ion-col>\r\n<h2 class=\"ion-text-center\">¡Gracias por registrarte!</h2>\r\n<br>\r\n<p class=\"ion-text-justify\">Hemos enviado un correo electrónico de confirmación a <strong>{{user.email}}</strong>\r\n    Revise su correo electrónico y haga clic en el enlace para verificar su dirección de correo electrónico.</p></ion-col>\r\n</ion-row>\r\n<ion-row>\r\n<ion-col>\r\n\r\n<ion-button \r\nmode=\"ios\"\r\ntype=\"submit\" \r\ncolor=\"light\" \r\nexpand=\"block\" (click)=\"onSendEmail()\">\r\nReenviar  verificación\r\n</ion-button>\r\n</ion-col>\r\n</ion-row>\r\n</div>\r\n</ion-card-content>\r\n</ion-card>\r\n</div>\r\n<br>\r\n     \r\n\r\n<ion-button\r\nclass=\"ion-text-center\" \r\nrouterLink=\"/login\"\r\nexpand=\"block\"\r\ncolor=\"light\"\r\n mode=\"ios\">Login\r\n</ion-button>\r\n   \r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=music-music-verifyemail-music-verifyemail-module.js.map