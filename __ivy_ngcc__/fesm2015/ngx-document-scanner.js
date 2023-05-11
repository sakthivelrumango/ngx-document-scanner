import { __decorate, __metadata, __param, __awaiter } from 'tslib';
import { ɵɵdefineInjectable, Injectable, Input, Component, EventEmitter, Inject, Output, ViewChild, ElementRef, NgModule } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA, MatBottomSheet, MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { NgxOpenCVService, OpenCvConfigToken, NgxOpenCVModule } from 'ngx-opencv';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { AngularDraggableModule } from 'angular2-draggable';
import { CommonModule } from '@angular/common';

import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/flex-layout/extended';
import * as ɵngcc2 from 'angular2-draggable';
import * as ɵngcc3 from '@angular/common';
import * as ɵngcc4 from '@angular/material/bottom-sheet';
import * as ɵngcc5 from '@angular/flex-layout/flex';
import * as ɵngcc6 from '@angular/material/icon';
import * as ɵngcc7 from '@angular/material/list';
import * as ɵngcc8 from 'ngx-opencv';
import * as ɵngcc9 from '@angular/material/button';

function NgxFilterMenuComponent_button_1_mat_icon_6_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "mat-icon");
    ɵngcc0.ɵɵtext(1, "done");
    ɵngcc0.ɵɵelementEnd();
} }
function NgxFilterMenuComponent_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 1);
    ɵngcc0.ɵɵlistener("click", function NgxFilterMenuComponent_button_1_Template_button_click_0_listener() { const restoredCtx = ɵngcc0.ɵɵrestoreView(_r4); const option_r1 = restoredCtx.$implicit; const ctx_r3 = ɵngcc0.ɵɵnextContext(); return ɵngcc0.ɵɵresetView(ctx_r3.selectOption(option_r1.name)); });
    ɵngcc0.ɵɵelementStart(1, "mat-icon");
    ɵngcc0.ɵɵtext(2);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(3, "span", 2);
    ɵngcc0.ɵɵtext(4);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelement(5, "span", 3);
    ɵngcc0.ɵɵtemplate(6, NgxFilterMenuComponent_button_1_mat_icon_6_Template, 2, 0, "mat-icon", 4);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r1 = ctx.$implicit;
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate(option_r1.icon);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate(option_r1.text);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngIf", option_r1.name === ctx_r0.data.filter);
} }
const _c0 = ["outline"];
const _c1 = function (a0, a1) { return { width: a0, height: a1 }; };
function NgxShapeOutlineComponent_canvas_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "canvas", 1, 2);
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngStyle", ɵngcc0.ɵɵpureFunction2(1, _c1, ctx_r0.dimensions.width + "px", ctx_r0.dimensions.height + "px"));
} }
const _c2 = ["PreviewCanvas"];
const _c3 = function () { return { x: 0, y: 0 }; };
const _c4 = function () { return ["top", "left"]; };
const _c5 = function (a0) { return { x: a0, y: 0 }; };
const _c6 = function () { return ["top", "right"]; };
const _c7 = function (a1) { return { x: 0, y: a1 }; };
const _c8 = function () { return ["bottom", "left"]; };
const _c9 = function (a0, a1) { return { x: a0, y: a1 }; };
const _c10 = function () { return ["bottom", "right"]; };
function NgxDocScannerComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelement(1, "ngx-shape-outine", 8, 9)(3, "ngx-draggable-point", 10, 11)(5, "ngx-draggable-point", 10, 12)(7, "ngx-draggable-point", 10, 13)(9, "ngx-draggable-point", 10, 14);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    const _r0 = ɵngcc0.ɵɵreference(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("color", ctx_r1.options.cropToolColor)("weight", ctx_r1.options.cropToolLineWeight)("dimensions", ctx_r1.previewDimensions);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("pointOptions", ctx_r1.options.pointOptions)("startPosition", ɵngcc0.ɵɵpureFunction0(19, _c3))("limitRoles", ɵngcc0.ɵɵpureFunction0(20, _c4))("container", _r0);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("pointOptions", ctx_r1.options.pointOptions)("startPosition", ɵngcc0.ɵɵpureFunction1(21, _c5, ctx_r1.previewDimensions.width))("limitRoles", ɵngcc0.ɵɵpureFunction0(23, _c6))("container", _r0);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("pointOptions", ctx_r1.options.pointOptions)("startPosition", ɵngcc0.ɵɵpureFunction1(24, _c7, ctx_r1.previewDimensions.height))("limitRoles", ɵngcc0.ɵɵpureFunction0(26, _c8))("container", _r0);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("pointOptions", ctx_r1.options.pointOptions)("startPosition", ɵngcc0.ɵɵpureFunction2(27, _c9, ctx_r1.previewDimensions.width, ctx_r1.previewDimensions.height))("limitRoles", ɵngcc0.ɵɵpureFunction0(30, _c10))("container", _r0);
} }
function NgxDocScannerComponent_ng_container_7_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r14 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 18);
    ɵngcc0.ɵɵlistener("click", function NgxDocScannerComponent_ng_container_7_button_1_Template_button_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r14); const button_r9 = ɵngcc0.ɵɵnextContext().$implicit; return ɵngcc0.ɵɵresetView(button_r9.action()); });
    ɵngcc0.ɵɵelementStart(1, "mat-icon");
    ɵngcc0.ɵɵtext(2);
    ɵngcc0.ɵɵelementEnd()();
} if (rf & 2) {
    const button_r9 = ɵngcc0.ɵɵnextContext().$implicit;
    const ctx_r10 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("name", button_r9.name)("color", ctx_r10.options.buttonThemeColor);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate(button_r9.icon);
} }
function NgxDocScannerComponent_ng_container_7_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r18 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 19);
    ɵngcc0.ɵɵlistener("click", function NgxDocScannerComponent_ng_container_7_button_2_Template_button_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r18); const button_r9 = ɵngcc0.ɵɵnextContext().$implicit; return ɵngcc0.ɵɵresetView(button_r9.action()); });
    ɵngcc0.ɵɵelementStart(1, "mat-icon");
    ɵngcc0.ɵɵtext(2);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(3, "span");
    ɵngcc0.ɵɵtext(4);
    ɵngcc0.ɵɵelementEnd()();
} if (rf & 2) {
    const button_r9 = ɵngcc0.ɵɵnextContext().$implicit;
    const ctx_r11 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("name", button_r9.name)("color", ctx_r11.options.buttonThemeColor);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate(button_r9.icon);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate1("", button_r9.text, "}");
} }
function NgxDocScannerComponent_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0, 15);
    ɵngcc0.ɵɵtemplate(1, NgxDocScannerComponent_ng_container_7_button_1_Template, 3, 3, "button", 16);
    ɵngcc0.ɵɵtemplate(2, NgxDocScannerComponent_ng_container_7_button_2_Template, 5, 4, "button", 17);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const button_r9 = ctx.$implicit;
    ɵngcc0.ɵɵproperty("ngSwitch", button_r9.type);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngSwitchCase", "fab");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngSwitchCase", "button");
} }
const _c11 = function (a0) { return { "max-width": a0 }; };
let LimitsService = class LimitsService {
    constructor() {
        this.limitDirections = ['left', 'right', 'top', 'bottom'];
        /**
         * stores the crop limits limits
         */
        this._limits = {
            top: 0,
            bottom: 0,
            right: 0,
            left: 0
        };
        /**
         * stores the array of the draggable points displayed on the crop area
         */
        this._points = [];
        // *********** //
        // Observables //
        // *********** //
        this.positions = new BehaviorSubject(Array.from(this._points));
        this.repositionEvent = new BehaviorSubject([]);
        this.limits = new BehaviorSubject(this._limits);
        this.paneDimensions = new BehaviorSubject({ width: 0, height: 0 });
    }
    /**
     * set privew pane dimensions
     */
    setPaneDimensions(dimensions) {
        return new Promise((resolve, reject) => {
            this._paneDimensions = dimensions;
            this.paneDimensions.next(dimensions);
            resolve();
        });
    }
    /**
     * repositions points externally
     */
    repositionPoints(positions) {
        this._points = positions;
        positions.forEach(position => {
            this.positionChange(position);
        });
        this.repositionEvent.next(positions);
    }
    /**
     * updates limits and point positions and calls next on the observables
     * @param positionChangeData - position change event data
     */
    positionChange(positionChangeData) {
        // update positions according to current position change
        this.updatePosition(positionChangeData);
        // for each direction:
        // 1. filter the _points that have a role as the direction's limit
        // 2. for top and left find max x | y values, and min for right and bottom
        this.limitDirections.forEach(direction => {
            const relevantPoints = this._points.filter(point => {
                return point.roles.includes(direction);
            })
                .map((point) => {
                return point[this.getDirectionAxis(direction)];
            });
            let limit;
            if (direction === 'top' || direction === 'left') {
                limit = Math.max(...relevantPoints);
            }
            if (direction === 'right' || direction === 'bottom') {
                limit = Math.min(...relevantPoints);
            }
            this._limits[direction] = limit;
        });
        this.limits.next(this._limits);
        this.positions.next(Array.from(this._points));
    }
    /**
     * updates the position of the point
     * @param positionChange - position change event data
     */
    updatePosition(positionChange) {
        // finds the current position of the point by it's roles, than splices it for the new position or pushes it if it's not yet in the array
        const index = this._points.findIndex(point => {
            return this.compareArray(positionChange.roles, point.roles);
        });
        if (index === -1) {
            this._points.push(positionChange);
        }
        else {
            this._points.splice(index, 1, positionChange);
        }
    }
    /**
     * check if a position change event exceeds the limits
     * @param positionChange - position change event data
     * @returns LimitException0
     */
    exceedsLimit(positionChange) {
        const pointLimits = this.limitDirections.filter(direction => {
            return !positionChange.roles.includes(direction);
        });
        const limitException = {
            exceeds: false,
            resetCoefficients: {
                x: 0,
                y: 0
            },
            resetCoordinates: {
                x: positionChange.x,
                y: positionChange.y
            }
        };
        // limit directions are the opposite sides of the point's roles
        pointLimits.forEach(direction => {
            const directionAxis = this.getDirectionAxis(direction);
            if (direction === 'top' || direction === 'left') {
                if (positionChange[directionAxis] < this._limits[direction]) {
                    limitException.resetCoefficients[directionAxis] = 1;
                    limitException.resetCoordinates[directionAxis] = this._limits[direction];
                }
            }
            else if (direction === 'right' || direction === 'bottom') {
                if (positionChange[directionAxis] > this._limits[direction]) {
                    limitException.resetCoefficients[directionAxis] = -1;
                    limitException.resetCoordinates[directionAxis] = this._limits[direction];
                }
            }
        });
        if (limitException.resetCoefficients.x !== 0 || limitException.resetCoefficients.y !== 0) {
            limitException.exceeds = true;
        }
        return limitException;
    }
    /**
     * rotate crop tool points clockwise
     * @param resizeRatios - ratio between the new dimensions and the previous
     * @param initialPreviewDimensions - preview pane dimensions before rotation
     * @param initialPositions - current positions before rotation
     */
    rotateClockwise(resizeRatios, initialPreviewDimensions, initialPositions) {
        // convert positions to ratio between position to initial pane dimension
        initialPositions = initialPositions.map(point => {
            return new PositionChangeData({
                x: point.x / initialPreviewDimensions.width,
                y: point.y / initialPreviewDimensions.height,
            }, point.roles);
        });
        this.repositionPoints(initialPositions.map(point => {
            return this.rotateCornerClockwise(point);
        }));
    }
    /**
     * returns the corner positions after a 90 degrees clockwise rotation
     */
    rotateCornerClockwise(corner) {
        const rotated = {
            x: this._paneDimensions.width * (1 - corner.y),
            y: this._paneDimensions.height * corner.x,
            roles: []
        };
        // rotates corner according to order
        const order = [
            ['bottom', 'left'],
            ['top', 'left'],
            ['top', 'right'],
            ['bottom', 'right'],
            ['bottom', 'left']
        ];
        rotated.roles = order[order.findIndex(roles => {
            return this.compareArray(roles, corner.roles);
        }) + 1];
        return rotated;
    }
    /**
     * checks if two array contain the same values
     * @param array1 - array 1
     * @param array2 - array 2
     * @returns boolean
     */
    compareArray(array1, array2) {
        return array1.every((element) => {
            return array2.includes(element);
        }) && array1.length === array2.length;
    }
    getDirectionAxis(direction) {
        return {
            left: 'x',
            right: 'x',
            top: 'y',
            bottom: 'y'
        }[direction];
    }
};
LimitsService.ɵfac = function LimitsService_Factory(t) { return new (t || LimitsService)(); };
LimitsService.ɵprov = ɵɵdefineInjectable({ factory: function LimitsService_Factory() { return new LimitsService(); }, token: LimitsService, providedIn: "root" });
LimitsService = __decorate([ __metadata("design:paramtypes", [])
], LimitsService);
class PositionChangeData {
    constructor(position, roles) {
        this.x = position.x;
        this.y = position.y;
        this.roles = roles;
    }
}

