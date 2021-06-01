(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["music-music-detail-music-detail-module"],{

/***/ "7wHe":
/*!*************************************************************************!*\
  !*** ./src/app/components/headers/band-detail/band-detail.component.ts ***!
  \*************************************************************************/
/*! exports provided: BandDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BandDetailComponent", function() { return BandDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_band_detail_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./band-detail.component.html */ "DNRp");
/* harmony import */ var _band_detail_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./band-detail.component.scss */ "bwho");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _music_music_search_music_search_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../music/music-search/music-search.page */ "ff9t");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");







let BandDetailComponent = class BandDetailComponent {
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
BandDetailComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] }
];
BandDetailComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-band-detail',
        template: _raw_loader_band_detail_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_band_detail_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], BandDetailComponent);



/***/ }),

/***/ "82Su":
/*!***********************************************************!*\
  !*** ./src/app/music/music-detail/music-detail.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtdXNpYy1kZXRhaWwucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "DNRp":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/headers/band-detail/band-detail.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header  class=\"ion-no-border fade-in\">\n  <ion-toolbar color=\"translucent\">\n  <ion-buttons slot=\"start\" >\n  <ion-menu-button  class=\"title-intro\" ><ion-icon name=\"musical-note\" ></ion-icon></ion-menu-button>\n  </ion-buttons>\n  <ion-title class=\"ion-text-center title-intro\">Band Detail</ion-title>\n \n          <ion-buttons slot=\"end\">\n<!-- Search -->\n          <ion-button class=\"badge-button lupa  fade-in\"  (click)=\"openSearchModal()\"   contentId=\"maintwo\"  menuId=\"four\">\n          <ion-icon name=\"search-outline\" color=\"light\"></ion-icon>\n          </ion-button>\n          </ion-buttons>\n</ion-toolbar>\n</ion-header>");

/***/ }),

/***/ "KoYi":
/*!*******************************************************************!*\
  !*** ./src/app/music/music-detail/music-detail-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: MusicDetailPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MusicDetailPageRoutingModule", function() { return MusicDetailPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _music_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./music-detail.page */ "MJsc");




const routes = [
    {
        path: '',
        component: _music_detail_page__WEBPACK_IMPORTED_MODULE_3__["MusicDetailPage"]
    }
];
let MusicDetailPageRoutingModule = class MusicDetailPageRoutingModule {
};
MusicDetailPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MusicDetailPageRoutingModule);



/***/ }),

/***/ "MJsc":
/*!*********************************************************!*\
  !*** ./src/app/music/music-detail/music-detail.page.ts ***!
  \*********************************************************/
/*! exports provided: MusicDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MusicDetailPage", function() { return MusicDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_music_detail_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./music-detail.page.html */ "mYef");
/* harmony import */ var _music_detail_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./music-detail.page.scss */ "82Su");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_ionic_component_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/ionic-component.service */ "BES4");
/* harmony import */ var _services_music_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/music.service */ "Ie7a");







let MusicDetailPage = class MusicDetailPage {
    constructor(musicservice, activatedRoute, router, ionicComponentService) {
        this.musicservice = musicservice;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.ionicComponentService = ionicComponentService;
        this.slideOption = {
            slidesPerView: 'auto',
            grabCursor: true,
        };
        this.itemArray = [];
        this.itemId = this.activatedRoute.snapshot.paramMap.get('detailId');
    }
    openDetail(url, AlbumId) {
        this.router.navigateByUrl('/' + url + '/' + AlbumId);
    }
    openEdit() {
        this.router.navigateByUrl('/music-detail-edit/' + this.itemId);
    }
    Question() {
        this.musicservice.getAlbums().forEach(item => {
            this.caption1 = Object.keys(item).map(key => item[key]).map(order => {
                /*  console.log(order.music_categoryId) */
                return order.music_categoryId;
            });
            if (this.caption1.indexOf(this.itemId) === -1) {
                this.caption2 = "Albums not available.";
                console.log(this.caption2);
                return this.caption1;
            }
        });
    }
    close() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.redirect = this.router.navigateByUrl('/folder/Inicio');
            yield this.redirect;
        });
    }
    deleteBand() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.ionicComponentService.presentLoading();
            yield this.musicservice.deleteBand(this.itemId)
                .then(() => {
                // call loading 
                this.ionicComponentService.dismissLoading();
                this.close();
            }, (error) => {
                var errorMessage = error.message;
                console.log("ERROR:" + errorMessage);
                this.ionicComponentService.dismissLoading();
                this.ionicComponentService.presentToast(errorMessage, 4000);
            });
        });
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.item = yield this.musicservice.getItemDetail(this.itemId);
            this.itemSubscribe = this.item.subscribe(res => {
                this.itemArray = res;
            });
            this.Question();
            this.Albums = this.musicservice.getItemByCatId();
        });
    }
};
MusicDetailPage.ctorParameters = () => [
    { type: _services_music_service__WEBPACK_IMPORTED_MODULE_6__["MusicService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _services_ionic_component_service__WEBPACK_IMPORTED_MODULE_5__["IonicComponentService"] }
];
MusicDetailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-music-detail',
        template: _raw_loader_music_detail_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_music_detail_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], MusicDetailPage);



