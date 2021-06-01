(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\user\Pictures\kubideApp\src\main.ts */"zUnb");


/***/ }),

/***/ "29s8":
/*!***************************************************************************!*\
  !*** ./src/app/components/album/header-album/header-album.component.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZWFkZXItYWxidW0uY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "2S51":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/album/header-album/header-album.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header  class=\"ion-no-border\">\r\n  <ion-toolbar color=\"translucent\">\r\n  <ion-buttons slot=\"start\" >\r\n  <ion-menu-button  class=\"title-intro\" ><ion-icon name=\"musical-note\" ></ion-icon></ion-menu-button>\r\n  </ion-buttons>\r\n  <ion-title class=\"ion-text-center title-intro\">Albums</ion-title>\r\n \r\n          <ion-buttons slot=\"end\">\r\n<!-- Search -->\r\n          <ion-button class=\"badge-button lupa  fade-in\"  (click)=\"openSearchModal()\"   contentId=\"maintwo\"  menuId=\"four\">\r\n          <ion-icon name=\"search-outline\" color=\"light\"></ion-icon>\r\n          </ion-button>\r\n          </ion-buttons>\r\n</ion-toolbar>\r\n</ion-header>");

/***/ }),

/***/ "3OTz":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/global/back/back.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"background\"></div>");

/***/ }),

/***/ "3QcU":
/*!*************************************************************************!*\
  !*** ./src/app/components/album/section-dos/section-dos.component.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZWN0aW9uLWRvcy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "6y6h":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/global/back-short/back-short.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"background\"></div>");

/***/ }),

/***/ "8uH4":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/global/header/header.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header  class=\"ion-no-border \">\r\n  <ion-toolbar color=\"translucent\">\r\n  <ion-buttons slot=\"start\" >\r\n  <ion-menu-button  class=\"title-intro\" ><ion-icon name=\"musical-note\" ></ion-icon></ion-menu-button>\r\n  </ion-buttons>\r\n  <ion-title class=\"ion-text-center title-intro\">{{ folder }}</ion-title>\r\n \r\n          <ion-buttons slot=\"end\">\r\n<!-- Search -->\r\n          <ion-button class=\"badge-button lupa  fade-in\"  (click)=\"openSearchModal()\"   contentId=\"maintwo\"  menuId=\"four\">\r\n          <ion-icon name=\"search-outline\" color=\"light\"></ion-icon>\r\n          </ion-button>\r\n          </ion-buttons>\r\n</ion-toolbar>\r\n</ion-header>");

/***/ }),

/***/ "8vDd":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/inicio/buttons-start/buttons-start.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-item lines=\"none\" class=\" margin-left-0\">\r\n  <ion-buttons >\r\n    \r\n    <!-- First -->\r\n    <div *ngIf=\"this.router.url === '/folder/Inicio'; else alldark\">\r\n    <ion-button  color=\"dark\" mode=\"ios\" class=\"main-header6 \"  >\r\n      <strong> All</strong>\r\n    </ion-button>\r\n  </div>\r\n  <ng-template #alldark>\r\n    <ion-button  color=\"translucent\" mode=\"ios\" class=\"main-header8-500 \"   routerLink=\"/folder/Inicio\">\r\n      All\r\n    </ion-button>\r\n  </ng-template>\r\n\r\n  <!-- Second -->\r\n  <div *ngIf=\"this.router.url === '/folder/Rock%20Bands'; else rockdark\">\r\n    <ion-button  color=\"dark\" mode=\"ios\" class=\"main-header6 \"  >\r\n     <strong>Rock Bands</strong> \r\n    </ion-button>\r\n  </div>\r\n  <ng-template #rockdark>\r\n    <ion-button  color=\"translucent\" mode=\"ios\" class=\"main-header8-500 \"  routerLink=\"/folder/Rock Bands\">\r\n      Rock Bands\r\n    </ion-button>\r\n  </ng-template>\r\n\r\n\r\n  <!-- Third -->\r\n    <div *ngIf=\"this.router.url === '/music-list/Albums'; else albumdark\">\r\n      <ion-button  color=\"dark\" mode=\"ios\" class=\"main-header6 \"  >\r\n       <strong>Albums</strong> \r\n      </ion-button>\r\n    </div>\r\n    <ng-template #albumdark>\r\n      <ion-button  color=\"translucent\" mode=\"ios\" class=\"main-header8-500 \"  routerLink=\"/music-list/Albums\">\r\n        Albums\r\n      </ion-button>\r\n    </ng-template>\r\n  </ion-buttons>\r\n</ion-item>\r\n");

/***/ }),

/***/ "9bWw":
/*!************************************************************************!*\
  !*** ./src/app/components/inicio/section-two/section-two.component.ts ***!
  \************************************************************************/
/*! exports provided: SectionTwoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionTwoComponent", function() { return SectionTwoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_section_two_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./section-two.component.html */ "uyJF");
/* harmony import */ var _section_two_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./section-two.component.scss */ "Ck/K");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_music_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/music.service */ "Ie7a");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");







let SectionTwoComponent = class SectionTwoComponent {
    constructor(musicservice, firestore, router) {
        this.musicservice = musicservice;
        this.firestore = firestore;
        this.router = router;
        this.slideOption = {
            slidesPerView: 'auto',
            grabCursor: true,
        };
    }
    openDetail(url, itemId) {
        this.router.navigateByUrl('/' + url + '/' + itemId);
    }
    ///////////////////////////////////////////////////////////////////
    /* agg(number:number)
    {
    return  this.firestore.collection<any>('music_playlists').add({
    Available: "si",
    Visible:  "si",
    
    image: "",
    name:"",
    year: number = 1998,
    rating: number=4,
    recommended: false,
    description:""
    });
    } */
    /* agg(number:number)
    {
    return  this.firestore.collection<any>('music_bands').add({
    Available: "si",
    Visible:  "si",
    image: "",
    name:"",
    rating: number=4,
    recommended: false,
    description:"",
    short_description:""
    });
    }
     */
    agg(number) {
        return this.firestore.collection('music_albums').add({
            Available: "si",
            Visible: "si",
            music_categoryId: "",
            music_category_name: "",
            image: "",
            name: "",
            year: number = 1998,
            rating: number = 4,
            recommended: false,
            description: "",
            short_description: ""
        });
    }
    getPopularSong() {
        this.Popular = this.musicservice.getAlbumsRecommended();
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.getPopularSong();
        });
    }
};
SectionTwoComponent.ctorParameters = () => [
    { type: _services_music_service__WEBPACK_IMPORTED_MODULE_4__["MusicService"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
];
SectionTwoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'section-two',
        template: _raw_loader_section_two_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_section_two_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SectionTwoComponent);



/***/ }),

/***/ "A6Ye":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/inicio/section-one/section-one.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<ion-slides class=\"swiper-container\" pager= false \r\n[options]=\"slideOption\" #slidesOne  style=\"z-index: 2;\"\r\n>\r\n\r\n  <ion-slide  *ngFor=\"let rockband of Rockbands| async \">\r\n  <ion-card class=\"music-main-h-card music-card2 slide-left \"   (click)=\"openDetail('music-detail',rockband.id)\">\r\n  <div class=\"music-card2-bg ion-text-uppercase\" [ngStyle]=\"{'background-image': 'url(' + rockband.image+ ')'}\" >\r\n  <h2 class=\"card2-title\">   <br><br><br><br>{{rockband.name}}</h2>                           \r\n  </div>\r\n  </ion-card>\r\n  </ion-slide>\r\n  </ion-slides>\r\n  \r\n  <br><br><br><br><br><br><br><br><br>\r\n  <div class=\"borde\"></div>\r\n  ");

/***/ }),

/***/ "AEDv":
/*!***********************************************************!*\
  !*** ./src/app/music/music-search/music-search.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-thumbnail {\n  width: 70px !important;\n  height: 61px !important;\n  margin-bottom: 15px;\n  border-radius: 8px !important;\n  background-color: #dddddd;\n  min-width: 6rem;\n  min-height: 5rem;\n}\nion-thumbnail ion-img {\n  border-radius: 8px !important;\n}\nion-searchbar {\n  --cancel-button-color: var(--ion-color-personalize);\n  --clear-button-color: var(--ion-color-personalize);\n}\n.No {\n  margin-top: 170px;\n}\n.find {\n  position: absolute;\n  top: 370px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxtdXNpYy1zZWFyY2gucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksc0JBQUE7RUFDQSx1QkFBQTtFQUdBLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSx5QkFBQTtFQUlBLGVBQUE7RUFDQSxnQkFBQTtBQUxKO0FBT0k7RUFDSSw2QkFBQTtBQUxSO0FBV0E7RUFDSSxtREFBQTtFQUNBLGtEQUFBO0FBUko7QUFXQTtFQUNJLGlCQUFBO0FBUko7QUFXRTtFQUNFLGtCQUFBO0VBQW9CLFVBQUE7QUFQeEIiLCJmaWxlIjoibXVzaWMtc2VhcmNoLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10aHVtYm5haWwge1xyXG4gICAgLy8tLXNpemU6IDUwcHg7XHJcbiAgICB3aWR0aDogNzBweCAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiA2MXB4ICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgLy8gbWFyZ2luLWxlZnQ6IDI0cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4ICAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZGRkZDtcclxuXHJcbiAgICAvLyBtaW4td2lkdGg6IDZyZW07ICAgIFxyXG4gICAgLy8gbWluLWhlaWdodDogOHJlbTtcclxuICAgIG1pbi13aWR0aDogNnJlbTsgICAgXHJcbiAgICBtaW4taGVpZ2h0OiA1cmVtO1xyXG4gICAgLy8gbWFyZ2luLWxlZnQ6IDI0cHg7XHJcbiAgICBpb24taW1nIHtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA4cHggICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgLy8gbWF4LXdpZHRoOiA2cmVtOyAgICBcclxuICAgICAgICAvLyBtaW4td2lkdGg6IDhyZW07XHJcbiAgICB9XHJcbn1cclxuXHJcbmlvbi1zZWFyY2hiYXIge1xyXG4gICAgLS1jYW5jZWwtYnV0dG9uLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcGVyc29uYWxpemUpO1xyXG4gICAgLS1jbGVhci1idXR0b24tY29sb3I6IHZhcigtLWlvbi1jb2xvci1wZXJzb25hbGl6ZSk7XHJcbn1cclxuXHJcbi5Ob3tcclxuICAgIG1hcmdpbi10b3A6IDE3MHB4O1xyXG4gIH1cclxuXHJcbiAgLmZpbmR7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7IHRvcDozNzBweDtcclxuICB9XHJcbiJdfQ== */");

