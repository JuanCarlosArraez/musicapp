(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["music-playermusic-playermusic-module"],{

/***/ "VvZd":
/*!*********************************************************!*\
  !*** ./src/app/music/playermusic/playermusic.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: linear-gradient(to top, #060606, var( --ion-color-personalize));\n}\n\nion-toolbar {\n  --background: var( --ion-color-personalize);\n}\n\nion-footer {\n  background: black;\n}\n\nion-footer a {\n  color: white !important;\n  text-decoration: none !important;\n}\n\n.marquee {\n  width: 450px;\n  margin: 0 auto;\n  overflow: hidden;\n  white-space: nowrap;\n  box-sizing: border-box;\n  animation: marquee 50s linear infinite;\n}\n\nion-title {\n  font-size: 11px;\n}\n\nion-title.textSubtitle {\n  font-size: 11px;\n  font-weight: bold;\n}\n\n.marquee:hover {\n  animation-play-state: paused;\n}\n\n/* Make it move */\n\n@keyframes marquee {\n  0% {\n    text-indent: 30em;\n  }\n  100% {\n    text-indent: -105em;\n  }\n}\n\n.fixedContent {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  margin-top: 40px;\n}\n\n.fixedContent ion-text {\n  font-size: 22px;\n  font-weight: bold;\n}\n\n.fixedContent .pUser {\n  color: var(--ion-color-light-shade);\n  font-size: 10px;\n}\n\n.fixedContent ion-thumbnail {\n  width: 40vh;\n  height: 50vh;\n  background-size: cover !important;\n  background-position: center !important;\n  margin-bottom: 16px;\n  box-shadow: 0 4px 5px -2px rgba(0, 0, 0, 0.6), 0 2px 4px 0 rgba(0, 0, 0, 0.66), 0 1px 5px 0 rgba(0, 0, 0, 0.65);\n  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1), background-color 15ms linear, color 15ms linear;\n}\n\n.header-md:after {\n  bottom: 0px;\n}\n\nion-button.play_pause_btn {\n  width: 65px !important;\n  height: 65px !important;\n  --border-radius: 50%;\n  --box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n  --transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1), background-color 15ms linear, color 15ms linear;\n}\n\n.darkColor {\n  color: black !important;\n  font-size: 32px;\n  margin-left: 3px;\n}\n\n.flexRow {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.transparent_Item {\n  --background: transparent;\n}\n\n.padding_Top {\n  padding-top: 24px;\n}\n\n/* All Audio */\n\naudio {\n  width: 100%;\n  height: 50px;\n}\n\naudio::-webkit-media-controls,\naudio::-webkit-media-controls-panel, audio::-webkit-media-controls-enclosure {\n  color: transparent !important;\n  background-color: transparent !important;\n  margin-right: -5%;\n}\n\naudio::-webkit-media-controls-play-button, audio::-webkit-media-controls-overlay-enclosure,\naudio::-webkit-media-controls-mute-button,\naudio:-webkit-full-page-media {\n  display: none !important;\n}\n\naudio::-webkit-media-controls-current-time-display {\n  color: white !important;\n  margin-top: 0px;\n  position: absolute;\n  margin-right: 100px;\n  right: -18%;\n}\n\naudio::-webkit-media-controls-time-remaining-display {\n  display: none !important;\n}\n\naudio::-webkit-media-controls {\n  background-color: transparent !important;\n}\n\naudio::-webkit-media-controls-timeline-container {\n  color: transparent !important;\n  background-color: transparent !important;\n}\n\naudio::-webkit-media-controls-timeline {\n  width: 60% !important;\n  padding-left: 15% !important;\n  text-align: start;\n  position: absolute !important;\n}\n\naudio::-webkit-media-controls-toggle-closed-captions-button {\n  display: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxwbGF5ZXJtdXNpYy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw2RUFBQTtBQUNKOztBQUVFO0VBQ0UsMkNBQUE7QUFDSjs7QUFFRTtFQUNFLGlCQUFBO0FBQ0o7O0FBQUk7RUFDRSx1QkFBQTtFQUNBLGdDQUFBO0FBRU47O0FBRUU7RUFDRSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLHNDQUFBO0FBQ0o7O0FBRUU7RUFDRSxlQUFBO0FBQ0o7O0FBRUU7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFFRTtFQUNFLDRCQUFBO0FBQ0o7O0FBRUUsaUJBQUE7O0FBQ0E7RUFDRTtJQUNFLGlCQUFBO0VBQ0o7RUFFRTtJQUNFLG1CQUFBO0VBQUo7QUFDRjs7QUFHRTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQURKOztBQUVJO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FBQU47O0FBR0k7RUFDRSxtQ0FBQTtFQUNBLGVBQUE7QUFETjs7QUFLSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUNBQUE7RUFDQSxzQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsK0dBQUE7RUFDQSwwR0FBQTtBQUhOOztBQU9FO0VBQ0UsV0FBQTtBQUpKOztBQU9FO0VBQ0Usc0JBQUE7RUFDQSx1QkFBQTtFQUVBLG9CQUFBO0VBQ0EsaUhBQUE7RUFDQSw0R0FBQTtBQUxKOztBQVFFO0VBQ0UsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFMSjs7QUFVRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUFQSjs7QUFVRTtFQUNFLHlCQUFBO0FBUEo7O0FBVUU7RUFDRSxpQkFBQTtBQVBKOztBQVlBLGNBQUE7O0FBQ0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQVRKOztBQVlFOztFQUVFLDZCQUFBO0VBQ0Esd0NBQUE7RUFDQSxpQkFBQTtBQVRKOztBQVlBOzs7RUFHQSx3QkFBQTtBQVRBOztBQVlBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUFUQTs7QUFXQTtFQUNFLHdCQUFBO0FBUkY7O0FBVUE7RUFDRSx3Q0FBQTtBQVBGOztBQVVBO0VBQ0UsNkJBQUE7RUFDQSx3Q0FBQTtBQVBGOztBQVNBO0VBQ0UscUJBQUE7RUFDQSw0QkFBQTtFQUNBLGlCQUFBO0VBQ0EsNkJBQUE7QUFORjs7QUFTQTtFQUNFLHdCQUFBO0FBTkYiLCJmaWxlIjoicGxheWVybXVzaWMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCAjMDYwNjA2LCAgdmFyKCAtLWlvbi1jb2xvci1wZXJzb25hbGl6ZSkpO1xyXG4gIH1cclxuICBcclxuICBpb24tdG9vbGJhciB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICB2YXIoIC0taW9uLWNvbG9yLXBlcnNvbmFsaXplKTtcclxuICB9XHJcbiAgXHJcbiAgaW9uLWZvb3RlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcclxuICAgIGEge1xyXG4gICAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5tYXJxdWVlIHtcclxuICAgIHdpZHRoOiA0NTBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYW5pbWF0aW9uOiBtYXJxdWVlIDUwcyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi10aXRsZS50ZXh0U3VidGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5tYXJxdWVlOmhvdmVyIHtcclxuICAgIGFuaW1hdGlvbi1wbGF5LXN0YXRlOiBwYXVzZWQ7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIE1ha2UgaXQgbW92ZSAqL1xyXG4gIEBrZXlmcmFtZXMgbWFycXVlZSB7XHJcbiAgICAwJSB7XHJcbiAgICAgIHRleHQtaW5kZW50OiAzMGVtO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgMTAwJSB7XHJcbiAgICAgIHRleHQtaW5kZW50OiAtMTA1ZW07XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5maXhlZENvbnRlbnQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gICAgaW9uLXRleHQge1xyXG4gICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLnBVc2VyIHtcclxuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodC1zaGFkZSk7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgLy8gbWFyZ2luOiAxMnB4O1xyXG4gICAgfVxyXG4gIFxyXG4gICAgaW9uLXRodW1ibmFpbCB7XHJcbiAgICAgIHdpZHRoOiA0MHZoO1xyXG4gICAgICBoZWlnaHQ6IDUwdmg7XHJcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcclxuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbiAgICAgIGJveC1zaGFkb3c6IDAgNHB4IDVweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC42KSwgMCAycHggNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjY2KSwgMCAxcHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjY1KTtcclxuICAgICAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAyODBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpLCBiYWNrZ3JvdW5kLWNvbG9yIDE1bXMgbGluZWFyLCBjb2xvciAxNW1zIGxpbmVhcjtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLmhlYWRlci1tZDphZnRlciB7XHJcbiAgICBib3R0b206IDBweDtcclxuICB9XHJcbiAgXHJcbiAgaW9uLWJ1dHRvbi5wbGF5X3BhdXNlX2J0biB7XHJcbiAgICB3aWR0aDogNjVweCAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiA2NXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAvLyBmb250LXNpemU6IDIuM2VtICFpbXBvcnRhbnQ7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIC0tYm94LXNoYWRvdzogMCAzcHggMXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDJweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDFweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xyXG4gICAgLS10cmFuc2l0aW9uOiBib3gtc2hhZG93IDI4MG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSksIGJhY2tncm91bmQtY29sb3IgMTVtcyBsaW5lYXIsIGNvbG9yIDE1bXMgbGluZWFyO1xyXG4gIH1cclxuICBcclxuICAuZGFya0NvbG9yIHtcclxuICAgIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAzMnB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDNweDtcclxuICB9XHJcbiAgXHJcblxyXG4gIFxyXG4gIC5mbGV4Um93IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICB9XHJcbiAgXHJcbiAgLnRyYW5zcGFyZW50X0l0ZW0ge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICB9XHJcbiAgXHJcbiAgLnBhZGRpbmdfVG9wIHtcclxuICAgIHBhZGRpbmctdG9wOiAyNHB4O1xyXG4gIH1cclxuXHJcblxyXG4gIFxyXG4vKiBBbGwgQXVkaW8gKi9cclxuICBhdWRpbyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNTBweDtcclxufVxyXG5cclxuICBhdWRpbzo6LXdlYmtpdC1tZWRpYS1jb250cm9scyxcclxuICBhdWRpbzo6LXdlYmtpdC1tZWRpYS1jb250cm9scy1wYW5lbCxhdWRpbzo6LXdlYmtpdC1tZWRpYS1jb250cm9scy1lbmNsb3N1cmUge1xyXG4gICAgY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAtNSU7XHJcbn1cclxuXHJcbmF1ZGlvOjotd2Via2l0LW1lZGlhLWNvbnRyb2xzLXBsYXktYnV0dG9uLCBhdWRpbzo6LXdlYmtpdC1tZWRpYS1jb250cm9scy1vdmVybGF5LWVuY2xvc3VyZSxcclxuYXVkaW86Oi13ZWJraXQtbWVkaWEtY29udHJvbHMtbXV0ZS1idXR0b24sIFxyXG5hdWRpbzotd2Via2l0LWZ1bGwtcGFnZS1tZWRpYXtcclxuZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG5cclxufVxyXG5hdWRpbzo6LXdlYmtpdC1tZWRpYS1jb250cm9scy1jdXJyZW50LXRpbWUtZGlzcGxheXtcclxuY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbm1hcmdpbi10b3A6IDBweDtcclxucG9zaXRpb246IGFic29sdXRlO1xyXG5tYXJnaW4tcmlnaHQ6IDEwMHB4O1xyXG5yaWdodDogLTE4JTtcclxufVxyXG5hdWRpbzo6LXdlYmtpdC1tZWRpYS1jb250cm9scy10aW1lLXJlbWFpbmluZy1kaXNwbGF5e1xyXG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5hdWRpbzo6LXdlYmtpdC1tZWRpYS1jb250cm9sc3tcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5hdWRpbzo6LXdlYmtpdC1tZWRpYS1jb250cm9scy10aW1lbGluZS1jb250YWluZXIge1xyXG4gIGNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuYXVkaW86Oi13ZWJraXQtbWVkaWEtY29udHJvbHMtdGltZWxpbmV7XHJcbiAgd2lkdGg6IDYwJSAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmctbGVmdDogMTUlICFpbXBvcnRhbnQ7XHJcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XHJcbiAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XHJcblxyXG59XHJcbmF1ZGlvOjotd2Via2l0LW1lZGlhLWNvbnRyb2xzLXRvZ2dsZS1jbG9zZWQtY2FwdGlvbnMtYnV0dG9uIHtcclxuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbn0iXX0= */");

/***/ }),

