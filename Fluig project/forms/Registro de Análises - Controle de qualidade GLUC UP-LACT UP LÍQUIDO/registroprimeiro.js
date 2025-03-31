$(document).ready(function() {
    var opcaoData = {
        'PA169 - Gluc Up 100g Limão frasco c/ 300mL': {
            aspecto: 'Líquido incolor translúcido.',
            dosagem: ' g/300 mL',
            analise_microbiologica: 'ausencia',
            motivoAnalise: 'motivoan'
            
        },
        'PA170 - Gluc Up 50g Limão frasco c/ 200mL': {
            aspecto: 'Líquido verde-claro translúcido ',
            dosagem: ' g/200 mL',
            analise_microbiologica: 'ausencia',
            motivoAnalise: 'motivoan'
        },
        'PA172 - Gluc Up 75g Laranja frasco c/ 300mL': {
            aspecto: 'Líquido alaranjado translúcido.',
            dosagem: ' g/300 mL',
            analise_microbiologica: 'ausencia',
            motivoAnalise: 'motivoan'
        },
        'PA173 - Gluc Up 75g Limão frasco c/ 300mL': {
            aspecto: 'Líquido verde-claro translúcido. ',
            dosagem: ' g/300 mL',
            analise_microbiologica: 'ausencia',
            motivoAnalise: 'motivoan'
        },
        'opcao5': {
            aspecto: 'Após reconstituição com água: Líquido incolor translúcido.',
            dosagem: ' g/200 mL',
            prioridade: 'naoaplicavel',
            motivoAnalise: 'motivoan'
        },
        'opcao6': {
            aspecto: 'Após reconstituição com água: Líquido incolor translúcido.',
            dosagem: ' g/300 mL',
            prioridade: 'naoaplicavel',
            motivoAnalise: 'motivoan'
        },
        'opcao8': {
            aspecto: 'Após reconstituição com água: Líquido incolor translúcido.',
            dosagem: ' g/200 mL',
            prioridade: 'naoaplicavel',
            motivoAnalise: 'motivoan'
        },
        'opcao9': {
            aspecto: 'Após reconstituição com água: Líquido incolor translúcido.',
            dosagem: ' g/200 mL',
            prioridade: 'naoaplicavel',
            motivoAnalise: 'motivoan'
        },
        'opcao10': {
            aspecto: 'Após reconstituição com água: Líquido incolor translúcido.',
            dosagem: ' g/200 mL',
            prioridade: 'naoaplicavel',
            motivoAnalise: 'motivoan'
        },
        'opcao11': {
            aspecto: 'Após reconstituição com água: Líquido incolor translúcido.',
            dosagem: ' g/200 mL',
            prioridade: 'naoaplicavel',
            motivoAnalise: 'motivoan'
        },
        'PA287 - Lact Up 50g Laranja frasco c/ 300mL': {
            aspecto: 'Líquido alaranjado translúcido. ',
            dosagem: ' g/300 mL',
            analise_microbiologica: 'ausencia',
            motivoAnalise: 'motivoan'
        },
        'PA288 - Lact Up 50g Limão frasco c/ 300mL': {
            aspecto: 'Líquido amarelo-claro, translúcido levemente opalescente com possível presença de precipitados.',
            dosagem: ' g/300 mL',
            analise_microbiologica: 'ausencia',
            motivoAnalise: 'motivoan'
        },
        'opcao14': {
            aspecto: 'Após reconstituição com água: Líquido branco a amarelo-claro leitoso.',
            dosagem: ' g/300 mL',
            motivoAnalise: 'motivoan'
        },
        'opcao15': {
            aspecto: 'Após reconstituição com água: Líquido branco a amarelo-claro leitoso.',
            dosagem: ' g/300 mL',
            prioridade: 'naoaplicavel',
            motivoAnalise: 'motivoan'
        },
        'opcao16': {
            aspecto: 'Após reconstituição com água: Líquido branco a amarelo-claro leitoso.',
            dosagem: ' g/300 mL',
            prioridade: 'naoaplicavel',
            motivoAnalise: 'motivoan'
        },
        'PA414 - Gluc Up SC 75g Limão frasco c/ 300mL': {
            aspecto: 'Aspecto Final: Especificação: Líquido incolor translúcido. Resultado: Adequado',
            dosagem: ' g/300 mL',
            prioridade: 'naoaplicavel',
            motivoAnalise: 'motivoan'
        },
        'PA415 - Lact Up SC 50g Limão frasco c/ 300mL': {
            aspecto: 'Especificação: Líquido incolor a amarelado translúcido a levemente opalescente com possível presença de precipitados. Resultado: Adequado',
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


