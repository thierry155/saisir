function verifier(){

let nom = document.getElementById("nom").value;
let age = Number(document.getElementById("age").value);
let nombre = Number(document.getElementById("nombre").value);

let message = "";

// Classification selon l'âge
if(age < 13){
message += "Bonjour " + nom + ", vous êtes un enfant.<br>";
}
else if(age >= 13 && age < 20){
message += "Bonjour " + nom + ", vous êtes un adolescent.<br>";
}
else{
message += "Bonjour " + nom + ", vous êtes un adulte.<br>";
}

// Vérification pair ou impair
if(nombre % 2 === 0){
message += "Votre nombre préféré " + nombre + " est pair !<br>";
}
else{
message += "Votre nombre préféré " + nombre + " est impair !<br>";
}

// tâche supplémentaire
if(nombre > age){
message += "Wow, votre nombre préféré est plus grand que votre âge !";
}

document.getElementById("result").innerHTML = message;


// Envoi des données vers Google Sheets
fetch("https://script.google.com/macros/s/AKfycbzmnmPjdYll70l2wRD0CRDtnJoT9mDR8YVrKZDl8Nkm-lcAcJC0R7TxKaez-M3KVv2QEg/exec", {
method: "POST",
body: JSON.stringify({
nom: nom,
age: age,
nombre: nombre
})
})
.then(response => response.text())
.then(data => {
console.log("Données envoyées à Google Sheets");
});

}