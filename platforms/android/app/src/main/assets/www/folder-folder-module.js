(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["folder-folder-module"],{

/***/ "FJ2Q":
/*!*****************************************!*\
  !*** ./src/app/folder/folder.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-menu-button {\n  color: var(--ion-color-primary);\n}\n\n#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n\n.letterinicio {\n  letter-spacing: -1px;\n  font-size: 16px !important;\n  font-weight: 600 !important;\n  color: #2c2a2ae8;\n}\n\n.swiper-container {\n  width: 100%;\n  margin: 5px auto;\n  float: right !important;\n  text-align: end !important;\n}\n\n.swiper-slide {\n  width: auto;\n  text-align: left;\n}\n\n.swiper-pagination-bullets {\n  bottom: -20px;\n  left: 0;\n  width: 100%;\n}\n\n.transparent {\n  --background: rgba(0,0,0,0);\n  --border-color: rgba(0,0,0,0);\n}\n\nion-row ion-card {\n  width: 100% !important;\n  margin-left: 0 !important;\n  margin-right: 0 !important;\n}\n\nion-row ion-card img {\n  width: 100%;\n}\n\n.card1-padding {\n  padding: 12px 10px !important;\n}\n\nion-menu.md ion-content {\n  --padding-start: 8px;\n  --padding-end: 8px;\n  --padding-top: 20px;\n  --padding-bottom: 20px;\n}\n\nion-menu.md ion-list {\n  padding: 20px 0;\n}\n\nion-menu.md ion-note {\n  margin-bottom: 30px;\n}\n\nion-menu.md ion-list-header,\nion-menu.md ion-note {\n  padding-left: 10px;\n}\n\nion-menu.md ion-list#inbox-list {\n  border-bottom: 1px solid var(--ion-color-step-150, #d7d8da);\n}\n\nion-menu.md ion-list#inbox-list ion-list-header {\n  font-size: 22px;\n  font-weight: 600;\n  min-height: 20px;\n}\n\nion-menu.md ion-list#labels-list ion-list-header {\n  font-size: 16px;\n  margin-bottom: 18px;\n  color: #757575;\n  min-height: 26px;\n}\n\nion-menu.md ion-item {\n  --padding-start: 10px;\n  --padding-end: 10px;\n  border-radius: 4px;\n}\n\nion-menu.md ion-item.selected {\n  --background: rgba(var(--ion-color-warning-rgb));\n}\n\nion-menu.md ion-item.selected ion-icon {\n  color: black;\n}\n\nion-menu.md ion-item ion-icon {\n  color: #616e7e;\n}\n\nion-menu.md ion-item ion-label {\n  font-weight: 500;\n}\n\nion-menu.ios ion-content {\n  --padding-bottom: 20px;\n}\n\nion-menu.ios ion-list {\n  padding: 20px 0 0 0;\n}\n\nion-menu.ios ion-note {\n  line-height: 24px;\n  margin-bottom: 20px;\n}\n\nion-menu.ios ion-item {\n  --padding-start: 16px;\n  --padding-end: 16px;\n  --min-height: 50px;\n}\n\nion-menu.ios ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n\nion-menu.ios ion-item ion-icon {\n  font-size: 24px;\n  color: #73849a;\n}\n\nion-menu.ios ion-list#labels-list ion-list-header {\n  margin-bottom: 8px;\n}\n\nion-menu.ios ion-list-header,\nion-menu.ios ion-note {\n  padding-left: 16px;\n  padding-right: 16px;\n}\n\nion-menu.ios ion-note {\n  margin-bottom: 8px;\n}\n\nion-note {\n  display: inline-block;\n  font-size: 16px;\n  color: var(--ion-color-medium-shade);\n}\n\nion-item.selected {\n  --color: black;\n}\n\n.borde {\n  height: 65px;\n  width: 100%;\n  background-color: white;\n  border-top-left-radius: 0%;\n  border-top-right-radius: 0%;\n  border-bottom-left-radius: 7%;\n  border-bottom-right-radius: 7%;\n  position: absolute;\n  z-index: 1 !important;\n  transform: rotate(180deg);\n}\n\nion-toolbar:last-child.show-liner {\n  --border-width: 0 0 0.55px;\n}\n\nion-col {\n  padding: 5px 5px 0px 5px;\n}\n\n.content {\n  background-color: #ddd;\n}\n\nion-card.cardGrid {\n  position: relative;\n  text-align: center;\n  margin: 12px 10px 0px 0px !important;\n  width: 100% !important;\n}\n\nion-card {\n  border-radius: 9px !important;\n}\n\n.card-wide {\n  height: 157px !important;\n  margin: 3px 3px 0px 3px !important;\n  background-color: #dddddd;\n}\n\n.card-wide-bg:before {\n  content: \" \";\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  background-size: cover;\n  background-position: center;\n}\n\n.card-wide-bg {\n  position: relative;\n  height: 157px;\n  background-color: #dddddd;\n  background-size: cover;\n  background-size: cover;\n  background-position: center;\n}\n\n.card-wide-bg .card-wide-title {\n  width: 100px;\n  padding: 0px 5px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-size: 22px;\n  font-style: roboto;\n  font-weight: 600;\n  color: #ffffff;\n  position: absolute;\n  top: 25%;\n  text-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\n  width: 100%;\n  text-align: center;\n}\n\n.card-wide-bg .card-wide-sub-title {\n  width: 100px;\n  padding: 0px 5px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-size: 18px;\n  font-style: roboto;\n  font-weight: 400;\n  color: #ffffff;\n  position: absolute;\n  top: 42%;\n  text-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\n  width: 100%;\n  text-align: center;\n}\n\n/* /////////////////////////////////////// */\n\n.fade-in {\n  animation: fade-in 1.2s cubic-bezier(0.39, 0.575, 0.565, 1) both;\n}\n\n@keyframes fade-in {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGZvbGRlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwrQkFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxTQUFBO0FBQ0Y7O0FBRUE7RUFDRSxxQkFBQTtBQUNGOztBQUNBO0VBQ0Usb0JBQUE7RUFDQSwwQkFBQTtFQUNBLDJCQUFBO0VBQ0EsZ0JBQUE7QUFFRjs7QUFDQTtFQUNFLFdBQUE7RUFFQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsMEJBQUE7QUFDRjs7QUFDQTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtBQUVGOztBQUFBO0VBQ0EsYUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0FBR0E7O0FBQ0E7RUFDRSwyQkFBQTtFQUNBLDZCQUFBO0FBRUY7O0FBQ0U7RUFDSSxzQkFBQTtFQUNKLHlCQUFBO0VBQ0EsMEJBQUE7QUFFRjs7QUFERTtFQUNJLFdBQUE7QUFHTjs7QUFFQTtFQUNFLDZCQUFBO0FBQ0Y7O0FBR0E7RUFDRSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQUFGOztBQUdBO0VBQ0UsZUFBQTtBQUFGOztBQUdBO0VBQ0UsbUJBQUE7QUFBRjs7QUFHQTs7RUFFRSxrQkFBQTtBQUFGOztBQUdBO0VBQ0UsMkRBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUVBLGdCQUFBO0FBREY7O0FBSUE7RUFDRSxlQUFBO0VBRUEsbUJBQUE7RUFFQSxjQUFBO0VBRUEsZ0JBQUE7QUFKRjs7QUFPQTtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUpGOztBQU9BO0VBQ0UsZ0RBQUE7QUFKRjs7QUFPQTtFQUNFLFlBQUE7QUFKRjs7QUFPQTtFQUNFLGNBQUE7QUFKRjs7QUFPQTtFQUNFLGdCQUFBO0FBSkY7O0FBT0E7RUFDRSxzQkFBQTtBQUpGOztBQU9BO0VBQ0UsbUJBQUE7QUFKRjs7QUFPQTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7QUFKRjs7QUFPQTtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUpGOztBQU9BO0VBQ0UsK0JBQUE7QUFKRjs7QUFPQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FBSkY7O0FBT0E7RUFDRSxrQkFBQTtBQUpGOztBQU9BOztFQUVFLGtCQUFBO0VBQ0EsbUJBQUE7QUFKRjs7QUFPQTtFQUNFLGtCQUFBO0FBSkY7O0FBT0E7RUFDRSxxQkFBQTtFQUNBLGVBQUE7RUFFQSxvQ0FBQTtBQUxGOztBQVFBO0VBQ0UsY0FBQTtBQUxGOztBQVVBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLDBCQUFBO0VBQ0EsMkJBQUE7RUFDQSw2QkFBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7RUFDRixxQkFBQTtFQUNBLHlCQUFBO0FBUEE7O0FBVUE7RUFDRSwwQkFBQTtBQVBGOztBQVNBO0VBQ0ksd0JBQUE7QUFOSjs7QUFRQTtFQUNRLHNCQUFBO0FBTFI7O0FBT0E7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0NBQUE7RUFDQSxzQkFBQTtBQUpGOztBQU9BO0VBRUUsNkJBQUE7QUFMRjs7QUFVQTtFQUdFLHdCQUFBO0VBQ0Esa0NBQUE7RUFDQSx5QkFBQTtBQVRGOztBQWFBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7QUFWRjs7QUFZQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBSUEsc0JBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0FBVEY7O0FBV0E7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSx5RUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQVJGOztBQVVBO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EseUVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFQRjs7QUFVQSw0Q0FBQTs7QUFFQTtFQUVZLGdFQUFBO0FBUlo7O0FBa0JBO0VBQ0U7SUFDRSxVQUFBO0VBUEY7RUFTQTtJQUNFLFVBQUE7RUFQRjtBQUNGIiwiZmlsZSI6ImZvbGRlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tbWVudS1idXR0b24ge1xyXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbn1cclxuXHJcbiNjb250YWluZXIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICB0b3A6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbn1cclxuXHJcbiNjb250YWluZXIgc3Ryb25nIHtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XHJcbn1cclxuXHJcbiNjb250YWluZXIgcCB7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG4gIGNvbG9yOiAjOGM4YzhjO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuI2NvbnRhaW5lciBhIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuLmxldHRlcmluaWNpb3tcclxuICBsZXR0ZXItc3BhY2luZzogLTFweDtcclxuICBmb250LXNpemU6IDE2cHggIWltcG9ydGFudDtcclxuICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6ICMyYzJhMmFlODtcclxufVxyXG5cclxuLnN3aXBlci1jb250YWluZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIC8vaGVpZ2h0OiAxMDBweDtcclxuICBtYXJnaW46IDVweCBhdXRvO1xyXG4gIGZsb2F0OiByaWdodCAhaW1wb3J0YW50O1xyXG4gIHRleHQtYWxpZ246IGVuZCAhaW1wb3J0YW50O1xyXG59XHJcbi5zd2lwZXItc2xpZGUge1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMge1xyXG5ib3R0b206IC0yMHB4O1xyXG5sZWZ0OiAwO1xyXG53aWR0aDogMTAwJTtcclxufVxyXG5cclxuXHJcbi50cmFuc3BhcmVudHtcclxuICAtLWJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMCk7XHJcbiAgLS1ib3JkZXItY29sb3I6IHJnYmEoMCwwLDAsMCk7XHJcbn1cclxuaW9uLXJvd3tcclxuICBpb24tY2FyZHtcclxuICAgICAgd2lkdGg6MTAwJSAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbi1sZWZ0OiAwICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XHJcbiAgaW1ne1xyXG4gICAgICB3aWR0aDoxMDAlO1xyXG4gIH1cclxufVxyXG59XHJcblxyXG4uY2FyZDEtcGFkZGluZ3tcclxuICBwYWRkaW5nOiAxMnB4IDEwcHggIWltcG9ydGFudDtcclxuICAvL21hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmlvbi1tZW51Lm1kIGlvbi1jb250ZW50IHtcclxuICAtLXBhZGRpbmctc3RhcnQ6IDhweDtcclxuICAtLXBhZGRpbmctZW5kOiA4cHg7XHJcbiAgLS1wYWRkaW5nLXRvcDogMjBweDtcclxuICAtLXBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG5pb24tbWVudS5tZCBpb24tbGlzdCB7XHJcbiAgcGFkZGluZzogMjBweCAwO1xyXG59XHJcblxyXG5pb24tbWVudS5tZCBpb24tbm90ZSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxufVxyXG5cclxuaW9uLW1lbnUubWQgaW9uLWxpc3QtaGVhZGVyLFxyXG5pb24tbWVudS5tZCBpb24tbm90ZSB7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG59XHJcblxyXG5pb24tbWVudS5tZCBpb24tbGlzdCNpbmJveC1saXN0IHtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXN0ZXAtMTUwLCAjZDdkOGRhKTtcclxufVxyXG5cclxuaW9uLW1lbnUubWQgaW9uLWxpc3QjaW5ib3gtbGlzdCBpb24tbGlzdC1oZWFkZXIge1xyXG4gIGZvbnQtc2l6ZTogMjJweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG5cclxuICBtaW4taGVpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG5pb24tbWVudS5tZCBpb24tbGlzdCNsYWJlbHMtbGlzdCBpb24tbGlzdC1oZWFkZXIge1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuXHJcbiAgbWFyZ2luLWJvdHRvbTogMThweDtcclxuXHJcbiAgY29sb3I6ICM3NTc1NzU7XHJcblxyXG4gIG1pbi1oZWlnaHQ6IDI2cHg7XHJcbn1cclxuXHJcbmlvbi1tZW51Lm1kIGlvbi1pdGVtIHtcclxuICAtLXBhZGRpbmctc3RhcnQ6IDEwcHg7XHJcbiAgLS1wYWRkaW5nLWVuZDogMTBweDtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuXHJcbmlvbi1tZW51Lm1kIGlvbi1pdGVtLnNlbGVjdGVkIHtcclxuICAtLWJhY2tncm91bmQ6IHJnYmEodmFyKC0taW9uLWNvbG9yLXdhcm5pbmctcmdiKSk7XHJcbn1cclxuXHJcbmlvbi1tZW51Lm1kIGlvbi1pdGVtLnNlbGVjdGVkIGlvbi1pY29uIHtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbmlvbi1tZW51Lm1kIGlvbi1pdGVtIGlvbi1pY29uIHtcclxuICBjb2xvcjogIzYxNmU3ZTtcclxufVxyXG5cclxuaW9uLW1lbnUubWQgaW9uLWl0ZW0gaW9uLWxhYmVsIHtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG5pb24tbWVudS5pb3MgaW9uLWNvbnRlbnQge1xyXG4gIC0tcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbmlvbi1tZW51LmlvcyBpb24tbGlzdCB7XHJcbiAgcGFkZGluZzogMjBweCAwIDAgMDtcclxufVxyXG5cclxuaW9uLW1lbnUuaW9zIGlvbi1ub3RlIHtcclxuICBsaW5lLWhlaWdodDogMjRweDtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG5pb24tbWVudS5pb3MgaW9uLWl0ZW0ge1xyXG4gIC0tcGFkZGluZy1zdGFydDogMTZweDtcclxuICAtLXBhZGRpbmctZW5kOiAxNnB4O1xyXG4gIC0tbWluLWhlaWdodDogNTBweDtcclxufVxyXG5cclxuaW9uLW1lbnUuaW9zIGlvbi1pdGVtLnNlbGVjdGVkIGlvbi1pY29uIHtcclxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG59XHJcblxyXG5pb24tbWVudS5pb3MgaW9uLWl0ZW0gaW9uLWljb24ge1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICBjb2xvcjogIzczODQ5YTtcclxufVxyXG5cclxuaW9uLW1lbnUuaW9zIGlvbi1saXN0I2xhYmVscy1saXN0IGlvbi1saXN0LWhlYWRlciB7XHJcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG59XHJcblxyXG5pb24tbWVudS5pb3MgaW9uLWxpc3QtaGVhZGVyLFxyXG5pb24tbWVudS5pb3MgaW9uLW5vdGUge1xyXG4gIHBhZGRpbmctbGVmdDogMTZweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xyXG59XHJcblxyXG5pb24tbWVudS5pb3MgaW9uLW5vdGUge1xyXG4gIG1hcmdpbi1ib3R0b206IDhweDtcclxufVxyXG5cclxuaW9uLW5vdGUge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBmb250LXNpemU6IDE2cHg7XHJcblxyXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcclxufVxyXG5cclxuaW9uLWl0ZW0uc2VsZWN0ZWQge1xyXG4gIC0tY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG5cclxuXHJcbi5ib3JkZXtcclxuICBoZWlnaHQ6IDY1cHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMCU7XHJcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDAlO1xyXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDclO1xyXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA3JTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbnotaW5kZXg6IDEgIWltcG9ydGFudDtcclxudHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKVxyXG59XHJcblxyXG5pb24tdG9vbGJhcjpsYXN0LWNoaWxkLnNob3ctbGluZXIge1xyXG4gIC0tYm9yZGVyLXdpZHRoOiAwIDAgMC41NXB4O1xyXG59XHJcbmlvbi1jb2wge1xyXG4gICAgcGFkZGluZzogNXB4IDVweCAwcHggNXB4OyBcclxufVxyXG4uY29udGVudHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xyXG59XHJcbmlvbi1jYXJkLmNhcmRHcmlke1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luOiAxMnB4IDEwcHggMHB4IDBweCAhaW1wb3J0YW50O1xyXG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbn1cclxuLy8gKioqKioqKioqKioqIE1haW4gY2FyZCAqKioqKioqKioqKiovL1xyXG5pb24tY2FyZCB7XHJcbiAgLy9kaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgYm9yZGVyLXJhZGl1czogOXB4ICFpbXBvcnRhbnQ7XHJcbiAgLy8gLXdlYmtpdC1ib3gtc2hhZG93OiAwIDRweCAxNnB4IHJnYmEoMCwgMCwgMCwgMCkgICFpbXBvcnRhbnQ7XHJcbiAgLy8gYm94LXNoYWRvdzogMCA0cHggMTZweCByZ2JhKDAsMCwwLDApICFpbXBvcnRhbnQ7XHJcbn1cclxuLy8gKioqKioqKioqKioqIFdpZGUgY2FyZCAqKioqKioqKioqKiovL1xyXG4uY2FyZC13aWRlIHtcclxuICAvLyBib3JkZXItcmFkaXVzOiA0cHggICFpbXBvcnRhbnQ7XHJcbiAgLy8gd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICBoZWlnaHQ6IDE1N3B4ICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luOiAzcHggM3B4IDBweCAzcHggIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkZGRkO1xyXG4gIC8vIG1pbi1oZWlnaHQ6IDE1MHZoICFpbXBvcnRhbnQ7XHJcbiAgLy8gbWF4LWhlaWdodDogMTYwdmggIWltcG9ydGFudDtcclxufVxyXG4uY2FyZC13aWRlLWJnOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCIgXCI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgdG9wOiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxufVxyXG4uY2FyZC13aWRlLWJnIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgaGVpZ2h0OiAxNTdweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkZGRkO1xyXG4gIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAtbW96LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgLW8tYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG59XHJcbi5jYXJkLXdpZGUtYmcgLmNhcmQtd2lkZS10aXRsZSB7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG4gIHBhZGRpbmc6IDBweCA1cHg7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzOyAvLyBUaGlzIGlzIHdoZXJlIHRoZSBtYWdpYyBoYXBwZW5zXHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG4gIGZvbnQtc3R5bGU6IHJvYm90bztcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDI1JTtcclxuICB0ZXh0LXNoYWRvdzogMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xNiksIDAgM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMjMpO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uY2FyZC13aWRlLWJnIC5jYXJkLXdpZGUtc3ViLXRpdGxlIHtcclxuICB3aWR0aDogMTAwcHg7XHJcbiAgcGFkZGluZzogMHB4IDVweDtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7IC8vIFRoaXMgaXMgd2hlcmUgdGhlIG1hZ2ljIGhhcHBlbnNcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgZm9udC1zdHlsZTogcm9ib3RvO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNDIlO1xyXG4gIHRleHQtc2hhZG93OiAwIDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjE2KSwgMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4yMyk7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4vKiAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8gKi9cclxuXHJcbi5mYWRlLWluIHtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBmYWRlLWluIDEuMnMgY3ViaWMtYmV6aWVyKDAuMzkwLCAwLjU3NSwgMC41NjUsIDEuMDAwKSBib3RoO1xyXG4gICAgICAgICAgICBhbmltYXRpb246IGZhZGUtaW4gMS4ycyBjdWJpYy1iZXppZXIoMC4zOTAsIDAuNTc1LCAwLjU2NSwgMS4wMDApIGJvdGg7XHJcbn1cclxuQC13ZWJraXQta2V5ZnJhbWVzIGZhZGUtaW4ge1xyXG4gIDAlIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbn1cclxuQGtleWZyYW1lcyBmYWRlLWluIHtcclxuICAwJSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuIl19 */");

/***/ }),

/***/ "QRE9":
/*!*************************************************!*\
  !*** ./src/app/folder/folder-routing.module.ts ***!
  \*************************************************/
/*! exports provided: FolderPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FolderPageRoutingModule", function() { return FolderPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _folder_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./folder.page */ "wlos");




