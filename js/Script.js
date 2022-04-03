
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
//show menu con
$(".drop").click(function () {
    if ($(".dropdown-content").css("display") == "none") {
        $(".dropdown-content").css("display", "block");
    }
    else {
        $(".dropdown-content").css("display", "none");
    }
});
function AnHienMenuTrai() {
    if ($(".menu_trai").css("display") == "none") {
        $(".menu_trai").css("display", "block");
    }
    else {
        $(".menu_trai").css("display", "none");
    }
}