
export class ClassClicked{

    clicked(){
        const isla = (this.className);
        
        if("palma" == isla){
            
            DIV_PLAYAS.innerHTML = `Estas son las playas que puedes reservar en La Palma:
            ${PLAYAS.palma}"`;
            TENERIFE.style.backgroundColor = 'white';
            CANARIA.style.backgroundColor = 'white';
            HIERRO.style.backgroundColor = 'white';
            GOMERA.style.backgroundColor = 'white';
            FUERTEVENTURA.style.backgroundColor = 'white';
            LANZAROTE.style.backgroundColor = 'white';
            PALMA.style.width = '200px';
            PALMA.style.height = '200px';
        }
        if("hierro" == isla){
            DIV_PLAYAS.innerHTML = `Estas son las playas que puedes reservar en El Hierro:
            ${PLAYAS.hierro}"`;
            TENERIFE.style.backgroundColor = 'white';
            CANARIA.style.backgroundColor = 'white';
            PALMA.style.backgroundColor = 'white';
            GOMERA.style.backgroundColor = 'white';
            FUERTEVENTURA.style.backgroundColor = 'white';
            LANZAROTE.style.backgroundColor = 'white';
            HIERRO.style.width = '200px';
            HIERRO.style.height = '200px';
            HIERRO.style.zIndex = 1;

        }
        if("gomera" == isla){
            DIV_PLAYAS.innerHTML = `Estas son las playas que puedes reservar en La Gomera: 
            ${PLAYAS.gomera}"`;
            TENERIFE.style.backgroundColor = 'white';
            CANARIA.style.backgroundColor = 'white';
            PALMA.style.backgroundColor = 'white';
            HIERRO.style.backgroundColor = 'white';
            FUERTEVENTURA.style.backgroundColor = 'white';
            LANZAROTE.style.backgroundColor = 'white';
            GOMERA.style.width = '200px';
            GOMERA.style.height = '200px';
            GOMERA.style.zIndex = 1;

        }
        if("tenerife" == isla){
            DIV_PLAYAS.innerHTML = `Estas son las playas que puedes reservar en Tenerife: 
            ${PLAYAS.tenerife}"`;
            CANARIA.style.backgroundColor = 'white';
            PALMA.style.backgroundColor = 'white';
            HIERRO.style.backgroundColor = 'white';
            GOMERA.style.backgroundColor = 'white';
            FUERTEVENTURA.style.backgroundColor = 'white';
            LANZAROTE.style.backgroundColor = 'white';
            TENERIFE.style.width = '200px';
            TENERIFE.style.height = '200px';
            TENERIFE.style.zIndex = 1;

        }
        if("canaria" == isla){
            DIV_PLAYAS.innerHTML = `Estas son las playas que puedes reservar en Gran Canaria: 
            ${PLAYAS.canaria}"`;
            TENERIFE.style.backgroundColor = 'white';
            PALMA.style.backgroundColor = 'white';
            HIERRO.style.backgroundColor = 'white';
            GOMERA.style.backgroundColor = 'white';
            FUERTEVENTURA.style.backgroundColor = 'white';
            LANZAROTE.style.backgroundColor = 'white';
            CANARIA.style.width = '200px';
            CANARIA.style.height = '200px';
            CANARIA.style.zIndex = 1;
        }
        if("fuerteventura" == isla){
            DIV_PLAYAS.innerHTML = `Estas son las playas que puedes reservar en Fuerteventura:
            ${PLAYAS.fuerteventura}"`;
            TENERIFE.style.backgroundColor = 'white';
            CANARIA.style.backgroundColor = 'white';
            PALMA.style.backgroundColor = 'white';
            HIERRO.style.backgroundColor = 'white';
            GOMERA.style.backgroundColor = 'white';
            LANZAROTE.style.backgroundColor = 'white';
            FUERTEVENTURA.style.width = '200px';
            FUERTEVENTURA.style.height = '200px';
            FUERTEVENTURA.style.zIndex = 1;

        }
        if("lanzarote" == isla){
            DIV_PLAYAS.innerHTML = `Estas son las playas que puedes reservar en Lanzarote:
            ${PLAYAS.lanzarote}"`;
            TENERIFE.style.backgroundColor = 'white';
            CANARIA.style.backgroundColor = 'white';
            PALMA.style.backgroundColor = 'white';
            HIERRO.style.backgroundColor = 'white';
            GOMERA.style.backgroundColor = 'white';
            FUERTEVENTURA.style.backgroundColor = 'white';
            LANZAROTE.style.width = '200px';
            LANZAROTE.style.height = '200px';
            LANZAROTE.style.zIndex = 1;
        }
    }
}