const routes = [
    {
        path: '',
        component: _folder_page__WEBPACK_IMPORTED_MODULE_3__["FolderPage"]
    }
];
let FolderPageRoutingModule = class FolderPageRoutingModule {
};
FolderPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FolderPageRoutingModule);



/***/ }),

/***/ "s9za":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/folder/folder.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n<ion-grid  class=\"ion-no-padding\" >\r\n\r\n<!-- background -->\r\n<app-back></app-back>\r\n<!-- header -->\r\n<app-header></app-header>\r\n<!-- Section1 ('big' Carrousel )-->\r\n<app-section-one></app-section-one>\r\n<!-- buttons -->\r\n<app-buttons-start></app-buttons-start>\r\n\r\n\r\n\r\n <!-- /////////// -->\r\n <!-- Inicio-->\r\n <!-- /////////// -->  \r\n <div *ngIf=\"this.router.url === '/folder/Inicio'\">  \r\n<!-- section2 (Mini Carrousel) -->\r\n<section-two></section-two>\r\n<!-- section3 (Playlists) -->\r\n<app-section-three></app-section-three>\r\n</div>\r\n\r\n\r\n\r\n <!-- /////////// -->\r\n <!--  Rock Bands-->\r\n <!-- /////////// -->\r\n\r\n<div *ngIf=\"this.router.url === '/folder/Rock%20Bands'\">\r\n<app-band-rock></app-band-rock>\r\n</div>\r\n\r\n\r\n\r\n\r\n \r\n\r\n\r\n\r\n\r\n\r\n</ion-grid>\r\n</ion-content>\r\n");

