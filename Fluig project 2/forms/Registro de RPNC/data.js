$(document).ready(function() {
    console.log('Script para preencher data carregado');

    // Função para preencher data e hora
    function setCurrentDateTime() {
        var now = new Date();
        var day = ('0' + now.getDate()).slice(-2);
        var month = ('0' + (now.getMonth() + 1)).slice(-2);
        var year = now.getFullYear();
        var hours = ('0' + now.getHours()).slice(-2);
        var minutes = ('0' + now.getMinutes()).slice(-2);

        // Formatação para datetime-local
        var formattedDateTime = `${year}-${month}-${day}T${hours}:${minutes}`;

        // Formatação para date
        var formattedDate = `${year}-${month}-${day}`;

        // Preencher os campos com data e hora atual
        var dateTimeFields = ['datainicio2', 'data_final_microbiologico', 'data_final_esterilidade', 'data_inicio_esterilidade'];
        dateTimeFields.forEach(function(fieldId) {
            var $field = $('#' + fieldId);
            if ($field.length) {
                // Se o campo estiver vazio, preencha com a data e hora atual
                if ($field.val() === '') {
                    $field.val(formattedDateTime);
                }
            }
        });

        // Preencher campos de data sem hora
        var dateFields = ['data_inicio', ''];
        dateFields.forEach(function(fieldId) {
            var $field = $('#' + fieldId);
            if ($field.length) {
                // Se o campo estiver vazio, preencha com a data atual
                if ($field.val() === '') {
                    $field.val(formattedDate);
                }
            }
        });
    }

    setCurrentDateTime();
});
