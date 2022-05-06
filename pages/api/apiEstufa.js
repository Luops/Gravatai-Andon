setInterval( async function(){
    await fetch('http://localhost:4000/estufas')
    .then(res => res.json())
    .then(json => console.log(json));
}, 5000);


    /*
    await fetch('http://localhost:4000/estufas')
        .then(response => response.json())
        .then(json => {
            const estufa1 = json.results[0].name;
            console.log(estufa1);
            
        }
        )
    .catch(error => console.error(error));*/
    //console.log(estufas);
