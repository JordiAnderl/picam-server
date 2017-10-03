"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
let router = express_1.Router();
/* GET home page. */
router.get('/', function (req, res, next) {
    // res.sendFile(path.join(__dirname, "../public", "indexpalo3.html"));
    res.render('index', { title: 'Picam 0' });
});
router.get(`/:name`, (req, res) => {
    // Extract the name from the request parameters
    let { name } = req.params;
    // Greet the given name
    res.render('greeter', { name: name });
});
exports.index = router;
//# sourceMappingURL=index.js.map