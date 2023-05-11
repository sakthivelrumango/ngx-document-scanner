import { __spread, __decorate, __metadata, __param, __awaiter, __generator } from 'tslib';
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

var LimitsService = /** @class */ (function () {
    function LimitsService() {
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
    LimitsService.prototype.setPaneDimensions = function (dimensions) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._paneDimensions = dimensions;
            _this.paneDimensions.next(dimensions);
            resolve();
        });
    };
    /**
     * repositions points externally
     */
    LimitsService.prototype.repositionPoints = function (positions) {
        var _this = this;
        this._points = positions;
        positions.forEach(function (position) {
            _this.positionChange(position);
        });
        this.repositionEvent.next(positions);
    };
    /**
     * updates limits and point positions and calls next on the observables
     * @param positionChangeData - position change event data
     */
    LimitsService.prototype.positionChange = function (positionChangeData) {
        var _this = this;
        // update positions according to current position change
        this.updatePosition(positionChangeData);
        // for each direction:
        // 1. filter the _points that have a role as the direction's limit
        // 2. for top and left find max x | y values, and min for right and bottom
        this.limitDirections.forEach(function (direction) {
            var relevantPoints = _this._points.filter(function (point) {
                return point.roles.includes(direction);
            })
                .map(function (point) {
                return point[_this.getDirectionAxis(direction)];
            });
            var limit;
            if (direction === 'top' || direction === 'left') {
                limit = Math.max.apply(Math, __spread(relevantPoints));
            }
            if (direction === 'right' || direction === 'bottom') {
                limit = Math.min.apply(Math, __spread(relevantPoints));
            }
            _this._limits[direction] = limit;
        });
        this.limits.next(this._limits);
        this.positions.next(Array.from(this._points));
    };
    /**
     * updates the position of the point
     * @param positionChange - position change event data
     */
    LimitsService.prototype.updatePosition = function (positionChange) {
        var _this = this;
        // finds the current position of the point by it's roles, than splices it for the new position or pushes it if it's not yet in the array
        var index = this._points.findIndex(function (point) {
            return _this.compareArray(positionChange.roles, point.roles);
        });
        if (index === -1) {
            this._points.push(positionChange);
        }
        else {
            this._points.splice(index, 1, positionChange);
        }
    };
    /**
     * check if a position change event exceeds the limits
     * @param positionChange - position change event data
     * @returns LimitException0
     */
    LimitsService.prototype.exceedsLimit = function (positionChange) {
        var _this = this;
        var pointLimits = this.limitDirections.filter(function (direction) {
            return !positionChange.roles.includes(direction);
        });
        var limitException = {
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
        pointLimits.forEach(function (direction) {
            var directionAxis = _this.getDirectionAxis(direction);
            if (direction === 'top' || direction === 'left') {
                if (positionChange[directionAxis] < _this._limits[direction]) {
                    limitException.resetCoefficients[directionAxis] = 1;
                    limitException.resetCoordinates[directionAxis] = _this._limits[direction];
                }
            }
            else if (direction === 'right' || direction === 'bottom') {
                if (positionChange[directionAxis] > _this._limits[direction]) {
                    limitException.resetCoefficients[directionAxis] = -1;
                    limitException.resetCoordinates[directionAxis] = _this._limits[direction];
                }
            }
        });
        if (limitException.resetCoefficients.x !== 0 || limitException.resetCoefficients.y !== 0) {
            limitException.exceeds = true;
        }
        return limitException;
    };
    /**
     * rotate crop tool points clockwise
     * @param resizeRatios - ratio between the new dimensions and the previous
     * @param initialPreviewDimensions - preview pane dimensions before rotation
     * @param initialPositions - current positions before rotation
     */
    LimitsService.prototype.rotateClockwise = function (resizeRatios, initialPreviewDimensions, initialPositions) {
        var _this = this;
        // convert positions to ratio between position to initial pane dimension
        initialPositions = initialPositions.map(function (point) {
            return new PositionChangeData({
                x: point.x / initialPreviewDimensions.width,
                y: point.y / initialPreviewDimensions.height,
            }, point.roles);
        });
        this.repositionPoints(initialPositions.map(function (point) {
            return _this.rotateCornerClockwise(point);
        }));
    };
    /**
     * returns the corner positions after a 90 degrees clockwise rotation
     */
    LimitsService.prototype.rotateCornerClockwise = function (corner) {
        var _this = this;
        var rotated = {
            x: this._paneDimensions.width * (1 - corner.y),
            y: this._paneDimensions.height * corner.x,
            roles: []
        };
        // rotates corner according to order
        var order = [
            ['bottom', 'left'],
            ['top', 'left'],
            ['top', 'right'],
            ['bottom', 'right'],
            ['bottom', 'left']
        ];
        rotated.roles = order[order.findIndex(function (roles) {
            return _this.compareArray(roles, corner.roles);
        }) + 1];
        return rotated;
    };
    /**
     * checks if two array contain the same values
     * @param array1 - array 1
     * @param array2 - array 2
     * @returns boolean
     */
    LimitsService.prototype.compareArray = function (array1, array2) {
        return array1.every(function (element) {
            return array2.includes(element);
        }) && array1.length === array2.length;
    };
    LimitsService.prototype.getDirectionAxis = function (direction) {
        return {
            left: 'x',
            right: 'x',
            top: 'y',
            bottom: 'y'
        }[direction];
    };
    LimitsService.ɵprov = ɵɵdefineInjectable({ factory: function LimitsService_Factory() { return new LimitsService(); }, token: LimitsService, providedIn: "root" });
    LimitsService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], LimitsService);
    return LimitsService;
}());
var PositionChangeData = /** @class */ (function () {
    function PositionChangeData(position, roles) {
        this.x = position.x;
        this.y = position.y;
        this.roles = roles;
    }
    return PositionChangeData;
}());