let NgxDraggablePointComponent = class NgxDraggablePointComponent {
    constructor(limitsService) {
        this.limitsService = limitsService;
        this.width = 10;
        this.height = 10;
        this.color = '#3cabe2';
        this.shape = 'rect';
        this.pointOptions = 'rect';
        this.position = {
            x: 0,
            y: 0
        };
    }
    ngAfterViewInit() {
        Object.keys(this.pointOptions).forEach(key => {
            this[key] = this.pointOptions[key];
        });
        // subscribe to pane dimensions changes
        this.limitsService.paneDimensions.subscribe(dimensions => {
            if (dimensions.width > 0 && dimensions.width > 0) {
                this._paneDimensions = {
                    width: dimensions.width,
                    height: dimensions.height
                };
                this.position = this.getInitialPosition(dimensions);
                this.limitsService.positionChange(new PositionChangeData(this.position, this.limitRoles));
            }
        });
        // subscribe to external reposition events
        this.limitsService.repositionEvent.subscribe(positions => {
            if (positions.length > 0) {
                this.externalReposition(positions);
            }
        });
    }
    /**
     * returns a css style object for the point
     */
    pointStyle() {
        return {
            width: this.width + 'px',
            height: this.height + 'px',
            'background-color': this.color,
            'border-radius': this.shape === 'circle' ? '100%' : 0,
            position: 'absolute'
        };
    }
    /**
     * registers a position change on the limits service, and adjusts position if necessary
     * @param position - the current position of the point
     */
    positionChange(position) {
        const positionChangeData = new PositionChangeData(position, this.limitRoles);
        const limitException = this.limitsService.exceedsLimit(positionChangeData);
        if (limitException.exceeds) {
            // if exceeds limits, reposition
            this.resetPosition = limitException.resetCoordinates;
        }
        else {
            this.limitsService.positionChange(positionChangeData);
            this._currentPosition = position;
        }
    }
    /**
     * adjusts the position of the point after a limit exception
     */
    adjustPosition(limitException) {
        const newPosition = {
            x: 0,
            y: 0
        };
        Object.keys(this.startPosition).forEach(axis => {
            newPosition[axis] = limitException.resetCoordinates[axis] + limitException.resetCoefficients[axis];
        });
        this.position = newPosition;
        this.limitsService.positionChange(new PositionChangeData(this.position, this.limitRoles));
    }
    /**
     * called on movement end, checks if last position exceeded the limits ad adjusts
     */
    movementEnd(position) {
        let positionChangeData = new PositionChangeData(position, this.limitRoles);
        const limitException = this.limitsService.exceedsLimit(positionChangeData);
        if (limitException.exceeds) {
            this.resetPosition = limitException.resetCoordinates;
            if (limitException.exceeds) {
                this.adjustPosition(limitException);
                positionChangeData = new PositionChangeData(this.position, this.limitRoles);
                this.limitsService.updatePosition(positionChangeData);
            }
        }
    }
    /**
     * calculates the initial positions of the point by it's roles
     * @param dimensions - dimensions of the pane in which the point is located
     */
    getInitialPosition(dimensions) {
        return {
            x: this.limitRoles.includes('left') ? 0 : dimensions.width - this.width / 2,
            y: this.limitRoles.includes('top') ? 0 : dimensions.height - this.height / 2
        };
    }
    /**
     * repositions the point after an external reposition event
     * @param positions - an array of all points on the pane
     */
    externalReposition(positions) {
        positions.forEach(position => {
            if (this.limitsService.compareArray(this.limitRoles, position.roles)) {
                position = this.enforcePaneLimits(position);
                this.position = {
                    x: position.x,
                    y: position.y
                };
            }
        });
    }
    /**
     * returns a new point position if the movement exceeded the pane limit
     */
    enforcePaneLimits(position) {
        if (this._paneDimensions.width === 0 || this._paneDimensions.height === 0) {
            return position;
        }
        else {
            if (position.x > this._paneDimensions.width) {
                position.x = this._paneDimensions.width;
            }
            if (position.x < 0) {
                position.x = 1;
            }
            if (position.y > this._paneDimensions.height) {
                position.y = this._paneDimensions.height;
            }
            if (position.y < 0) {
                position.y = 1;
            }
        }
        return position;
    }
};
NgxDraggablePointComponent.ɵfac = function NgxDraggablePointComponent_Factory(t) { return new (t || NgxDraggablePointComponent)(ɵngcc0.ɵɵdirectiveInject(LimitsService)); };
NgxDraggablePointComponent.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: NgxDraggablePointComponent, selectors: [["ngx-draggable-point"]], inputs: { width: "width", height: "height", color: "color", shape: "shape", pointOptions: "pointOptions", _currentPosition: "_currentPosition", limitRoles: "limitRoles", startPosition: "startPosition", container: "container" }, decls: 2, vars: 4, consts: [["ngDraggable", "draggable", 2, "z-index", "1000", 3, "ngStyle", "position", "bounds", "inBounds", "movingOffset", "endOffset"], ["point", ""]], template: function NgxDraggablePointComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0, 1);
        ɵngcc0.ɵɵlistener("movingOffset", function NgxDraggablePointComponent_Template_div_movingOffset_0_listener($event) { return ctx.positionChange($event); })("endOffset", function NgxDraggablePointComponent_Template_div_endOffset_0_listener($event) { return ctx.movementEnd($event); });
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngStyle", ctx.pointStyle())("position", ctx.position)("bounds", ctx.container)("inBounds", true);
    } }, dependencies: [ɵngcc1.DefaultStyleDirective, ɵngcc2.AngularDraggableDirective, ɵngcc3.NgStyle], encapsulation: 2 });