/***/ }),

/***/ "AUDz":
/*!***********************************************************************!*\
  !*** ./src/app/components/album/section-dos/section-dos.component.ts ***!
  \***********************************************************************/
/*! exports provided: SectionDosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionDosComponent", function() { return SectionDosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_section_dos_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./section-dos.component.html */ "nxjy");
/* harmony import */ var _section_dos_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./section-dos.component.scss */ "3QcU");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_music_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/music.service */ "Ie7a");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");






let SectionDosComponent = class SectionDosComponent {
    constructor(musicservice, router) {
        this.musicservice = musicservice;
        this.router = router;
        this.slideOption = {
            slidesPerView: 'auto',
            grabCursor: true,
        };
    }
    openDetail(url, itemId) {
        this.router.navigateByUrl('/' + url + '/' + itemId);
    }
    ngOnInit() {
        this.Items = this.musicservice.getItemByCatId();
    }
};
SectionDosComponent.ctorParameters = () => [
    { type: _services_music_service__WEBPACK_IMPORTED_MODULE_4__["MusicService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
SectionDosComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-section-dos',
        template: _raw_loader_section_dos_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_section_dos_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SectionDosComponent);



/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Ck/K":
/*!**************************************************************************!*\
  !*** ./src/app/components/inicio/section-two/section-two.component.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".space {\n  margin-top: 5px;\n}\n\n.thebestalbums {\n  margin-top: -15px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcc2VjdGlvbi10d28uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0FBQ0o7O0FBRUE7RUFDSSw0QkFBQTtBQUNKIiwiZmlsZSI6InNlY3Rpb24tdHdvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNwYWNle1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG59XHJcblxyXG4udGhlYmVzdGFsYnVtc3tcclxuICAgIG1hcmdpbi10b3A6IC0xNXB4ICFpbXBvcnRhbnQ7XHJcbn0iXX0= */");

/***/ }),

/***/ "Cp0R":
/*!**************************************!*\
  !*** ./src/app/shared/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "lGQG");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");





let AuthGuard = class AuthGuard {
    constructor(authSvc, router) {
        this.authSvc = authSvc;
        this.router = router;
    }
    canActivate(next, state) {
        return this.authSvc.user$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((user) => {
            if (user) {
                return true;
            }
            else {
                this.router.navigate(['/music-login']);
                return false;
            }
        }));
    }
};
AuthGuard.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AuthGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    })
], AuthGuard);



/***/ }),

/***/ "FDUZ":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/inicio/section-three/section-three.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n  <ion-item lines=\"none\" class=\"playlists\">\r\n    <label>\r\n      <h1 class=\"letterinicio \" >Play Lists</h1>\r\n      <h1 class=\"music_header3 fade-in lomasescuchado\">Lo más escuchado</h1>\r\n    </label>\r\n    </ion-item>\r\n    <br><br>\r\n      <ion-list class=\"minicarrousel\" *ngFor=\" let playlists of Playlists | async\">\r\n        <ion-item (click)=\"openDetail('playermusic',playlists.id)\" lines=\"none\">\r\n          \r\n          <ion-avatar slot=\"start\">\r\n           <img src=\"{{playlists.image}}\" alt=\"\" >\r\n          </ion-avatar>\r\n          \r\n          <ion-label>\r\n            <h2> {{playlists.name}} </h2>\r\n            <p><!-- {{playlists.year}} -->\r\n          </ion-label>\r\n          \r\n          <ion-thumbnail class=\"ion-text-center\" slot=\"end\">\r\n            <br>\r\n            <div >\r\n            <ion-icon name=\"play-circle\"></ion-icon>\r\n            </div>\r\n          </ion-thumbnail>\r\n        </ion-item>\r\n        \r\n      </ion-list>");

/***/ }),

/***/ "HtqR":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/music/music-search/music-search.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header  class=\"ion-no-border \">\r\n<ion-toolbar>\r\n<ion-grid fixed class=\"ion-no-padding\">\r\n<ion-searchbar class=\"ion-margin-top\" #searchbar placeholder=\"The Rolling Stones...\" showCancelButton  (ionInput)=\"filterList($event)\" (ionCancel)=\"close()\" cancelButtonText=\"Cerrar\"></ion-searchbar>\r\n</ion-grid>\r\n</ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content no-padding>\r\n<ion-grid fixed class=\"ion-no-padding\">\r\n<ion-list class=\"ion-margin-top\" *ngFor=\"let result of resultList\">\r\n<ion-item  *ngIf=\"resultList.length >= 1\" lines=\"none\" button  (click)=\"openDetail(result.id)\"     >\r\n<ion-thumbnail slot=\"start\">\r\n<ion-img [src]=\"result.image\"></ion-img>\r\n</ion-thumbnail>\r\n<ion-label>\r\n<h2>{{result.name}}</h2>\r\n<p>{{result.description}}</p>\r\n<ion-icon style=\"font-size: 14px !important;\" color=\"danger\" *ngFor=\"let i of [0,1,2,3,4]\" \r\n[name]=\"i < result.rating ? 'star' : 'star-outline'\">\r\n</ion-icon>\r\n</ion-label>\r\n</ion-item>\r\n</ion-list>\r\n\r\n\r\n    </ion-grid>\r\n    <div *ngIf=\"resultList.length <=0  \">\r\n    <div class=\"center No\">\r\n    <ion-icon name=\"play-circle-outline\"  [ngStyle]=\"{'transform':  'scale(15.5)'}\" color=\"light\" ></ion-icon>\r\n    </div>\r\n    <br><br><br><br><br><br>\r\n    <ion-text color=\"ulightgrey\" class=\"ion-margin-bottom center\">\r\n    <h1 class=\"main-header4\">¿No has encontrado tu banda?</h1>\r\n    </ion-text>\r\n    <br>\r\n    <br>\r\n    <div class=\"ion-text-center slide-right agregarbanda\" >\r\n    <ion-button mode=\"ios\"  shape=\"round\"  color=\"danger\" class=\"main-header7\" (click)=\"AddBand()\">¡Agrégala!\r\n    </ion-button>\r\n    <br><br><br>\r\n    </div>\r\n    </div>\r\n\r\n    <div *ngIf=\"!resultList\">\r\n    <div class=\"center No\">\r\n    <ion-icon name=\"planet\"  [ngStyle]=\"{'transform':  'scale(17.5)'}\" color=\"light\" ></ion-icon>\r\n    <br><br><br><br><br><br>\r\n    <ion-text color=\"ulightgrey\" class=\"ion-margin-bottom find\">\r\n    <h1 class=\"main-header4\">¡Encuentra tu banda favorita!</h1>\r\n    </ion-text>\r\n    </div>\r\n    </div>\r\n  \r\n</ion-content>\r\n");

/***/ }),

/***/ "I4zx":
/*!*******************************************************************!*\
  !*** ./src/app/music/music-search/music-search-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: MusicSearchPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MusicSearchPageRoutingModule", function() { return MusicSearchPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _music_search_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./music-search.page */ "ff9t");




const routes = [
    {
        path: '',
        component: _music_search_page__WEBPACK_IMPORTED_MODULE_3__["MusicSearchPage"]
    }
];
let MusicSearchPageRoutingModule = class MusicSearchPageRoutingModule {
};
MusicSearchPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MusicSearchPageRoutingModule);



/***/ }),

/***/ "Ie7a":
/*!*******************************************!*\
  !*** ./src/app/services/music.service.ts ***!
  \*******************************************/
