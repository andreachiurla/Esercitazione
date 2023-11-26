// form information variables
var lname, fname, codiceFiscale, dateBirth, placeBirth;

function getNome(){
   fname = document.getElementById('fname').value;
   console.log("Nome: " + fname);
}

function getCognome(){
	lname = document.getElementById('lname').value;
	console.log("Cognome: " + lname);
}

function getCodiceFiscale(){
	codiceFiscale = document.getElementById('codFiscale').value;
	console.log("Codice Fiscale: " + codiceFiscale);
}

function getDateBirth(){
	dateBirth = document.getElementById('dateBirth').value;
	console.log("Data di nascita: " + dateBirth);
}

function getPlaceBirth(){
	placeBirth = document.getElementById('placeBirth').value;
	console.log("Luogo di nascita: " + placeBirth);
}

function startScrolling(){
	document.getElementById("myPara").innerHTML = "<i>" + fname + " " + lname + " </i> <br><b> Codice Fiscale: </b>" + codiceFiscale + "<br><b> Data di nascita: </b>" + dateBirth + "<br> <b>Luogo di nascita: </b>" + placeBirth;
}