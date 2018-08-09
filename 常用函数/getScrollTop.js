/**
 * 
 * @desc 获取滚动条距顶部的距离
 */
function getScrollTop() {
    let doc = document;
    return (doc.documentElement && doc.documentElement.scrollTop) || doc.body.scrollTop;
}

module.exports = getScrollTop;