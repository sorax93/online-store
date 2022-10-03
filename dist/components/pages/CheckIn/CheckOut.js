"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Box_1 = require("../../Box");
var CartModal_style_1 = require("../../CartModal/CartModal.style");
var Checkout_style_1 = require("../CheckOut/Checkout.style");
function CheckOut() {
    return (<Box_1.Box display="flex">
      <Box_1.Box border="1px solid #5ECE7B" m="0 auto" width="500px" height="500px" borderRadius="50%" textAlign="center">
        <Checkout_style_1.CheckOutTitle>Welcome</Checkout_style_1.CheckOutTitle>
        <Checkout_style_1.CheckOutText>Let's start shopping!</Checkout_style_1.CheckOutText>
        <CartModal_style_1.CartLinkBtnSecond to="/all">Start shopping</CartModal_style_1.CartLinkBtnSecond>
        <></>
      </Box_1.Box>
    </Box_1.Box>);
}
exports.default = CheckOut;