NgxDraggablePointComponent.ctorParameters = () => [
    { type: LimitsService }
];
__decorate([
    Input(),
    __metadata("design:type", Object)
], NgxDraggablePointComponent.prototype, "width", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], NgxDraggablePointComponent.prototype, "height", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], NgxDraggablePointComponent.prototype, "color", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], NgxDraggablePointComponent.prototype, "shape", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], NgxDraggablePointComponent.prototype, "pointOptions", void 0);
__decorate([
    Input(),
    __metadata("design:type", Array)
], NgxDraggablePointComponent.prototype, "limitRoles", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], NgxDraggablePointComponent.prototype, "startPosition", void 0);
__decorate([
    Input(),
    __metadata("design:type", HTMLElement)
], NgxDraggablePointComponent.prototype, "container", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], NgxDraggablePointComponent.prototype, "_currentPosition", void 0);
NgxDraggablePointComponent = __decorate([ __metadata("design:paramtypes", [LimitsService])
], NgxDraggablePointComponent);

let NgxFilterMenuComponent = class NgxFilterMenuComponent {
    constructor(bottomSheetRef, data) {
        this.bottomSheetRef = bottomSheetRef;
        this.data = data;
        this.filterOptions = [
            {
                name: 'default',
                icon: 'filter_b_and_w',
                action: (filter) => {
                    this.filterSelected.emit(filter);
                },
                text: 'B&W'
            },
            {
                name: 'bw2',
                icon: 'filter_b_and_w',
                action: (filter) => {
                    this.filterSelected.emit(filter);
                },
                text: 'B&W 2'
            },
            {
                name: 'bw3',
                icon: 'blur_on',
                action: (filter) => {
                    this.filterSelected.emit(filter);
                },
                text: 'B&W 3'
            },
            {
                name: 'magic_color',
                icon: 'filter_vintage',
                action: (filter) => {
                    this.filterSelected.emit(filter);
                },
                text: 'Magic Color'
            },
            {
                name: 'original',
                icon: 'crop_original',
                action: (filter) => {
                    this.filterSelected.emit(filter);
                },
                text: 'Original'
            },
        ];
        this.filterSelected = new EventEmitter();
    }
    selectOption(optionName) {
        this.data.filter = optionName;
        this.bottomSheetRef.dismiss();
    }
};
NgxFilterMenuComponent.ɵfac = function NgxFilterMenuComponent_Factory(t) { return new (t || NgxFilterMenuComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc4.MatBottomSheetRef), ɵngcc0.ɵɵdirectiveInject(MAT_BOTTOM_SHEET_DATA)); };
NgxFilterMenuComponent.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: NgxFilterMenuComponent, selectors: [["ngx-filter-menu"]], outputs: { filterSelected: "filterSelected" }, decls: 2, vars: 1, consts: [["mat-list-item", "", 3, "click", 4, "ngFor", "ngForOf"], ["mat-list-item", "", 3, "click"], ["fxFlex", "100", 2, "text-align", "start", "margin", "5px"], ["fxFlex", "100"], [4, "ngIf"]], template: function NgxFilterMenuComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "mat-action-list");
        ɵngcc0.ɵɵtemplate(1, NgxFilterMenuComponent_button_1_Template, 7, 3, "button", 0);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.filterOptions);
    } }, dependencies: [ɵngcc5.DefaultFlexDirective, ɵngcc6.MatIcon, ɵngcc7.MatList, ɵngcc7.MatListItem, ɵngcc3.NgForOf, ɵngcc3.NgIf], encapsulation: 2 });
NgxFilterMenuComponent.ctorParameters = () => [
    { type: MatBottomSheetRef },
    { type: undefined, decorators: [{ type: Inject, args: [MAT_BOTTOM_SHEET_DATA,] }] }
];
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], NgxFilterMenuComponent.prototype, "filterSelected", void 0);
NgxFilterMenuComponent = __decorate([ __param(1, Inject(MAT_BOTTOM_SHEET_DATA)),
    __metadata("design:paramtypes", [MatBottomSheetRef, Object])
], NgxFilterMenuComponent);

