// var Base={
//     getId:function(id){
//         return document.getElementById(id);
//     },
//     getName:function(name){
//         return document.getElementsByName(name);
//     },
//
//     getTagName:function(tag){
//         return document.getElementsByName(tag);
//     }
// }
var $ = function(){
    return new Base();
}
function Base(){
    this.ele = [];
    this.getId = function(id){
        this.ele.push(document.getElementById(id));
        return this;
    };

    this.getTagName = function(tag){
        var tags = document.getElementsByTagName(tag);
        for(var i = 0,len = tags.length; i< len; i++){
            this.ele.push(tags[i]);
        }
        return this;
    }
}

Base.prototype.css = function(attr,val){
    for(var i = 0; i< this.ele.length; i++){
        this.ele[i].style[attr] = val;
    }
    return this;
}

Base.prototype.html = function(str){
    for(var i = 0; i< this.ele.length; i++){
        this.ele[i].innerHTML = str;
    }
    return this;
}

Base.prototype.click = function(fn){
    for(var i = 0; i< this.ele.length; i++){
        this.ele[i].onclick = fn;
    }
    return this;
}
