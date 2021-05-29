(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["music-music-add-band-music-add-band-module"],{

/***/ "2vlm":
/*!***************************************************************!*\
  !*** ./src/app/music/music-add-band/music-add-band.page.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".addPhoto {\n  z-index: 2;\n  height: 15em;\n  margin-top: -150px;\n}\n\n.fileInput {\n  position: absolute;\n  width: 0;\n  height: 0;\n  opacity: 0;\n}\n\n.upfile {\n  position: absolute;\n}\n\n.upletter {\n  margin-top: 110px;\n  position: absolute;\n}\n\n.upsource {\n  margin-top: 150px;\n  position: absolute;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxtdXNpYy1hZGQtYmFuZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQUVKOztBQUNBO0VBQ0ksa0JBQUE7QUFFSjs7QUFDQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7QUFFSjs7QUFDQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7QUFFSiIsImZpbGUiOiJtdXNpYy1hZGQtYmFuZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWRkUGhvdG97XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gICAgaGVpZ2h0OiAxNWVtO1xyXG4gICAgbWFyZ2luLXRvcDogLTE1MHB4O1xyXG59XHJcbi5maWxlSW5wdXR7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7IFxyXG4gICAgd2lkdGg6IDA7IFxyXG4gICAgaGVpZ2h0OiAwOyBcclxuICAgIG9wYWNpdHk6IDBcclxufVxyXG5cclxuLnVwZmlsZXtcclxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG59XHJcblxyXG4udXBsZXR0ZXJ7XHJcbiAgICBtYXJnaW4tdG9wOiAxMTBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG5cclxuLnVwc291cmNle1xyXG4gICAgbWFyZ2luLXRvcDogMTUwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn0iXX0= */");

/***/ }),

/***/ "4KCC":
/*!*************************************************************!*\
  !*** ./src/app/music/music-add-band/music-add-band.page.ts ***!
  \*************************************************************/
/*! exports provided: MusicAddBandPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MusicAddBandPage", function() { return MusicAddBandPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_music_add_band_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./music-add-band.page.html */ "XPtF");
/* harmony import */ var _music_add_band_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./music-add-band.page.scss */ "2vlm");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_music_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/music.service */ "Ie7a");
/* harmony import */ var _services_firestorage_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/firestorage.service */ "iPno");









let MusicAddBandPage = class MusicAddBandPage {
    constructor(musicservice, formBuilder, loadingController, actionSheetCtrl, router, firestorage) {
        this.musicservice = musicservice;
        this.formBuilder = formBuilder;
        this.loadingController = loadingController;
        this.actionSheetCtrl = actionSheetCtrl;
        this.router = router;
        this.firestorage = firestorage;
        this.newImage = '';
        this.newMusic = '';
        this.form = [
            { val: 'Sí', isChecked: true },
            { val: 'No', isChecked: false },
        ];
        this.bandForm = this.formBuilder.group({
            photo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            music: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            rating: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            description: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(6)]],
            question: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            short_description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
    }
    loadImageActionSheet1(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const actionSheet1 = yield this.actionSheetCtrl.create({
                header: 'Select Image',
                buttons: [{
                        text: ' Select',
                        icon: 'images-outline',
                        handler: () => {
                            this.userInputElement.click();
                        }
                    }, {
                        text: 'Cancel',
                        icon: 'close',
                        role: 'cancel'
                    }]
            });
            yield actionSheet1.present();
        });
    }
    ;
    loadImageActionSheet2(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const actionSheet2 = yield this.actionSheetCtrl.create({
                header: 'Select Music',
                buttons: [{
                        text: ' Select',
                        icon: 'musical-notes-outline',
                        handler: () => {
                            this.musicInputElement.click();
                        }
                    }, {
                        text: 'Cancel',
                        icon: 'close',
                        role: 'cancel'
                    }]
            });
            yield actionSheet2.present();
        });
    }
    ;
    loadImageFromDevice1(event) {
        console.log(event.target.files);
        if (event.target.files && event.target.files[0]) {
            this.ItemSelect = event.target.files[0];
            const reader = new FileReader();
            reader.onload = ((image) => {
                this.newImage = image.target.result;
            });
            reader.readAsDataURL(event.target.files[0]);
        }
    }
    loadImageFromDevice2(event) {
        console.log(event.target.files);
        if (event.target.files && event.target.files[0]) {
            this.MusicName = event.target.files[0].name;
            this.MusicSelect = event.target.files[0];
            const reader = new FileReader();
            reader.onload = ((music) => {
                this.newMusic = music.target.result;
            });
            reader.readAsDataURL(event.target.files[0]);
        }
    }
    getvalueChecked(event) {
        this.recommended = event.target.value.isChecked;
        console.log(event.target.value);
        console.log(event);
    }
    addBand() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log("_____call addBand");
            if (!this.bandForm.valid) {
                console.log(this.bandForm.value);
                console.log("____bandForm invalid ");
                //this.presentAlert("invalid form");
            }
            else {
                //****** loading *******//
                const loading = yield this.loadingController.create({
                    duration: 2000,
                    message: '',
                    translucent: true,
                    cssClass: 'custom-loading'
                });
                //return await loading.present();
                yield loading.present();
                const path1 = 'imagesBands';
                const path2 = 'music';
                const name1 = this.bandForm.value.name;
                const name2 = this.MusicName;
                const res1 = yield this.firestorage.uploadImage(this.ItemSelect, path1, name1);
                const res2 = yield this.firestorage.uploadMusic(this.MusicSelect, path2, name2);
                console.log('respuesta' + res1);
                //****** add review *******//
                yield this.musicservice.addedBand(this.bandForm.value.photo = res1, this.bandForm.value.music = res2, name1, this.bandForm.value.rating, this.bandForm.value.description, this.bandForm.value.question, this.bandForm.value.short_description)
                    .then(() => {
                    // call loading 
                    // close loading
                    //Correct
                    this.router.navigateByUrl('/folder/Inicio');
                }, (error) => {
                    var errorMessage = error.message;
                    console.log("ERROR:" + errorMessage);
                    //loadingPopup.dismiss();
                    //this.presentAlert(errorMessage);      
                });
            }
        });
    }
    close() {
        this.router.navigateByUrl('/folder/Inicio');
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        this.userInputElement = this.userInputViewChild.nativeElement;
        this.musicInputElement = this.musicInputViewChild.nativeElement;
    }
    ;
};
MusicAddBandPage.ctorParameters = () => [
    { type: _services_music_service__WEBPACK_IMPORTED_MODULE_7__["MusicService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ActionSheetController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _services_firestorage_service__WEBPACK_IMPORTED_MODULE_8__["FirestorageService"] }
];
MusicAddBandPage.propDecorators = {
    userInputViewChild: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['userInput',] }],
    musicInputViewChild: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['musicInput',] }]
};
MusicAddBandPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-music-add-band',
        template: _raw_loader_music_add_band_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_music_add_band_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], MusicAddBandPage);



