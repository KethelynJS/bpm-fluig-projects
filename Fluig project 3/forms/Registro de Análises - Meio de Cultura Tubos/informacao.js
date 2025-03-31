$(document).ready(function() {
    var produtoData = {
        'PA114 - Meio Rugai com Lisina c/ 10 tubos - PA - MC em tubos': {
            aspecto: 'pH final - Meio de Rugai: Especificação: 7,4 ± 0,2. Resultado: Adequado pH final - Meio de Lisina Motilidade: Especificação: 6,5 ± 0,2. Resultado: Adequado Aspecto final -  Meio de Rugai: Especificação: Meio verde-escuro translúcido, ligeiramente opalescente.  Resultado: Adequado Aspecto final -  Meio de Lisina Motilidade: Especificação:  Meio púrpura ligeiramente opalescente. Resultado: Adequado',
            dosagem: ' g/300 mL',
            bacteriana: true, // Marcar a caixa de seleção "bacteriana"
            infoText1: 'Desempenho microbiológico P. vulgaris ATCC 13315 - Especificação: LTD +; Glicose +; Gás +; H2S +; URE +; LIS -; MOT +; IND +. Resultado: Adequado Desempenho microbiológico K. pneumoniae ATCC 13883 - Especificação: LTD -; Glicose +; Gás +; H2S -; URE +; LIS +; MOT -; IND -. Resultado: Adequado Desempenho microbiológico E. coli ATCC 25922 - Especificação: LTD -; Glicose +; Gás +; H2S -; URE -; LIS +; MOT +; IND +. Resultado: Adequado Desempenho microbiológico P. aeruginosa ATCC 27853 - Especificação: TD -; Glicose -; Gás -; H2S -; URE -; LIS -; MOT +; IND -. Resultado: Adequado Desempenho microbiológico S. flexneri ATCC 12022 - Especificação: LTD -; Glicose +; Gás -; H2S -; URE -; LIS -; MOT -; IND -. Resultado: Adequado Desempenho microbiológico S. typhimurium ATCC 14028  - Especificação: LTD -; Glicose +; Gás +; H2S +; URE -; LIS +; MOT +; IND -.  Resultado: Adequado Esterilidade - Especificação: Ausência de crescimento. Resultado: Adequado'
        },
        'PI40 - Meio de rugai - avulso - Termolábel - PI': {
            aspecto: 'pH final - Meio de Rugai: Especificação: 7,4 ± 0,2. Resultado: Adequado pH final - Meio de Lisina Motilidade: Especificação: 6,5 ± 0,2. Resultado: Adequado Aspecto final -  Meio de Rugai: Especificação: Meio verde-escuro translúcido, ligeiramente opalescente.  Resultado: Adequado Aspecto final -  Meio de Lisina Motilidade: Especificação:  Meio púrpura ligeiramente opalescente. Resultado: Adequado',
            dosagem: ' g/200 mL',
            bacteriana: true,
            infoText1:'Desempenho microbiológico P. vulgaris ATCC 13315 - Especificação:  LTD +; Glicose +; Gás +; H2S +; URE +; LIS -; MOT +; IND +. Resultado: Adequado Desempenho microbiológico K. pneumoniae ATCC 13883 - Especificação: LTD -; Glicose +; Gás +; H2S -; URE +; LIS +; MOT -; IND -. Resultado: Adequado Desempenho microbiológico E. coli ATCC 25922 - Especificação: LTD -; Glicose +; Gás +; H2S -; URE -; LIS +; MOT +; IND +. Resultado: Adequado Desempenho microbiológico P. aeruginosa ATCC 27853 - Especificação: LTD -; Glicose -; Gás -; H2S -; URE -; LIS -; MOT +; IND -. Resultado: Adequado Desempenho microbiológico S. flexneri ATCC 12022  - Especificação: LTD -; Glicose +; Gás -; H2S -; URE -; LIS -; MOT -; IND -. Resultado: Adequado Desempenho microbiológico S. typhimurium ATCC 14028 - Especificação: LTD -; Glicose +; Gás +; H2S +;URE -; LIS +; MOT +; IND -.  Resultado: Adequado'
        },
        'PA313 - Agar Sabouraud com Cloranfenicol cx c/ 10 tubos (9mL) - PA - MC em tubos': {
            aspecto: 'pH final. Especificação: 5,6 ± 0,2. Resultado: Adequado Aspecto final. Especificação: Meio sólido âmbar claro, ligeiramente opalescente. Resultado: Adequado',
            dosagem: ' g/200 mL',
            bacteriana: true,
            infoText1: 'Desempenho microbiológico C. albicans ATCC 10231. Especificação: Crescimento bom a excelente de colônias brancas cremosas. Resultado: Adequado Desempenho microbiológico E. coli ATCC 25922. Especificação: Crescimento inibido. Resultado: Adequado Desempenho microbiológico A. niger ATCC 16404. Especificação: Crescimento bom a excelente de colônias cotonosas. Resultado: Adequado '
        },
        // Continue adicionando os outros produtos conforme necessário
        'PA314 - Agar Mycosel cx c/ 10 tubos (9mL) - PA - MC em tubos': {
            aspecto: 'pH final. Especificação: 7,2 ± 0,2. Resultado: Adequado Aspecto final. Especificação: Meio âmbar claro, ligeiramente opalescente. Resultado: Adequado',
            dosagem: ' g/300 mL',
            bacteriana: true,
            infoText1: 'Desempenho microbiológico C. albicans ATCC 10231. Especificação: Crescimento bom a excelente de colônias brancas cremosas. Resultado: Adequado Desempenho microbiológico T. mentagrophytes ATCC 9533. Especificação: Crescimento bom a excelente de colônias cotonosas. Resultado: Adequado Desempenho microbiológicoE. coli ATCC 25922. Especificação: Crescimento inibido. Resultado: Adequado Desempenho microbiológico A. niger ATCC 16404. Especificação: Crescimento inibido. Resultado: Adequado '
        },
        'PA315 - Meio de Lowenstein cx c/ 10 tubos (9mL) - PA - MC em tubos': {
            aspecto: 'Aspecto final. Especificação: Meio verde-claro opalescente. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico M. tuberculosis H37Rv (ATCC 27294) ou similar. Especificação: Crescimento bom a excelente de colônias granulares, foscas, secas e friáveis. Resultado: Adequado Esterilidade. Especificação: Ausência de crescimento. Resultado: Adequado'
        },
        'PA316 - Agar Sabouraud Dextrose cx c/ 10 tubos (9mL) - PA - MC em tubos': {
            aspecto: 'pH final. Especificação: 5,6 ± 0,2. Resultado: Adequado Aspecto final. Especificação: Meio âmbar claro, ligeiramente opalescente. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico C. albicans ATCC 10231. Especificação: Crescimento bom a excelente de colônias brancas. Resultado: Adequado Desempenho microbiológico A. niger ATCC 16404. Especificação: Crescimento bom a excelente de colônias negras com  contorno amarelado.  Resultado: Adequado '
        },
        'PA336 - Descontaminante p/ Ogawa Sachê c/ 10 tubos - PA - MC em tubos': {
            aspecto: 'Aspecto final. Especificação: Líquido incolor e translúcido. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Esterilidade. Especificação: Ausência de crescimento. Resultado: Adequado'
        },
        'PA52 - Agar Bile Esculina cx c/ 10 tubos - PA - MC em tubos': {
            aspecto: 'pH final. Especificação: 6,6 ± 0,2. Resultado: Adequado Aspecto final.  Especificação: Meio âmbar claro translúcido, ligeiramente opalescente. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico E. coli ATCC 25922. Especificação: Crescimento ausente. Resultado: Adequado Desempenho microbiológico E. faecalis ATCC 29212.  Especificação: Crescimento bom a excelente com escurecimento do meio. Resultado: Adequado'
        },
        'PA53 - Agar Cetrimide cx c/ 10 tubos - Sob encomenda - PA - MC em tubos': {
            aspecto: 'pH final. Especificação: 7,4 ± 0,2. Resultado: Adequado Aspecto final. Especificação: Meio incolor opalescente. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico P. aeruginosa ATCC 27853. Especificação: Crescimento bom a excelente com pigmento fluorescente. Resultado: Adequado Desempenho microbiológico E. coli ATCC 25922. Especificação: Crescimento inibido. Resultado: Adequado Desempenho microbiológico S. maltophilia ATCC 13637. Especificação: Crescimento inibido. Resultado: Adequado'
        },
        'PA54 - Agar Chocolate Suplementado cx c/ 08 tubos - PA - MC em tubos': {
            aspecto: 'pH final a 25º C. Especificação: 7,3 ± 0,1. Resultado: Adequado Aspecto final. Especificação: Meio castanho opalescente. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico H. influenzae ATCC 10211. Especificação: Crescimento moderado a bom de colônias médias translúcidas. Resultado: Adequado Esterilidade. Especificação: Ausência de crescimento. Resultado: Adequado'
        },
        'PA55 - Agar Citrato de Simmons cx c/ 10 tubos - PA - MC em tubos': {
            aspecto: 'pH final. Especificação: 6,9 ± 0,2. Resultado: Adequado Aspecto final. Especificação: Meio verde escuro translúcido, ligeiramente opalescente. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico K. pneumoniae ATCC 13883. Especificação: Crescimento com alteração de cor do meio azul. Resultado: Adequado Desempenho microbiológico E. coli ATCC 25922  -  Especificação: Crescimento ausente, sem alteração de cor do meio. Resultado: Adequado'
        },
        'PA56 - Agar Fenilalanina cx c/ 10 tubos - PA - MC em tubos': {
            aspecto: 'pH antes da adição do sangue.  Especificação: 7,3 ± 0,2.  Resultado: Adequado Aspecto final. Especificação: Meio âmbar claro translúcido. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico E. coli ATCC 25922. Especificação: Crescimento sem mudança de coloração para verde, após adição de cloreto férrico 10%. Resultado: Adequado Desempenho microbiológico P. mirabilis ATCC 25933.  Especificação: Crescimento com mudança de coloração para verde, após adição de cloreto férrico 10%. Resultado: Adequado Esterilidade. Especificação: Ausência de crescimento. Resultado: Adequado'
        },
        'PA57 - Agar Manitol cx c/ 10 tubos - PA - MC em tubos': {
            aspecto: 'pH final. Especificação: 7,4 ± 0,2. Resultado: Adequado Aspecto final. Especificação: Meio de cor pêssego a vermelho rosado, ligeiramente opalescente.  Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico S. aureus ATCC 25923.  Especificação: Crescimento moderado a bom de colônias amarelas. Resultado: Adequado Desempenho microbiológico S. epidermidis ATCC 12228.  Especificação: Crescimento moderado a bom de colônias incolores puntiformes. Resultado: Adequado Desempenho microbiológico P. mirabilis ATCC 25933. Especificação: Crescimento acentuadamente inibido. Resultado: Adequado '
        },
        'PA58 - Agar Mycosel cx c/ 08 tubos - PA - MC em tubos': {
            aspecto: 'pH final. Especificação: 7,2 ± 0,2. Resultado: Adequado Aspecto final. Especificação: Meio âmbar claro, ligeiramente opalescente. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico C. albicans ATCC 10231. Especificação: Crescimento bom a excelente de colônias brancas cremosas. Resultado: Adequado Desempenho microbiológico T. mentagrophytes ATCC 9533. Especificação: Crescimento bom a excelente de colônias cotonosas. Resultado: Adequado Desempenho microbiológico E. coli ATCC 25922.  Especificação:  Crescimento inibido. Resultado: Adequado Desempenho microbiológico A. niger ATCC 16404. Especificação: Crescimento inibido.Resultado: Adequado'
        },
        'PA59 - Agar OF Glicose cx c/ 10 tubos - PA - MC em tubos': {
            aspecto: 'pH final. Especificação: 6,9 ± 0,2. Resultado: Adequado Aspecto final. Especificação: Meio verde escuro translúcido. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desenvolvimento microbiológico P. aeruginosa ATCC 27853.  Especificação: Oxidação. Resultado: Adequado Desenvolvimento microbiológico K. pneumoniae ATCC 13883.  Especificação: Oxidação e Fermentação.  Resultado: Adequado Desenvolvimento microbiológico M. osloensis ATCC 10973. Especificação: Inalterado. Resultado: Adequado'
        },
        'PA60 - Agar Sabouraud Com Cloranfenicol cx c/ 10 tubos - PA - MC em tubos': {
            aspecto: 'pH final. Especificação: 5,6 ± 0,2.  Resultado: Adequado Aspecto final. Especificação: Meio sólido âmbar claro, ligeiramente opalescente. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico C. albicans ATCC 10231. Especificação: Crescimento bom a excelente de colônias brancas cremosas. Resultado: Adequado Desempenho microbiológico E. coli ATCC 25922. Especificação: Crescimento inibido.  Resultado: Adequado Desempenho microbiológico A. niger ATCC 16404.  Especificação: Crescimento bom a excelente de colônias cotonosas. Resultado: Adequado'
        },
        'PA61 - Agar Sabouraud Dextrose cx c/ 08 tubos - PA - MC em tubos': {
            aspecto: 'pH final. Especificação: 5,6 ± 0,2. Resultado: Adequado Aspecto final. Especificação: Meio âmbar claro, ligeiramente opalescente. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico C. albicans ATCC 10231. Especificação: Crescimento bom a excelente de colônias brancas. Resultado: Adequado Desempenho microbiológico A. niger ATCC 16404. Especificação: Crescimento bom a excelente de colônias negras com  contorno amarelado. Resultado: Adequado'
        },
        'PA63 - Agar Thayer Martin cx c/ 08 tubos - PA - MC em tubos': {
            aspecto: 'pH  antes da adição do sangue. Especificação: 7,3 ± 0,1. Resultado: Adequado Aspecto final. Especificação: Meio castanho opalescente. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico N. meningitidis ATCC 13090. Especificação: Crescimento moderado a bom de colônias pequenas translúcidas. Resultado: Adequado Desempenho microbiológico S. epidermidis ATCC 12228. Especificação: Crescimento acentuadamente inibido. Resultado: Adequado Desempenho microbiológico E. coli ATCC 25922. Especificação: Crescimento acentuadamente inibido. Resultado: Adequado Desempenho microbiológico C. albicans ATCC 10231.  Especificação: Crescimento acentuadamente inibido. Resultado: Adequado'
        },
        'PA64 - Agar TSA cx c/ 10 tubos - PA - MC em tubos': {
            aspecto: 'pH final. Especificação: 7,3 ± 0,2. Resultado: Adequado Aspecto final.  Especificação: Meio bege claro translúcido. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico E. coli ATCC 25922.  Especificação: Crescimento bom a excelente. Resultado: Adequado Desempenho microbiológico S. pyogenes ATCC 19615. Especificação: Crescimento bom a excelente. Resultado: Adequado'
        },
        'PA65 - Agar TSI cx c/ 10 tubos - PA - MC em tubos': {
            aspecto: 'pH final. Especificação: 7,4 ± 0,2. Resultado: Adequado Aspecto final. Especificação: Meio laranja-avermelhado, ligeiramente opalescente. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico E. coli ATCC 25922.  Especificação: Base Ácida; Ápice Ácido; GÁS +; H2S -. Resultado: Adequado Desempenho microbiológico P. aeruginosa ATCC 27853. Especificação: Base Alcalina; Ápice Alcalino; GÁS -; H2S -.Resultado: Adequado Desempenho microbiológico S. typhimurium ATCC 14028. Especificação: Base Ácida; Ápice Alcalino; GÁS +; H2S +.  Resultado: Adequado Desempenho microbiológico S. flexneri ATCC 12022.  Especificação: Base Ácida; Ápice Alcalino; GÁS -; H2S -. Resultado: Adequado'
        },
        'PA66 - Agar Ureia cx c/ 10 tubos - PA - MC em tubos': {
            aspecto: 'pH final. Especificação: 6,8 ± 0,2. Resultado: Adequado Aspecto final. Especificação: Meio alaranjado claro translúcido. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico E. coli ATCC 25922. Especificação: Uréia - (inalterado). Resultado: Adequado Desempenho microbiológico K. pneumoniae ATCC 13883. Especificação: Uréia + (inalterado).  Resultado: Adequado '
        },
        'PA67 - Caldo Arginina cx c/ 10 tubos - PA - MC em tubos': {
            aspecto: 'pH final. Especificação: 6,0 ± 0,2. Resultado: Adequado Aspecto final. Especificação: Meio púrpura translúcido. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico K. pneumoniae ATCC 13883. Especificação: - (coloração amarela). Resultado: Adequado Desempenho microbiológico  E. cloacae ATCC 13047 -  Especificação: + (coloração púrpura).  Resultado: Adequado '
        },
        'PA68 - Caldo BHI cx c/ 10 tubos - PA - MC em tubos': {
            aspecto: 'pH final. Especificação: 7,4 ± 0,2. Resultado: Adequado Aspecto final. Especificação: Meio âmbar claro translúcido. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico N. meningitidis ATCC 13090. Especificação: Crescimento bom a excelente. Resultado: Adequado Desempenho microbiológico S. pneumoniae ATCC 49619. Especificação: Crescimento bom a excelente. Resultado: Adequado Desempenho microbiológico S. pyogenes ATCC 19615. Especificação: Crescimento bom a excelente. Resultado: AdequadoDesempenho microbiológico P. aeruginosa ATCC 27853 -  Especificação: Crescimento bom a excelente com pigmento fluorescente   Resultado: Adequado Desempenho microbiológico E. coli ATCC 25922 -  Especificação: Crescimento inibido   Resultado: Adequado Desempenho microbiológico S. maltophilia ATCC 13637 -  Especificação: Crescimento inibido   Resultado: Adequado '
        },
        'PA69 - Caldo GBS (Todd Hewitt) cx c/ 10 tubos - PA - MC em tubos': {
            aspecto: 'pH final. Especificação: 7,8 ± 0,2. Resultado: Adequado Aspecto final. Especificação: Meio âmbar claro translúcido. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico S. agalactiae ATCC 12386. Especificação: Crescimento bom a excelente. Resultado: Adequado Desempenho microbiológico E. coli ATCC 25922. Especificação: Crescimento inibido. Resultado: Adequado '
        },
        'PA70 - Caldo Glicosado cx c/ 10 tubos - PA - MC em tubos': {
            aspecto: 'pH final. Especificação: 7,3 ± 0,2. Resultado: Adequado Aspecto final.  Especificação: Meio âmbar claro translúcido. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico S. pyogenes ATCC 19615 (inóculo padronizado a 10.000 UFC/mL). Especificação: Crescimento bom a excelente. Resultado: Adequado Desempenho microbiológico E. coli ATCC 25922 (inóculo padronizado a 10.000 UFC/mL).  Especificação: Crescimento bom a excelente. Resultado: Adequado '
        },
        'PA71 - Caldo GN cx c/ 10 tubos - PA - MC em tubos': {
            aspecto: 'pH final. Especificação: 7,0 ± 0,2. Resultado: Adequado Aspecto final. Especificação: Meio âmbar claro translúcido. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico S. typhimurium ATCC 14028. Especificação: Crescimento bom a excelente no subcultivo. Resultado: Adequado Desempenho microbiológico E. coli ATCC 25922. Especificação: Crescimento bom a excelente no subcultivo. Resultado: Adequado Desempenho microbiológico S. flexneri ATCC 12022. Especificação: Crescimento bom a excelente no subcultivo. Resultado: Adequado '
        },
        'PA72 - Caldo Letheen cx c/ 08 tubos - PA - MC em tubos': {
            aspecto: 'pH final. Especificação: 7,2 ± 0,2. Resultado: Adequado Aspecto final. Especificação: Caldo âmbar claro translúcido. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico E. coli ATCC 8739. Especificação:  Crescimento bom a excelente. Resultado: Adequado Desempenho microbiológico S. aureus ATCC 6538. Especificação: Crescimento bom a excelente. Resultado: Adequado '
        },
        'PA73 - Caldo Lisina cx c/ 10 tubos - PA - MC em tubos': {
            aspecto: 'pH final. Especificação:  6,0 ± 0,2.  Resultado: Adequado Aspecto final. Especificação: Meio púrpura translúcido. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico S. flexneri ATCC 12022. Especificação: - (coloração amarela).  Resultado: Adequado Desempenho microbiológico S. typhimurium ATCC 14028. Especificação: + (coloração púrpura). Resultado: Adequado '
        },
        'PA74 - Caldo Malonato cx c/ 10 tubos - PA - MC em tubos': {
            aspecto: 'pH final. Especificação: 6,7 ± 0,2. Resultado: Adequado Aspecto final. Especificação: Meio verde translúcido. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico K. pneumoniae ATCC 13883. Especificação: + (coloração azul). Resultado: Adequado Desempenho microbiológico E. coli ATCC 25922. Especificação: - (coloração amarela ou verde). Resultado: Adequado Esterilidade. Especificação: Ausência de crescimento. Resultado: Adequado'
        },
        'PA75 - Caldo MR-VP cx c/ 10 tubos - Sob encomenda - PA - MC em tubos': {
            aspecto: 'pH final. Especificação: 6,9 ± 0,2. Resultado: Adequado Aspecto final. Especificação: Meio âmbar claro translúcido. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico E. aerogenes ATCC 13048. Especificação: MR -; VP +.  Resultado: Adequado Desempenho microbiológico E. coli ATCC 25922 -  Especificação: MR +; VP -. Resultado: Adequado '
        },
        'PA76 - Caldo MTS cx c/ 10 tubos - PA - MC em tubos': {
            aspecto: 'pH final. Especificação: 7,3 ± 0,2. Resultado: Adequado Aspecto final. Especificação: Meio púrpura translúcido. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico E. faecalis ATCC 29212. Especificação: Crescimento com mudança de coloração do meio para amarelo. Resultado: Adequado Desempenho microbiológico S. viridans CEPA Selvagem. Especificação: Crescimento ausente, sem mudança de coloração. Resultado: Adequado '
        },
        'PA77 - Caldo Mueller Hinton cx c/ 10 tubos - PA - MC em tubos': {
            aspecto: 'pH final. Especificação: 7,3 ± 0,1. Resultado: Adequado Aspecto final. Especificação: Meio bege claro translúcido. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico S. pyogenes ATCC 19615. Especificação: Crescimento bom a excelente. Resultado: Adequado Desempenho microbiológico N. meningitidis ATCC 13090.  Especificação: Crescimento bom a excelente. Resultado: Adequado '
        },
        'PA78 - Caldo Ornitina cx c/ 10 tubos - PA - MC em tubos': {
            aspecto: 'pH final. Especificação: 6,0 ± 0,2.  Resultado: Adequado Aspecto final. Especificação: Meio púrpura translúcido. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico K. pneumoniae ATCC 13883. Especificação: - (coloração amarela). Resultado: Adequado Desempenho microbiológico E. cloacae ATCC 13047. Especificação: + (coloração púrpura).  Resultado: Adequado '
        },
        'PA79 - Caldo Purpura de Bromocresol cx c/ 10 tubos - Sob encomenda - PA - MC em tubos': {
            aspecto: 'pH final. Especificação: 6,8 ± 0,2. Resultado: Adequado Aspecto final. Especificação: Meio púrpura translúcido. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico E. coli ATCC 25922. Especificação: + (coloração amarela). Resultado: Adequado Desempenho microbiológico P. mirabilis ATCC 25933. Especificação: - (coloração púrpura). Resultado: Adequado'
        },
        'PA80 - Caldo Rhamnose cx c/ 10 tubos - PA - MC em tubos': {
            aspecto: 'pH final. Especificação: 6,8 ± 0,2. Resultado: Adequado Aspecto final. Especificação: Meio verde claro translúcido. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico S. flexneri ATCC 12022. Especificação: - (coloração verde). Resultado: Adequado Desempenho microbiológico K. pneumoniae ATCC 13883. Especificação: + (coloração amarela). Resultado: Adequado'
        },
        'PA81 - Caldo Selenito cx c/ 10 tubos - PA - MC em tubos': {
            aspecto: 'pH final. Especificação: 7,0 ± 0,2. Resultado: Adequado Aspecto final. Especificação: Meio âmbar claro translúcido. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico E. coli ATCC 25922.  Especificação: Crescimento fraco (inibido) de colônias vermelhas com precipitado de bile, após subcultivo em ágar Mac Conkey. Resultado: Adequado Desempenho microbiológico S. typhimurium ATCC 14028. Especificação: Crescimento bom a excelente de colônias incolores, após subcultivo em ágar Mac Conkey. Resultado: Adequado'
        },
        'PA82 - Caldo Tetrationato cx c/ 10 tubos - PA - MC em tubos': {
            aspecto: 'pH final. Especificação: 8,4 ± 0,2. Resultado: Adequado Aspecto final. Especificação: Meio incolor a levemente amarelado translúcido, com pptado branco denso no fundo. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico E. coli ATCC 25922. Especificação: Crescimento fraco (inibido) de colônias vermelhas com precipitado de bile, após subcultivo em ágar Mac Conkey. Resultado: Adequado Desempenho microbiológico S. typhimurium ATCC 14028. Especificação: Crescimento bom a excelente de colônias incolores, após subcultivo em ágar Mac Conkey. Resultado: Adequado'
        },
        'PA83 - Caldo Tioglicolato cx c/ 10 tubos - PA - MC em tubos': {
            aspecto: 'pH final. Especificação: 7,1 ± 0,2. Resultado: Adequado Aspecto final. Especificação: Meio levemente amarelado, translúcido com uma camada superior rosa de aproximadamente 10 mm. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico B. fragilis ATCC 25285. Especificação: Crescimento bom a excelente. Resultado: Adequado Desempenho microbiológico S. aureus ATCC 25923. Especificação: Crescimento bom a excelente. Resultado: Adequado'
        },
        'PA84 - Caldo Tioglicolato sem Indicador cx c/ 10 tubos - PA - MC em tubos': {
            aspecto: 'pH final. Especificação: 7,1 ± 0,2. Resultado: Adequado Aspecto final. Especificação: Meio levemente amarelado, translúcido. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico B. fragilis ATCC 25285. Especificação: Crescimento bom a excelente. Resultado: Adequado Desempenho microbiológico S. aureus ATCC 25923. Especificação: Crescimento bom a excelente. Resultado: Adequado '
        },
        'PA85 - Caldo TSB cx c/ 10 tubos - PA - MC em tubos': {
            aspecto: 'pH final. Especificação: 7,3 ± 0,2. Resultado: Adequado Aspecto final. Especificação: Meio âmbar claro translúcido a âmbar escuro. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico Aspergillus brasiliensis ATCC 16404 ou similar. Especificação: Crescimento bom a excelente.  Resultado: Adequado Desempenho microbiológico Bacillus subtilis ATCC 6633 ou similar. Especificação: Crescimento bom a excelente. Resultado: Adequado Desempenho microbiológico Candida albicans ATCC 10231 ou similar. Especificação: Crescimento bom a excelente. Resultado: Adequado'
        },
        'PA86 - Caldo Ureia cx c/ 10 tubos - PA - MC em tubos': {
            aspecto: 'pH final. Especificação: 6,8 ± 0,2. Resultado: Adequado Aspecto final. Especificação: Meio alaranjado claro translúcido. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico E. coli ATCC 25922. Especificação: Uréia - (inalterado). Resultado: Adequado Desempenho microbiológico K. pneumoniae ATCC 13883. Especificação: Uréia + (inalterado).  Resultado: Adequado'
        },
        'PA87 - Caldo Bile 2% Verde Brilhante 4% cx c/ 10 tubos - PA - MC em tubos': {
            aspecto: 'pH final. Especificação: 7,4 ± 0,2. Resultado: Adequado Aspecto final. Especificação: Meio verde brilhante translúcido. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico E. aerogenes ATCC 13048 Especificação: Crescimento bom a excelente com produção de gás.  Resultado: Adequado Desempenho microbiológico E. coli ATCC 25922  Especificação: Crescimento bom a excelente com produção de gás. Resultado: Adequado Desempenho microbiológico S. aureus ATCC 25923 I Especificação: Crescimento inibido. Resultado: Adequado Desempenho microbiológico E. faecalis ATCC 29212 Especificação: Crescimento inibido. Resultado: Adequado'
        },
        'PA88 - Cloreto de Sodio 0,85% Estéril cx c/ 10 tubos - PA - MC em tubos': {
            aspecto: 'Concentração. Especificação: 0,85 g em 100 mL de água ±  0,05 g. Resultado: Adequado Aspecto final. Especificação: Líquido cristalino e homogêneo.  Resultado: Adequado Provas de identificação e Impurezas. Especificação: Conforme Farmacopéia Brasileira II págs. 247 e 248. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico S. aureus ATCC 25923. Especificação: Crescimento bom a excelente no subcultivo. Resultado: Adequado Desempenho microbiológico S. epidermidis ATCC 12228. Especificação: Crescimento bom a excelente no subcultivo. Resultado: Adequado Desempenho microbiológico S. pyogenes ATCC 19615.  Especificação: Crescimento bom a excelente no subcultivo. Resultado: Adequado'
        },
        'PA89 - Gel de Urease cx c/ 50 tubos - PA - MC em tubos': {
            aspecto: 'pH. Especificação: 6,6 ± 0,2. Resultado: Adequado Aspecto final.  Especificação: Gel amarelo-alaranjado, opalescente e sem precipitados. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico E. coli ATCC 25922. Especificação: Urease – (gel inalterado). Resultado: Adequado Desempenho microbiológico M. morganii IAL 417. Especificação: Urease + (gel rosa pink). Resultado: Adequado'
        },
        'PA90 - Meio de EPM com Ureia cx c/ 10 tubos - PA - MC em tubos': {
            aspecto: 'pH final. Especificação: 7,4 ± 0,2. Resultado: Adequado Aspecto final.  Especificação: Meio verde escuro translúcido, ligeiramente opalescente. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico P. vulgaris ATCC 13315. Especificação: LTD +; Glicose +; Gás +; H2S +; URE +.  Resultado: Adequado Desempenho microbiológico  E. coli ATCC 25922. Especificação: LTD -; Glicose +; Gás +; H2S -; URE -. Resultado: Adequado Desempenho microbiológico  P. aeruginosa ATCC 27853.  Especificação: LTD -; Glicose -; Gás -; H2S -; URE -.  Resultado: Adequado Desempenho microbiológico  S. typhimurium ATCC 14028.  Especificação: LTD -; Glicose +; Gás +; H2S +; URE -.  Resultado: Adequado '
        },
        'PA91 - Meio de Lowenstein cx c/ 08 tubos - PA - MC em tubos': {
            aspecto: 'Aspecto final. Especificação: Meio verde-claro opalescente. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico M. tuberculosis H37Rv (ATCC 27294) ou similar.  Especificação: Crescimento bom a excelente de colônias granulares, foscas, secas e friáveis. Resultado: Adequado Esterilidade. '
        },
        'PA92 - Meio de MILI cx c/ 10 tubos - PA - MC em tubos': {
            aspecto: 'pH final. Especificação: 6,6 ± 0,2. Resultado: Adequado Aspecto final. Especificação: Meio púrpura translúcido, ligeiramente opalescente. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico S. flexneri ATCC 12022.  Especificação: MOT -; LIS -; IND -. Resultado: Adequado Desempenho microbiológico E. coli ATCC 25922.  Especificação:  MOT +; LIS +; IND +.   Resultado: Adequado '
        },
        'PA93 - Meio de MIO cx c/ 10 tubos - PA - MC em tubos': {
            aspecto: 'pH final. Especificação: 6,5 ± 0,2. Resultado: Adequado Aspecto final. Especificação: Meio púrpura translúcido, ligeiramente opalescente. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico S. flexneri ATCC 12022. Especificação:  MOT -; LIS -; ORN -. Resultado: Adequado Desempenho microbiológico E. coli ATCC 25922.  Especificação: MOT +; LIS +; ORN +. Resultado: Adequado '
        },
        'PA94 - Meio de Ogawa Kudoh cx c/ 10 tubos - PA - MC em tubos': {
            aspecto: 'Aspecto final. Especificação: Meio verde-claro opalescente. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico M. tuberculosis H37Rv (ATCC 27294) ou similar. Especificação: Crescimento bom a excelente de colônias granulares, foscas, secas e friáveis. Resultado: Adequado '
        },
        'PA95 - Meio de Stuart cx c/ 10 tubos - PA - MC em tubos': {
            aspecto: 'pH final. Especificação: 7,3 ± 0,2. Resultado: Adequado Aspecto final. Especificação: Meio semi sólido, levemente opalescente. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico S. pyogenes ATCC 19615.  Especificação: Crescimento no subcultivo. Resultado: Adequado Desempenho microbiológico S. pneumoniae ATCC 49619.  Especificação: Crescimento no subcultivo. Resultado: Adequado Desempenho microbiológico E. coli ATCC 25922. Especificação: Crescimento no subcultivo. Resultado: Adequado '
        },
        'PA96 - Meio SIM cx c/ 10 tubos - PA - MC em tubos': {
            aspecto: 'pH final. Especificação: 7,3 ± 0,2. Resultado: Adequado Aspecto final.  Especificação: Meio âmbar médio,  opalescente, sem precipitados. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desenvolvimento microbiológico S. flexneri ATCC 12022. Especificação:  MOT -; IND -; H2S -. Resultado: Adequado Desenvolvimento microbiológico E. coli ATCC 25922. Especificação: MOT +; IND +; H2S -. Resultado: Adequado Desenvolvimento microbiológico S. typhimurium ATCC 14028. Especificação: MOT +; IND -; H2S +. Resultado: Adequado '
        },
        'PA386 - Caldo Bile 2% Verde Brilhante 5% sachê c/ 10 tubos - Sob encomenda - PA - MC em tubos': {
            aspecto: 'pH final. Especificação: 7,4 ± 0,2. Resultado: Adequado Aspecto final. Especificação: Meio verde brilhante translúcido. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico E. aerogenes ATCC 13048 Inóculo ~ 1000 UFC. Especificação: Crescimento bom a excelente com produção de gás.  Resultado: Adequado Desempenho microbiológico E. coli ATCC 25922 Inóculo ~ 1000 UFC. Especificação: Crescimento bom a excelente com produção de gás. Resultado: Adequado Desempenho microbiológico S. aureus ATCC 25923 Inóculo ~ 1000 UFC. Especificação: Crescimento inibido. Resultado: Adequado Desempenho microbiológico E. faecalis ATCC 29212 Inóculo ~ 1000 UFC. Especificação: Crescimento inibido. Resultado: Adequado'
        },
        'PA374 - Caldo Tioglicolato caixa c/ 10 tubos - 9mL - Sob encomenda - PA - MC em tubos': {
            aspecto: 'pH final. Especificação: 7,1 ± 0,2. Resultado: Adequado Aspecto final. Especificação: Meio levemente amarelado, translúcido com uma camada superior rosa de aproximadamente 10 mm. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico B. fragilis ATCC 25285. Especificação: Crescimento bom a excelente. Resultado: Adequado Desempenho microbiológico S. aureus ATCC 25923. Especificação: Crescimento bom a excelente. Resultado: Adequado'
        },
        'PA375 - Caldo TSB caixa c/ 10 tubos - 9mL - PA - MC em tubos': {
            aspecto: 'pH final. Especificação: 7,3 ± 0,2. Resultado: Adequado Aspecto final. Especificação:Meio âmbar claro translúcido a âmbar escuro. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico Aspergillus brasiliensis ATCC 16404 ou similar. Especificação: Crescimento bom a excelente. Resultado: Adequado Desempenho microbiológico Bacillus subtilis ATCC 6633 ou similar. Especificação: Crescimento bom a excelente. Resultado: Adequado Desempenho microbiológico Candida albicans ATCC 10231 ou similar. Especificação: Crescimento bom a excelente. Resultado: Adequado '
        },
        'PA352 - FLM blister c/ 5 flaconetes - PA - MC em tubos': {
            aspecto: 'Aspecto do FLM. Especificação: Pó fino creme a amarelo homogêneo. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho Microbiológico P. aeruginosa ATCC 27853. Especificação: Turvação sem fluorescência e indol negativo. Resultado: Adequado Desempenho Microbiológico K. pneumoniae ATCC 13883. Especificação: Turvação verde azulada sem fluorescência e indol negativo. Resultado: Adequado Desempenho Microbiológico E. coli ATCC 25922. Especificação: Turvação verde azulada com fluorescência e indol positivo. Resultado: Adequado'
        },
        'PA402 - Caldo Tioglicolato sem Indicador cx c/ 10 tubos - 9 mL - Sob encomenda - PA - MC em tubos': {
            aspecto: 'pH final. Especificação: 7,1 ± 0,2. Resultado: Adequado Aspecto final. Especificação: Meio levemente amarelado, translúcido. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico B. fragilis ATCC 25285. Especificação: Crescimento bom a excelente. Resultado: Adequado Desempenho microbiológico S. aureus ATCC 25923. Especificação: Crescimento bom a excelente. Resultado: Adequado '
        },
        'PA353 - Cloreto de sódio 0,85% estéril sachê c/ 10 tubos - PA - Meios de transp': {
            aspecto: 'Concentração. Especificação: 0,85 g em 100 mL de água ±  0,05 g. Resultado: Adequado Aspecto final. Especificação: Líquido cristalino e homogêneo. Resultado: Adequado Provas de identificação e Impurezas. Especificação: Conforme Farmacopéia Brasileira II págs. 247 e 248. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico S. aureus ATCC 25923. Especificação: Crescimento bom a excelente no subcultivo. Resultado: Adequado Desempenho microbiológico S. epidermidis ATCC 12228. Especificação: Crescimento bom a excelente no subcultivo. Resultado: Adequado Desempenho microbiológico S. pyogenes ATCC 19615. Especificação: Crescimento bom a excelente no subcultivo. Resultado: Adequado '
        },
        'PA354 - Cloreto de sódio 0,85% + Swab sachê c/ 10 tubos (20 swabs) - Sob encomenda - PA - Meios de transp': {
            aspecto: 'Concentração. Especificação: 0,85 g em 100 mL de água ±  0,05 g. Resultado: Adequado Aspecto final. Especificação: Líquido cristalino e homogêneo. Resultado: Adequado Provas de identificação e Impurezas. Especificação: Conforme Farmacopéia Brasileira II págs. 247 e 248. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico S. aureus ATCC 25923. Especificação: Crescimento bom a excelente no subcultivo. Resultado: Adequado Desempenho microbiológico S. epidermidis ATCC 12228. Especificação: Crescimento bom a excelente no subcultivo. Resultado: Adequado Desempenho microbiológico S. pyogenes ATCC 19615.  Especificação: Crescimento bom a excelente no subcultivo. Resultado: Adequado '
        },
        'PA355 - VTM (Seg. CDC) sachê c/ 10 tubos - Sob encomenda - PA - Meios de transp': {
            aspecto: 'Aspecto final. Especificação: Límpido com ausência de partículas macroscópicas suspensas. Resultado: Adequado Coloração. Especificação: Incolor.  Resultado: Adequado pH final. Especificação: 7,4 ± 0,5.  Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Esterilidade. Especificação: Ausência de crescimento. Resultado: Adequado.  Desempenho. Especifciação: Manutenção da viabilidade do vírus SARS-COV-2 por 48 horas em temperatura ambiente (10 a 30º C) e refrigerado (2 a 8º C). Resultado: Adequado.'
        },
        'PI115 - VTM (Seg CDC) - avulso - Termolábel - PI': {
            aspecto: 'Aspecto final. Especificação: Límpido com ausência de partículas macroscópicas suspensas. Resultado: Adequado Coloração. Especificação: Incolor.  Resultado: Adequado pH final. Especificação: 7,4 ± 0,5.  Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Esterilidade. Especificação: Ausência de crescimento. Resultado: Adequado.  Desempenho. Especifciação: Manutenção da viabilidade do vírus SARS-COV-2 por 48 horas em temperatura ambiente (10 a 30º C) e refrigerado (2 a 8º C). Resultado: Adequado.'
        },
        'PA356 - VTM (Seg CDC) + Swab sachê c/ 10 tubos (20 swabs) - Sob encomenda - PA - Meios de transp': {
            aspecto: 'Aspecto final. Especificação: Límpido com ausência de partículas macroscópicas suspensas. Resultado: Adequado Coloração. Especificação: Incolor. Resultado: Adequado pH final. Especifciação: 7,4 ± 0,5. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Esterilidade. Especificação: Ausência de crescimento. Resultado: Adequado Desempenho. Especificação: Manutenção da viabilidade do vírus SARS-COV-2 por 48 horas em temperatura ambiente (10 a 30º C) e refrigerado (2 a 8º C).  Resultado: Adequado'
        },
        'PA365 - VTM + Swab sachê c/ 10 tubos (20 swabs) - Sob encomenda - PA - Meios de transp': {
            aspecto: 'Aspecto final. Especificação: Límpido com ausência de partículas macroscópicas suspensas. Resultado: Adequado Coloração. Especificação: Vermelho. Resultado: Adequado Coloração (congelado).  Especificação: Amarelo. Resultado: Adequado pH final.  Especificação: 7,3 ± 0,1. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Esterilidade. Especificação: Ausência de crescimento. Resultado: Adequado Desempenho.  Especificação: Manutenção da viabilidade do vírus SARS-COV-2 por 48 horas em temperatura ambiente (10 a 30º C) e refrigerado (2 a 8º C). Resultado: Adequado'
        },
        'PA368 - VTM caixa c/ 50 tubos - Sob encomenda - PA - Meios de transp': {
            aspecto: 'Aspecto final. Especificação: Límpido com ausência de partículas macroscópicas suspensas. Resultado: Adequado Coloração. Especificação: Vermelho. Resultado: Adequado Coloração (congelado).  Especificação: Amarelo. Resultado: Adequado pH final.  Especificação: 7,3 ± 0,1. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Esterilidade. Especificação: Ausência de crescimento. Resultado: Adequado Desempenho.  Especificação: Manutenção da viabilidade do vírus SARS-COV-2 por 48 horas em temperatura ambiente (10 a 30º C) e refrigerado (2 a 8º C). Resultado: Adequado'
        },
        'PA369 - VTM caixa c/ 100 tubos - Sob encomenda - PA - Meios de transp': {
            aspecto: 'Aspecto final. Especificação: Límpido com ausência de partículas macroscópicas suspensas. Resultado: Adequado Coloração. Especificação: Vermelho. Resultado: Adequado Coloração (congelado). Especificação: Amarelo. Resultado: Adequado pH final. Especificação: 7,3 ± 0,1. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Esterilidade. Especificação: Ausência de crescimento. Resultado: Adequado Desempenho.  Especificação: Manutenção da viabilidade do vírus SARS-COV-2 por 48 horas em temperatura ambiente (10 a 30º C) e refrigerado (2 a 8º C). Resultado: Adequado'
        },
        'PA363 - VTM sachê c/ 10 tubos - Sob encomenda - PA - Meios de transp': {
            aspecto: 'Aspecto final. Especificação: Límpido com ausência de partículas macroscópicas suspensas. Resultado: Adequado. Coloração. Especificação: Vermelho. Resultado: Adequado. Coloração (congelado). Especificação: Amarelo. Resultado: Adequado. pH final.  Especificação: 7,3 ± 0,1.  Resultado: Adequado.',
            bacteriana: 'conforme',
            infoText1: 'Esterilidade. Especificação: Ausência de crescimento. Resultado: Adequado Desempenho. Especificação: Manutenção da viabilidade do vírus SARS-COV-2 por 48 horas em temperatura ambiente (10 a 30º C) e refrigerado (2 a 8º C). Resultado: Adequado'
        },
        'PI114 - VTM - avulso - Termolábel - PI': {
            aspecto: 'Aspecto final. Especificação: Límpido com ausência de partículas macroscópicas suspensas. Resultado: Adequado. Coloração. Especificação: Vermelho. Resultado: Adequado. Coloração (congelado). Especificação: Amarelo. Resultado: Adequado. pH final.  Especificação: 7,3 ± 0,1.  Resultado: Adequado.',
            bacteriana: 'conforme',
            infoText1: 'Esterilidade. Especificação: Ausência de crescimento. Resultado: Adequado Desempenho. Especificação: Manutenção da viabilidade do vírus SARS-COV-2 por 48 horas em temperatura ambiente (10 a 30º C) e refrigerado (2 a 8º C). Resultado: Adequado'
        },
        'PA382 - Meio de Stuart + Swab sachês c/ 10 tubos (10 Swab) - Sob encomenda - PA - Meios de transp': {
            aspecto: 'pH final. Especificação: 7,3 ± 0,2. Resultado: Adequado Aspecto final. Especificação: Meio semi sólido, levemente opalescente. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico S. pyogenes ATCC 19615. Especificação: Crescimento no subcultivo. Resultado: Adequado Desempenho microbiológico S. pneumoniae ATCC 49619. Especificação: Crescimento no subcultivo. Resultado: Adequado Desempenho microbiológico E. coli ATCC 25922. Especificação: Crescimento no subcultivo   Resultado: Adequado '
        },
        'PA376 - Meio de Stuart sachê c/ 10 tubos - Sob encomenda - PA - Meios de transp': {
            aspecto: 'pH final. Especificação: 7,3 ± 0,2. Resultado: Adequado Aspecto final. Especificação: Meio semi sólido, levemente opalescente. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico S. pyogenes ATCC 19615. Especificação: Crescimento no subcultivo. Resultado: Adequado Desempenho microbiológico N. meningitidis ATCC 13090. Especificação: Crescimento no subcultivo. Resultado: Adequado Desempenho microbiológico E. coli ATCC 25922. Especificação: Crescimento no subcultivo. Resultado: Adequado '
        },
        'PA161 - Transprov V (Glicerina Tamponada + Coletor) cx c/ 12 frascos - PA - Meios de transp': {
            aspecto: 'Aspecto final - Especificação: Meio líquido incolor levemente opalescente. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico S. flexneri ATCC 12022 -  Especificação: Crescimento no subcultivo. Resultado: Adequado Desempenho microbiológico S. typhimurium ATCC 14028  -  Especificação: Crescimento no subcultivo.   Resultado: Adequado'
        },
        'PA407 - VTM sachê c/ 10 tubos falcon - Sob encomenda - PA - Meios de transp': {
            aspecto: 'Aspecto final. Especificação: Límpido com ausência de partículas macroscópicas suspensas. Resultado: Adequado. Coloração. Especificação: Vermelho. Resultado: Adequado. Coloração (congelado). Especificação: Amarelo. Resultado: Adequado. pH final.  Especificação: 7,3 ± 0,1.  Resultado: Adequado.',
            bacteriana: 'conforme',
            infoText1: 'Esterilidade. Especificação: Ausência de crescimento. Resultado: Adequado Desempenho. Especificação: Manutenção da viabilidade do vírus SARS-COV-2 por 48 horas em temperatura ambiente (10 a 30º C) e refrigerado (2 a 8º C). Resultado: Adequado'
        },
        'PI138 - VTM - avulso - Tubo Falcon - Termolábel - PA - Meios de transp': {
            aspecto: 'Aspecto final. Especificação: Límpido com ausência de partículas macroscópicas suspensas. Resultado: Adequado. Coloração. Especificação: Vermelho. Resultado: Adequado. Coloração (congelado). Especificação: Amarelo. Resultado: Adequado. pH final.  Especificação: 7,3 ± 0,1.  Resultado: Adequado.',
            bacteriana: 'conforme',
            infoText1: 'Esterilidade. Especificação: Ausência de crescimento. Resultado: Adequado Desempenho. Especificação: Manutenção da viabilidade do vírus SARS-COV-2 por 48 horas em temperatura ambiente (10 a 30º C) e refrigerado (2 a 8º C). Resultado: Adequado'
        },
        'PA115 - Kit EPM - MILI c/ 25 testes - PA - Kit ident Bacter': {
            aspecto: 'pH final - EPM: Especificação:  7,3 ± 0,1 - Resultado: Adequado pH final - MILI: Especificação:  6,6 ± 0,2 - Resultado: Adequado pH final - Reativo de Kovacs: Especificação: não aplicável - Resultado:  não aplicável Aspecto final - EPM:  Especificação: meio verde-escuro translúcido ligeiramente opalescente - Resultado: Adequado Aspecto final - MILI:  Especificação: meio púrpura translúcido ligeiramente opalescente - Resultado: Adequado Aspecto final - Reativo de Kovacs: Especificação: Líquido amarelo brilhante e translúcido - Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'EPM: Especificação: P. vulgaris ATCC 13315 LTD +; Glicose +; Gás +; H2S +  Resultado: Adequado EPM: Especificação: E. coli ATCC 25922 LTD -; Glicose +; Gás +; H2S -  Resultado: Adequado EPM: Especificação: P. aeruginosa ATCC 27853 LTD -; Glicose -; Gás -; H2S -  Resultado: Adequado EPM: Especificação: S. flexneri ATCC 12022 LTD -; Glicose +; Gás -; H2S - Resultado: Adequado EPM: Especificação: S. typhimurium ATCC 14028 LTD -; Glicose +; Gás +; H2S + Resultado: Adequado MILI:  Especificação: E. coli ATCC 25922 Motilidade +; Indol +; Ornitina + Resultado: Adequado MILI:  Especificação: S. flexneri ATCC 12022 Motilidade -; Indol -; Ornitina - Resultado: Adequado Reativo de Kovacs:  Especificação: S. flexneri ATCC 12022 (inoculado em meio de MILi) MOT -; IND -; LIS - Resultado: Adequado Reativo de Kovacs:  Especificação: E. coli ATCC 25922 (inoculado em meio de MILi) MOT +; IND +; LIS + Resultado: Adequado Esterilidade - Especificação: Ausência de crescimento Resultado: Adequado'
        },
        'PI61 - Meio EPM com uréia - avulso - PI': {
            aspecto: 'pH final - EPM: Especificação:  7,3 ± 0,1 - Resultado: Adequado Aspecto final - EPM:  Especificação: meio verde-escuro translúcido ligeiramente opalescente - Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'EPM: Especificação: P. vulgaris ATCC 13315 LTD +; Glicose +; Gás +; H2S +. Resultado: Adequado EPM: Especificação: E. coli ATCC 25922 LTD -; Glicose +; Gás +; H2S -.  Resultado: Adequado EPM: Especificação: P. aeruginosa ATCC 27853 LTD -; Glicose -; Gás -; H2S -.  Resultado: Adequado EPM: Especificação: S. flexneri ATCC 12022 LTD -; Glicose +; Gás -; H2S -. Resultado: Adequado EPM: Especificação: S. typhimurium ATCC 14028 LTD -; Glicose +; Gás +; H2S +. Resultado: Adequado MILI:  Especificação: E. coli ATCC 25922 Motilidade +; Indol +; Ornitina +. Resultado: Adequado MILI:  Especificação: S. flexneri ATCC 12022 Motilidade -; Indol -; Ornitina -. Resultado: Adequado '
        },
        'PI62 - Meio de MILi - avulso - PI': {
            aspecto: 'pH final - MILI: Especificação:  6,6 ± 0,2 - Resultado: Adequado Aspecto final - MILI:  Especificação: meio púrpura translúcido ligeiramente opalescente - Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'MILI:  Especificação: E. coli ATCC 25922 Motilidade +; Indol +; Ornitina +. Resultado: Adequado MILI:  Especificação: S. flexneri ATCC 12022 Motilidade -; Indol -; Ornitina -. Resultado: Adequado'
        },
        'PA116 - Kit EPM-MILI-Citrato c/16 testes - PA - Kit ident Bacter': {
            aspecto: 'pH final - EPM: Especificação:  7,3 ± 0,1 - Resultado: Adequado pH final - MILI: Especificação:  6,6 ± 0,2 - Resultado: Adequado pH final - Citrato: Especificação:  6,9 ± 0,2 - Resultado: Adequado pH final - Reativo de Kovacs: Especificação: não aplicável - Resultado:  não aplicável Aspecto final - EPM:  Especificação: meio verde-escuro translúcido ligeiramente opalescente - Resultado: Adequado Aspecto final - MILI:  Especificação: meio púrpura translúcido ligeiramente opalescente - Resultado: Adequado Aspecto final - Citrato:  Especificação: meio verde escuro translúcido ligeiramente opalescente - Resultado: Adequado Aspecto final - Reativo de Kovacs: Especificação: Líquido amarelo brilhante e translúcido - Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'EPM: Especificação: P. vulgaris ATCC 13315 LTD +; Glicose +; Gás +; H2S +.  Resultado: Adequado EPM: Especificação: E. coli ATCC 25922 LTD -; Glicose +; Gás +; H2S -.  Resultado: Adequado EPM: Especificação: P. aeruginosa ATCC 27853 LTD -; Glicose -; Gás -; H2S -.  Resultado: Adequado EPM: Especificação: S. flexneri ATCC 12022 LTD -; Glicose +; Gás -; H2S -. Resultado: Adequado EPM: Especificação: S. typhimurium ATCC 14028 LTD -; Glicose +; Gás +; H2S +. Resultado: Adequado MILI:  Especificação: E. coli ATCC 25922 Motilidade +; Indol +; Ornitina +. Resultado: Adequado MILI:  Especificação: S. flexneri ATCC 12022 Motilidade -; Indol -; Ornitina -. Resultado: Adequado Citrato: Especificação: E. coli ATCC 25922 Crescimento ausente, sem mudança da coloração -. Resultado: Adequado Citrato: K. pneumoniae ATCC 13883 Crescimento com mudança da coloração do meio para azul. Resultado: Adequado Reativo de Kovacs:  Especificação: S. flexneri ATCC 12022 (inoculado em meio de MILi) MOT -; IND -; LIS -. Resultado: Adequado Reativo de Kovacs:  Especificação: E. coli ATCC 25922 (inoculado em meio de MILi) MOT +; IND +; LIS +. Resultado: Adequado Esterilidade - Especificação: Ausência de crescimento. Resultado: Adequado'
        },
        'PI61 - Meio EPM com uréia - avulso - PI': {
            aspecto: 'pH final - EPM: Especificação:  7,3 ± 0,1 - Resultado: Adequado Aspecto final - EPM:  Especificação: meio verde-escuro translúcido ligeiramente opalescente - Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'EPM: Especificação: P. vulgaris ATCC 13315 LTD +; Glicose +; Gás +; H2S +. Resultado: Adequado EPM: Especificação: E. coli ATCC 25922 LTD -; Glicose +; Gás +; H2S -.  Resultado: Adequado EPM: Especificação: P. aeruginosa ATCC 27853 LTD -; Glicose -; Gás -; H2S -.  Resultado: Adequado EPM: Especificação: S. flexneri ATCC 12022 LTD -; Glicose +; Gás -; H2S -. Resultado: Adequado EPM: Especificação: S. typhimurium ATCC 14028 LTD -; Glicose +; Gás +; H2S +. Resultado: Adequado MILI:  Especificação: E. coli ATCC 25922 Motilidade +; Indol +; Ornitina +. Resultado: Adequado MILI:  Especificação: S. flexneri ATCC 12022 Motilidade -; Indol -; Ornitina -. Resultado: Adequado'
        },
        'PI62 - Meio de MILi - avulso - PI': {
            aspecto: 'pH final - MILI: Especificação:  6,6 ± 0,2 - Resultado: Adequado Aspecto final - MILI:  Especificação: meio púrpura translúcido ligeiramente opalescente - Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'MILI:  Especificação: E. coli ATCC 25922 Motilidade +; Indol +; Ornitina +. Resultado: Adequado MILI:  Especificação: S. flexneri ATCC 12022 Motilidade -; Indol -; Ornitina -. Resultado: Adequado'
        },
        'PI44 - Agar Citrato de Simmons - avulso - PI': {
            aspecto: 'pH final - Citrato: Especificação:  6,9 ± 0,2 - Resultado: Adequado Aspecto final - Citrato: Especificação:meio verde escuro translúcido ligeiramente opalescente - Resultado: Adequado ',
            bacteriana: 'conforme',
            infoText1: 'Citrato: Especificação: E. coli ATCC 25922 Crescimento ausente, sem mudança da coloração - Resultado: Adequado Citrato: Especificação: K. pneumoniae ATCC 13883 Crescimento com mudança da coloração do meio para azul - Resultado: Adequado'
        },
        'PA117 - Kit para Confirmação de Enterococos c/ 25 testes - PA - Kit ident Bacter': {
            aspecto: 'pH final - Ágar Bile Esculina: Especificação:  6,6 ± 0,2 - Resultado: Adequado pH final - Meio de MTS:Especificação:  7,3 ± 0,2 - Resultado: Adequado Aspecto final - Ágar Bile Esculina: Especificação: Meio âmbar claro translúcido, ligeiramente opalescente - Resultado: Adequado Aspecto final - MTS:  Especificação: Meio púrpura translúcido - Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Ágar Bile Esculina: Especificação: E. faecalis ATCC 29212 Crescimento bom a excelente com escurecimento do meio - Resultado: Adequado Ágar Bile Esculina: Especificação: E. coli ATCC 25922    Crescimento ausente - Resultado: Adequado Meio de MTS: Especificação: E. faecalis ATCC 29212  Crescimento com mudança de coloração do meio para amarelo - Resultado: Adequado Meio de MTS: Especificação: S. viridans Cepa Selvagem  Crescimento ausente, sem mudança de coloração - Resultado: Adequado'
        },
        'PI69 - Agar Bile Esculina - avulso - PI': {
            aspecto: 'pH final - Ágar Bile Esculina: Especificação:  6,6 ± 0,2 - Resultado: Adequado Aspecto final - Ágar Bile Esculina: Especificação: Meio âmbar claro translúcido, ligeiramente opalescente - Resultado: Adequado ',
            bacteriana: 'conforme',
            infoText1: 'Ágar Bile Esculina: Especificação: E. faecalis ATCC 29212 Crescimento bom a excelente com escurecimento do meio - Resultado: Adequado Ágar Bile Esculina: Especificação: E. coli ATCC 25922    Crescimento ausente - Resultado: Adequado'
        },
        'PI80 - Caldo MTS - avulso - PI': {
            aspecto: 'pH final - Meio de MTS:Especificação:  7,3 ± 0,2 - Resultado: Adequado Aspecto final - MTS:  Especificação: Meio púrpura translúcido - Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Meio de MTS: Especificação: E. faecalis ATCC 29212  Crescimento com mudança de coloração do meio para amarelo - Resultado: Adequado Meio de MTS: Especificação: S. viridans Cepa Selvagem  Crescimento ausente, sem mudança de coloração - Resultado: Adequado'
        },
        'PA118 - Kit para Enterobacterias c/ 10 testes - PA - Kit ident Bacter': {
            aspecto: 'pH final - EPM: Especificação:  7,3 ± 0,1 - Resultado: Adequado pH final - Lisina: Especificação:  6,0 ± 0,2 - Resultado: Adequado pH final - MIO: Especificação:  6,5 ± 0,2 - Resultado: Adequado pH final - Citrato: Especificação:  6,9 ± 0,2 - Resultado: Adequado pH final - Rhamnose: Especificação:  6,8 ± 0,2 - Resultado: Adequado  Aspecto final - EPM:: Especificação: meio verde escuro translúcido ligeiramente opalescente - Resultado: Adequado Aspecto final  - Lisina: Especificação: meio púrpura translúcido - Resultado: Adequado Aspecto final  - MIO: Especificação:  meio púrpura translúcido ligeiramente opalescente - Resultado: Adequado Aspecto final - Citrato: Especificação:meio verde escuro translúcido ligeiramente opalescente - Resultado: Adequado Aspecto final - Rhamnose: Especificação: meio verde claro translúcido - Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'EPM: Especificação: P. vulgaris ATCC 13315 LTD +; Glicose +; Gás +; H2S + Resultado: Adequado EPM: Especificação: E. coli ATCC 25922 LTD -; Glicose +; Gás +; H2S - Resultado: Adequado EPM: Especificação: P. aeruginosa ATCC 27853 LTD -; Glicose -; Gás -; H2S - Resultado: Adequado EPM: Especificação: S. flexneri ATCC 12022 LTD -; Glicose +; Gás -; H2S - Resultado: Adequado EPM: Especificação:S. typhimurium ATCC 14028 LTD -; Glicose +; Gás +; H2S + Resultado: Adequado  Caldo Lisina: Especificação: S. flexneri ATCC 12022 - (coloração amarela) Resultado: Adequado Caldo Lisina: Especificação: S. typhimurium ATCC 14028 + (coloração púrpura) Resultado: Adequado  MIO: Especificação: E. coli ATCC 25922 Motilidade +; Indol +; Ornitina + Resultado: Adequado MIO: Especificação:S. flexneri ATCC 12022 Motilidade -; Indol -; Ornitina - Resultado: Adequado  Citrato: Especificação: E. coli ATCC 25922 Crescimento ausente, sem mudança da coloração - Resultado: Adequado Citrato: Especificação: K. pneumoniae ATCC 13883 Crescimento com mudança da coloração do meio para azul - Resultado: Adequado  Caldo Rhamnose:  Especificação: K. pneumoniae ATCC 13883 + (coloração amarela) - Resultado: Adequado Caldo Rhamnose:  Especificação: S. flexneri ATCC 12022 - (coloração verde)) - Resultado: Adequado   Esterilidade - Especificação: Ausência de crescimento Resultado: Adequado'
        },
        'PI100 - Meio de EPM s/ uréia - avulso - PI': {
            aspecto: 'pH final - EPM: Especificação:  7,3 ± 0,1 - Resultado: Adequado  Aspecto final - EPM:: Especificação: meio verde escuro translúcido ligeiramente opalescente - Resultado: Adequado ',
            bacteriana: 'conforme',
            infoText1: 'EPM: Especificação: P. vulgaris ATCC 13315 LTD +; Glicose +; Gás +; H2S + Resultado: Adequado EPM: Especificação: E. coli ATCC 25922 LTD -; Glicose +; Gás +; H2S - Resultado: Adequado EPM: Especificação: P. aeruginosa ATCC 27853 LTD -; Glicose -; Gás -; H2S - Resultado: Adequado EPM: Especificação: S. flexneri ATCC 12022 LTD -; Glicose +; Gás -; H2S - Resultado: Adequado EPM: Especificação:S. typhimurium ATCC 14028 LTD -; Glicose +; Gás +; H2S + Resultado: Adequado '
        },
        'PI42 - Caldo lisina – avulso - PI': {
            aspecto: 'pH final - Lisina: Especificação:  6,0 ± 0,2 - Resultado: Adequado Aspecto final  - Lisina: Especificação: meio púrpura translúcido - Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Caldo Lisina: Especificação: S. flexneri ATCC 12022 - (coloração amarela) Resultado: Adequado Caldo Lisina: Especificação: S. typhimurium ATCC 14028 + (coloração púrpura) Resultado: Adequado  '
        },
        'PI43 - Meio MIO - avulso - PI': {
            aspecto: 'pH final - MIO: Especificação:  6,5 ± 0,2 - Resultado: Adequado Aspecto final  - MIO: Especificação:  meio púrpura translúcido ligeiramente opalescente - Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'MIO: Especificação: E. coli ATCC 25922 Motilidade +; Indol +; Ornitina + Resultado: Adequado MIO: Especificação:S. flexneri ATCC 12022 Motilidade -; Indol -; Ornitina - Resultado: Adequado '
        },
        'PI44 - Agar Citrato de Simmons - avulso - PI': {
            aspecto: 'pH final - Citrato: Especificação:  6,9 ± 0,2 - Resultado: Adequado Aspecto final - Citrato: Especificação:meio verde escuro translúcido ligeiramente opalescente - Resultado: Adequado ',
            bacteriana: 'conforme',
            infoText1: 'Citrato: Especificação: E. coli ATCC 25922 Crescimento ausente, sem mudança da coloração - Resultado: Adequado Citrato: Especificação: K. pneumoniae ATCC 13883 Crescimento com mudança da coloração do meio para azul - Resultado: Adequado'
        },
        'PI45 - Caldo Rhamnose - avulso - PI': {
            aspecto: 'pH final - Rhamnose: Especificação:  6,8 ± 0,2 - Resultado: Adequado  Aspecto final - Rhamnose: Especificação: meio verde claro translúcido - Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Caldo Rhamnose:  Especificação: K. pneumoniae ATCC 13883 + (coloração amarela) - Resultado: Adequado Caldo Rhamnose:  Especificação: S. flexneri ATCC 12022 - (coloração verde)) - Resultado: Adequado   Esterilidade - Especificação: Ausência de crescimento Resultado: Adequado'
        },
        'PA120 - Kit para Micobacterias cx c/ 10 testes - PA - Kit ident Bacte': {
            aspecto: 'Aspecto final - Ogawa Kudoh: Especificação: Meio verde-claro opalescente. Resultado: Adequado Aspecto final - NaOH: Especificação: Líquido incolor e translúcido. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Especificação: Desempenho microbiológico M. tuberculosis H37Rv (ATCC 27294) ou similar - Resultado: Adequado Especificação: Crescimento bom a excelente de colônias granulares, foscas, secas e friáveis - Resultado: Adequado Esterilidade: Ogawa Kudoh: ausência de crescimento - Resultado: Adequado Esterilidade:NaOH: ausência de crescimento - Resultado: Adequado'
        },
        'PI78 - Ogawa Kudoh - avulso - Termolábel - PI': {
            aspecto: 'Aspecto final - Ogawa Kudoh: Especificação: Meio verde-claro opalescente. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Especificação: Desempenho microbiológico M. tuberculosis H37Rv (ATCC 27294) ou similar - Resultado: Adequado Especificação: Crescimento bom a excelente de colônias granulares, foscas, secas e friáveis - Resultado: Adequado '
        },
        'PI79 - Descontaminante p/ Ogawa tubo c/ 5 mL - Avulso - PI': {
            aspecto: 'Aspecto final - NaOH: Especificação: Líquido incolor e translúcido. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Esterilidade:NaOH: ausência de crescimento - Resultado: Adequado'
        },
        'PA121 - Meio Rugai com Lisina c/ 50 tubos - PA - Kit ident Bacter': {
            aspecto: 'pH final - Meio de Rugai: Especificação: 7,4 ± 0,2. Resultado: Adequado pH final - Meio de Lisina Motilidade: Especificação: 6,5 ± 0,2. Resultado: Adequado Aspecto final - Meio de Rugai: Especificação: Meio verde- escuro translúcido, ligeiramente opalescente. Resultado: Adequado. Aspecto final -Meio de Lisina Motilidade: Especificação: Meio púrpura ligeiramente opalescente. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico P. vulgaris ATCC 13315 - Especificação:  LTD +; Glicose +; Gás +; H2S +; URE +; LIS -; MOT +; IND +. Resultado: Adequado Desempenho microbiológico K. pneumoniae ATCC 13883 - Especificação: LTD -; Glicose +; Gás +; H2S -; URE +; LIS +; MOT -; IND -. Resultado: Adequado Desempenho microbiológico E. coli ATCC 25922 - Especificação: LTD -; Glicose +; Gás +; H2S -; URE -; LIS +; MOT +; IND +. Resultado: Adequado Desempenho microbiológico P. aeruginosa ATCC 27853 - Especificação: LTD -; Glicose -; Gás -; H2S -; URE -; LIS -; MOT +; IND -. Resultado: Adequado Desempenho microbiológico S. flexneri ATCC 12022  - Especificação: LTD -; Glicose +; Gás -; H2S -; URE -; LIS -; MOT -; IND -. Resultado: Adequado Desempenho microbiológico S. typhimurium ATCC 14028 - Especificação: LTD -; Glicose +; Gás +; H2S +;URE -; LIS +; MOT +; IND -.  Resultado: Adequado Esterilidade:  Especificação: Ausência de crescimento. Resultado: Adequado'
        },
        'PA122 - Mini Kit EPM - MILI c/ 25 testes - PA - Mini kits id bac': {
            aspecto: 'pH final - EPM: Especificação:  7,3 ± 0,1 - Resultado: Adequado pH final - MILI: Especificação:  6,6 ± 0,2 - Resultado: Adequado  Aspecto final - EPM:  Especificação: meio verde-escuro translúcido ligeiramente opalescente - Resultado: Adequado Aspecto final - MILI:  Especificação: meio púrpura translúcido ligeiramente opalescente - Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'EPM: Especificação: P. vulgaris ATCC 13315 LTD +; Glicose +; Gás +; H2S +. Resultado: Adequado EPM: Especificação: E. coli ATCC 25922 LTD -; Glicose +; Gás +; H2S -.  Resultado: Adequado EPM: Especificação: P. aeruginosa ATCC 27853 LTD -; Glicose -; Gás -; H2S -.  Resultado: Adequado EPM: Especificação: S. flexneri ATCC 12022 LTD -; Glicose +; Gás -; H2S -. Resultado: Adequado EPM: Especificação: S. typhimurium ATCC 14028 LTD -; Glicose +; Gás +; H2S +. Resultado: Adequado MILI:  Especificação: E. coli ATCC 25922 Motilidade +; Indol +; Ornitina +. Resultado: Adequado MILI:  Especificação: S. flexneri ATCC 12022 Motilidade -; Indol -; Ornitina -. Resultado: Adequado Esterilidade - Especificação: Ausência de crescimento. Resultado: Adequado'
        },
        'P84 - Meio de EPM c/ uréia mini - avulso - PI': {
            aspecto: 'pH final - EPM: Especificação:  7,3 ± 0,1 - Resultado: Adequado Aspecto final - EPM:  Especificação: meio verde-escuro translúcido ligeiramente opalescente - Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'EPM: Especificação: P. vulgaris ATCC 13315 LTD +; Glicose +; Gás +; H2S +. Resultado: Adequado EPM: Especificação: E. coli ATCC 25922 LTD -; Glicose +; Gás +; H2S -.  Resultado: Adequado EPM: Especificação: P. aeruginosa ATCC 27853 LTD -; Glicose -; Gás -; H2S -.  Resultado: Adequado EPM: Especificação: S. flexneri ATCC 12022 LTD -; Glicose +; Gás -; H2S -. Resultado: Adequado EPM: Especificação: S. typhimurium ATCC 14028 LTD -; Glicose +; Gás +; H2S +. Resultado: Adequado MILI:  Especificação: E. coli ATCC 25922 Motilidade +; Indol +; Ornitina +. Resultado: Adequado MILI:  Especificação: S. flexneri ATCC 12022 Motilidade -; Indol -; Ornitina -. Resultado: Adequado '
        },
        'PI83 - Meio MILi mini - avulso - PI': {
            aspecto: 'pH final - MILI: Especificação:  6,6 ± 0,2 - Resultado: Adequado Aspecto final - MILI:  Especificação: meio púrpura translúcido ligeiramente opalescente - Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'MILI:  Especificação: E. coli ATCC 25922 Motilidade +; Indol +; Ornitina +. Resultado: Adequado MILI:  Especificação: S. flexneri ATCC 12022 Motilidade -; Indol -; Ornitina -. Resultado: Adequado Esterilidade - Especificação: Ausência de crescimento. Resultado: Adequado'
        },
        'PA123 - Mini Kit NF-PROV c/ 05 testes - PA - Mini kits id bac': {
            aspecto: 'pH final - OF (base, glicose, lactose, xilose e maltose): Especificação:  7,1 ± 0,2 - Resultado: Adequado pH final - Caldo BHI: Especificação:  7,4 ± 0,2 - Resultado: Adequado pH final - Cetrimide: Especificação:  7,2 ± 0,2 - Resultado: Adequado pH final - Nitrato Motilidade: Especificação:  7,4 ± 0,2 - Resultado: Adequado pH final - Gelatina: 6,9 ± 0,1 - Resultado: Adequado  Aspecto final - OF (base, glicose, lactose, xilose e maltose): Especificação: meio verde escuro translúcido - Resultado: Adequado Aspecto final - Caldo BHI: Especificação:  meio âmbar claro translúcido - Resultado: Adequado Aspecto final - Cetrimide: Especificação:  meio incolor opalescente - Resultado: Adequado Aspecto final - Nitrato Motilidade: Especificação: Meio âmbar claro, ligeiramente opalescente - Resultado: Adequado Aspecto final - Gelatina: Especificação: Meio âmbar claro, gelatinoso e ligeiramente opalescente - Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'OF-Glicose.  Especificação: P. aeruginosa ATCC 27853  Oxidação - Resultado: Adequado OF-Glicose.  K. pneumoniae ATCC 13883 Oxidação e Fermentação - Resultado: Adequado OF-Glicose.  Especificação: M. osloensis ATCC 10973  Inalterado - Resultado: Adequado  OF-Lactose. Especificação: B. cepacia ATCC 17759  Oxidação - Resultado: Adequado OF-Lactose. Especificação: K. pneumoniae ATCC 13883 Oxidação e Fermentação - Resultado: Adequado OF-Lactose. Especificação: M. osloensis ATCC 10973  Inalterado - Resultado: Adequado  OF-Xilose. Especificação: B. cepacia ATCC 17759  Oxidação - Resultado: Adequado OF-Xilose. Especificação: K. pneumoniae ATCC 13883 Oxidação e Fermentação - Resultado: Adequado OF-Xilose. Especificação: M. osloensis ATCC 10973  Inalterado - Resultado: Adequado  OF-Maltose. Especificação: S. maltophilia Cepa Selvagem Oxidação - Resultado: Adequado OF-Maltose. Especificação: K. pneumoniae ATCC 13883 Oxidação e Fermentação - Resultado: Adequado OF-Maltose. Especificação: M. osloensis ATCC 10973  Inalterado - Resultado: Adequado  OF-Base. Especificação: P. aeruginosa ATCC 27853  Inalterado - Resultado: Adequado OF-Base. Especificação: K. pneumoniae ATCC 13883 Inalterado - Resultado: Adequado Caldo BHI (inóculo padronizado em 10.000 UFC/mL). Especificação: N. meningitidis ATCC 13090   Crescimento bom a excelente - Resultado: Adequado Caldo BHI (inóculo padronizado em 10.000 UFC/mL). Especificação: S. pneumoniae ATCC 49619 Crescimento bom a excelente - Resultado: Adequado Caldo BHI (inóculo padronizado em 10.000 UFC/mL). Especificação: S. pyogenes ATCC 19615 Crescimento bom a excelente - Resultado: Adequado  Ágar Cetrimide (inóculo padronizado em 100.000 UFC/mL). Especificação: P. aeruginosa ATCC 27853 Crescimento bom a excelente com pigmento fluorescente - Resultado: Adequado Ágar Cetrimide (inóculo padronizado em 100.000 UFC/mL). Especificação: E. coli ATCC 25922 Crescimento inibido - Resultado: Adequado Ágar Cetrimide (inóculo padronizado em 100.000 UFC/mL). Especificação: S. maltophilia ATCC 13637 Crescimento inibido - Resultado: Adequado  Meio de Nitrato-Motilidade (prova do nitrato revelada através dos reativos correspondentes e adição de zinco em pó quando necessário).  Especificação: P. aeruginosa ATCC 27853 MOT +; NIT +. Resultado: Adequado Meio de Nitrato-Motilidade (prova do nitrato revelada através dos reativos correspondentes e adição de zinco em pó quando necessário).  Especificação: P. mirabilis ATCC 25933   MOT +; NIT +. Resultado: Adequado Meio de Nitrato-Motilidade (prova do nitrato revelada através dos reativos correspondentes e adição de zinco em pó quando necessário).  Especificação: A. baumannii Cepa Selvagem MOT -; NIT - . Resultado: Adequado  Meio de Gelatina (inóculo padronizado em 100.000 UFC/mL). Especificação: P. aeruginosa ATCC 27853   Meio sólido após refrigeração. Resultado: Adequado Meio de Gelatina (inóculo padronizado em 100.000 UFC/mL). Especificação: S. marcescens ATCC 43861 Meio liquefeito após refrigeração. Resultado: Adequado  Esterilidade - Especificação: Ausência de crescimento Resultado: Adequado'
        },
        'PI03 - Agar Cetrimide mini - avulso - PI': {
            aspecto: 'pH final -  Especificação:  7,2 ± 0,2 - Resultado: Adequado Aspecto final - Especificação:  meio incolor opalescente - Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Especificação: P. aeruginosa ATCC 27853 Crescimento bom a excelente com pigmento fluorescente - Resultado: Adequado Especificação: E. coli ATCC 25922 Crescimento inibido - Resultado: Adequado Ágar Cetrimide Especificação: S. maltophilia ATCC 13637 Crescimento inibido - Resultado: Adequado  '
        },
        'PI55 - Nitrato motilidade mini - avulso - PI': {
            aspecto: 'pH final - Nitrato Motilidade: Especificação:  7,4 ± 0,2 - Resultado: Adequado Aspecto final - Nitrato Motilidade: Especificação: Meio âmbar claro, ligeiramente opalescente - Resultado: Adequado ',
            bacteriana: 'conforme',
            infoText1: 'Meio de Nitrato-Motilidade (prova do nitrato revelada através dos reativos correspondentes e adição de zinco em pó quando necessário).  Especificação: P. aeruginosa ATCC 27853 MOT +; NIT +. Resultado: Adequado Meio de Nitrato-Motilidade (prova do nitrato revelada através dos reativos correspondentes e adição de zinco em pó quando necessário).  Especificação: P. mirabilis ATCC 25933   MOT +; NIT +. Resultado: Adequado Meio de Nitrato-Motilidade (prova do nitrato revelada através dos reativos correspondentes e adição de zinco em pó quando necessário).  Especificação: A. baumannii Cepa Selvagem MOT -; NIT - . Resultado: Adequado '
        },
        'PI63 - Caldo BHI - mini avulso - PI': {
            aspecto: 'pH final - Caldo BHI: Especificação:  7,4 ± 0,2 - Resultado: Adequado Aspecto final - Caldo BHI: Especificação:  meio âmbar claro translúcido - Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Caldo BHI Especificação: N. meningitidis ATCC 13090   Crescimento bom a excelente - Resultado: Adequado Caldo BHI Especificação: S. pneumoniae ATCC 49619 Crescimento bom a excelente - Resultado: Adequado Caldo BHI Especificação: S. pyogenes ATCC 19615 Crescimento bom a excelente - Resultado: Adequado'
        },
        'PI90 - Agar OF glicose mini - avulso - PI': {
            aspecto: 'pH final - OF (base, glicose, lactose, xilose e maltose): Especificação:  7,1 ± 0,2 - Resultado: Adequado Aspecto final - OF (base, glicose, lactose, xilose e maltose): Especificação: meio verde escuro translúcido - Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'OF-Glicose.  Especificação: P. aeruginosa ATCC 27853  Oxidação - Resultado: Adequado OF-Glicose.  K. pneumoniae ATCC 13883 Oxidação e Fermentação - Resultado: Adequado OF-Glicose.  Especificação: M. osloensis ATCC 10973  Inalterado - Resultado: Adequado'
        },
        'PI91 - Agar OF base mini - avulso - PI': {
            aspecto: 'pH final - OF (base, glicose, lactose, xilose e maltose): Especificação:  7,1 ± 0,2 - Resultado: Adequado Aspecto final - OF (base, glicose, lactose, xilose e maltose): Especificação: meio verde escuro translúcido - Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'OF-Base. Especificação: P. aeruginosa ATCC 27853  Inalterado - Resultado: Adequado OF-Base. Especificação: K. pneumoniae ATCC 13883 Inalterado – Resultado: Adequado'
        },
        'PI92 - Agar OF xilose mini - avulso - PI': {
            aspecto: 'pH final - OF (base, glicose, lactose, xilose e maltose): Especificação:  7,1 ± 0,2 - Resultado: Adequado Aspecto final - OF (base, glicose, lactose, xilose e maltose): Especificação: meio verde escuro translúcido - Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'OF-Xilose. Especificação: B. cepacia ATCC 17759  Oxidação - Resultado: Adequado OF-Xilose. Especificação: K. pneumoniae ATCC 13883 Oxidação e Fermentação - Resultado: Adequado OF-Xilose. Especificação: M. osloensis ATCC 10973  Inalterado - Resultado: Adequado'
        },
        'PI93 - Agar OF maltose mini – avulso - PI': {
            aspecto: 'pH final - OF (base, glicose, lactose, xilose e maltose): Especificação:  7,1 ± 0,2 - Resultado: Adequado Aspecto final - OF (base, glicose, lactose, xilose e maltose): Especificação: meio verde escuro translúcido - Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'OF-Maltose. Especificação: S. maltophilia Cepa Selvagem Oxidação - Resultado: Adequado OF-Maltose. Especificação: K. pneumoniae ATCC 13883 Oxidação e Fermentação - Resultado: Adequado OF-Maltose. Especificação: M. osloensis ATCC 10973  Inalterado - Resultado: Adequado'
        },
        'PI94 - Agar OF lactose mini - avulso - PI': {
            aspecto: 'pH final - OF (base, glicose, lactose, xilose e maltose): Especificação:  7,1 ± 0,2 - Resultado: Adequado Aspecto final - OF (base, glicose, lactose, xilose e maltose): Especificação: meio verde escuro translúcido - Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'OF-Lactose. Especificação: B. cepacia ATCC 17759  Oxidação - Resultado: Adequado OF-Lactose. Especificação: K. pneumoniae ATCC 13883 Oxidação e Fermentação - Resultado: Adequado OF-Lactose. Especificação: M. osloensis ATCC 10973  Inalterado - Resultado: Adequado'
        },
        'PI95 - Meio de gelatina mini - avulso - PI': {
            aspecto: 'pH final - Gelatina: 6,9 ± 0,1 - Resultado: Adequado Aspecto final - Gelatina: Especificação: Meio âmbar claro, gelatinoso e ligeiramente opalescente - Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Meio de Gelatina Especificação: P. aeruginosa ATCC 27853   Meio sólido após refrigeração. Resultado: Adequado Meio de Gelatina Especificação: S. marcescens ATCC 43861 Meio liquefeito após refrigeração. Resultado: Adequado'
        },
        'PA124 - Mini Kit para Enterobacterias c/ 10 testes - PI': {
            aspecto: 'pH final - EPM: Especificação:  7,3 ± 0,1 - Resultado: Adequado pH final - Lisina: Especificação:  6,0 ± 0,2 - Resultado: Adequado pH final - MIO: Especificação:  6,5 ± 0,2 - Resultado: Adequado pH final - Citrato: Especificação:  6,9 ± 0,2 - Resultado: Adequado pH final - Rhamnose: Especificação:  6,8 ± 0,2 - Resultado: Adequado  Aspecto final - EPM:: Especificação: meio verde escuro translúcido ligeiramente opalescente - Resultado: Adequado Aspecto final  - Lisina: Especificação: meio púrpura translúcido - Resultado: Adequado Aspecto final  - MIO: Especificação:  meio púrpura translúcido ligeiramente opalescente - Resultado: Adequado Aspecto final - Citrato: Especificação:meio verde escuro translúcido ligeiramente opalescente - Resultado: Adequado Aspecto final - Rhamnose: Especificação: meio verde claro translúcido - Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'EPM: Especificação: P. vulgaris ATCC 13315 LTD +; Glicose +; Gás +; H2S +. Resultado: Adequado EPM: Especificação: E. coli ATCC 25922 LTD -; Glicose +; Gás +; H2S -. Resultado: Adequado EPM: Especificação: P. aeruginosa ATCC 27853 LTD -; Glicose -; Gás -; H2S -. Resultado: Adequado EPM mini: Especificação: S. flexneri ATCC 12022 LTD -; Glicose +; Gás -; H2S -. Resultado: Adequado EPM mini: Especificação:S. typhimurium ATCC 14028 LTD -; Glicose +; Gás +; H2S +. Resultado: Adequado  Caldo Lisina mini: Especificação: S. flexneri ATCC 12022 - (coloração amarela). Resultado: Adequado Caldo Lisina mini: Especificação: S. typhimurium ATCC 14028 + (coloração púrpura). Resultado: Adequado  MIO mini: Especificação: E. coli ATCC 25922 Motilidade +; Indol +; Ornitina +. Resultado: Adequado MIO mini: Especificação:S. flexneri ATCC 12022 Motilidade -; Indol -; Ornitina -. Resultado: Adequado  Citrato mini: Especificação: E. coli ATCC 25922 Crescimento ausente, sem mudança da coloração. Resultado: Adequado Citrato mini: Especificação: K. pneumoniae ATCC 13883 Crescimento com mudança da coloração do meio para azul. Resultado: Adequado  Caldo Rhamnose mini:  K. pneumoniae ATCC 13883 + (coloração amarela). Resultado: Adequado Caldo Rhamnose mini: S. flexneri ATCC 12022 - (coloração verde). Resultado: Adequado   Esterilidade - Especificação: Ausência de crescimento. Resultado: Adequado'
        },
        'PI85 - Meio de EPM s/ uréia mini - avulso - PI': {
            aspecto: 'pH final - EPM: Especificação:  7,3 ± 0,1 - Resultado: Adequado  Aspecto final - EPM:: Especificação: meio verde escuro translúcido ligeiramente opalescente - Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'EPM: Especificação: P. vulgaris ATCC 13315 LTD +; Glicose +; Gás +; H2S +. Resultado: Adequado EPM: Especificação: E. coli ATCC 25922 LTD -; Glicose +; Gás +; H2S -. Resultado: Adequado EPM: Especificação: P. aeruginosa ATCC 27853 LTD -; Glicose -; Gás -; H2S -. Resultado: Adequado EPM mini: Especificação: S. flexneri ATCC 12022 LTD -; Glicose +; Gás -; H2S -. Resultado: Adequado EPM mini: Especificação:S. typhimurium ATCC 14028 LTD -; Glicose +; Gás +; H2S +. Resultado: Adequado'
        },
        'PI86 - Meio de MIO mini - avulso - PI': {
            aspecto: 'pH final - MIO: Especificação:  6,5 ± 0,2 - Resultado: Adequado Aspecto final  - MIO: Especificação:  meio púrpura translúcido ligeiramente opalescente - Resultado: Adequado ',
            bacteriana: 'conforme',
            infoText1: 'MIO mini: Especificação: E. coli ATCC 25922 Motilidade +; Indol +; Ornitina +. Resultado: Adequado MIO mini: Especificação:S. flexneri ATCC 12022 Motilidade -; Indol -; Ornitina -. Resultado: Adequado  '
        },
        'PI87 - Caldo lisina mini - avulso - PI': {
            aspecto: 'pH final - Lisina: Especificação:  6,0 ± 0,2 - Resultado: AdequadoAspecto final  - Lisina: Especificação: meio púrpura translúcido - Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Caldo Lisina mini: Especificação: S. flexneri ATCC 12022 - (coloração amarela). Resultado: Adequado Caldo Lisina mini: Especificação: S. typhimurium ATCC 14028 + (coloração púrpura). Resultado: Adequado'
        },
        'PI88 - Caldo rhamnose mini - avulso - PI': {
            aspecto: 'pH final - Rhamnose: Especificação:  6,8 ± 0,2 - Resultado: Adequado Aspecto final - Rhamnose: Especificação: meio verde claro translúcido - Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Caldo Rhamnose mini:  K. pneumoniae ATCC 13883 + (coloração amarela). Resultado: Adequado Caldo Rhamnose mini: S. flexneri ATCC 12022 - (coloração verde). Resultado: Adequado'
        },
        'PA150	Acquaplus II cx c/ 10 testes	PA - Acquaplus': {
            aspecto: 'Aspecto FLM -  Especificação: Pó homogêneo amarelo a creme. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho Microbiológico P. aeruginosa ATCC 27853 - Especificação: Turvação sem fluorescência e indol negativo. Resultado: Adequado Desempenho Microbiológico K. pneumoniae ATCC 13883 - Especificação: Turvação verde azulada sem fluorescência e indol negativo. Resultado: Adequado Desempenho Microbiológico E. coli ATCC 25922 - - Especificação: Turvação verde azulada com fluorescência e indol positivo. Resultado: Adequado Esterilidade dos sacos de coleta,  seringas e tubos PS: Ausência de crescimento'
        },
        'PA149	Acquaplus I sachê c/ 10 testes	PA - Acquaplus': {
            aspecto: 'Aspecto final FLM -  Especificação: Pó homogêneo amarelo a creme.  Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho Microbiológico P. aeruginosa ATCC 27853 - Especificação: Turvação sem fluorescência e indol negativo. Resultado: Adequado Desempenho Microbiológico K. pneumoniae ATCC 13883 - Especificação: Turvação verde azulada sem fluorescência e indol negativo. Resultado: Adequado Desempenho Microbiológico E. coli ATCC 25922 -  Especificação: Turvação verde azulada com fluorescência e indol positivo. Resultado: Adequado Esterilidade dos sacos de coleta: Especificação: Ausência de crescimento. Resultado: Adequado'
        },
        'PU38 - Caldo Lauril triptose tubo c/ 9 mL': {
            aspecto: 'Líquido âmbar médio límpido/translúcido',
            bacteriana: 'conforme',
            infoText1: 'Desempenho Microbiológico: Desempenho microbiológico E. aerogenes ATCC 13048. Especificação: Crescimento bom a excelente com produção de gás.  Resultado: AdequadoDesempenho microbiológico E. coli ATCC 25922 Inóculo. Especificação: Crescimento bom a excelente com produção de gás. Resultado: AdequadoDesempenho microbiológico E. faecalis ATCC 29212. Especificação: Crescimento parcialmente a inibido sem produção de gás. Resultado: AdequadoDesempenho microbiológico S. typhimurium ATCC 14028. Especificação: Crescimento bom sem produção de gás. Resultado: Adequado'
        },
        'PI89 - Agar citrato de Simmons mini - avulso - PI': {
            aspecto: 'pH final - Citrato: Especificação:  6,9 ± 0,2 - Resultado: Adequado Aspecto final - Citrato: Especificação:meio verde escuro translúcido ligeiramente opalescente - Resultado: Adequado ',
            bacteriana: 'conforme',
            infoText1: 'Citrato mini: Especificação: E. coli ATCC 25922 Crescimento ausente, sem mudança da coloração. Resultado: Adequado Citrato mini: Especificação: K. pneumoniae ATCC 13883 Crescimento com mudança da coloração do meio para azul. Resultado: Adequado'
        },
        'PI38 - Bac-Gel tubo c/ 10 mL': {
            aspecto: 'Líquido âmbar claro a médio translúcido e sem precipitados.',
            bacteriana: 'conforme',
            infoText1: 'Não aplicável.'
        }
        
        
    };

    $('#itens').change(function() {
        var selectedValue = $(this).val();
        var data = produtoData[selectedValue];

        if (data) {
            $('#aspecto').val(data.aspecto);
            $('#dosagem').val(data.dosagem);

            // Marcar a checkbox "bacteriana" se true
            $('input[name="bacteriana"]').prop('checked', data.bacteriana || false);

            // Atualizar o campo de texto "obs_esterilidade"
            $('#infoText1').val(data.infoText1);

            // Adicione outras atualizações de campos conforme necessário...
        } else {
            $('#aspecto').val('');
            $('#dosagem').val('');
            $('input[name="bacteriana"]').prop('checked', false);
            $('#infoText1').val('');
        }
    });
});
