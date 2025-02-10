// ----Animation des écrits page compétence-----

let txtHtml = document.querySelector(".txt-html");
let visible = true;

setInterval(() => {
    visible = !visible;
    txtHtml.style.opacity = visible ? "1" : "0";
}, 1000)