var shiling = document.querySelector('.shiling')
var warn = document.querySelector('.warn');
var hid = document.querySelector('.warn :last-child');
// 适龄提示页面显示出来
shiling.onclick = function () {
   warn.style.display = 'block';
   document.body.style.overflow = 'hidden';
   document.body.style.width = 'calc(100% - 17px)'; // 避免因为消失滚动条造成页面抖动
}
// 隐藏适龄提示页面
hid.onclick = function () {
   warn.style.display = 'none';
   document.body.style.overflow = 'auto';
   document.body.style.width = '100%'; // 避免因为消失滚动条造成页面抖动
}