/***/ "fEl2":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/music/playermusic/playermusic.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n<ion-content>\n  <div class=\"fixedContent\">\n    <ion-thumbnail [ngStyle]=\"{'background-image': 'url(' + itemArray.image+ ')'}\"></ion-thumbnail>\n  </div>\n\n  <div class=\"padding_Top\">\n    <div class=\"fixedContent\">\n      <ion-text color=\"light\"> {{itemArray.name}} </ion-text>\n      <p text-uppercase color=\"light\" class=\"pUser microsoft marquee \"> {{itemArray.short_description}} </p>\n    </div>\n    <div *ngIf=\"itemArray\">\n    <audio autoplay controls=\"controls\" controlsList=\"nodownload\" preload=\"auto\" id=\"audioElement\"  #audioElement src=\"{{itemArray.music}}\"></audio>\n<!--  download? controlsList=\"nodownload\" -->\n  </div>\n  </div>\n\n  <ion-grid>\n    <ion-row justify-content-center align-items-center style=\"height: 100%\">\n      <ion-col>\n        <div class=\"center\">\n\n          <div (click)=\"paused ? play() : pause()\">\n            <ion-button class=\"play_pause_btn\"  (click)=\"play()\" color=\"light\" *ngIf=\"!paused\" justify-content-center\n               align-items-center>\n              <ion-icon name=\"pause\" class=\"darkColor\"></ion-icon>\n            </ion-button>\n\n            <ion-button class=\"play_pause_btn\" (click)=\"pause()\" color=\"light\" *ngIf=\"paused\" justify-content-center\n              align-items-center>\n              <ion-icon name=\"play\" class=\"darkColor\"></ion-icon>\n            </ion-button>\n          </div>\n        </div>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-item lines=\"none\" class=\"transparent_Item\">\n          <!-- <ion-button slot=\"start\" fill=\"clear\" color=\"light\">\n            <ion-icon name=\"flash\" expand=\"icon-only\" class=\"Iconsize_For_Rev\"></ion-icon>\n          </ion-button> -->\n          <ion-button slot=\"end\" fill=\"clear\" color=\"light\"  routerLink=\"../../folder/Inicio\">\n            <ion-icon name=\"share\" expand=\"icon-only\" class=\"Iconsize_For_Rev\"></ion-icon>\n          </ion-button>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ "lOy+":
/*!*******************************************************!*\
  !*** ./src/app/music/playermusic/playermusic.page.ts ***!
  \*******************************************************/