/***/ }),

/***/ "bwho":
/*!***************************************************************************!*\
  !*** ./src/app/components/headers/band-detail/band-detail.component.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJiYW5kLWRldGFpbC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "mYef":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/music/music-detail/music-detail.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n\n<app-back-short></app-back-short>\n<!-- header -->\n<app-band-detail></app-band-detail>\n\n\n\n<ion-grid fixed class=\"ion-no-padding\">\n\n<div class=\"detail-header fade-out\" [ngStyle]=\"{'background-image': 'url(' + itemArray.image + ')'}\"></div>\n<div class=\"margin-top-10\">\n  <ion-item lines=\"none\">\n      <ion-label  text-wrap>\n          <h1 class=\"food_header1 detail-name tracking-in-expand\">{{itemArray.name}}</h1>\n          <h2 class=\"food_header3 detail-price \"> {{itemArray.short_description}}</h2>\n      </ion-label>\n      <div slot=\"end\">\n          <ion-icon  style=\"font-size: 18px !important;\" color=\"danger\" *ngFor=\"let i of [0,1,2,3,4]\" [name]=\"i < itemArray.rating  ? 'star' : 'star-outline'\"></ion-icon>\n      </div>\n  </ion-item>  \n</div>\n\n<ion-row>\n  <ion-col size-lg=\"8\" size-md=\"8\" size-sm=\"12\" size=\"12\">\n      <!--*********** Description ***********-->\n      <div class=\"ion-padding fade-out\">\n        <p class=\"margin-bottom-3\">\n            {{itemArray.description}}\n        </p>\n      </div>\n  </ion-col>\n</ion-row>\n\n<h1 class=\"letterinicio lettercarrousel\">ALBUMS</h1>\n<br>\n<ion-slides class=\"swiper-container fade-in\" pager= false\n[options]=\"slideOption\" #slidesOne style=\"margin-top:-40px !important;\">\n\n\n<ion-slide  (click)=\"openDetail('music-album-detail',album.id)\"   *ngFor=\"let album of Albums | async\">\n  <div *ngIf=\"album.music_categoryId == itemArray.Control_Id\">\n  <ion-card class=\"music-main-h-card music-card0 slide-left\"  >\n  <div class=\"music-card0-bg ion-text-uppercase\" [ngStyle]=\"{'background-image': 'url(' + album.image+ ')'}\" >\n  <h2 class=\"card2-title\">   <br>{{album.name}}</h2>                           \n  </div>\n  </ion-card>\n  </div>\n  </ion-slide>\n</ion-slides>\n\n  &nbsp;&nbsp; {{caption2}}\n\n  <br>\n  \n  <ion-button\nclass=\"center\"\n type=\"submit\"\n(click)=\"openEdit()\" \nshape=\"round\"\ncolor=\"light\"\nmode=\"ios\">Edit</ion-button>\n\n\n<ion-button\nclass=\"center\"\n type=\"submit\"\n (click)=\"deleteBand()\"\nshape=\"full\"\ncolor=\"danger\"\nmode=\"ios\">Delete</ion-button>\n\n\n</ion-grid>\n</ion-content>\n");

/***/ }),

/***/ "wbAx":
/*!***********************************************************!*\
  !*** ./src/app/music/music-detail/music-detail.module.ts ***!
  \***********************************************************/
/*! exports provided: MusicDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MusicDetailPageModule", function() { return MusicDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _music_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./music-detail-routing.module */ "KoYi");
/* harmony import */ var _music_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./music-detail.page */ "MJsc");
/* harmony import */ var _components_global_back_short_back_short_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/global//back-short/back-short.component */ "SdWb");
/* harmony import */ var _components_headers_band_detail_band_detail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/headers/band-detail/band-detail.component */ "7wHe");









let MusicDetailPageModule = class MusicDetailPageModule {
};
MusicDetailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _music_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__["MusicDetailPageRoutingModule"]
        ],
        declarations: [_music_detail_page__WEBPACK_IMPORTED_MODULE_6__["MusicDetailPage"], _components_global_back_short_back_short_component__WEBPACK_IMPORTED_MODULE_7__["BackShortComponent"], _components_headers_band_detail_band_detail_component__WEBPACK_IMPORTED_MODULE_8__["BandDetailComponent"]]
    })
], MusicDetailPageModule);



/***/ })

}]);
//# sourceMappingURL=music-music-detail-music-detail-module.js.map