var NgxDraggablePointComponent = /** @class */ (function () {
    function NgxDraggablePointComponent(limitsService) {
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
    NgxDraggablePointComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        Object.keys(this.pointOptions).forEach(function (key) {
            _this[key] = _this.pointOptions[key];
        });
        // subscribe to pane dimensions changes
        this.limitsService.paneDimensions.subscribe(function (dimensions) {
            if (dimensions.width > 0 && dimensions.width > 0) {
                _this._paneDimensions = {
                    width: dimensions.width,
                    height: dimensions.height
                };
                _this.position = _this.getInitialPosition(dimensions);
                _this.limitsService.positionChange(new PositionChangeData(_this.position, _this.limitRoles));
            }
        });
        // subscribe to external reposition events
        this.limitsService.repositionEvent.subscribe(function (positions) {
            if (positions.length > 0) {
                _this.externalReposition(positions);
            }
        });
    };
    /**
     * returns a css style object for the point
     */
    NgxDraggablePointComponent.prototype.pointStyle = function () {
        return {
            width: this.width + 'px',
            height: this.height + 'px',
            'background-color': this.color,
            'border-radius': this.shape === 'circle' ? '100%' : 0,
            position: 'absolute'
        };
    };
    /**
     * registers a position change on the limits service, and adjusts position if necessary
     * @param position - the current position of the point
     */
    NgxDraggablePointComponent.prototype.positionChange = function (position) {
        var positionChangeData = new PositionChangeData(position, this.limitRoles);
        var limitException = this.limitsService.exceedsLimit(positionChangeData);
        if (limitException.exceeds) {
            // if exceeds limits, reposition
            this.resetPosition = limitException.resetCoordinates;
        }
        else {
            this.limitsService.positionChange(positionChangeData);
            this._currentPosition = position;
        }
    };
    /**
     * adjusts the position of the point after a limit exception
     */
    NgxDraggablePointComponent.prototype.adjustPosition = function (limitException) {
        var newPosition = {
            x: 0,
            y: 0
        };
        Object.keys(this.startPosition).forEach(function (axis) {
            newPosition[axis] = limitException.resetCoordinates[axis] + limitException.resetCoefficients[axis];
        });
        this.position = newPosition;
        this.limitsService.positionChange(new PositionChangeData(this.position, this.limitRoles));
    };
    /**
     * called on movement end, checks if last position exceeded the limits ad adjusts
     */
    NgxDraggablePointComponent.prototype.movementEnd = function (position) {
        var positionChangeData = new PositionChangeData(position, this.limitRoles);
        var limitException = this.limitsService.exceedsLimit(positionChangeData);
        if (limitException.exceeds) {
            this.resetPosition = limitException.resetCoordinates;
            if (limitException.exceeds) {
                this.adjustPosition(limitException);
                positionChangeData = new PositionChangeData(this.position, this.limitRoles);
                this.limitsService.updatePosition(positionChangeData);
            }
        }
    };
    /**
     * calculates the initial positions of the point by it's roles
     * @param dimensions - dimensions of the pane in which the point is located
     */
    NgxDraggablePointComponent.prototype.getInitialPosition = function (dimensions) {
        return {
            x: this.limitRoles.includes('left') ? 0 : dimensions.width - this.width / 2,
            y: this.limitRoles.includes('top') ? 0 : dimensions.height - this.height / 2
        };
    };
    /**
     * repositions the point after an external reposition event
     * @param positions - an array of all points on the pane
     */
    NgxDraggablePointComponent.prototype.externalReposition = function (positions) {
        var _this = this;
        positions.forEach(function (position) {
            if (_this.limitsService.compareArray(_this.limitRoles, position.roles)) {
                position = _this.enforcePaneLimits(position);
                _this.position = {
                    x: position.x,
                    y: position.y
                };
            }
        });
    };
    /**
     * returns a new point position if the movement exceeded the pane limit
     */
    NgxDraggablePointComponent.prototype.enforcePaneLimits = function (position) {
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
    };
    NgxDraggablePointComponent.ctorParameters = function () { return [
        { type: LimitsService }
    ]; };
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
    NgxDraggablePointComponent = __decorate([
        Component({
            selector: 'ngx-draggable-point',
            template: "<div #point ngDraggable=\"draggable\"\r\n     (movingOffset)=\"positionChange($event)\"\r\n     [ngStyle]=\"pointStyle()\"\r\n     [position]=\"position\"\r\n     [bounds]=\"container\"\r\n     [inBounds]=\"true\"\r\n     (endOffset)=\"movementEnd($event)\"\r\n      style=\"z-index: 1000\">\r\n</div>\r\n"
        }),
        __metadata("design:paramtypes", [LimitsService])
    ], NgxDraggablePointComponent);
    return NgxDraggablePointComponent;
}());

