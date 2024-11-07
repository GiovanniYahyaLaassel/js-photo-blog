console.log('Hello world');

// Uso axios per fare una chiamata get all'api
axios
    .get('https://jsonplaceholder.typicode.com/photos?_limit=6')
    .then(res => {
        // console.log(res)

        // prendo il contenitore dalla gallery
        const galleryContainer = document.getElementById('gallery');
        // faccio un forEach per iterare nell'array ricevuto
        // per ogni immagine estraggo  i dati per creare una card
        res.data.forEach(photo => {
            // prendo url e il title da ogni foto
            const photoUrl = photo.url;
            const photoTitle = photo.title;

            // aggiungo l'lelemento photo card con l'api
            const photoCard = document.createElement('div');
            photoCard.classList.add('photo-card');

            // creo la foto
            const img = document.createElement('img');
            img.src = photoUrl ;
            img.alt = photoTitle;
            img.classList.add('photo');
            photoCard.appendChild(img);
           
            // aggiungo lo spillo
            const pin = document.createElement('img');
            pin.src = './img/pin.svg';
            pin.alt = 'Spillo rosso';
            pin.classList.add('pin');
            photoCard.appendChild(pin);

            // Aggiungo la descrizione
            const photoDescription = document.createElement('div');
            photoDescription.classList.add('photo-description');
            photoDescription.textContent = photoTitle;
            photoCard.appendChild(photoDescription);

            // Inserisco la card nella galleria
            galleryContainer.appendChild(photoCard);
        });
    })