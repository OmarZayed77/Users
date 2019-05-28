(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-users-users-module"],{

/***/ "./src/app/modules/users/user-add/user-add.component.css":
/*!***************************************************************!*\
  !*** ./src/app/modules/users/user-add/user-add.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdXNlcnMvdXNlci1hZGQvdXNlci1hZGQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/users/user-add/user-add.component.html":
/*!****************************************************************!*\
  !*** ./src/app/modules/users/user-add/user-add.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-user-form [isNew]=\"true\"></app-user-form>"

/***/ }),

/***/ "./src/app/modules/users/user-add/user-add.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/modules/users/user-add/user-add.component.ts ***!
  \**************************************************************/
/*! exports provided: UserAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserAddComponent", function() { return UserAddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UserAddComponent = /** @class */ (function () {
    function UserAddComponent() {
    }
    UserAddComponent.prototype.ngOnInit = function () {
    };
    UserAddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-add',
            template: __webpack_require__(/*! ./user-add.component.html */ "./src/app/modules/users/user-add/user-add.component.html"),
            styles: [__webpack_require__(/*! ./user-add.component.css */ "./src/app/modules/users/user-add/user-add.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UserAddComponent);
    return UserAddComponent;
}());



/***/ }),

/***/ "./src/app/modules/users/user-card/user-card.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/modules/users/user-card/user-card.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-card\r\n{\r\n    width: 18rem;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy91c2Vycy91c2VyLWNhcmQvdXNlci1jYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdXNlcnMvdXNlci1jYXJkL3VzZXItY2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1jYXJkXHJcbntcclxuICAgIHdpZHRoOiAxOHJlbTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/modules/users/user-card/user-card.component.html":
/*!******************************************************************!*\
  !*** ./src/app/modules/users/user-card/user-card.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"example-card\" [style.background]=\"bgColor\">\n    <mat-card-header>\n      <img mat-card-avatar [src]=\"avatar\">\n      <mat-card-title>{{user.fName + ' ' + user.lName}}</mat-card-title>\n      <mat-card-subtitle>{{user.email}}</mat-card-subtitle>\n    </mat-card-header>\n    <mat-card-content>\n      <p>\n        {{user.address}}<br/>\n        {{user.city + ', ' + user.state}}\n      </p>\n    </mat-card-content>\n    <mat-card-actions>\n      <button mat-icon-button color=\"warn\" (click)=\"deleteUser(user.id)\">\n        <mat-icon>delete</mat-icon>\n      </button>\n      <button mat-icon-button color=\"primary\" [routerLink]=\"'/users/edit/' + user.id\">\n          <mat-icon>edit</mat-icon>\n        </button>\n    </mat-card-actions>\n  </mat-card>"

/***/ }),

/***/ "./src/app/modules/users/user-card/user-card.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/modules/users/user-card/user-card.component.ts ***!
  \****************************************************************/
/*! exports provided: UserCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserCardComponent", function() { return UserCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");



var UserCardComponent = /** @class */ (function () {
    function UserCardComponent(_userService) {
        this._userService = _userService;
        this.userService = _userService;
    }
    UserCardComponent.prototype.ngOnInit = function () {
        this.bgColor = (this.user.gender === 0)
            ? 'rgb(233, 231, 231)'
            : 'rgb(255, 187, 131)';
        this.avatar = (this.user.gender === 0)
            ? 'https://banner2.kisspng.com/20180325/bgw/kisspng-female-clip-art-avatar-5ab751aeeeb9b0.3078693815219634389778.jpg'
            : 'https://www.clipartmax.com/png/middle/0-6213_faceless-clipart.png';
    };
    UserCardComponent.prototype.deleteUser = function (id) {
        this.userService.delete(id);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], UserCardComponent.prototype, "user", void 0);
    UserCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-card',
            template: __webpack_require__(/*! ./user-card.component.html */ "./src/app/modules/users/user-card/user-card.component.html"),
            styles: [__webpack_require__(/*! ./user-card.component.css */ "./src/app/modules/users/user-card/user-card.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], UserCardComponent);
    return UserCardComponent;
}());



/***/ }),

/***/ "./src/app/modules/users/user-edit/user-edit.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/modules/users/user-edit/user-edit.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdXNlcnMvdXNlci1lZGl0L3VzZXItZWRpdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/users/user-edit/user-edit.component.html":
/*!******************************************************************!*\
  !*** ./src/app/modules/users/user-edit/user-edit.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-user-form [isNew]=\"false\"></app-user-form>"

/***/ }),

/***/ "./src/app/modules/users/user-edit/user-edit.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/modules/users/user-edit/user-edit.component.ts ***!
  \****************************************************************/