let NgxShapeOutlineComponent = class NgxShapeOutlineComponent {
    constructor(limitsService) {
        this.limitsService = limitsService;
        this.color = '#3cabe2';
    }
    ngAfterViewInit() {
        // init drawing canvas dimensions
        this.canvas.nativeElement.width = this.dimensions.width;
        this.canvas.nativeElement.height = this.dimensions.height;
        this.limitsService.positions.subscribe(positions => {
            if (positions.length === 4) {
                this._points = positions;
                this.sortPoints();
                this.clearCanvas();
                this.drawShape();
            }
        });
        // subscribe to changes in the pane's dimensions
        this.limitsService.paneDimensions.subscribe(dimensions => {
            this.clearCanvas();
            this.canvas.nativeElement.width = dimensions.width;
            this.canvas.nativeElement.height = dimensions.height;
        });
        // subscribe to reposition events
        this.limitsService.repositionEvent.subscribe(positions => {
            if (positions.length === 4) {
                setTimeout(() => {
                    this.clearCanvas();
                    this.sortPoints();
                    this.drawShape();
                }, 10);
            }
        });
    }
    /**
     * clears the shape canvas
     */
    clearCanvas() {
        const canvas = this.canvas.nativeElement;
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, this.dimensions.width, this.dimensions.height);
    }
    /**
     * sorts the array of points according to their clockwise alignment
     */
    sortPoints() {
        const _points = Array.from(this._points);
        const sortedPoints = [];
        const sortOrder = {
            vertical: ['top', 'top', 'bottom', 'bottom'],
            horizontal: ['left', 'right', 'right', 'left']
        };
        for (let i = 0; i < 4; i++) {
            const roles = Array.from([sortOrder.vertical[i], sortOrder.horizontal[i]]);
            sortedPoints.push(_points.filter((point) => {
                return this.limitsService.compareArray(point.roles, roles);
            })[0]);
        }
        this._sortedPoints = sortedPoints;
    }
    /**
     * draws a line between the points according to their order
     */
    drawShape() {
        const canvas = this.canvas.nativeElement;
        const ctx = canvas.getContext('2d');
        ctx.lineWidth = this.weight;
        ctx.strokeStyle = this.color;
        ctx.beginPath();
        this._sortedPoints.forEach((point, index) => {
            if (index === 0) {
                ctx.moveTo(point.x, point.y);
            }
            if (index !== this._sortedPoints.length - 1) {
                const nextPoint = this._sortedPoints[index + 1];
                ctx.lineTo(nextPoint.x, nextPoint.y);
            }
            else {
                ctx.closePath();
            }
        });
        ctx.stroke();
    }
};
NgxShapeOutlineComponent.ɵfac = function NgxShapeOutlineComponent_Factory(t) { return new (t || NgxShapeOutlineComponent)(ɵngcc0.ɵɵdirectiveInject(LimitsService)); };
NgxShapeOutlineComponent.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: NgxShapeOutlineComponent, selectors: [["ngx-shape-outine"]], viewQuery: function NgxShapeOutlineComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c0, 5);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.canvas = _t.first);
    } }, inputs: { color: "color", weight: "weight", dimensions: "dimensions" }, decls: 1, vars: 1, consts: [["style", "position: absolute; z-index: 1000", 3, "ngStyle", 4, "ngIf"], [2, "position", "absolute", "z-index", "1000", 3, "ngStyle"], ["outline", ""]], template: function NgxShapeOutlineComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, NgxShapeOutlineComponent_canvas_0_Template, 2, 4, "canvas", 0);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngIf", ctx.dimensions);
    } }, dependencies: [ɵngcc1.DefaultStyleDirective, ɵngcc3.NgIf, ɵngcc3.NgStyle], encapsulation: 2 });
NgxShapeOutlineComponent.ctorParameters = () => [
    { type: LimitsService }
];
__decorate([
    Input(),
    __metadata("design:type", Object)
], NgxShapeOutlineComponent.prototype, "color", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], NgxShapeOutlineComponent.prototype, "weight", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], NgxShapeOutlineComponent.prototype, "dimensions", void 0);
__decorate([
    ViewChild('outline'),
    __metadata("design:type", Object)
], NgxShapeOutlineComponent.prototype, "canvas", void 0);
NgxShapeOutlineComponent = __decorate([ __metadata("design:paramtypes", [LimitsService])
], NgxShapeOutlineComponent);

