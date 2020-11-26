(function() {
    "use strict";

    var regalo = document.getElementById('regalo'); // si lo ponemos dentro NO FUNCIONA
    document.addEventListener('DOMContentLoaded', function() {

        // console.log("listo"); // PARA COMPROBAR QUE EL SCRIPT SE ENLAZÓ CORRECTAMENTE AL DOCUMENTO (AL SITIO)
        
        // CAMPOS DATOS USUARIO
        var nombre = document.getElementById('nombre');
        var apellido = document.getElementById('apellido');
        var email = document.getElementById('email');

        // CAMPOS PASES
        var pase_dia = document.getElementById('pase_dia');
        var pase_dosdias = document.getElementById('pase_dosdias');
        var pase_completo = document.getElementById('pase_completo');

        // BOTONES y DIVS
        var calcular = document.getElementById('calcular');
        var errorDiv = document.getElementById('error');
        var botonRegistro = document.getElementById('btnRegistro');
        var lista_productos = document.getElementById('lista_productos');
        var suma = document.getElementById('suma_total');

        // EXTRAS

        var camisas = document.getElementById('camisa_evento');
        var etiquetas = document.getElementById('etiquetas');
        
        // FUNCIONES 

        calcular.addEventListener('click', calcularMontos); // cuando el USUARIO de click en CALCULAR se ejecutará una función (puede ser anńoima o no, pero es el segundo parámetro)
        
        function calcularMontos(event) { // el event es para usar el método preventDefault();
            event.preventDefault();
            // console.log('Has hecho click en calcular'); // para comprobar si el addeventlistener y la función se estan comunicando bien
            // console.log(regalo.value); // SI EL USUARIO NO HA SELECCIONADO UN REGALO, DEVOLVERÁ "empty string", COMPRUEBALO EN LA CONSOLA
            if (regalo.value === '') {
                alert("¡Debes elegir un regalo, mamón!");
                regalo.focus();
            }
            else {
                // console.log("Ya elegiste regalo:)");
                // PARA ASEGURARNOS DE RECIBIR PUROS NUMEROS AGREGAMOS: parseInt de la siguiente forma:
                // NOTA: NO ES DE AHUEVO PERO NOS ASEGURAMOS DE QUE SÓLO ACEPTARÁ NUMEROS!!! todo lo demás que no sea numeros no lo sumará
                var boletosDia = parseInt(pase_dia.value, 10) || 0, // el 10 SIGNIFICA: base decimal, Y EL "OR" y 0 no sé jaja pero así va):
                    boletos2Dias = parseInt(pase_dosdias.value, 10) || 0,
                    boletosCompletos = parseInt(pase_completo.value, 10) || 0,
                    cantidadCamisas = parseInt(camisas.value, 10) || 0,
                    cantidadEtiquetas = parseInt(etiquetas.value, 10) || 0;

                    // console.log("Boletos Día: " + boletosDia);
                    // console.log("Boletos 2 Días: " + boletos2Dias);
                    // console.log("Boletos completos: " + boletosCompletos);
                
                var totalPagar = (boletosDia * 30) + (boletos2Dias * 45) + (boletosCompletos * 50) + (cantidadCamisas * 10 * 0.93) + (cantidadEtiquetas * 2);
                // console.log(totalPagar);
                
                var listadoProductos = [];

                if (boletosDia >= 1) {
                    listadoProductos.push(boletosDia + ' Pases por día');
                    // console.log(listadoProductos);
                }
                if (boletos2Dias >= 1) {
                    listadoProductos.push(boletos2Dias + ' Pases por 2 días');
                }
                if (boletosCompletos >= 1) {
                    listadoProductos.push(boletosCompletos + ' Pases completos');
                }
                if (cantidadCamisas >= 1) {
                    listadoProductos.push(cantidadCamisas + ' Camisas');
                }
                if (cantidadEtiquetas >= 1) {
                    listadoProductos.push(cantidadEtiquetas + ' Etiquetas');
                }
                
                lista_productos.style.display = "block"; // esto afecta el CSS: hace que se MUESTRE sólo hasta que esta función suceda!!!
                lista_productos.innerHTML = ''; // esto es para que si se modifica un valor de cantidad no se AGREGUE todo DE NUEVO sobre lo que ya había si se modifica una cantidad, sino que se borre
                for (var i = 0; i<listadoProductos.length; i++) {
                    lista_productos.innerHTML += listadoProductos[i] + '<br>';
                }

                suma.innerHTML = '$' + totalPagar.toFixed(2); // toFixed nos ayuda a devolver la CANTIDAD DE DECIMALES según la pasemos por PARÁMETRO (2 en este caso)

            }
        }

        

    }); // DOM CONTENT LOADED
})();