var NgxFilterMenuComponent = /** @class */ (function () {
    function NgxFilterMenuComponent(bottomSheetRef, data) {
        var _this = this;
        this.bottomSheetRef = bottomSheetRef;
        this.data = data;
        this.filterOptions = [
            {
                name: 'default',
                icon: 'filter_b_and_w',
                action: function (filter) {
                    _this.filterSelected.emit(filter);
                },
                text: 'B&W'
            },
            {
                name: 'bw2',
                icon: 'filter_b_and_w',
                action: function (filter) {
                    _this.filterSelected.emit(filter);
                },
                text: 'B&W 2'
            },
            {
                name: 'bw3',
                icon: 'blur_on',
                action: function (filter) {
                    _this.filterSelected.emit(filter);
                },
                text: 'B&W 3'
            },
            {
                name: 'magic_color',
                icon: 'filter_vintage',
                action: function (filter) {
                    _this.filterSelected.emit(filter);
                },
                text: 'Magic Color'
            },
            {
                name: 'original',
                icon: 'crop_original',
                action: function (filter) {
                    _this.filterSelected.emit(filter);
                },
                text: 'Original'
            },
        ];
        this.filterSelected = new EventEmitter();
    }
    NgxFilterMenuComponent.prototype.selectOption = function (optionName) {
        this.data.filter = optionName;
        this.bottomSheetRef.dismiss();
    };
    NgxFilterMenuComponent.ctorParameters = function () { return [
        { type: MatBottomSheetRef },
        { type: undefined, decorators: [{ type: Inject, args: [MAT_BOTTOM_SHEET_DATA,] }] }
    ]; };
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], NgxFilterMenuComponent.prototype, "filterSelected", void 0);
    NgxFilterMenuComponent = __decorate([
        Component({
            selector: 'ngx-filter-menu',
            template: "<mat-action-list>\r\n  <button mat-list-item *ngFor=\"let option of filterOptions\" (click)=\"selectOption(option.name)\">\r\n    <mat-icon>{{option.icon}}</mat-icon>\r\n    <span fxFlex=\"100\" style=\"text-align: start; margin: 5px\">{{option.text}}</span>\r\n    <span fxFlex=\"100\"></span>\r\n    <mat-icon *ngIf=\"option.name === data.filter\">done</mat-icon>\r\n  </button>\r\n</mat-action-list>\r\n"
        }),
        __param(1, Inject(MAT_BOTTOM_SHEET_DATA)),
        __metadata("design:paramtypes", [MatBottomSheetRef, Object])
    ], NgxFilterMenuComponent);
    return NgxFilterMenuComponent;
}());

var NgxShapeOutlineComponent = /** @class */ (function () {
    function NgxShapeOutlineComponent(limitsService) {
        this.limitsService = limitsService;
        this.color = '#3cabe2';
    }
    NgxShapeOutlineComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        // init drawing canvas dimensions
        this.canvas.nativeElement.width = this.dimensions.width;
        this.canvas.nativeElement.height = this.dimensions.height;
        this.limitsService.positions.subscribe(function (positions) {
            if (positions.length === 4) {
                _this._points = positions;
                _this.sortPoints();
                _this.clearCanvas();
                _this.drawShape();
            }
        });
        // subscribe to changes in the pane's dimensions
        this.limitsService.paneDimensions.subscribe(function (dimensions) {
            _this.clearCanvas();
            _this.canvas.nativeElement.width = dimensions.width;
            _this.canvas.nativeElement.height = dimensions.height;
        });
        // subscribe to reposition events
        this.limitsService.repositionEvent.subscribe(function (positions) {
            if (positions.length === 4) {
                setTimeout(function () {
                    _this.clearCanvas();
                    _this.sortPoints();
                    _this.drawShape();
                }, 10);
            }
        });
    };
    /**
     * clears the shape canvas
     */
    NgxShapeOutlineComponent.prototype.clearCanvas = function () {
        var canvas = this.canvas.nativeElement;
        var ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, this.dimensions.width, this.dimensions.height);
    };
    /**
     * sorts the array of points according to their clockwise alignment
     */
    NgxShapeOutlineComponent.prototype.sortPoints = function () {
        var _this = this;
        var _points = Array.from(this._points);
        var sortedPoints = [];
        var sortOrder = {
            vertical: ['top', 'top', 'bottom', 'bottom'],
            horizontal: ['left', 'right', 'right', 'left']
        };
        var _loop_1 = function (i) {
            var roles = Array.from([sortOrder.vertical[i], sortOrder.horizontal[i]]);
            sortedPoints.push(_points.filter(function (point) {
                return _this.limitsService.compareArray(point.roles, roles);
            })[0]);
        };
        for (var i = 0; i < 4; i++) {
            _loop_1(i);
        }
        this._sortedPoints = sortedPoints;
    };
    /**
     * draws a line between the points according to their order
     */
    NgxShapeOutlineComponent.prototype.drawShape = function () {
        var _this = this;
        var canvas = this.canvas.nativeElement;
        var ctx = canvas.getContext('2d');
        ctx.lineWidth = this.weight;
        ctx.strokeStyle = this.color;
        ctx.beginPath();
        this._sortedPoints.forEach(function (point, index) {
            if (index === 0) {
                ctx.moveTo(point.x, point.y);
            }
            if (index !== _this._sortedPoints.length - 1) {
                var nextPoint = _this._sortedPoints[index + 1];
                ctx.lineTo(nextPoint.x, nextPoint.y);
            }
            else {
                ctx.closePath();
            }
        });
        ctx.stroke();
    };
    NgxShapeOutlineComponent.ctorParameters = function () { return [
        { type: LimitsService }
    ]; };
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
    NgxShapeOutlineComponent = __decorate([
        Component({
            selector: 'ngx-shape-outine',
            template: "<canvas #outline\r\n        style=\"position: absolute; z-index: 1000\"\r\n        [ngStyle]=\"{width: dimensions.width + 'px', height: dimensions.height + 'px'}\"\r\n        *ngIf=\"dimensions\">\r\n</canvas>\r\n"
        }),
        __metadata("design:paramtypes", [LimitsService])
    ], NgxShapeOutlineComponent);
    return NgxShapeOutlineComponent;
}());