let NgxDocScannerComponent = class NgxDocScannerComponent {
    constructor(ngxOpenCv, limitsService, bottomSheet) {
        this.ngxOpenCv = ngxOpenCv;
        this.limitsService = limitsService;
        this.bottomSheet = bottomSheet;
        // ************* //
        // EDITOR CONFIG //
        // ************* //
        /**
         * an array of action buttons displayed on the editor screen
         */
        this.editorButtons = [
            {
                name: 'exit',
                action: () => {
                    this.exitEditor.emit('canceled');
                },
                icon: 'arrow_back',
                type: 'fab',
                mode: 'crop'
            },
            {
                name: 'rotate',
                action: this.rotateImage.bind(this),
                icon: 'rotate_right',
                type: 'fab',
                mode: 'crop'
            },
            {
                name: 'done_crop',
                action: () => __awaiter(this, void 0, void 0, function* () {
                    this.mode = 'color';
                    yield this.transform();
                    yield this.applyFilter(true);
                }),
                icon: 'done',
                type: 'fab',
                mode: 'crop'
            },
            {
                name: 'back',
                action: () => {
                    this.mode = 'crop';
                    this.loadFile(this.originalImage);
                },
                icon: 'arrow_back',
                type: 'fab',
                mode: 'color'
            },
            {
                name: 'filter',
                action: () => {
                    return this.chooseFilters();
                },
                icon: 'photo_filter',
                type: 'fab',
                mode: 'color'
            },
            {
                name: 'upload',
                action: this.exportImage.bind(this),
                icon: 'cloud_upload',
                type: 'fab',
                mode: 'color'
            },
        ];
        /**
         * true after the image is loaded and preview is displayed
         */
        this.imageLoaded = false;
        /**
         * editor mode
         */
        this.mode = 'crop';
        /**
         * filter selected by the user, returned by the filter selector bottom sheet
         */
        this.selectedFilter = 'default';
        /**
         * image dimensions
         */
        this.imageDimensions = {
            width: 0,
            height: 0
        };
        // ************** //
        // EVENT EMITTERS //
        // ************** //
        /**
         * optional binding to the exit button of the editor
         */
        this.exitEditor = new EventEmitter();
        /**
         * fires on edit completion
         */
        this.editResult = new EventEmitter();
        /**
         * emits errors, can be linked to an error handler of choice
         */
        this.error = new EventEmitter();
        /**
         * emits the loading status of the cv module.
         */
        this.ready = new EventEmitter();
        /**
         * emits true when processing is done, false when completed
         */
        this.processing = new EventEmitter();
        this.screenDimensions = {
            width: window.innerWidth,
            height: window.innerHeight
        };
        // subscribe to status of cv module
        this.ngxOpenCv.cvState.subscribe((cvState) => {
            this.cvState = cvState.state;
            this.ready.emit(cvState.ready);
            if (cvState.error) {
                this.error.emit(new Error('error loading cv'));
            }
            else if (cvState.loading) {
                this.processing.emit(true);
            }
            else if (cvState.ready) {
                this.processing.emit(false);
            }
        });
        // subscribe to positions of crop tool
        this.limitsService.positions.subscribe(points => {
            this.points = points;
        });
    }
    /**
     * returns an array of buttons according to the editor mode
     */
    get displayedButtons() {
        return this.editorButtons.filter(button => {
            return button.mode === this.mode;
        });
    }
    // ****** //
    // INPUTS //
    // ****** //
    /**
     * set image for editing
     * @param file - file from form input
     */
    set file(file) {
        if (file) {
            setTimeout(() => {
                this.processing.emit(true);
            }, 5);
            this.imageLoaded = false;
            this.originalImage = file;
            this.ngxOpenCv.cvState.subscribe((cvState) => __awaiter(this, void 0, void 0, function* () {
                if (cvState.ready) {
                    // read file to image & canvas
                    yield this.loadFile(file);
                    this.processing.emit(false);
                }
            }));
        }
    }
    ngOnInit() {
        // set options from config object
        this.options = new ImageEditorConfig(this.config);
        // set export image icon
        this.editorButtons.forEach(button => {
            if (button.name === 'upload') {
                button.icon = this.options.exportImageIcon;
            }
        });
        this.maxPreviewWidth = this.options.maxPreviewWidth;
        this.editorStyle = this.options.editorStyle;
    }
    // ***************************** //
    // editor action buttons methods //
    // ***************************** //
    /**
     * emits the exitEditor event
     */
    exit() {
        this.exitEditor.emit('canceled');
    }
    /**
     * applies the selected filter, and when done emits the resulted image
     */
    exportImage() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.applyFilter(false);
            if (this.options.maxImageDimensions) {
                this.resize(this.editedImage)
                    .then(resizeResult => {
                    resizeResult.toBlob((blob) => {
                        this.editResult.emit(blob);
                        this.processing.emit(false);
                    }, this.originalImage.type);
                });
            }
            else {
                this.editedImage.toBlob((blob) => {
                    this.editResult.emit(blob);
                    this.processing.emit(false);
                }, this.originalImage.type);
            }
        });
    }
    /**
     * open the bottom sheet for selecting filters, and applies the selected filter in preview mode
     */
    chooseFilters() {
        const data = { filter: this.selectedFilter };
        const bottomSheetRef = this.bottomSheet.open(NgxFilterMenuComponent, {
            data: data
        });
        bottomSheetRef.afterDismissed().subscribe(() => {
            this.selectedFilter = data.filter;
            this.applyFilter(true);
        });
    }
    // *************************** //
    // File Input & Output Methods //
    // *************************** //
    /**
     * load image from input field
     */
    loadFile(file) {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            this.processing.emit(true);
            try {
                yield this.readImage(file);
            }
            catch (err) {
                console.error(err);
                this.error.emit(new Error(err));
            }
            try {
                yield this.showPreview();
            }
            catch (err) {
                console.error(err);
                this.error.emit(new Error(err));
            }
            // set pane limits
            // show points
            this.imageLoaded = true;
            yield this.limitsService.setPaneDimensions({ width: this.previewDimensions.width, height: this.previewDimensions.height });
            setTimeout(() => __awaiter(this, void 0, void 0, function* () {
                yield this.detectContours();
                this.processing.emit(false);
                resolve();
            }), 15);
        }));
    }
    /**
     * read image from File object
     */
    readImage(file) {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            let imageSrc;
            try {
                imageSrc = yield readFile();
            }
            catch (err) {
                reject(err);
            }
            const img = new Image();
            img.onload = () => __awaiter(this, void 0, void 0, function* () {
                // set edited image canvas and dimensions
                this.editedImage = document.createElement('canvas');
                this.editedImage.width = img.width;
                this.editedImage.height = img.height;
                const ctx = this.editedImage.getContext('2d');
                ctx.drawImage(img, 0, 0);
                // resize image if larger than max image size
                const width = img.width > img.height ? img.height : img.width;
                if (width > this.options.maxImageDimensions.width) {
                    this.editedImage = yield this.resize(this.editedImage);
                }
                this.imageDimensions.width = this.editedImage.width;
                this.imageDimensions.height = this.editedImage.height;
                this.setPreviewPaneDimensions(this.editedImage);
                resolve();
            });
            img.src = imageSrc;
        }));
        /**
         * read file from input field
         */
        function readFile() {
            return new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.onload = (event) => {
                    resolve(reader.result);
                };
                reader.onerror = (err) => {
                    reject(err);
                };
                reader.readAsDataURL(file);
            });
        }
    }
    // ************************ //
    // Image Processing Methods //
    // ************************ //
    /**
     * rotate image 90 degrees
     */
    rotateImage() {
        return new Promise((resolve, reject) => {
            this.processing.emit(true);
            setTimeout(() => {
                const dst = cv.imread(this.editedImage);
                // const dst = new cv.Mat();
                cv.transpose(dst, dst);
                cv.flip(dst, dst, 1);
                cv.imshow(this.editedImage, dst);
                // src.delete();
                dst.delete();
                // save current preview dimensions and positions
                const initialPreviewDimensions = { width: 0, height: 0 };
                Object.assign(initialPreviewDimensions, this.previewDimensions);
                const initialPositions = Array.from(this.points);
                // get new dimensions
                // set new preview pane dimensions
                this.setPreviewPaneDimensions(this.editedImage);
                // get preview pane resize ratio
                const previewResizeRatios = {
                    width: this.previewDimensions.width / initialPreviewDimensions.width,
                    height: this.previewDimensions.height / initialPreviewDimensions.height
                };
                // set new preview pane dimensions
                this.limitsService.rotateClockwise(previewResizeRatios, initialPreviewDimensions, initialPositions);
                this.showPreview().then(() => {
                    this.processing.emit(false);
                    resolve();
                });
            }, 30);
        });
    }
    /**
     * detects the contours of the document and
     **/
    detectContours() {
        return new Promise((resolve, reject) => {
            this.processing.emit(true);
            setTimeout(() => {
                // load the image and compute the ratio of the old height to the new height, clone it, and resize it
                const processingResizeRatio = 0.5;
                const dst = cv.imread(this.editedImage);
                const dsize = new cv.Size(dst.rows * processingResizeRatio, dst.cols * processingResizeRatio);
                const ksize = new cv.Size(5, 5);
                // convert the image to grayscale, blur it, and find edges in the image
                cv.cvtColor(dst, dst, cv.COLOR_RGBA2GRAY, 0);
                cv.GaussianBlur(dst, dst, ksize, 0, 0, cv.BORDER_DEFAULT);
                cv.Canny(dst, dst, 75, 200);
                // find contours
                cv.threshold(dst, dst, 120, 200, cv.THRESH_BINARY);
                const contours = new cv.MatVector();
                const hierarchy = new cv.Mat();
                cv.findContours(dst, contours, hierarchy, cv.RETR_CCOMP, cv.CHAIN_APPROX_SIMPLE);
                const rect = cv.boundingRect(dst);
                dst.delete();
                hierarchy.delete();
                contours.delete();
                // transform the rectangle into a set of points
                Object.keys(rect).forEach(key => {
                    rect[key] = rect[key] * this.imageResizeRatio;
                });
                const contourCoordinates = [
                    new PositionChangeData({ x: rect.x, y: rect.y }, ['left', 'top']),
                    new PositionChangeData({ x: rect.x + rect.width, y: rect.y }, ['right', 'top']),
                    new PositionChangeData({ x: rect.x + rect.width, y: rect.y + rect.height }, ['right', 'bottom']),
                    new PositionChangeData({ x: rect.x, y: rect.y + rect.height }, ['left', 'bottom']),
                ];
                this.limitsService.repositionPoints(contourCoordinates);
                // this.processing.emit(false);
                resolve();
            }, 30);
        });
    }
    /**
     * apply perspective transform
     */
    transform() {
        return new Promise((resolve, reject) => {
            this.processing.emit(true);
            setTimeout(() => {
                const dst = cv.imread(this.editedImage);
                // create source coordinates matrix
                const sourceCoordinates = [
                    this.getPoint(['top', 'left']),
                    this.getPoint(['top', 'right']),
                    this.getPoint(['bottom', 'right']),
                    this.getPoint(['bottom', 'left'])
                ].map(point => {
                    return [point.x / this.imageResizeRatio, point.y / this.imageResizeRatio];
                });
                // get max width
                const bottomWidth = this.getPoint(['bottom', 'right']).x - this.getPoint(['bottom', 'left']).x;
                const topWidth = this.getPoint(['top', 'right']).x - this.getPoint(['top', 'left']).x;
                const maxWidth = Math.max(bottomWidth, topWidth) / this.imageResizeRatio;
                // get max height
                const leftHeight = this.getPoint(['bottom', 'left']).y - this.getPoint(['top', 'left']).y;
                const rightHeight = this.getPoint(['bottom', 'right']).y - this.getPoint(['top', 'right']).y;
                const maxHeight = Math.max(leftHeight, rightHeight) / this.imageResizeRatio;
                // create dest coordinates matrix
                const destCoordinates = [
                    [0, 0],
                    [maxWidth - 1, 0],
                    [maxWidth - 1, maxHeight - 1],
                    [0, maxHeight - 1]
                ];
                // convert to open cv matrix objects
                const Ms = cv.matFromArray(4, 1, cv.CV_32FC2, [].concat(...sourceCoordinates));
                const Md = cv.matFromArray(4, 1, cv.CV_32FC2, [].concat(...destCoordinates));
                const transformMatrix = cv.getPerspectiveTransform(Ms, Md);
                // set new image size
                const dsize = new cv.Size(maxWidth, maxHeight);
                // perform warp
                cv.warpPerspective(dst, dst, transformMatrix, dsize, cv.INTER_LINEAR, cv.BORDER_CONSTANT, new cv.Scalar());
                cv.imshow(this.editedImage, dst);
                dst.delete();
                Ms.delete();
                Md.delete();
                transformMatrix.delete();
                this.setPreviewPaneDimensions(this.editedImage);
                this.showPreview().then(() => {
                    this.processing.emit(false);
                    resolve();
                });
            }, 30);
        });
    }
    /**
     * applies the selected filter to the image
     * @param preview - when true, will not apply the filter to the edited image but only display a preview.
     * when false, will apply to editedImage
     */
    applyFilter(preview) {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            this.processing.emit(true);
            // default options
            const options = {
                blur: false,
                th: true,
                thMode: cv.ADAPTIVE_THRESH_MEAN_C,
                thMeanCorrection: 10,
                thBlockSize: 25,
                thMax: 255,
                grayScale: true,
            };
            const dst = cv.imread(this.editedImage);
            switch (this.selectedFilter) {
                case 'original':
                    options.th = false;
                    options.grayScale = false;
                    options.blur = false;
                    break;
                case 'magic_color':
                    options.grayScale = false;
                    break;
                case 'bw2':
                    options.thMode = cv.ADAPTIVE_THRESH_GAUSSIAN_C;
                    options.thMeanCorrection = 15;
                    options.thBlockSize = 15;
                    break;
                case 'bw3':
                    options.blur = true;
                    options.thMeanCorrection = 15;
                    break;
            }
            setTimeout(() => __awaiter(this, void 0, void 0, function* () {
                if (options.grayScale) {
                    cv.cvtColor(dst, dst, cv.COLOR_RGBA2GRAY, 0);
                }
                if (options.blur) {
                    const ksize = new cv.Size(5, 5);
                    cv.GaussianBlur(dst, dst, ksize, 0, 0, cv.BORDER_DEFAULT);
                }
                if (options.th) {
                    if (options.grayScale) {
                        cv.adaptiveThreshold(dst, dst, options.thMax, options.thMode, cv.THRESH_BINARY, options.thBlockSize, options.thMeanCorrection);
                    }
                    else {
                        dst.convertTo(dst, -1, 1, 60);
                        cv.threshold(dst, dst, 170, 255, cv.THRESH_BINARY);
                    }
                }
                if (!preview) {
                    cv.imshow(this.editedImage, dst);
                }
                yield this.showPreview(dst);
                this.processing.emit(false);
                resolve();
            }), 30);
        }));
    }
    /**
     * resize an image to fit constraints set in options.maxImageDimensions
     */
    resize(image) {
        return new Promise((resolve, reject) => {
            this.processing.emit(true);
            setTimeout(() => {
                const src = cv.imread(image);
                const currentDimensions = {
                    width: src.size().width,
                    height: src.size().height
                };
                const resizeDimensions = {
                    width: 0,
                    height: 0
                };
                if (currentDimensions.width > this.options.maxImageDimensions.width) {
                    resizeDimensions.width = this.options.maxImageDimensions.width;
                    resizeDimensions.height = this.options.maxImageDimensions.width / currentDimensions.width * currentDimensions.height;
                    if (resizeDimensions.height > this.options.maxImageDimensions.height) {
                        resizeDimensions.height = this.options.maxImageDimensions.height;
                        resizeDimensions.width = this.options.maxImageDimensions.height / currentDimensions.height * currentDimensions.width;
                    }
                    const dsize = new cv.Size(Math.floor(resizeDimensions.width), Math.floor(resizeDimensions.height));
                    cv.resize(src, src, dsize, 0, 0, cv.INTER_AREA);
                    const resizeResult = document.createElement('canvas');
                    cv.imshow(resizeResult, src);
                    src.delete();
                    this.processing.emit(false);
                    resolve(resizeResult);
                }
                else {
                    this.processing.emit(false);
                    resolve(image);
                }
            }, 30);
        });
    }
    /**
     * display a preview of the image on the preview canvas
     */
    showPreview(image) {
        return new Promise((resolve, reject) => {
            let src;
            if (image) {
                src = image;
            }
            else {
                src = cv.imread(this.editedImage);
            }
            const dst = new cv.Mat();
            const dsize = new cv.Size(0, 0);
            cv.resize(src, dst, dsize, this.imageResizeRatio, this.imageResizeRatio, cv.INTER_AREA);
            cv.imshow(this.previewCanvas.nativeElement, dst);
            src.delete();
            dst.delete();
            resolve();
        });
    }
    // *************** //
    // Utility Methods //
    // *************** //
    /**
     * set preview canvas dimensions according to the canvas element of the original image
     */
    setPreviewPaneDimensions(img) {
        // set preview pane dimensions
        this.previewDimensions = this.calculateDimensions(img.width, img.height);
        this.previewCanvas.nativeElement.width = this.previewDimensions.width;
        this.previewCanvas.nativeElement.height = this.previewDimensions.height;
        this.imageResizeRatio = this.previewDimensions.width / img.width;
        this.imageDivStyle = {
            width: this.previewDimensions.width + this.options.cropToolDimensions.width + 'px',
            height: this.previewDimensions.height + this.options.cropToolDimensions.height + 'px',
            'margin-left': `calc((100% - ${this.previewDimensions.width + 10}px) / 2 + ${this.options.cropToolDimensions.width / 2}px)`,
            'margin-right': `calc((100% - ${this.previewDimensions.width + 10}px) / 2 - ${this.options.cropToolDimensions.width / 2}px)`,
        };
        this.limitsService.setPaneDimensions({ width: this.previewDimensions.width, height: this.previewDimensions.height });
    }
    /**
     * calculate dimensions of the preview canvas
     */
    calculateDimensions(width, height) {
        const ratio = width / height;
        const maxWidth = this.screenDimensions.width > this.maxPreviewWidth ?
            this.maxPreviewWidth : this.screenDimensions.width - 40;
        const maxHeight = this.screenDimensions.height - 240;
        const calculated = {
            width: maxWidth,
            height: Math.round(maxWidth / ratio),
            ratio: ratio
        };
        if (calculated.height > maxHeight) {
            calculated.height = maxHeight;
            calculated.width = Math.round(maxHeight * ratio);
        }
        return calculated;
    }
    /**
     * returns a point by it's roles
     * @param roles - an array of roles by which the point will be fetched
     */
    getPoint(roles) {
        return this.points.find(point => {
            return this.limitsService.compareArray(point.roles, roles);
        });
    }
};
NgxDocScannerComponent.ɵfac = function NgxDocScannerComponent_Factory(t) { return new (t || NgxDocScannerComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc8.NgxOpenCVService), ɵngcc0.ɵɵdirectiveInject(LimitsService), ɵngcc0.ɵɵdirectiveInject(ɵngcc4.MatBottomSheet)); };
NgxDocScannerComponent.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: NgxDocScannerComponent, selectors: [["ngx-doc-scanner"]], viewQuery: function NgxDocScannerComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c2, 7, ElementRef);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.previewCanvas = _t.first);
    } }, inputs: { file: "file", config: "config" }, outputs: { exitEditor: "exitEditor", editResult: "editResult", error: "error", ready: "ready", processing: "processing" }, decls: 8, vars: 7, consts: [["fxLayoutAlign", "space-around", 2, "direction", "ltr !important", 3, "ngStyle"], [2, "margin", "auto", 3, "ngStyle"], ["imageContainer", ""], [4, "ngIf"], [2, "z-index", "5", 3, "ngStyle"], ["PreviewCanvas", ""], ["fxLayout", "row", "fxLayoutAlign", "space-around", 1, "editor-actions", 2, "position", "absolute", "bottom", "0", "width", "100vw"], [3, "ngSwitch", 4, "ngFor", "ngForOf"], [3, "color", "weight", "dimensions"], ["shapeOutline", ""], [3, "pointOptions", "startPosition", "limitRoles", "container"], ["topLeft", ""], ["topRight", ""], ["bottomLeft", ""], ["bottomRight", ""], [3, "ngSwitch"], ["mat-mini-fab", "", 3, "name", "color", "click", 4, "ngSwitchCase"], ["mat-raised-button", "", 3, "name", "color", "click", 4, "ngSwitchCase"], ["mat-mini-fab", "", 3, "name", "color", "click"], ["mat-raised-button", "", 3, "name", "color", "click"]], template: function NgxDocScannerComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0)(1, "div", 1, 2);
        ɵngcc0.ɵɵtemplate(3, NgxDocScannerComponent_ng_container_3_Template, 11, 31, "ng-container", 3);
        ɵngcc0.ɵɵelement(4, "canvas", 4, 5);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(6, "div", 6);
        ɵngcc0.ɵɵtemplate(7, NgxDocScannerComponent_ng_container_7_Template, 3, 3, "ng-container", 7);
        ɵngcc0.ɵɵelementEnd()();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngStyle", ctx.editorStyle);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngStyle", ctx.imageDivStyle);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngIf", ctx.imageLoaded && ctx.mode === "crop");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngStyle", ɵngcc0.ɵɵpureFunction1(5, _c11, ctx.options.maxPreviewWidth));
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.displayedButtons);
    } }, dependencies: [ɵngcc5.DefaultLayoutDirective, ɵngcc5.DefaultLayoutAlignDirective, ɵngcc1.DefaultStyleDirective, ɵngcc9.MatButton, ɵngcc6.MatIcon, ɵngcc3.NgForOf, ɵngcc3.NgIf, ɵngcc3.NgStyle, ɵngcc3.NgSwitch, ɵngcc3.NgSwitchCase, NgxDraggablePointComponent, NgxShapeOutlineComponent], styles: [".editor-actions[_ngcontent-%COMP%]{padding:12px}.editor-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin:5px}"] });
