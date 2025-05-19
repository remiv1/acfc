//variables et constantes
const sup = document.getElementById("support");
const lblSup = document.getElementById("lblSupport");
const env = document.getElementById("enveloppes");
const lblEnv = document.getElementById("lblEnveloppes");
const poids = document.getElementById("poids");
const lblPoids = document.getElementById("lblPoids");
const qté = document.getElementById("qté");
const lblQté = document.getElementById("lblQté");
const ok = document.getElementById("ok");
function onOpen() {
    env.style.display = "none";
    lblEnv.style.display = "none";
    poids.style.display = "none";
    lblPoids.style.display = "none";
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
function showPoids() {
    if (env.value !== "") {
        poids.style.display = "block";
        lblPoids.style.display = "block";
    } else {
        poids.style.display = "none";
        lblPoids.style.display = "none";
    }
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