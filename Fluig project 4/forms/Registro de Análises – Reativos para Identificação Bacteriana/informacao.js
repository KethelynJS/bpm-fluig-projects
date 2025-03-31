$(document).ready(function () {
    var opcaoData = {
        'PA230	Hidroxido de Potassio 40% frasco c/ 100mL	PA- Reativos iden ba': {
            aspecto: 'Aspecto final -  Especificação: Líquido incolor e translúcido  Resultado: Adequado',
            dosagem: ' g/300 mL',
            resultado_analise: 'Desempenho microbiológico E. aerogenes ATCC 13048 -  Especificação: VP + (coloração vermelha)  Resultado: Adequado  Desempenho microbiológico  E. coli ATCC 25922  -  Especificação: VP - (sem formação de cor)  Resultado: Adequado   ',
            motivoAnalise: 'motivoan'
        },
        'PA231	Plasma de Coelho Liofilizado frasco c/ 3 mL após reconstituição	PA - Reativos iden ba': {
            aspecto: 'Aspecto final -  Especificação: Pó compacto levemente amarelado e uniforme  Resultado: Adequado',
            dosagem: ' g/200 mL',
            resultado_analise: 'Desempenho microbiológico S. aureus ATCC 25923 -  Especificação: Aglutinação consistente na prova de coagulase ligada (em lâmina) / Formação de coágulo consistente na prova de coagulase livre (em tubo) após  2 horas incubado a 35º C   Resultado: Adequado Desempenho microbiológico S. epidermidis ATCC 12228 -  Especificação: Ausência de aglutinação consistente na prova de coagulase ligada. / Ausência de formação de coágulo consistente na prova de coagulase livre.   Resultado: Adequado',
            motivoAnalise: 'motivoan'
        },
        'PI07	Plasma de coelho granel frasco c/ 600 mL	PI': {
            aspecto: 'Aspecto final -  Especificação: Líquido levemente amarelado e uniforme  Resultado: Adequado',
            dosagem: ' g/300 mL',
            resultado_analise: 'Desempenho microbiológico S. aureus ATCC 25923 -  Especificação: Aglutinação consistente na prova de coagulase ligada (em lâmina) / Formação de coágulo consistente na prova de coagulase livre (em tubo) após  2 horas incubado a 35º C   Resultado: Adequado Desempenho microbiológico S. epidermidis ATCC 12228 -  Especificação: Ausência de aglutinação consistente na prova de coagulase ligada. / Ausência de formação de coágulo consistente na prova de coagulase livre.   Resultado: Adequado',
            motivoAnalise: 'motivoan'
        },
        'PA232	Reativo de Erlich frasco c/ 100mL 	PA- Reativos iden ba': {
            aspecto: 'Aspecto final -  Especificação: Líquido amarelo brilhante e translúcido  Resultado: Adequado',
            dosagem: ' g/300 mL',
            resultado_analise: 'Desempenho microbiológico S. flexneri ATCC 12022 -  Especificação:  MOT -; LIS -; ORN -  Resultado: Adequado  Desempenho microbiológico E. coli ATCC 25922 -  Especificação:  MOT +; LIS +; ORN +  Resultado: Adequado',
            motivoAnalise: 'motivoan'
        },
        'PA233	Reativo de Kovacs frasco c/ 100mL	PA- Reativos iden ba': {
            aspecto: 'Aspecto final -  Especificação: Líquido translúcido amarelo a amarelo-esverdeado  Resultado: Adequado',
            dosagem: ' g/300 mL',
            resultado_analise: 'Desempenho microbiológico S. flexneri ATCC 12022 -  Especificação:  MOT -; IND -; ORN -  Resultado: Adequado  Desempenho microbiológico E. coli ATCC 25922 -  Especificação:  MOT +; IND +; ORN +  Resultado: Adequado',
            motivoAnalise: 'motivoan'
        },
        'PA234	Reativo de Kovacs frasco c/ 10mL	PA- Reativos iden ba': {
            aspecto: 'Aspecto final -  Especificação: Líquido translúcido amarelo a amarelo-esverdeado  Resultado: Adequado',
            dosagem: ' g/300 mL',
            resultado_analise: 'Desempenho microbiológico S. flexneri ATCC 12022 -  Especificação: Reação negativa  Resultado: Adequado  Desempenho microbiológico E. coli ATCC 25922 -  Especificação: Reação positiva  Resultado: Adequado',
            motivoAnalise: 'motivoan'
        },
        'PA235	Reativo de Kovacs frasco c/ 30mL	PA- Reativos iden ba': {
            aspecto: 'Aspecto final. Especificação: Líquido translúcido amarelo a amarelo-esverdeado. Resultado: Adequado',
            dosagem: ' g/300 mL',
            resultado_analise: 'Desempenho microbiológico S. flexneri ATCC 12022. Especificação: Reação negativa. Resultado: Adequado Desempenho microbiológico E. coli ATCC 25922. Especificação: Reação positiva. Resultado: Adequado',
            motivoAnalise: 'motivoan'
        },
        'PI41	Reativo de Kovacs frasco c/ 5 mL - avulso	PI': {
            aspecto: 'Aspecto final. Especificação: Líquido translúcido amarelo a amarelo-esverdeado. Resultado: Adequado',
            dosagem: ' g/300 mL',
            resultado_analise: 'Desempenho microbiológico S. flexneri ATCC 12022. Especificação: Reação negativa. Resultado: Adequado Desempenho microbiológico E. coli ATCC 25922. Especificação: Reação positiva. Resultado: Adequado',
            motivoAnalise: 'motivoan'
        },
        'PA236	Reativo para Catalase frasco c/ 15mL	PA- Reativos iden ba': {
            aspecto: 'Aspecto final. Especificação: Líquido transparente e incolor. Resultado: Adequado',
            dosagem: ' g/300 mL',
            resultado_analise: 'Desempenho microbiológico S. aureus ATCC 25923. Especificação: Formação de bolhas no contato com as colônias. Resultado: Adequado Desempenho microbiológico S. pyogenes ATCC 19615.  Especificação: Ausência de bolhas no contato com as colônias.  Resultado: Adequado',
            motivoAnalise: 'motivoan'
        },
        'PA238	Reativo para Prova do Vermelho de Metila frasco c/ 10mL	PA- Reativos iden ba': {
            aspecto: 'Aspecto final. Especificação: Líquido vermelho brilhante e translúcido. Resultado: Adequado',
            dosagem: ' g/300 mL',
            resultado_analise: 'Desempenho microbiológico E. aerogenes ATCC 13048 (inoculado em caldo MRVP). Especificação: MR – (sem formação de cor). Resultado: Adequado Desempenho microbiológico E. coli ATCC 25922 (inoculado em caldo MRVP). Especificação:: MR + (coloração vermelha). Resultado: Adequado  ',
            motivoAnalise: 'motivoan'
        },
        'PA226	Alfa Naftol 5% frasco c/ 30mL	PA- Reativos iden ba': {
            aspecto: 'Aspecto final - Especificação: Líquido amarelo claro e translúcido. Resultado: Adequado',
            dosagem: ' g/300 mL',
            resultado_analise: 'Desempenho microbiológico E. aerogenes ATCC 13048 -  Especificação: VP + (coloração vermelha). Resultado: Adequado Desempenho microbiológico E. coli ATCC 25922 -  Especificação: VP - (sem formação de cor). Resultado: Adequado ',
            motivoAnalise: 'motivoan'
        },
        'PA227	Cloreto Férrico 10% frasco c/ 100mL	PA- Reativos iden ba': {
            aspecto: 'Aspecto final - Especificação: Líquido amarelo-escuro brilhante e translúcido. Resultado: Adequado',
            dosagem: ' g/300 mL',
            resultado_analise: 'Desempenho microbiológico E. coli ATCC 25922  -  Especificação: Sem mudança de coloração para verde. Resultado: Adequado Desempenho microbiológico P. mirabilis ATCC 25933 -  Especificação: Mudança de coloração para verde-escuro. Resultado: Adequado',
            motivoAnalise: 'motivoan'
        },
        'PA228	Conjunto para Prova de Nitrato frascos c/ 10mL	PA- Reativos iden ba': {
            aspecto: 'Aspecto final N,N-Dimetil-alfa-naftilamina. Especificação: Solução rosa clara a transparente sem precipitados. Resultado: Adequado Aspecto final Ácido Sulfanílico. Especificação: Solução transparente sem precipitados. Resultado: Adequado',
            dosagem: ' g/300 mL',
            resultado_analise: 'Desempenho microbiológico P. aeruginosa ATCC 27853. Especifciação: MOT +; NIT + . Resultado: Adequado Desempenho microbiológico P. mirabilis ATCC 25933.  Especifciação: MOT +; NIT + . Resultado: Adequado Desempenho microbiológico A. baumannii Cepa Selvagem.  Especifciação: MOT -; NIT - . Resultado: Adequado',
            motivoAnalise: 'motivoan'
        },
        'PI98	Acido sulfanílico frasco c/ 10 mL - Avulso	PI': {
            aspecto: 'Aspecto final Ácido Sulfanílico. Especificação: Solução transparente sem precipitados. Resultado: Adequado',
            dosagem: ' g/300 mL',
            resultado_analise: 'Desempenho microbiológico P. aeruginosa ATCC 27853. Especifciação: MOT +; NIT + . Resultado: Adequado Desempenho microbiológico P. mirabilis ATCC 25933.  Especifciação: MOT +; NIT + . Resultado: Adequado Desempenho microbiológico A. baumannii Cepa Selvagem.  Especifciação: MOT -; NIT - . Resultado: Adequado',
            motivoAnalise: 'motivoan'
        },
        'PI99	N,N-Dimetil-alfa-naftilamina frasco c/ 10 mL - Avulso	PI': {
            aspecto: 'Aspecto final N,N-Dimetil-alfa-naftilamina. Especificação: Solução rosa clara a transparente sem precipitados. Resultado: Adequado',
            dosagem: ' g/300 mL',
            resultado_analise: 'Desempenho microbiológico P. aeruginosa ATCC 27853. Especifciação: MOT +; NIT + . Resultado: Adequado Desempenho microbiológico P. mirabilis ATCC 25933.  Especifciação: MOT +; NIT + . Resultado: Adequado Desempenho microbiológico A. baumannii Cepa Selvagem.  Especifciação: MOT -; NIT - . Resultado: Adequado',
            motivoAnalise: 'motivoan'
        },
        'PI57	Acido sulfanílico frasco c/ 5 mL - Avulso	PI': {
            aspecto: 'Aspecto final Ácido Sulfanílico. Especificação: Solução transparente sem precipitados. Resultado: Adequado',
            dosagem: ' g/300 mL',
            resultado_analise: 'Desempenho microbiológico P. aeruginosa ATCC 27853. Especifciação: MOT +; NIT + . Resultado: Adequado Desempenho microbiológico P. mirabilis ATCC 25933.  Especifciação: MOT +; NIT + . Resultado: Adequado Desempenho microbiológico A. baumannii Cepa Selvagem.  Especifciação: MOT -; NIT - . Resultado: Adequado',
            motivoAnalise: 'motivoan'
        },
        'PI58	N,N-Dimetil-alfa-naftilamina frasco c/ 5mL - Avulso	PI': {
            aspecto: 'Aspecto final N,N-Dimetil-alfa-naftilamina. Especificação: Solução rosa clara a transparente sem precipitados. Resultado: Adequado',
            dosagem: ' g/300 mL',
            resultado_analise: 'Desempenho microbiológico P. aeruginosa ATCC 27853. Especifciação: MOT +; NIT + . Resultado: Adequado Desempenho microbiológico P. mirabilis ATCC 25933.  Especifciação: MOT +; NIT + . Resultado: Adequado Desempenho microbiológico A. baumannii Cepa Selvagem.  Especifciação: MOT -; NIT - . Resultado: Adequado',
            motivoAnalise: 'motivoan'
        },
        'PI59	Zinco Granulado tubo c/ 2 g - Avulso	PI': {
            aspecto: 'Aspecto final Zinco Granulado. Especificação: Grânulos a pó cinza. Resultado: Adequado',
            dosagem: ' g/300 mL',
            resultado_analise: 'Desempenho microbiológico P. aeruginosa ATCC 27853. Especifciação: MOT +; NIT + . Resultado: Adequado Desempenho microbiológico P. mirabilis ATCC 25933.  Especifciação: MOT +; NIT + . Resultado: Adequado Desempenho microbiológico A. baumannii Cepa Selvagem.  Especifciação: MOT -; NIT - . Resultado: Adequado',
            motivoAnalise: 'motivoan'
        },
        'PA229	Conjunto para Prova de VP frascos c/ 10mL	PA- Reativos iden ba': {
            aspecto: 'Aspecto final Alfa Naftol. Especificação: Líquido amarelo claro e translúcido. Resultado: Adequado Aspecto final Hidróxido de potássio. Especificação: Líquido incolor e translúcido.  Resultado: Adequado',
            dosagem: ' g/300 mL',
            resultado_analise: 'Desempenho microbiológico E. aerogenes ATCC 13048. Especifciação: VP + (coloração vermelha). Resultado: Adequado Desempenho microbiológico E. coli ATCC 25922. Especifciação: VP - (sem formação de cor). Resultado: Adequado',
            motivoAnalise: 'motivoan'
        },
        'PI96	Hidróxido de potássio 40% frasco c/ 10 mL - Avulso	PI': {
            aspecto: 'Aspecto final Hidróxido de potássio. Especificação: Líquido incolor e translúcido.  Resultado: Adequado',
            dosagem: ' g/300 mL',
            resultado_analise: 'Desempenho microbiológico E. aerogenes ATCC 13048. Especifciação: VP + (coloração vermelha). Resultado: Adequado Desempenho microbiológico E. coli ATCC 25922. Especifciação: VP - (sem formação de cor). Resultado: Adequado',
            motivoAnalise: 'motivoan'
        },
        'PI97	Alfa naftol 5% frasco c/ 10 mL - Avulso	PI': {
            aspecto: 'Aspecto final Alfa Naftol. Especificação: Líquido amarelo claro e translúcido. Resultado: Adequado Aspecto final ',
            dosagem: ' g/300 mL',
            resultado_analise: 'Desempenho microbiológico E. aerogenes ATCC 13048. Especifciação: VP + (coloração vermelha). Resultado: Adequado Desempenho microbiológico E. coli ATCC 25922. Especifciação: VP - (sem formação de cor). Resultado: Adequado',
            motivoAnalise: 'motivoan'
        },
        'PA311	Tiras de hemolisina frasco c/ 10 tiras	PA- Reativos iden ba': {
            aspecto: 'Aspecto final. Especificação: Tiras brancas com impregnação reativa homogênea. Resultado: Adequado',
            dosagem: ' g/300 mL',
            resultado_analise: 'Desempenho microbiológico S. agalactiae ATCC 13813.  Especificação: Formação de uma seta ou meia-lua convergindo para a tira na intersecção da mesma com o crescimento da bacteriano. Resultado: Adequado Desempenho microbiológico S. pneumoniae ATCC 49619. Especificação:  Ausência da formação de uma seta ou meia-lua convergindo para a tira na intersecção da mesma com o crescimento da bacteriano. Resultado: Adequado',
            motivoAnalise: 'motivoan'
        },
        'PA317	Alfa Naftol 5% frasco c/ 100 mL	PA- Reativos iden ba': {
            aspecto: 'Aspecto final. Especificação: Líquido amarelo claro e translúcido. Resultado: Adequado',
            dosagem: ' g/300 mL',
            resultado_analise: 'Desempenho microbiológico E. aerogenes ATCC 13048 (inoculado em caldo MRVP). Especificação: VP + (coloração vermelha). Resultado: Adequado. Desempenho microbiológico E. coli ATCC 25922 (inoculado em caldo MRVP).  Especificação: VP - (sem formação de cor). Resultado: Adequado. ',
            motivoAnalise: 'motivoan'
        }
        
        
        // Adicione os demais casos conforme necessário...
    };

    $('#opcao7').change(function () {
        var selectedValue = $(this).val();
        var data = opcaoData[selectedValue];

        if (data) {
            $('#aspecto').val(data.aspecto);
            $('#dosagem').val(data.dosagem);
            $('#resultado_analise').val(data.resultado_analise);

            $('input[name="motivoAnalise"][value="' + data.motivoAnalise + '"]').prop('checked', true);
        } else {
            $('#aspecto').val('');
            $('#dosagem').val('');
            $('#resultado_analise').val('');
            $('input[name="motivoAnalise"]').prop('checked', false);
        }
    });
});
