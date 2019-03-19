(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/phaser-component-library/fesm5/phaser-component-library.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/phaser-component-library/fesm5/phaser-component-library.js ***!
  \*********************************************************************************/
/*! exports provided: PhaserModule, ɵa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhaserModule", function() { return PhaserModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return PhaserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * Phaser component. Instantiates a [Phaser game instance]{\@link https://photonstorm.github.io/phaser3-docs/Phaser.Game.html} and contains
 * the corresponding [HTMLCanvasElement]{\@link https://photonstorm.github.io/phaser3-docs/Phaser.Game.html#canvas}.
 */
var PhaserComponent = /** @class */ (function () {
    function PhaserComponent(elementRef) {
        this.elementRef = elementRef;
        /**
         * Game ready output - emits the [Phaser game instance]{\@link https://photonstorm.github.io/phaser3-docs/Phaser.Game.html} when it is
         * ready and this component's view has initialized.
         */
        this.gameReady = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * Lifecycle hook that is called after a component's view has been fully initialized. Attaches
     * [Phaser game's HTMLCanvasElement]{\@link https://photonstorm.github.io/phaser3-docs/Phaser.Game.html#canvas} to DOM when game ready.
     * @return {?}
     */
    PhaserComponent.prototype.ngAfterViewInit = /**
     * Lifecycle hook that is called after a component's view has been fully initialized. Attaches
     * [Phaser game's HTMLCanvasElement]{\@link https://photonstorm.github.io/phaser3-docs/Phaser.Game.html#canvas} to DOM when game ready.
     * @return {?}
     */
    function () {
        var _this = this;
        /** @todo Possible race condition? */
        this.game.events.once('ready', function () {
            _this.elementRef.nativeElement.appendChild(_this.game.canvas);
            _this.elementRef.nativeElement.style.overflow = 'hidden';
            _this.gameReady.emit(_this.game);
        });
    };
    /**
     * Lifecycle hook that is called when a directive, pipe or service is destroyed. Destroys
     * [Phaser game]{\@link https://photonstorm.github.io/phaser3-docs/Phaser.Game.html} instance.
     * @return {?}
     */
    PhaserComponent.prototype.ngOnDestroy = /**
     * Lifecycle hook that is called when a directive, pipe or service is destroyed. Destroys
     * [Phaser game]{\@link https://photonstorm.github.io/phaser3-docs/Phaser.Game.html} instance.
     * @return {?}
     */
    function () {
        if (this.game && typeof this.game.destroy === 'function') {
            this.game.destroy(true);
        }
    };
    /**
     * Lifecycle hook that is called after data-bound properties of a directive are initialized. Instantiates
     * [Phaser game]{\@link https://photonstorm.github.io/phaser3-docs/Phaser.Game.html} instance.
     *
     * @throws [ReferenceError]{\@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ReferenceError} if
     * [Phaser]{\@link https://photonstorm.github.io/phaser3-docs/Phaser.html} or
     * [Phaser.Game]{\@link https://photonstorm.github.io/phaser3-docs/Phaser.Game.html} are not available.
     * @return {?}
     */
    PhaserComponent.prototype.ngOnInit = /**
     * Lifecycle hook that is called after data-bound properties of a directive are initialized. Instantiates
     * [Phaser game]{\@link https://photonstorm.github.io/phaser3-docs/Phaser.Game.html} instance.
     *
     * @throws [ReferenceError]{\@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ReferenceError} if
     * [Phaser]{\@link https://photonstorm.github.io/phaser3-docs/Phaser.html} or
     * [Phaser.Game]{\@link https://photonstorm.github.io/phaser3-docs/Phaser.Game.html} are not available.
     * @return {?}
     */
    function () {
        /** @type {?} */
        var PhaserModule = this.Phaser || window['Phaser'];
        if (!PhaserModule) {
            throw new ReferenceError('Phaser not found.');
        }
        else if (!PhaserModule.Game) {
            throw new ReferenceError('Phaser.Game not found.');
        }
        this.game = new PhaserModule.Game(this.gameConfig);
    };
    PhaserComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    // tslint:disable component-selector
                    selector: 'phaser-component',
                    template: ""
                }] }
    ];
    /** @nocollapse */
    PhaserComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
    ]; };
    PhaserComponent.propDecorators = {
        gameConfig: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        gameReady: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        Phaser: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
    return PhaserComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * Phaser module. Exports [PhaserComponent]{\@link PhaserComponent}.
 */
var PhaserModule = /** @class */ (function () {
    function PhaserModule() {
    }
    PhaserModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    declarations: [PhaserComponent],
                    exports: [PhaserComponent]
                },] }
    ];
    return PhaserModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGhhc2VyLWNvbXBvbmVudC1saWJyYXJ5LmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9waGFzZXItY29tcG9uZW50LWxpYnJhcnkvcGhhc2VyL3BoYXNlci5jb21wb25lbnQudHMiLCJuZzovL3BoYXNlci1jb21wb25lbnQtbGlicmFyeS9waGFzZXIvcGhhc2VyLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlclZpZXdJbml0LCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBQaGFzZXIgY29tcG9uZW50LiBJbnN0YW50aWF0ZXMgYSBbUGhhc2VyIGdhbWUgaW5zdGFuY2Vde0BsaW5rIGh0dHBzOi8vcGhvdG9uc3Rvcm0uZ2l0aHViLmlvL3BoYXNlcjMtZG9jcy9QaGFzZXIuR2FtZS5odG1sfSBhbmQgY29udGFpbnNcbiAqIHRoZSBjb3JyZXNwb25kaW5nIFtIVE1MQ2FudmFzRWxlbWVudF17QGxpbmsgaHR0cHM6Ly9waG90b25zdG9ybS5naXRodWIuaW8vcGhhc2VyMy1kb2NzL1BoYXNlci5HYW1lLmh0bWwjY2FudmFzfS5cbiAqL1xuQENvbXBvbmVudCh7XG4gIC8vIHRzbGludDpkaXNhYmxlIGNvbXBvbmVudC1zZWxlY3RvclxuICBzZWxlY3RvcjogJ3BoYXNlci1jb21wb25lbnQnLFxuICB0ZW1wbGF0ZTogYGBcbn0pXG5leHBvcnQgY2xhc3MgUGhhc2VyQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95LCBPbkluaXQge1xuICAvKipcbiAgICogW1BoYXNlciBnYW1lIGNvbmZpZ3VyYXRpb25de0BsaW5rIGh0dHBzOi8vcGhvdG9uc3Rvcm0uZ2l0aHViLmlvL3BoYXNlcjMtZG9jcy9nbG9iYWwuaHRtbCNHYW1lQ29uZmlnfSBpbnB1dC4gTm90ZSB0aGF0IHRoZSAncGFyZW50J1xuICAgKiBjb25maWd1cmF0aW9uIHByb3BlcnR5IGlzIGlnbm9yZWQuXG4gICAqL1xuICBASW5wdXQoKSBwdWJsaWMgZ2FtZUNvbmZpZzogYW55O1xuXG4gIC8qKlxuICAgKiBHYW1lIHJlYWR5IG91dHB1dCAtIGVtaXRzIHRoZSBbUGhhc2VyIGdhbWUgaW5zdGFuY2Vde0BsaW5rIGh0dHBzOi8vcGhvdG9uc3Rvcm0uZ2l0aHViLmlvL3BoYXNlcjMtZG9jcy9QaGFzZXIuR2FtZS5odG1sfSB3aGVuIGl0IGlzXG4gICAqIHJlYWR5IGFuZCB0aGlzIGNvbXBvbmVudCdzIHZpZXcgaGFzIGluaXRpYWxpemVkLlxuICAgKi9cbiAgQE91dHB1dCgpIHB1YmxpYyByZWFkb25seSBnYW1lUmVhZHkgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgLyoqXG4gICAqIFtQaGFzZXJde0BsaW5rIGh0dHBzOi8vcGhvdG9uc3Rvcm0uZ2l0aHViLmlvL3BoYXNlcjMtZG9jcy9QaGFzZXIuaHRtbH0gbW9kdWxlIHJlZmVyZW5jZS4gVGhpcyBzaG91bGQgcHJvdmlkZSBhY2Nlc3MgdG8gdGhlIFBoYXNlciBBUEkuXG4gICAqL1xuICBASW5wdXQoKSBwdWJsaWMgUGhhc2VyOiBhbnk7XG5cbiAgLyoqXG4gICAqIFtQaGFzZXIgZ2FtZV17QGxpbmsgaHR0cHM6Ly9waG90b25zdG9ybS5naXRodWIuaW8vcGhhc2VyMy1kb2NzL1BoYXNlci5HYW1lLmh0bWx9IHJlZmVyZW5jZS4gSW5zdGFudGlhdGVkIGluXG4gICAqIFtuZ09uSW5pdF17QGxpbmsgUGhhc2VyQ29tcG9uZW50Lm5nT25Jbml0fS5cbiAgICovXG4gIHByaXZhdGUgZ2FtZTogYW55O1xuXG4gIC8qKlxuICAgKiBJbnN0YW50aWF0ZSBQaGFzZXIgY29tcG9uZW50LlxuICAgKlxuICAgKiBAcGFyYW0gZWxlbWVudFJlZiBSZWZlcmVuY2UgdG8gaG9zdCBlbGVtZW50LiBDb3JyZXNwb25kaW5nIG5hdGl2ZSBlbGVtZW50IHdpbGwgYWN0IGFzIHBhcmVudCB0byBQaGFzZXIncyBIVE1MQ2FudmFzRWxlbWVudCdzIERPTVxuICAgKiBlbGVtZW50LlxuICAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZikgeyB9XG5cbiAgLyoqXG4gICAqIExpZmVjeWNsZSBob29rIHRoYXQgaXMgY2FsbGVkIGFmdGVyIGEgY29tcG9uZW50J3MgdmlldyBoYXMgYmVlbiBmdWxseSBpbml0aWFsaXplZC4gQXR0YWNoZXNcbiAgICogW1BoYXNlciBnYW1lJ3MgSFRNTENhbnZhc0VsZW1lbnRde0BsaW5rIGh0dHBzOi8vcGhvdG9uc3Rvcm0uZ2l0aHViLmlvL3BoYXNlcjMtZG9jcy9QaGFzZXIuR2FtZS5odG1sI2NhbnZhc30gdG8gRE9NIHdoZW4gZ2FtZSByZWFkeS5cbiAgICovXG4gIHB1YmxpYyBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgLyoqIEB0b2RvIFBvc3NpYmxlIHJhY2UgY29uZGl0aW9uPyAqL1xuICAgIHRoaXMuZ2FtZS5ldmVudHMub25jZSgncmVhZHknLCAoKSA9PiB7XG4gICAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLmdhbWUuY2FudmFzKTtcbiAgICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG4gICAgICB0aGlzLmdhbWVSZWFkeS5lbWl0KHRoaXMuZ2FtZSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogTGlmZWN5Y2xlIGhvb2sgdGhhdCBpcyBjYWxsZWQgd2hlbiBhIGRpcmVjdGl2ZSwgcGlwZSBvciBzZXJ2aWNlIGlzIGRlc3Ryb3llZC4gRGVzdHJveXNcbiAgICogW1BoYXNlciBnYW1lXXtAbGluayBodHRwczovL3Bob3RvbnN0b3JtLmdpdGh1Yi5pby9waGFzZXIzLWRvY3MvUGhhc2VyLkdhbWUuaHRtbH0gaW5zdGFuY2UuXG4gICAqL1xuICBwdWJsaWMgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZ2FtZSAmJiB0eXBlb2YgdGhpcy5nYW1lLmRlc3Ryb3kgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRoaXMuZ2FtZS5kZXN0cm95KHRydWUpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBMaWZlY3ljbGUgaG9vayB0aGF0IGlzIGNhbGxlZCBhZnRlciBkYXRhLWJvdW5kIHByb3BlcnRpZXMgb2YgYSBkaXJlY3RpdmUgYXJlIGluaXRpYWxpemVkLiBJbnN0YW50aWF0ZXNcbiAgICogW1BoYXNlciBnYW1lXXtAbGluayBodHRwczovL3Bob3RvbnN0b3JtLmdpdGh1Yi5pby9waGFzZXIzLWRvY3MvUGhhc2VyLkdhbWUuaHRtbH0gaW5zdGFuY2UuXG4gICAqXG4gICAqIEB0aHJvd3MgW1JlZmVyZW5jZUVycm9yXXtAbGluayBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9SZWZlcmVuY2VFcnJvcn0gaWZcbiAgICogW1BoYXNlcl17QGxpbmsgaHR0cHM6Ly9waG90b25zdG9ybS5naXRodWIuaW8vcGhhc2VyMy1kb2NzL1BoYXNlci5odG1sfSBvclxuICAgKiBbUGhhc2VyLkdhbWVde0BsaW5rIGh0dHBzOi8vcGhvdG9uc3Rvcm0uZ2l0aHViLmlvL3BoYXNlcjMtZG9jcy9QaGFzZXIuR2FtZS5odG1sfSBhcmUgbm90IGF2YWlsYWJsZS5cbiAgICovXG4gIHB1YmxpYyBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAvLyBJZiBQaGFzZXIgbW9kdWxlIG5vdCBwcm92aWRlZCB0cnkgd2luZG93IG9iamVjdC4uLlxuICAgIGNvbnN0IFBoYXNlck1vZHVsZSA9IHRoaXMuUGhhc2VyIHx8IHdpbmRvd1snUGhhc2VyJ107XG5cbiAgICBpZiAoIVBoYXNlck1vZHVsZSkge1xuICAgICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKCdQaGFzZXIgbm90IGZvdW5kLicpO1xuICAgIH0gZWxzZSBpZiAoIVBoYXNlck1vZHVsZS5HYW1lKSB7XG4gICAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoJ1BoYXNlci5HYW1lIG5vdCBmb3VuZC4nKTtcbiAgICB9XG5cbiAgICB0aGlzLmdhbWUgPSBuZXcgUGhhc2VyTW9kdWxlLkdhbWUodGhpcy5nYW1lQ29uZmlnKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgUGhhc2VyQ29tcG9uZW50IH0gZnJvbSAnLi9waGFzZXIuY29tcG9uZW50JztcblxuLyoqXG4gKiBQaGFzZXIgbW9kdWxlLiBFeHBvcnRzIFtQaGFzZXJDb21wb25lbnRde0BsaW5rIFBoYXNlckNvbXBvbmVudH0uXG4gKi9cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1BoYXNlckNvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtQaGFzZXJDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIFBoYXNlck1vZHVsZSB7IH1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7Ozs7NkJBeUM2QixVQUFzQjtRQUF0QixlQUFVLEdBQVYsVUFBVSxDQUFZOzs7Ozt5QkFuQlgsSUFBSSxZQUFZLEVBQUU7Ozs7Ozs7SUF5QmpELHlDQUFlOzs7Ozs7OztRQUVwQixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQzdCLEtBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzVELEtBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1lBQ3hELEtBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNoQyxDQUFDLENBQUM7Ozs7Ozs7SUFPRSxxQ0FBVzs7Ozs7O1FBQ2hCLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxLQUFLLFVBQVUsRUFBRTtZQUN4RCxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN6Qjs7Ozs7Ozs7Ozs7SUFXSSxrQ0FBUTs7Ozs7Ozs7Ozs7UUFFYixJQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsTUFBTSxJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUVyRCxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ2pCLE1BQU0sSUFBSSxjQUFjLENBQUMsbUJBQW1CLENBQUMsQ0FBQztTQUMvQzthQUFNLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFO1lBQzdCLE1BQU0sSUFBSSxjQUFjLENBQUMsd0JBQXdCLENBQUMsQ0FBQztTQUNwRDtRQUVELElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQzs7O2dCQTlFdEQsU0FBUyxTQUFDOztvQkFFVCxRQUFRLEVBQUUsa0JBQWtCO29CQUM1QixRQUFRLEVBQUUsRUFBRTtpQkFDYjs7OztnQkFWa0MsVUFBVTs7OzZCQWdCMUMsS0FBSzs0QkFNTCxNQUFNO3lCQUtOLEtBQUs7OzBCQTNCUjs7Ozs7OztBQ0FBOzs7Ozs7O2dCQU9DLFFBQVEsU0FBQztvQkFDUixZQUFZLEVBQUUsQ0FBQyxlQUFlLENBQUM7b0JBQy9CLE9BQU8sRUFBRSxDQUFDLGVBQWUsQ0FBQztpQkFDM0I7O3VCQVZEOzs7Ozs7Ozs7Ozs7Ozs7In0=