/*! exports provided: MusicService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MusicService", function() { return MusicService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");




let MusicService = class MusicService {
    constructor(firestore) {
        this.firestore = firestore;
    }
    //******************************//
    //****** Get item detail  ******//
    //******************************//
    getItemDetail(itemId) {
        return this.firestore.doc('music_bands/' + itemId).valueChanges();
    }
    getAlbumsDetail(albumId) {
        return this.firestore.doc('music_albums/' + albumId).valueChanges();
    }
    //******************************//
    //****** Get Bands  ************//
    //******************************//
    getBands() {
        console.log("start getBands");
        return this.firestore.collection('music_bands', ref => ref
            .where('Visible', '==', 'si')).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(actions => {
            return actions.map(a => {
                const data = a.payload.doc.data();
                // get id from firebase metadata 
                const id = a.payload.doc.id;
                return Object.assign({ id }, data);
            });
        }));
    }
    getBandsRecommended() {
        console.log("start getBandsRecommended");
        return this.firestore.collection('music_bands', ref => ref
            .where('Visible', '==', 'si').where('recommended', '==', true)).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(actions => {
            return actions.map(a => {
                const data = a.payload.doc.data();
                // get id from firebase metadata 
                const id = a.payload.doc.id;
                return Object.assign({ id }, data);
            });
        }));
    }
    //*************************************//
    //******** Item by categoryId *********//
    //*************************************//
    getItemByCatId() {
        return this.firestore.collection('/music_albums', ref => ref
            .where('Available', '==', 'si')
            .where('Visible', '==', 'si'))
            //.orderBy("timestamp", "desc").limit(10))
            .snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(actions => {
            return actions.map(a => {
                const data = a.payload.doc.data();
                // get id from firebase metadata 
                const id = a.payload.doc.id;
                return Object.assign({ id }, data);
            });
        }));
    }
    //******************************//
    //****** Get Albums  ************//
    //******************************//
    getAlbums() {
        console.log("start getAlbums");
        return this.firestore.collection(('music_albums'), ref => ref
            .where('Visible', '==', 'si')).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(actions => {
            return actions.map(a => {
                const data = a.payload.doc.data();
                // get id from firebase metadata 
                const id = a.payload.doc.id;
                return Object.assign({ id }, data);
            });
        }));
    }
    getAlbumsRecommended() {
        console.log("start getAlbumsRecommended");
        return this.firestore.collection('music_albums', ref => ref
            .where('Visible', '==', 'si').where('front', '==', true)).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(actions => {
            return actions.map(a => {
                const data = a.payload.doc.data();
                // get id from firebase metadata 
                const id = a.payload.doc.id;
                return Object.assign({ id }, data);
            });
        }));
    }
    //******************************//
    //**Added, Update & Delete******//
    //******************************//
    addedBand(photo, music, name, rating, description, question, short_description) {
        console.log("___addBand=");
        return this.firestore.collection('music_bands').add({
            Available: "si",
            Visible: "si",
            image: photo,
            name: name,
            music: music,
            rating: rating,
            description: description,
            recommended: question,
            short_description: short_description,
            createdTime: new Date()
        });
    }
    /*------------------------------------------------------------*/
    deleteBand(BandId) {
        return this.firestore.doc('music_bands/' + BandId).delete();
    }
    /* ---------------------------------------------------------- */
    edit(bandId, photo, music, name, rating, description, question, short_description) {
        return this.firestore.doc('music_bands/' + bandId).update({
            Available: "si",
            Visible: "si",
            update: new Date(),
            music_categoryId: bandId,
            music_category_name: name,
            image: photo,
            music: music,
            name: name,
            year: 1998,
            rating: rating,
            recommended: Boolean = question,
            description: description,
            short_description: short_description
        });
    }
};
MusicService.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }
];
MusicService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], MusicService);



/***/ }),

/***/ "J/td":
/*!************************************************************!*\
  !*** ./src/app/components/global/back/back.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".background {\n  z-index: 1;\n  background-color: var(--ion-color-personalize);\n  width: 100%;\n  height: 250px;\n  position: absolute;\n  border-top-left-radius: 0%;\n  border-top-right-radius: 0%;\n  border-bottom-left-radius: 0%;\n  border-bottom-right-radius: 0%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcYmFjay5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFVBQUE7RUFDQSw4Q0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtFQUNGLDJCQUFBO0VBQ0EsNkJBQUE7RUFDQSw4QkFBQTtBQUNGIiwiZmlsZSI6ImJhY2suY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFja2dyb3VuZHtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoIC0taW9uLWNvbG9yLXBlcnNvbmFsaXplKTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAyNTBweDtcclxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMCU7XHJcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDAlO1xyXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDAlO1xyXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwJTtcclxufSJdfQ== */");

/***/ }),

/***/ "LIgB":
/*!******************************************************************************!*\
  !*** ./src/app/components/inicio/section-three/section-three.component.scss ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".playlists {\n  z-index: 1 !important;\n  margin-top: -35px !important;\n  position: absolute;\n}\n\n.lomasescuchado {\n  margin-top: -10px !important;\n  margin-bottom: 25px !important;\n}\n\n.minicarrousel {\n  margin-top: -15px;\n  position: relative;\n  z-index: 4;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcc2VjdGlvbi10aHJlZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLHFCQUFBO0VBQXVCLDRCQUFBO0VBQThCLGtCQUFBO0FBR3REOztBQURBO0VBQ0MsNEJBQUE7RUFBOEIsOEJBQUE7QUFLL0I7O0FBSEE7RUFDQSxpQkFBQTtFQUFrQixrQkFBQTtFQUFvQixVQUFBO0FBUXRDIiwiZmlsZSI6InNlY3Rpb24tdGhyZWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGxheWxpc3Rze1xyXG4gei1pbmRleDogMSAhaW1wb3J0YW50OyBtYXJnaW4tdG9wOiAtMzVweCAhaW1wb3J0YW50OyBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuLmxvbWFzZXNjdWNoYWRve1xyXG4gbWFyZ2luLXRvcDogLTEwcHggIWltcG9ydGFudDsgbWFyZ2luLWJvdHRvbTogMjVweCAhaW1wb3J0YW50O1xyXG59XHJcbi5taW5pY2Fycm91c2Vse1xyXG5tYXJnaW4tdG9wOi0xNXB4OyBwb3NpdGlvbjogcmVsYXRpdmU7IHotaW5kZXg6IDQ7XHJcbn0iXX0= */");

/***/ }),

/***/ "Niy5":
/*!***********************************************************************!*\
  !*** ./src/app/components/bandsrock/band-rock/band-rock.component.ts ***!
  \***********************************************************************/
/*! exports provided: BandRockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BandRockComponent", function() { return BandRockComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_band_rock_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./band-rock.component.html */ "ZpxO");
/* harmony import */ var _band_rock_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./band-rock.component.scss */ "nV/d");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_music_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/music.service */ "Ie7a");






let BandRockComponent = class BandRockComponent {
    constructor(activatedRoute, musicservice, router) {
        this.activatedRoute = activatedRoute;
        this.musicservice = musicservice;
        this.router = router;
        this.itemId = this.activatedRoute.snapshot.paramMap.get('bandsId');
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.Bands = this.musicservice.getBands();
        });
    }
};
BandRockComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _services_music_service__WEBPACK_IMPORTED_MODULE_5__["MusicService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
BandRockComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-band-rock',
        template: _raw_loader_band_rock_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_band_rock_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], BandRockComponent);



/***/ }),

/***/ "OCiI":
/*!******************************************************************************!*\
  !*** ./src/app/components/inicio/buttons-start/buttons-start.component.scss ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJidXR0b25zLXN0YXJ0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "PX5w":
/*!************************************************************************!*\
  !*** ./src/app/components/global/back-short/back-short.component.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".background {\n  z-index: 1;\n  background-color: var(--ion-color-personalize);\n  width: 100%;\n  height: 70px;\n  position: absolute;\n  border-top-left-radius: 0%;\n  border-top-right-radius: 0%;\n  border-bottom-left-radius: 0%;\n  border-bottom-right-radius: 0%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcYmFjay1zaG9ydC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFVBQUE7RUFDQSw4Q0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtFQUNGLDJCQUFBO0VBQ0EsNkJBQUE7RUFDQSw4QkFBQTtBQUNGIiwiZmlsZSI6ImJhY2stc2hvcnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFja2dyb3VuZHtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoIC0taW9uLWNvbG9yLXBlcnNvbmFsaXplKTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA3MHB4O1xyXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwJTtcclxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMCU7XHJcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMCU7XHJcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDAlO1xyXG59Il19 */");

/***/ }),

/***/ "QUMP":
/*!***********************************************************!*\
  !*** ./src/app/music/music-search/music-search.module.ts ***!
  \***********************************************************/
/*! exports provided: MusicSearchPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MusicSearchPageModule", function() { return MusicSearchPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _music_search_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./music-search-routing.module */ "I4zx");
/* harmony import */ var _music_search_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./music-search.page */ "ff9t");







let MusicSearchPageModule = class MusicSearchPageModule {
};
MusicSearchPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _music_search_routing_module__WEBPACK_IMPORTED_MODULE_5__["MusicSearchPageRoutingModule"]
        ],
        declarations: [_music_search_page__WEBPACK_IMPORTED_MODULE_6__["MusicSearchPage"]]
    })
], MusicSearchPageModule);



/***/ }),

/***/ "R+qG":
/*!*************************************************************************!*\
  !*** ./src/app/components/album/header-album/header-album.component.ts ***!
  \*************************************************************************/
/*! exports provided: HeaderAlbumComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderAlbumComponent", function() { return HeaderAlbumComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_header_album_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./header-album.component.html */ "2S51");
/* harmony import */ var _header_album_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header-album.component.scss */ "29s8");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _music_music_search_music_search_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../music/music-search/music-search.page */ "ff9t");






let HeaderAlbumComponent = class HeaderAlbumComponent {
    constructor(modalController) {
        this.modalController = modalController;
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
    }
};
HeaderAlbumComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }
];
HeaderAlbumComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-header-album',
        template: _raw_loader_header_album_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_header_album_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], HeaderAlbumComponent);



/***/ }),

/***/ "SdWb":
/*!**********************************************************************!*\
  !*** ./src/app/components/global/back-short/back-short.component.ts ***!
  \**********************************************************************/
/*! exports provided: BackShortComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackShortComponent", function() { return BackShortComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_back_short_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./back-short.component.html */ "6y6h");
/* harmony import */ var _back_short_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./back-short.component.scss */ "PX5w");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let BackShortComponent = class BackShortComponent {
    constructor() { }
    ngOnInit() { }
};
BackShortComponent.ctorParameters = () => [];
BackShortComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-back-short',
        template: _raw_loader_back_short_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_back_short_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], BackShortComponent);



/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.scss */ "ynWL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/auth.service */ "lGQG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");






