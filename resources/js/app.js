// $(document).ready(function () {
//     let check_checkbox = document.getElementById("accept").checked;
//     console.log(check_checkbox);
//     if (check_checkbox == false) {
//         $("#check_checkbox_js").val('false');
//     } else {
//         $("#check_checkbox_js").val('true');
//     }
// });
// $("#accept").on("click", function () {
//     let check_checkbox = document.getElementById("accept").checked;
//     console.log(check_checkbox);
//     if (check_checkbox == false) {
//         $("#check_checkbox_js").val('false');
//     } else {
//         $("#check_checkbox_js").val('true');
//     }
// });
$("#button-back-default").on("click", function () {
    document.getElementById("button-back-default").style.display = "none";
    document.getElementById("button-back-clicked").style.display = "block";
    document.getElementById("fb-loading").style.display = "block";
});

$("#button-next-default").on("click", function () {
    document.getElementById("button-next-default").style.display = "none";
    document.getElementById("button-next-clicked").style.display = "block";
    document.getElementById("fb-loading").style.display = "block";
});

$("#button-start-default").on("click", function () {
    document.getElementById("button-start-default").style.display = "none";
    document.getElementById("button-start-clicked").style.display = "block";
    document.getElementById("fb-loading").style.display = "block";
});

$("#choose-default").on("click", function () {
    document.getElementById("choose-default").style.display = "none";
    document.getElementById("choose-clicked").style.display = "block";
    document.getElementById("fb-loading").style.display = "block";
});

$("#play-default").on("click", function () {
    document.getElementById("play-default").style.display = "none";
    document.getElementById("play-clicked").style.display = "block";
    document.getElementById("fb-loading").style.display = "block";
});

$("#store-default").on("click", function () {
    document.getElementById("store-default").style.display = "none";
    document.getElementById("store-clicked").style.display = "block";
    document.getElementById("fb-loading").style.display = "block";
});

$("#image-reedem-default").on("click", function () {
    document.getElementById("image-reedem-default").style.display = "none";
    document.getElementById("image-reedem-clicked").style.display = "block";
    document.getElementById("fb-loading-modal").style.display = "block";
});

$("#button-coupon").on("click", function () {
    document.getElementById("fb-loading-modal").style.display = "none";
    document.getElementById("image-reedem-default").style.display = "block";
    document.getElementById("image-reedem-clicked").style.display = "none";
});

window.addEventListener("pageshow", function (event) {
    var historyTraversal =
        event.persisted ||
        (typeof window.performance != "undefined" &&
            window.performance.navigation.type === 2);
    if (historyTraversal) {
        window.location.reload();
    }
});