/***/ }),

/***/ "wlos":
/*!***************************************!*\
  !*** ./src/app/folder/folder.page.ts ***!
  \***************************************/
/*! exports provided: FolderPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FolderPage", function() { return FolderPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_folder_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./folder.page.html */ "s9za");
/* harmony import */ var _folder_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./folder.page.scss */ "FJ2Q");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_music_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/music.service */ "Ie7a");







/* import { StatusBar } from '@ionic-native/status-bar/ngx'; */
let FolderPage = class FolderPage {
    constructor(activatedRoute, musicservice, router) {
        this.activatedRoute = activatedRoute;
        this.musicservice = musicservice;
        this.router = router;
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.folder = this.activatedRoute.snapshot.paramMap.get('id');
            /*     this.statusBar.backgroundColorByHexString('#ff4500'); */
        });
    }
};
FolderPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _services_music_service__WEBPACK_IMPORTED_MODULE_5__["MusicService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
FolderPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-folder',
        template: _raw_loader_folder_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_folder_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], FolderPage);



/***/ }),

/***/ "yIOV":
/*!*****************************************!*\
  !*** ./src/app/folder/folder.module.ts ***!
  \*****************************************/
/*! exports provided: FolderPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FolderPageModule", function() { return FolderPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _folder_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./folder-routing.module */ "QRE9");
/* harmony import */ var _folder_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./folder.page */ "wlos");
/* harmony import */ var _components_global_header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/global/header/header.component */ "cdmV");
/* harmony import */ var _components_global_back_back_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/global/back/back.component */ "avQE");
/* harmony import */ var _components_global_back_short_back_short_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/global/back-short/back-short.component */ "SdWb");
/* harmony import */ var _components_inicio_buttons_start_buttons_start_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/inicio/buttons-start/buttons-start.component */ "mYU1");
/* harmony import */ var _components_inicio_section_one_section_one_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/inicio/section-one/section-one.component */ "YwbT");
/* harmony import */ var _components_inicio_section_two_section_two_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/inicio/section-two/section-two.component */ "9bWw");
/* harmony import */ var _components_inicio_section_three_section_three_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/inicio/section-three/section-three.component */ "b7ux");
/* harmony import */ var _components_bandsrock_band_rock_band_rock_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/bandsrock/band-rock/band-rock.component */ "Niy5");
/* harmony import */ var _components_album_section_uno_section_uno_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/album/section-uno/section-uno.component */ "uOtd");
/* harmony import */ var _components_album_section_dos_section_dos_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/album/section-dos/section-dos.component */ "AUDz");







