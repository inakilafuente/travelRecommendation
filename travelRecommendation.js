function buscar(){
    value = document.getElementById("Buscar").value;
    value = value.toLowerCase();
    if(value == "beach" || value == "beaches" || value == "temple" || value == "temples" || value == "country" || value == "countries"){

        fetch('travel_recommendation_api.json')
            .then(res => res.json())
            .then(data => {
                if(value == "beach" || value == "beaches"){
                    tipo = "beaches";
                }

                if(value == "temple" || value == "temples"){
                    tipo = "temples";
                }

                if(value == "country" || value == "countries"){
                    tipo = "countries";
                }

                arrayDatos = data[tipo];
                console.log(arrayDatos);
                divMostrarResultados = document.getElementById("output");

                for(var i = 0; i < arrayDatos.length; i++){
                    
                    container = document.createElement("div");
                    container.setAttribute("id","container");
                    container.setAttribute("class","result");
                    if(tipo == "countries" ){
                        cities = arrayDatos[i]["cities"];
                        
                        h5 = document.createElement("h5");
                        h5.value = arrayDatos[i]["name"];
                        h5.textContent  = arrayDatos[i]["name"];

                        container.appendChild(h5);

                        for(var j = 0; j < cities.length; j++){
                            img = document.createElement("img");
                            img.setAttribute("src",cities[j]["imageUrl"]);
                            img.setAttribute("width","100px");
                            img.setAttribute("height","100px");
                            h6 = document.createElement("h6");
                            h6.value = cities[j]["name"];
                            h6.textContent  = cities[j]["name"];
                            paragraph = document.createElement("p");
                            paragraph.value = cities[j]["description"];
                            paragraph.textContent  = cities[j]["description"];
                            
                            container.appendChild(img);
                            container.appendChild(h6);
                            container.appendChild(paragraph);
                        
                        }
                        
                        
                        
                        divMostrarResultados.appendChild(container);
                        
                    }

                    if(tipo == "temples" ){
                        img = document.createElement("img");
                        img.setAttribute("src",arrayDatos[i]["imageUrl"]);
                        img.setAttribute("width","100px");
                        img.setAttribute("height","100px");
                        h5 = document.createElement("h5");
                        h5.value = arrayDatos[i]["name"];
                        h5.textContent  = arrayDatos[i]["name"];
                        paragraph = document.createElement("p");
                        paragraph.value = arrayDatos[i]["description"];
                        paragraph.textContent  = arrayDatos[i]["description"];
                        

                        container.appendChild(img);
                        container.appendChild(h5);
                        container.appendChild(paragraph);
                        divMostrarResultados.appendChild(container);
                    }

                    if(tipo == "beaches" ){
                        
                        img = document.createElement("img");
                        img.setAttribute("src",arrayDatos[i]["imageUrl"]);
                        img.setAttribute("width","100px");
                        img.setAttribute("height","100px");
                        h5 = document.createElement("h5");
                        h5.value = arrayDatos[i]["name"];
                        h5.textContent  = arrayDatos[i]["name"];
                        paragraph = document.createElement("p");
                        paragraph.value = arrayDatos[i]["description"];
                        paragraph.textContent  = arrayDatos[i]["description"];
                        

                        container.appendChild(img);
                        container.appendChild(h5);
                        container.appendChild(paragraph);
                        divMostrarResultados.appendChild(container);
                    }
                    
                    
                }
        });
    }
}

function limpiar(){
    value = document.getElementById("Buscar").value;
    if(value != "" || value != null){
        document.getElementById("Buscar").value = "";
        arrayResults = document.querySelectorAll('.result');
        
        arrayResults.forEach(elemento => {
            elemento.remove();
          });
    }
}