let AppComponent = class AppComponent {
    constructor(authSvc, router) {
        this.authSvc = authSvc;
        this.router = router;
        this.appPages = [
            { title: 'Inicio', url: '/folder/Inicio', icon: 'musical-notes' },
            { title: 'Rock Bands ', url: '/folder/Rock Bands', icon: 'skull' },
            { title: 'Albums', url: '/music-list/Albums', icon: 'albums' },
        ];
    }
    onLogout() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                yield this.authSvc.logout();
                this.router.navigate(['/music-login']);
            }
            catch (error) {
                console.log(error);
            }
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AppComponent);



/***/ }),

/***/ "T9ko":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/album/section-uno/section-uno.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<ion-slides class=\"swiper-container\" pager= false \r\n[options]=\"slideOption\" #slidesOne  style=\"z-index: 2;\">\r\n\r\n  <ion-slide  *ngFor=\"let album of Albums| async \"\r\n  >\r\n  <ion-card class=\"music-main-h-card music-card2 slide-left\"  *ngIf=\"album.recommended\" (click)=\"openDetail('music-album-detail',album.id)\">\r\n  <div class=\"music-card2-bg ion-text-uppercase\" [ngStyle]=\"{'background-image': 'url(' + album.image+ ')'}\" >\r\n  <h2 class=\"card2-title\">   <br><br><br><br><br>{{album.name}}</h2>                           \r\n  </div>\r\n  </ion-card>\r\n  </ion-slide>\r\n  </ion-slides>\r\n  \r\n  <br><br><br><br><br><br><br><br><br>\r\n  <div class=\"borde\"></div>\r\n  ");

/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-app>\r\n  <ion-split-pane contentId=\"main-content\">\r\n    <ion-menu contentId=\"main-content\" type=\"overlay\" swipe-gesture=\"false\" >\r\n\r\n      <div class=\"imagesidemenu\">\r\n        <div class=\"center logo\">\r\n        <ion-icon name=\"planet\" [ngStyle]=\"{'transform':  'scale(10.5)'}\" color=\"light\" ></ion-icon>\r\n      </div>\r\n      </div>\r\n\r\n\r\n      <ion-content lines=\"none\">\r\n        <ion-list id=\"inbox-list\" >\r\n          <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let p of appPages; let i = index\">\r\n            <ion-item routerDirection=\"root\" [routerLink]=\"[p.url]\" lines=\"none\" detail=\"false\" routerLinkActive=\"selected\">\r\n              <ion-icon slot=\"start\" [ios]=\"p.icon + '-outline'\" [md]=\"p.icon + '-sharp'\"></ion-icon>\r\n              <ion-label>{{ p.title }}</ion-label>\r\n            </ion-item>\r\n          </ion-menu-toggle>\r\n        </ion-list>\r\n\r\n      </ion-content>\r\n\r\n      <ion-footer>\r\n      <ion-menu-toggle >\r\n      <ion-button mode=\"ios\"  expand=\"full\" color=\"translucent\" lines=\"none\" routerLink=\"../../music-add-band\">\r\n      <ion-text color=\"dark\" class=\"main-header7\">Add \r\n      </ion-text> \r\n      <ion-icon name=\"add\" color=\"dark\"  slot=\"end\">\r\n      </ion-icon>\r\n      </ion-button>\r\n      </ion-menu-toggle>\r\n      <ion-menu-toggle >\r\n      <ion-button mode=\"ios\"  expand=\"full\" color=\"light\" (click)=\"onLogout()\" class=\"main-header7\">\r\n      Exit <ion-icon name=\"log-out-outline\" slot=\"end\">\r\n      </ion-icon>\r\n      </ion-button>\r\n      </ion-menu-toggle>\r\n      </ion-footer>\r\n\r\n\r\n\r\n    </ion-menu>\r\n    <ion-router-outlet id=\"main-content\"></ion-router-outlet>\r\n  </ion-split-pane>\r\n</ion-app>\r\n");

/***/ }),

/***/ "YRfL":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/headers/edit-band/edit-band.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header  class=\"ion-no-border fade-in\">\n  <ion-toolbar color=\"translucent\">\n  <ion-buttons slot=\"start\" >\n  <ion-menu-button  class=\"title-intro\" ><ion-icon name=\"musical-note\" ></ion-icon></ion-menu-button>\n  </ion-buttons>\n  <ion-title class=\"ion-text-center title-intro\">Edit Band </ion-title>\n \n          <ion-buttons slot=\"end\">\n<!-- Search -->\n          <ion-button class=\"badge-button lupa  fade-in\"  (click)=\"openSearchModal()\"   contentId=\"maintwo\"  menuId=\"four\">\n          <ion-icon name=\"search-outline\" color=\"light\"></ion-icon>\n          </ion-button>\n          </ion-buttons>\n</ion-toolbar>\n</ion-header>");

/***/ }),

/***/ "YwbT":
/*!************************************************************************!*\
  !*** ./src/app/components/inicio/section-one/section-one.component.ts ***!
  \************************************************************************/
/*! exports provided: SectionOneComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionOneComponent", function() { return SectionOneComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_section_one_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./section-one.component.html */ "A6Ye");
/* harmony import */ var _section_one_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./section-one.component.scss */ "sDp8");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_music_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/music.service */ "Ie7a");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");






let SectionOneComponent = class SectionOneComponent {
    constructor(musicservice, router) {
        this.musicservice = musicservice;
        this.router = router;
        this.slideOption = {
            slidesPerView: 'auto',
            grabCursor: true,
        };
        this.itemArray = [];
    }
    getRockbands() {
        this.Rockbands = this.musicservice.getBandsRecommended();
    }
    openDetail(url, itemId) {
        this.router.navigateByUrl('/' + url + '/' + itemId);
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.getRockbands();
        });
    }
};
SectionOneComponent.ctorParameters = () => [
    { type: _services_music_service__WEBPACK_IMPORTED_MODULE_4__["MusicService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
SectionOneComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-section-one',
        template: _raw_loader_section_one_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_section_one_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SectionOneComponent);



/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../environments/environment.prod */ "cxbk");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire */ "spgP");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/fire/storage */ "Vaw3");
/* harmony import */ var _music_music_search_music_search_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./music/music-search/music-search.module */ "QUMP");
/* harmony import */ var _components_global_header_header_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/global/header/header.component */ "cdmV");
/* harmony import */ var _components_global_back_back_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/global/back/back.component */ "avQE");
/* harmony import */ var _components_global_back_short_back_short_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/global/back-short/back-short.component */ "SdWb");
/* harmony import */ var _components_inicio_buttons_start_buttons_start_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/inicio/buttons-start/buttons-start.component */ "mYU1");
/* harmony import */ var _components_inicio_section_one_section_one_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/inicio/section-one/section-one.component */ "YwbT");
/* harmony import */ var _components_inicio_section_two_section_two_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/inicio/section-two/section-two.component */ "9bWw");
/* harmony import */ var _components_inicio_section_three_section_three_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/inicio/section-three/section-three.component */ "b7ux");
/* harmony import */ var _components_bandsrock_band_rock_band_rock_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/bandsrock/band-rock/band-rock.component */ "Niy5");
/* harmony import */ var _components_album_header_album_header_album_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/album/header-album/header-album.component */ "R+qG");
/* harmony import */ var _components_album_section_uno_section_uno_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/album/section-uno/section-uno.component */ "uOtd");
/* harmony import */ var _components_album_section_dos_section_dos_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/album/section-dos/section-dos.component */ "AUDz");
/* harmony import */ var _components_headers_edit_band_edit_band_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/headers/edit-band/edit-band.component */ "uauA");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "VYYF");











/* otros */

/* global */



/* Inicio */




/* Rockbands */

/* Album */



/* Edit Detail */

/* Plugins */

let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(),
            _angular_fire__WEBPACK_IMPORTED_MODULE_8__["AngularFireModule"].initializeApp(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_7__["environment"].firebaseConfig),
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_9__["AngularFirestoreModule"],
            _angular_fire_storage__WEBPACK_IMPORTED_MODULE_10__["AngularFireStorageModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
            _music_music_search_music_search_module__WEBPACK_IMPORTED_MODULE_11__["MusicSearchPageModule"]
        ],
        providers: [
            /* plugins */
            _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_24__["StatusBar"],
            /* global */
            _components_global_back_back_component__WEBPACK_IMPORTED_MODULE_13__["BackComponent"],
            _components_global_back_short_back_short_component__WEBPACK_IMPORTED_MODULE_14__["BackShortComponent"],
            _components_global_header_header_component__WEBPACK_IMPORTED_MODULE_12__["HeaderComponent"],
            /* inicio */
            _components_inicio_buttons_start_buttons_start_component__WEBPACK_IMPORTED_MODULE_15__["ButtonsStartComponent"],
            _components_inicio_section_one_section_one_component__WEBPACK_IMPORTED_MODULE_16__["SectionOneComponent"],
            _components_inicio_section_two_section_two_component__WEBPACK_IMPORTED_MODULE_17__["SectionTwoComponent"],
            _components_inicio_section_three_section_three_component__WEBPACK_IMPORTED_MODULE_18__["SectionThreeComponent"],
            /* Rock Band */
            _components_bandsrock_band_rock_band_rock_component__WEBPACK_IMPORTED_MODULE_19__["BandRockComponent"],
            /* Albums */
            _components_album_header_album_header_album_component__WEBPACK_IMPORTED_MODULE_20__["HeaderAlbumComponent"],
            _components_album_section_uno_section_uno_component__WEBPACK_IMPORTED_MODULE_21__["SectionUnoComponent"],
            _components_album_section_dos_section_dos_component__WEBPACK_IMPORTED_MODULE_22__["SectionDosComponent"],
            /* Detail Edit  */
            _components_headers_edit_band_edit_band_component__WEBPACK_IMPORTED_MODULE_23__["EditBandComponent"],
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"], useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"], }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
    })
], AppModule);



