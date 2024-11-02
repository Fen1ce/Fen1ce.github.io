// FUNZIONE CAMBIO IMMAGINE
function changeImage() {
    var image = document.getElementById('Gorak_Shan');
    if (image.src.match("/Figures/Gorak_Shan_propic.jpg")) {
        image.src = "/Figures/Gorak_Shan_token.png";
    } else {
        image.src = "/Figures/Gorak_Shan_propic.jpg";
    }
}

// FUNZIONE INDICE A SCOMPARSA
function cambiaStato (id){ // cambia ciclicamente la visibilità dell'elemento indicato
if (document.getElementById){ // se un elemento con l'identificativo specificato esiste,
	if(document.getElementById(id).style.display == 'none') { // se l'elemento è nascosto,
		document.getElementById(id).style.display = 'block'; // lo visualizza
		document.getElementById('index_btn').innerHTML = "Nascondi indice"; // aggiorna l'etichetta del pulsante, invertendo l'azione compiuta
	}else{ // se invece l'elemento è visualizzato,
		document.getElementById(id).style.display = 'none'; // lo nasconde
		document.getElementById('index_btn').innerHTML = "Mostra indice"; // aggiorna l'etichetta del pulsante, ripristinando quella originale
} // fine controllo stato
} // fine controllo presenza elemento
} // fine funzione cambiaStato