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

        // Preencher os campos com data e hora atual
        var fields = ['data_inicio_esterilidade'];
        fields.forEach(function(fieldId) {
            var $field = $('#' + fieldId);
            if ($field.length) {
                // Se o campo estiver vazio, preencha com a data e hora atual
                if ($field.val() === '') {
                    $field.val(formattedDateTime);
                }
            }
        });

        // Preencher campo de data sem hora
        var formattedDate = `${day}/${month}/${year}`;
        var $datacalendario = $('#datacalendario');
        if ($datacalendario.length) {
            // Se o campo estiver vazio, preencha com a data atual
            if ($datacalendario.val() === '') {
                $datacalendario.val(formattedDate);
            }
        }
    }

    setCurrentDateTime();
});

//Função para formatar a data e hora no formato brasileiro (dd/MM/yyyy HH:mm)
function formatarDataHora(data) {
    const dia = String(data.getDate()).padStart(2, '0');
    const mes = String(data.getMonth() + 1).padStart(2, '0');
    const ano = data.getFullYear();
    const horas = String(data.getHours()).padStart(2, '0');
    const minutos = String(data.getMinutes()).padStart(2, '0');
    return `${dia}/${mes}/${ano} ${horas}:${minutos}`;
}

window.onload = function() {
    // Pegar a data e hora atual
    const dataAtual = new Date();

    // Verificar e preencher cada campo se estiver vazio
    const dataInicio2 = document.getElementById('datainicio2');
    if (!dataInicio2.value) {
        dataInicio2.value = formatarDataHora(dataAtual);
    }

    const dataFinalMicrobiologico = document.getElementById('data_final_microbiologico');
    if (!dataFinalMicrobiologico.value) {
        dataFinalMicrobiologico.value = formatarDataHora(dataAtual);
    }

    const dataFinalEsterilidade = document.getElementById('data_final_esterilidade');
    if (dataFinalEsterilidade) {  // Verifica se o elemento existe
        if (!dataFinalEsterilidade.value) {
            dataFinalEsterilidade.value = formatarDataHora(dataAtual);
        }
    } else {
        console.error("O campo data_final_esterilidade não foi encontrado.");
    }
};
