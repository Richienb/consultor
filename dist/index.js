"use strict";
exports.__esModule = true;
function consultor() {
    function css(value, styles) {
        console.log("%c" + value, styles);
    }
    function log(value) {
        console.log(value);
    }
    function obj(ob) {
        console.log(JSON.parse(JSON.stringify(ob)));
    }
    function inf(el) {
        console.dir(el);
    }
    function err(value, code) {
        if (code === void 0) { code = null; }
        console.error(value, code);
    }
    function war(value, code) {
        if (code === void 0) { code = null; }
        console.warn(value, code);
    }
    function equ(exp, msg) {
        console.assert(exp, msg);
    }
    function cls() {
        console.clear();
    }
    function cnt(name) {
        if (name === void 0) { name = null; }
        console.count(name);
    }
    function cnr(name) {
        if (name === void 0) { name = null; }
        console.countReset(name);
    }
    function grp(name, ob, collapsed) {
        if (collapsed === void 0) { collapsed = false; }
        if (collapsed)
            console.groupCollapsed(name);
        else
            console.group(name);
        Object.entries(ob).forEach(function (i) {
            console.log(i[0], i[1]);
        });
        console.groupEnd();
    }
    function prf(name, func) {
        if (name === void 0) { name = null; }
        console.profile(name);
        func();
        console.profileEnd();
    }
    function tbl(ob) {
        console.table(ob);
    }
    function tme(name, func) {
        if (name === void 0) { name = null; }
        console.time();
        func();
        console.timeEnd();
    }
    function tms(name) {
        if (name === void 0) { name = null; }
        console.timeStamp(name);
    }
    function trc() {
        console.trace();
    }
    function vre(variable) {
        console.log({
            variable: variable
        });
    }
}
exports.consultor = consultor;
