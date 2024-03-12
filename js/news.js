//获取时间
document.addEventListener('DOMContentLoaded', function () {
    var time = document.getElementById('time');
    var time2 = document.getElementById('time2');
    var time3 = document.getElementById('time3');

    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth() + 1; // 添加1到月份，因为getMonth返回的是从0开始的月份索引
    var day = date.getDate(); // 使用getDate获取月份中的日期
    time.innerText = year + '/' + month + '/' + day;
    time2.innerText = time.innerHTML;
    time3.innerText = time.innerText;
});

