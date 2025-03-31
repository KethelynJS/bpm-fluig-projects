$(document).ready(function() {
    var opcaoData = {
        'opcao1': {
            aspecto: 'Líquido incolor translúcido.',
            dosagem: ' g/300 mL',
            analise_microbiologica: 'ausencia',
            motivoAnalise: 'motivoan'
            
        },
        'opcao2': {
            aspecto: 'Líquido incolor translúcido. ',
            dosagem: ' g/200 mL',
            analise_microbiologica: 'ausencia',
            motivoAnalise: 'motivoan'
        },
        'opcao3': {
            aspecto: 'Líquido alaranjado translúcido.',
            dosagem: ' g/300 mL',
            analise_microbiologica: 'ausencia',
            motivoAnalise: 'motivoan'
        },
        'opcao4': {
            aspecto: 'Líquido incolor translúcido. ',
            dosagem: ' g/300 mL',
            analise_microbiologica: 'ausencia',
            motivoAnalise: 'motivoan'
        },
        'PA177 - Gluc Up em Pó Limão Sachê c/ 50g': {
            aspecto: 'Após reconstituição com água: Líquido incolor translúcido.',
            dosagem: ' g/200 mL',
            prioridade: 'naoaplicavel',
            motivoAnalise: 'motivoan'
        },
        'PA178 - Gluc Up em Pó Limão Sachê c/ 75g': {
            aspecto: 'Após reconstituição com água: Líquido incolor translúcido.',
            dosagem: ' g/300 mL',
            prioridade: 'naoaplicavel',
            motivoAnalise: 'motivoan'
        },
        'PA390 - Gluc Up em Pó Limão frasco c/ 900g': {
            aspecto: 'Após reconstituição com água: Líquido incolor translúcido.',
            dosagem: ' g/200 mL',
            prioridade: 'naoaplicavel',
            motivoAnalise: 'motivoan'
        },
        'PI127 - Gluc Up em Pó Limão frasco c/ 900g - avulso': {
            aspecto: 'Após reconstituição com água: Líquido incolor translúcido.',
            dosagem: ' g/200 mL',
            prioridade: 'naoaplicavel',
            motivoAnalise: 'motivoan'
        },
        'PA393 - Gluc Up em Pó Limão sachê c/ 900g': {
            aspecto: 'Após reconstituição com água: Líquido incolor translúcido.',
            dosagem: ' g/200 mL',
            prioridade: 'naoaplicavel',
            motivoAnalise: 'motivoan'
        },
        'PI126 - Gluc Up em Pó Limão sachê c/ 900g - avulso': {
            aspecto: 'Após reconstituição com água: Líquido incolor translúcido.',
            dosagem: ' g/200 mL',
            prioridade: 'naoaplicavel',
            motivoAnalise: 'motivoan'
        },
        'opcao12': {
            aspecto: 'Líquido alaranjado translúcido. ',
            dosagem: ' g/300 mL',
            analise_microbiologica: 'ausencia',
            motivoAnalise: 'motivoan'
        },
        'opcao13': {
            aspecto: 'Líquido incolor a amarelado, translúcido levemente opalescente com possível presença de precipitados.',
            dosagem: ' g/300 mL',
            analise_microbiologica: 'ausencia',
            motivoAnalise: 'motivoan'
        },
        'PA290 - Lact Up em Pó Sachê Limao c/ 50g': {
            aspecto: 'Após reconstituição com água: Líquido branco a amarelo-claro leitoso.',
            dosagem: ' g/300 mL',
            motivoAnalise: 'motivoan'
        },
        'PA401 - Lact Up em Pó Limão sachê c/ 900g': {
            aspecto: 'Após reconstituição com água: Líquido branco a amarelo-claro leitoso.',
            dosagem: ' g/300 mL',
            prioridade: 'naoaplicavel',
            motivoAnalise: 'motivoan'
        },
        'PI136 - Lact Up em Pó Limão sachê c/ 900g - avulso': {
            aspecto: 'Após reconstituição com água: Líquido branco a amarelo-claro leitoso.',
            dosagem: ' g/300 mL',
            prioridade: 'naoaplicavel',
            motivoAnalise: 'motivoan'
        }
            
    };

    $('#opcao7').change(function() {
        var selectedValue = $(this).val();
        var data = opcaoData[selectedValue];

        if (data) {
            $('#aspecto').val(data.aspecto);

            // Atualizar o campo de texto valor1
            $('#dosagem').val(data.dosagem);
            
         // Atualizar a lista de seleção para análise microbiológica
            $('#opcao').val(data.analise_microbiologica);

            $('input[name="prioridade"][value="' + data.prioridade + '"]').prop('checked', true);
            $('input[name="motivoAnalise"][value="' + data.motivoAnalise + '"]').prop('checked', true);
        } else {
            $('#aspecto').val('');
            $('#dosagem').val('');
            $('#opcao').val('escolha'); // Volta para a opção "Escolha"
            $('input[name="prioridade"]').prop('checked', false);
            // Desmarcar todos os radio buttons de motivoAnalise
            $('input[name="motivoAnalise"]').prop('checked', false);
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