/***/ }),

/***/ "BNW0":
/*!***************************************************************!*\
  !*** ./src/app/music/music-add-band/music-add-band.module.ts ***!
  \***************************************************************/
/*! exports provided: MusicAddBandPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MusicAddBandPageModule", function() { return MusicAddBandPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _music_add_band_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./music-add-band-routing.module */ "D2KZ");
/* harmony import */ var _music_add_band_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./music-add-band.page */ "4KCC");
/* harmony import */ var _components_headers_add_band_add_band_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/headers/add-band/add-band.component */ "iQRo");
/* harmony import */ var _components_global_back_back_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/global/back/back.component */ "avQE");







/* global */


let MusicAddBandPageModule = class MusicAddBandPageModule {
};
MusicAddBandPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _music_add_band_routing_module__WEBPACK_IMPORTED_MODULE_5__["MusicAddBandPageRoutingModule"]
        ],
        declarations: [_music_add_band_page__WEBPACK_IMPORTED_MODULE_6__["MusicAddBandPage"], _components_headers_add_band_add_band_component__WEBPACK_IMPORTED_MODULE_7__["AddBandComponent"], _components_global_back_back_component__WEBPACK_IMPORTED_MODULE_8__["BackComponent"]]
    })
], MusicAddBandPageModule);



/***/ }),

/***/ "D2KZ":
/*!***********************************************************************!*\
  !*** ./src/app/music/music-add-band/music-add-band-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: MusicAddBandPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MusicAddBandPageRoutingModule", function() { return MusicAddBandPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _music_add_band_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./music-add-band.page */ "4KCC");




const routes = [
    {
        path: '',
        component: _music_add_band_page__WEBPACK_IMPORTED_MODULE_3__["MusicAddBandPage"]
    }
];
let MusicAddBandPageRoutingModule = class MusicAddBandPageRoutingModule {
};
MusicAddBandPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MusicAddBandPageRoutingModule);



/***/ }),

/***/ "JGGm":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/headers/add-band/add-band.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header  class=\"ion-no-border fade-in\">\n  <ion-toolbar color=\"translucent\">\n  <ion-buttons slot=\"start\" >\n  <ion-menu-button  class=\"title-intro\" ><ion-icon name=\"musical-note\" ></ion-icon></ion-menu-button>\n  </ion-buttons>\n  <ion-title class=\"ion-text-center title-intro\">Add Band</ion-title>\n \n          <ion-buttons slot=\"end\">\n<!-- Search -->\n          <ion-button class=\"badge-button lupa  fade-in\"  (click)=\"openSearchModal()\"   contentId=\"maintwo\"  menuId=\"four\">\n          <ion-icon name=\"search-outline\" color=\"light\"></ion-icon>\n          </ion-button>\n          </ion-buttons>\n</ion-toolbar>\n</ion-header>");

