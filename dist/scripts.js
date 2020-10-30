let color = "purple";
let number = 10;
let word = "cool";

if (color === "purple") {
    $(".North").css("background-color", "purple");
};

if (number > 10) {
    $(".East").text("whoah, that's big number");
}else{
    $(".East").text("just a regular number, please");
};

if (word === "cool") {
    $(".South").text("Power of DOM");
}else{
    $(".West").text("Power of DOM");
};