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

export class consultor {
    css(value: any, styles: string) {
        console.log(`%c${value}`, styles)
    }

    log(value: any) {
        console.log(value)
    }

    obj(ob: object) {
        console.log(JSON.parse(JSON.stringify(ob)));
    }

    inf(el: any) {
        console.dir(el)
    }

    err(value: any, code = "") {
        console.error(value, code)
    }

    war(value: any, code = "") {
        console.warn(value, code)
    }

    equ(exp: any, msg: string) {
        console.assert(exp, msg)
    }

    cls() {
        console.clear()
    }

    cnt(label = "default") {
        console.count(label)
    }

    cnr(label = "default") {
        // @ts-ignore: Property 'countReset' does not exist on type 'Console'.
        console.countReset(label);
    }

    grp(label: string, ob: object, collapsed = false) {
        if (collapsed) console.groupCollapsed(label);
        else console.group(label);
        Object.entries(ob).forEach(i => {
            console.log(i[0], i[1]);
        })
        console.groupEnd();
    }

    met() {
        return console.methods
    }

    prf(label = "default", func: any) {
        console.profile(label);
        func()
        console.profileEnd();
    }

    tbl(ob: object) {
        console.table(ob)
    }

    tme(label = "default", func: any) {
        console.time(label);
        func()
        console.timeEnd(label);
    }

    tms(label = "default") {
        if (console.markTimeline) console.markTimeline(label)
        else console.timeStamp(label)
    }

    trc() {
        console.trace();
    }

    vre(variable: any) {
        console.log({
            variable
        })
    }
}
