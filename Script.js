function dis() {
    document.getElementById("year").textContent = fullyear
    document.getElementById("main").textContent = "/" + ( month + 1 ) + "/" + date
    var aday = deta [year][month].day [date];
    if (aday === undefined) {
        document.getElementById("day").textContent = "(" + daylist [day] + ")"
        document.getElementById("non-class").style.display = "block";
    } else {
        document.getElementById("non-class").style.display = "none";
        document.getElementById("day").textContent = "(" + daylist [day] + "･" + getAday(aday) + ")"
        if (aday >= 16) {
            for (var i = 4; i <= 6; i++) {
                document.getElementById(( i - 3 ) + "class").textContent = classlist [aday - 16][i]
                document.getElementById(( i - 3 ) + "r").style.display = "block"
            }
        } else if (aday >= 8) {
            for (var i = 1; i <= 3; i++) {
                document.getElementById(( i ) + "class").textContent = classlist [aday - 8][i]
                document.getElementById(( i ) + "r").style.display = "block"
            }
        } else {
            for (var i = 1; i <= 6; i++) {
                document.getElementById(( i ) + "class").textContent = classlist [aday][i]
                document.getElementById(( i ) + "r").style.display = "block"
            }
        }
    }
    var sc = deta [year][month].schedule [date];
    if (sc === undefined) {
        document.getElementById("schedule").textContent = "今日の予定はありません"
    } else {
        document.getElementById("schedule").textContent = "今日の予定:" + sc
    }
    aday %= 8
    if (aday === 4 || aday === 5) {
        document.getElementById("care").style.display = "block"
    }
    if (aday === 2 || aday === 4 || aday === 5 || aday === 7) {
        document.getElementById("smog").style.display = "block"
    }
    if (aday === 0 || aday === 2 || aday === 4 || aday === 5) {
        document.getElementById("gym-suit").style.display = "block"
    }
    function loop() {
        check = 0
        for (var i = 1; i <= 12; i++) {
            check += document.getElementById("check" + i).checked
        }
        if (check === goallist [aday]) {
            document.getElementById("warn").style.display = "none"
        } else {
            setTimeout(loop, 50)
        }
    }
    loop();
}
function getAday(t) {
    var daytype = typelist [deta [year][month].type [date]];
    var adayname;
    if (t >= 16) {
        adayname = adaylist [t - 16] + "後"
    } else if (t >= 8) {
        adayname = adaylist [t - 8] + "前"
    } else {
        adayname = adaylist [t]
    }
    return adayname + daytype;
}
function input() {
    fullyear = yearinput.value
    year = fullyear % 10
    month = monthinput.value - 1
    date = dateinput.value
    var selectdate = new Date(fullyear, month, date);
    day = selectdate.getDay()
    for (var i = 1; i <= 6; i++) {
        document.getElementById( i + "r").style.display = "none"
    }
    for (var i = 1; i <= 12; i++) {
        document.getElementById("check" + i).checked = false
    }
    document.getElementById("care").style.display = "none"
    document.getElementById("smog").style.display = "none"
    document.getElementById("gym-suit").style.display = "none"
    dis();
}