/*! exports provided: PlayermusicPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayermusicPage", function() { return PlayermusicPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_playermusic_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./playermusic.page.html */ "fEl2");
/* harmony import */ var _playermusic_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./playermusic.page.scss */ "VvZd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_music_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/music.service */ "Ie7a");







let PlayermusicPage = class PlayermusicPage {
    constructor(platform, activatedRoute, musicservice) {
        this.platform = platform;
        this.activatedRoute = activatedRoute;
        this.musicservice = musicservice;
        this.autoplay = false;
        this.volume = 1.0; /* 1.0 is loudest */
        this.itemArray = [];
        this.itemId = this.activatedRoute.snapshot.paramMap.get('playlistsId');
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.item = yield this.musicservice.getItemDetail(this.itemId);
            this.itemSubscribe = this.item.subscribe(res => {
                this.itemArray = res;
            });
        });
    }
    pause() {
        if (this.audio) {
            this.audio.pause();
        }
    }
    get paused() {
        if (this.audio) {
            return this.audio.paused;
        }
        else {
            return true;
        }
    }
    play() {
        if (this.audio) {
            if (this.audio.readyState >= 2) {
                this.audio.play();
                /* this.aqui= this.audio.currentTime; */
                console.log(this._audioRef.nativeElement.currentTime);
            }
        }
    }
    ngAfterViewInit() {
        this.audio = this._audioRef.nativeElement;
        if (this.audio) {
            this.audio.volume = this.volume;
            this.audio.autoplay = this.autoplay;
        }
    }
};
PlayermusicPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _services_music_service__WEBPACK_IMPORTED_MODULE_6__["MusicService"] }
];
PlayermusicPage.propDecorators = {
    _audioRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['audioElement', { static: false },] }],
    autoplay: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    volume: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
PlayermusicPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-playermusic',
        template: _raw_loader_playermusic_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_playermusic_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], PlayermusicPage);



/***/ }),

/***/ "lRcb":
/*!*****************************************************************!*\
  !*** ./src/app/music/playermusic/playermusic-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: PlayermusicPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayermusicPageRoutingModule", function() { return PlayermusicPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _playermusic_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./playermusic.page */ "lOy+");




const routes = [
    {
        path: '',
        component: _playermusic_page__WEBPACK_IMPORTED_MODULE_3__["PlayermusicPage"]
    }
];
let PlayermusicPageRoutingModule = class PlayermusicPageRoutingModule {
};
PlayermusicPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PlayermusicPageRoutingModule);



/***/ }),

/***/ "wcu2":
/*!*********************************************************!*\
  !*** ./src/app/music/playermusic/playermusic.module.ts ***!
  \*********************************************************/
/*! exports provided: PlayermusicPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayermusicPageModule", function() { return PlayermusicPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _playermusic_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./playermusic-routing.module */ "lRcb");
/* harmony import */ var _playermusic_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./playermusic.page */ "lOy+");







let PlayermusicPageModule = class PlayermusicPageModule {
};
PlayermusicPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _playermusic_routing_module__WEBPACK_IMPORTED_MODULE_5__["PlayermusicPageRoutingModule"]
        ],
        declarations: [_playermusic_page__WEBPACK_IMPORTED_MODULE_6__["PlayermusicPage"]]
    })
], PlayermusicPageModule);



/***/ })

}]);
//# sourceMappingURL=music-playermusic-playermusic-module.js.map