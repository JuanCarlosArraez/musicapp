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
/* harmony default export */ __webpack_exports__["default"] = (".imagedetail {\n  margin-top: -7px;\n  z-index: 10;\n}\n\n.food_header1 {\n  margin-bottom: 2px !important;\n  letter-spacing: -1px;\n  font-size: 28px !important;\n  font-weight: 700 !important;\n}\n\n.food_header2 {\n  letter-spacing: -1px;\n  font-size: 26px;\n  font-weight: 300;\n}\n\n.food_header3 {\n  margin-top: 0px !important;\n  padding-top: 0px !important;\n  color: #999 !important;\n  letter-spacing: -1px;\n  font-size: 16px !important;\n  font-weight: 400 !important;\n}\n\n.detail-header:before {\n  content: \" \";\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  /* FF3.6-15 */\n  /* Chrome10-25,Safari5.1-6 */\n  background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 68%, rgba(0, 0, 0, 0.65) 100%);\n  /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=\"#00000000\", endColorstr=\"#a6000000\",GradientType=0 );\n  /* IE6-9 */\n}\n\n.detail-header {\n  position: relative;\n  height: 300px !important;\n  background-size: cover;\n  background-position: center;\n}\n\n.detail-header .detail-title {\n  position: absolute;\n  left: 2px;\n  bottom: 20px;\n  width: 100%;\n}\n\n.detail-header ion-item {\n  color: #FFFFFF;\n  --background: rgba(0,0,0,0);\n  --border-color: rgba(0,0,0,0);\n}\n\n.detail-header .detail-price {\n  color: #FFFFFF;\n  font-size: 16px;\n  font-weight: bold;\n  /*color: #86d44d;*/\n  position: absolute;\n  left: 20px;\n  bottom: 20px;\n  text-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\n}\n\n.tracking-in-expand {\n  animation: tracking-in-expand 0.7s cubic-bezier(0.215, 0.61, 0.355, 1) both;\n}\n\n@keyframes tracking-in-expand {\n  0% {\n    letter-spacing: -0.5em;\n    opacity: 0;\n  }\n  40% {\n    opacity: 0.6;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxtdXNpYy1kZXRhaWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxXQUFBO0FBQ0o7O0FBR0E7RUFDSSw2QkFBQTtFQUNBLG9CQUFBO0VBQ0EsMEJBQUE7RUFDQSwyQkFBQTtBQUFKOztBQUVFO0VBQ0Usb0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFHRTtFQUNFLDBCQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0VBQ0EsMEJBQUE7RUFDQSwyQkFBQTtBQUFKOztBQUlBO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNrRixhQUFBO0VBQ0UsNEJBQUE7RUFDcEYsc0ZBQUE7RUFBa0YscURBQUE7RUFDbEYsdUhBQUE7RUFBeUgsVUFBQTtBQUc3SDs7QUFBQTtFQUNJLGtCQUFBO0VBQ0Esd0JBQUE7RUFLQSxzQkFBQTtFQUNBLDJCQUFBO0FBRUo7O0FBQ0E7RUFLSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQUZKOztBQUtBO0VBR0ksY0FBQTtFQUNBLDJCQUFBO0VBQ0EsNkJBQUE7QUFKSjs7QUFPQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSx5RUFBQTtBQUpKOztBQU9BO0VBRVMsMkVBQUE7QUFKVDs7QUFtQkU7RUFDRTtJQUNFLHNCQUFBO0lBQ0EsVUFBQTtFQUpKO0VBTUU7SUFDRSxZQUFBO0VBSko7RUFNRTtJQUNFLFVBQUE7RUFKSjtBQUNGIiwiZmlsZSI6Im11c2ljLWRldGFpbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1hZ2VkZXRhaWx7XHJcbiAgICBtYXJnaW4tdG9wOiAtN3B4O1xyXG4gICAgei1pbmRleDogMTA7XHJcbn1cclxuXHJcblxyXG4uZm9vZF9oZWFkZXIxe1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMnB4ICFpbXBvcnRhbnQ7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLTFweDtcclxuICAgIGZvbnQtc2l6ZTogMjhweCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAuZm9vZF9oZWFkZXIye1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IC0xcHg7XHJcbiAgICBmb250LXNpemU6IDI2cHg7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gIFxyXG4gIH1cclxuICBcclxuICAuZm9vZF9oZWFkZXIze1xyXG4gICAgbWFyZ2luLXRvcDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLXRvcDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjojOTk5ICFpbXBvcnRhbnQ7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLTFweDtcclxuICAgIGZvbnQtc2l6ZTogMTZweCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiBcclxuLmRldGFpbC1oZWFkZXI6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6ICcgJztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIHRvcDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KHRvcCwgIHJnYmEoMCwwLDAsMCkgNjglLCByZ2JhKDAsMCwwLDAuNjUpIDEwMCUpOyAvKiBGRjMuNi0xNSAqL1xyXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLCAgcmdiYSgwLDAsMCwwKSA2OCUscmdiYSgwLDAsMCwwLjY1KSAxMDAlKTsgLyogQ2hyb21lMTAtMjUsU2FmYXJpNS4xLTYgKi9cclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICByZ2JhKDAsMCwwLDApIDY4JSxyZ2JhKDAsMCwwLDAuNjUpIDEwMCUpOyAvKiBXM0MsIElFMTArLCBGRjE2KywgQ2hyb21lMjYrLCBPcGVyYTEyKywgU2FmYXJpNysgKi9cclxuICAgIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KCBzdGFydENvbG9yc3RyPScjMDAwMDAwMDAnLCBlbmRDb2xvcnN0cj0nI2E2MDAwMDAwJyxHcmFkaWVudFR5cGU9MCApOyAvKiBJRTYtOSAqL1xyXG5cclxufVxyXG4uZGV0YWlsLWhlYWRlciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBoZWlnaHQ6IDMwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAvLyBiYWNrZ3JvdW5kOiB1cmwoaW1nLzEuanBnKSBuby1yZXBlYXQ7XHJcbiAgICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAtbW96LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAtby1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxufVxyXG5cclxuLmRldGFpbC1oZWFkZXIgLmRldGFpbC10aXRsZSB7XHJcbiAgICAvLyBmb250LXNpemU6IDIwcHg7XHJcbiAgICAvLyBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgLy8gY29sb3I6ICNGRkZGRkY7XHJcblxyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMnB4O1xyXG4gICAgYm90dG9tOiAyMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICAvLyB0ZXh0LXNoYWRvdzogMCAzcHggNnB4IHJnYmEoMCwwLDAsMC4xNiksIDAgM3B4IDZweCByZ2JhKDAsMCwwLDAuMjMpO1xyXG59XHJcbi5kZXRhaWwtaGVhZGVyIGlvbi1pdGVtIHtcclxuICAgIC8vIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIC8vIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgIC0tYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwKTtcclxuICAgIC0tYm9yZGVyLWNvbG9yOiByZ2JhKDAsMCwwLDApO1xyXG4gICAgLy8gdGV4dC1zaGFkb3c6IDAgM3B4IDZweCByZ2JhKDAsMCwwLDAuMTYpLCAwIDNweCA2cHggcmdiYSgwLDAsMCwwLjIzKTtcclxufVxyXG4uZGV0YWlsLWhlYWRlciAuZGV0YWlsLXByaWNlIHtcclxuICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAvKmNvbG9yOiAjODZkNDRkOyovXHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAyMHB4O1xyXG4gICAgYm90dG9tOiAyMHB4O1xyXG4gICAgdGV4dC1zaGFkb3c6IDAgM3B4IDZweCByZ2JhKDAsMCwwLDAuMTYpLCAwIDNweCA2cHggcmdiYSgwLDAsMCwwLjIzKTtcclxufVxyXG5cclxuLnRyYWNraW5nLWluLWV4cGFuZCB7XHJcblx0LXdlYmtpdC1hbmltYXRpb246IHRyYWNraW5nLWluLWV4cGFuZCAwLjdzIGN1YmljLWJlemllcigwLjIxNSwgMC42MTAsIDAuMzU1LCAxLjAwMCkgYm90aDtcclxuXHQgICAgICAgIGFuaW1hdGlvbjogdHJhY2tpbmctaW4tZXhwYW5kIDAuN3MgY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjYxMCwgMC4zNTUsIDEuMDAwKSBib3RoO1xyXG59XHJcblxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgdHJhY2tpbmctaW4tZXhwYW5kIHtcclxuICAgIDAlIHtcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjVlbTtcclxuICAgICAgb3BhY2l0eTogMDtcclxuICAgIH1cclxuICAgIDQwJSB7XHJcbiAgICAgIG9wYWNpdHk6IDAuNjtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgfVxyXG4gIH1cclxuICBAa2V5ZnJhbWVzIHRyYWNraW5nLWluLWV4cGFuZCB7XHJcbiAgICAwJSB7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAtMC41ZW07XHJcbiAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICB9XHJcbiAgICA0MCUge1xyXG4gICAgICBvcGFjaXR5OiAwLjY7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgb3BhY2l0eTogMTtcclxuICAgIH1cclxuICB9Il19 */");

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
/* harmony import */ var _services_music_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/music.service */ "Ie7a");






