(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["music-music-detail-edit-music-detail-edit-module"],{

/***/ "6Gvc":
/*!*******************************************************************!*\
  !*** ./src/app/music/music-detail-edit/music-detail-edit.page.ts ***!
  \*******************************************************************/
/*! exports provided: MusicDetailEditPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MusicDetailEditPage", function() { return MusicDetailEditPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_music_detail_edit_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./music-detail-edit.page.html */ "i7lc");
/* harmony import */ var _music_detail_edit_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./music-detail-edit.page.scss */ "N4B3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_music_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/music.service */ "Ie7a");
/* harmony import */ var _services_ionic_component_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/ionic-component.service */ "BES4");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_services_firestorage_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/firestorage.service */ "iPno");










let MusicDetailEditPage = class MusicDetailEditPage {
    constructor(musicservice, activatedRoute, router, formBuilder, ionicComponentService, actionSheetCtrl, firestorage) {
        this.musicservice = musicservice;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.formBuilder = formBuilder;
        this.ionicComponentService = ionicComponentService;
        this.actionSheetCtrl = actionSheetCtrl;
        this.firestorage = firestorage;
        this.newImage = '';
        this.newMusic = '';
        this.itemArray = [];
        this.itemId = this.activatedRoute.snapshot.paramMap.get('editId');
        this.BandForm = this.formBuilder.group({
            image: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            music: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            rating: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            description: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(6)]],
            question: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            short_description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.musicservice.getItemDetail(this.itemId).subscribe(res => {
                console.log("----->actionArray=" + res);
                this.BandForm.get('image').setValue(res.image);
                this.BandForm.get('music').setValue(res.music);
                this.BandForm.get('name').setValue(res.name);
                this.BandForm.get('rating').setValue(res.rating);
                this.BandForm.get('description').setValue(res.description);
                this.BandForm.get('question').setValue(res.recommended);
                this.BandForm.get('short_description').setValue(res.short_description);
            });
            this.item = yield this.musicservice.getItemDetail(this.itemId);
            this.itemSubscribe = this.item.subscribe(res => {
                this.itemArray = res;
            });
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
            this.photook = reader.readAsDataURL(event.target.files[0]);
            /* this.BandForm.get('image').setValue(this.photook);  */
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
    }
    close() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.redirect = this.router.navigateByUrl('/folder/Inicio');
            yield this.redirect;
        });
    }
    editBand() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.ionicComponentService.presentLoading();
            const path1 = 'imagesBands';
            const path2 = 'music';
            const name1 = this.BandForm.value.name;
            const name2 = this.MusicName;
            const res1 = yield this.firestorage.uploadImage(this.ItemSelect, path1, name1);
            const res2 = yield this.firestorage.uploadMusic(this.MusicSelect, path2, name2);
            yield this.musicservice.edit(this.itemId, this.BandForm.value.photo = res1, this.BandForm.value.music = res2, name1, this.BandForm.value.rating, this.BandForm.value.description, this.BandForm.value.question, this.BandForm.value.short_description)
                .then(() => {
                this.ionicComponentService.dismissLoading();
                this.close();
            }, (error) => {
                var errorMessage = error.message;
                console.log("ERROR:" + errorMessage);
                this.ionicComponentService.dismissLoading();
                this.ionicComponentService.presentToast(errorMessage, 4000);
                this.close();
            });
        });
    }
    ngAfterViewInit() {
        this.userInputElement = this.userInputViewChild.nativeElement;
        this.musicInputElement = this.musicInputViewChild.nativeElement;
    }
    ;
};
MusicDetailEditPage.ctorParameters = () => [
    { type: _services_music_service__WEBPACK_IMPORTED_MODULE_6__["MusicService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _services_ionic_component_service__WEBPACK_IMPORTED_MODULE_7__["IonicComponentService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ActionSheetController"] },
    { type: src_app_services_firestorage_service__WEBPACK_IMPORTED_MODULE_9__["FirestorageService"] }
];
MusicDetailEditPage.propDecorators = {
    userInputViewChild: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['userInput',] }],
    musicInputViewChild: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['musicInput',] }]
};
MusicDetailEditPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-music-detail-edit',
        template: _raw_loader_music_detail_edit_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_music_detail_edit_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], MusicDetailEditPage);



/***/ }),

/***/ "N4B3":
/*!*********************************************************************!*\
  !*** ./src/app/music/music-detail-edit/music-detail-edit.page.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtdXNpYy1kZXRhaWwtZWRpdC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "dfXD":
/*!*********************************************************************!*\
  !*** ./src/app/music/music-detail-edit/music-detail-edit.module.ts ***!
  \*********************************************************************/
/*! exports provided: MusicDetailEditPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MusicDetailEditPageModule", function() { return MusicDetailEditPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _music_detail_edit_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./music-detail-edit-routing.module */ "or0F");
/* harmony import */ var _music_detail_edit_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./music-detail-edit.page */ "6Gvc");
/* harmony import */ var _components_global_back_back_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/global/back/back.component */ "avQE");
/* harmony import */ var _components_headers_edit_band_edit_band_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/headers/edit-band/edit-band.component */ "uauA");









