"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageItem = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
exports.ImageItem = styled_components_1.default.li(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  margin: 20px;\n  cursor: pointer;\n  transform: scale(1);\n  transition: transform 300ms ease-in-out;\n\n  :hover,\n  :focus {\n    transform: scale(1.5);\n  }\n"], ["\n  margin: 20px;\n  cursor: pointer;\n  transform: scale(1);\n  transition: transform 300ms ease-in-out;\n\n  :hover,\n  :focus {\n    transform: scale(1.5);\n  }\n"])));
var templateObject_1;