/***/ }),

/***/ "PNhK":
/*!*********************************************************************!*\
  !*** ./src/app/components/headers/add-band/add-band.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtYmFuZC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "XPtF":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/music/music-add-band/music-add-band.page.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content ion-no-padding>\r\n\r\n<!-- background -->\r\n<app-back></app-back>\r\n<!-- header -->\r\n<app-add-band></app-add-band>\r\n<br><br><br><br><br><br><br><br><br>\r\n<div class=\"borde\"></div>\r\n\r\n\r\n<form [formGroup]=\"bandForm\" novalidate>\r\n<ion-card class=\"addPhoto center\" *ngIf=\"!ItemSelect; else image\">\r\n<input #userInput  type=\"file\" formControlName=\"photo\"\r\n(change)=\"loadImageFromDevice1($event)\" class=\"fileInput\" accept=\"image/*\"> \r\n\r\n<ion-icon name=\"cloud-upload-outline\" [ngStyle]=\"{'transform':  'scale(5.5)'}\" \r\nclass=\" upfile\" (click)=\"loadImageActionSheet1(event)\">\r\n</ion-icon>\r\n       <h1 class=\"main-b-header7 upletter\">Upload photo</h1>\r\n       <br>\r\n       <h1 class=\"main-b-header9 upsource\" color=\"light\"> {{ItemSelect}}</h1>\r\n</ion-card>\r\n\r\n<ng-template #image>\r\n<ion-card class=\"addPhoto center\">\r\n<img [src]=\"newImage\" alt=\"\">\r\n</ion-card>\r\n</ng-template>\r\n\r\n         <input #musicInput  type=\"file\" formControlName=\"music\"\r\n         (change)=\"loadImageFromDevice2($event)\" class=\"fileInput\" accept=\".mpeg,audio/*\">\r\n\r\n         <ion-button mode=\"ios\" color=\"light\" style=\"margin-left: 3%;\" (click)=\"loadImageActionSheet2(event)\" >\r\n          \r\n         <div *ngIf=\"!MusicSelect ;else song\">\r\n         <ion-icon name=\"musical-note-outline\" [ngStyle]=\"{'transform':  'scale(1.5)'}\" slot=\"start\" >\r\n         </ion-icon>          \r\n         Select Music\r\n         </div>\r\n         <ng-template #song>\r\n         Selected    &nbsp;  &nbsp;   \r\n         <ion-icon name=\"checkmark-circle\" [ngStyle]=\"{'transform':  'scale(1.5)'}\" color=\"success\">\r\n         </ion-icon>\r\n         </ng-template>\r\n         </ion-button>\r\n         <br>\r\n         <br>\r\n      <ion-list lines=\"\">   \r\n         <ion-item>\r\n         <ion-label position=\"stacked\">Band</ion-label>\r\n         <ion-input  type=\"text\"  formControlName=\"name\" min=\"2\" max=\"10\" required></ion-input>\r\n         </ion-item>\r\n         <ion-item>\r\n         <ion-label position=\"stacked\">Rating (1-5)</ion-label>\r\n         <ion-input  type=\"number\" min=\"1\" max=\"5\" formControlName=\"rating\" required ></ion-input>\r\n         </ion-item>  \r\n         <ion-item>\r\n         <ion-label position=\"stacked\">Short Description</ion-label>\r\n         <ion-input  type=\"text\" min=\"5\" max=\"30\"  formControlName=\"short_description\" required></ion-input>\r\n         </ion-item>\r\n         <ion-list>\r\n         <ion-radio-group  value=\"\" (ionChange)=\"getvalueChecked($event)\" formControlName=\"question\">\r\n         <ion-list-header>\r\n         <ion-label>Recommended?</ion-label>\r\n         </ion-list-header>\r\n         <ion-item lines=\"none\">\r\n         <ion-label>Yes</ion-label>\r\n         <ion-radio slot=\"start\" value=\"true\" slot=\"start\" mode=\"md\" color=\"danger\"></ion-radio>\r\n         </ion-item>\r\n         <ion-item lines=\"none\">\r\n         <ion-label>No</ion-label>\r\n         <ion-radio slot=\"start\" value=\"false\" slot=\"start\" mode=\"md\" color=\"danger\"></ion-radio>\r\n         </ion-item>\r\n         </ion-radio-group>\r\n         </ion-list>\r\n         <ion-item>\r\n         <ion-label position=\"stacked\">Description</ion-label>\r\n         <ion-textarea formControlName=\"description\" min=\"10\" max=\"250\" required rows = \"6\"  placeholder=\"Write a description...\" ></ion-textarea>\r\n         </ion-item>\r\n         </ion-list>\r\n  </form>\r\n\r\n\r\n    <!-- Error meassage -->\r\n    <p color=\"danger\" *ngIf=\"!bandForm.controls.name.valid  && bandForm.controls.name.touched \">\r\n    <ion-text color=\"warning\"><ion-icon name=\"information-circle-outline\">\r\n    </ion-icon> \r\n    ¡El campo de la etiqueta de Banda debe tener al menos 2 caracteres!\r\n    </ion-text>  \r\n    </p>\r\n    <p color=\"danger\" *ngIf=\"!bandForm.controls.rating.valid  && bandForm.controls.rating.touched\" >\r\n    <ion-text color=\"warning\"><ion-icon name=\"information-circle-outline\">\r\n    </ion-icon>\r\n    El campo de rating  debe tener al menos 1 dígito.\r\n    </ion-text>  \r\n    </p>\r\n    <p color=\"danger\" *ngIf=\"!bandForm.controls.short_description.valid  && bandForm.controls.short_description.touched \">\r\n    <ion-text color=\"warning\"><ion-icon name=\"information-circle-outline\">\r\n    </ion-icon> \r\n    El campo de Short Description debe tener al menos 5 caracteres.\r\n    </ion-text>  \r\n    </p>\r\n    <p color=\"danger\" *ngIf=\"!bandForm.controls.question.valid  && bandForm.controls.question.touched\">\r\n    <ion-text color=\"warning\"><ion-icon name=\"information-circle-outline\">\r\n    </ion-icon>\r\n    Debes seleccionar una opción en la sección de recomendados. \r\n    </ion-text>  \r\n    </p>\r\n    <p color=\"danger\" *ngIf=\"!bandForm.controls.description.valid  && bandForm.controls.description.touched\">\r\n    <ion-text color=\"warning\"><ion-icon name=\"information-circle-outline\">\r\n    </ion-icon>\r\n    El campo de description debe tener al menos 10 caracteres.\r\n    </ion-text>  \r\n    </p>\r\n    <br><br><br>\r\n\r\n    <ion-button color=\"danger\" expand=\"full\" [disabled]=\"!bandForm.valid && !MusicSelect\"  (click)=\"addBand()\" >Add</ion-button>\r\n    <ion-button color=\"\" fill=\"blank\" expand=\"full\" (click)=\"close()\">Cancelar</ion-button>\r\n</ion-content>\r\n\r\n");

/***/ }),