var NgxDocScannerComponent = /** @class */ (function () {
    function NgxDocScannerComponent(ngxOpenCv, limitsService, bottomSheet) {
        var _this = this;
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
                action: function () {
                    _this.exitEditor.emit('canceled');
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
                action: function () { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                this.mode = 'color';
                                return [4 /*yield*/, this.transform()];
                            case 1:
                                _a.sent();
                                return [4 /*yield*/, this.applyFilter(true)];
                            case 2:
                                _a.sent();
                                return [2 /*return*/];
                        }
                    });
                }); },
                icon: 'done',
                type: 'fab',
                mode: 'crop'
            },
            {
                name: 'back',
                action: function () {
                    _this.mode = 'crop';
                    _this.loadFile(_this.originalImage);
                },
                icon: 'arrow_back',
                type: 'fab',
                mode: 'color'
            },
            {
                name: 'filter',
                action: function () {
                    return _this.chooseFilters();
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
        this.ngxOpenCv.cvState.subscribe(function (cvState) {
            _this.cvState = cvState.state;
            _this.ready.emit(cvState.ready);
            if (cvState.error) {
                _this.error.emit(new Error('error loading cv'));
            }
            else if (cvState.loading) {
                _this.processing.emit(true);
            }
            else if (cvState.ready) {
                _this.processing.emit(false);
            }
        });
        // subscribe to positions of crop tool
        this.limitsService.positions.subscribe(function (points) {
            _this.points = points;
        });
    }
    Object.defineProperty(NgxDocScannerComponent.prototype, "displayedButtons", {
        /**
         * returns an array of buttons according to the editor mode
         */
        get: function () {
            var _this = this;
            return this.editorButtons.filter(function (button) {
                return button.mode === _this.mode;
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxDocScannerComponent.prototype, "file", {
        // ****** //
        // INPUTS //
        // ****** //
        /**
         * set image for editing
         * @param file - file from form input
         */
        set: function (file) {
            var _this = this;
            if (file) {
                setTimeout(function () {
                    _this.processing.emit(true);
                }, 5);
                this.imageLoaded = false;
                this.originalImage = file;
                this.ngxOpenCv.cvState.subscribe(function (cvState) { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                if (!cvState.ready) return [3 /*break*/, 2];
                                // read file to image & canvas
                                return [4 /*yield*/, this.loadFile(file)];
                            case 1:
                                // read file to image & canvas
                                _a.sent();
                                this.processing.emit(false);
                                _a.label = 2;
                            case 2: return [2 /*return*/];
                        }
                    });
                }); });
            }
        },
        enumerable: true,
        configurable: true
    });
    NgxDocScannerComponent.prototype.ngOnInit = function () {
        var _this = this;
        // set options from config object
        this.options = new ImageEditorConfig(this.config);
        // set export image icon
        this.editorButtons.forEach(function (button) {
            if (button.name === 'upload') {
                button.icon = _this.options.exportImageIcon;
            }
        });
        this.maxPreviewWidth = this.options.maxPreviewWidth;
        this.editorStyle = this.options.editorStyle;
    };
    // ***************************** //
    // editor action buttons methods //
    // ***************************** //
    /**
     * emits the exitEditor event
     */
    NgxDocScannerComponent.prototype.exit = function () {
        this.exitEditor.emit('canceled');
    };
    /**
     * applies the selected filter, and when done emits the resulted image
     */
    NgxDocScannerComponent.prototype.exportImage = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.applyFilter(false)];
                    case 1:
                        _a.sent();
                        if (this.options.maxImageDimensions) {
                            this.resize(this.editedImage)
                                .then(function (resizeResult) {
                                resizeResult.toBlob(function (blob) {
                                    _this.editResult.emit(blob);
                                    _this.processing.emit(false);
                                }, _this.originalImage.type);
                            });
                        }
                        else {
                            this.editedImage.toBlob(function (blob) {
                                _this.editResult.emit(blob);
                                _this.processing.emit(false);
                            }, this.originalImage.type);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * open the bottom sheet for selecting filters, and applies the selected filter in preview mode
     */
    NgxDocScannerComponent.prototype.chooseFilters = function () {
        var _this = this;
        var data = { filter: this.selectedFilter };
        var bottomSheetRef = this.bottomSheet.open(NgxFilterMenuComponent, {
            data: data
        });
        bottomSheetRef.afterDismissed().subscribe(function () {
            _this.selectedFilter = data.filter;
            _this.applyFilter(true);
        });
    };
    // *************************** //
    // File Input & Output Methods //
    // *************************** //
    /**
     * load image from input field
     */
    NgxDocScannerComponent.prototype.loadFile = function (file) {
        var _this = this;
        return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
            var err_1, err_2;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.processing.emit(true);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.readImage(file)];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        err_1 = _a.sent();
                        console.error(err_1);
                        this.error.emit(new Error(err_1));
                        return [3 /*break*/, 4];
                    case 4:
                        _a.trys.push([4, 6, , 7]);
                        return [4 /*yield*/, this.showPreview()];
                    case 5:
                        _a.sent();
                        return [3 /*break*/, 7];
                    case 6:
                        err_2 = _a.sent();
                        console.error(err_2);
                        this.error.emit(new Error(err_2));
                        return [3 /*break*/, 7];
                    case 7:
                        // set pane limits
                        // show points
                        this.imageLoaded = true;
                        return [4 /*yield*/, this.limitsService.setPaneDimensions({ width: this.previewDimensions.width, height: this.previewDimensions.height })];
                    case 8:
                        _a.sent();
                        setTimeout(function () { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this.detectContours()];
                                    case 1:
                                        _a.sent();
                                        this.processing.emit(false);
                                        resolve();
                                        return [2 /*return*/];
                                }
                            });
                        }); }, 15);
                        return [2 /*return*/];
                }
            });
        }); });
    };
    /**
     * read image from File object
     */
    NgxDocScannerComponent.prototype.readImage = function (file) {
        var _this = this;
        return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
            var imageSrc, err_3, img;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, readFile()];
                    case 1:
                        imageSrc = _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        err_3 = _a.sent();
                        reject(err_3);
                        return [3 /*break*/, 3];
                    case 3:
                        img = new Image();
                        img.onload = function () { return __awaiter(_this, void 0, void 0, function () {
                            var ctx, width, _a;
                            return __generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0:
                                        // set edited image canvas and dimensions
                                        this.editedImage = document.createElement('canvas');
                                        this.editedImage.width = img.width;
                                        this.editedImage.height = img.height;
                                        ctx = this.editedImage.getContext('2d');
                                        ctx.drawImage(img, 0, 0);
                                        width = img.width > img.height ? img.height : img.width;
                                        if (!(width > this.options.maxImageDimensions.width)) return [3 /*break*/, 2];
                                        _a = this;
                                        return [4 /*yield*/, this.resize(this.editedImage)];
                                    case 1:
                                        _a.editedImage = _b.sent();
                                        _b.label = 2;
                                    case 2:
                                        this.imageDimensions.width = this.editedImage.width;
                                        this.imageDimensions.height = this.editedImage.height;
                                        this.setPreviewPaneDimensions(this.editedImage);
                                        resolve();
                                        return [2 /*return*/];
                                }
                            });
                        }); };
                        img.src = imageSrc;
                        return [2 /*return*/];
                }
            });
        }); });
        /**
         * read file from input field
         */
        function readFile() {
            return new Promise(function (resolve, reject) {
                var reader = new FileReader();
                reader.onload = function (event) {
                    resolve(reader.result);
                };
                reader.onerror = function (err) {
                    reject(err);
                };
                reader.readAsDataURL(file);
            });
        }
    };
    // ************************ //
    // Image Processing Methods //
    // ************************ //
    /**
     * rotate image 90 degrees
     */
    NgxDocScannerComponent.prototype.rotateImage = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.processing.emit(true);
            setTimeout(function () {
                var dst = cv.imread(_this.editedImage);
                // const dst = new cv.Mat();
                cv.transpose(dst, dst);
                cv.flip(dst, dst, 1);
                cv.imshow(_this.editedImage, dst);
                // src.delete();
                dst.delete();
                // save current preview dimensions and positions
                var initialPreviewDimensions = { width: 0, height: 0 };
                Object.assign(initialPreviewDimensions, _this.previewDimensions);
                var initialPositions = Array.from(_this.points);
                // get new dimensions
                // set new preview pane dimensions
                _this.setPreviewPaneDimensions(_this.editedImage);
                // get preview pane resize ratio
                var previewResizeRatios = {
                    width: _this.previewDimensions.width / initialPreviewDimensions.width,
                    height: _this.previewDimensions.height / initialPreviewDimensions.height
                };
                // set new preview pane dimensions
                _this.limitsService.rotateClockwise(previewResizeRatios, initialPreviewDimensions, initialPositions);
                _this.showPreview().then(function () {
                    _this.processing.emit(false);
                    resolve();
                });
            }, 30);
        });
    };
    /**
     * detects the contours of the document and
     **/
    NgxDocScannerComponent.prototype.detectContours = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.processing.emit(true);
            setTimeout(function () {
                // load the image and compute the ratio of the old height to the new height, clone it, and resize it
                var processingResizeRatio = 0.5;
                var dst = cv.imread(_this.editedImage);
                var dsize = new cv.Size(dst.rows * processingResizeRatio, dst.cols * processingResizeRatio);
                var ksize = new cv.Size(5, 5);
                // convert the image to grayscale, blur it, and find edges in the image
                cv.cvtColor(dst, dst, cv.COLOR_RGBA2GRAY, 0);
                cv.GaussianBlur(dst, dst, ksize, 0, 0, cv.BORDER_DEFAULT);
                cv.Canny(dst, dst, 75, 200);
                // find contours
                cv.threshold(dst, dst, 120, 200, cv.THRESH_BINARY);
                var contours = new cv.MatVector();
                var hierarchy = new cv.Mat();
                cv.findContours(dst, contours, hierarchy, cv.RETR_CCOMP, cv.CHAIN_APPROX_SIMPLE);
                var rect = cv.boundingRect(dst);
                dst.delete();
                hierarchy.delete();
                contours.delete();
                // transform the rectangle into a set of points
                Object.keys(rect).forEach(function (key) {
                    rect[key] = rect[key] * _this.imageResizeRatio;
                });
                var contourCoordinates = [
                    new PositionChangeData({ x: rect.x, y: rect.y }, ['left', 'top']),
                    new PositionChangeData({ x: rect.x + rect.width, y: rect.y }, ['right', 'top']),
                    new PositionChangeData({ x: rect.x + rect.width, y: rect.y + rect.height }, ['right', 'bottom']),
                    new PositionChangeData({ x: rect.x, y: rect.y + rect.height }, ['left', 'bottom']),
                ];
                _this.limitsService.repositionPoints(contourCoordinates);
                // this.processing.emit(false);
                resolve();
            }, 30);
        });
    };
    /**
     * apply perspective transform
     */
    NgxDocScannerComponent.prototype.transform = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.processing.emit(true);
            setTimeout(function () {
                var dst = cv.imread(_this.editedImage);
                // create source coordinates matrix
                var sourceCoordinates = [
                    _this.getPoint(['top', 'left']),
                    _this.getPoint(['top', 'right']),
                    _this.getPoint(['bottom', 'right']),
                    _this.getPoint(['bottom', 'left'])
                ].map(function (point) {
                    return [point.x / _this.imageResizeRatio, point.y / _this.imageResizeRatio];
                });
                // get max width
                var bottomWidth = _this.getPoint(['bottom', 'right']).x - _this.getPoint(['bottom', 'left']).x;
                var topWidth = _this.getPoint(['top', 'right']).x - _this.getPoint(['top', 'left']).x;
                var maxWidth = Math.max(bottomWidth, topWidth) / _this.imageResizeRatio;
                // get max height
                var leftHeight = _this.getPoint(['bottom', 'left']).y - _this.getPoint(['top', 'left']).y;
                var rightHeight = _this.getPoint(['bottom', 'right']).y - _this.getPoint(['top', 'right']).y;
                var maxHeight = Math.max(leftHeight, rightHeight) / _this.imageResizeRatio;
                // create dest coordinates matrix
                var destCoordinates = [
                    [0, 0],
                    [maxWidth - 1, 0],
                    [maxWidth - 1, maxHeight - 1],
                    [0, maxHeight - 1]
                ];
                // convert to open cv matrix objects
                var Ms = cv.matFromArray(4, 1, cv.CV_32FC2, [].concat.apply([], __spread(sourceCoordinates)));
                var Md = cv.matFromArray(4, 1, cv.CV_32FC2, [].concat.apply([], __spread(destCoordinates)));
                var transformMatrix = cv.getPerspectiveTransform(Ms, Md);
                // set new image size
                var dsize = new cv.Size(maxWidth, maxHeight);
                // perform warp
                cv.warpPerspective(dst, dst, transformMatrix, dsize, cv.INTER_LINEAR, cv.BORDER_CONSTANT, new cv.Scalar());
                cv.imshow(_this.editedImage, dst);
                dst.delete();
                Ms.delete();
                Md.delete();
                transformMatrix.delete();
                _this.setPreviewPaneDimensions(_this.editedImage);
                _this.showPreview().then(function () {
                    _this.processing.emit(false);
                    resolve();
                });
            }, 30);
        });
    };
    /**
     * applies the selected filter to the image
     * @param preview - when true, will not apply the filter to the edited image but only display a preview.
     * when false, will apply to editedImage
     */
    NgxDocScannerComponent.prototype.applyFilter = function (preview) {
        var _this = this;
        return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
            var options, dst;
            var _this = this;
            return __generator(this, function (_a) {
                this.processing.emit(true);
                options = {
                    blur: false,
                    th: true,
                    thMode: cv.ADAPTIVE_THRESH_MEAN_C,
                    thMeanCorrection: 10,
                    thBlockSize: 25,
                    thMax: 255,
                    grayScale: true,
                };
                dst = cv.imread(this.editedImage);
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
                setTimeout(function () { return __awaiter(_this, void 0, void 0, function () {
                    var ksize;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                if (options.grayScale) {
                                    cv.cvtColor(dst, dst, cv.COLOR_RGBA2GRAY, 0);
                                }
                                if (options.blur) {
                                    ksize = new cv.Size(5, 5);
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
                                return [4 /*yield*/, this.showPreview(dst)];
                            case 1:
                                _a.sent();
                                this.processing.emit(false);
                                resolve();
                                return [2 /*return*/];
                        }
                    });
                }); }, 30);
                return [2 /*return*/];
            });
        }); });
    };
    /**
     * resize an image to fit constraints set in options.maxImageDimensions
     */
    NgxDocScannerComponent.prototype.resize = function (image) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.processing.emit(true);
            setTimeout(function () {
                var src = cv.imread(image);
                var currentDimensions = {
                    width: src.size().width,
                    height: src.size().height
                };
                var resizeDimensions = {
                    width: 0,
                    height: 0
                };
                if (currentDimensions.width > _this.options.maxImageDimensions.width) {
                    resizeDimensions.width = _this.options.maxImageDimensions.width;
                    resizeDimensions.height = _this.options.maxImageDimensions.width / currentDimensions.width * currentDimensions.height;
                    if (resizeDimensions.height > _this.options.maxImageDimensions.height) {
                        resizeDimensions.height = _this.options.maxImageDimensions.height;
                        resizeDimensions.width = _this.options.maxImageDimensions.height / currentDimensions.height * currentDimensions.width;
                    }
                    var dsize = new cv.Size(Math.floor(resizeDimensions.width), Math.floor(resizeDimensions.height));
                    cv.resize(src, src, dsize, 0, 0, cv.INTER_AREA);
                    var resizeResult = document.createElement('canvas');
                    cv.imshow(resizeResult, src);
                    src.delete();
                    _this.processing.emit(false);
                    resolve(resizeResult);
                }
                else {
                    _this.processing.emit(false);
                    resolve(image);
                }
            }, 30);
        });
    };
    /**
     * display a preview of the image on the preview canvas
     */
    NgxDocScannerComponent.prototype.showPreview = function (image) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var src;
            if (image) {
                src = image;
            }
            else {
                src = cv.imread(_this.editedImage);
            }
            var dst = new cv.Mat();
            var dsize = new cv.Size(0, 0);
            cv.resize(src, dst, dsize, _this.imageResizeRatio, _this.imageResizeRatio, cv.INTER_AREA);
            cv.imshow(_this.previewCanvas.nativeElement, dst);
            src.delete();
            dst.delete();
            resolve();
        });
    };
    // *************** //
    // Utility Methods //
    // *************** //
    /**
     * set preview canvas dimensions according to the canvas element of the original image
     */
    NgxDocScannerComponent.prototype.setPreviewPaneDimensions = function (img) {
        // set preview pane dimensions
        this.previewDimensions = this.calculateDimensions(img.width, img.height);
        this.previewCanvas.nativeElement.width = this.previewDimensions.width;
        this.previewCanvas.nativeElement.height = this.previewDimensions.height;
        this.imageResizeRatio = this.previewDimensions.width / img.width;
        this.imageDivStyle = {
            width: this.previewDimensions.width + this.options.cropToolDimensions.width + 'px',
            height: this.previewDimensions.height + this.options.cropToolDimensions.height + 'px',
            'margin-left': "calc((100% - " + (this.previewDimensions.width + 10) + "px) / 2 + " + this.options.cropToolDimensions.width / 2 + "px)",
            'margin-right': "calc((100% - " + (this.previewDimensions.width + 10) + "px) / 2 - " + this.options.cropToolDimensions.width / 2 + "px)",
        };
        this.limitsService.setPaneDimensions({ width: this.previewDimensions.width, height: this.previewDimensions.height });
    };
    /**
     * calculate dimensions of the preview canvas
     */
    NgxDocScannerComponent.prototype.calculateDimensions = function (width, height) {
        var ratio = width / height;
        var maxWidth = this.screenDimensions.width > this.maxPreviewWidth ?
            this.maxPreviewWidth : this.screenDimensions.width - 40;
        var maxHeight = this.screenDimensions.height - 240;
        var calculated = {
            width: maxWidth,
            height: Math.round(maxWidth / ratio),
            ratio: ratio
        };
        if (calculated.height > maxHeight) {
            calculated.height = maxHeight;
            calculated.width = Math.round(maxHeight * ratio);
        }
        return calculated;
    };
    /**
     * returns a point by it's roles
     * @param roles - an array of roles by which the point will be fetched
     */
    NgxDocScannerComponent.prototype.getPoint = function (roles) {
        var _this = this;
        return this.points.find(function (point) {
            return _this.limitsService.compareArray(point.roles, roles);
        });
    };
    NgxDocScannerComponent.ctorParameters = function () { return [
        { type: NgxOpenCVService },
        { type: LimitsService },
        { type: MatBottomSheet }
    ]; };
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
    NgxDocScannerComponent = __decorate([
        Component({
            selector: 'ngx-doc-scanner',
            template: "<div [ngStyle]=\"editorStyle\" fxLayoutAlign=\"space-around\" style=\"direction: ltr !important\">\r\n  <div #imageContainer [ngStyle]=\"imageDivStyle\" style=\"margin: auto;\" >\r\n    <ng-container *ngIf=\"imageLoaded && mode === 'crop'\">\r\n      <ngx-shape-outine #shapeOutline [color]=\"options.cropToolColor\" [weight]=\"options.cropToolLineWeight\" [dimensions]=\"previewDimensions\"></ngx-shape-outine>\r\n      <ngx-draggable-point #topLeft [pointOptions]=\"options.pointOptions\" [startPosition]=\"{x: 0, y: 0}\" [limitRoles]=\"['top', 'left']\" [container]=\"imageContainer\"></ngx-draggable-point>\r\n      <ngx-draggable-point #topRight [pointOptions]=\"options.pointOptions\" [startPosition]=\"{x: previewDimensions.width, y: 0}\" [limitRoles]=\"['top', 'right']\" [container]=\"imageContainer\"></ngx-draggable-point>\r\n      <ngx-draggable-point #bottomLeft [pointOptions]=\"options.pointOptions\" [startPosition]=\"{x: 0, y: previewDimensions.height}\" [limitRoles]=\"['bottom', 'left']\" [container]=\"imageContainer\"></ngx-draggable-point>\r\n      <ngx-draggable-point #bottomRight [pointOptions]=\"options.pointOptions\" [startPosition]=\"{x: previewDimensions.width, y: previewDimensions.height}\" [limitRoles]=\"['bottom', 'right']\" [container]=\"imageContainer\"></ngx-draggable-point>\r\n    </ng-container>\r\n    <canvas #PreviewCanvas [ngStyle]=\"{'max-width': options.maxPreviewWidth}\" style=\"z-index: 5\" ></canvas>\r\n  </div>\r\n  <div class=\"editor-actions\" fxLayout=\"row\" fxLayoutAlign=\"space-around\" style=\"position: absolute; bottom: 0; width: 100vw\">\r\n    <ng-container *ngFor=\"let button of displayedButtons\" [ngSwitch]=\"button.type\">\r\n      <button mat-mini-fab *ngSwitchCase=\"'fab'\" [name]=\"button.name\" (click)=\"button.action()\" [color]=\"options.buttonThemeColor\">\r\n        <mat-icon>{{button.icon}}</mat-icon>\r\n      </button>\r\n      <button mat-raised-button *ngSwitchCase=\"'button'\" [name]=\"button.name\" (click)=\"button.action()\" [color]=\"options.buttonThemeColor\">\r\n        <mat-icon>{{button.icon}}</mat-icon>\r\n        <span>{{button.text}}}</span>\r\n      </button>\r\n    </ng-container>\r\n  </div>\r\n</div>\r\n\r\n\r\n",
            styles: [".editor-actions{padding:12px}.editor-actions button{margin:5px}"]
        }),
        __metadata("design:paramtypes", [NgxOpenCVService, LimitsService, MatBottomSheet])
    ], NgxDocScannerComponent);
    return NgxDocScannerComponent;
}());
/**
 * a class for generating configuration objects for the editor
 */
