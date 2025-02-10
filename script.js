// ----Animation des écrits page compétence-----

let txtHtml = document.querySelector(".txt-html");
let txtcss = document.querySelector(".txt-css");
let txtjs = document.querySelector(".txt-js");
let visible = true;

setInterval(() => {
    visible = !visible;
    txtHtml.style.opacity = visible ? "1" : "0";
    txtcss.style.opacity = visible ? "1" : "0";
    txtjs.style.opacity = visible ? "1" : "0";
}, 1000)