/***/ "iPno":
/*!*************************************************!*\
  !*** ./src/app/services/firestorage.service.ts ***!
  \*************************************************/
/*! exports provided: FirestorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirestorageService", function() { return FirestorageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/storage */ "Vaw3");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");




let FirestorageService = class FirestorageService {
    constructor(storage) {
        this.storage = storage;
    }
    uploadImage(file, path, nombre) {
        return new Promise(resolve => {
            const filePath = path + '/' + nombre;
            const ref = this.storage.ref(filePath);
            const task = ref.put(file);
            task.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(() => {
                ref.getDownloadURL().subscribe(res => {
                    const downloadURL = res;
                    resolve(downloadURL);
                    return;
                });
            }))
                .subscribe();
        });
    }
    uploadMusic(file, path, nombre) {
        return new Promise(resolve => {
            const filePath = path + '/' + nombre;
            const ref = this.storage.ref(filePath);
            const task = ref.put(file);
            task.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(() => {
                ref.getDownloadURL().subscribe(res => {
                    const downloadURL = res;
                    resolve(downloadURL);
                    return;
                });
            }))
                .subscribe();
        });
    }
};
FirestorageService.ctorParameters = () => [
    { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__["AngularFireStorage"] }
];
FirestorageService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], FirestorageService);



/***/ }),

/***/ "iQRo":
/*!*******************************************************************!*\
  !*** ./src/app/components/headers/add-band/add-band.component.ts ***!
  \*******************************************************************/
/*! exports provided: AddBandComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddBandComponent", function() { return AddBandComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_add_band_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./add-band.component.html */ "JGGm");
/* harmony import */ var _add_band_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-band.component.scss */ "PNhK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _music_music_search_music_search_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../music/music-search/music-search.page */ "ff9t");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");







let AddBandComponent = class AddBandComponent {
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
AddBandComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] }
];
AddBandComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-add-band',
        template: _raw_loader_add_band_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_add_band_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AddBandComponent);



/***/ })

}]);
//# sourceMappingURL=music-music-add-band-music-add-band-module.js.map