var ImageEditorConfig = /** @class */ (function () {
    function ImageEditorConfig(options) {
        var _this = this;
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
            Object.keys(options).forEach(function (key) {
                _this[key] = options[key];
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
    return ImageEditorConfig;
}());

var NgxDocumentScannerModule = /** @class */ (function () {
    function NgxDocumentScannerModule() {
    }
    NgxDocumentScannerModule_1 = NgxDocumentScannerModule;
    NgxDocumentScannerModule.forRoot = function (config) {
        return {
            ngModule: NgxDocumentScannerModule_1,
            providers: [
                { provide: OpenCvConfigToken, useValue: config },
            ],
        };
    };
    var NgxDocumentScannerModule_1;
    NgxDocumentScannerModule = NgxDocumentScannerModule_1 = __decorate([
        NgModule({
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
        })
    ], NgxDocumentScannerModule);
    return NgxDocumentScannerModule;
}());

/*
 * Public API Surface of ngx-document-scanner
 */

/**
 * Generated bundle index. Do not edit.
 */

export { NgxDocScannerComponent, NgxDocumentScannerModule, NgxDraggablePointComponent as ɵa, LimitsService as ɵb, NgxFilterMenuComponent as ɵc, NgxShapeOutlineComponent as ɵd };
//# sourceMappingURL=ngx-document-scanner.js.map