/***/ }),

/***/ "ZpxO":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/bandsrock/band-rock/band-rock.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"borde\"></div>\r\n  \r\n<ion-row >\r\n  <ion-col size-lg=\"6\" size-md=\"6\" size-sm=\"6\" size=\"12\" style=\"z-index: 20000 !important;\" *ngFor=\"let band of Bands | async\">\r\n    <ion-card class=\"card-main card-wide \" tappable>\r\n      <div class=\"card-wide-bg \" [ngStyle]=\"{'background-image': 'url(' + band.image+ ')'}\"\r\n        routerLink=\"../../music-detail/{{band.id}}\">\r\n        <h2 class=\"card-wide-title\"> {{band.name}}</h2>\r\n      </div>\r\n    </ion-card>\r\n  </ion-col>\r\n</ion-row>\r\n");

/***/ }),

/***/ "avQE":
/*!**********************************************************!*\
  !*** ./src/app/components/global/back/back.component.ts ***!
  \**********************************************************/
/*! exports provided: BackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackComponent", function() { return BackComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_back_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./back.component.html */ "3OTz");
/* harmony import */ var _back_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./back.component.scss */ "J/td");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let BackComponent = class BackComponent {
    constructor() { }
    ngOnInit() { }
};
BackComponent.ctorParameters = () => [];
BackComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-back',
        template: _raw_loader_back_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_back_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], BackComponent);



/***/ }),

/***/ "b7ux":
/*!****************************************************************************!*\
  !*** ./src/app/components/inicio/section-three/section-three.component.ts ***!
  \****************************************************************************/
/*! exports provided: SectionThreeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionThreeComponent", function() { return SectionThreeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_section_three_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./section-three.component.html */ "FDUZ");
/* harmony import */ var _section_three_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./section-three.component.scss */ "LIgB");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_music_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/music.service */ "Ie7a");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");






let SectionThreeComponent = class SectionThreeComponent {
    constructor(router, musicservice) {
        this.router = router;
        this.musicservice = musicservice;
    }
    getPlaylists() {
        this.Playlists = this.musicservice.getBands();
    }
    openDetail(url, itemId) {
        this.router.navigateByUrl('/' + url + '/' + itemId);
    }
    getSong() {
        this.musicservice.getBands().subscribe(x => {
            x.map(y => {
                this.Song = y.music;
            });
        });
        return this.Song;
    }
    ngOnInit() {
        this.getSong();
        this.getPlaylists();
    }
};
SectionThreeComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _services_music_service__WEBPACK_IMPORTED_MODULE_4__["MusicService"] }
];
SectionThreeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-section-three',
        template: _raw_loader_section_three_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_section_three_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SectionThreeComponent);



/***/ }),

/***/ "cdmV":
/*!**************************************************************!*\
  !*** ./src/app/components/global/header/header.component.ts ***!
  \**************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_header_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./header.component.html */ "8uH4");
/* harmony import */ var _header_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header.component.scss */ "qf/g");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _music_music_search_music_search_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../music/music-search/music-search.page */ "ff9t");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");







let HeaderComponent = class HeaderComponent {
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
HeaderComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] }
];
HeaderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-header',
        template: _raw_loader_header_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_header_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], HeaderComponent);



/***/ }),

/***/ "cxbk":
/*!**********************************************!*\
  !*** ./src/environments/environment.prod.ts ***!
  \**********************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
const environment = {
    production: true,
    firebaseConfig: {
        apiKey: "AIzaSyCt_e-2lq2jpZCy9oWAoJ7-KTEe0Pzk32A",
        authDomain: "musicapp-af852.firebaseapp.com",
        projectId: "musicapp-af852",
        storageBucket: "musicapp-af852.appspot.com",
        messagingSenderId: "633652687044",
        appId: "1:633652687044:web:dbd246105feab7f441d991"
    },
};


/***/ }),

/***/ "dWTU":
/*!******************************************!*\
  !*** ./src/app/shared/no-login.guard.ts ***!
  \******************************************/
/*! exports provided: NoLoginGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoLoginGuard", function() { return NoLoginGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");





let NoLoginGuard = class NoLoginGuard {
    constructor(router, AFauth) {
        this.router = router;
        this.AFauth = AFauth;
    }
    canActivate(next, state) {
        return this.AFauth.authState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(auth => {
            if (auth === null || auth === undefined) {
                return true;
            }
            else {
                this.router.navigate(['/folder/Inicio']);
                return false;
            }
        }));
    }
};
NoLoginGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"] }
];
NoLoginGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], NoLoginGuard);



/***/ }),

/***/ "ff9t":
/*!*********************************************************!*\
  !*** ./src/app/music/music-search/music-search.page.ts ***!
  \*********************************************************/
/*! exports provided: MusicSearchPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MusicSearchPage", function() { return MusicSearchPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_music_search_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./music-search.page.html */ "HtqR");
/* harmony import */ var _music_search_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./music-search.page.scss */ "AEDv");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_music_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/music.service */ "Ie7a");







let MusicSearchPage = class MusicSearchPage {
    constructor(musicservice, modalController, router) {
        this.musicservice = musicservice;
        this.modalController = modalController;
        this.router = router;
    }
    close() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.modalController.dismiss();
        });
    }
    openDetail(itemId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log("itemId" + itemId);
            // call loading //
            this.router.navigateByUrl('/music-detail/' + itemId);
            yield this.modalController.dismiss();
        });
    }
    AddBand() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.router.navigateByUrl('/music-add-band');
            yield this.modalController.dismiss();
        });
    }
    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    ngOnInit() {
        console.log("--------------first time loaded-------------");
        this.musicservice.getBands().subscribe(results => {
            console.log(results);
            this.loadedResultList = results;
        });
        let timeoutID = setTimeout(() => {
            /*  this.searchbar.setFocus(); */
            console.log("setFocus()=======");
            clearTimeout(timeoutID);
        }, 200);
    }
    initializeItems() {
        console.log("call initialize");
        this.resultList = this.loadedResultList;
    }
    filterList(evt) {
        console.log("call filter");
        this.initializeItems();
        const searchTerm = evt.srcElement.value;
        console.log("search value=" + searchTerm);
        if (!searchTerm) {
            console.log("return>>>>");
            this.resultList = [];
            return;
        }
        this.resultList = this.resultList.filter(currentGoal => {
            if (currentGoal.name && searchTerm) {
                if (currentGoal.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1) {
                    console.log("Number of result value : true");
                    return true;
                }
                console.log("Unmatch vlaue : false");
                return false;
            }
        });
    }
};
MusicSearchPage.ctorParameters = () => [
    { type: _services_music_service__WEBPACK_IMPORTED_MODULE_6__["MusicService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
MusicSearchPage.propDecorators = {
    searchbar: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['searchbar', { static: false },] }]
};
MusicSearchPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-music-search',
        template: _raw_loader_music_search_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_music_search_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], MusicSearchPage);



/***/ }),

