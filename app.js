// Página 1
function mostrarValores(){
    let Nombre = "Jeisson Donado";
    let Edad = 37;
    let esEstudiante = true;

    document.write("Nombre: ", Nombre, "<br>");
    document.write("Edad: ", Edad, "<br>")
    document.write("Es estudiante: ", esEstudiante, "<br>")
    
    Nombre = "Alexander Ocampo";
    Edad = 36;
    esEstudiante = false;
    
    document.write("Nombre: ", Nombre, "<br>");
    document.write("Edad: ", Edad, "<br>")
    document.write("Es estudiante: ", esEstudiante, "<br>")
}
// Página 2
function operacionesMatematicas(){
    let a = 10;
    let b = 5;

    document.write("<strong>Resultados de Operaciones:</strong><br>");
    document.write("Suma: " + (a + b) + "<br>");
    document.write("Resta: " + (a - b) + "<br>");
    document.write("Multiplicación: " + (a * b) + "<br>");
    document.write("Divisón: " + (a / b) + "<br><br>");

    document.write("<strong>Comparaciones:</strong><br>");
    document.write("a==b: " + (a == b) + "<br>");
    document.write("a!=b: " + (a != b) + "<br>");
    document.write("a>=b: " + (a >= b) + "<br>");
    document.write("a<=b: " + (a <= b) + "<br>");
}
// Página 3
function verificarCondiccion(){
    var x
    var y

    let esMayorDeEdad = true;
    let tieneLicencia = false;

    const puedeConducir = esMayorDeEdad && tieneLicencia;
    document.write("<strong>¿Puede conducir?: </strong>" + puedeConducir + "<br><br>");

    const mensajeBienvenida = `¡Hola. bienvenido al sistema!`;
    document.write("<strong>Mensaje de bienvenida: </strong>" + mensajeBienvenida);
    }