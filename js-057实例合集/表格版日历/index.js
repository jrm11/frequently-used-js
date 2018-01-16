function getDays(year,month){
    if(month == 4 || month == 6 || month == 8 || month == 9 || month == 11){
        return 30;
    }else if(month == 2){
        if((year % 4 ==0 && year % 100 != 0)|| year % 400 == 0){
            return 29;
        }else{
            return 28;
        }
    }else{
        return 31;
    }
}
function showDate() {
    //得到年份
    var yearNode = document.getElementById("year");
    var yearIndex = yearNode.selectedIndex;
    console.log(yearIndex);
    var year = yearNode.getElementsByTagName("option")[yearIndex].innerHTML;
    console.log(year);
    //得到月份
    var monthNode = document.getElementById("month");
    var monthIndex = monthNode.selectedIndex;
    var month = monthNode.getElementsByTagName("option")[monthIndex].innerHTML;
    //某年某月的天数
    var days = getDays(year, month);
    var dateObj = new Date(year, month-1, 1);

    console.log('dateObj==='+dateObj.getDay());
    //最多６行 7 列，创建并初始化一个 42 长度的数组
    var arr = [];
    var date = 1;
    for (var i = 0; i < 42; i++) {
        //１号之前以及最大日期之后，都记载为 0；其他记载为日期
        if (i < dateObj.getDay() || date > days)
            arr[i] = 0;
        else {
            arr[i] = date;
            date++;
        }
    }
    //根据数组初始化页面表格 ：表头行除外，６行７列
    var cells = document.getElementById("date").getElementsByTagName("tbody")[0].getElementsByTagName("td");
    //得到 42 个单元格，根据数组写入日期
    for (var i = 0; i < cells.length; i++) {
        if (arr[i] != 0) {
            cells[i].innerHTML = arr[i];
            cells[i].style.backgroundColor = "#fff";
        }
        else {
            cells[i].innerHTML = "";
            cells[i].style.backgroundColor = "#eee";
        }
    }
}
