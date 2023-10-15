"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyLabel = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
require("./MyLabel.css");
var MyLabel = function (_a) {
    var label = _a.label, _b = _a.size, size = _b === void 0 ? 'normal' : _b, _c = _a.allCaps, allCaps = _c === void 0 ? false : _c, color = _a.color, _d = _a.fontColor, fontColor = _d === void 0 ? '' : _d, _e = _a.backgroundColor, backgroundColor = _e === void 0 ? 'transparent' : _e;
    return ((0, jsx_runtime_1.jsx)("span", { className: "".concat(size, " ").concat(color, " label"), style: { color: fontColor, backgroundColor: backgroundColor, padding: '20px' }, children: allCaps ? label.toUpperCase() : label }));
};
exports.MyLabel = MyLabel;
