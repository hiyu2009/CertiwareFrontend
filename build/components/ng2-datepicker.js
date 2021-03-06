/// <reference path="../../typings/tsd.d.ts" />
System.register(['angular2/core', 'angular2/common', 'moment'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, moment_;
    var moment, DatePicker;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (moment_1) {
                moment_ = moment_1;
            }],
        execute: function() {
            moment = moment_['default'] || moment_;
            DatePicker = (function () {
                function DatePicker(cd, viewContainer) {
                    this.changed = new core_1.EventEmitter();
                    cd.valueAccessor = this;
                    this.cd = cd;
                    this.viewContainer = viewContainer;
                    this.el = viewContainer.element.nativeElement;
                    this.init();
                }
                DatePicker.prototype.ngAfterViewInit = function () {
                    this.initValue();
                };
                DatePicker.prototype.openDatepicker = function () {
                    this.isOpened = true;
                };
                DatePicker.prototype.closeDatepicker = function () {
                    this.isOpened = false;
                };
                DatePicker.prototype.prevYear = function () {
                    this.date.subtract(1, 'Y');
                    this.generateCalendar(this.date);
                };
                DatePicker.prototype.prevMonth = function () {
                    this.date.subtract(1, 'M');
                    this.generateCalendar(this.date);
                };
                DatePicker.prototype.nextYear = function () {
                    this.date.add(1, 'Y');
                    this.generateCalendar(this.date);
                };
                DatePicker.prototype.nextMonth = function () {
                    this.date.add(1, 'M');
                    this.generateCalendar(this.date);
                };
                DatePicker.prototype.selectDate = function (e, date) {
                    e.preventDefault();
                    if (this.isSelected(date))
                        return;
                    var selectedDate = moment(date.day + '.' + date.month + '.' + date.year, 'DD.MM.YYYY');
                    this.setValue(selectedDate);
                    this.closeDatepicker();
                    this.changed.emit(selectedDate.toDate());
                };
                DatePicker.prototype.generateCalendar = function (date) {
                    var lastDayOfMonth = date.endOf('month').date();
                    var month = date.month();
                    var year = date.year();
                    var n = 1;
                    var firstWeekDay = null;
                    this.dateValue = date.format('MMMM YYYY');
                    this.days = [];
                    if (this.firstWeekDaySunday === true) {
                        firstWeekDay = date.set('date', 2).day();
                    }
                    else {
                        firstWeekDay = date.set('date', 1).day();
                    }
                    if (firstWeekDay !== 1) {
                        n -= (firstWeekDay + 6) % 7;
                    }
                    for (var i = n; i <= lastDayOfMonth; i += 1) {
                        if (i > 0) {
                            this.days.push({ day: i, month: month + 1, year: year, enabled: true });
                        }
                        else {
                            this.days.push({ day: null, month: null, year: null, enabled: false });
                        }
                    }
                };
                DatePicker.prototype.isSelected = function (date) {
                    var selectedDate = moment(date.day + '.' + date.month + '.' + date.year, 'DD.MM.YYYY');
                    return selectedDate.toDate().getTime() === this.cannonical;
                };
                DatePicker.prototype.generateDayNames = function () {
                    this.dayNames = [];
                    var date = this.firstWeekDaySunday === true ? moment('2015-06-07') : moment('2015-06-01');
                    for (var i = 0; i < 7; i += 1) {
                        this.dayNames.push(date.format('ddd'));
                        date.add('1', 'd');
                    }
                };
                DatePicker.prototype.initMouseEvents = function () {
                    var _this = this;
                    var body = document.getElementsByTagName('body')[0];
                    body.addEventListener('click', function (e) {
                        if (!_this.isOpened || !e.target)
                            return;
                        if (_this.el !== e.target && !_this.el.contains(e.target)) {
                            _this.closeDatepicker();
                        }
                    }, false);
                };
                DatePicker.prototype.setValue = function (value) {
                    var val = moment(value, this.modelFormat || 'YYYY-MM-DD');
                    this.viewValue = val.format(this.viewFormat || 'Do MMMM YYYY');
                    this.cd.viewToModelUpdate(val.format(this.modelFormat || 'YYYY-MM-DD'));
                    this.cannonical = val.toDate().getTime();
                };
                DatePicker.prototype.initValue = function () {
                    var _this = this;
                    setTimeout(function () {
                        if (!_this.initDate) {
                            _this.setValue(moment().format(_this.modelFormat || 'YYYY-MM-DD'));
                        }
                        else {
                            _this.setValue(moment(_this.initDate, _this.modelFormat || 'YYYY-MM-DD'));
                        }
                    });
                };
                DatePicker.prototype.writeValue = function (value) {
                    if (!value)
                        return;
                    this.setValue(value);
                };
                DatePicker.prototype.registerOnChange = function (fn) {
                    this.onChange = fn;
                };
                DatePicker.prototype.registerOnTouched = function (fn) {
                    this.onTouched = fn;
                };
                DatePicker.prototype.init = function () {
                    this.isOpened = false;
                    this.date = moment();
                    this.firstWeekDaySunday = false;
                    this.generateDayNames();
                    this.generateCalendar(this.date);
                    this.initMouseEvents();
                };
                __decorate([
                    core_1.Input('model-format'), 
                    __metadata('design:type', String)
                ], DatePicker.prototype, "modelFormat", void 0);
                __decorate([
                    core_1.Input('view-format'), 
                    __metadata('design:type', String)
                ], DatePicker.prototype, "viewFormat", void 0);
                __decorate([
                    core_1.Input('init-date'), 
                    __metadata('design:type', String)
                ], DatePicker.prototype, "initDate", void 0);
                __decorate([
                    core_1.Input('first-week-day-sunday'), 
                    __metadata('design:type', Boolean)
                ], DatePicker.prototype, "firstWeekDaySunday", void 0);
                __decorate([
                    core_1.Input('static'), 
                    __metadata('design:type', Boolean)
                ], DatePicker.prototype, "isStatic", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], DatePicker.prototype, "changed", void 0);
                DatePicker = __decorate([
                    core_1.Component({
                        selector: 'datepicker[ngModel]',
                        template: "\n  <input type=\"text\"\n         class=\"ng-datepicker-input\"\n         (focus)=\"openDatepicker()\"\n         [value]=\"viewValue\"\n         [hidden]=\"isStatic\"\n         readonly>\n\n  <div class=\"ng-datepicker\" *ngIf=\"isStatic || isOpened\" [ngClass]=\"{ static: isStatic }\">\n    <div class=\"controls\">\n      <div class=\"left\">\n        <i class=\"fa fa-backward prev-year-btn\" (click)=\"prevYear()\"></i>\n        <i class=\"fa fa-angle-left prev-month-btn\" (click)=\"prevMonth()\"></i>\n      </div>\n      <span class=\"date\">\n        {{ dateValue }}\n      </span>\n      <div class=\"right\">\n        <i class=\"fa fa-angle-right next-month-btn\" (click)=\"nextMonth()\"></i>\n        <i class=\"fa fa-forward next-year-btn\" (click)=\"nextYear()\"></i>\n      </div>\n    </div>\n    <div class=\"day-names\">\n      <span *ngFor=\"#dn of dayNames\">\n        <span>{{ dn }}</span>\n      </span>\n    </div>\n    <div class=\"calendar\">\n      <span *ngFor=\"#d of days; #i = index;\">\n        <span class=\"day\" [ngClass]=\"{'disabled': !d.enabled, 'selected': isSelected(d)}\" (click)=\"selectDate($event, d)\">\n          {{ d.day }}\n        </span>\n      </span>\n    </div>\n  </div>\n  ",
                        styles: ["\n  .ng-datepicker-input {\n    position: relative;\n    width: 100%;\n    cursor: pointer;\n  }\n\n  .ng-datepicker {\n    position: absolute;\n    z-index: 99;\n    width: 250px;\n    background: #fff;\n    font-size: 12px;\n    color: #565a5c;\n    display: inline-block;\n    border: 1px solid #c4c4c4;\n    border-radius: 2px;\n    margin: 0;\n    padding: 0;\n  }\n\n  .ng-datepicker > .controls {\n    width: 250px;\n    display: inline-block;\n    padding: 5px 0 0 0;\n  }\n\n  .ng-datepicker > .controls i {\n    font-size: 25px;\n    cursor: pointer;\n  }\n\n  .ng-datepicker > .controls > .left {\n    width: 35px;\n    display: inline-block;\n    float: left;\n    margin: 5px 0 0 3px;\n  }\n\n  .ng-datepicker > .controls > .left > i.prev-year-btn {\n    float: left;\n    display: block;\n    font-size: 14px;\n    opacity: 0.4;\n  }\n\n  .ng-datepicker > .controls > .left > i.prev-month-btn {\n    float: left;\n    margin: -5px 0 0 9px;\n    display: block;\n  }\n\n  .ng-datepicker > .controls > span.date {\n    width: 170px;\n    text-align: center;\n    font-size: 14px;\n    color: #565a5c;\n    font-weight: bold;\n    float: left;\n    padding: 3px 0 0 0;\n  }\n\n  .ng-datepicker > .controls > .right {\n    width: 35px;\n    display: inline-block;\n    float: right;\n    margin: 5px 0 0 0;\n  }\n\n  .ng-datepicker > .controls > .right > i.next-year-btn {\n    float: left;\n    display: block;\n    font-size: 14px;\n    opacity: 0.4;\n  }\n\n  .ng-datepicker > .controls > .right > i.next-month-btn {\n    float: left;\n    margin: -6px 9px 0 0;\n  }\n\n  .ng-datepicker > .day-names {\n    width: 250px;\n    border-bottom: 1px solid #c4c4c4;\n    display: inline-block;\n  }\n\n  .ng-datepicker > .day-names > span {\n    width: 35.7px;\n    text-align: center;\n    color: #82888a;\n    float: left;\n    display: block;\n  }\n\n  .ng-datepicker > .calendar {\n    width: 255px;\n    display: inline-block;\n    margin: -3px 0 -3.5px -1px;\n    padding: 0;\n  }\n\n  .ng-datepicker > .calendar > span > span.day {\n    width: 35px;\n    height: 35px;\n    border-left: 1px solid #c4c4c4;\n    border-bottom: 1px solid #c4c4c4;\n    float: left;\n    display: block;\n    color: #565a5c;\n    text-align: center;\n    font-weight: bold;\n    line-height: 35px;\n    margin: 0;\n    padding: 0;\n    font-size: 14px;\n    cursor: pointer;\n  }\n\n  .ng-datepicker > .calendar > span:last-child > span.day {\n    border-right: 1px solid #c4c4c4;\n  }\n\n  .ng-datepicker > .calendar > span:nth-child(7n) > span.day {\n    border-right: none;\n  }\n\n  .ng-datepicker > .calendar > span > span.day.disabled {\n    border-left: 1px solid transparent;\n    cursor: default;\n    pointer-events: none;\n  }\n\n  .ng-datepicker > .calendar > span > span.day:hover {\n    background: #2193b0;\n    color: #fff;\n  }\n\n  .ng-datepicker > .calendar > span > span.day.selected {\n    background: #186c81;\n    cursor: default;\n    pointer-events: none;\n    color: #fff;\n  }\n\n  .ng-datepicker.static {\n    position: relative;\n    width: 100%;\n    box-sizing: border-box;\n  }\n\n  .ng-datepicker.static > .controls {\n    width: 100%;\n    text-align: center;\n    background-color: #eee;\n    padding: 5px 0;\n  }\n\n  .ng-datepicker.static > .controls > .left > i.prev-month-btn {\n    margin-top: -6px;\n  }\n\n  .ng-datepicker.static > .controls > span.date {\n    width: auto;\n    float: none;\n    display: inline-block;\n    padding-top: 4px;\n  }\n\n  .ng-datepicker.static > .day-names {\n    width: 100%;\n    background-color: #f9f9f9;\n  }\n\n  .ng-datepicker.static > .day-names > span {\n    width: calc(100%/7);\n  }\n\n  .ng-datepicker.static > .calendar {\n    width: 100%;\n  }\n\n  .ng-datepicker.static > .calendar > span > span.day {\n    width: calc(100%/7 - 1px);\n    height: 50px;\n    line-height: 50px;\n  }\n  "],
                        providers: [],
                        directives: [common_1.FORM_DIRECTIVES, common_1.NgIf, common_1.NgFor, common_1.NgClass],
                        pipes: []
                    }), 
                    __metadata('design:paramtypes', [common_1.NgModel, core_1.ViewContainerRef])
                ], DatePicker);
                return DatePicker;
            }());
            exports_1("DatePicker", DatePicker);
        }
    }
});
//# sourceMappingURL=ng2-datepicker.js.map