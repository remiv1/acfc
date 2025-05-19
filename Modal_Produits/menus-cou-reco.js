//variables et constantes
const sup = document.getElementById("support");
const lblSup = document.getElementById("lblSupport");
const env = document.getElementById("enveloppes");
const lblEnv = document.getElementById("lblEnveloppes");
const poids = document.getElementById("poids");
const lblPoids = document.getElementById("lblPoids");
const nivR = document.getElementById("nivR");
const lblNivR = document.getElementById("lblNivR");
const AR = document.getElementById("AR");
const lblAR = document.getElementById("lblAR");
const qté = document.getElementById("qté");
const lblQté = document.getElementById("lblQté");
const ok = document.getElementById("ok");

function onOpen() {
    env.style.display = "none";
    lblEnv.style.display = "none";
    poids.style.display = "none";
    lblPoids.style.display = "none";
    nivR.style.display = "none";
    lblNivR.style.display = "none";
    AR.style.display = "none";
    lblAR.style.display = "none";
    qté.style.display = "none";
    lblQté.style.display = "none";
    ok.disabled = true
}
function showNextSupport() {
    if (sup.value === "env") {
        env.style.display = "block";
        lblEnv.style.display = "block";
        poids.style.display = "none";
        lblPoids.style.display = "none";
    } else if (sup.value !== "") {
        env.value = "";
        env.style.display = "none";
        lblEnv.style.display = "none";
        poids.style.display = "block";
        lblPoids.style.display = "block";
    }
}
function showPoids(){
    if (env.value !== "") {
        poids.style.display = "block";
        lblPoids.style.display = "block";
    } else {
        poids.style.display = "none";
        lblPoids.style.display = "none";
    }
}
function showNivR() {
    if (poids.value !== "") {
        nivR.style.display = "block";
        lblNivR.style.display = "block";
    } else {
        nivR.style.display = "none";
        lblNivR.style.display = "none";
    }
}
function showOptAR() {
    if (nivR.value !== "") {
        AR.style.display = "block";
        lblAR.style.display = "block";
    } else {
        AR.style.display = "none";
        lblAR.style.display = "none";
    }
}
function showQté() {
    if (AR.value !== "") {
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