/***/ "kLfG":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ion-action-sheet.entry.js": [
		"dUtr",
		"common",
		0
	],
	"./ion-alert.entry.js": [
		"Q8AI",
		"common",
		1
	],
	"./ion-app_8.entry.js": [
		"hgI1",
		"common",
		2
	],
	"./ion-avatar_3.entry.js": [
		"CfoV",
		"common",
		3
	],
	"./ion-back-button.entry.js": [
		"Nt02",
		"common",
		4
	],
	"./ion-backdrop.entry.js": [
		"Q2Bp",
		5
	],
	"./ion-button_2.entry.js": [
		"0Pbj",
		"common",
		6
	],
	"./ion-card_5.entry.js": [
		"ydQj",
		"common",
		7
	],
	"./ion-checkbox.entry.js": [
		"4fMi",
		"common",
		8
	],
	"./ion-chip.entry.js": [
		"czK9",
		"common",
		9
	],
	"./ion-col_3.entry.js": [
		"/CAe",
		10
	],
	"./ion-datetime_3.entry.js": [
		"WgF3",
		"common",
		11
	],
	"./ion-fab_3.entry.js": [
		"uQcF",
		"common",
		12
	],
	"./ion-img.entry.js": [
		"wHD8",
		13
	],
	"./ion-infinite-scroll_2.entry.js": [
		"2lz6",
		14
	],
	"./ion-input.entry.js": [
		"ercB",
		"common",
		15
	],
	"./ion-item-option_3.entry.js": [
		"MGMP",
		"common",
		16
	],
	"./ion-item_8.entry.js": [
		"9bur",
		"common",
		17
	],
	"./ion-loading.entry.js": [
		"cABk",
		"common",
		18
	],
	"./ion-menu_3.entry.js": [
		"kyFE",
		"common",
		19
	],
	"./ion-modal.entry.js": [
		"TvZU",
		"common",
		20
	],
	"./ion-nav_2.entry.js": [
		"vnES",
		"common",
		21
	],
	"./ion-popover.entry.js": [
		"qCuA",
		"common",
		22
	],
	"./ion-progress-bar.entry.js": [
		"0tOe",
		"common",
		23
	],
	"./ion-radio_2.entry.js": [
		"h11V",
		"common",
		24
	],
	"./ion-range.entry.js": [
		"XGij",
		"common",
		25
	],
	"./ion-refresher_2.entry.js": [
		"nYbb",
		"common",
		26
	],
	"./ion-reorder_2.entry.js": [
		"smMY",
		"common",
		27
	],
	"./ion-ripple-effect.entry.js": [
		"STjf",
		28
	],
	"./ion-route_4.entry.js": [
		"k5eQ",
		"common",
		29
	],
	"./ion-searchbar.entry.js": [
		"OR5t",
		"common",
		30
	],
	"./ion-segment_2.entry.js": [
		"fSgp",
		"common",
		31
	],
	"./ion-select_3.entry.js": [
		"lfGF",
		"common",
		32
	],
	"./ion-slide_2.entry.js": [
		"5xYT",
		33
	],
	"./ion-spinner.entry.js": [
		"nI0H",
		"common",
		34
	],
	"./ion-split-pane.entry.js": [
		"NAQR",
		35
	],
	"./ion-tab-bar_2.entry.js": [
		"knkW",
		"common",
		36
	],
	"./ion-tab_2.entry.js": [
		"TpdJ",
		"common",
		37
	],
	"./ion-text.entry.js": [
		"ISmu",
		"common",
		38
	],
	"./ion-textarea.entry.js": [
		"U7LX",
		"common",
		39
	],
	"./ion-toast.entry.js": [
		"L3sA",
		"common",
		40
	],
	"./ion-toggle.entry.js": [
		"IUOf",
		"common",
		41
	],
	"./ion-virtual-scroll.entry.js": [
		"8Mb5",
		42
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "kLfG";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "lGQG":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");









let AuthService = class AuthService {
    constructor(afAuth, afs, platform, toastController, router) {
        this.afAuth = afAuth;
        this.afs = afs;
        this.platform = platform;
        this.toastController = toastController;
        this.router = router;
        this.afAuth.authState.subscribe(user => {
            if (user) {
                this.userId = user.uid;
                this.email = user.email;
                this.emailVerified = user.emailVerified;
            }
        });
        this.user$ = this.afAuth.authState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])((user) => {
            if (user) {
                return this.afs.doc(`users/${user.uid}`).valueChanges();
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(null);
        }));
    }
    toastusuarioyaregistrado() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: 'Ya te has registrado con este Email.',
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
    toastinvalidpassword() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: 'Contraseña invalida.',
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
    toastinvalidemail() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: 'Regístrate antes de ingresar.',
                duration: 2000,
                cssClass: 'eltoastregister', color: 'light',
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
    toastpasswordweak() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: 'La clave debe de contener al menos 6 caracteres.',
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
    register(email, password) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const { user } = yield this.afAuth.createUserWithEmailAndPassword(email, password);
                yield this.sendVerifcationEmail();
                return user;
            }
            catch (error) {
                if (error.code === 'auth/invalid-email') {
                    this.toastemailincorrecto();
                    this.router.navigate(['/register']);
                }
                if (error.code === 'auth/email-already-in-use') {
                    this.toastusuarioyaregistrado();
                    this.router.navigate(['/register']);
                }
                if (error.code === 'auth/weak-password') {
                    this.toastpasswordweak();
                    this.router.navigate(['/register']);
                }
            }
        });
    }
    login(email, password) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const { user } = yield this.afAuth.signInWithEmailAndPassword(email, password);
                this.updateUserData(user);
                return user;
            }
            catch (error) {
                if (error.code === 'auth/invalid-email') {
                    this.toastemailincorrecto();
                    this.router.navigate(['/login']);
                }
                if (error.code === 'auth/wrong-password') {
                    this.toastinvalidpassword();
                    this.router.navigate(['/login']);
                }
                if (error.code === 'auth/user-not-found') {
                    this.toastinvalidemail();
                    this.router.navigate(['/login']);
                }
                /*      console.log('Error->', error); */
            }
        });
    }
    sendVerifcationEmail() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                return (yield this.afAuth.currentUser).sendEmailVerification();
            }
            catch (error) {
                console.log('Error->', error);
            }
        });
    }
    isEmailVerified(user) {
        return user.emailVerified === true ? true : false;
    }
    resetPassword(email) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                return this.afAuth.sendPasswordResetEmail(email);
            }
            catch (error) {
                console.log('Error->', error);
            }
        });
    }
    logout() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                yield this.afAuth.signOut();
            }
            catch (error) {
                console.log('Error->', error);
            }
        });
    }
    updateUserData(user) {
        const userRef = this.afs.doc(`users/${user.uid}`);
        const data = {
            uid: user.uid,
            email: user.email,
            emailVerified: user.emailVerified,
            displayName: user.displayName,
        };
        return userRef.set(data, { merge: true });
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }
];
AuthService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthService);



/***/ }),

/***/ "mYU1":
/*!****************************************************************************!*\
  !*** ./src/app/components/inicio/buttons-start/buttons-start.component.ts ***!
  \****************************************************************************/
/*! exports provided: ButtonsStartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonsStartComponent", function() { return ButtonsStartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_buttons_start_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./buttons-start.component.html */ "8vDd");
/* harmony import */ var _buttons_start_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./buttons-start.component.scss */ "OCiI");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





let ButtonsStartComponent = class ButtonsStartComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() { }
};
ButtonsStartComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
ButtonsStartComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-buttons-start',
        template: _raw_loader_buttons_start_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_buttons_start_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ButtonsStartComponent);



/***/ }),

/***/ "nV/d":
/*!*************************************************************************!*\
  !*** ./src/app/components/bandsrock/band-rock/band-rock.component.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJiYW5kLXJvY2suY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "nxjy":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/album/section-dos/section-dos.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n  \r\n    <h1 class=\"letterinicio lettercarrousel\">KISS</h1>\r\n    <br>\r\n    <ion-slides class=\"swiper-container fade-in\" pager= false\r\n     [options]=\"slideOption\" #slidesOne style=\"margin-top:-40px !important;\" >\r\n     \r\n        <ion-slide  (click)=\"openDetail('music-album-detail',item.id)\"  *ngFor=\"let item of Items | async\">\r\n            <div *ngIf=\"item.music_category_name == 'KISS' \">\r\n        <ion-card class=\"music-main-h-card music-card0 slide-left fade-in-left\"  >\r\n        <div class=\"music-card0-bg ion-text-uppercase\" [ngStyle]=\"{'background-image': 'url(' + item.image+ ')'}\" >\r\n        <h2 class=\"card2-title\"> <br>{{item.name}}</h2>                           \r\n        </div>\r\n        </ion-card>\r\n        </div>\r\n        </ion-slide>\r\n        </ion-slides>\r\n      \r\n      <h1 class=\"letterinicio lettercarrousel\">AC/DC</h1>\r\n      <br>\r\n      <ion-slides class=\"swiper-container fade-in\" pager= false\r\n      [options]=\"slideOption\" #slidesOne style=\"margin-top:-40px !important;\">\r\n      \r\n\r\n      <ion-slide  (click)=\"openDetail('music-album-detail',item.id)\"   *ngFor=\"let item of Items | async\">\r\n        <div *ngIf=\"item.music_category_name == 'AC/DC'\">\r\n        <ion-card class=\"music-main-h-card music-card0 slide-left fade-in-left\"  >\r\n        <div class=\"music-card0-bg ion-text-uppercase\" [ngStyle]=\"{'background-image': 'url(' + item.image+ ')'}\" >\r\n        <h2 class=\"card2-title\">   <br>{{item.name}}</h2>                           \r\n        </div>\r\n        </ion-card>\r\n        </div>\r\n        </ion-slide>\r\n      </ion-slides>\r\n\r\n      <h1 class=\"letterinicio lettercarrousel\">THE RAMONES</h1>\r\n      <br>\r\n      <ion-slides class=\"swiper-container fade-in\" pager= false\r\n      [options]=\"slideOption\" #slidesOne style=\"margin-top:-40px !important;\">\r\n      \r\n\r\n      <ion-slide  (click)=\"openDetail('music-album-detail',item.id)\"   *ngFor=\"let item of Items | async\">\r\n        <div *ngIf=\"item.music_category_name == 'THE RAMONES'\">\r\n        <ion-card class=\"music-main-h-card music-card0 slide-left fade-in-left\"  >\r\n        <div class=\"music-card0-bg ion-text-uppercase\" [ngStyle]=\"{'background-image': 'url(' + item.image+ ')'}\" >\r\n        <h2 class=\"card2-title\">   <br>{{item.name}}</h2>                           \r\n        </div>\r\n        </ion-card>\r\n        </div>\r\n        </ion-slide>\r\n      </ion-slides>\r\n      \r\n      <!-- <h1 class=\"letterinicio lettercarrousel\">QUEEN</h1>\r\n      <br>\r\n      <ion-slides class=\"swiper-container fade-in\" pager= false\r\n      [options]=\"slideOption\" #slidesOne style=\"margin-top:-40px !important;\" >\r\n      \r\n\r\n      <ion-slide  (click)=\"openDetail('music-album-detail',item.id)\"  *ngFor=\"let item of Items | async\">\r\n        <div *ngIf=\"item.music_categoryId == '7'\">\r\n        <ion-card class=\"music-main-h-card music-card0 slide-left fade-in-left\"  >\r\n        <div class=\"music-card0-bg ion-text-uppercase\" [ngStyle]=\"{'background-image': 'url(' + item.image+ ')'}\" >\r\n        <h2 class=\"card2-title\">   <br>{{item.name}}</h2>                           \r\n        </div>\r\n        </ion-card>\r\n        </div>\r\n        </ion-slide>\r\n      </ion-slides>\r\n\r\n      </ion-slides> -->\r\n");

/***/ }),

