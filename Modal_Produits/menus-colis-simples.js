//variables et constantes
const qté = document.getElementById("qté");
const lblQté = document.getElementById("lblQté");
const poids = document.getElementById("poids");
const ok = document.getElementById("ok");

function onOpen() {
    qté.style.display = "none";
    lblQté.style.display = "none";
    ok.disabled = true;
}
function showQté() {
    if (poids.value !== "") {
        qté.style.display = "block";
        lblQté.style.display = "block";
    } else {
        qté.style.display = "none";
        lblQté.style.display = "none";
    }
}
function okOk() {
    if (qté.value > 0 || qté.value === ""){
        ok.disabled = false;
    } else {
        ok.disabled = true;
    }
}