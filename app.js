
const USER = "Caio Sousa";
const PASS = "289130";

function login(){
const user = document.getElementById("user").value;
const pass = document.getElementById("pass").value;

if(user === USER && pass === PASS){
localStorage.setItem("auth", USER);
window.location.href = "dashboard.html";
}else{
document.getElementById("error").innerText = "Credenciais inválidas";
}
}

function logout(){
localStorage.clear();
window.location.href = "index.html";
}

function addXP(valor){
let xp = Number(localStorage.getItem("xp") || 0);
xp += valor;
localStorage.setItem("xp", xp);
updateLevel(xp);
loadData();
}

function addMoney(){
let saldo = Number(localStorage.getItem("money") || 0);
let valor = Number(document.getElementById("valor").value || 0);
saldo += valor;
localStorage.setItem("money", saldo);
loadData();
}

function updateLevel(xp){
let level = "Iniciante";
if(xp > 200) level = "Soldado";
if(xp > 500) level = "Sargento";
if(xp > 1000) level = "Tenente";
if(xp > 2000) level = "Capitão";
if(xp > 4000) level = "General";
localStorage.setItem("level", level);
}

function loadData(){
document.getElementById("xp").innerText = (localStorage.getItem("xp") || 0) + " XP";
document.getElementById("level").innerText = localStorage.getItem("level") || "Iniciante";
document.getElementById("money").innerText = "R$ " + (localStorage.getItem("money") || 0);
}
