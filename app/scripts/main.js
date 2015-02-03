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
        cifNif: {
            required: true
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
        }

    }
});

//Relleno CP con 0 a la izquierda si menos de 5 numeros

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
$('#demandante').focusout(function() {
    if ($('#demandante2').is(':checked')){
        $('#nifCifLabel').html('CIF');
        $('#nombreEmpresaLabel').html('Empresa');

    }

});
*/
$('input[name="demandante"]').on('change', function() {
    if ($(this).val() == '2') {
        //change to "show update"
        $('#nifCifLabel').html('CIF');
        $('#nombreEmpresaLabel').html('Empresa');
    } else {
        $('#nifCifLabel').html('NIF');
        $('#nombreEmpresaLabel').html('Nombre');
    }
});
