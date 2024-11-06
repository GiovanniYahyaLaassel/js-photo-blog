console.log('Hello world');

// Uso axios per fare una chiamata get all'api
axios
    .get('https://jsonplaceholder.typicode.com/photos?_limit=6')
    .then(res => {
        // console.log(res)

        // faccio un forEach per iterare nell'array ricevuto
        // per ogni immagine estraggo  i dati per creare una card
        
    })