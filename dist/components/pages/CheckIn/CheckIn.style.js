"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckInText = exports.CheckInCircleLink = void 0;
var react_router_dom_1 = require("react-router-dom");
var styled_components_1 = __importDefault(require("styled-components"));
exports.CheckInCircleLink = (0, styled_components_1.default)(react_router_dom_1.NavLink)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  border: 1px solid #5ece7b;\n  display: block;\n  margin: 100px auto 0;\n  width: 500px;\n  height: 500px;\n  border-radius: 50%;\n  text-align: center;\n  opacity: ", ";\n  transition: opacity 600ms linear;\n  :hover,\n  :focus {\n    transform: rotateZ(-360deg);\n    opacity: 1;\n    box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 20px;\n  }\n"], ["\n  border: 1px solid #5ece7b;\n  display: block;\n  margin: 100px auto 0;\n  width: 500px;\n  height: 500px;\n  border-radius: 50%;\n  text-align: center;\n  opacity: ", ";\n  transition: opacity 600ms linear;\n  :hover,\n  :focus {\n    transform: rotateZ(-360deg);\n    opacity: 1;\n    box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 20px;\n  }\n"])), function (props) { return (props.currentStep === props.steps ? 0.5 : 1); });
exports.CheckInText = styled_components_1.default.h1(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  margin-top: 220px;\n  font-size: 45px;\n  color: black;\n  font-weight: 700;\n"], ["\n  margin-top: 220px;\n  font-size: 45px;\n  color: black;\n  font-weight: 700;\n"])));
var templateObject_1, templateObject_2;
