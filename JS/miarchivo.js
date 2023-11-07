//Mensaje para poner en contexto al usuario//
alert('Vamos a crear una Playlist con tus canciones favoritas.')
alert('Comenzaremos creando un usuario.')

//Declaré la variable para el nombre//
let ingresarNombre = prompt('¿Cómo es tu nombre?');

//Aplique la condicion de que si hay numeros o espacio vacio se repite la accion con el bucle while//
if ((/^[0-9]+$/.test(ingresarNombre) === true) || (ingresarNombre ==='')){
while((/^[0-9]+$/.test(ingresarNombre) === true) || (ingresarNombre=== '')){
    alert("Error, escribe tu nombre.");
    ingresarNombre = prompt('¿Cómo es tu nombre?');
}
} else {
    alert("Bienvenido " + ingresarNombre);
}

//Repeti la condicion en el password//
let registrarPass = prompt('Crea una contraseña');

if (registrarPass ===''){
while(registrarPass=== ''){
    alert("Error");
    registrarPass = prompt('Crea una contraseña');
}
} else {
    alert("Contraseña guardada")
}

//Cree una funcion para ingresar la contraseña con un bucle for tener dos intentos para escribir bien la contraseña//
const login = () =>{
    ingresar = false;

    for( let i = 2 ; i > 0; i--){
        let passingresada = prompt('Ingresa la contraseña creada. ' + i + ' intentos.')
        if(passingresada === registrarPass){
            alert('Contraseña correcta.');
            ingresar = true;
            break
        }else{
            alert('¡Contraseña incorrecta!');
        }
    }
    return ingresar;
}
//Declare la funcion con la condicion de que si la contraseña era incorrecta se cerraba//
if(login()){
    let ingresarPlaylist = prompt('Ingrese el nombre de la Playlist');
    
    
    if (ingresarPlaylist ===''){
    while(ingresarPlaylist=== ''){
        alert('Ingresa un nombre a la playlist');
        ingresarPlaylist = prompt('Ingrese el nombre de la Playlist');
    }
    } else{
        alert('Nombre de la playlist: ' + ingresarPlaylist);
    }
    
    console.log('Nombre de la playlist: ' + ingresarPlaylist);

    let cantidadCanciones = prompt('¿Cuantas canciones vas a agregar?');

    for(let i = 1; i <= cantidadCanciones; i++){
        let cuentaregresiva = cantidadCanciones - i;
        let nombrecancion = prompt('¿Cómo se llama el tema? Quedan ' + cuentaregresiva + ' tema/s.');
        alert('Playlist: ' + ingresarPlaylist + '\n' + i + ' ' + nombrecancion);
            console.log(i + ' ' + nombrecancion);
        }  
}else{
    alert('La contraseña es incorrecta, se cerró la sesión.')
}