let MusicDetailPage = class MusicDetailPage {
    constructor(musicservice, activatedRoute) {
        this.musicservice = musicservice;
        this.activatedRoute = activatedRoute;
        this.itemArray = [];
        this.itemId = this.activatedRoute.snapshot.paramMap.get('detailId');
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.item = yield this.musicservice.getItemDetail(this.itemId);
            this.itemSubscribe = this.item.subscribe(res => {
                this.itemArray = res;
            });
        });
    }
};
MusicDetailPage.ctorParameters = () => [
    { type: _services_music_service__WEBPACK_IMPORTED_MODULE_5__["MusicService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
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
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n\n<app-back-short></app-back-short>\n<!-- header -->\n<app-band-detail></app-band-detail>\n\n\n\n<ion-grid fixed class=\"ion-no-padding\">\n\n<div class=\"detail-header fade-out\" [ngStyle]=\"{'background-image': 'url(' + itemArray.image + ')'}\"></div>\n<div class=\"margin-top-10\">\n  <ion-item lines=\"none\">\n      <ion-label  text-wrap>\n          <h1 class=\"food_header1 detail-name tracking-in-expand\">{{itemArray.name}}</h1>\n          <h2 class=\"food_header3 detail-price \"> {{itemArray.short_description}}</h2>\n      </ion-label>\n      <div slot=\"end\">\n          <ion-icon  style=\"font-size: 18px !important;\" color=\"danger\" *ngFor=\"let i of [0,1,2,3,4]\" [name]=\"i < itemArray.rating  ? 'star' : 'star-outline'\"></ion-icon>\n      </div>\n  </ion-item>  \n</div>\n\n<ion-row>\n  <ion-col size-lg=\"8\" size-md=\"8\" size-sm=\"12\" size=\"12\">\n      <!--*********** Description ***********-->\n      <div class=\"ion-padding fade-out\">\n        <p class=\"margin-bottom-3\">\n            {{itemArray.description}}\n        </p>\n      </div>\n  </ion-col>\n</ion-row>\n\n\n\n</ion-grid>\n</ion-content>\n");

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