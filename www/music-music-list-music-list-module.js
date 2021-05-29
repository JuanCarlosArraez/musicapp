(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["music-music-list-music-list-module"],{

/***/ "0DOL":
/*!*******************************************************!*\
  !*** ./src/app/music/music-list/music-list.module.ts ***!
  \*******************************************************/
/*! exports provided: MusicListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MusicListPageModule", function() { return MusicListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _music_list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./music-list-routing.module */ "LszA");
/* harmony import */ var _music_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./music-list.page */ "JzBV");
/* harmony import */ var _components_global_back_back_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/global/back/back.component */ "avQE");
/* harmony import */ var _components_inicio_buttons_start_buttons_start_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/inicio/buttons-start/buttons-start.component */ "mYU1");
/* harmony import */ var _components_album_header_album_header_album_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/album/header-album/header-album.component */ "R+qG");
/* harmony import */ var _components_album_section_uno_section_uno_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/album/section-uno/section-uno.component */ "uOtd");
/* harmony import */ var _components_album_section_dos_section_dos_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/album/section-dos/section-dos.component */ "AUDz");







/* global */

/* Inicio */

/* Album */



let MusicListPageModule = class MusicListPageModule {
};
MusicListPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _music_list_routing_module__WEBPACK_IMPORTED_MODULE_5__["MusicListPageRoutingModule"]
        ],
        declarations: [
            _music_list_page__WEBPACK_IMPORTED_MODULE_6__["MusicListPage"],
            _components_global_back_back_component__WEBPACK_IMPORTED_MODULE_7__["BackComponent"],
            _components_inicio_buttons_start_buttons_start_component__WEBPACK_IMPORTED_MODULE_8__["ButtonsStartComponent"],
            _components_album_header_album_header_album_component__WEBPACK_IMPORTED_MODULE_9__["HeaderAlbumComponent"],
            _components_album_section_uno_section_uno_component__WEBPACK_IMPORTED_MODULE_10__["SectionUnoComponent"],
            _components_album_section_dos_section_dos_component__WEBPACK_IMPORTED_MODULE_11__["SectionDosComponent"]
        ]
    })
], MusicListPageModule);



/***/ }),

/***/ "JzBV":
/*!*****************************************************!*\
  !*** ./src/app/music/music-list/music-list.page.ts ***!
  \*****************************************************/
/*! exports provided: MusicListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MusicListPage", function() { return MusicListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_music_list_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./music-list.page.html */ "r4B5");
/* harmony import */ var _music_list_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./music-list.page.scss */ "kPyW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_music_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/music.service */ "Ie7a");






let MusicListPage = class MusicListPage {
    constructor(router, musicservice) {
        this.router = router;
        this.musicservice = musicservice;
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
        });
    }
};
MusicListPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _services_music_service__WEBPACK_IMPORTED_MODULE_5__["MusicService"] }
];
MusicListPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-music-list',
        template: _raw_loader_music_list_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_music_list_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], MusicListPage);



/***/ }),

/***/ "LszA":
/*!***************************************************************!*\
  !*** ./src/app/music/music-list/music-list-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: MusicListPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MusicListPageRoutingModule", function() { return MusicListPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _music_list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./music-list.page */ "JzBV");




const routes = [
    {
        path: '',
        component: _music_list_page__WEBPACK_IMPORTED_MODULE_3__["MusicListPage"]
    }
];
let MusicListPageRoutingModule = class MusicListPageRoutingModule {
};
MusicListPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MusicListPageRoutingModule);



/***/ }),

/***/ "kPyW":
/*!*******************************************************!*\
  !*** ./src/app/music/music-list/music-list.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtdXNpYy1saXN0LnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "r4B5":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/music/music-list/music-list.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n<ion-content>\r\n<!-- /////////// -->\r\n <!--------Albums-->\r\n <!-- /////////// -->\r\n\r\n<!-- background -->\r\n<app-back></app-back>\r\n<!-- header -->\r\n<app-header-album></app-header-album>\r\n<!-- Section1 ('big' Carrousel )-->\r\n<app-section-uno></app-section-uno>\r\n<app-buttons-start></app-buttons-start>\r\n \r\n\r\n\r\n\r\n\r\n<!-- section2 (Mini Carrousel) -->\r\n<app-section-dos></app-section-dos>\r\n\r\n\r\n\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=music-music-list-music-list-module.js.map