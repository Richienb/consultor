/**
 * @license
 * 
 * MIT License
 *
 * Copyright (c) 2019 Richie Bendall
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
export function consultor() {
    function css(value: any, styles: string) {
        console.log(`%c${value}`, styles)
    }

    function log(value: any) {
        console.log(value)
    }

    function obj(ob: object) {
        console.log(JSON.parse(JSON.stringify(ob)));
    }

    function inf(el: any) {
        console.dir(el)
    }

    function err(value: any, code = null) {
        console.error(value, code)
    }

    function war(value: any, code = null) {
        console.warn(value, code)
    }

    function equ(exp: any, msg: string) {
        console.assert(exp, msg)
    }

    function cls() {
        console.clear()
    }

    function cnt(name = null) {
        console.count(name)
    }

    function cnr(name = null) {
        console.countReset(name);
    }

    function grp(name: string, ob: any, collapsed = false) {
        if (collapsed) console.groupCollapsed(name);
        else console.group(name);
        Object.entries(ob).forEach(i => {
            console.log(i[0], i[1]);
        })
        console.groupEnd();
    }

    function prf(name = null, func: any) {
        console.profile(name);
        func()
        console.profileEnd();
    }

    function tbl(ob: object) {
        console.table(ob)
    }

    function tme(name = null, func: any) {
        console.time();
        func()
        console.timeEnd();
    }

    function tms(name = null) {
        console.timeStamp(name)
    }

    function trc() {
        console.trace();
    }

    function vre(variable: any) {
        console.log({
            variable
        })
    }
}