/*! exports provided: UserEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserEditComponent", function() { return UserEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UserEditComponent = /** @class */ (function () {
    function UserEditComponent() {
    }
    UserEditComponent.prototype.ngOnInit = function () {
    };
    UserEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-edit',
            template: __webpack_require__(/*! ./user-edit.component.html */ "./src/app/modules/users/user-edit/user-edit.component.html"),
            styles: [__webpack_require__(/*! ./user-edit.component.css */ "./src/app/modules/users/user-edit/user-edit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UserEditComponent);
    return UserEditComponent;
}());



/***/ }),

/***/ "./src/app/modules/users/user-form/user-form.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/modules/users/user-form/user-form.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-container\r\n{\r\n    width: 70%;\r\n    margin: 0.5rem auto;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy91c2Vycy91c2VyLWZvcm0vdXNlci1mb3JtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksVUFBVTtJQUNWLG1CQUFtQjtBQUN2QiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdXNlcnMvdXNlci1mb3JtL3VzZXItZm9ybS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tY29udGFpbmVyXHJcbntcclxuICAgIHdpZHRoOiA3MCU7XHJcbiAgICBtYXJnaW46IDAuNXJlbSBhdXRvO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/modules/users/user-form/user-form.component.html":
/*!******************************************************************!*\
  !*** ./src/app/modules/users/user-form/user-form.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<form novalidate [formGroup]=\"userForm\" (ngSubmit)=\"onSubmit()\" action=\"#\" class=\"form-container\">\n    <div class=\"form-group\">\n      <label for=\"fname\">First Name: </label>\n      <input class=\"form-control\" formControlName=\"fName\" type=\"text\" name=\"txtFName\" id=\"fname\" required>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"lname\">Last Name: </label>\n      <input class=\"form-control\" formControlName=\"lName\" type=\"text\" name=\"txtLName\" id=\"lname\" required>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"email\">Email: </label>\n      <input class=\"form-control\" formControlName=\"email\"  type=\"email\" name=\"txtEmail\" id=\"email\" required>\n    </div>\n    <div class=\"form-check form-check-inline\">\n      <input class=\"form-check-input\" formControlName=\"gender\" type=\"radio\" name=\"gender\" id=\"inlineRadio1\" [value]=\"0\">\n      <label class=\"form-check-label\" for=\"inlineRadio1\">Male</label>\n    </div>\n    <div class=\"form-check form-check-inline\">\n      <input class=\"form-check-input\" type=\"radio\" formControlName=\"gender\" name=\"gender\" id=\"inlineRadio2\" [value]=\"1\">\n      <label class=\"form-check-label\" for=\"inlineRadio2\">Female</label>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"address\">Address: </label>\n      <input class=\"form-control\" formControlName=\"address\" type=\"text\" name=\"txtAddress\" id=\"address\" required>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"city\">City: </label>\n      <input class=\"form-control\" formControlName=\"city\" type=\"text\" name=\"txtCity\" id=\"city\" required>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"state\">State: </label>\n      <input class=\"form-control\" formControlName=\"state\" type=\"text\" name=\"txtState\" id=\"state\" required>\n    </div>\n    <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n    <button mat-raised-button color=\"warn\" routerLink=\"/users\">Cancel</button>\n  </form>"

/***/ }),

/***/ "./src/app/modules/users/user-form/user-form.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/modules/users/user-form/user-form.component.ts ***!
  \****************************************************************/
/*! exports provided: UserFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserFormComponent", function() { return UserFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var UserFormComponent = /** @class */ (function () {
    function UserFormComponent(_userService, _router, _activatedRoute) {
        this._userService = _userService;
        this._router = _router;
        this._activatedRoute = _activatedRoute;
        this.userService = _userService;
        this.router = _router;
        this.activatedRoute = _activatedRoute;
    }
    UserFormComponent.prototype.getUser = function () {
        return this.userService.getById(this.activatedRoute.snapshot.params['id']);
    };
    UserFormComponent.prototype.ngOnInit = function () {
        if (this.isNew)
            this.user = { id: "", fName: "", lName: "", email: "", address: "", city: "", state: "", gender: 0 };
        else
            this.user = this.getUser();
        this.userForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            'fName': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.user.fName, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ]),
            'lName': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.user.lName, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ]),
            'address': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.user.address, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ]),
            'city': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.user.city, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ]),
            'state': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.user.state, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ]),
            'gender': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.user.gender, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ]),
            'email': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.user.email, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email
            ])
        });
    };
    UserFormComponent.prototype.onSubmit = function () {
        this.user.fName = this.userForm.get('fName').value;
        this.user.lName = this.userForm.get('lName').value;
        this.user.email = this.userForm.get('email').value;
        this.user.address = this.userForm.get('address').value;
        this.user.city = this.userForm.get('city').value;
        this.user.state = this.userForm.get('state').value;
        this.user.gender = this.userForm.get('gender').value;
        if (this.userForm.invalid) {
            alert("Please enter valid data first!");
        }
        else {
            if (this.isNew) {
                this.user.id = new Date().toString();
                this.userService.add(this.user);
            }
            else
                this.userService.edit(this.user);
            this.router.navigate(['/users']);
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], UserFormComponent.prototype, "user", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], UserFormComponent.prototype, "isNew", void 0);
    UserFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-form',
            template: __webpack_require__(/*! ./user-form.component.html */ "./src/app/modules/users/user-form/user-form.component.html"),
            styles: [__webpack_require__(/*! ./user-form.component.css */ "./src/app/modules/users/user-form/user-form.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], UserFormComponent);
    return UserFormComponent;
}());



