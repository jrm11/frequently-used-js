
    return document.getElementById(id);
}

// 验证规则
var regs = {
   userNameReg: /^(([\u4e00-\u9fa5])|[a-zA-Z0-9-_]){4,20}$/,
    pwdReg: /^.{6,20}$/,
    numReg: /\d/,
    strReg: /[a-zA-Z0-9]/,
    tsReg: /[^\u4e00-\u9fa5a-zA-Z0-9-_~!@#$%^&*`]/,
    emailReg: /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
    phoneReg: /^1(3|4|5|7|8)\d{9}$/
}

window.onload = function() {
    var userName = $("userName");
    var pwd = $("pwd");
    var pwd2 = $("pwd2");
    var email = $("email");
    var mobile = $("mobile");
    var ck = $("ck");
    var btn = $("btn-regester");

    userName.onkeyup = userName.onfocus = userName.onblur = function(e) {
        var e = e || window.event;
        checkUserName(e);
    }

    function checkUserName(ev) {
        var type;
        if (ev) {
            type = ev.type;
            // console.log(type);
        }
        var value = userName.value;
        var box = userName.parentNode;
        var tip = box.nextElementSibling;
        // console.log(tip);
        var span = tip.lastElementChild;
        // console.log(span);
        if (type == 'focus') {
            if (value == '') {
                box.className = "box";
                tip.className = "tip default";
                span.innerHTML = "支持汉字、字母、数字、“-”“_”的组合，4-20个字符";
                // debugger
                return false;
            }
        }
        if (type == 'blur') {
            if (value == '') {
                box.className = "box";
                tip.className = "tip hide";
                return false;
            }
        }

        if (value == "") {

            box.className = "box error";
            tip.className = "tip error";
            span.innerHTML = "用户名不能为空";
            return false;
        } else if (regs.userNameReg.test(value)) {
            box.className = "box right";
            tip.className = "tip hide";
            return true;
        } else {
            box.className = "box error";
            tip.className = "tip error";
            span.innerHTML = "格式错误，仅支持汉字、字母、数字、“-”“_”的组合";
            return false;
        }
    }


    pwd.onkeyup = pwd.onfocus = pwd.onblur = function(e) {
        var e = e || window.event;
        checkPwd(e);
    }

    function checkPwd(ev) {
        var type;
        if (ev) {
            type = ev.type;
        }

        var value = pwd.value;
        var box = pwd.parentNode;
        var tip = box.nextElementSibling;
        var span = tip.lastElementChild;

        if (type == 'focus') {
            if (value == '') {
                box.className = "box";
                tip.className = "tip default";
                span.innerHTML = "建议使用字母、数字和符号两种以上的组合,6-20个字符";
                return false;
            }
        }

        if (type == 'blur') {
            if (value == '') {
                box.className = "box";
                tip.className = "tip hide";
                return false;
            }
        }

        if (value == '') {
            box.className = "box error";
            tip.className = "tip error";
            span.innerHTML = "密码不能为空";
            return false;
        } else if (regs.pwdReg.test(value)) {
            box.className = "box right";

            var level = getPwdLevel(value);
            switch (level) {
                case 1:
                    tip.className = "tip ruo";
                    break;
                case 2:
                    tip.className = "tip zhong";
                    break;
                case 3:
                    tip.className = "tip qiang"
                    break;
            }

            return true;

        } else {
            box.className = "box error";
            tip.className = "tip error";
            span.innerHTML = "密码长度应在6-20个字符之间";
            return false;
        }
    }

    function getPwdLevel(pwd) {
        var level = 0;
        var numReg = true,
            strReg = true,
            tsReg = true;
        for (var i = 0; i < pwd.length; i++) {
            if (numReg && regs.numReg.test(pwd[i])) {
                level++;
                numReg = false;
                continue;
            }
            if (strReg && regs.strReg.test(pwd[i])) {
                level++;
                strReg = false;
                continue;
            }
            if (tsReg && regs.tsReg.test(pwd[i])) {
                level++;
                tsReg = false;
            }
        }
        return level;
    }

    pwd2.onkeyup = pwd2.onfocus = pwd2.onblur = function(e) {
        var e = e || window.event;
        checkPwd2(e);
    }

    function checkPwd2(ev) {
        var type;
        if (ev) {
            type = ev.type;
            console.log(type);
        }

        var value1 = pwd.value;
        var value = pwd2.value;
        var box = pwd2.parentNode;
        var tip = box.nextElementSibling;
        var span = tip.lastElementChild;
        if (type == 'focus') {
            if (value == '') {
                box.className = 'box';
                tip.className = 'tip default';
                span.innerHTML = "请再次输入密码";
                return false;
            }
        }

        if (value == '') {
            box.className = 'box error';
            tip.className = 'tip error';
            span.innerHTML = "请再次输入密码";
            return false;
        } else if (value == value1) {
            box.className = 'box right';
            tip.className = 'tip hide';
            return true;
        } else {
            box.className = "box error";
            tip.className = 'tip error';
            span.innerHTML = "两次密码不一致";
            return false;
        }

    }

    email.onkeyup = email.onfocus = email.onblur = function(e) {
        var e = e || window.event;
        checkEmail(e);
    }

    function checkEmail(ev) {
        var type;
        if (ev) {
            type = ev.type;
            console.log(type);
        }
        var value = email.value;
        var box = email.parentNode;
        var tip = box.nextElementSibling;
        var span = tip.lastElementChild;
        if (type == 'focus') {
            if (value == '') {
                box.className = 'box';
                tip.className = 'tip default';
                span.innerHTML = "请输入邮箱号码";
                return false;
            }

        }
        if (type == 'blur') {
            if (value == '') {
                box.className = "box";
                tip.className = "tip hide";
                return false;
            }
        }

        if (value == '') {
            box.className = 'box error';
            tip.className = 'tip error';
            span.innerHTML = "邮箱不能为空";
        } else if (regs.emailReg.test(value)) {
            box.className = 'box right';
            tip.className = 'tio hide';
            return true;
        } else {
            box.className = 'box error';
            tip.className = 'tip error';
            span.innerHTML = "邮箱格式不正确";
            return false;
        }


    }
    mobile.onkeyup = mobile.onfocus = mobile.onblur = function(e) {
        var e = e || window.event;
        checkMobile(e);
    }

    function checkMobile(ev) {
        var type;
        if (ev) {
            type = ev.type;
            console.log(type);
        }

        var value = mobile.value;
        var box = mobile.parentNode;
        var tip = box.nextElementSibling;
        var span = tip.lastElementChild;
        // var span = tip.lastElementChild;

        if (type == 'focus') {
            if (value == '') {
                box.className = 'box';
                tip.className = 'tip default';
                span.innerHTML = "请输入手机号";
            }
        }
        if (type == 'blur') {
            if (value == '') {
                box.className = 'box';
                tip.className = 'tip hide';
                return false;
            }
        }

        if (value == '') {
            box.className = 'box error';
            tip.className = 'tip error';
            span.innerHTML = "手机号不能为空";
        } else if (regs.phoneReg.test(value)) {
            box.className = 'box';
            tip.className = 'tip hide';
            return true;
        } else {
            box.className = 'box error';
            tip.className = 'tip error';
            span.innerHTML = "手机号格式不正确";
            return false;
        }
    }


}
