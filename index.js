const express = require('express');
const cheerio = require('cheerio');
const axios = require('axios');


const app = express();
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log("Someone likes pokemons");
});

app.get("/", (req,res) => {
    res.send(
        "<h1>Why are you here, better go out</h1>"
    );
});

app.get("/api/v1/pokemon/:pokemonName", (req,res) => {
    let pokemonName = req.params.pokemonName;
    console.log(`Ok getting ${pokemonName} info`);
    axios.get("http://es.pokemon.wikia.com/wiki/"+pokemonName).then((response) => {
        const $ = cheerio.load(response.data);
        let arrayEvoImages = [];
        let arrayLocalization = [];
        let arrayAttacks = [];
        let arrayGenerations = [];
        let maxIndex = 0;
        //Pokemon Name
        let pokemonNameMod = capitalizeFirstChar(pokemonName);

        //Pokemon Image
        let pokemonImage = $('table.cmod3D tbody tr.img td a.image-thumbnail').text().split('"')[1];
        
        //Pokemon Information
        let pokemonInfo = escapeLineBreaks($('div#mw-content-text').children('p').eq(2).text());

        //Pokemon evolutions
        let evolucionesImagenes = $('table.evolucion tbody tr td a.image-thumbnail').each((index, el) => {
            let imgInfo = $(el).text().split('"');
            let objForArray = {
                evoImg: imgInfo[1],
                evoName: imgInfo[3]
            };
            arrayEvoImages[index] = objForArray;
        });

        //Where to find it
        let localizations = $('table.localizacion tbody tr').each((index, el) => {
            if(index != 0){
                var objForArray = {
                    places: escapeLineBreaks($(el).children('td').eq(1).text()),
                    edition:escapeLineBreaks($(el).children('th.enlacesblancos').text()),
                };
                if(objForArray.places.trim() == "" || objForArray.edition.trim() == ""){
                    return;
                }
                arrayLocalization[index] = objForArray;
            }
            arrayLocalization = cleanNullValuesArr(arrayLocalization);
        });

        //Atacks
        let attacks = $('table.movnivel tbody tr').each((index, el) => {

            $(el).children('th.movedicion').each((index, el) => {
                let editionDetected = $(el).text().trim();
                console.log(editionDetected+", ");
                if(!editionDetected.includes('<img')){
                    arrayGenerations[index] = editionDetected;
                }else{
                    let name = editionDetected.split('"')[3];
                    arrayGenerations[index] = detectName(name);
                }
            });
            if(index > 0){
                let infoAttack = $(el).children('td').text();
                let objAttacks = {};
                infoAttack = infoAttack.split("\n");
                let name = '';
                let maxIndex = arrayGenerations.length + 1;
                for(x = 0; x < maxIndex; x++){
                    if(x != maxIndex - 1){
                        objAttacks[arrayGenerations[x]] = infoAttack[x].trim();
                    }else{
                        objAttacks["attack"] = infoAttack[x].trim();
                    }
                }
                arrayAttacks[index] = objAttacks;
            }
            arrayAttacks = cleanNullValuesArr(arrayAttacks);
        });

        let objForReturn = {
            name: pokemonNameMod,
            image: pokemonImage,
            info : pokemonInfo,
            evolutions: arrayEvoImages,
            localization: arrayLocalization,
            editions: arrayGenerations,
            attack: arrayAttacks, 
        };

        res.send(objForReturn);
    }).catch((err) => {
        console.log(`Some error occurred ${err}`);
    });
});

function cleanRepeated(arr){
    for(x = 0; x < arr.length; x++){
        for(i = x+1; i < arr.length; i+=2){
            if(arr[x] == arr[i]){
                arr.splice(i, 1);
            }
        }
    }
    return arr;
}

function escapeLineBreaks(str){
    return str.replace(/\n/g, "");
}

function capitalizeFirstChar(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function detectName(str){
    switch(str){
        case 'Primera Generación':
            str = 'generation_1';
            break;
        
        case 'Segunda Generación':
            str = 'generation_2';
            break;
        
        case 'Tercera Generación':
            str = 'generation_3';
            break;
        
        case 'Cuarta Generación':
            str = 'generation_4';
            break;
        
        case 'Quinta Generación':
            str = 'generation_5';
            break;
    
        case 'Sexta Generación':
            str = 'generation_6';
            break;
    
        case 'Septima Generación':
            str = 'generation_7';
            break;
    }
    return str;
}

function cleanNullValuesArr(arr){
    //New method
    return arr.filter(() => {
        return true;
    });

    //Old method
    /*
    for(x = 0; x < arr.length; x++){
        if(arr[x] == null || arr[x] == "null"){
            arr.splice(x, 1);
        }
    }
    return arr;
    */
}
