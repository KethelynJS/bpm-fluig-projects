$(document).ready(function() {
    var opcaoData = {
        'opcao1': {
            aspecto: 'Meio de Cultura',
            resultado: 'Aprovado'
        },
        'opcao2': {
            aspecto: 'Outro Aspecto',
            resultado: 'Reprovado'
        },
        'opcao3': {
            aspecto: 'Aspecto Específico 1',
            resultado: 'Aprovado'
        },
        'opcao4': {
            aspecto: 'Aspecto Específico 2',
            resultado: 'Reprovado'
        },
        'opcao5': {
            aspecto: 'Aspecto Geral',
            resultado: 'Aprovado'
        }
    };

    $('#opcao').change(function() {
        var selectedValue = $(this).val();
        var data = opcaoData[selectedValue];

        if (data) {
            $('#aspecto').val(data.aspecto);

            // Atualizar os campos de resultado na tabela com base na seleção
            $('table tbody tr').each(function() {
                $(this).find('td:last-child input').val(data.resultado);
            });
        } else {
            $('#aspecto').val('');
            $('table tbody tr').each(function() {
                $(this).find('td:last-child input').val('');
            });
        }
    });
});


$(document).ready(function() {
    console.log('Script para preencher data carregado');

    // Função para preencher data e hora
    function setCurrentDateTime() {
        var now = new Date();
        var day = ('0' + now.getDate()).slice(-2);
        var month = ('0' + (now.getMonth() + 1)).slice(-2);
        var year = now.getFullYear();
        var formattedDateTime = `${year}-${month}-${day}T${now.getHours()}:${now.getMinutes()}`;

        // Preencher os campos com data e hora atual
        var fields = ['datacainicio', 'datafinal5', 'datacainicio3', 'datafinal', 'datacainicio2', 'datacafinall'];
        fields.forEach(function(fieldId) {
            var $field = $('#' + fieldId);
            if ($field.length && $field.val() === '') {
                $field.val(formattedDateTime);
            }
        });

        // Preencher campo de data sem hora
        var formattedDate = `${day}/${month}/${year}`;
        $('#datacalendario').val(formattedDate);
    }

    setCurrentDateTime();
});