NgxDocScannerComponent.ctorParameters = () => [
    { type: NgxOpenCVService },
    { type: LimitsService },
    { type: MatBottomSheet }
];
__decorate([
    ViewChild('PreviewCanvas', { read: ElementRef, static: true }),
    __metadata("design:type", ElementRef)
], NgxDocScannerComponent.prototype, "previewCanvas", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], NgxDocScannerComponent.prototype, "exitEditor", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], NgxDocScannerComponent.prototype, "editResult", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], NgxDocScannerComponent.prototype, "error", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], NgxDocScannerComponent.prototype, "ready", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], NgxDocScannerComponent.prototype, "processing", void 0);
__decorate([
    Input(),
    __metadata("design:type", File),
    __metadata("design:paramtypes", [File])
], NgxDocScannerComponent.prototype, "file", null);
__decorate([
    Input(),
    __metadata("design:type", Object)
], NgxDocScannerComponent.prototype, "config", void 0);
NgxDocScannerComponent = __decorate([ __metadata("design:paramtypes", [NgxOpenCVService, LimitsService, MatBottomSheet])
], NgxDocScannerComponent);
/**
 * a class for generating configuration objects for the editor
 */
class ImageEditorConfig {
    constructor(options) {
        /**
         * max dimensions of oputput image. if set to zero
         */
        this.maxImageDimensions = {
            width: 800,
            height: 1200
        };
        /**
         * background color of the main editor div
         */
        this.editorBackgroundColor = '#fefefe';
        /**
         * css properties for the main editor div
         */
        this.editorDimensions = {
            width: '100vw',
            height: '100vh'
        };
        /**
         * css that will be added to the main div of the editor component
         */
        this.extraCss = {
            position: 'absolute',
            top: 0,
            left: 0
        };
        /**
         * material design theme color name
         */
        this.buttonThemeColor = 'accent';
        /**
         * icon for the button that completes the editing and emits the edited image
         */
        this.exportImageIcon = 'cloud_upload';
        /**
         * color of the crop tool
         */
        this.cropToolColor = '#3cabe2';
        /**
         * shape of the crop tool, can be either a rectangle or a circle
         */
        this.cropToolShape = 'rect';
        /**
         * dimensions of the crop tool
         */
        this.cropToolDimensions = {
            width: 10,
            height: 10
        };
        /**
         * crop tool outline width
         */
        this.cropToolLineWeight = 3;
        /**
         * maximum size of the preview pane
         */
        this.maxPreviewWidth = 800;
        if (options) {
            Object.keys(options).forEach(key => {
                this[key] = options[key];
            });
        }
        this.editorStyle = { 'background-color': this.editorBackgroundColor };
        Object.assign(this.editorStyle, this.editorDimensions);
        Object.assign(this.editorStyle, this.extraCss);
        this.pointOptions = {
            shape: this.cropToolShape,
            color: this.cropToolColor,
            width: 0,
            height: 0
        };
        Object.assign(this.pointOptions, this.cropToolDimensions);
    }
}

