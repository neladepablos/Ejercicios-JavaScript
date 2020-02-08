/* agoritmos(ejercicios) */
// document.write("EJERCICIOS JAVASCRIPT");

// 1. Implementar un algoritmo que reciba 2 argumentos y los sume, el resultado se debera imprimir en pantalla.

// function suma( a, b ) {
//     return a + b;
// }

// console.log(suma(7,8));

//2. Un estudiante realiza 4 examenes, calcular el promedio de estos.

// function notas(n1, n2, n3, n4) {
//     return (n1 + n2 + n3 + n4) / 4;
// }

// console.log(notas(17, 20,10, 12));


// 3. Calcular el area de un rectangulo

// function area(base, altura) {
//     return base * altura;
// }

// console.log(area(14, 6));

// 4. Calcular el area de un triángulo

// function areaTriangulo(base, altura) {
//     return (base * altura) / 2;
// }

// console.log("El area del trianngulo es: ", areaTriangulo(6,6));

// 5. Calcular el area de una circunferencia

// function areaCircunferencia(radio, pi) {
   
//     return pi * (radio)**2
// }

// console.log(areaCircunferencia(5, 3.1416));

// 6. Determinar el sueldo semanal de un trabajador basandose en sus horas trabajadas y su salario de hora hombre

// let horas_trabajo = parseInt(prompt("Ingrese las horas trabajadas: "));
// let salario_hora = parseFloat(prompt("Ingrese su salario por hora: "));

// function salarioSemanal(horas_trabajo, salario_hora) {

//     salario = horas_trabajo * salario_hora;
//     return salario;
// }

// console.log(salarioSemanal(9, 12));

/**************************************EJERCICIO 7************************************************** */

// 7. Una modista, para realizar sus prendas de vestir, encarga las telas al extranjero. Para cada pedido,
//tiene que proporcionar las medidas de la tela en pulgadas, pero ella generalmente las tiene en metros. 
//Realice un algoritmo para ayudar a resolver el problema, determinando cuántas pulgadas debe pedir con
//base en los metros que requiere. Represéntelo mediante el diagrama de flujo y el pseudocódigo (1 pulgada = 0.0254 m).

// let cantidadMetros = parseFloat(prompt("Ingrese la cantidad de metros de tela: "));
// function medidas_tela_pulgadas(cantidadMetros) {    
//     cantidad = cantidadMetros * (1/0.0254);
//     return cantidad
// }

// console.log("La cantidad de pulgadas que debe pedir es: ", medidas_tela_pulgadas(cantidadMetros));


/**************************************EJERCICIO 8 ************************************************** */

// 8. Una empresa importadora desea determinar cuántos dólares puede adquirir con equis cantidad de dinero peruano.

// let cantidad_soles = parseFloat(prompt("Ingrese la cantidad de soles: "));
// let precio_dolar_por_sol = parseFloat(prompt("Ingrese el precio del dolar por sol: "));

// function cantidad_dolares_adquirir(cantidad_soles, precio_dolar_por_sol) {
//     cantidad_dolares = cantidad_soles / precio_dolar_por_sol;
//     return cantidad_dolares;
// }

// console.log("La cantidad de dolares que puede adquirir es: ",cantidad_dolares_adquirir(cantidad_soles, precio_dolar_por_sol ));


/**************************************EJERCICIO 9 ************************************************** */

// 9. Una empresa que contrata personal requiere determinar la edad de las personas que solicitan trabajo,
// pero cuando se les realiza la entrevista sólo se les pregunta el año en que nacieron.

// let anioActual = parseInt(prompt("Ingresa el año actual: "));
// let anio_nacimiento = parseInt(prompt("Ingrese su año de nacimiento: "));

// let edad = anioActual - anio_nacimiento;

// if (edad >= 18) {
//     console.log("Tienes: ", edad, ", obtienes el trabajo.");
// } else {
//     console.log("Tienes: ", edad, ". Eres menorde edad, no puedes trabajar.");
// }



