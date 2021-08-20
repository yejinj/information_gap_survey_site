var score=0;

function event0() {
    var a = document.getElementById("start");
    a.style.display = "none"

    var b = document.getElementById("question_1");
    b.style.display = "";
    score ++;
}

function event1() {
    var a = document.getElementById("question_1");
    a.style.display = "none"

    var b = document.getElementById("question_2");
    b.style.display = "";
}

function event2() {
    var a = document.getElementById("question_1");
    a.style.display = "none"

    var b = document.getElementById("question_2");
    b.style.display = ""
}

function event3() {
    var a = document.getElementById("question_2");
    a.style.display = "none"

    var b = document.getElementById("question_3");
    b.style.display = ""
    
    score ++;
}

function event4() {
    var a = document.getElementById("question_2");
    a.style.display = "none"

    var b = document.getElementById("question_3");
    b.style.display = ""
}

function event5() {
    var a = document.getElementById("question_3");
    a.style.display = "none"

    var b = document.getElementById("question_4");
    b.style.display = ""
}

function event6() {
    var a = document.getElementById("question_3");
    a.style.display = "none"

    var b = document.getElementById("question_4");
    b.style.display = ""

    score ++;
}

function event7() {
    var a = document.getElementById("question_4");
    a.style.display = "none"

    var b = document.getElementById("question_5");
    b.style.display = ""

    score ++;
}

function event8() {
    var a = document.getElementById("question_4");
    a.style.display = "none"

    var b = document.getElementById("question_5");
    b.style.display = ""
}

function event9() {
    var a = document.getElementById("question_5");
    a.style.display = "none"

    var b = document.getElementById("question_6");
    b.style.display = ""

    score ++;
}

function event10() {
    var a = document.getElementById("question_5");
    a.style.display = "none"

    var b = document.getElementById("question_6");
    b.style.display = ""
}

function event11() {
    var a = document.getElementById("question_6");
    a.style.display = "none"

    var b = document.getElementById("question_7");
    b.style.display = ""
}

function event12() {
    var a = document.getElementById("question_6");
    a.style.display = "none"

    var b = document.getElementById("question_7");
    b.style.display = ""

    score ++;
}

function event13() {
    var a = document.getElementById("question_7");
    a.style.display = "none"

    var b = document.getElementById("question_8");
    b.style.display = ""
    
    score ++;
}

function event14() {
    var a = document.getElementById("question_7");
    a.style.display = "none"

    var b = document.getElementById("question_8");
    b.style.display = ""
}

function event15() {
    var a = document.getElementById("question_7");
    a.style.display = "none"

    var b = document.getElementById("question_8");
    b.style.display = ""
}

function event16() {
    var a = document.getElementById("question_8");
    a.style.display = "none"

    var b = document.getElementById("result_checking");
    b.style.display = ""

    score ++;
}

function event17() {
    var a = document.getElementById("question_8");
    a.style.display = "none"

    var b = document.getElementById("result_checking");
    b.style.display = ""
}

function event18() {
    var a = document.getElementById("question_8");
    a.style.display = "none"

    var b = document.getElementById("result_checking");
    b.style.display = ""
}

// 결과
function show_result() {
    var a = document.getElementById("result_checking");
    a.style.display = "none"

    if (score == 0) {
        var b = document.getElementById("result_1");
        b.style.display = ""
    }

    if (score == 1) {
        var b = document.getElementById("result_2");
        b.style.display = ""
    }

    if (score == 2) {
        var b = document.getElementById("result_3");
        b.style.display = ""
    }

    if (score == 3) {
        var b = document.getElementById("result_4");
        b.style.display = ""
    }

    if (score == 4) {
        var b = document.getElementById("result_5");
        b.style.display = ""
    }

    if (score == 5) {
        var b = document.getElementById("result_6");
        b.style.display = ""
    }

    if (score == 6) {
        var b = document.getElementById("result_7");
        b.style.display = ""
    }

    if (score == 7) {
        var b = document.getElementById("result_8");
        b.style.display = ""
    }

    if (score == 8) {
        var b = document.getElementById("result_9");
        b.style.display = ""
    }
}