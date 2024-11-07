// FUNZIONE CAMBIO IMMAGINE - attualmente disabilitata in questa versione
/*function changeImage(id) { // cambia ciclicamente l'immagine visualizzata
    var image = document.getElementById(id);
    if (image.src.match('Figures/'+id+'_propic.jpg')) { // se l'immagine è una propic
        image.src = "Figures/"+id+"_token.png"; // la sostituisce con il token
    } else { // se invece l'immagine è un token
        image.src = "Figures/"+id+"_propic.jpg"; // la sostituisce con la propic
    }
}*/

// FUNZIONE CAMBIO IMMAGINE - propic dal web
function changeImage(id) { // cambia ciclicamente l'immagine visualizzata
    var image = document.getElementById(id);
    if (image.src.match('https://i.pinimg.com/originals/1b/d2/d0/1bd2d05681f47841dccb59d1b2bd394f.jpg')) { // se l'immagine è una propic
        image.src = "Figures/"+id+"_token.png"; // la sostituisce con il token
    } else { // se invece l'immagine è un token
        image.src = "https://i.pinimg.com/originals/1b/d2/d0/1bd2d05681f47841dccb59d1b2bd394f.jpg"; // la sostituisce con la propic
    }
}

// FUNZIONE DIV A SCOMPARSA
function indexState (id_btn, id_elm){ // cambia ciclicamente la visibilità dell'elemento indicato
	if (document.getElementById){ // se un elemento con l'id specificato esiste,
		if(document.getElementById(id_elm).style.display === 'none') { // se l'elemento è nascosto,
			document.getElementById(id_elm).style.display = 'block'; // lo visualizza
			document.getElementById(id_btn).innerHTML = "nascondi"; // e aggiorna l'etichetta del pulsante
		}else{ // se invece l'elemento è visualizzato,
			document.getElementById(id_elm).style.display = 'none'; // lo nasconde
			document.getElementById(id_btn).innerHTML = "mostra"; // e aggiorna l'etichetta del pulsante
		}
	}
}

// FUNZIONE VISUALIZZA MEME
function showMeme(id_btn, id_elm) {
    // Identifica gli altri div e pulsanti
    const otherElm = id_elm === 'Session01' ? 'Session02' : 'Session01';
    const otherBtn = id_btn === 'btn01' ? 'btn02' : 'btn01';
    
    // Elementi e pulsanti HTML per il div e il pulsante attuale e quello alternativo
    const currentDiv = document.getElementById(id_elm);
    const currentBtn = document.getElementById(id_btn);
    const otherDiv = document.getElementById(otherElm);
    const otherBtnElem = document.getElementById(otherBtn);

    if (currentDiv.style.display === 'none') { 
        // Mostra il div attuale e aggiorna il pulsante
        currentDiv.style.display = 'block';
        currentBtn.innerHTML = "nascondi";

        // Nasconde l'altro div e aggiorna il suo pulsante
        otherDiv.style.display = 'none';
        otherBtnElem.innerHTML = "mostra";
    } else {
        // Se il div attuale è già visibile, lo nasconde
        currentDiv.style.display = 'none';
        currentBtn.innerHTML = "mostra";
    }
}