let MusicDetailEditPageModule = class MusicDetailEditPageModule {
};
MusicDetailEditPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _music_detail_edit_routing_module__WEBPACK_IMPORTED_MODULE_5__["MusicDetailEditPageRoutingModule"]
        ],
        declarations: [_music_detail_edit_page__WEBPACK_IMPORTED_MODULE_6__["MusicDetailEditPage"], _components_global_back_back_component__WEBPACK_IMPORTED_MODULE_7__["BackComponent"], _components_headers_edit_band_edit_band_component__WEBPACK_IMPORTED_MODULE_8__["EditBandComponent"]]
    })
], MusicDetailEditPageModule);



/***/ }),

/***/ "i7lc":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/music/music-detail-edit/music-detail-edit.page.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n\n  <!-- background -->\n  <app-back></app-back>\n  <!-- header -->\n  <app-edit-band></app-edit-band>\n  <br><br><br><br><br><br><br><br><br>\n  <div class=\"borde\"></div>\n\n    <form [formGroup]=\"BandForm\" novalidate>\n    <ion-card class=\"addPhoto center\" *ngIf=\"!ItemSelect; else image\">\n    <input #userInput  type=\"file\"  (change)=\"loadImageFromDevice1($event)\" class=\"fileInput\" accept=\"image/*\"> \n    \n    <ion-icon name=\"cloud-upload-outline\" [ngStyle]=\"{'transform':  'scale(5.5)'}\" \n    class=\" upfile\" (click)=\"loadImageActionSheet1($event)\">\n    </ion-icon>\n           <h1 class=\"main-b-header7 upletter\">Upload photo</h1>\n           <br>\n           <h1 class=\"main-b-header9 upsource\" color=\"light\"> {{ItemSelect}}</h1>\n    </ion-card>\n    \n    <ng-template #image>\n    <ion-card class=\"addPhoto center\">\n    <img [src]=\"newImage\" alt=\"\">\n    </ion-card>\n    </ng-template>\n    \n             <input #musicInput  type=\"file\" \n             (change)=\"loadImageFromDevice2($event)\" class=\"fileInput\" accept=\".mpeg,audio/*\">\n    \n             <ion-button mode=\"ios\" color=\"light\" style=\"margin-left: 3%;\" (click)=\"loadImageActionSheet2($event)\" >\n              \n             <div *ngIf=\"!MusicSelect ;else song\">\n             <ion-icon name=\"musical-note-outline\" [ngStyle]=\"{'transform':  'scale(1.5)'}\" slot=\"start\" >\n             </ion-icon>          \n             Select Music\n             </div>\n             <ng-template #song>\n             Selected    &nbsp;  &nbsp;   \n             <ion-icon name=\"checkmark-circle\" [ngStyle]=\"{'transform':  'scale(1.5)'}\" color=\"success\">\n             </ion-icon>\n             </ng-template>\n             </ion-button>\n             <br>\n             <br>\n          <ion-list lines=\"\">   \n             <ion-item>\n             <ion-label position=\"stacked\">Band</ion-label>\n             <ion-input  type=\"text\"  formControlName=\"name\" min=\"2\" max=\"10\" required></ion-input>\n             </ion-item>\n             <ion-item>\n             <ion-label position=\"stacked\">Rating (1-5)</ion-label>\n             <ion-input  type=\"number\" min=\"1\" max=\"5\" formControlName=\"rating\" required ></ion-input>\n             </ion-item>  \n             <ion-item>\n             <ion-label position=\"stacked\">Short Description</ion-label>\n             <ion-input  type=\"text\" min=\"5\" max=\"30\"  formControlName=\"short_description\" required></ion-input>\n             </ion-item>\n             <ion-list>\n             <ion-radio-group  value=\"\" (ionChange)=\"getvalueChecked($event)\" formControlName=\"question\">\n             <ion-list-header>\n             <ion-label>Recommended?</ion-label>\n             </ion-list-header>\n             <ion-item lines=\"none\">\n             <ion-label>Yes</ion-label>\n             <ion-radio slot=\"start\" [value]=\"true\" slot=\"start\" mode=\"md\" color=\"danger\"></ion-radio>\n             </ion-item>\n             <ion-item lines=\"none\">\n             <ion-label>No</ion-label>\n             <ion-radio slot=\"start\" [value]=\"false\" slot=\"start\" mode=\"md\" color=\"danger\"></ion-radio>\n             </ion-item>\n             </ion-radio-group>\n             </ion-list>\n             <ion-item>\n             <ion-label position=\"stacked\">Description</ion-label>\n             <ion-textarea formControlName=\"description\" min=\"10\" max=\"250\" required rows = \"6\"  placeholder=\"Write a description...\" ></ion-textarea>\n             </ion-item>\n             </ion-list>\n      </form>\n    \n    \n<ion-button color=\"success\" expand=\"full\"  (click)=\"editBand()\" >Editar</ion-button>\n\n\n\n</ion-content>\n");

/***/ }),

/***/ "or0F":
/*!*****************************************************************************!*\
  !*** ./src/app/music/music-detail-edit/music-detail-edit-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: MusicDetailEditPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MusicDetailEditPageRoutingModule", function() { return MusicDetailEditPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _music_detail_edit_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./music-detail-edit.page */ "6Gvc");




const routes = [
    {
        path: '',
        component: _music_detail_edit_page__WEBPACK_IMPORTED_MODULE_3__["MusicDetailEditPage"]
    }
];
let MusicDetailEditPageRoutingModule = class MusicDetailEditPageRoutingModule {
};
MusicDetailEditPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MusicDetailEditPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=music-music-detail-edit-music-detail-edit-module.js.map