/***/ "oUal":
/*!*************************************************************************!*\
  !*** ./src/app/components/album/section-uno/section-uno.component.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZWN0aW9uLXVuby5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "qf/g":
/*!****************************************************************!*\
  !*** ./src/app/components/global/header/header.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "rjY6":
/*!***********************************************************************!*\
  !*** ./src/app/components/headers/edit-band/edit-band.component.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0LWJhbmQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "sDp8":
/*!**************************************************************************!*\
  !*** ./src/app/components/inicio/section-one/section-one.component.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZWN0aW9uLW9uZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "uOtd":
/*!***********************************************************************!*\
  !*** ./src/app/components/album/section-uno/section-uno.component.ts ***!
  \***********************************************************************/
/*! exports provided: SectionUnoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionUnoComponent", function() { return SectionUnoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_section_uno_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./section-uno.component.html */ "T9ko");
/* harmony import */ var _section_uno_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./section-uno.component.scss */ "oUal");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_music_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/music.service */ "Ie7a");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");






let SectionUnoComponent = class SectionUnoComponent {
    constructor(musicservice, router) {
        this.musicservice = musicservice;
        this.router = router;
        this.slideOption = {
            slidesPerView: 'auto',
            grabCursor: true,
        };
    }
    openDetail(url, itemId) {
        this.router.navigateByUrl('/' + url + '/' + itemId);
    }
    getAlbum() {
        this.Albums = this.musicservice.getAlbums();
    }
    ngOnInit() {
        this.getAlbum();
    }
};
SectionUnoComponent.ctorParameters = () => [
    { type: _services_music_service__WEBPACK_IMPORTED_MODULE_4__["MusicService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
SectionUnoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-section-uno',
        template: _raw_loader_section_uno_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_section_uno_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SectionUnoComponent);



/***/ }),

/***/ "uauA":
/*!*********************************************************************!*\
  !*** ./src/app/components/headers/edit-band/edit-band.component.ts ***!
  \*********************************************************************/
/*! exports provided: EditBandComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditBandComponent", function() { return EditBandComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_edit_band_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./edit-band.component.html */ "YRfL");
/* harmony import */ var _edit_band_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit-band.component.scss */ "rjY6");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _music_music_search_music_search_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../music/music-search/music-search.page */ "ff9t");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");







let EditBandComponent = class EditBandComponent {
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
EditBandComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] }
];
EditBandComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-edit-band',
        template: _raw_loader_edit_band_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_edit_band_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], EditBandComponent);



/***/ }),

/***/ "uyJF":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/inicio/section-two/section-two.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-item lines=\"none\" class=\"space\">\r\n  <label>\r\n   <h1 class=\"letterinicio thebestalbums\">The Best Albums</h1>\r\n  <!-- ///Add elements to  database -->\r\n   <!--  <ion-button color=\"\" fill=\"blank\" expand=\"full\" (click)=\"agg()\">agg</ion-button>\r\n    <br><br> -->\r\n  </label>\r\n  </ion-item>\r\n  \r\n  \r\n    <ion-slides class=\"swiper-container \" pager= false [options]=\"slideOption\" #slidesOne style=\"margin-top:-40px !important;\" >\r\n      <ion-slide *ngFor=\"let popular of Popular | async \" (click)=\"openDetail('music-album-detail',popular.id)\">\r\n        <ion-card class=\"music-main-h-card music-card0 slide-left fade-in-left\"  >\r\n        \r\n              <div class=\"music-card0-bg ion-text-uppercase\" [ngStyle]=\"{'background-image': 'url(' + popular.image+ ')'}\" >\r\n                  <h2 class=\"card2-title\">   <br><br><br>{{popular.name}}</h2>                           \r\n              </div>\r\n        </ion-card>\r\n      </ion-slide>\r\n    </ion-slides>\r\n  \r\n    \r\n    <br><br><br><br><br><br>");

/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/auth.guard */ "Cp0R");
/* harmony import */ var _shared_no_login_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/no-login.guard */ "dWTU");