var NgxDocumentScannerModule_1;
let NgxDocumentScannerModule = NgxDocumentScannerModule_1 = class NgxDocumentScannerModule {
    static forRoot(config) {
        return {
            ngModule: NgxDocumentScannerModule_1,
            providers: [
                { provide: OpenCvConfigToken, useValue: config },
            ],
        };
    }
};
NgxDocumentScannerModule.ɵfac = function NgxDocumentScannerModule_Factory(t) { return new (t || NgxDocumentScannerModule)(); };
NgxDocumentScannerModule.ɵmod = /*@__PURE__*/ ɵngcc0.ɵɵdefineNgModule({ type: NgxDocumentScannerModule });
NgxDocumentScannerModule.ɵinj = /*@__PURE__*/ ɵngcc0.ɵɵdefineInjector({ providers: [
        NgxOpenCVService,
        LimitsService,
    ], imports: [FlexLayoutModule,
        MatButtonModule,
        MatIconModule,
        MatBottomSheetModule,
        MatListModule,
        AngularDraggableModule,
        CommonModule,
        NgxOpenCVModule, FlexLayoutModule,
        MatButtonModule,
        MatIconModule,
        MatBottomSheetModule,
        MatListModule,
        AngularDraggableModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(LimitsService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(NgxDraggablePointComponent, [{
        type: Component,
        args: [{
                selector: 'ngx-draggable-point',
                template: "<div #point ngDraggable=\"draggable\"\r\n     (movingOffset)=\"positionChange($event)\"\r\n     [ngStyle]=\"pointStyle()\"\r\n     [position]=\"position\"\r\n     [bounds]=\"container\"\r\n     [inBounds]=\"true\"\r\n     (endOffset)=\"movementEnd($event)\"\r\n      style=\"z-index: 1000\">\r\n</div>\r\n"
            }]
    }], function () { return [{ type: LimitsService }]; }, { width: [{
            type: Input
        }], height: [{
            type: Input
        }], color: [{
            type: Input
        }], shape: [{
            type: Input
        }], pointOptions: [{
            type: Input
        }], _currentPosition: [{
            type: Input
        }], limitRoles: [{
            type: Input
        }], startPosition: [{
            type: Input
        }], container: [{
            type: Input
        }] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(NgxFilterMenuComponent, [{
        type: Component,
        args: [{
                selector: 'ngx-filter-menu',
                template: "<mat-action-list>\r\n  <button mat-list-item *ngFor=\"let option of filterOptions\" (click)=\"selectOption(option.name)\">\r\n    <mat-icon>{{option.icon}}</mat-icon>\r\n    <span fxFlex=\"100\" style=\"text-align: start; margin: 5px\">{{option.text}}</span>\r\n    <span fxFlex=\"100\"></span>\r\n    <mat-icon *ngIf=\"option.name === data.filter\">done</mat-icon>\r\n  </button>\r\n</mat-action-list>\r\n"
            }]
    }], function () { return [{ type: ɵngcc4.MatBottomSheetRef }, { type: undefined, decorators: [{
                type: Inject,
                args: [MAT_BOTTOM_SHEET_DATA]
            }] }]; }, { filterSelected: [{
            type: Output
        }] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(NgxShapeOutlineComponent, [{
        type: Component,
        args: [{
                selector: 'ngx-shape-outine',
                template: "<canvas #outline\r\n        style=\"position: absolute; z-index: 1000\"\r\n        [ngStyle]=\"{width: dimensions.width + 'px', height: dimensions.height + 'px'}\"\r\n        *ngIf=\"dimensions\">\r\n</canvas>\r\n"
            }]
    }], function () { return [{ type: LimitsService }]; }, { color: [{
            type: Input
        }], weight: [{
            type: Input
        }], dimensions: [{
            type: Input
        }], canvas: [{
            type: ViewChild,
            args: ['outline']
        }] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(NgxDocScannerComponent, [{
        type: Component,
        args: [{ selector: 'ngx-doc-scanner', template: "<div [ngStyle]=\"editorStyle\" fxLayoutAlign=\"space-around\" style=\"direction: ltr !important\">\r\n  <div #imageContainer [ngStyle]=\"imageDivStyle\" style=\"margin: auto;\" >\r\n    <ng-container *ngIf=\"imageLoaded && mode === 'crop'\">\r\n      <ngx-shape-outine #shapeOutline [color]=\"options.cropToolColor\" [weight]=\"options.cropToolLineWeight\" [dimensions]=\"previewDimensions\"></ngx-shape-outine>\r\n      <ngx-draggable-point #topLeft [pointOptions]=\"options.pointOptions\" [startPosition]=\"{x: 0, y: 0}\" [limitRoles]=\"['top', 'left']\" [container]=\"imageContainer\"></ngx-draggable-point>\r\n      <ngx-draggable-point #topRight [pointOptions]=\"options.pointOptions\" [startPosition]=\"{x: previewDimensions.width, y: 0}\" [limitRoles]=\"['top', 'right']\" [container]=\"imageContainer\"></ngx-draggable-point>\r\n      <ngx-draggable-point #bottomLeft [pointOptions]=\"options.pointOptions\" [startPosition]=\"{x: 0, y: previewDimensions.height}\" [limitRoles]=\"['bottom', 'left']\" [container]=\"imageContainer\"></ngx-draggable-point>\r\n      <ngx-draggable-point #bottomRight [pointOptions]=\"options.pointOptions\" [startPosition]=\"{x: previewDimensions.width, y: previewDimensions.height}\" [limitRoles]=\"['bottom', 'right']\" [container]=\"imageContainer\"></ngx-draggable-point>\r\n    </ng-container>\r\n    <canvas #PreviewCanvas [ngStyle]=\"{'max-width': options.maxPreviewWidth}\" style=\"z-index: 5\" ></canvas>\r\n  </div>\r\n  <div class=\"editor-actions\" fxLayout=\"row\" fxLayoutAlign=\"space-around\" style=\"position: absolute; bottom: 0; width: 100vw\">\r\n    <ng-container *ngFor=\"let button of displayedButtons\" [ngSwitch]=\"button.type\">\r\n      <button mat-mini-fab *ngSwitchCase=\"'fab'\" [name]=\"button.name\" (click)=\"button.action()\" [color]=\"options.buttonThemeColor\">\r\n        <mat-icon>{{button.icon}}</mat-icon>\r\n      </button>\r\n      <button mat-raised-button *ngSwitchCase=\"'button'\" [name]=\"button.name\" (click)=\"button.action()\" [color]=\"options.buttonThemeColor\">\r\n        <mat-icon>{{button.icon}}</mat-icon>\r\n        <span>{{button.text}}}</span>\r\n      </button>\r\n    </ng-container>\r\n  </div>\r\n</div>\r\n\r\n\r\n", styles: [".editor-actions{padding:12px}.editor-actions button{margin:5px}"] }]
    }], function () { return [{ type: ɵngcc8.NgxOpenCVService }, { type: LimitsService }, { type: ɵngcc4.MatBottomSheet }]; }, { exitEditor: [{
            type: Output
        }], editResult: [{
            type: Output
        }], error: [{
            type: Output
        }], ready: [{
            type: Output
        }], processing: [{
            type: Output
        }], file: [{
            type: Input
        }], previewCanvas: [{
            type: ViewChild,
            args: ['PreviewCanvas', { read: ElementRef, static: true }]
        }], config: [{
            type: Input
        }] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(NgxDocumentScannerModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    NgxDraggablePointComponent,
                    NgxFilterMenuComponent,
                    NgxShapeOutlineComponent,
                    NgxDocScannerComponent,
                ],
                imports: [
                    FlexLayoutModule,
                    MatButtonModule,
                    MatIconModule,
                    MatBottomSheetModule,
                    MatListModule,
                    AngularDraggableModule,
                    CommonModule,
                    NgxOpenCVModule,
                ],
                exports: [
                    FlexLayoutModule,
                    MatButtonModule,
                    MatIconModule,
                    MatBottomSheetModule,
                    MatListModule,
                    AngularDraggableModule,
                    NgxDocScannerComponent,
                ],
                entryComponents: [
                    NgxFilterMenuComponent,
                ],
                providers: [
                    NgxOpenCVService,
                    LimitsService,
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(NgxDocumentScannerModule, { declarations: function () { return [NgxDraggablePointComponent, NgxFilterMenuComponent, NgxShapeOutlineComponent, NgxDocScannerComponent]; }, imports: function () { return [FlexLayoutModule,
        MatButtonModule,
        MatIconModule,
        MatBottomSheetModule,
        MatListModule,
        AngularDraggableModule,
        CommonModule,
        NgxOpenCVModule]; }, exports: function () { return [FlexLayoutModule,
        MatButtonModule,
        MatIconModule,
        MatBottomSheetModule,
        MatListModule,
        AngularDraggableModule, NgxDocScannerComponent]; } }); })();

/*
 * Public API Surface of ngx-document-scanner
 */

/**
 * Generated bundle index. Do not edit.
 */

export { NgxDocScannerComponent, NgxDocumentScannerModule, NgxDraggablePointComponent as ɵa, LimitsService as ɵb, NgxFilterMenuComponent as ɵc, NgxShapeOutlineComponent as ɵd };

//# sourceMappingURL=ngx-document-scanner.js.map