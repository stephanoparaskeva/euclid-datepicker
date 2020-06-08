"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("react-native");
const datepicker_ios_ui_1 = __importDefault(require("./datepicker.ios.ui"));
const datepicker_android_ui_1 = __importDefault(require("./datepicker.android.ui"));
const DatePicker = react_native_1.Platform.select({
    android: datepicker_android_ui_1.default,
    ios: datepicker_ios_ui_1.default,
});
exports.default = DatePicker;
//# sourceMappingURL=index.js.map