/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var phaser_component_library__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! phaser-component-library */ "./node_modules/phaser-component-library/fesm5/phaser-component-library.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
                phaser_component_library__WEBPACK_IMPORTED_MODULE_5__["PhaserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                    }
                ])
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/home/home.page.html":
/*!*************************************!*\
  !*** ./src/app/home/home.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      Arina Adventures\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <phaser-component [gameConfig]=\"gameConfig\" (gameReady)=\"onGameReady($event)\"></phaser-component>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _services_not_boring_hello_scene_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../services/not-boring-hello-scene.service */ "./src/app/services/not-boring-hello-scene.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = /** @class */ (function () {
    function HomePage(notBoringHelloScreenService) {
        this.notBoringHelloScreenService = notBoringHelloScreenService;
        this.gameConfig = {
            title: src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].title,
            version: src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].version,
            type: Phaser.AUTO,
            width: window.innerWidth,
            height: window.innerHeight - 90,
            backgroundColor: "#dbcf8b",
            physics: {
                default: 'arcade',
                arcade: {
                    gravity: { y: 300 },
                    debug: false
                }
            },
        };
    }
    HomePage.prototype.onGameReady = function (game) {
        game.scene.add('Scene', this.notBoringHelloScreenService, true);
    };
    HomePage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.page.html */ "./src/app/home/home.page.html"),
            providers: [_services_not_boring_hello_scene_service__WEBPACK_IMPORTED_MODULE_2__["NotBoringHelloSceneService"]],
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
        }),
        __metadata("design:paramtypes", [_services_not_boring_hello_scene_service__WEBPACK_IMPORTED_MODULE_2__["NotBoringHelloSceneService"]])
    ], HomePage);
    return HomePage;
}());



