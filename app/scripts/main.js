
var checked=false;//variable true si el radio Empresa esta seleccionado
$('#formulario').validate({
    rules: {
        // simple rule, converted to {required:true}
        nombre: {
            required: true
        },
        apellidos: {
            required: true
        },
        telefono: {
            required: true,
            number: true,
            maxlength: 9,
            minlength: 9
        },
        email: {
            required: true,
            email: true
        },
        email2: {
            equalTo: email
        },
        demandante: {
            required: true
        },
        nifCif: {
            required: true,
            cifES:{depends:function(){if(checked===true){return true;}else{return false;}}},
            nifES:{depends:function(){if(checked===false){return true;}else{return false;}}}
        },
        nombreEmpresa: {
            required: true
        },
        direccion: {
            required: true
        },
        cp: {
            required: true,
            number: true,
            maxlength: 5,
        },
        localidad: {
            required: true
        },
        provincia: {
            required: true
        },
        pais: {
            required: true
        },
        iban: {
            required: true
        },
        pago: {
            required: true
        },
        usuario: {
            required: true
        },
        contrasena: {
            required: true
        },
        contrasena2: {
            equalTo: contrasena
        }

    }
});

/*
COMPLETA CP:
Relleno CP con 0 a la izquierda si menos de 5 numeros
*/
$('#cp').focusout(function() {
    var cp = 00000;
    cp = $('#cp').val();
    var cpLon = cp.length;
    if (cpLon < 5) {
        var numCeros = 5 - cpLon;
        var ceros = '';
        for (var i = 0; i < numCeros; i++) {
            ceros += '0';
        }
        $('#cp').val(ceros + cp);
    }

});

/*
RELLENA NOMBRE:
Hacemos que al terminar de rellenar nombre y apellidos si no se ha cambaido el valor del demandante antes,
nombreEmpresa se rellene con la combinacion de Nombre y Apellidos
*/
$('#apellidos').focusout(function() {
    if ($('#demandante1').is(':checked')) {
        $('#nombreEmpresa').val($('#nombre').val() + ' ' + $('#apellidos').val());
    }

});


/*
CAMBIO LABELS cifNif nombreEmpresa:
En el cmabio de radio seleccionado se cambian las labels de cifNif y nombreEmpresa y en caso de
ser "Particular" se rellena el nombreEmpresa con la combinacion de Nombre y Apellidos
*/
$('input[name="demandante"]').on('change', function() {
    if ($(this).val() == '2') {
        //change to "show update"
        $('#nifCifLabel').html('CIF');
        $('#nombreEmpresaLabel').html('Empresa');
        $('#nombreEmpresa').val('');
        checked=true;
    } else {
        $('#nifCifLabel').html('NIF');
        $('#nombreEmpresaLabel').html('Nombre');
        $('#nombreEmpresa').val($('#nombre').val() + ' ' + $('#apellidos').val());
        checked=false;
    }
});