/* global */



/* Inicio */




/* Rock Band */

/* Album */


let FolderPageModule = class FolderPageModule {
};
FolderPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _folder_routing_module__WEBPACK_IMPORTED_MODULE_5__["FolderPageRoutingModule"],
        ],
        declarations: [
            _folder_page__WEBPACK_IMPORTED_MODULE_6__["FolderPage"],
            /* global */
            _components_global_back_back_component__WEBPACK_IMPORTED_MODULE_8__["BackComponent"],
            _components_global_back_short_back_short_component__WEBPACK_IMPORTED_MODULE_9__["BackShortComponent"],
            _components_global_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
            /* Inicio */
            _components_inicio_buttons_start_buttons_start_component__WEBPACK_IMPORTED_MODULE_10__["ButtonsStartComponent"],
            _components_inicio_section_one_section_one_component__WEBPACK_IMPORTED_MODULE_11__["SectionOneComponent"],
            _components_inicio_section_two_section_two_component__WEBPACK_IMPORTED_MODULE_12__["SectionTwoComponent"],
            _components_inicio_section_three_section_three_component__WEBPACK_IMPORTED_MODULE_13__["SectionThreeComponent"],
            /* Rock Band */
            _components_bandsrock_band_rock_band_rock_component__WEBPACK_IMPORTED_MODULE_14__["BandRockComponent"],
            /* Album */
            _components_album_section_uno_section_uno_component__WEBPACK_IMPORTED_MODULE_15__["SectionUnoComponent"],
            _components_album_section_dos_section_dos_component__WEBPACK_IMPORTED_MODULE_16__["SectionDosComponent"]
        ]
    })
], FolderPageModule);



/***/ })

}]);
//# sourceMappingURL=folder-folder-module.js.map