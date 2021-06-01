(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["music-music-album-detail-music-album-detail-module"],{

/***/ "/OuX":
/*!***********************************************************************!*\
  !*** ./src/app/music/music-album-detail/music-album-detail.page.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtdXNpYy1hbGJ1bS1kZXRhaWwucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "4Vuy":
/*!*******************************************************************************!*\
  !*** ./src/app/music/music-album-detail/music-album-detail-routing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: MusicAlbumDetailPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MusicAlbumDetailPageRoutingModule", function() { return MusicAlbumDetailPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _music_album_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./music-album-detail.page */ "x3tA");




const routes = [
    {
        path: '',
        component: _music_album_detail_page__WEBPACK_IMPORTED_MODULE_3__["MusicAlbumDetailPage"]
    }
];
let MusicAlbumDetailPageRoutingModule = class MusicAlbumDetailPageRoutingModule {
};
MusicAlbumDetailPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MusicAlbumDetailPageRoutingModule);



/***/ }),

/***/ "A1Nu":
/*!*****************************************************************************!*\
  !*** ./src/app/components/headers/album-detail/album-detail.component.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhbGJ1bS1kZXRhaWwuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "E28r":
/*!***************************************************************************!*\
  !*** ./src/app/components/headers/album-detail/album-detail.component.ts ***!
  \***************************************************************************/
/*! exports provided: AlbumDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlbumDetailComponent", function() { return AlbumDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_album_detail_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./album-detail.component.html */ "w/a8");
/* harmony import */ var _album_detail_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./album-detail.component.scss */ "A1Nu");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _music_music_search_music_search_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../music/music-search/music-search.page */ "ff9t");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");







let AlbumDetailComponent = class AlbumDetailComponent {
    constructor(modalController, activatedRoute) {
        this.modalController = modalController;
        this.activatedRoute = activatedRoute;
    }
    openSearchModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log("openModal");
            const modal = yield this.modalController.create({
                component: _music_music_search_music_search_page__WEBPACK_IMPORTED_MODULE_5__["MusicSearchPage"],
                componentProps: {}
            });
            return yield modal.present();
        });
    }
    ngOnInit() {
        this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    }
};
AlbumDetailComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] }
];
AlbumDetailComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-album-detail',
        template: _raw_loader_album_detail_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_album_detail_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AlbumDetailComponent);



/***/ }),

/***/ "kZ1V":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/music/music-album-detail/music-album-detail.page.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<ion-content>\n\n<app-back-short></app-back-short>\n<!-- header -->\n<app-album-detail></app-album-detail>\n\n<ion-grid fixed class=\"ion-no-padding\">\n\n    <div class=\"detail-header fade-out\" [ngStyle]=\"{'background-image': 'url(' + itemArray.image + ')'}\">\n    <!-- <ion-img [src]=\" itemArray.image\"></ion-img> -->\n    </div>\n    <div class=\"margin-top-10\">\n      <ion-item lines=\"none\">\n          <ion-label  text-wrap>\n              <h1 class=\"food_header1 detail-name tracking-in-expand\">{{itemArray.name}}</h1>\n              <h2 class=\"food_header3 detail-price \"> {{itemArray.short_description}}</h2>\n          </ion-label>\n          <div slot=\"end\">\n              <ion-icon  style=\"font-size: 18px !important;\" color=\"danger\" *ngFor=\"let i of [0,1,2,3,4]\" [name]=\"i < itemArray.rating  ? 'star' : 'star-outline'\"></ion-icon>\n          </div>\n      </ion-item>  \n    </div>\n    \n    <ion-row>\n      <ion-col size-lg=\"8\" size-md=\"8\" size-sm=\"12\" size=\"12\">\n          <!--*********** Description ***********-->\n          <div class=\"ion-padding fade-out\">\n            <p class=\"margin-bottom-3\">\n                {{itemArray.description}}\n            </p>\n          </div>\n      </ion-col>\n    </ion-row>\n\n\n</ion-grid>\n</ion-content>\n");

/***/ }),

/***/ "w/Zp":
/*!***********************************************************************!*\
  !*** ./src/app/music/music-album-detail/music-album-detail.module.ts ***!
  \***********************************************************************/
/*! exports provided: MusicAlbumDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MusicAlbumDetailPageModule", function() { return MusicAlbumDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _music_album_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./music-album-detail-routing.module */ "4Vuy");
/* harmony import */ var _music_album_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./music-album-detail.page */ "x3tA");
/* harmony import */ var _components_global_back_short_back_short_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/global//back-short/back-short.component */ "SdWb");
/* harmony import */ var _components_headers_album_detail_album_detail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/headers/album-detail/album-detail.component */ "E28r");









let MusicAlbumDetailPageModule = class MusicAlbumDetailPageModule {
};
MusicAlbumDetailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _music_album_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__["MusicAlbumDetailPageRoutingModule"]
        ],
        declarations: [_music_album_detail_page__WEBPACK_IMPORTED_MODULE_6__["MusicAlbumDetailPage"], _components_global_back_short_back_short_component__WEBPACK_IMPORTED_MODULE_7__["BackShortComponent"], _components_headers_album_detail_album_detail_component__WEBPACK_IMPORTED_MODULE_8__["AlbumDetailComponent"]]
    })
], MusicAlbumDetailPageModule);



/***/ }),

/***/ "w/a8":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/headers/album-detail/album-detail.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header  class=\"ion-no-border fade-in\">\n  <ion-toolbar color=\"translucent\">\n  <ion-buttons slot=\"start\" >\n  <ion-menu-button  class=\"title-intro\" ><ion-icon name=\"musical-note\" ></ion-icon></ion-menu-button>\n  </ion-buttons>\n  <ion-title class=\"ion-text-center title-intro\">Album Details</ion-title>\n \n          <ion-buttons slot=\"end\">\n<!-- Search -->\n          <ion-button class=\"badge-button lupa  fade-in\"  (click)=\"openSearchModal()\"   contentId=\"maintwo\"  menuId=\"four\">\n          <ion-icon name=\"search-outline\" color=\"light\"></ion-icon>\n          </ion-button>\n          </ion-buttons>\n</ion-toolbar>\n</ion-header>");

/***/ }),

/***/ "x3tA":
/*!*********************************************************************!*\
  !*** ./src/app/music/music-album-detail/music-album-detail.page.ts ***!
  \*********************************************************************/
/*! exports provided: MusicAlbumDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MusicAlbumDetailPage", function() { return MusicAlbumDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_music_album_detail_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./music-album-detail.page.html */ "kZ1V");
/* harmony import */ var _music_album_detail_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./music-album-detail.page.scss */ "/OuX");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_music_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/music.service */ "Ie7a");






let MusicAlbumDetailPage = class MusicAlbumDetailPage {
    constructor(musicservice, activatedRoute, router) {
        this.musicservice = musicservice;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.itemArray = [];
        this.itemId = this.activatedRoute.snapshot.paramMap.get('albumId');
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.item = yield this.musicservice.getAlbumsDetail(this.itemId);
            this.itemSubscribe = this.item.subscribe(res => {
                this.itemArray = res;
            });
            console.log(this.itemArray);
        });
    }
};
MusicAlbumDetailPage.ctorParameters = () => [
    { type: _services_music_service__WEBPACK_IMPORTED_MODULE_5__["MusicService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
MusicAlbumDetailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-music-album-detail',
        template: _raw_loader_music_album_detail_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_music_album_detail_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], MusicAlbumDetailPage);



/***/ })

}]);
//# sourceMappingURL=music-music-album-detail-music-album-detail-module.js.map