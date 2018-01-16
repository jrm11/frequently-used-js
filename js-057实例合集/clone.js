/**
 * Created by Administrator on 2017/12/4.
 */
function clone(obj) {
    var o;
    if (typeof obj == 'object') {
        if (obj === null) {
            o = null;
        } else {
            if (obj instanceof Array) {
                o = [];
                for (var i = 0, len = obj.length; i < len; i++) {
                    o.push(obj[i]);
                }
            } else {
                o = {};
                for (var j in obj) {
                    o[j] = obj[j];
                }
            }
        }
    } else {
        o=obj;
    }
    return o;
}

var cloneO = clone({name:2});
console.log(cloneO);