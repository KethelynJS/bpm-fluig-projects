$(document).ready(function() {
    var opcaoData = {
        'opcao1': {
            aspecto5: 'Líquido incolor translúcido.',
            dosagem: ' g/300 mL',
            analise_microbiologica: 'ausencia',
            motivoAnalise: 'motivoan'
            
        },
        'opcao2': {
            aspecto5: 'Líquido incolor translúcido. ',
            dosagem: ' g/200 mL',
            analise_microbiologica: 'ausencia',
            motivoAnalise: 'motivoan'
        },
        'opcao3': {
            aspecto5: 'Líquido alaranjado translúcido.',
            dosagem: ' g/300 mL',
            analise_microbiologica: 'ausencia',
            motivoAnalise: 'motivoan'
        },
        'opcao4': {
            aspecto5: 'Líquido incolor translúcido. ',
            dosagem: ' g/300 mL',
            analise_microbiologica: 'ausencia',
            motivoAnalise: 'motivoan'
        },
        'opcao5': {
            aspecto5: 'Após reconstituição com água: Líquido incolor translúcido.',
            dosagem: ' g/200 mL',
            prioridade: 'naoaplicavel',
            motivoAnalise: 'motivoan'
        },
        'opcao6': {
            aspecto5: 'Após reconstituição com água: Líquido incolor translúcido.',
            dosagem: ' g/300 mL',
            prioridade: 'naoaplicavel',
            motivoAnalise: 'motivoan'
        },
        'opcao8': {
            aspecto5: 'Após reconstituição com água: Líquido incolor translúcido.',
            dosagem: ' g/200 mL',
            prioridade: 'naoaplicavel',
            motivoAnalise: 'motivoan'
        },
        'opcao9': {
            aspecto5: 'Após reconstituição com água: Líquido incolor translúcido.',
            dosagem: ' g/200 mL',
            prioridade: 'naoaplicavel',
            motivoAnalise: 'motivoan'
        },
        'opcao10': {
            aspecto5: 'Após reconstituição com água: Líquido incolor translúcido.',
            dosagem: ' g/200 mL',
            prioridade: 'naoaplicavel',
            motivoAnalise: 'motivoan'
        },
        'opcao11': {
            aspecto5: 'Após reconstituição com água: Líquido incolor translúcido.',
            dosagem: ' g/200 mL',
            prioridade: 'naoaplicavel',
            motivoAnalise: 'motivoan'
        },
        'opcao12': {
            aspecto5: 'Líquido alaranjado translúcido. ',
            dosagem: ' g/300 mL',
            analise_microbiologica: 'ausencia',
            motivoAnalise: 'motivoan'
        },
        'opcao13': {
            aspecto5: 'Líquido amarelo-claro, translúcido levemente opalescente com possível presença de precipitados.',
            dosagem: ' g/300 mL',
            analise_microbiologica: 'ausencia',
            motivoAnalise: 'motivoan'
        },
        'opcao14': {
            aspecto5: 'Após reconstituição com água: Líquido branco a amarelo-claro leitoso.',
            dosagem: ' g/300 mL',
            motivoAnalise: 'motivoan'
        },
        'opcao15': {
            aspecto5: 'Após reconstituição com água: Líquido branco a amarelo-claro leitoso.',
            dosagem: ' g/300 mL',
            prioridade: 'naoaplicavel',
            motivoAnalise: 'motivoan'
        },
        'opcao16': {
            aspecto5: 'Após reconstituição com água: Líquido branco a amarelo-claro leitoso.',
            dosagem: ' g/300 mL',
            prioridade: 'naoaplicavel',
            motivoAnalise: 'motivoan'
        }
            
    };

    $('#opcao7').change(function() {
        var selectedValue = $(this).val();
        var data = opcaoData[selectedValue];

        if (data) {
            $('#aspecto5').val(data.aspecto5);

            // Atualizar o campo de texto valor1
            $('#dosagem').val(data.dosagem);
            
         // Atualizar a lista de seleção para análise microbiológica
            $('#opcao').val(data.analise_microbiologica);

            $('input[name="prioridade"][value="' + data.prioridade + '"]').prop('checked', true);
            $('input[name="motivoAnalise"][value="' + data.motivoAnalise + '"]').prop('checked', true);
        } else {
            $('#aspecto5').val('');
            $('#dosagem').val('');
            $('#opcao').val('escolha'); // Volta para a opção "Escolha"
            $('input[name="prioridade"]').prop('checked', false);
            // Desmarcar todos os radio buttons de motivoAnalise
            $('input[name="motivoAnalise"]').prop('checked', false);
        }
    });
});