/***/ }),

/***/ "./src/app/modules/users/users-list/users-list.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/modules/users/users-list/users-list.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h2\r\n{\r\n    color: red;\r\n    text-align: center;\r\n}\r\nmat-form-field\r\n{\r\n    margin-left: 3rem;\r\n    width: 30rem;\r\n}\r\nmat-icon\r\n{\r\n    cursor: pointer;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy91c2Vycy91c2Vycy1saXN0L3VzZXJzLWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSxVQUFVO0lBQ1Ysa0JBQWtCO0FBQ3RCO0FBQ0E7O0lBRUksaUJBQWlCO0lBQ2pCLFlBQVk7QUFDaEI7QUFDQTs7SUFFSSxlQUFlO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy91c2Vycy91c2Vycy1saXN0L3VzZXJzLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgyXHJcbntcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxubWF0LWZvcm0tZmllbGRcclxue1xyXG4gICAgbWFyZ2luLWxlZnQ6IDNyZW07XHJcbiAgICB3aWR0aDogMzByZW07XHJcbn1cclxubWF0LWljb25cclxue1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/modules/users/users-list/users-list.component.html":
/*!********************************************************************!*\
  !*** ./src/app/modules/users/users-list/users-list.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-form-field appearance=\"legacy\">\r\n    <mat-label>Search</mat-label>\r\n    <input #searchText matInput placeholder=\"By first name, last name or email\">\r\n    <mat-icon matSuffix (click)=\"search(searchText)\">search</mat-icon>\r\n    <mat-icon matSuffix (click)=\"reset(searchText)\">clear</mat-icon>\r\n  </mat-form-field>\r\n<h2 *ngIf=\"users.length === 0\">No Users Found!</h2>\r\n<mat-grid-list cols=\"4\" rowHeight=\"14rem\" gutterSize=\"10\">\r\n    <mat-grid-tile *ngFor=\"let item of users\">\r\n        <app-user-card  [user]=\"item\"></app-user-card>\r\n    </mat-grid-tile>\r\n</mat-grid-list>"

/***/ }),

/***/ "./src/app/modules/users/users-list/users-list.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/modules/users/users-list/users-list.component.ts ***!
  \******************************************************************/
/*! exports provided: UsersListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersListComponent", function() { return UsersListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");



var UsersListComponent = /** @class */ (function () {
    function UsersListComponent(_usersService) {
        var _this = this;
        this._usersService = _usersService;
        this.usersService = _usersService;
        this.usersService.userDeleted.subscribe(function (id) {
            var index = _this.users.findIndex(function (u) { return u.id === id; });
            if (index > -1)
                _this.users.splice(index, 1);
        });
    }
    UsersListComponent.prototype.ngOnInit = function () {
        this.users = this.usersService.getAll();
    };
    UsersListComponent.prototype.search = function (searchText) {
        if (searchText !== "")
            this.users = this.usersService.search(searchText.value);
    };
    UsersListComponent.prototype.reset = function (searchText) {
        searchText.value = "";
        this.users = this.usersService.getAll();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], UsersListComponent.prototype, "users", void 0);
    UsersListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-users-list',
            template: __webpack_require__(/*! ./users-list.component.html */ "./src/app/modules/users/users-list/users-list.component.html"),
            styles: [__webpack_require__(/*! ./users-list.component.css */ "./src/app/modules/users/users-list/users-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], UsersListComponent);
    return UsersListComponent;
}());



/***/ }),

/***/ "./src/app/modules/users/users.module.ts":
/*!***********************************************!*\
  !*** ./src/app/modules/users/users.module.ts ***!
  \***********************************************/