/***/ }),

/***/ "./src/app/services/not-boring-hello-scene.service.ts":
/*!************************************************************!*\
  !*** ./src/app/services/not-boring-hello-scene.service.ts ***!
  \************************************************************/
/*! exports provided: NotBoringHelloSceneService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotBoringHelloSceneService", function() { return NotBoringHelloSceneService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotBoringHelloSceneService = /** @class */ (function (_super) {
    __extends(NotBoringHelloSceneService, _super);
    function NotBoringHelloSceneService() {
        var _this = _super.call(this, { key: 'Scene' }) || this;
        _this.gameOver = false;
        _this.score = 0;
        return _this;
    }
    NotBoringHelloSceneService.prototype.preload = function () {
        this.load.image('sky', 'assets/sky.png');
        // game.load.image('sky', 'examples/assets/skies/fog.png');
        this.load.image('ground', 'assets/platform.png');
        // game.load.image('star', 'assets/star.png');
        this.load.image('star', 'assets/obcc.png');
        //this.stage.backgroundColor = '#007236';
        this.load.image('mushroom', 'assets/sprites/mushroom2.png');
        this.load.image('phaser', 'assets/sprites/sonic_havok_sanity.png');
        this.load.image('ground', 'assets/images/ground.png');
        this.load.image('grass', 'assets/images/grass.png');
        this.load.spritesheet('dude', 'assets/dude.png', { frameWidth: 32, frameHeight: 48 });
        this.sceneWidthHalf = window.innerWidth / 2;
    };
    NotBoringHelloSceneService.prototype.create = function () {
        this.add.image(800, 600, 'sky');
        //  A simple background for our game
        this.add.sprite(800, 600, 'sky');
        // this.add.image(400, 300, 'star');
        this.add.text(50, 50, "Arina Adventures - The Mobile Game", {
            font: "32px Arial",
            fill: "#330088",
            align: "center"
        });
        this.platforms = this.physics.add.staticGroup();
        this.platforms.create(400, 568, 'ground').setScale(2).refreshBody();
        this.platforms.create(600, 400, 'ground');
        this.platforms.create(50, 250, 'ground');
        this.platforms.create(750, 220, 'ground');
        this.dude = this.physics.add.sprite(this.sceneWidthHalf, 0, 'dude');
        this.physics.add.collider(this.dude, this.platforms);
        //  We need to enable physics on the player
        // this.physics.arcade.enable(this.dude);
        this.dude.setBounce(0.2);
        this.dude.setCollideWorldBounds(true);
        this.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: 'turn',
            frames: [{ key: 'dude', frame: 4 }],
            frameRate: 20
        });
        this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
            frameRate: 10,
            repeat: -1
        });
        this.keys = this.input.keyboard.createCursorKeys();
        //  Finally some stars to collect
        this.stars = this.physics.add.group({
            key: 'star',
            repeat: 11,
            setXY: { x: 12, y: 0, stepX: 70 }
        });
        this.stars.children.iterate(function (child) {
            child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
        });
        this.physics.add.collider(this.stars, this.platforms);
        this.physics.add.overlap(this.dude, this.stars, this.collectStar, null, this);
        this.bombs = this.physics.add.group();
        this.physics.add.collider(this.bombs, this.platforms);
        this.physics.add.collider(this.dude, this.bombs, this.hitBomb, null, this);
        //  The score
        this.scoreText = this.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#000' });
        this.dude.setActive(true);
    };
    NotBoringHelloSceneService.prototype.update = function () {
        if (this.keys.left.isDown || this.isLeftTouch()) {
            this.dude.setVelocityX(-160);
            this.dude.anims.play('left', true);
        }
        else if (this.keys.right.isDown || this.isRightTouch()) {
            this.dude.setVelocityX(160);
            this.dude.anims.play('right', true);
        }
        else {
            this.dude.setVelocityX(0);
            this.dude.anims.play('turn');
        }
        if (this.keys.up.isDown && this.dude.body.touching.down) {
            this.dude.body.velocity.y = -350;
        }
    };
    NotBoringHelloSceneService.prototype.isLeftTouch = function () {
        return this.input.activePointer.isDown && this.input.activePointer.downX < this.sceneWidthHalf;
    };
    NotBoringHelloSceneService.prototype.isRightTouch = function () {
        return this.input.activePointer.isDown && this.input.activePointer.downX >= this.sceneWidthHalf;
    };
    NotBoringHelloSceneService.prototype.collectStar = function (player, star) {
        // Removes the star from the screen
        star.disableBody(true, true);
        //  Add and update the score
        this.score += 10;
        this.scoreText.text = 'Score: ' + this.score;
        if (this.stars.countActive(true) === 0) {
            this.stars.children.iterate(function (child) {
                child.enableBody(true, child.x, 0, true, true);
            });
            var x = (player.x < 400) ? Phaser.Math.Between(400, 800) : Phaser.Math.Between(0, 400);
            var bomb = this.bombs.create(x, 16, 'bomb');
            bomb.setBounce(1);
            bomb.setCollideWorldBounds(true);
            bomb.setVelocity(Phaser.Math.Between(-200, 200), 20);
        }
        if (this.score >= 100) {
            this.add.text(100, 100, "Ich liebe dich !", {
                font: "64px Arial",
                fill: "#FF0000",
                align: "center"
            });
        }
    };
    NotBoringHelloSceneService.prototype.hitBomb = function (player, bomb) {
        this.physics.pause();
        player.setTint(0xff0000);
        player.anims.play('turn');
        this.gameOver = true;
    };
    NotBoringHelloSceneService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], NotBoringHelloSceneService);
    return NotBoringHelloSceneService;
}(Phaser.Scene));



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map