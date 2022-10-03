"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Box_1 = require("../../Box");
var CheckIn_style_1 = require("./CheckIn.style");
function CheckIn() {
    return (<Box_1.Box>
      <CheckIn_style_1.CheckInCircleLink to="all">
        <Box_1.Box>
          <CheckIn_style_1.CheckInText>Let's start shopping!</CheckIn_style_1.CheckInText>
        </Box_1.Box>
      </CheckIn_style_1.CheckInCircleLink>
    </Box_1.Box>);
}
exports.default = CheckIn;