/*! exports provided: UsersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersModule", function() { return UsersModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material_angularMaterial_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../angular-material/angularMaterial.module */ "./src/app/modules/angular-material/angularMaterial.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _users_list_users_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./users-list/users-list.component */ "./src/app/modules/users/users-list/users-list.component.ts");
/* harmony import */ var _user_add_user_add_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user-add/user-add.component */ "./src/app/modules/users/user-add/user-add.component.ts");
/* harmony import */ var _user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./user-edit/user-edit.component */ "./src/app/modules/users/user-edit/user-edit.component.ts");
/* harmony import */ var _user_card_user_card_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./user-card/user-card.component */ "./src/app/modules/users/user-card/user-card.component.ts");
/* harmony import */ var _user_form_user_form_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./user-form/user-form.component */ "./src/app/modules/users/user-form/user-form.component.ts");











var UsersModule = /** @class */ (function () {
    function UsersModule() {
    }
    UsersModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _users_list_users_list_component__WEBPACK_IMPORTED_MODULE_6__["UsersListComponent"],
                _user_add_user_add_component__WEBPACK_IMPORTED_MODULE_7__["UserAddComponent"],
                _user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_8__["UserEditComponent"],
                _user_card_user_card_component__WEBPACK_IMPORTED_MODULE_9__["UserCardComponent"],
                _user_form_user_form_component__WEBPACK_IMPORTED_MODULE_10__["UserFormComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_material_angularMaterial_module__WEBPACK_IMPORTED_MODULE_4__["AngularMaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([
                    { path: '', component: _users_list_users_list_component__WEBPACK_IMPORTED_MODULE_6__["UsersListComponent"] },
                    { path: 'add', component: _user_add_user_add_component__WEBPACK_IMPORTED_MODULE_7__["UserAddComponent"] },
                    { path: 'edit/:id', component: _user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_8__["UserEditComponent"] },
                ])
            ]
        })
    ], UsersModule);
    return UsersModule;
}());



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var UserService = /** @class */ (function () {
    function UserService() {
        this.userDeleted = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.users = [
            { id: "1", fName: "Omar", lName: "Zayed", email: "omar@gmail.com", address: "No. 7 st", city: "Maadi", state: "Cairo", gender: 0 },
            { id: "2", fName: "Ahmed", lName: "Ali", email: "ahmed@gmail.com", address: "No. 111 st", city: "Helwan", state: "Cairo", gender: 0 },
            { id: "3", fName: "Ali", lName: "Gabr", email: "ali@gmail.com", address: "No. 11 st", city: "Mansoura", state: "Gharbia", gender: 0 },
            { id: "4", fName: "Essam", lName: "Soltan", email: "essam@gmail.com", address: "No. 14 st", city: "Zagazig", state: "Sharkia", gender: 0 },
            { id: "5", fName: "Waheed", lName: "Mohamed", email: "waheed@gmail.com", address: "No. 33 st", city: "Sakr", state: "Sharkia", gender: 0 },
            { id: "6", fName: "Dina", lName: "Gamal", email: "dina@gmail.com", address: "No. 4 st", city: "Portsaid", state: "Portsaid", gender: 1 },
            { id: "7", fName: "Gamal", lName: "Hassan", email: "gamal@gmail.com", address: "No. 50 st", city: "Portsaid", state: "Portsaid", gender: 0 },
            { id: "8", fName: "Fatma", lName: "Alaa", email: "fayma@gmail.com", address: "No. 6 st", city: "October", state: "Giza", gender: 1 }
        ];
    }
    UserService.prototype.getAll = function () {
        return this.users;
    };
    UserService.prototype.getById = function (userId) {
        return this.users.find(function (u) { return u.id === userId; });
    };
    UserService.prototype.delete = function (userId) {
        var index = this.users.findIndex(function (u) { return u.id === userId; });
        if (index > -1)
            this.users.splice(index, 1);
        this.userDeleted.next(userId);
    };
    UserService.prototype.add = function (user) {
        this.users.push(user);
    };
    UserService.prototype.edit = function (user) {
        var u = this.getById(user.id);
        Object.assign(u, user);
    };
    UserService.prototype.search = function (searchTxt) {
        return this.users.filter(function (u) { return u.fName.toLowerCase().includes(searchTxt.toLowerCase())
            || u.lName.toLowerCase().includes(searchTxt.toLowerCase())
            || u.email.toLowerCase().includes(searchTxt.toLowerCase()); });
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UserService);
    return UserService;
}());



/***/ })

}]);
//# sourceMappingURL=modules-users-users-module.js.map