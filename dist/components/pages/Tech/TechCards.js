"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Api_1 = require("../../Api/Api");
var Box_1 = require("../../Box");
var Card_1 = __importDefault(require("../../Card/Card"));
var Card_style_1 = require("../../Card/Card.style");
var Loading_1 = __importDefault(require("../../Loading/Loading"));
function TechCards() {
    var _a;
    var _b = (0, Api_1.GetProducts)(), error = _b.error, loading = _b.loading, data = _b.data;
    if (loading)
        return <Loading_1.default />;
    if (error)
        return <p>Error :(</p>;
    var products = ((_a = data === null || data === void 0 ? void 0 : data.categories) === null || _a === void 0 ? void 0 : _a.find(function (category) { return category.name === "tech"; })).products;
    return (<Box_1.Box as="ul" display="flex" flexWrap="wrap" m="-20px" alignItems="center">
      {products &&
            products.map(function (product) { return (<Card_style_1.ProductCard key={product.id}>
            {<Card_1.default product={product}/>}
          </Card_style_1.ProductCard>); })}
    </Box_1.Box>);
}
exports.default = TechCards;