const routes = [
    {
        path: '',
        redirectTo: 'music-login',
        pathMatch: 'full'
    },
    {
        path: 'folder/:id',
        loadChildren: () => __webpack_require__.e(/*! import() | folder-folder-module */ "folder-folder-module").then(__webpack_require__.bind(null, /*! ./folder/folder.module */ "yIOV")).then(m => m.FolderPageModule),
        canActivate: [_shared_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
    },
    {
        path: 'playermusic/:playlistsId',
        loadChildren: () => __webpack_require__.e(/*! import() | music-playermusic-playermusic-module */ "music-playermusic-playermusic-module").then(__webpack_require__.bind(null, /*! ./music/playermusic/playermusic.module */ "wcu2")).then(m => m.PlayermusicPageModule),
        canActivate: [_shared_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
    },
    {
        path: 'music-list/:bandsId',
        loadChildren: () => __webpack_require__.e(/*! import() | music-music-list-music-list-module */ "music-music-list-music-list-module").then(__webpack_require__.bind(null, /*! ./music/music-list/music-list.module */ "0DOL")).then(m => m.MusicListPageModule),
        canActivate: [_shared_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
    },
    {
        path: 'music-detail/:detailId',
        loadChildren: () => Promise.all(/*! import() | music-music-detail-music-detail-module */[__webpack_require__.e("common"), __webpack_require__.e("music-music-detail-music-detail-module")]).then(__webpack_require__.bind(null, /*! ./music/music-detail/music-detail.module */ "wbAx")).then(m => m.MusicDetailPageModule),
        canActivate: [_shared_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
    },
    {
        path: 'music-album-detail/:albumId',
        loadChildren: () => __webpack_require__.e(/*! import() | music-music-album-detail-music-album-detail-module */ "music-music-album-detail-music-album-detail-module").then(__webpack_require__.bind(null, /*! ./music/music-album-detail/music-album-detail.module */ "w/Zp")).then(m => m.MusicAlbumDetailPageModule),
        canActivate: [_shared_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
    },
    {
        path: 'music-detail-edit/:editId',
        loadChildren: () => Promise.all(/*! import() | music-music-detail-edit-music-detail-edit-module */[__webpack_require__.e("common"), __webpack_require__.e("music-music-detail-edit-music-detail-edit-module")]).then(__webpack_require__.bind(null, /*! ./music/music-detail-edit/music-detail-edit.module */ "dfXD")).then(m => m.MusicDetailEditPageModule),
        canActivate: [_shared_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
    },
    {
        path: 'music-search',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./music/music-search/music-search.module */ "QUMP")).then(m => m.MusicSearchPageModule),
        canActivate: [_shared_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
    },
    {
        path: 'music-add-band',
        loadChildren: () => Promise.all(/*! import() | music-music-add-band-music-add-band-module */[__webpack_require__.e("common"), __webpack_require__.e("music-music-add-band-music-add-band-module")]).then(__webpack_require__.bind(null, /*! ./music/music-add-band/music-add-band.module */ "BNW0")).then(m => m.MusicAddBandPageModule),
        canActivate: [_shared_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
    },
    {
        path: 'music-login',
        loadChildren: () => __webpack_require__.e(/*! import() | music-music-login-music-login-module */ "music-music-login-music-login-module").then(__webpack_require__.bind(null, /*! ./music/music-login/music-login.module */ "C49j")).then(m => m.MusicLoginPageModule),
        canActivate: [_shared_no_login_guard__WEBPACK_IMPORTED_MODULE_4__["NoLoginGuard"]] /* si el usuario esta logado, dirigirlo hasta donde vaya a pedir "folder/inicio.html" */
    },
    {
        path: 'music-register',
        loadChildren: () => __webpack_require__.e(/*! import() | music-music-register-music-register-module */ "music-music-register-music-register-module").then(__webpack_require__.bind(null, /*! ./music/music-register/music-register.module */ "uj9Q")).then(m => m.MusicRegisterPageModule),
        canActivate: [_shared_no_login_guard__WEBPACK_IMPORTED_MODULE_4__["NoLoginGuard"]] /* si el usuario esta logado, dirigirlo hasta donde vaya a pedir "folder/inicio.html" */
    },
    {
        path: 'music-verifyemail',
        loadChildren: () => __webpack_require__.e(/*! import() | music-music-verifyemail-music-verifyemail-module */ "music-music-verifyemail-music-verifyemail-module").then(__webpack_require__.bind(null, /*! ./music/music-verifyemail/music-verifyemail.module */ "O+HZ")).then(m => m.MusicVerifyemailPageModule),
        canActivate: [_shared_no_login_guard__WEBPACK_IMPORTED_MODULE_4__["NoLoginGuard"]] /* si el usuario esta logado, dirigirlo hasta donde vaya a pedir "folder/inicio.html" */
    },
    {
        path: 'music-forgot-password',
        loadChildren: () => __webpack_require__.e(/*! import() | music-music-forgot-password-music-forgot-password-module */ "music-music-forgot-password-music-forgot-password-module").then(__webpack_require__.bind(null, /*! ./music/music-forgot-password/music-forgot-password.module */ "b4UP")).then(m => m.MusicForgotPasswordPageModule),
        canActivate: [_shared_no_login_guard__WEBPACK_IMPORTED_MODULE_4__["NoLoginGuard"]] /* si el usuario esta logado, dirigirlo hasta donde vaya a pedir "folder/inicio.html" */
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"] })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "ynWL":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-menu ion-content {\n  --background: var(--ion-item-background, var(--ion-background-color, #fff));\n}\n\nion-menu.md ion-content {\n  --padding-start: 8px;\n  --padding-end: 8px;\n  --padding-top: 20px;\n  --padding-bottom: 20px;\n}\n\nion-menu.md ion-list {\n  padding: 20px 0;\n}\n\nion-menu.md ion-note {\n  margin-bottom: 30px;\n}\n\nion-menu.md ion-list-header,\nion-menu.md ion-note {\n  padding-left: 10px;\n}\n\nion-menu.md ion-list#inbox-list {\n  border-bottom: 1px solid var(--ion-color-step-150, #d7d8da);\n}\n\nion-menu.md ion-list#inbox-list ion-list-header {\n  font-size: 22px;\n  font-weight: 600;\n  min-height: 20px;\n}\n\nion-menu.md ion-list#labels-list ion-list-header {\n  font-size: 16px;\n  margin-bottom: 18px;\n  color: var(--ion-color-personalize);\n  min-height: 26px;\n}\n\nion-menu.md ion-item {\n  --padding-start: 10px;\n  --padding-end: 10px;\n  border-radius: 4px;\n}\n\nion-menu.md ion-item.selected {\n  --background: rgba(var(--ion-color-personalize), 0.14);\n}\n\nion-menu.md ion-item.selected ion-icon {\n  color: var(--ion-color-personalize);\n}\n\nion-menu.md ion-item ion-icon {\n  color: #616e7e;\n}\n\nion-menu.md ion-item ion-label {\n  font-weight: 500;\n}\n\nion-menu.ios ion-content {\n  --padding-bottom: 20px;\n}\n\nion-menu.ios ion-list {\n  padding: 20px 0 0 0;\n}\n\nion-menu.ios ion-note {\n  line-height: 24px;\n  margin-bottom: 20px;\n}\n\nion-menu.ios ion-item {\n  --padding-start: 16px;\n  --padding-end: 16px;\n  --min-height: 50px;\n}\n\nion-menu.ios ion-item.selected ion-icon {\n  color: var(--ion-color-personalize);\n}\n\nion-menu.ios ion-item ion-icon {\n  font-size: 24px;\n  color: var(--ion-color-personalize);\n}\n\nion-menu.ios ion-list#labels-list ion-list-header {\n  margin-bottom: 8px;\n}\n\nion-menu.ios ion-list-header,\nion-menu.ios ion-note {\n  padding-left: 16px;\n  padding-right: 16px;\n}\n\nion-menu.ios ion-note {\n  margin-bottom: 8px;\n}\n\nion-note {\n  display: inline-block;\n  font-size: 16px;\n  color: var(--ion-color-personalize);\n}\n\nion-item.selected {\n  --color: var(--ion-color-personalize);\n}\n\n.imagesidemenu {\n  width: 100%;\n  height: 225.9px;\n  background-color: var(--ion-color-personalize);\n  padding: 0px !important;\n  margin: 0px !important;\n}\n\n.logo {\n  margin-top: 100px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMkVBQUE7QUFDRjs7QUFFQTtFQUNFLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtBQUNGOztBQUVBOztFQUVFLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSwyREFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBRUEsZ0JBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7RUFFQSxtQkFBQTtFQUVBLG1DQUFBO0VBRUEsZ0JBQUE7QUFIRjs7QUFNQTtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUhGOztBQU1BO0VBQ0Usc0RBQUE7QUFIRjs7QUFNQTtFQUNFLG1DQUFBO0FBSEY7O0FBTUE7RUFDRSxjQUFBO0FBSEY7O0FBTUE7RUFDRSxnQkFBQTtBQUhGOztBQU1BO0VBQ0Usc0JBQUE7QUFIRjs7QUFNQTtFQUNFLG1CQUFBO0FBSEY7O0FBTUE7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0FBSEY7O0FBTUE7RUFDRSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFIRjs7QUFNQTtFQUNFLG1DQUFBO0FBSEY7O0FBTUE7RUFDRSxlQUFBO0VBQ0EsbUNBQUE7QUFIRjs7QUFNQTtFQUNFLGtCQUFBO0FBSEY7O0FBTUE7O0VBRUUsa0JBQUE7RUFDQSxtQkFBQTtBQUhGOztBQU1BO0VBQ0Usa0JBQUE7QUFIRjs7QUFNQTtFQUNFLHFCQUFBO0VBQ0EsZUFBQTtFQUVBLG1DQUFBO0FBSkY7O0FBT0E7RUFDRSxxQ0FBQTtBQUpGOztBQU9BO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSw4Q0FBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7QUFKRjs7QUFPQTtFQUNFLDRCQUFBO0FBSkYiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLW1lbnUgaW9uLWNvbnRlbnQge1xyXG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWl0ZW0tYmFja2dyb3VuZCwgdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IsICNmZmYpKTtcclxufVxyXG5cclxuaW9uLW1lbnUubWQgaW9uLWNvbnRlbnQge1xyXG4gIC0tcGFkZGluZy1zdGFydDogOHB4O1xyXG4gIC0tcGFkZGluZy1lbmQ6IDhweDtcclxuICAtLXBhZGRpbmctdG9wOiAyMHB4O1xyXG4gIC0tcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbmlvbi1tZW51Lm1kIGlvbi1saXN0IHtcclxuICBwYWRkaW5nOiAyMHB4IDA7XHJcbn1cclxuXHJcbmlvbi1tZW51Lm1kIGlvbi1ub3RlIHtcclxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG59XHJcblxyXG5pb24tbWVudS5tZCBpb24tbGlzdC1oZWFkZXIsXHJcbmlvbi1tZW51Lm1kIGlvbi1ub3RlIHtcclxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbn1cclxuXHJcbmlvbi1tZW51Lm1kIGlvbi1saXN0I2luYm94LWxpc3Qge1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3Itc3RlcC0xNTAsICNkN2Q4ZGEpO1xyXG59XHJcblxyXG5pb24tbWVudS5tZCBpb24tbGlzdCNpbmJveC1saXN0IGlvbi1saXN0LWhlYWRlciB7XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcblxyXG4gIG1pbi1oZWlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbmlvbi1tZW51Lm1kIGlvbi1saXN0I2xhYmVscy1saXN0IGlvbi1saXN0LWhlYWRlciB7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG5cclxuICBtYXJnaW4tYm90dG9tOiAxOHB4O1xyXG5cclxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXBlcnNvbmFsaXplKTs7XHJcblxyXG4gIG1pbi1oZWlnaHQ6IDI2cHg7XHJcbn1cclxuXHJcbmlvbi1tZW51Lm1kIGlvbi1pdGVtIHtcclxuICAtLXBhZGRpbmctc3RhcnQ6IDEwcHg7XHJcbiAgLS1wYWRkaW5nLWVuZDogMTBweDtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuXHJcbmlvbi1tZW51Lm1kIGlvbi1pdGVtLnNlbGVjdGVkIHtcclxuICAtLWJhY2tncm91bmQ6IHJnYmEodmFyKC0taW9uLWNvbG9yLXBlcnNvbmFsaXplKSwgMC4xNCk7XHJcbn1cclxuXHJcbmlvbi1tZW51Lm1kIGlvbi1pdGVtLnNlbGVjdGVkIGlvbi1pY29uIHtcclxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXBlcnNvbmFsaXplKTtcclxufVxyXG5cclxuaW9uLW1lbnUubWQgaW9uLWl0ZW0gaW9uLWljb24ge1xyXG4gIGNvbG9yOiAjNjE2ZTdlO1xyXG59XHJcblxyXG5pb24tbWVudS5tZCBpb24taXRlbSBpb24tbGFiZWwge1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbmlvbi1tZW51LmlvcyBpb24tY29udGVudCB7XHJcbiAgLS1wYWRkaW5nLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuaW9uLW1lbnUuaW9zIGlvbi1saXN0IHtcclxuICBwYWRkaW5nOiAyMHB4IDAgMCAwO1xyXG59XHJcblxyXG5pb24tbWVudS5pb3MgaW9uLW5vdGUge1xyXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbmlvbi1tZW51LmlvcyBpb24taXRlbSB7XHJcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxNnB4O1xyXG4gIC0tcGFkZGluZy1lbmQ6IDE2cHg7XHJcbiAgLS1taW4taGVpZ2h0OiA1MHB4O1xyXG59XHJcblxyXG5pb24tbWVudS5pb3MgaW9uLWl0ZW0uc2VsZWN0ZWQgaW9uLWljb24ge1xyXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcGVyc29uYWxpemUpO1xyXG59XHJcblxyXG5pb24tbWVudS5pb3MgaW9uLWl0ZW0gaW9uLWljb24ge1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXBlcnNvbmFsaXplKTs7XHJcbn1cclxuXHJcbmlvbi1tZW51LmlvcyBpb24tbGlzdCNsYWJlbHMtbGlzdCBpb24tbGlzdC1oZWFkZXIge1xyXG4gIG1hcmdpbi1ib3R0b206IDhweDtcclxufVxyXG5cclxuaW9uLW1lbnUuaW9zIGlvbi1saXN0LWhlYWRlcixcclxuaW9uLW1lbnUuaW9zIGlvbi1ub3RlIHtcclxuICBwYWRkaW5nLWxlZnQ6IDE2cHg7XHJcbiAgcGFkZGluZy1yaWdodDogMTZweDtcclxufVxyXG5cclxuaW9uLW1lbnUuaW9zIGlvbi1ub3RlIHtcclxuICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbn1cclxuXHJcbmlvbi1ub3RlIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG5cclxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXBlcnNvbmFsaXplKTtcclxufVxyXG5cclxuaW9uLWl0ZW0uc2VsZWN0ZWQge1xyXG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1wZXJzb25hbGl6ZSk7XHJcbn1cclxuXHJcbi5pbWFnZXNpZGVtZW51e1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMjI1LjlweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcGVyc29uYWxpemUpO1xyXG4gIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2dve1xyXG4gIG1hcmdpbi10b3A6IDEwMHB4ICFpbXBvcnRhbnQ7XHJcbn0iXX0= */");

/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.log(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map