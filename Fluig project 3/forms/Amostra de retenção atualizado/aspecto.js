$(document).ready(function() {
    var produtoData = {
        'PA384': {
            aspecto: 'Especificação: Meio vermelho sangue opalescente. Resultado: Adequado',
            dosagem: ' g/300 mL',
            bacteriana: true, // Marcar a caixa de seleção "bacteriana"
            infoText1: 'Desempenho microbiológico E. coli ATCC 25922. Especificação: Crescimento excelente de colônias grandes, acinzentadas e brilhantes. Resultado: Adequado Desempenho microbiológico S. aureus ATCC 25923. Especificação: Crescimento excelente de colônias grandes, amareladas e opacas. Resultado: Adequado Desempenho microbiológico S. pneumoniae ATCC 49619. Especificação: Crescimento moderado a bom de colônias pequenas alfa-hemolíticas. Resultado: Adequado Desempenho microbiológico S. pyogenes ATCC 19615. Especificação: Crescimento moderado a bom de colônias pequenas beta-hemolíticas. Resultado: Adequado'
        },
        'PA411': {
            aspecto: 'pH final. Especificação: 7,2 ± 0,2. Resultado: Adequado Aspecto final. Especificação: Caldo âmbar claro translúcido. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'NA'
        },
        'PA42': {
            aspecto: 'Ágar Chocolate: Especificação: Meio castanho opalescente. Resultado: Adequado Aspecto final. Ágar Thayer Martin: Especificação: Meio castanho opalescente. Resultado: Adequado',
            dosagem: ' g/200 mL',
            bacteriana: true,
            infotext1:'Desempenho microbiológico H. influenzae ATCC 10211. Ágar Chocolate: Especificação: Crescimento moderado a bom de colônias médias translúcidas. Resultado: Adequado Desempenho microbiológico H. influenzae ATCC 10211. Ágar Thayer Martin: Especificação: N.A. Desempenho microbiológico N. meningitidis ATCC 25923. Ágar Chocolate: Especificação: Crescimento moderado a bom de colônias pequenas translúcidas. Resultado: Adequado  Desempenho microbiológico N. meningitidis ATCC 25923. Ágar Thayer Martin: Especificação: Crescimento moderado a bom de colônias pequenas translúcidas   Resultado: Adequado Desempenho microbiológico C. albicans ATCC 10231*  Ágar Chocolate: Especificação: N.A. Desempenho microbiológico C. albicans ATCC 10231* Ágar Thayer Martin: Especificação: crescimento acentuadamente inibido. Resultado: Adequado Desempenho microbiológico S. epidermidis ATCC 12228 * Ágar Chocolate: Especificação: N.A.  Desempenho microbiológico S. epidermidis ATCC 12228 * Ágar Thayer Martin: Especificação:  Crescimento acentuadamente inibido. Resultado: Adequado Desempenho microbiológico E. coli ATCC 25922 * Ágar Chocolate: Especificação: N.A. Desempenho microbiológico E. coli ATCC 25922 * Ágar Thayer Martin: Especificação: Crescimento acentuadamente inibido. Resultado: Adequado '
        },
        'PA43': {
            aspecto: 'Especificação: Meio verde claro translúcido, ligeiramente opalescente. Resultado: Adequado',
            dosagem: ' g/200 mL',
            bacteriana: true,
            infoText1: 'Desempenho micrbiológico E. coli ATCC 25922 . Especificação: Crescimento bom a excelente de colônias amarelas grandes. Resultado: Adequado Desempenho micrbiológico S. aureus ATCC 25923. Especificação: Crescimento bom a excelente de colônias amarelas, pequenas e opacas. Resultado: Adequado Desempenho micrbiológico P. vulgaris ATCC 13315.  Especificação: Crescimento bom a excelente de colônias azul esverdeadas, translúcidas. Resultado: Adequado Esterilidade. Especificação: Ausência de crescimento. Resultado: Adequado'
        },
        // Continue adicionando os outros produtos conforme necessário
        'PA44': {
            aspecto: 'Ágar Mac Conkey: Especificação: Meio rosado translúcido, ligeiramente opalescente. Resultado: Adequado Aspecto final Ágar SS: Especificação: Meio vermelho alaranjado, ligeiramente opalescente. Resultado: Adequado Observação: o ágar SS pode apresentar alguns precipitados/cristais, que em nada interferem no seu desempenho.',
            dosagem: ' g/300 mL',
            bacteriana: true,
            infoText1: 'Desempenho microbiológico: E. coli ATCC 25922  Ágar Mac Conkey: Especificação:  Crescimento excelente de colônias vermelhas com precipitado de bile. Resultado: Adequado Desempenho microbiológico: E. coli ATCC 25922 Ágar SS: Especificação: Crescimento escasso ou ausente de colônias vermelhas. Resultado: Adequado Desempenho microbiológico: S. typhimurium ATCC 14028  Ágar Mac Conkey:  Especificação: Crescimento excelente de colônias incolores translúcidas. Resultado: Adequado Desempenho microbiológico: S. typhimurium ATCC 14028 Ágar SS:  Especificação: Crescimento excelente de colônias incolores com centro negro.  Resultado: Adequado Desempenho microbiológico: S. flexneri ATCC 12022 Ágar Mac Conkey: Especificação: Crescimento excelente de colônias incolores translúcidas. Resultado: Adequado  Desempenho microbiológico: S. flexneri ATCC 12022  Ágar SS: Especificação: Crescimento excelente de colônias incolores translúcidas. Resultado: Adequado Desempenho microbiológico: E. faecalis ATCC 29212 Ágar Mac Conkey: Especificação: Crescimento ausente. Resultado: Adequado Desempenho microbiológico: E. faecalis ATCC 29212 Ágar SS:  Especificação: Crescimento ausente. Resultado: Adequado '
        },
        'PA45': {
            aspecto: 'Ágar Sangue: Especificação: Meio vermelho sangue opalescente.  Aspecto final Ágar Chocolate: Especificação: Meio sólido, marrom brilhante, homogêneo.   Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico S. pneumoniae ATCC 49619. Ágar Sangue: Especificação: Crescimento bom (em tensão de CO2). Colônias pequenas e umbilicadas, alfa hemolíticas. Resultado: Adequado Desempenho microbiológico S. pneumoniae ATCC 49619. Ágar Chocolate: N.A   Desempenho microbiológico S. pyogenes ATCC 19615. Ágar Sangue: Especificação:Crescimento bom a excelente. Colônias pequenas, beta hemolíticas. Resultado: Adequado Desempenho microbiológico S. pyogenes ATCC 19615. Ágar Chocolate: Especificação: N.A.  Desempenho microbiológico H. influenzae ATCC 10211. Ágar Sangue:  Especificação: N.A.  Desempenho microbiológico H. influenzae ATCC 10211. Ágar Chocolate: Especificação: Crescimento moderado a bom de colônias médias translúcidas  Resultado: Adequado '
        },
        'PA46': {
            aspecto: 'Ágar Sangue: Especificação: Meio vermelho sangue opalescente. Resultado: Adequado Aspecto final. Ágar Mac Conkey: Especificação: Meio rosado translúcido. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico E. coli ATCC 25922 Ágar Sangue: Especificação: Crescimento excelente de colônias grandes, acinzentadas e brilhantes.  Resultado: Adequado Desempenho microbiológico E. coli ATCC 25922 Ágar Mac Conkey: Especificação: Crescimento excelente de colônias vermelhas com precipitado de bile. Resultado: Adequado Desempenho microbiológico S. aureus ATCC 25923  Ágar Sangue: Especificação: Crescimento excelente de colônias grandes, amareladas e opacas. Resultado: Adequado  Desempenho microbiológico S. aureus ATCC 25923   Ágar Mac Conkey: Especificação: Crescimento ausente. Resultado: Adequado Desempenho microbiológico S. pneumoniae ATCC 49619 Ágar Sangue: Especificação: Crescimento moderado a bom de colônias pequenas alfa-hemolíticas  Desempenho microbiológico S. pneumoniae ATCC 49619 Ágar Mac Conkey:Especificação: N.A.  Desempenho microbiológico S. pyogenes ATCC 19615 Ágar Sangue: Especificação: Crescimento moderado a bom de colônias pequenas beta-hemolíticas Desempenho microbiológico S. pyogenes ATCC 19615 Ágar Mac Conkey: Especificação: N.A.   Desempenho microbiológico S. typhimurium ATCC 14028  Ágar Sangue: Especificação: N.A. Desempenho microbiológico S. typhimurium ATCC 14028 Ágar Mac Conkey: Crescimento excelente de colônias incolores translúcidas  Resultado: Adequado Desempenho microbiológico S. flexneri ATCC 12022 Ágar Sangue: Especificação: N.A.  Desempenho microbiológico S. flexneri ATCC 12022 Ágar Mac Conkey: Especificação: Crescimento excelente de colônias incolores translúcidas.  Resultado: Adequado Desempenho microbiológico E. faecalis ATCC 29212 Ágar Sangue: Especificação: N.A. Desempenho microbiológico E. faecalis ATCC 29212  Ágar Mac Conkey: Especificação: Crescimento ausente. Resultado: Adequado '
        },
        'PA47': {
            aspecto: 'Aspecto final. Ágar Sangue: Especificação: Meio vermelho sangue opalescente. Resultado: Adequado Aspecto final. Ágar Teague:  Especificação: Meio castanho translúcido ligeiramente opalescente. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico E. coli ATCC 25922 Ágar Sangue: Especificação:  Crescimento excelente de colônias grandes, acinzentadas e brilhantes. Resultado: Adequado Desempenho microbiológico E. coli ATCC 25922 Ágar Teague: Especificação: crescimento excelente de colônias púrpura com centro negro e brilho verde metálico. Resultado: Adequado Desempenho microbiológico S. aureus ATCC 25923 Ágar Sangue: Especificação: Crescimento excelente de colônias grandes, amareladas e opacas. Resultado: Adequado Desempenho microbiológico S. aureus ATCC 25923 Ágar Teague:  Especificação: crescimento Ausente. Resultado: Adequado Desempenho microbiológico S. pneumoniae ATCC 49619 Ágar Sangue: Especificação: Crescimento moderado a bom de colônias pequenas alfa-hemolíticas  Desempenho microbiológico S. pneumoniae ATCC 49619  Ágar Teague: Especificação: N.A.   Desempenho microbiológico S. pyogenes ATCC 19615 Ágar Sangue: Especificação: Crescimento moderado a bom de colônias pequenas beta-hemolíticas  Desempenho microbiológico S. pyogenes ATCC 19615 Ágar Teague: N.A.  Desempenho microbiológico S. typhimurium ATCC 14028 Ágar Sangue: Especificação: N.A.  Desempenho microbiológico S. typhimurium ATCC 14028 Ágar Teague: Especificação: Crescimento excelente de colônias incolores translúcidas. Resultado: Adequado'
        },
        'PA48': {
            aspecto: 'Aspecto final Ágar Sangue: Especificação: Meio vermelho sangue opalescente. Resultado: Adequado Aspecto final Ágar Thayer Martin: Especificação: Meio castanho opalescente. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológioco E. coli ATCC 25922  Ágar Sangue: Especificação: Crescimento excelente de colônias grandes,acinzentadas e brilhantes. Resultado: Adequado Desempenho microbiológioco E. coli ATCC 25922  Ágar Thayer Martin: Especificação: Crescimento acentuadamente inibido. Resultado: Adequado Desempenho microbiológioco S. aureus ATCC 259231. Ágar Sangue: Especificação: Crescimento excelente de colônias grandes, amareladas e opacas. Resultado: Adequado Desempenho microbiológioco S. aureus ATCC 259231. Ágar Thayer Martin: Especificação:  N.A  Desempenho microbiológioco S. pneumoniae ATCC 496191 Ágar Sangue:  -  Especificação: Crescimento moderado a bom de colônias pequenas alfa-hemolíticas. Resultado: Adequado Desempenho microbiológioco S. pneumoniae ATCC 496191 Ágar Thayer Martin: Especificação: N.A.  Desempenho microbiológioco S. pyogenes ATCC 196151 Ágar Sangue: Especificação: Crescimento moderado a bom de colônias pequenas beta -hemolíticas. Resultado: Adequado Desempenho microbiológioco S. pyogenes ATCC 196151 Ágar Thayer Martin:  Especificação: N.A.  Desempenho microbiológioco N. meningitidis ATCC 130902. Ágar Sangue: Especificação: N.A.  Desempenho microbiológioco N. meningitidis ATCC 130902 Ágar Thayer Martin: Crescimento moderado a bom de colônias pequenas translúcidas. Resultado: Adequado Desempenho microbiológioco C. albicans ATCC 102312 Ágar Sangue: Especificação: N.A.  Desempenho microbiológioco C. albicans ATCC 102312 Ágar Thayer Martin: Especificação: Crescimento acentuadamente inibido. Resultado: Adequado Desempenho microbiológioco S. epidermidis  ATCC 122282 Ágar Sangue: Especificação: N.A. Desempenho microbiológioco S. epidermidis  ATCC 122282 Ágar Thayer Martin: Especificação: Crescimento acentuadamente inibido. Resultado: Adequado '
        },
        'PA49': {
            aspecto: 'Especificação: Meio âmbar claro a médio, ligeiramente opalescente e sem precipitados. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico E. coli ATCC 25922. Especificação: Crescimento excelente de colônias grandes púrpuras com halo transparente. Resultado: Adequado Desempenho microbiológico P. mirabilis ATCC 25933. Especificação: Crescimento excelente de colônias grandes bege e com halo marrom. Resultado: Adequado Desempenho microbiológico K. pneumoniae ATCC 13883.  Especificação: Crescimento excelente de colônias grandes azul turqueza. Resultado: Adequado Desempenho microbiológico E. faecalis ATCC 29212. Especificação: Crescimento excelente de colônias pequenas azul turqueza. Resultado: Adequado '
        },
        'PA50': {
            aspecto: 'Resultado: Adequado Aspecto final. Ágar CLED: Especificação: Meio verde claro translúcido. Resultado: Adequado Aspecto final. Ágar Mac Conkey: Especificação: Meio rosado translúcido. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico E. coli ATCC 25922 Ágar CLED: Especificação: crescimento bom a excelente de colônias grandes, amarelas. Resultado: Adequado Desempenho microbiológico E. coli ATCC 25922  Ágar Mac Conkey: Especificação: Crescimento excelente de colônias vermelhas com precipitado de bile  Resultado: Adequado. Desempenho microbiológico S. aureus ATCC 25923 Ágar CLED: Especificação: Crescimento bom a excelente de colônias pequenas, amarelas e opacas. Resultado: Adequado  Desempenho microbiológico S. aureus ATCC 25923  Ágar Mac Conkey: Especificação: N.A.   Desempenho microbiológico P. vulgaris ATCC 13315  Ágar CLED: Especificação: Crescimento bom a excelente de colônias azul esverdeadas translúcidas. Resultado: Adequado Desempenho microbiológico P. vulgaris ATCC 13315 Ágar Mac Conkey: Especificação: N.A.   Desempenho microbiológico S. typhimurium ATCC 14028 Ágar CLED: Especificação:  N.A. Desempenho microbiológico S. typhimurium ATCC 14028 Ágar Mac Conkey: Especificação: Crescimento excelente de colônias incolores translúcidas. Resultado: Adequado Desempenho microbiológico S. flexneri ATCC 12022 Ágar CLED: Especificação: N.A. Desempenho microbiológico S. flexneri ATCC 12022 Ágar Mac Conkey: Crescimento excelente de colônias incolores translúcidas.  Resultado: Adequado Desempenho microbiológico E. faecalis ATCC 29212  Ágar CLED: Especificação: N.A.  Desempenho microbiológico E. faecalis ATCC 29212 Ágar Mac Conkey: Crescimento ausente. Resultado: Adequado '
        },
        'PA39': {
            aspecto: 'Especificação: Meio vermelho translúcido, ligeiramente opalescente. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico E. coli ATCC 25922. Especificação: Crescimento escasso ou ausente de colônias amarelas. Resultado: Adequado Desempenho microbiológico S. typhimurium ATCC 14028. Especificação: Crescimento excelente de colônias vermelhas com centro preto. Resultado: Adequado Desempenho microbiológico S. flexneri ATCC 12022.  Especificação: Crescimento excelente de colônias vermelhas translúcidas. Resultado: Adequado Desempenho microbiológico E. faecalis ATCC 29212. Especificação: Crescimento ausente. Resultado: Adequado '
        },
        'PA37': {
            aspecto: 'Especificação: Meio bege claro translúcido. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho micrológico E. coli ATCC 25922. Especificação: Crescimento bom a excelente. Resultado: Adequado Desempenho micrológico S. pyogenes ATCC 19615.  Especificação: Crescimento bom a excelente. Resultado: Adequado Esterilidade. Especificação: Ausência de crescimento. Resultado: Adequado'
        },
        'PA323': {
            aspecto: 'Especificação: Meio sólido, amarelo-claro translúcido a ligeiramente opalescente, sem precipitados. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico K. pneumoniae ATCC 13883 Especificação: Inibição total. Resultado: Adequado. Desempenho microbiológico E. coli ATCC 25922 Especificação: Inibição total. Resultado: Adequado. Desempenho microbiológico K. pneumoniae ATCC 700603 Especificação: Crescimento bom de colônias azuis.  Resultado: Adequado. '
        },
        'PA330': {
            aspecto: 'Especificação: Meio de cor pêssego a vermelho rosado, ligeiramente opalescente. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico S. aureus ATCC 25923. Especificação: Crescimento moderado a bom de colônias amarelas. Resultado: Adequado Desempenho microbiológico S. epidermidis ATCC 12228. Especificação: Crescimento moderado a bom de colônias incolores puntiformes. Resultado: Adequado Desempenho microbiológico P. mirabilis ATCC 25933. Especificação: Crescimento acentuadamente inibido. Resultado: Adequado'
        },
        'PA331': {
            aspecto: 'Especificação: Meio vermelho alaranjado, ligeiramente opalescente. Resultado: Adequado Observação: este ágar pode apresentar alguns precipitados/cristais, que em nada interferem no seu desempenho microbiológico.',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico E. coli ATCC 25922. Especificação: Crescimento escasso ou ausente de colônias amarelas. Resultado: Adequado Desempenho microbiológico S. typhimurium ATCC 14028. Especificação: Crescimento excelente de colônias incolores com centro preto.  Resultado: Adequado Desempenho microbiológico S. flexneri ATCC 12022. Especificação: Crescimento excelente de colônias incolores translúcidas. Resultado: Adequado Desempenho microbiológico E. faecalis ATCC 29212. Especificação: Crescimento ausente. Resultado: Adequado'
        },
        'PA332': {
            aspecto: 'Especificação: Meio castanho opalescente. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico N. meningitidis ATCC 13090. Especificação: Crescimento moderado a bom de colônias pequenas translúcidas. Resultado: Adequado Desempenho microbiológico S. epidermidis ATCC 12228.  Especificação: Crescimento acentuadamente inibido. Resultado: Adequado Desempenho microbiológico E. coli ATCC 25922. Especificação: Crescimento acentuadamente inibido. Resultado: Adequado Desempenho microbiológico C. albicans ATCC 10231. Especificação: Crescimento acentuadamente inibido. Resultado: Adequado '
        },
        'PA344': {
            aspecto: 'Especificação: Meio verde claro translúcido, ligeiramente opalescente. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico E. coli ATCC 25922. Especificação: Crescimento bom a excelente de colônias amarelas grandes. Resultado: Adequado Desempenho microbiológico S. aureus ATCC 25923. Especificação: Crescimento bom a excelente de colônias amarelas, pequenas e opacas. Resultado: Adequado Desempenho microbiológico P. vulgaris ATCC 13315.  Especificação: Crescimento bom a excelente de colônias azul esverdeadas, translúcidas. Resultado: Adequado'
        },
        'PA319': {
            aspecto: 'Especificação: Meio sólido, amarelo claro opalescente, sem precipitados. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico S. aureus ATCC 25923 Especificação: Inibição total. Resultado: Adequado Desempenho microbiológico E. faecalis ATCC 29212 Especificação: Inibição total. Resultado: Adequado Desempenho microbiológico E. coli ATCC 25922 Especificação: Inibição total. Resultado: Adequado Desempenho microbiológico S. aureus ATCC 33591 Especificação: Crescimento bom de colônias  verde-azuladas, de tonalidade clara. Resultado: Adequado'
        },
        'PA321': {
            aspecto: 'Especificação: Meio sólido, vermelho opaco podendo apresentar pequenos precipitados. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico S. aureus ATCC 25923. Especificação: Inibição total. Resultado: Adequado Desempenho microbiológico E. faecalis ATCC 29212. Especificação: Inibição total. Resultado: Adequado Desempenho microbiológico E. faecalis ATCC 51299. Especificação: Crescimento bom de colônias azuis características. Resultado: Adequado Desempenho microbiológico S. faecium ATCC 700221. Especificação: Crescimento bom de colônias  verdes características com fundo amarelo. Resultado: Adequado'
        },
        'PA325': {
            aspecto: 'Especificação: Meio sólido, âmbar claro, ligeiramente opalescente e sem precipitados. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico E. faecalis ATCC 29212. Especificação: Inibição total. Resultado: Adequado Desempenho microbiológico E. coli ATCC 25922. Especificação: Inibição total. Resultado: Adequado Desempenho microbiológico K. pneumoniae ATCC 13883. Especificação: Inibição total. Resultado: Adequado Desempenho microbiológico K. pneumoniae ATCC BAA-1705. Especificação: Crescimento bom de colônias azuis. Resultado: Adequado Desempenho microbiológico C. parasilosis ATCC 22019. Especificação: Inibição total. Resultado: Adequado'
        },
        'PA328': {
            aspecto: 'Especificação: Meio âmbar claro, levemente opalescente. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico C. albicans ATCC 10231. Especificação: Crescimento bom de colônias verde. Resultado: Adequado Desempenho microbiológico C. tropicalis INCQS 40281. Especificação: Crescimento bom de colônias azuis a verde-bandeira. Resultado: Adequado Desempenho microbiológico C. parasilosis ATCC 22019. Especificação: Crescimento bom de colônias branco brilhosa a roxa. Resultado: Adequado '
        },
        'PA329': {
            aspecto: 'Especificação: Meio âmbar claro a médio, ligeiramente opalescente e sem precipitados. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico E. coli ATCC 25922. Especificação: Crescimento excelente de colônias transparentes rosa-escuras a púrpuras com ou sem halos no meio ao redor. Resultado: Adequado Desempenho microbiológico P. mirabilis ATCC 25933. Especificação: Crescimento excelente de colônias cor palha a bege com halo marrom. Resultado: Adequado Desempenho microbiológico K. pneumoniae ATCC 13883. Especificação:Crescimento excelente de colônias azul-médio a escuro. Resultado: Adequado Desempenho microbiológico E. faecalis ATCC 29212. Especificação: Crescimento excelente de colônias pequenas verde-azuladas. Resultado: Adequado '
        },
        'PA07': {
            aspecto: 'Especificação: Meio incolor opalescente. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico P. aeruginosa ATCC 27853 -  Especificação: Crescimento bom a excelente com pigmento fluorescente   Resultado: Adequado Desempenho microbiológico E. coli ATCC 25922 -  Especificação: Crescimento inibido   Resultado: Adequado Desempenho microbiológico S. maltophilia ATCC 13637 -  Especificação: Crescimento inibido   Resultado: Adequado '
        },
        'PA14': {
            aspecto: 'Especificação: Meio rosado translúcido, ligeiramente opalescente. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico E. coli ATCC 25922 - Especificação: Crescimento excelente de colônias vermelhas com precipitado de bile - Resultado: Adequado Desempenho microbiológico P. mirabilis ATCC 25933 - Especificação: Crescimento excelente de colônias incolores, sem swarming - Resultado: Adequado Desempenho microbiológico  E. faecalis ATCC 29212 - Especificação:Crescimento ausente - Resultado: Adequado '
        },
        'PA13': {
            aspecto: 'Especificação: Meio âmbar claro, ligeiramente opalescente. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico E. coli ATCC 8739 - Especificação: Crescimento bom a excelente. Resultado: Adequado Desempenho microbiológico S. aureus ATCC 6538 - Especificação: Crescimento bom a excelente. Resultado: Adequado '
        },
        'PA16': {
            aspecto: 'Especificação: Meio de cor pêssego a vermelho rosado, ligeiramente opalescente. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico S. aureus ATCC 25923  -  Especificação: Crescimento moderado a bom de colônias amarelas. Resultado: Adequado Desempenho microbiológico S. epidermidis ATCC 12228 -  Especificação: Crescimento moderado a bom de colônias incolores puntiformes. Resultado: Adequado Desempenho microbiológico P. mirabilis ATCC 25933 -  Especificação: Crescimento acentuadamente inibido. Resultado: Adequado '
        },
        'PA24': {
            aspecto: 'Especificação: Meio âmbar claro, ligeiramente opalescente. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico C. albicans ATCC 10231. Especificação: Crescimento bom a excelente de colônias brancas. Resultado: Adequado Desempenho microbiológico A. niger ATCC 16404. Especificação: Crescimento bom a excelente de esporos pretos e contorno amarelado. Resultado: Adequado'
        },
        'PA25': {
            aspecto: 'Especificação: Meio âmbar claro, ligeiramente opalescente. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico C. albicans ATCC 10231. Especifciação: Crescimento bom a excelente de colônias brancas. Resultado: Adequado Desempenho microbiológico A. brasiliensis ATCC 16404. Especifciação: Crescimento bom a excelente de esporos pretos e contorno amarelado. Resultado: Adequado  '
        },
        'PA26': {
            aspecto: 'Especificação: Meio âmbar claro, ligeiramente opalescente. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico C. albicans ATCC 10231. Especificação: Crescimento bom a excelente de colônias brancas. Resultado: Adequado Desempenho microbiológico A. niger ATCC 16404. Especificação: Crescimento bom a excelente de esporos pretos e contorno amarelado. Resultado: Adequado  '
        },
        'PA22': {
            aspecto: 'Especificação: Meio âmbar claro translúcido e ligeiramente opalescente. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho Microbiológio E. coli ATCC 25922 -  Especificação: Crescimento bom a excelente. Resultado: Adequado Desempenho Microbiológio S. aureus ATCC 25923 -  Especificação: Crescimento bom a excelente. Resultado: Adequado '
        },
        'PA20': {
            aspecto: 'Especificação: Meio âmbar claro, ligeiramente opalescente. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico C. albicans ATCC 10231 -  Especificação: Crescimento bom a excelente de colônias brancas cremosas. Resultado: Adequado Desempenho microbiológico E. coli ATCC 25922 -  Especificação: Crescimento inibido. Resultado: Adequado Desempenho microbiológico A. brasiliensis ATCC 16404 -  Especificação: Crescimento inibido. Resultado: Adequado'
        },
        'PA23': {
            aspecto: 'Especificação: Meio sólido âmbar claro, ligeiramente opalescente. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico C. albicans ATCC 10231 -  Especificação: Crescimento bom a excelente de colônias brancas cremosas  Resultado: Adequado Desempenho microbiológico E. coli ATCC 25922 -  Especificação: Crescimento inibido   Resultado: Adequado Desempenho microbiológico A. niger ATCC 16404 -  Especificação: Crescimento bom a excelente de colônias cotonosas  Resultado: Adequado '
        },
        'PA19': {
            aspecto: 'Especificação: Meio bege claro translúcido, ligeiramente opalescente. Resultado: Adequado. Espessura do ágar - Especificação: 4 mm ± 0,5. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico P. aeruginosa ATCC 27853  Especificação: Crescimento excelente de colônias esverdeadas. Resultado: Adequado  Desempenho microbiológico E. faecalis ATCC 29212  Especificação: Crescimento excelente de colônias puntiformes. Resultado: Adequado  Conteúdo de Cátions (Testado com P. aeruginosa ATCC 27853 padronizada em 108 UFC/mL e discos com 10 µg) -  Especificação: Amicacina – diâmetro da zona de inibição entre 20 e 26 mm / Gentamicina – diâmetro da zona de inibição entre 17 e 23 mm / Tobramicina – diâmetro da zona de inibição entre  20 e 26 mm. Resultado: Adequado  Conteúdo de Timidina(Testado com E. faecalis ATCC 29212 padronizada em 108 UFC/mL e disco com 25 µg)  -  Especificação: Sulfametoxazol - Trimetoprim – diâmetro da zona de inibição entre 26 e 34 mm. Resultado: Adequado  '
        },
        'PA15': {
            aspecto: 'Especificação: Meio rosado translúcido, ligeiramente opalescente. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico E. coli ATCC 25922. Especificação: Crescimento excelente de colônias vermelhas com precipitado de bile. Resultado: Adequado Desempenho microbiológico P. mirabilis ATCC 12453. Especificação: Crescimento excelente de colônias incolores, sem swarming. Resultado: Adequado Desempenho microbiológico E. faecalis ATCC 29212. Especificação: Crescimento ausente. Resultado: Adequado '
        },
        'PA17': {
            aspecto: 'Especificação: Meio de cor pêssego a vermelho rosado, ligeiramente opalescente. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico S. aureus ATCC 25923 -  Especificação: Crescimento moderado a bom de colônias amarelas  Resultado: Adequado  Desempenho microbiológico S. epidermidis ATCC 12228 -  Especificação: Crescimento moderado a bom de colônias incolores puntiformes  Resultado: Adequado  Desempenho microbiológico P. mirabilis ATCC 25933 -  Especificação: Crescimento acentuadamente inibido  Resultado: Adequado  '
        },
        'PA12': {
            aspecto: 'Especificação: Meio verde translúcido, ligeiramente opalescente. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico E. coli ATCC 25922 -  Especificação: Crescimento escasso ou ausente de colônias amarelas.  Resultado: Adequado Desempenho microbiológico S. typhimurium ATCC 14028 -  Especificação: Crescimento excelente de colônias verde-azuladas com centro preto. Resultado: Adequado Desempenho microbiológico S. flexneri ATCC 12022 -  Especificação: Crescimento excelente de colônias verdes com centro verde-azulado.  Resultado: Adequado Desempenho microbiológico E. faecalis ATCC 29212 -  Especificação: Crescimento ausente.  Resultado: Adequado '
        },
        'PA08': {
            aspecto: 'Especificação: Meio incolor opalescente. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico P. aeruginosa ATCC 27853 -  Especificação: Crescimento bom a excelente com pigmento fluorescente   Resultado: Adequado Desempenho microbiológico E. coli ATCC 25922 -  Especificação: Crescimento inibido   Resultado: Adequado Desempenho microbiológico S. maltophilia ATCC 13637 -  Especificação: Crescimento inibido   Resultado: Adequado '
        },
        'PA09': {
            aspecto: 'Especificação: Meio castanho opalescente. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico H. influenzae ATCC 10211 -  Especificação: Crescimento moderado a bom de colônias médias translúcidas   Resultado: Adequado '
        },
        'PA10': {
            aspecto: 'Especificação: Meio verde-claro translúcido, ligeiramente opalescente. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico E. coli ATCC 25922 -  Especificação: Crescimento bom a excelente de colônias amarelas grandes.  Resultado: Adequado Desempenho microbiológico S. aureus ATCC 25923 -  Especificação: Crescimento bom a excelente de colônias amarelas, pequenas e opacas  Resultado: Adequado Desempenho microbiológico P. vulgaris ATCC 13315 -  Especificação: Crescimento bom a excelente de colônias azul esverdeadas, translúcidas  Resultado: Adequado '
        },
        'PA02': {
            aspecto: 'Especificação: Meio amarelo ovo opalescente. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico S. aureus ATCC 25923 - Especificação:  Crescimento excelente de colônias negras com halo de lecitinase.  Resultado: Adequado    Desempenho microbiológico S. epidermidis ATCC 12228 - Especificação:   Crescimento ausente a variável de colônias negras sem halo de lecitinase- Resultado: Adequado                                       Desempenho microbiológico E. coli ATCC 25922 - Especificação: Ausência de crescimento - Resultado: Adequado                            '
        },
        'PA03': {
            aspecto: 'Especificação: Meio âmbar claro, ligeiramente opalescente. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico C. albicans ATCC 10231 - Especificação: Crescimento bom a excelente de colônias brancas cremosas   Resultado: Adequado Desempenho microbiológico A. brasiliensis ATCC 16404 - Especificação: Crescimento bom a excelente de colônias com centro negro e periferia branco-amarelada  Resultado: Adequado '
        },
        'PA04': {
            aspecto: 'Especificação: Meio âmbar claro translúcido, ligeiramente opalescente. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho Microbiológico E. faecalis ATCC 29212 - Especificação: Crescimento inibido  Resultado: Adequado Desempenho Microbiológico E. faecalis ATCC 51299  - Especificação: Crescimento bom a excelente de colônias puntiformes Resultado: Adequado '
        },
        'PA06': {
            aspecto: 'Especificação: Meio âmbar claro translúcido, ligeiramente opalescente. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico E. faecalis ATCC 29212 -  Especificação: Crescimento inibido.  Resultado: Adequado Desempenho microbiológico E. faecalis ATCC 51299 -  Especificação: Crescimento bom a excelente de colônias puntiformes com enegrecimento do ágar.  Resultado: Adequado'
        },
        'PA11': {
            aspecto: 'Especificação: Meio âmbar claro, ligeiramente opalescente. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico S. aureus ATCC 25923 -  Especificação:  Zona clara ao redor da estria, após inundar a placa com HCl 1 N.  Resultado: Adequado Desempenho microbiológico S. epidermidis ATCC 12228 -  Especificação: Ausência de zona clara ao redor da estria, após inundar a placa com HCl 1 N. Resultado: Adequado'
        },
        'PA33': {
            aspecto: 'Especificação: Meio vermelho alaranjado, ligeiramente opalescente. Resultado: Adequado. Observação: este ágar pode apresentar alguns precipitados/cristais, que em nada interferem no seu desempenho microbiológico.',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico E. coli ATCC 25922. Especificação: Crescimento escasso ou ausente de colônias amarelas. Resultado: Adequado Desempenho microbiológico S. typhimurium ATCC 14028. Especificação: Crescimento excelente de colônias incolores com centro preto. Resultado: Adequado Desempenho microbiológico S. flexneri ATCC 12022. Especificação: Crescimento excelente de colônias incolores translúcidas. Resultado: Adequado Desempenho microbiológico E. faecalis ATCC 29212. Especificação: Crescimento ausente. Resultado: Adequado'
        },
        'PA322': {
            aspecto: 'Especificação: Meio sólido, amarelo-claro translúcido a ligeiramente opalescente, sem precipitados. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico K. pneumoniae ATCC 13883 Especificação: Inibição total. Resultado: Adequado. Desempenho microbiológico E. coli ATCC 25922 Especificação: Inibição total. Resultado: Adequado. Desempenho microbiológico K. pneumoniae ATCC 700603  Especificação: Crescimento bom de colônias azuis.  Resultado: Adequado. Esterilidade. Especificação: Ausência de crescimento. Resultado: Adequado.'
        },
        'PA32': {
            aspecto: 'Especificação: Meio vermelho sangue opalescente. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico E. coli ATCC 25922. Especificação: Crescimento inibido. Resultado: Adequado Desempenho microbiológico E. faecalis ATCC 29212. Especificação: Crescimento bom de colônias puntiformes.  Resultado: Adequado '
        },
        'PA320': {
            aspecto: 'Especificação: Meio sólido, vermelho opaco podendo apresentar pequenos precipitados. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico S. aureus ATCC 25923 Especificação: Inibição total. Resultado: Adequado Desempenho microbiológico E. faecalis ATCC 29212 Especificação: Inibição total. Resultado: Adequado Desempenho microbiológico E. faecalis ATCC 51299 Especificação: Crescimento bom de colônias azuis características. Resultado: Adequado Desempenho microbiológico S. faecium ATCC 700221 Especificação: Crescimento bom de colônias  verdes características com fundo amarelo. Resultado: Adequado'
        },
        'PA345': {
            aspecto: 'Especificação: Meio rosa brilhante, ligeiramente opalescente. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico Aspergillus brasiliensis ATCC 16404 Inoculação Pontual. Especificação: Crescimento, diâmetro da colônia reduzido. Resultado: Adequado Desempenho microbiológico Bacillus subtilis ATCC 6633 Inóculo ~ 1000 UFC. Especificação: Crescimento inibido. Resultado: Adequado Desempenho microbiológico Candida albicans ATCC 10231 Inóculo ~ 10 - 300 UFC. Especificação: Crescimento, pode apresentar recuperação reduzida. Resultado: Adequado '
        },
        'PA346': {
            aspecto: 'Especificação: Meio laranja amarelado a rosa alaranjado, ligeiramente opalescente. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico Bacillus cereus ATCC 11778 Especificação: Crescimento; colônias rosas com halo de lecitinase. Resultado: Adequado Desempenho microbiológico Bacillus subtilis ATCC 6633 Especificação: Crescimento; colônias translúcidas, cor de ágar. Resultado: Adequado Desempenho microbiológico Escherichia coli ATCC 8739 Especificação: Crescimento notavelmente oprimido a inibido; colônias amarelas, se recuperadas. Resultado: Adequado'
        },
        'PA34': {
            aspecto: 'Especificação: Meio púrpura escuro, ligeiramente opalescente. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico E. coli ATCC 25922. Especificação: Crescimento excelente de colônias púrpura com centro negro e brilho verde metálico. Resultado: Adequado Desempenho microbiológico S. typhimurium ATCC 14028. Especificação: Crescimento excelente de colônias incolores translúcidas. Resultado: Adequado Desempenho microbiológico S. aureus ATCC 25923. Especificação: Crescimento ausente. Resultado: Adequado Esterilidade. Especificação: Ausência de crescimento. Resultado: Adequado'
        },
        'PA318': {
            aspecto: 'Especificação: Meio sólido, amarelo claro opalescente, sem precipitados. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico S. aureus ATCC 25923 Especificação: Inibição total. Resultado: Adequado Desempenho microbiológico E. faecalis ATCC 29212 Especificação: Inibição total. Resultado: Adequado Desempenho microbiológico E. coli ATCC 25922 Especificação: Inibição total. Resultado: Adequado Desempenho microbiológico S. aureus ATCC 33591 Especificação: Crescimento bom de colônias  verde-azuladas, de tonalidade clara. Resultado: Adequado '
        },
        'PA341': {
            aspecto: 'Especificação: Meio vermelho sangue opalescente. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico S. pneumoniae ATCC 49619. Especificação: Crescimento bom de colônias  Alfa-hemolíticas. Resultado: Adequado Desempenho microbiológico H. influenzae ATCC 49766. Especificação: Crescimento bom de colônias gama-hemolíticas. Resultado: Adequado '
        },
        'PA324': {
            aspecto: 'Especificação: Meio sólido, âmbar claro, ligeiramente opalescente e sem precipitados. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico E. faecalis ATCC 29212 Especificação: Inibição total. Resultado: Adequado Desempenho microbiológico E. coli ATCC 25922 Especificação: Inibição total. Resultado: Adequado Desempenho microbiológico K. pneumoniae ATCC 13883 Especificação: Inibição total. Resultado: Adequado Desempenho microbiológico K. pneumoniae ATCC BAA-1705 Especificação: Crescimento bom de colônias azuis. Resultado: Adequado Desempenho microbiológico C. parasilosis ATCC 22019 Especificação: Inibição total. Resultado: Adequado '
        },
        'PA30': {
            aspecto: 'Especificação: Meio vermelho sangue opalescente. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico E. coli ATCC 25922. Especificação: Crescimento excelente de colônias grandes, acinzentadas e brilhantes. Resultado: Adequado Desempenho microbiológico S. aureus ATCC 25923.  Especificação: Crescimento excelente de colônias grandes, amareladas e opacas. Resultado: Adequado Desempenho microbiológico S. pneumoniae ATCC 49619. Especificação: Crescimento moderado a bom de colônias pequenas alfa -hemolíticas. Resultado: Adequado Desempenho microbiológico S. pyogenes ATCC 19615.  Especificação: Crescimento moderado a bom de colônias pequenas beta -hemolíticas. Resultado: Adequado '
        },
        'PA308': {
            aspecto: 'Especificação: Meio âmbar claro, levemente opalescente. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico C. albicans ATCC 10231. Especificação: Crescimento bom de colônias verde. Resultado: Adequado Desempenho microbiológico C. tropicalis INCQS 40281. Especificação: Crescimento bom de colônias azuis a verde-bandeira. Resultado: Adequado Desempenho microbiológico C. parasilosis ATCC 22019. Especificação: Crescimento bom de colônias branco brilhosa a roxa. Resultado: Adequado '
        },
        'PA31': {
            aspecto: 'Especificação: Meio vermelho vivo/sangue opalescente. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico E. coli ATCC 25922 ou similar. Especificação: Crescimento excelente de colônias grandes, acinzentadas e brilhantes. Resultado: Adequado Desempenho microbiológico S. aureus ATCC 25923 ou similar.  Especificação: Crescimento excelente de colônias grandes, amareladas e opacas. Resultado: Adequado Desempenho microbiológico S. pneumoniae ATCC 49619 ou similar. Especificação: Crescimento moderado a bom de colônias pequenas alfa-hemolíticas. Resultado: Adequado Desempenho microbiológico S. pyogenes ATCC 19615 ou similar. Especificação: Crescimento moderado a bom de colônias pequenas beta-hemolíticas. Resultado: Adequado '
        },
        'PA29': {
            aspecto: 'Especificação: Meio vermelho sangue opalescente. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico E. coli ATCC 25922. Especificação: Crescimento excelente de colônias grandes, acinzentadas e brilhantes. Resultado: Adequado Desempenho microbiológico S. aureus ATCC 25923.  Especificação: Crescimento excelente de colônias grandes, amareladas e opacas. Resultado: Adequado Desempenho microbiológico S. pneumoniae ATCC 49619.  Especificação: Crescimento moderado a bom de colônias pequenas Alfa -hemolíticas. Resultado: Adequado Desempenho microbiológico S. pyogenes ATCC 19615.  Especificação: Crescimento moderado a bom de colônias pequenas Beta -hemolíticas. Resultado: Adequado'
        },
        'PA27': {
            aspecto: 'Especificação: Meio vermelho sangue opalescente. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico E. coli ATCC 25922. Especificação: Crescimento excelente de colônias grandes, acinzentadas e brilhantes. Resultado: Adequado Desempenho microbiológico S. aureus ATCC 25923.  Especificação: Crescimento excelente de colônias grandes, amareladas e opacas.  Resultado: Adequado Desempenho microbiológico S. pneumoniae ATCC 49619.  Especificação: Crescimento moderado a bom de colônias pequenas -hemolíticas.  Resultado: Adequado Desempenho microbiológico S. pyogenes ATCC 19615.  Especificação: Crescimento moderado a bom de colônias pequenas -hemolíticas.  Resultado: Adequado  Esterilidade.  Especificação: Ausência de crescimento.  Resultado: Adequado'
        },
        'PA36': {
            aspecto: 'Especificação: Meio bege claro translúcido. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico E. coli ATCC 25922. Especificação: Crescimento bom a excelente. Resultado: Adequado Desempenho microbiológico S. pyogenes ATCC 19615. Especificação: Crescimento bom a excelente. Resultado: Adequado '
        },
        'PA387': {
            aspecto: 'Especificação: Meio vermelho sangue translúcido. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico N. meningitidis ATCC 13090. Especificação: Crescimento moderado a bom de colônias brancas acizentadas. Resultado: Adequado Desempenho microbiológico H. influenzae ATCC 10211. Especificação: Crescimento moderado a bom de colônias médias translúcidas. Resultado: Adequado Esterilidade. Especificação: Ausência de crescimento. Resultado: Adequado'
        },
        'PA38': {
            aspecto: 'Especificação: Meio marrom alaranjado, ligeiramente opalescente. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico E. coli ATCC 25922.  Especificação: Crescimento ausente ou acentuadamente inibido. Resultado: Adequado Desempenho microbiológico S. typhimurium ATCC 14028.  Especificação: Crescimento bom de colônias rosadas ou brancas e centro vermelho. Resultado: Adequado Desempenho microbiológico S. aureus ATCC 25923.  Especificação: Crescimento ausente ou acentuadamente inibido. Resultado: Adequado '
        },
        'PA380': {
            aspecto: 'Especificação: Meio vermelho escuro opalescente. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico S. aureus ATCC 25923 Especificação: Crescimento conforme de colônias cinzas ou pretas. Resultado: Adequado Desempenho microbiológico  C. diphtheriae ATCC 13812 Especificação: Crescimento conforme de colônias cinza ou preta. Resultado: Adequado Desempenho microbiológico S. epidermidis ATCC 12228 Especificação: Crescimento nulo ou parcial. Resultado: Adequado Desempenho microbiológico  E. coli ATCC 25922 Especificação: Inibição total. Resultado: Adequado '
        },
        'PA348': {
            aspecto: 'Especificação: Meio bege a levemente rosado translúcido e ligeiramente opalescente. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico. E. coli ATCC 25922 Especificação: Crescimento ótimo de colônias vermelhas/rosadas. Resultado: Adequado Desempenho microbiológico S. aureus ATCC 25923 Especificação: Crescimento bom de colônias vermelhas/rosadas. Resultado: Adequado '
        },
        'PA349': {
            aspecto: 'Especificação: Meio âmbar claro a amarelado, ligeiramente opalescente. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico L. monocytogenes ATCC 7644 Especificação: Crescimento de colônias azul esverdeadas com halo opaco ao seu redor. Resultado: Adequado Desempenho microbiológico L. innocua ATCC 33090 Especificação: Crescimento de colônias azul esverdeadas sem halo opaco ao seu redor. Resultado: Adequado Desempenho microbiológico E. coli ATCC 25922 Especificação: Inibição total. Resultado: Adequado Desempenho microbiológico  E. faecalis ATCC 29212 Especificação: Inibição total. Resultado: Adequado '
        },
        'PA35': {
            aspecto: 'Especificação: Meio castanho opalescente. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico N. meningitidis ATCC 13090. Especificação: Crescimento moderado a bom de colônias pequenas translúcidas. Resultado: Adequado Desempenho microbiológico S. epidermidis ATCC 12228. Especificação: Crescimento acentuadamente inibido. Resultado: Adequado Desempenho microbiológico C. albicans ATCC 10231. Especificação: Crescimento acentuadamente inibido. Resultado: Adequado Desempenho microbiológico E. coli ATCC 25922. Especificação: Crescimento acentuadamente inibido. Resultado: Adequado'
        },
        'PA350': {
            aspecto: 'Especificação: Meio em gel amarelo-claro ligeiramente opalescente. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico Staphylococcus aureus ATCC 25923. Especificação: Crescimento inibido. Resultado: Adequado Desempenho microbiológico Escherichia coli ATCC 25922  Especificação: Crescimento bom de colônias verde-azuladas. Resultado: Adequado Desempenho microbiológico Salmonella typhimurium ATCC 14028 Especificação: Crescimento bom de colônias incolores. Resultado: Adequado Esterilidade. Especificação: Ausência de crescimento. Resultado: Adequado'
        },
        'PA395': {
            aspecto: 'Especificação: Meio sólido, amarelo a âmbar claro opalescente com matiz cinza, com precipitados. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico  E. faecalis ATCC 29212  Especificação: Crescimento de colônia azul intenso com halo azul intenso. Resultado: Adequado Desempenho microbiológico E. coli ATCC 25922 Especificação: Inibição total. Resultado: Adequado Desempenho microbiológico S. aureus ATCC 25923 Especificação: Inibição total. Resultado: Adequado Desempenho microbiológico  S. agalactiae ATCC  13813 Especificação: Crescimento bom de colônia branca a azul-claro com halo azul-claro a médio. Resultado: Adequado '
        },
        'PA40': {
            aspecto: 'Especificação: Meio vermelho translúcido, ligeiramente opalescente. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico E. coli ATCC 25922.  Especificação: Crescimento escasso ou ausente de colônias amarelas. Resultado: Adequado Desempenho microbiológico S. typhimurium ATCC 14028. Especificação: Crescimento excelente de colônias vermelhas com centro preto. Resultado: Adequado Desempenho microbiológico S. flexneri ATCC 12022. Especificação: Crescimento excelente de colônias vermelhas translúcidas. Resultado: Adequado Desempenho microbiológico E. faecalis ATCC 29212. Especificação: Crescimento ausente. Resultado: Adequado '
        },
        'PA406': {
            aspecto: 'Especificação: Meio âmbar claro translúcido, ligeiramente opalescente. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho Microbiológico S. pyogenes ATCC 19615 - Especificação: Crescimento bom de colônias brancas características  Resultado: Adequado Desempenho Microbiológico S. pneumoniae ATCC 49619  - Especificação: Crescimento bom de colônias brancas características Resultado: Adequado Esterilidade -  Especificação: Ausência de crescimento  Resultado: Adequado'
        },
        'PA41': {
            aspecto: 'Especificação: Meio âmbar claro a médio, ligeiramente opalescente e sem precipitados. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico E. coli ATCC 25922. Especificação: Crescimento excelente de colônias transparentes rosa-escuras a púrpuras com ou sem halos no meio ao redor.   Resultado: Adequado Desempenho microbiológico P. mirabilis ATCC 25933. Especificação: Crescimento excelente de colônias cor palha a bege com halo marrom. Resultado: Adequado Desempenho microbiológico K. pneumoniae ATCC 13883. Especificação: Crescimento excelente de colônias azul-médio a escuro. Resultado: Adequado Desempenho microbiológico E. faecalis ATCC 29212. Especificação: Crescimento excelente de colônias pequenas verde-azuladas. Resultado: Adequado '
        },
        'PA28': {
            aspecto: 'Especificação: Meio vermelho sangue opalescente. Resultado: Adequado. Espessura do ágar. Especificação: 4 mm. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico E. coli ATCC 259222. Especificação: Crescimento excelente de colônias grandes brilhantes. Resultado: Adequado Desempenho microbiológico S. aureus ATCC 259232. Especificação: Crescimento excelente de colônias médias e opacas. Resultado: Adequado Desempenho microbiológico P. aeruginosa ATCC 278532. Especificação: Crescimento excelente de colônias esverdeadas. Resultado: Adequado Desempenho microbiológico E. faecalis ATCC 292122. Especificação: Crescimento excelente de colônias puntiformes. Resultado: Adequado Conteúdo de Cátions (Testado com P. aeruginosa ATCC 27853 padronizada em 108 UFC/mL e discos com 10 µg). Especificação: Amicacina – diâmetro da zona de inibição entre 18 e 26 mm/ Gentamicina – diâmetro da zona de inibição entre 16 e 21 mm/ Tobramicina – diâmetro da zona de inibição entre  19 e 25 mm. Resultado: Adequado Conteúdo de Timidina (Testado com E. faecalis ATCC 29212 padronizada em 100 UFC/mL e disco com 25 µg).  Especificação: Sulfametoxazol-Trimetoprim – diâmetro da zona de inibição acima de 20 mm, livre de colônias puntiformes. Resultado: Adequado '
        },
        'PA340': {
            aspecto: 'Especificação: Meio vermelho sangue opalescente. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico S. pneumoniae ATCC 49619. Especificação: Crescimento bom de colônias  Alfa-hemolíticas. Resultado: Adequado Desempenho microbiológico H. influenzae ATCC 49766. Especificação: Crescimento bom de colônias gama-hemolíticas. Resultado: Adequado Esterilidade -  Especificação: Ausência de crescimento. Resultado: Adequado'
        },
        'PA347': {
            aspecto: 'Especificação: Meio laranja amarelado a rosa alaranjado, ligeiramente opalescente. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico Bacillus cereus ATCC 11778 Especificação: Crescimento; colônias rosas com halo de lecitinase. Resultado: Adequado Desempenho microbiológico Bacillus subtilis ATCC 6633 Especificação: Crescimento; colônias translúcidas, cor de ágar. Resultado: Adequado Desempenho microbiológico Escherichia coli ATCC 8739 Especificação: Crescimento notavelmente oprimido a inibido; colônias amarelas, se recuperadas. Resultado: Adequado Desempenho microbiológico Staphylococcus aureus ATCC 6538 Especificação: Crescimento; colônias amarelas. Resultado: Adequado '
        },
        'PA312': {
            aspecto: 'Especificação: Meio vermelho translúcido, ligeiramente opalescente. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico E. coli ATCC 25922. Especificação: Crescimento escasso ou ausente de colônias amarelas. Resultado Adequado.  Desempenho microbiológico S. typhimurium ATCC 14028. Especificação: Crescimento excelente de colônias vermelhas com centro preto. Resultado Adequado.  Desempenho microbiológico S. flexneri ATCC 12022. Especificação: Crescimento excelente de colônias vermelhas translúcidas. Resultado Adequado.  Desempenho microbiológico E. faecalis ATCC 29212. Especificação: Crescimento ausente. Resultado Adequado.  '
        },
        'PA18': {
            aspecto: 'Especificação: Meio bege claro translúcido, ligeiramente opalescente. Resultado: Adequado. Espessura do ágar - Especificação: 4 mm ± 0,5. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico P. aeruginosa ATCC 27853 * -  Especificação: Crescimento excelente de colônias esverdeadas  Resultado: Adequado  Desempenho microbiológico E. faecalis ATCC 29212 * -  Especificação: Crescimento excelente de colônias puntiformes  Resultado: Adequado  Conteúdo de Cátions (Testado com P. aeruginosa ATCC 27853 padronizada em 108 UFC/mL e discos com 10 µg)-  Especificação: Amicacina – diâmetro da zona de inibição entre 20 e 26 mm / Gentamicina – diâmetro da zona de inibição entre 17 e 23 mm / Tobramicina – diâmetro da zona de inibição entre  20 e 26 mm  Resultado: Adequado  Conteúdo de Timidina(Testado com E. faecalis ATCC 29212 padronizada em 108 UFC/mL e disco com 25 µg) -  Especificação: Sulfametoxazol - Trimetoprim – diâmetro da zona de inibição entre 26 e 34 mm Resultado: Adequado  Esterilidade -  Especificação: Ausência de crescimento  Resultado: Adequado'
        },
        'PA338': {
            aspecto: 'Ágar Sangue: Especificação: Meio vermelho sangue opalescente. Resultado: Adequado. Ágar Mac Conkey: Especificação: Meio rosado translúcido. Resultado: Adequado. Ágar Manitol: Especificação: Meio vermelho translúcido, ligeiramente opalescente. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Ágar Sangue Desempenho microbiológico  E. coli ATCC 25922 Especificação: Crescimento excelente de colônias grandes, acinzentadas e brilhantes. Resultado: Adequado Desempenho microbiológico S. aureus ATCC 25923 Especificação: Crescimento excelente de colônias grandes, amareladas e opacas. Resultado: Adequado Desempenho microbiológico S. pneumoniae ATCC 49619 Especificação: Crescimento moderado a bom de colônias pequenas α hemolíticas. Resultado: Adequado Desempenho microbiológico S. pyogenes ATCC 19615 Especificação: Crescimento moderado a bom de colônias pequenas β hemolíticas. Resultado: Adequado  Ágar Mac Conkey Desempenho microbiológico E. coli ATCC 25922 Especificação: Crescimento excelente de colônias vermelhas com precipitado de bile. Resultado: Adequado Desempenho microbiológico P. mirabilis ATCC 12453 Especificação: Crescimento excelente de colônias incolores, sem swarming. Resultado: Adequado Desempenho microbiológico E. faecalis ATCC 29212 Especificação: Crescimento ausente  Resultado: Adequado  Ágar Manitol  Desempenho microbiológico S. aureus ATCC 25923 Especificação: Crescimento moderado a bom de colônias brancas com halo amarelo ao seu redor. Resultado: Adequado Desempenho microbiológico S. epidermidis ATCC 12228 Especificação:  Crescimento moderado a bom de colônias brancas puntiformes. Resultado: Adequado Desempenho microbiológico P. mirabilis ATCC 25933 Especificação: Crescimento acentuadamente inibido  Resultado: Adequado '
        },
        'PA339': {
            aspecto: 'Ágar Sangue: Especificação: Meio vermelho sangue opalescente. Resultado: Adequado. Ágar Mac Conkey: Especificação: Meio rosado translúcido. Resultado: Adequado. Ágar SS: Especificação: Meio vermelho alaranjado, ligeiramente opalescente. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Ágar Sangue Desempenho microbiológico E. coli ATCC 25922 Especificação: Crescimento excelente de colônias grandes, acinzentadas e brilhantes. Resultado: Adequado Desempenho microbiológico S. aureus ATCC 25923 Especificação: Crescimento excelente de colônias grandes, amareladas e opacas. Resultado: Adequado Desempenho microbiológico S. pneumoniae ATCC 49619 Especificação:  Crescimento moderado a bom de colônias pequenas α hemolíticas. Resultado: Adequado Desempenho microbiológico S. pyogenes ATCC 19615 Especificação: Crescimento moderado a bom de colônias pequenas β hemolíticas  Resultado: Adequado  Mac Conkey Desempenho microbiológico E. coli ATCC 25922  Inóculo ~ 10.000 UFC. Especificação: Crescimento excelente de colônias vermelhas com precipitado de bile. Resultado: Adequado Desempenho microbiológico P. mirabilis ATCC 12453 Inóculo ~ 10.000 UFC. Especificação: Crescimento excelente de colônias incolores, sem swarming. Resultado: Adequado Desempenho microbiológico E. faecalis ATCC 29212 Especificação: Crescimento ausente. Resultado: Adequado  SS Desempenho microbiológico E. coli ATCC 25922 Especificação: Crescimento escasso ou ausente de colônias amarelas. Resultado: Adequado Desempenho microbiológico S. typhimurium ATCC 14028 Especificação: Crescimento excelente de colônias incolores com centro preto. Resultado: Adequado Desempenho microbiológico E. faecalis ATCC 29212 Especificação: Crescimento ausente. Resultado: Adequado  '
        },
        'PA333': {
            aspecto: 'Especificação: Meio âmbar claro a médio, ligeiramente opalescente e sem precipitados. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico E. coli ATCC 25922. Especificação: Crescimento excelente de colônias transparentes rosa-escuras a púrpuras com ou sem halos no meio ao redor. Resultado: Adequado Desempenho microbiológico P. mirabilis ATCC 25933. Especificação: Crescimento excelente de colônias cor palha a bege com halo marrom. Resultado: Adequado Desempenho microbiológico K. pneumoniae ATCC 13883. Especificação:Crescimento excelente de colônias azul-médio a escuro. Resultado: Adequado Desempenho microbiológico E. faecalis ATCC 29212. Especificação: Crescimento excelente de colônias pequenas verde-azuladas. Resultado: Adequado '
        },
        'PA334': {
            aspecto: 'Ágar Sangue: Especificação: Meio vermelho sangue opalescente. Resultado: Adequado. Ágar Chocolate: Especificação: Meio castanho opalescente. Resultado: Adequado. Ágar Mac Conkey: Especificação: Meio rosado translúcido. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico E. coli ATCC 25922 Ágar Sangue: Especificação: Crescimento excelente de colônias grandes, acinzentadas e brilhantes. Resultado: Adequado Desempenho microbiológico E. coli ATCC 25922 Ágar Chocolate: N.A.  Desempenho microbiológico E. coli ATCC 25922 Ágar Mac Conkey: Especificação: Crescimento excelente de colônias vermelhas com precipitado de bile. Resultado: Adequado Desempenho microbiológico S. aureus ATCC 25923 Ágar Sangue:  Especificação: Crescimento excelente de colônias grandes, acinzentadas e brilhantes. Resultado: Adequado Desempenho microbiológico S. aureus ATCC 25923 Ágar Chocolate: N.A. Desempenho microbiológico S. aureus ATCC 25923 Ágar Mac Conkey:  Especificação: Crescimento excelente de colônias vermelhas com precipitado de bile. Resultado: Adequado Desempenho microbiológico S. pneumoniae ATCC 49619 Ágar Sangue: Especificação: Crescimento moderado a bom de colônias pequenas α-hemolíticas. Resultado: Adequado Desempenho microbiológico S. pneumoniae ATCC 49619 Ágar Chocolate: N.A. Desempenho microbiológico S. pneumoniae ATCC 49619 Ágar Mac Conkey: N.A.  Desempenho microbiológico S. pyogenes ATCC 19615 Ágar Sangue: Especificação: Crescimento moderado a bom de colônias pequenas β-hemolíticas. Resultado: Adequado Desempenho microbiológico S. pyogenes ATCC 19615 Ágar Chocolate: N.A.  Desempenho microbiológico S. pyogenes ATCC 19615 Ágar Mac Conkey: N.A.  Desempenho microbiológico H. influenzae ATCC 10211 Ágar Sangue: N.A.  Desempenho microbiológico H. influenzae ATCC 10211 Ágar Chocolate: Especificação: Crescimento moderado a bom de colônias médias translúcidas. Resultado: Adequado Desempenho microbiológico H. influenzae ATCC 10211 Ágar Mac Conkey: N.A.  '
        },
        'PA335': {
            aspecto: 'Ágar XLD: Especificação: Meio vermelho translúcido, ligeiramente opalescente. Resultado: Adequado. Ágar Mac Conkey: Especificação: Meio rosado translúcido. Resultado: Adequado. Ágar Cromonew Salmonella: Especificação: Meio âmbar claro, ligeiramente opalescente. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'XLD Desempenho microbiológico E. coli ATCC 25922 Especificação: Crescimento escasso ou ausente de colônias amarelas. Resultado: Adequado Desempenho microbiológico S. typhimurium ATCC 14028 Especificação: Crescimento excelente de colônias vermelhas com centro preto. Resultado: Adequado Desempenho microbiológico S. flexneri ATCC 12022 Especificação: Crescimento excelente de colônias vermelhas translúcidas.  Resultado: Adequado Desempenho microbiológico E. faecalis ATCC 29212 Especificação: Crescimento ausente. Resultado: Adequado  Mac Conkey Desempenho microbiológico E. coli ATCC 25922 Especificação: Crescimento excelente de colônias vermelhas com precipitado de bile. Resultado: Adequado Desempenho microbiológico P. mirabilis ATCC 12453 Especificação: Crescimento excelente de colônias incolores, sem swarming. Resultado: Adequado Desempenho microbiológico  E. faecalis ATCC 29212 Especificação: Crescimento ausente  Resultado: Adequado.   Cromonew Salmonella Desempenho microbiológico S. typhimurium ATCC 14028 Especificação: Crescimento excelente de colônias roxo claro com halo. Resultado: Adequado Desempenho microbiológico E. coli ATCC 25922  Especificação: Crescimento excelente de colônias azuis. Resultado: Adequado Desempenho microbiológico S. aureus ATCC 25923 Especificação: Crescimento ausente. Resultado: Adequado '
        },
        'PA411': {
            aspecto: 'Ágar Sangue: Especificação: Meio vermelho sangue opalescente. Resultado: Adequado. Ágar Chocolate: Especificação: Meio castanho opalescente. Resultado: Adequado. Ágar Mac Conkey: Especificação: Meio rosado translúcido. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico E. coli ATCC 25922 Ágar Sangue: Especificação: Crescimento excelente de colônias grandes, acinzentadas e brilhantes. Resultado: Adequado Desempenho microbiológico E. coli ATCC 25922 Ágar Chocolate: N.A.  Desempenho microbiológico E. coli ATCC 25922 Ágar Mac Conkey: Especificação: Crescimento excelente de colônias vermelhas com precipitado de bile. Resultado: Adequado Desempenho microbiológico S. aureus ATCC 25923 Ágar Sangue:  Especificação: Crescimento excelente de colônias grandes, acinzentadas e brilhantes. Resultado: Adequado Desempenho microbiológico S. aureus ATCC 25923 Ágar Chocolate: N.A. Desempenho microbiológico S. aureus ATCC 25923 Ágar Mac Conkey:  Especificação: Crescimento excelente de colônias vermelhas com precipitado de bile. Resultado: Adequado Desempenho microbiológico S. pneumoniae ATCC 49619 Ágar Sangue: Especificação: Crescimento moderado a bom de colônias pequenas α-hemolíticas. Resultado: Adequado Desempenho microbiológico S. pneumoniae ATCC 49619 Ágar Chocolate: N.A. Desempenho microbiológico S. pneumoniae ATCC 49619 Ágar Mac Conkey: N.A.  Desempenho microbiológico S. pyogenes ATCC 19615 Ágar Sangue: Especificação: Crescimento moderado a bom de colônias pequenas β-hemolíticas. Resultado: Adequado Desempenho microbiológico S. pyogenes ATCC 19615 Ágar Chocolate: N.A.  Desempenho microbiológico S. pyogenes ATCC 19615 Ágar Mac Conkey: N.A.  Desempenho microbiológico H. influenzae ATCC 10211 Ágar Sangue: N.A.  Desempenho microbiológico H. influenzae ATCC 10211 Ágar Chocolate: Especificação: Crescimento moderado a bom de colônias médias translúcidas. Resultado: Adequado Desempenho microbiológico H. influenzae ATCC 10211 Ágar Mac Conkey: N.A.  '
        },
        'PA114': {
            aspecto: 'pH final - Meio de Rugai: Especificação: 7,4 ± 0,2. Resultado: Adequado pH final - Meio de Lisina Motilidade: Especificação: 6,5 ± 0,2. Resultado: Adequado Aspecto final -  Meio de Rugai: Especificação: Meio verde-escuro translúcido, ligeiramente opalescente.  Resultado: Adequado Aspecto final -  Meio de Lisina Motilidade: Especificação:  Meio púrpura ligeiramente opalescente. Resultado: Adequado',
            dosagem: ' g/300 mL',
            bacteriana: true, // Marcar a caixa de seleção "bacteriana"
            infoText1: 'Desempenho microbiológico P. vulgaris ATCC 13315 - Especificação: LTD +; Glicose +; Gás +; H2S +; URE +; LIS -; MOT +; IND +. Resultado: Adequado Desempenho microbiológico K. pneumoniae ATCC 13883 - Especificação: LTD -; Glicose +; Gás +; H2S -; URE +; LIS +; MOT -; IND -. Resultado: Adequado Desempenho microbiológico E. coli ATCC 25922 - Especificação: LTD -; Glicose +; Gás +; H2S -; URE -; LIS +; MOT +; IND +. Resultado: Adequado Desempenho microbiológico P. aeruginosa ATCC 27853 - Especificação: TD -; Glicose -; Gás -; H2S -; URE -; LIS -; MOT +; IND -. Resultado: Adequado Desempenho microbiológico S. flexneri ATCC 12022 - Especificação: LTD -; Glicose +; Gás -; H2S -; URE -; LIS -; MOT -; IND -. Resultado: Adequado Desempenho microbiológico S. typhimurium ATCC 14028  - Especificação: LTD -; Glicose +; Gás +; H2S +; URE -; LIS +; MOT +; IND -.  Resultado: Adequado Esterilidade - Especificação: Ausência de crescimento. Resultado: Adequado'
        },
        'PI40': {
            aspecto: 'pH final - Meio de Rugai: Especificação: 7,4 ± 0,2. Resultado: Adequado pH final - Meio de Lisina Motilidade: Especificação: 6,5 ± 0,2. Resultado: Adequado Aspecto final -  Meio de Rugai: Especificação: Meio verde-escuro translúcido, ligeiramente opalescente.  Resultado: Adequado Aspecto final -  Meio de Lisina Motilidade: Especificação:  Meio púrpura ligeiramente opalescente. Resultado: Adequado',
            dosagem: ' g/200 mL',
            bacteriana: true,
            infoText1:'Desempenho microbiológico P. vulgaris ATCC 13315 - Especificação:  LTD +; Glicose +; Gás +; H2S +; URE +; LIS -; MOT +; IND +. Resultado: Adequado Desempenho microbiológico K. pneumoniae ATCC 13883 - Especificação: LTD -; Glicose +; Gás +; H2S -; URE +; LIS +; MOT -; IND -. Resultado: Adequado Desempenho microbiológico E. coli ATCC 25922 - Especificação: LTD -; Glicose +; Gás +; H2S -; URE -; LIS +; MOT +; IND +. Resultado: Adequado Desempenho microbiológico P. aeruginosa ATCC 27853 - Especificação: LTD -; Glicose -; Gás -; H2S -; URE -; LIS -; MOT +; IND -. Resultado: Adequado Desempenho microbiológico S. flexneri ATCC 12022  - Especificação: LTD -; Glicose +; Gás -; H2S -; URE -; LIS -; MOT -; IND -. Resultado: Adequado Desempenho microbiológico S. typhimurium ATCC 14028 - Especificação: LTD -; Glicose +; Gás +; H2S +;URE -; LIS +; MOT +; IND -.  Resultado: Adequado'
        },
        'PA313': {
            aspecto: 'pH final. Especificação: 5,6 ± 0,2. Resultado: Adequado Aspecto final. Especificação: Meio sólido âmbar claro, ligeiramente opalescente. Resultado: Adequado',
            dosagem: ' g/200 mL',
            bacteriana: true,
            infoText1: 'Desempenho microbiológico C. albicans ATCC 10231. Especificação: Crescimento bom a excelente de colônias brancas cremosas. Resultado: Adequado Desempenho microbiológico E. coli ATCC 25922. Especificação: Crescimento inibido. Resultado: Adequado Desempenho microbiológico A. niger ATCC 16404. Especificação: Crescimento bom a excelente de colônias cotonosas. Resultado: Adequado '
        },
        // Continue adicionando os outros produtos conforme necessário
        'PA314': {
            aspecto: 'pH final. Especificação: 7,2 ± 0,2. Resultado: Adequado Aspecto final. Especificação: Meio âmbar claro, ligeiramente opalescente. Resultado: Adequado',
            dosagem: ' g/300 mL',
            bacteriana: true,
            infoText1: 'Desempenho microbiológico C. albicans ATCC 10231. Especificação: Crescimento bom a excelente de colônias brancas cremosas. Resultado: Adequado Desempenho microbiológico T. mentagrophytes ATCC 9533. Especificação: Crescimento bom a excelente de colônias cotonosas. Resultado: Adequado Desempenho microbiológicoE. coli ATCC 25922. Especificação: Crescimento inibido. Resultado: Adequado Desempenho microbiológico A. niger ATCC 16404. Especificação: Crescimento inibido. Resultado: Adequado '
        },
        'PA315': {
            aspecto: 'Aspecto final. Especificação: Meio verde-claro opalescente. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico M. tuberculosis H37Rv (ATCC 27294) ou similar. Especificação: Crescimento bom a excelente de colônias granulares, foscas, secas e friáveis. Resultado: Adequado Esterilidade. Especificação: Ausência de crescimento. Resultado: Adequado'
        },
        'PA316': {
            aspecto: 'pH final. Especificação: 5,6 ± 0,2. Resultado: Adequado Aspecto final. Especificação: Meio âmbar claro, ligeiramente opalescente. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico C. albicans ATCC 10231. Especificação: Crescimento bom a excelente de colônias brancas. Resultado: Adequado Desempenho microbiológico A. niger ATCC 16404. Especificação: Crescimento bom a excelente de colônias negras com  contorno amarelado.  Resultado: Adequado '
        },
        'PA336': {
            aspecto: 'Aspecto final. Especificação: Líquido incolor e translúcido. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Esterilidade. Especificação: Ausência de crescimento. Resultado: Adequado'
        },
        'PA52': {
            aspecto: 'pH final. Especificação: 6,6 ± 0,2. Resultado: Adequado Aspecto final.  Especificação: Meio âmbar claro translúcido, ligeiramente opalescente. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico E. coli ATCC 25922. Especificação: Crescimento ausente. Resultado: Adequado Desempenho microbiológico E. faecalis ATCC 29212.  Especificação: Crescimento bom a excelente com escurecimento do meio. Resultado: Adequado'
        },
        'PA53': {
            aspecto: 'pH final. Especificação: 7,4 ± 0,2. Resultado: Adequado Aspecto final. Especificação: Meio incolor opalescente. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico P. aeruginosa ATCC 27853. Especificação: Crescimento bom a excelente com pigmento fluorescente. Resultado: Adequado Desempenho microbiológico E. coli ATCC 25922. Especificação: Crescimento inibido. Resultado: Adequado Desempenho microbiológico S. maltophilia ATCC 13637. Especificação: Crescimento inibido. Resultado: Adequado'
        },
        'PA54': {
            aspecto: 'pH final a 25º C. Especificação: 7,3 ± 0,1. Resultado: Adequado Aspecto final. Especificação: Meio castanho opalescente. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico H. influenzae ATCC 10211. Especificação: Crescimento moderado a bom de colônias médias translúcidas. Resultado: Adequado Esterilidade. Especificação: Ausência de crescimento. Resultado: Adequado'
        },
        'PA55': {
            aspecto: 'pH final. Especificação: 6,9 ± 0,2. Resultado: Adequado Aspecto final. Especificação: Meio verde escuro translúcido, ligeiramente opalescente. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico K. pneumoniae ATCC 13883. Especificação: Crescimento com alteração de cor do meio azul. Resultado: Adequado Desempenho microbiológico E. coli ATCC 25922  -  Especificação: Crescimento ausente, sem alteração de cor do meio. Resultado: Adequado'
        },
        'PA56': {
            aspecto: 'pH antes da adição do sangue.  Especificação: 7,3 ± 0,2.  Resultado: Adequado Aspecto final. Especificação: Meio âmbar claro translúcido. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico E. coli ATCC 25922. Especificação: Crescimento sem mudança de coloração para verde, após adição de cloreto férrico 10%. Resultado: Adequado Desempenho microbiológico P. mirabilis ATCC 25933.  Especificação: Crescimento com mudança de coloração para verde, após adição de cloreto férrico 10%. Resultado: Adequado Esterilidade. Especificação: Ausência de crescimento. Resultado: Adequado'
        },
        'PA57': {
            aspecto: 'pH final. Especificação: 7,4 ± 0,2. Resultado: Adequado Aspecto final. Especificação: Meio de cor pêssego a vermelho rosado, ligeiramente opalescente.  Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico S. aureus ATCC 25923.  Especificação: Crescimento moderado a bom de colônias amarelas. Resultado: Adequado Desempenho microbiológico S. epidermidis ATCC 12228.  Especificação: Crescimento moderado a bom de colônias incolores puntiformes. Resultado: Adequado Desempenho microbiológico P. mirabilis ATCC 25933. Especificação: Crescimento acentuadamente inibido. Resultado: Adequado '
        },
        'PA58': {
            aspecto: 'pH final. Especificação: 7,2 ± 0,2. Resultado: Adequado Aspecto final. Especificação: Meio âmbar claro, ligeiramente opalescente. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico C. albicans ATCC 10231. Especificação: Crescimento bom a excelente de colônias brancas cremosas. Resultado: Adequado Desempenho microbiológico T. mentagrophytes ATCC 9533. Especificação: Crescimento bom a excelente de colônias cotonosas. Resultado: Adequado Desempenho microbiológico E. coli ATCC 25922.  Especificação:  Crescimento inibido. Resultado: Adequado Desempenho microbiológico A. niger ATCC 16404. Especificação: Crescimento inibido.Resultado: Adequado'
        },
        'PA59': {
            aspecto: 'pH final. Especificação: 6,9 ± 0,2. Resultado: Adequado Aspecto final. Especificação: Meio verde escuro translúcido. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desenvolvimento microbiológico P. aeruginosa ATCC 27853.  Especificação: Oxidação. Resultado: Adequado Desenvolvimento microbiológico K. pneumoniae ATCC 13883.  Especificação: Oxidação e Fermentação.  Resultado: Adequado Desenvolvimento microbiológico M. osloensis ATCC 10973. Especificação: Inalterado. Resultado: Adequado'
        },
        'PA60': {
            aspecto: 'pH final. Especificação: 5,6 ± 0,2.  Resultado: Adequado Aspecto final. Especificação: Meio sólido âmbar claro, ligeiramente opalescente. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico C. albicans ATCC 10231. Especificação: Crescimento bom a excelente de colônias brancas cremosas. Resultado: Adequado Desempenho microbiológico E. coli ATCC 25922. Especificação: Crescimento inibido.  Resultado: Adequado Desempenho microbiológico A. niger ATCC 16404.  Especificação: Crescimento bom a excelente de colônias cotonosas. Resultado: Adequado'
        },
        'PA61': {
            aspecto: 'pH final. Especificação: 5,6 ± 0,2. Resultado: Adequado Aspecto final. Especificação: Meio âmbar claro, ligeiramente opalescente. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico C. albicans ATCC 10231. Especificação: Crescimento bom a excelente de colônias brancas. Resultado: Adequado Desempenho microbiológico A. niger ATCC 16404. Especificação: Crescimento bom a excelente de colônias negras com  contorno amarelado. Resultado: Adequado'
        },
        'PA63': {
            aspecto: 'pH  antes da adição do sangue. Especificação: 7,3 ± 0,1. Resultado: Adequado Aspecto final. Especificação: Meio castanho opalescente. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico N. meningitidis ATCC 13090. Especificação: Crescimento moderado a bom de colônias pequenas translúcidas. Resultado: Adequado Desempenho microbiológico S. epidermidis ATCC 12228. Especificação: Crescimento acentuadamente inibido. Resultado: Adequado Desempenho microbiológico E. coli ATCC 25922. Especificação: Crescimento acentuadamente inibido. Resultado: Adequado Desempenho microbiológico C. albicans ATCC 10231.  Especificação: Crescimento acentuadamente inibido. Resultado: Adequado'
        },
        'PA64': {
            aspecto: 'pH final. Especificação: 7,3 ± 0,2. Resultado: Adequado Aspecto final.  Especificação: Meio bege claro translúcido. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico E. coli ATCC 25922.  Especificação: Crescimento bom a excelente. Resultado: Adequado Desempenho microbiológico S. pyogenes ATCC 19615. Especificação: Crescimento bom a excelente. Resultado: Adequado'
        },
        'PA65': {
            aspecto: 'pH final. Especificação: 7,4 ± 0,2. Resultado: Adequado Aspecto final. Especificação: Meio laranja-avermelhado, ligeiramente opalescente. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico E. coli ATCC 25922.  Especificação: Base Ácida; Ápice Ácido; GÁS +; H2S -. Resultado: Adequado Desempenho microbiológico P. aeruginosa ATCC 27853. Especificação: Base Alcalina; Ápice Alcalino; GÁS -; H2S -.Resultado: Adequado Desempenho microbiológico S. typhimurium ATCC 14028. Especificação: Base Ácida; Ápice Alcalino; GÁS +; H2S +.  Resultado: Adequado Desempenho microbiológico S. flexneri ATCC 12022.  Especificação: Base Ácida; Ápice Alcalino; GÁS -; H2S -. Resultado: Adequado'
        },
        'PA66': {
            aspecto: 'pH final. Especificação: 6,8 ± 0,2. Resultado: Adequado Aspecto final. Especificação: Meio alaranjado claro translúcido. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico E. coli ATCC 25922. Especificação: Uréia - (inalterado). Resultado: Adequado Desempenho microbiológico K. pneumoniae ATCC 13883. Especificação: Uréia + (inalterado).  Resultado: Adequado '
        },
        'PA67': {
            aspecto: 'pH final. Especificação: 6,0 ± 0,2. Resultado: Adequado Aspecto final. Especificação: Meio púrpura translúcido. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico K. pneumoniae ATCC 13883. Especificação: - (coloração amarela). Resultado: Adequado Desempenho microbiológico  E. cloacae ATCC 13047 -  Especificação: + (coloração púrpura).  Resultado: Adequado '
        },
        'PA68': {
            aspecto: 'pH final. Especificação: 7,4 ± 0,2. Resultado: Adequado Aspecto final. Especificação: Meio âmbar claro translúcido. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico N. meningitidis ATCC 13090. Especificação: Crescimento bom a excelente. Resultado: Adequado Desempenho microbiológico S. pneumoniae ATCC 49619. Especificação: Crescimento bom a excelente. Resultado: Adequado Desempenho microbiológico S. pyogenes ATCC 19615. Especificação: Crescimento bom a excelente. Resultado: AdequadoDesempenho microbiológico P. aeruginosa ATCC 27853 -  Especificação: Crescimento bom a excelente com pigmento fluorescente   Resultado: Adequado Desempenho microbiológico E. coli ATCC 25922 -  Especificação: Crescimento inibido   Resultado: Adequado Desempenho microbiológico S. maltophilia ATCC 13637 -  Especificação: Crescimento inibido   Resultado: Adequado '
        },
        'PA69': {
            aspecto: 'pH final. Especificação: 7,8 ± 0,2. Resultado: Adequado Aspecto final. Especificação: Meio âmbar claro translúcido. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico S. agalactiae ATCC 12386. Especificação: Crescimento bom a excelente. Resultado: Adequado Desempenho microbiológico E. coli ATCC 25922. Especificação: Crescimento inibido. Resultado: Adequado '
        },
        'PA70': {
            aspecto: 'pH final. Especificação: 7,3 ± 0,2. Resultado: Adequado Aspecto final.  Especificação: Meio âmbar claro translúcido. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico S. pyogenes ATCC 19615 (inóculo padronizado a 10.000 UFC/mL). Especificação: Crescimento bom a excelente. Resultado: Adequado Desempenho microbiológico E. coli ATCC 25922 (inóculo padronizado a 10.000 UFC/mL).  Especificação: Crescimento bom a excelente. Resultado: Adequado '
        },
        'PA71': {
            aspecto: 'pH final. Especificação: 7,0 ± 0,2. Resultado: Adequado Aspecto final. Especificação: Meio âmbar claro translúcido. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico S. typhimurium ATCC 14028. Especificação: Crescimento bom a excelente no subcultivo. Resultado: Adequado Desempenho microbiológico E. coli ATCC 25922. Especificação: Crescimento bom a excelente no subcultivo. Resultado: Adequado Desempenho microbiológico S. flexneri ATCC 12022. Especificação: Crescimento bom a excelente no subcultivo. Resultado: Adequado '
        },
        'PA72': {
            aspecto: 'pH final. Especificação: 7,2 ± 0,2. Resultado: Adequado Aspecto final. Especificação: Caldo âmbar claro translúcido. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico E. coli ATCC 8739. Especificação:  Crescimento bom a excelente. Resultado: Adequado Desempenho microbiológico S. aureus ATCC 6538. Especificação: Crescimento bom a excelente. Resultado: Adequado '
        },
        'PA73': {
            aspecto: 'pH final. Especificação:  6,0 ± 0,2.  Resultado: Adequado Aspecto final. Especificação: Meio púrpura translúcido. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico S. flexneri ATCC 12022. Especificação: - (coloração amarela).  Resultado: Adequado Desempenho microbiológico S. typhimurium ATCC 14028. Especificação: + (coloração púrpura). Resultado: Adequado '
        },
        'PA74': {
            aspecto: 'pH final. Especificação: 6,7 ± 0,2. Resultado: Adequado Aspecto final. Especificação: Meio verde translúcido. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico K. pneumoniae ATCC 13883. Especificação: + (coloração azul). Resultado: Adequado Desempenho microbiológico E. coli ATCC 25922. Especificação: - (coloração amarela ou verde). Resultado: Adequado Esterilidade. Especificação: Ausência de crescimento. Resultado: Adequado'
        },
        'PA75': {
            aspecto: 'pH final. Especificação: 6,9 ± 0,2. Resultado: Adequado Aspecto final. Especificação: Meio âmbar claro translúcido. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico E. aerogenes ATCC 13048. Especificação: MR -; VP +.  Resultado: Adequado Desempenho microbiológico E. coli ATCC 25922 -  Especificação: MR +; VP -. Resultado: Adequado '
        },
        'PA76': {
            aspecto: 'pH final. Especificação: 7,3 ± 0,2. Resultado: Adequado Aspecto final. Especificação: Meio púrpura translúcido. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico E. faecalis ATCC 29212. Especificação: Crescimento com mudança de coloração do meio para amarelo. Resultado: Adequado Desempenho microbiológico S. viridans CEPA Selvagem. Especificação: Crescimento ausente, sem mudança de coloração. Resultado: Adequado '
        },
        'PA77': {
            aspecto: 'pH final. Especificação: 7,3 ± 0,1. Resultado: Adequado Aspecto final. Especificação: Meio bege claro translúcido. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico S. pyogenes ATCC 19615. Especificação: Crescimento bom a excelente. Resultado: Adequado Desempenho microbiológico N. meningitidis ATCC 13090.  Especificação: Crescimento bom a excelente. Resultado: Adequado '
        },
        'PA78': {
            aspecto: 'pH final. Especificação: 6,0 ± 0,2.  Resultado: Adequado Aspecto final. Especificação: Meio púrpura translúcido. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico K. pneumoniae ATCC 13883. Especificação: - (coloração amarela). Resultado: Adequado Desempenho microbiológico E. cloacae ATCC 13047. Especificação: + (coloração púrpura).  Resultado: Adequado '
        },
        'PA79': {
            aspecto: 'pH final. Especificação: 6,8 ± 0,2. Resultado: Adequado Aspecto final. Especificação: Meio púrpura translúcido. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico E. coli ATCC 25922. Especificação: + (coloração amarela). Resultado: Adequado Desempenho microbiológico P. mirabilis ATCC 25933. Especificação: - (coloração púrpura). Resultado: Adequado'
        },
        'PA80': {
            aspecto: 'pH final. Especificação: 6,8 ± 0,2. Resultado: Adequado Aspecto final. Especificação: Meio verde claro translúcido. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico S. flexneri ATCC 12022. Especificação: - (coloração verde). Resultado: Adequado Desempenho microbiológico K. pneumoniae ATCC 13883. Especificação: + (coloração amarela). Resultado: Adequado'
        },
        'PA81': {
            aspecto: 'pH final. Especificação: 7,0 ± 0,2. Resultado: Adequado Aspecto final. Especificação: Meio âmbar claro translúcido. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico E. coli ATCC 25922.  Especificação: Crescimento fraco (inibido) de colônias vermelhas com precipitado de bile, após subcultivo em ágar Mac Conkey. Resultado: Adequado Desempenho microbiológico S. typhimurium ATCC 14028. Especificação: Crescimento bom a excelente de colônias incolores, após subcultivo em ágar Mac Conkey. Resultado: Adequado'
        },
        'PA82': {
            aspecto: 'pH final. Especificação: 8,4 ± 0,2. Resultado: Adequado Aspecto final. Especificação: Meio incolor a levemente amarelado translúcido, com pptado branco denso no fundo. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico E. coli ATCC 25922. Especificação: Crescimento fraco (inibido) de colônias vermelhas com precipitado de bile, após subcultivo em ágar Mac Conkey. Resultado: Adequado Desempenho microbiológico S. typhimurium ATCC 14028. Especificação: Crescimento bom a excelente de colônias incolores, após subcultivo em ágar Mac Conkey. Resultado: Adequado'
        },
        'PA83': {
            aspecto: 'pH final. Especificação: 7,1 ± 0,2. Resultado: Adequado Aspecto final. Especificação: Meio levemente amarelado, translúcido com uma camada superior rosa de aproximadamente 10 mm. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico B. fragilis ATCC 25285. Especificação: Crescimento bom a excelente. Resultado: Adequado Desempenho microbiológico S. aureus ATCC 25923. Especificação: Crescimento bom a excelente. Resultado: Adequado'
        },
        'PA84': {
            aspecto: 'pH final. Especificação: 7,1 ± 0,2. Resultado: Adequado Aspecto final. Especificação: Meio levemente amarelado, translúcido. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico B. fragilis ATCC 25285. Especificação: Crescimento bom a excelente. Resultado: Adequado Desempenho microbiológico S. aureus ATCC 25923. Especificação: Crescimento bom a excelente. Resultado: Adequado '
        },
        'PA85': {
            aspecto: 'pH final. Especificação: 7,3 ± 0,2. Resultado: Adequado Aspecto final. Especificação: Meio âmbar claro translúcido a âmbar escuro. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico Aspergillus brasiliensis ATCC 16404 ou similar. Especificação: Crescimento bom a excelente.  Resultado: Adequado Desempenho microbiológico Bacillus subtilis ATCC 6633 ou similar. Especificação: Crescimento bom a excelente. Resultado: Adequado Desempenho microbiológico Candida albicans ATCC 10231 ou similar. Especificação: Crescimento bom a excelente. Resultado: Adequado'
        },
        'PA86': {
            aspecto: 'pH final. Especificação: 6,8 ± 0,2. Resultado: Adequado Aspecto final. Especificação: Meio alaranjado claro translúcido. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico E. coli ATCC 25922. Especificação: Uréia - (inalterado). Resultado: Adequado Desempenho microbiológico K. pneumoniae ATCC 13883. Especificação: Uréia + (inalterado).  Resultado: Adequado'
        },
        'PA87': {
            aspecto: 'pH final. Especificação: 7,4 ± 0,2. Resultado: Adequado Aspecto final. Especificação: Meio verde brilhante translúcido. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico E. aerogenes ATCC 13048 Especificação: Crescimento bom a excelente com produção de gás.  Resultado: Adequado Desempenho microbiológico E. coli ATCC 25922  Especificação: Crescimento bom a excelente com produção de gás. Resultado: Adequado Desempenho microbiológico S. aureus ATCC 25923 I Especificação: Crescimento inibido. Resultado: Adequado Desempenho microbiológico E. faecalis ATCC 29212 Especificação: Crescimento inibido. Resultado: Adequado'
        },
        'PA88': {
            aspecto: 'Concentração. Especificação: 0,85 g em 100 mL de água ±  0,05 g. Resultado: Adequado Aspecto final. Especificação: Líquido cristalino e homogêneo.  Resultado: Adequado Provas de identificação e Impurezas. Especificação: Conforme Farmacopéia Brasileira II págs. 247 e 248. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico S. aureus ATCC 25923. Especificação: Crescimento bom a excelente no subcultivo. Resultado: Adequado Desempenho microbiológico S. epidermidis ATCC 12228. Especificação: Crescimento bom a excelente no subcultivo. Resultado: Adequado Desempenho microbiológico S. pyogenes ATCC 19615.  Especificação: Crescimento bom a excelente no subcultivo. Resultado: Adequado'
        },
        'PA89': {
            aspecto: 'pH. Especificação: 6,6 ± 0,2. Resultado: Adequado Aspecto final.  Especificação: Gel amarelo-alaranjado, opalescente e sem precipitados. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico E. coli ATCC 25922. Especificação: Urease – (gel inalterado). Resultado: Adequado Desempenho microbiológico M. morganii IAL 417. Especificação: Urease + (gel rosa pink). Resultado: Adequado'
        },
        'PA90': {
            aspecto: 'pH final. Especificação: 7,4 ± 0,2. Resultado: Adequado Aspecto final.  Especificação: Meio verde escuro translúcido, ligeiramente opalescente. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico P. vulgaris ATCC 13315. Especificação: LTD +; Glicose +; Gás +; H2S +; URE +.  Resultado: Adequado Desempenho microbiológico  E. coli ATCC 25922. Especificação: LTD -; Glicose +; Gás +; H2S -; URE -. Resultado: Adequado Desempenho microbiológico  P. aeruginosa ATCC 27853.  Especificação: LTD -; Glicose -; Gás -; H2S -; URE -.  Resultado: Adequado Desempenho microbiológico  S. typhimurium ATCC 14028.  Especificação: LTD -; Glicose +; Gás +; H2S +; URE -.  Resultado: Adequado '
        },
        'PA91': {
            aspecto: 'Aspecto final. Especificação: Meio verde-claro opalescente. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico M. tuberculosis H37Rv (ATCC 27294) ou similar.  Especificação: Crescimento bom a excelente de colônias granulares, foscas, secas e friáveis. Resultado: Adequado Esterilidade. '
        },
        'PA92': {
            aspecto: 'pH final. Especificação: 6,6 ± 0,2. Resultado: Adequado Aspecto final. Especificação: Meio púrpura translúcido, ligeiramente opalescente. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico S. flexneri ATCC 12022.  Especificação: MOT -; LIS -; IND -. Resultado: Adequado Desempenho microbiológico E. coli ATCC 25922.  Especificação:  MOT +; LIS +; IND +.   Resultado: Adequado '
        },
        'PA93': {
            aspecto: 'pH final. Especificação: 6,5 ± 0,2. Resultado: Adequado Aspecto final. Especificação: Meio púrpura translúcido, ligeiramente opalescente. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico S. flexneri ATCC 12022. Especificação:  MOT -; LIS -; ORN -. Resultado: Adequado Desempenho microbiológico E. coli ATCC 25922.  Especificação: MOT +; LIS +; ORN +. Resultado: Adequado '
        },
        'PA94': {
            aspecto: 'Aspecto final. Especificação: Meio verde-claro opalescente. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico M. tuberculosis H37Rv (ATCC 27294) ou similar. Especificação: Crescimento bom a excelente de colônias granulares, foscas, secas e friáveis. Resultado: Adequado '
        },
        'PA95': {
            aspecto: 'pH final. Especificação: 7,3 ± 0,2. Resultado: Adequado Aspecto final. Especificação: Meio semi sólido, levemente opalescente. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico S. pyogenes ATCC 19615.  Especificação: Crescimento no subcultivo. Resultado: Adequado Desempenho microbiológico S. pneumoniae ATCC 49619.  Especificação: Crescimento no subcultivo. Resultado: Adequado Desempenho microbiológico E. coli ATCC 25922. Especificação: Crescimento no subcultivo. Resultado: Adequado '
        },
        'PA96': {
            aspecto: 'pH final. Especificação: 7,3 ± 0,2. Resultado: Adequado Aspecto final.  Especificação: Meio âmbar médio,  opalescente, sem precipitados. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desenvolvimento microbiológico S. flexneri ATCC 12022. Especificação:  MOT -; IND -; H2S -. Resultado: Adequado Desenvolvimento microbiológico E. coli ATCC 25922. Especificação: MOT +; IND +; H2S -. Resultado: Adequado Desenvolvimento microbiológico S. typhimurium ATCC 14028. Especificação: MOT +; IND -; H2S +. Resultado: Adequado '
        },
        'PA386': {
            aspecto: 'pH final. Especificação: 7,4 ± 0,2. Resultado: Adequado Aspecto final. Especificação: Meio verde brilhante translúcido. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico E. aerogenes ATCC 13048 Inóculo ~ 1000 UFC. Especificação: Crescimento bom a excelente com produção de gás.  Resultado: Adequado Desempenho microbiológico E. coli ATCC 25922 Inóculo ~ 1000 UFC. Especificação: Crescimento bom a excelente com produção de gás. Resultado: Adequado Desempenho microbiológico S. aureus ATCC 25923 Inóculo ~ 1000 UFC. Especificação: Crescimento inibido. Resultado: Adequado Desempenho microbiológico E. faecalis ATCC 29212 Inóculo ~ 1000 UFC. Especificação: Crescimento inibido. Resultado: Adequado'
        },
        'PA374': {
            aspecto: 'pH final. Especificação: 7,1 ± 0,2. Resultado: Adequado Aspecto final. Especificação: Meio levemente amarelado, translúcido com uma camada superior rosa de aproximadamente 10 mm. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico B. fragilis ATCC 25285. Especificação: Crescimento bom a excelente. Resultado: Adequado Desempenho microbiológico S. aureus ATCC 25923. Especificação: Crescimento bom a excelente. Resultado: Adequado'
        },
        'PA375': {
            aspecto: 'pH final. Especificação: 7,3 ± 0,2. Resultado: Adequado Aspecto final. Especificação:Meio âmbar claro translúcido a âmbar escuro. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico Aspergillus brasiliensis ATCC 16404 ou similar. Especificação: Crescimento bom a excelente. Resultado: Adequado Desempenho microbiológico Bacillus subtilis ATCC 6633 ou similar. Especificação: Crescimento bom a excelente. Resultado: Adequado Desempenho microbiológico Candida albicans ATCC 10231 ou similar. Especificação: Crescimento bom a excelente. Resultado: Adequado '
        },
        'PA352': {
            aspecto: 'Aspecto do FLM. Especificação: Pó fino creme a amarelo homogêneo. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho Microbiológico P. aeruginosa ATCC 27853. Especificação: Turvação sem fluorescência e indol negativo. Resultado: Adequado Desempenho Microbiológico K. pneumoniae ATCC 13883. Especificação: Turvação verde azulada sem fluorescência e indol negativo. Resultado: Adequado Desempenho Microbiológico E. coli ATCC 25922. Especificação: Turvação verde azulada com fluorescência e indol positivo. Resultado: Adequado'
        },
        'PA402': {
            aspecto: 'pH final. Especificação: 7,1 ± 0,2. Resultado: Adequado Aspecto final. Especificação: Meio levemente amarelado, translúcido. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico B. fragilis ATCC 25285. Especificação: Crescimento bom a excelente. Resultado: Adequado Desempenho microbiológico S. aureus ATCC 25923. Especificação: Crescimento bom a excelente. Resultado: Adequado '
        },
        'PA353': {
            aspecto: 'Concentração. Especificação: 0,85 g em 100 mL de água ±  0,05 g. Resultado: Adequado Aspecto final. Especificação: Líquido cristalino e homogêneo. Resultado: Adequado Provas de identificação e Impurezas. Especificação: Conforme Farmacopéia Brasileira II págs. 247 e 248. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico S. aureus ATCC 25923. Especificação: Crescimento bom a excelente no subcultivo. Resultado: Adequado Desempenho microbiológico S. epidermidis ATCC 12228. Especificação: Crescimento bom a excelente no subcultivo. Resultado: Adequado Desempenho microbiológico S. pyogenes ATCC 19615. Especificação: Crescimento bom a excelente no subcultivo. Resultado: Adequado '
        },
        'PA354': {
            aspecto: 'Concentração. Especificação: 0,85 g em 100 mL de água ±  0,05 g. Resultado: Adequado Aspecto final. Especificação: Líquido cristalino e homogêneo. Resultado: Adequado Provas de identificação e Impurezas. Especificação: Conforme Farmacopéia Brasileira II págs. 247 e 248. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico S. aureus ATCC 25923. Especificação: Crescimento bom a excelente no subcultivo. Resultado: Adequado Desempenho microbiológico S. epidermidis ATCC 12228. Especificação: Crescimento bom a excelente no subcultivo. Resultado: Adequado Desempenho microbiológico S. pyogenes ATCC 19615.  Especificação: Crescimento bom a excelente no subcultivo. Resultado: Adequado '
        },
        'PA355': {
            aspecto: 'Aspecto final. Especificação: Límpido com ausência de partículas macroscópicas suspensas. Resultado: Adequado Coloração. Especificação: Incolor.  Resultado: Adequado pH final. Especificação: 7,4 ± 0,5.  Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Esterilidade. Especificação: Ausência de crescimento. Resultado: Adequado.  Desempenho. Especifciação: Manutenção da viabilidade do vírus SARS-COV-2 por 48 horas em temperatura ambiente (10 a 30º C) e refrigerado (2 a 8º C). Resultado: Adequado.'
        },
        'PI115': {
            aspecto: 'Aspecto final. Especificação: Límpido com ausência de partículas macroscópicas suspensas. Resultado: Adequado Coloração. Especificação: Incolor.  Resultado: Adequado pH final. Especificação: 7,4 ± 0,5.  Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Esterilidade. Especificação: Ausência de crescimento. Resultado: Adequado.  Desempenho. Especifciação: Manutenção da viabilidade do vírus SARS-COV-2 por 48 horas em temperatura ambiente (10 a 30º C) e refrigerado (2 a 8º C). Resultado: Adequado.'
        },
        'PA356': {
            aspecto: 'Aspecto final. Especificação: Límpido com ausência de partículas macroscópicas suspensas. Resultado: Adequado Coloração. Especificação: Incolor. Resultado: Adequado pH final. Especifciação: 7,4 ± 0,5. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Esterilidade. Especificação: Ausência de crescimento. Resultado: Adequado Desempenho. Especificação: Manutenção da viabilidade do vírus SARS-COV-2 por 48 horas em temperatura ambiente (10 a 30º C) e refrigerado (2 a 8º C).  Resultado: Adequado'
        },
        'PA365': {
            aspecto: 'Aspecto final. Especificação: Límpido com ausência de partículas macroscópicas suspensas. Resultado: Adequado Coloração. Especificação: Vermelho. Resultado: Adequado Coloração (congelado).  Especificação: Amarelo. Resultado: Adequado pH final.  Especificação: 7,3 ± 0,1. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Esterilidade. Especificação: Ausência de crescimento. Resultado: Adequado Desempenho.  Especificação: Manutenção da viabilidade do vírus SARS-COV-2 por 48 horas em temperatura ambiente (10 a 30º C) e refrigerado (2 a 8º C). Resultado: Adequado'
        },
        'PA368': {
            aspecto: 'Aspecto final. Especificação: Límpido com ausência de partículas macroscópicas suspensas. Resultado: Adequado Coloração. Especificação: Vermelho. Resultado: Adequado Coloração (congelado).  Especificação: Amarelo. Resultado: Adequado pH final.  Especificação: 7,3 ± 0,1. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Esterilidade. Especificação: Ausência de crescimento. Resultado: Adequado Desempenho.  Especificação: Manutenção da viabilidade do vírus SARS-COV-2 por 48 horas em temperatura ambiente (10 a 30º C) e refrigerado (2 a 8º C). Resultado: Adequado'
        },
        'PA369': {
            aspecto: 'Aspecto final. Especificação: Límpido com ausência de partículas macroscópicas suspensas. Resultado: Adequado Coloração. Especificação: Vermelho. Resultado: Adequado Coloração (congelado). Especificação: Amarelo. Resultado: Adequado pH final. Especificação: 7,3 ± 0,1. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Esterilidade. Especificação: Ausência de crescimento. Resultado: Adequado Desempenho.  Especificação: Manutenção da viabilidade do vírus SARS-COV-2 por 48 horas em temperatura ambiente (10 a 30º C) e refrigerado (2 a 8º C). Resultado: Adequado'
        },
        'PA363': {
            aspecto: 'Aspecto final. Especificação: Límpido com ausência de partículas macroscópicas suspensas. Resultado: Adequado. Coloração. Especificação: Vermelho. Resultado: Adequado. Coloração (congelado). Especificação: Amarelo. Resultado: Adequado. pH final.  Especificação: 7,3 ± 0,1.  Resultado: Adequado.',
            bacteriana: 'conforme',
            infoText1: 'Esterilidade. Especificação: Ausência de crescimento. Resultado: Adequado Desempenho. Especificação: Manutenção da viabilidade do vírus SARS-COV-2 por 48 horas em temperatura ambiente (10 a 30º C) e refrigerado (2 a 8º C). Resultado: Adequado'
        },
        'PI114': {
            aspecto: 'Aspecto final. Especificação: Límpido com ausência de partículas macroscópicas suspensas. Resultado: Adequado. Coloração. Especificação: Vermelho. Resultado: Adequado. Coloração (congelado). Especificação: Amarelo. Resultado: Adequado. pH final.  Especificação: 7,3 ± 0,1.  Resultado: Adequado.',
            bacteriana: 'conforme',
            infoText1: 'Esterilidade. Especificação: Ausência de crescimento. Resultado: Adequado Desempenho. Especificação: Manutenção da viabilidade do vírus SARS-COV-2 por 48 horas em temperatura ambiente (10 a 30º C) e refrigerado (2 a 8º C). Resultado: Adequado'
        },
        'PA382': {
            aspecto: 'pH final. Especificação: 7,3 ± 0,2. Resultado: Adequado Aspecto final. Especificação: Meio semi sólido, levemente opalescente. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico S. pyogenes ATCC 19615. Especificação: Crescimento no subcultivo. Resultado: Adequado Desempenho microbiológico S. pneumoniae ATCC 49619. Especificação: Crescimento no subcultivo. Resultado: Adequado Desempenho microbiológico E. coli ATCC 25922. Especificação: Crescimento no subcultivo   Resultado: Adequado '
        },
        'PA376': {
            aspecto: 'pH final. Especificação: 7,3 ± 0,2. Resultado: Adequado Aspecto final. Especificação: Meio semi sólido, levemente opalescente. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico S. pyogenes ATCC 19615. Especificação: Crescimento no subcultivo. Resultado: Adequado Desempenho microbiológico N. meningitidis ATCC 13090. Especificação: Crescimento no subcultivo. Resultado: Adequado Desempenho microbiológico E. coli ATCC 25922. Especificação: Crescimento no subcultivo. Resultado: Adequado '
        },
        'PA161': {
            aspecto: 'Aspecto final - Especificação: Meio líquido incolor levemente opalescente. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico S. flexneri ATCC 12022 -  Especificação: Crescimento no subcultivo. Resultado: Adequado Desempenho microbiológico S. typhimurium ATCC 14028  -  Especificação: Crescimento no subcultivo.   Resultado: Adequado'
        },
        'PA407': {
            aspecto: 'Aspecto final. Especificação: Límpido com ausência de partículas macroscópicas suspensas. Resultado: Adequado. Coloração. Especificação: Vermelho. Resultado: Adequado. Coloração (congelado). Especificação: Amarelo. Resultado: Adequado. pH final.  Especificação: 7,3 ± 0,1.  Resultado: Adequado.',
            bacteriana: 'conforme',
            infoText1: 'Esterilidade. Especificação: Ausência de crescimento. Resultado: Adequado Desempenho. Especificação: Manutenção da viabilidade do vírus SARS-COV-2 por 48 horas em temperatura ambiente (10 a 30º C) e refrigerado (2 a 8º C). Resultado: Adequado'
        },
        'PI138': {
            aspecto: 'Aspecto final. Especificação: Límpido com ausência de partículas macroscópicas suspensas. Resultado: Adequado. Coloração. Especificação: Vermelho. Resultado: Adequado. Coloração (congelado). Especificação: Amarelo. Resultado: Adequado. pH final.  Especificação: 7,3 ± 0,1.  Resultado: Adequado.',
            bacteriana: 'conforme',
            infoText1: 'Esterilidade. Especificação: Ausência de crescimento. Resultado: Adequado Desempenho. Especificação: Manutenção da viabilidade do vírus SARS-COV-2 por 48 horas em temperatura ambiente (10 a 30º C) e refrigerado (2 a 8º C). Resultado: Adequado'
        },
        'PA115': {
            aspecto: 'pH final - EPM: Especificação:  7,3 ± 0,1 - Resultado: Adequado pH final - MILI: Especificação:  6,6 ± 0,2 - Resultado: Adequado pH final - Reativo de Kovacs: Especificação: não aplicável - Resultado:  não aplicável Aspecto final - EPM:  Especificação: meio verde-escuro translúcido ligeiramente opalescente - Resultado: Adequado Aspecto final - MILI:  Especificação: meio púrpura translúcido ligeiramente opalescente - Resultado: Adequado Aspecto final - Reativo de Kovacs: Especificação: Líquido amarelo brilhante e translúcido - Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'EPM: Especificação: P. vulgaris ATCC 13315 LTD +; Glicose +; Gás +; H2S +  Resultado: Adequado EPM: Especificação: E. coli ATCC 25922 LTD -; Glicose +; Gás +; H2S -  Resultado: Adequado EPM: Especificação: P. aeruginosa ATCC 27853 LTD -; Glicose -; Gás -; H2S -  Resultado: Adequado EPM: Especificação: S. flexneri ATCC 12022 LTD -; Glicose +; Gás -; H2S - Resultado: Adequado EPM: Especificação: S. typhimurium ATCC 14028 LTD -; Glicose +; Gás +; H2S + Resultado: Adequado MILI:  Especificação: E. coli ATCC 25922 Motilidade +; Indol +; Ornitina + Resultado: Adequado MILI:  Especificação: S. flexneri ATCC 12022 Motilidade -; Indol -; Ornitina - Resultado: Adequado Reativo de Kovacs:  Especificação: S. flexneri ATCC 12022 (inoculado em meio de MILi) MOT -; IND -; LIS - Resultado: Adequado Reativo de Kovacs:  Especificação: E. coli ATCC 25922 (inoculado em meio de MILi) MOT +; IND +; LIS + Resultado: Adequado Esterilidade - Especificação: Ausência de crescimento Resultado: Adequado'
        },
        'PI61': {
            aspecto: 'pH final - EPM: Especificação:  7,3 ± 0,1 - Resultado: Adequado Aspecto final - EPM:  Especificação: meio verde-escuro translúcido ligeiramente opalescente - Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'EPM: Especificação: P. vulgaris ATCC 13315 LTD +; Glicose +; Gás +; H2S +. Resultado: Adequado EPM: Especificação: E. coli ATCC 25922 LTD -; Glicose +; Gás +; H2S -.  Resultado: Adequado EPM: Especificação: P. aeruginosa ATCC 27853 LTD -; Glicose -; Gás -; H2S -.  Resultado: Adequado EPM: Especificação: S. flexneri ATCC 12022 LTD -; Glicose +; Gás -; H2S -. Resultado: Adequado EPM: Especificação: S. typhimurium ATCC 14028 LTD -; Glicose +; Gás +; H2S +. Resultado: Adequado MILI:  Especificação: E. coli ATCC 25922 Motilidade +; Indol +; Ornitina +. Resultado: Adequado MILI:  Especificação: S. flexneri ATCC 12022 Motilidade -; Indol -; Ornitina -. Resultado: Adequado '
        },
        'PI62': {
            aspecto: 'pH final - MILI: Especificação:  6,6 ± 0,2 - Resultado: Adequado Aspecto final - MILI:  Especificação: meio púrpura translúcido ligeiramente opalescente - Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'MILI:  Especificação: E. coli ATCC 25922 Motilidade +; Indol +; Ornitina +. Resultado: Adequado MILI:  Especificação: S. flexneri ATCC 12022 Motilidade -; Indol -; Ornitina -. Resultado: Adequado'
        },
        'PA116': {
            aspecto: 'pH final - EPM: Especificação:  7,3 ± 0,1 - Resultado: Adequado pH final - MILI: Especificação:  6,6 ± 0,2 - Resultado: Adequado pH final - Citrato: Especificação:  6,9 ± 0,2 - Resultado: Adequado pH final - Reativo de Kovacs: Especificação: não aplicável - Resultado:  não aplicável Aspecto final - EPM:  Especificação: meio verde-escuro translúcido ligeiramente opalescente - Resultado: Adequado Aspecto final - MILI:  Especificação: meio púrpura translúcido ligeiramente opalescente - Resultado: Adequado Aspecto final - Citrato:  Especificação: meio verde escuro translúcido ligeiramente opalescente - Resultado: Adequado Aspecto final - Reativo de Kovacs: Especificação: Líquido amarelo brilhante e translúcido - Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'EPM: Especificação: P. vulgaris ATCC 13315 LTD +; Glicose +; Gás +; H2S +.  Resultado: Adequado EPM: Especificação: E. coli ATCC 25922 LTD -; Glicose +; Gás +; H2S -.  Resultado: Adequado EPM: Especificação: P. aeruginosa ATCC 27853 LTD -; Glicose -; Gás -; H2S -.  Resultado: Adequado EPM: Especificação: S. flexneri ATCC 12022 LTD -; Glicose +; Gás -; H2S -. Resultado: Adequado EPM: Especificação: S. typhimurium ATCC 14028 LTD -; Glicose +; Gás +; H2S +. Resultado: Adequado MILI:  Especificação: E. coli ATCC 25922 Motilidade +; Indol +; Ornitina +. Resultado: Adequado MILI:  Especificação: S. flexneri ATCC 12022 Motilidade -; Indol -; Ornitina -. Resultado: Adequado Citrato: Especificação: E. coli ATCC 25922 Crescimento ausente, sem mudança da coloração -. Resultado: Adequado Citrato: K. pneumoniae ATCC 13883 Crescimento com mudança da coloração do meio para azul. Resultado: Adequado Reativo de Kovacs:  Especificação: S. flexneri ATCC 12022 (inoculado em meio de MILi) MOT -; IND -; LIS -. Resultado: Adequado Reativo de Kovacs:  Especificação: E. coli ATCC 25922 (inoculado em meio de MILi) MOT +; IND +; LIS +. Resultado: Adequado Esterilidade - Especificação: Ausência de crescimento. Resultado: Adequado'
        },
        'PI61': {
            aspecto: 'pH final - EPM: Especificação:  7,3 ± 0,1 - Resultado: Adequado Aspecto final - EPM:  Especificação: meio verde-escuro translúcido ligeiramente opalescente - Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'EPM: Especificação: P. vulgaris ATCC 13315 LTD +; Glicose +; Gás +; H2S +. Resultado: Adequado EPM: Especificação: E. coli ATCC 25922 LTD -; Glicose +; Gás +; H2S -.  Resultado: Adequado EPM: Especificação: P. aeruginosa ATCC 27853 LTD -; Glicose -; Gás -; H2S -.  Resultado: Adequado EPM: Especificação: S. flexneri ATCC 12022 LTD -; Glicose +; Gás -; H2S -. Resultado: Adequado EPM: Especificação: S. typhimurium ATCC 14028 LTD -; Glicose +; Gás +; H2S +. Resultado: Adequado MILI:  Especificação: E. coli ATCC 25922 Motilidade +; Indol +; Ornitina +. Resultado: Adequado MILI:  Especificação: S. flexneri ATCC 12022 Motilidade -; Indol -; Ornitina -. Resultado: Adequado'
        },
        'PI62': {
            aspecto: 'pH final - MILI: Especificação:  6,6 ± 0,2 - Resultado: Adequado Aspecto final - MILI:  Especificação: meio púrpura translúcido ligeiramente opalescente - Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'MILI:  Especificação: E. coli ATCC 25922 Motilidade +; Indol +; Ornitina +. Resultado: Adequado MILI:  Especificação: S. flexneri ATCC 12022 Motilidade -; Indol -; Ornitina -. Resultado: Adequado'
        },
        'PI44': {
            aspecto: 'pH final - Citrato: Especificação:  6,9 ± 0,2 - Resultado: Adequado Aspecto final - Citrato: Especificação:meio verde escuro translúcido ligeiramente opalescente - Resultado: Adequado ',
            bacteriana: 'conforme',
            infoText1: 'Citrato: Especificação: E. coli ATCC 25922 Crescimento ausente, sem mudança da coloração - Resultado: Adequado Citrato: Especificação: K. pneumoniae ATCC 13883 Crescimento com mudança da coloração do meio para azul - Resultado: Adequado'
        },
        'PA117': {
            aspecto: 'pH final - Ágar Bile Esculina: Especificação:  6,6 ± 0,2 - Resultado: Adequado pH final - Meio de MTS:Especificação:  7,3 ± 0,2 - Resultado: Adequado Aspecto final - Ágar Bile Esculina: Especificação: Meio âmbar claro translúcido, ligeiramente opalescente - Resultado: Adequado Aspecto final - MTS:  Especificação: Meio púrpura translúcido - Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Ágar Bile Esculina: Especificação: E. faecalis ATCC 29212 Crescimento bom a excelente com escurecimento do meio - Resultado: Adequado Ágar Bile Esculina: Especificação: E. coli ATCC 25922    Crescimento ausente - Resultado: Adequado Meio de MTS: Especificação: E. faecalis ATCC 29212  Crescimento com mudança de coloração do meio para amarelo - Resultado: Adequado Meio de MTS: Especificação: S. viridans Cepa Selvagem  Crescimento ausente, sem mudança de coloração - Resultado: Adequado'
        },
        'PI69': {
            aspecto: 'pH final - Ágar Bile Esculina: Especificação:  6,6 ± 0,2 - Resultado: Adequado Aspecto final - Ágar Bile Esculina: Especificação: Meio âmbar claro translúcido, ligeiramente opalescente - Resultado: Adequado ',
            bacteriana: 'conforme',
            infoText1: 'Ágar Bile Esculina: Especificação: E. faecalis ATCC 29212 Crescimento bom a excelente com escurecimento do meio - Resultado: Adequado Ágar Bile Esculina: Especificação: E. coli ATCC 25922    Crescimento ausente - Resultado: Adequado'
        },
        'PI80': {
            aspecto: 'pH final - Meio de MTS:Especificação:  7,3 ± 0,2 - Resultado: Adequado Aspecto final - MTS:  Especificação: Meio púrpura translúcido - Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Meio de MTS: Especificação: E. faecalis ATCC 29212  Crescimento com mudança de coloração do meio para amarelo - Resultado: Adequado Meio de MTS: Especificação: S. viridans Cepa Selvagem  Crescimento ausente, sem mudança de coloração - Resultado: Adequado'
        },
        'PA118': {
            aspecto: 'pH final - EPM: Especificação:  7,3 ± 0,1 - Resultado: Adequado pH final - Lisina: Especificação:  6,0 ± 0,2 - Resultado: Adequado pH final - MIO: Especificação:  6,5 ± 0,2 - Resultado: Adequado pH final - Citrato: Especificação:  6,9 ± 0,2 - Resultado: Adequado pH final - Rhamnose: Especificação:  6,8 ± 0,2 - Resultado: Adequado  Aspecto final - EPM:: Especificação: meio verde escuro translúcido ligeiramente opalescente - Resultado: Adequado Aspecto final  - Lisina: Especificação: meio púrpura translúcido - Resultado: Adequado Aspecto final  - MIO: Especificação:  meio púrpura translúcido ligeiramente opalescente - Resultado: Adequado Aspecto final - Citrato: Especificação:meio verde escuro translúcido ligeiramente opalescente - Resultado: Adequado Aspecto final - Rhamnose: Especificação: meio verde claro translúcido - Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'EPM: Especificação: P. vulgaris ATCC 13315 LTD +; Glicose +; Gás +; H2S + Resultado: Adequado EPM: Especificação: E. coli ATCC 25922 LTD -; Glicose +; Gás +; H2S - Resultado: Adequado EPM: Especificação: P. aeruginosa ATCC 27853 LTD -; Glicose -; Gás -; H2S - Resultado: Adequado EPM: Especificação: S. flexneri ATCC 12022 LTD -; Glicose +; Gás -; H2S - Resultado: Adequado EPM: Especificação:S. typhimurium ATCC 14028 LTD -; Glicose +; Gás +; H2S + Resultado: Adequado  Caldo Lisina: Especificação: S. flexneri ATCC 12022 - (coloração amarela) Resultado: Adequado Caldo Lisina: Especificação: S. typhimurium ATCC 14028 + (coloração púrpura) Resultado: Adequado  MIO: Especificação: E. coli ATCC 25922 Motilidade +; Indol +; Ornitina + Resultado: Adequado MIO: Especificação:S. flexneri ATCC 12022 Motilidade -; Indol -; Ornitina - Resultado: Adequado  Citrato: Especificação: E. coli ATCC 25922 Crescimento ausente, sem mudança da coloração - Resultado: Adequado Citrato: Especificação: K. pneumoniae ATCC 13883 Crescimento com mudança da coloração do meio para azul - Resultado: Adequado  Caldo Rhamnose:  Especificação: K. pneumoniae ATCC 13883 + (coloração amarela) - Resultado: Adequado Caldo Rhamnose:  Especificação: S. flexneri ATCC 12022 - (coloração verde)) - Resultado: Adequado   Esterilidade - Especificação: Ausência de crescimento Resultado: Adequado'
        },
        'PI100': {
            aspecto: 'pH final - EPM: Especificação:  7,3 ± 0,1 - Resultado: Adequado  Aspecto final - EPM:: Especificação: meio verde escuro translúcido ligeiramente opalescente - Resultado: Adequado ',
            bacteriana: 'conforme',
            infoText1: 'EPM: Especificação: P. vulgaris ATCC 13315 LTD +; Glicose +; Gás +; H2S + Resultado: Adequado EPM: Especificação: E. coli ATCC 25922 LTD -; Glicose +; Gás +; H2S - Resultado: Adequado EPM: Especificação: P. aeruginosa ATCC 27853 LTD -; Glicose -; Gás -; H2S - Resultado: Adequado EPM: Especificação: S. flexneri ATCC 12022 LTD -; Glicose +; Gás -; H2S - Resultado: Adequado EPM: Especificação:S. typhimurium ATCC 14028 LTD -; Glicose +; Gás +; H2S + Resultado: Adequado '
        },
        'PI42': {
            aspecto: 'pH final - Lisina: Especificação:  6,0 ± 0,2 - Resultado: Adequado Aspecto final  - Lisina: Especificação: meio púrpura translúcido - Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Caldo Lisina: Especificação: S. flexneri ATCC 12022 - (coloração amarela) Resultado: Adequado Caldo Lisina: Especificação: S. typhimurium ATCC 14028 + (coloração púrpura) Resultado: Adequado  '
        },
        'PI43': {
            aspecto: 'pH final - MIO: Especificação:  6,5 ± 0,2 - Resultado: Adequado Aspecto final  - MIO: Especificação:  meio púrpura translúcido ligeiramente opalescente - Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'MIO: Especificação: E. coli ATCC 25922 Motilidade +; Indol +; Ornitina + Resultado: Adequado MIO: Especificação:S. flexneri ATCC 12022 Motilidade -; Indol -; Ornitina - Resultado: Adequado '
        },
        'PI44': {
            aspecto: 'pH final - Citrato: Especificação:  6,9 ± 0,2 - Resultado: Adequado Aspecto final - Citrato: Especificação:meio verde escuro translúcido ligeiramente opalescente - Resultado: Adequado ',
            bacteriana: 'conforme',
            infoText1: 'Citrato: Especificação: E. coli ATCC 25922 Crescimento ausente, sem mudança da coloração - Resultado: Adequado Citrato: Especificação: K. pneumoniae ATCC 13883 Crescimento com mudança da coloração do meio para azul - Resultado: Adequado'
        },
        'PI45': {
            aspecto: 'pH final - Rhamnose: Especificação:  6,8 ± 0,2 - Resultado: Adequado  Aspecto final - Rhamnose: Especificação: meio verde claro translúcido - Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Caldo Rhamnose:  Especificação: K. pneumoniae ATCC 13883 + (coloração amarela) - Resultado: Adequado Caldo Rhamnose:  Especificação: S. flexneri ATCC 12022 - (coloração verde)) - Resultado: Adequado   Esterilidade - Especificação: Ausência de crescimento Resultado: Adequado'
        },
        'PA120': {
            aspecto: 'Aspecto final - Ogawa Kudoh: Especificação: Meio verde-claro opalescente. Resultado: Adequado Aspecto final - NaOH: Especificação: Líquido incolor e translúcido. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Especificação: Desempenho microbiológico M. tuberculosis H37Rv (ATCC 27294) ou similar - Resultado: Adequado Especificação: Crescimento bom a excelente de colônias granulares, foscas, secas e friáveis - Resultado: Adequado Esterilidade: Ogawa Kudoh: ausência de crescimento - Resultado: Adequado Esterilidade:NaOH: ausência de crescimento - Resultado: Adequado'
        },
        'PI78': {
            aspecto: 'Aspecto final - Ogawa Kudoh: Especificação: Meio verde-claro opalescente. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Especificação: Desempenho microbiológico M. tuberculosis H37Rv (ATCC 27294) ou similar - Resultado: Adequado Especificação: Crescimento bom a excelente de colônias granulares, foscas, secas e friáveis - Resultado: Adequado '
        },
        'PI79': {
            aspecto: 'Aspecto final - NaOH: Especificação: Líquido incolor e translúcido. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Esterilidade:NaOH: ausência de crescimento - Resultado: Adequado'
        },
        'PA121': {
            aspecto: 'pH final - Meio de Rugai: Especificação: 7,4 ± 0,2. Resultado: Adequado pH final - Meio de Lisina Motilidade: Especificação: 6,5 ± 0,2. Resultado: Adequado Aspecto final - Meio de Rugai: Especificação: Meio verde- escuro translúcido, ligeiramente opalescente. Resultado: Adequado. Aspecto final -Meio de Lisina Motilidade: Especificação: Meio púrpura ligeiramente opalescente. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico P. vulgaris ATCC 13315 - Especificação:  LTD +; Glicose +; Gás +; H2S +; URE +; LIS -; MOT +; IND +. Resultado: Adequado Desempenho microbiológico K. pneumoniae ATCC 13883 - Especificação: LTD -; Glicose +; Gás +; H2S -; URE +; LIS +; MOT -; IND -. Resultado: Adequado Desempenho microbiológico E. coli ATCC 25922 - Especificação: LTD -; Glicose +; Gás +; H2S -; URE -; LIS +; MOT +; IND +. Resultado: Adequado Desempenho microbiológico P. aeruginosa ATCC 27853 - Especificação: LTD -; Glicose -; Gás -; H2S -; URE -; LIS -; MOT +; IND -. Resultado: Adequado Desempenho microbiológico S. flexneri ATCC 12022  - Especificação: LTD -; Glicose +; Gás -; H2S -; URE -; LIS -; MOT -; IND -. Resultado: Adequado Desempenho microbiológico S. typhimurium ATCC 14028 - Especificação: LTD -; Glicose +; Gás +; H2S +;URE -; LIS +; MOT +; IND -.  Resultado: Adequado Esterilidade:  Especificação: Ausência de crescimento. Resultado: Adequado'
        },
        'PA122': {
            aspecto: 'pH final - EPM: Especificação:  7,3 ± 0,1 - Resultado: Adequado pH final - MILI: Especificação:  6,6 ± 0,2 - Resultado: Adequado  Aspecto final - EPM:  Especificação: meio verde-escuro translúcido ligeiramente opalescente - Resultado: Adequado Aspecto final - MILI:  Especificação: meio púrpura translúcido ligeiramente opalescente - Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'EPM: Especificação: P. vulgaris ATCC 13315 LTD +; Glicose +; Gás +; H2S +. Resultado: Adequado EPM: Especificação: E. coli ATCC 25922 LTD -; Glicose +; Gás +; H2S -.  Resultado: Adequado EPM: Especificação: P. aeruginosa ATCC 27853 LTD -; Glicose -; Gás -; H2S -.  Resultado: Adequado EPM: Especificação: S. flexneri ATCC 12022 LTD -; Glicose +; Gás -; H2S -. Resultado: Adequado EPM: Especificação: S. typhimurium ATCC 14028 LTD -; Glicose +; Gás +; H2S +. Resultado: Adequado MILI:  Especificação: E. coli ATCC 25922 Motilidade +; Indol +; Ornitina +. Resultado: Adequado MILI:  Especificação: S. flexneri ATCC 12022 Motilidade -; Indol -; Ornitina -. Resultado: Adequado Esterilidade - Especificação: Ausência de crescimento. Resultado: Adequado'
        },
        'P84': {
            aspecto: 'pH final - EPM: Especificação:  7,3 ± 0,1 - Resultado: Adequado Aspecto final - EPM:  Especificação: meio verde-escuro translúcido ligeiramente opalescente - Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'EPM: Especificação: P. vulgaris ATCC 13315 LTD +; Glicose +; Gás +; H2S +. Resultado: Adequado EPM: Especificação: E. coli ATCC 25922 LTD -; Glicose +; Gás +; H2S -.  Resultado: Adequado EPM: Especificação: P. aeruginosa ATCC 27853 LTD -; Glicose -; Gás -; H2S -.  Resultado: Adequado EPM: Especificação: S. flexneri ATCC 12022 LTD -; Glicose +; Gás -; H2S -. Resultado: Adequado EPM: Especificação: S. typhimurium ATCC 14028 LTD -; Glicose +; Gás +; H2S +. Resultado: Adequado MILI:  Especificação: E. coli ATCC 25922 Motilidade +; Indol +; Ornitina +. Resultado: Adequado MILI:  Especificação: S. flexneri ATCC 12022 Motilidade -; Indol -; Ornitina -. Resultado: Adequado '
        },
        'PI83': {
            aspecto: 'pH final - MILI: Especificação:  6,6 ± 0,2 - Resultado: Adequado Aspecto final - MILI:  Especificação: meio púrpura translúcido ligeiramente opalescente - Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'MILI:  Especificação: E. coli ATCC 25922 Motilidade +; Indol +; Ornitina +. Resultado: Adequado MILI:  Especificação: S. flexneri ATCC 12022 Motilidade -; Indol -; Ornitina -. Resultado: Adequado Esterilidade - Especificação: Ausência de crescimento. Resultado: Adequado'
        },
        'PA123': {
            aspecto: 'pH final - OF (base, glicose, lactose, xilose e maltose): Especificação:  7,1 ± 0,2 - Resultado: Adequado pH final - Caldo BHI: Especificação:  7,4 ± 0,2 - Resultado: Adequado pH final - Cetrimide: Especificação:  7,2 ± 0,2 - Resultado: Adequado pH final - Nitrato Motilidade: Especificação:  7,4 ± 0,2 - Resultado: Adequado pH final - Gelatina: 6,9 ± 0,1 - Resultado: Adequado  Aspecto final - OF (base, glicose, lactose, xilose e maltose): Especificação: meio verde escuro translúcido - Resultado: Adequado Aspecto final - Caldo BHI: Especificação:  meio âmbar claro translúcido - Resultado: Adequado Aspecto final - Cetrimide: Especificação:  meio incolor opalescente - Resultado: Adequado Aspecto final - Nitrato Motilidade: Especificação: Meio âmbar claro, ligeiramente opalescente - Resultado: Adequado Aspecto final - Gelatina: Especificação: Meio âmbar claro, gelatinoso e ligeiramente opalescente - Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'OF-Glicose.  Especificação: P. aeruginosa ATCC 27853  Oxidação - Resultado: Adequado OF-Glicose.  K. pneumoniae ATCC 13883 Oxidação e Fermentação - Resultado: Adequado OF-Glicose.  Especificação: M. osloensis ATCC 10973  Inalterado - Resultado: Adequado  OF-Lactose. Especificação: B. cepacia ATCC 17759  Oxidação - Resultado: Adequado OF-Lactose. Especificação: K. pneumoniae ATCC 13883 Oxidação e Fermentação - Resultado: Adequado OF-Lactose. Especificação: M. osloensis ATCC 10973  Inalterado - Resultado: Adequado  OF-Xilose. Especificação: B. cepacia ATCC 17759  Oxidação - Resultado: Adequado OF-Xilose. Especificação: K. pneumoniae ATCC 13883 Oxidação e Fermentação - Resultado: Adequado OF-Xilose. Especificação: M. osloensis ATCC 10973  Inalterado - Resultado: Adequado  OF-Maltose. Especificação: S. maltophilia Cepa Selvagem Oxidação - Resultado: Adequado OF-Maltose. Especificação: K. pneumoniae ATCC 13883 Oxidação e Fermentação - Resultado: Adequado OF-Maltose. Especificação: M. osloensis ATCC 10973  Inalterado - Resultado: Adequado  OF-Base. Especificação: P. aeruginosa ATCC 27853  Inalterado - Resultado: Adequado OF-Base. Especificação: K. pneumoniae ATCC 13883 Inalterado - Resultado: Adequado Caldo BHI (inóculo padronizado em 10.000 UFC/mL). Especificação: N. meningitidis ATCC 13090   Crescimento bom a excelente - Resultado: Adequado Caldo BHI (inóculo padronizado em 10.000 UFC/mL). Especificação: S. pneumoniae ATCC 49619 Crescimento bom a excelente - Resultado: Adequado Caldo BHI (inóculo padronizado em 10.000 UFC/mL). Especificação: S. pyogenes ATCC 19615 Crescimento bom a excelente - Resultado: Adequado  Ágar Cetrimide (inóculo padronizado em 100.000 UFC/mL). Especificação: P. aeruginosa ATCC 27853 Crescimento bom a excelente com pigmento fluorescente - Resultado: Adequado Ágar Cetrimide (inóculo padronizado em 100.000 UFC/mL). Especificação: E. coli ATCC 25922 Crescimento inibido - Resultado: Adequado Ágar Cetrimide (inóculo padronizado em 100.000 UFC/mL). Especificação: S. maltophilia ATCC 13637 Crescimento inibido - Resultado: Adequado  Meio de Nitrato-Motilidade (prova do nitrato revelada através dos reativos correspondentes e adição de zinco em pó quando necessário).  Especificação: P. aeruginosa ATCC 27853 MOT +; NIT +. Resultado: Adequado Meio de Nitrato-Motilidade (prova do nitrato revelada através dos reativos correspondentes e adição de zinco em pó quando necessário).  Especificação: P. mirabilis ATCC 25933   MOT +; NIT +. Resultado: Adequado Meio de Nitrato-Motilidade (prova do nitrato revelada através dos reativos correspondentes e adição de zinco em pó quando necessário).  Especificação: A. baumannii Cepa Selvagem MOT -; NIT - . Resultado: Adequado  Meio de Gelatina (inóculo padronizado em 100.000 UFC/mL). Especificação: P. aeruginosa ATCC 27853   Meio sólido após refrigeração. Resultado: Adequado Meio de Gelatina (inóculo padronizado em 100.000 UFC/mL). Especificação: S. marcescens ATCC 43861 Meio liquefeito após refrigeração. Resultado: Adequado  Esterilidade - Especificação: Ausência de crescimento Resultado: Adequado'
        },
        'PI03': {
            aspecto: 'pH final -  Especificação:  7,2 ± 0,2 - Resultado: Adequado Aspecto final - Especificação:  meio incolor opalescente - Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Especificação: P. aeruginosa ATCC 27853 Crescimento bom a excelente com pigmento fluorescente - Resultado: Adequado Especificação: E. coli ATCC 25922 Crescimento inibido - Resultado: Adequado Ágar Cetrimide Especificação: S. maltophilia ATCC 13637 Crescimento inibido - Resultado: Adequado  '
        },
        'PI55': {
            aspecto: 'pH final - Nitrato Motilidade: Especificação:  7,4 ± 0,2 - Resultado: Adequado Aspecto final - Nitrato Motilidade: Especificação: Meio âmbar claro, ligeiramente opalescente - Resultado: Adequado ',
            bacteriana: 'conforme',
            infoText1: 'Meio de Nitrato-Motilidade (prova do nitrato revelada através dos reativos correspondentes e adição de zinco em pó quando necessário).  Especificação: P. aeruginosa ATCC 27853 MOT +; NIT +. Resultado: Adequado Meio de Nitrato-Motilidade (prova do nitrato revelada através dos reativos correspondentes e adição de zinco em pó quando necessário).  Especificação: P. mirabilis ATCC 25933   MOT +; NIT +. Resultado: Adequado Meio de Nitrato-Motilidade (prova do nitrato revelada através dos reativos correspondentes e adição de zinco em pó quando necessário).  Especificação: A. baumannii Cepa Selvagem MOT -; NIT - . Resultado: Adequado '
        },
        'PI63': {
            aspecto: 'pH final - Caldo BHI: Especificação:  7,4 ± 0,2 - Resultado: Adequado Aspecto final - Caldo BHI: Especificação:  meio âmbar claro translúcido - Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Caldo BHI Especificação: N. meningitidis ATCC 13090   Crescimento bom a excelente - Resultado: Adequado Caldo BHI Especificação: S. pneumoniae ATCC 49619 Crescimento bom a excelente - Resultado: Adequado Caldo BHI Especificação: S. pyogenes ATCC 19615 Crescimento bom a excelente - Resultado: Adequado'
        },
        'PI90': {
            aspecto: 'pH final - OF (base, glicose, lactose, xilose e maltose): Especificação:  7,1 ± 0,2 - Resultado: Adequado Aspecto final - OF (base, glicose, lactose, xilose e maltose): Especificação: meio verde escuro translúcido - Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'OF-Glicose.  Especificação: P. aeruginosa ATCC 27853  Oxidação - Resultado: Adequado OF-Glicose.  K. pneumoniae ATCC 13883 Oxidação e Fermentação - Resultado: Adequado OF-Glicose.  Especificação: M. osloensis ATCC 10973  Inalterado - Resultado: Adequado'
        },
        'PI91': {
            aspecto: 'pH final - OF (base, glicose, lactose, xilose e maltose): Especificação:  7,1 ± 0,2 - Resultado: Adequado Aspecto final - OF (base, glicose, lactose, xilose e maltose): Especificação: meio verde escuro translúcido - Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'OF-Base. Especificação: P. aeruginosa ATCC 27853  Inalterado - Resultado: Adequado OF-Base. Especificação: K. pneumoniae ATCC 13883 Inalterado – Resultado: Adequado'
        },
        'PI92': {
            aspecto: 'pH final - OF (base, glicose, lactose, xilose e maltose): Especificação:  7,1 ± 0,2 - Resultado: Adequado Aspecto final - OF (base, glicose, lactose, xilose e maltose): Especificação: meio verde escuro translúcido - Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'OF-Xilose. Especificação: B. cepacia ATCC 17759  Oxidação - Resultado: Adequado OF-Xilose. Especificação: K. pneumoniae ATCC 13883 Oxidação e Fermentação - Resultado: Adequado OF-Xilose. Especificação: M. osloensis ATCC 10973  Inalterado - Resultado: Adequado'
        },
        'PI93': {
            aspecto: 'pH final - OF (base, glicose, lactose, xilose e maltose): Especificação:  7,1 ± 0,2 - Resultado: Adequado Aspecto final - OF (base, glicose, lactose, xilose e maltose): Especificação: meio verde escuro translúcido - Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'OF-Maltose. Especificação: S. maltophilia Cepa Selvagem Oxidação - Resultado: Adequado OF-Maltose. Especificação: K. pneumoniae ATCC 13883 Oxidação e Fermentação - Resultado: Adequado OF-Maltose. Especificação: M. osloensis ATCC 10973  Inalterado - Resultado: Adequado'
        },
        'PI94': {
            aspecto: 'pH final - OF (base, glicose, lactose, xilose e maltose): Especificação:  7,1 ± 0,2 - Resultado: Adequado Aspecto final - OF (base, glicose, lactose, xilose e maltose): Especificação: meio verde escuro translúcido - Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'OF-Lactose. Especificação: B. cepacia ATCC 17759  Oxidação - Resultado: Adequado OF-Lactose. Especificação: K. pneumoniae ATCC 13883 Oxidação e Fermentação - Resultado: Adequado OF-Lactose. Especificação: M. osloensis ATCC 10973  Inalterado - Resultado: Adequado'
        },
        'PI95': {
            aspecto: 'pH final - Gelatina: 6,9 ± 0,1 - Resultado: Adequado Aspecto final - Gelatina: Especificação: Meio âmbar claro, gelatinoso e ligeiramente opalescente - Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Meio de Gelatina Especificação: P. aeruginosa ATCC 27853   Meio sólido após refrigeração. Resultado: Adequado Meio de Gelatina Especificação: S. marcescens ATCC 43861 Meio liquefeito após refrigeração. Resultado: Adequado'
        },
        'PA124': {
            aspecto: 'pH final - EPM: Especificação:  7,3 ± 0,1 - Resultado: Adequado pH final - Lisina: Especificação:  6,0 ± 0,2 - Resultado: Adequado pH final - MIO: Especificação:  6,5 ± 0,2 - Resultado: Adequado pH final - Citrato: Especificação:  6,9 ± 0,2 - Resultado: Adequado pH final - Rhamnose: Especificação:  6,8 ± 0,2 - Resultado: Adequado  Aspecto final - EPM:: Especificação: meio verde escuro translúcido ligeiramente opalescente - Resultado: Adequado Aspecto final  - Lisina: Especificação: meio púrpura translúcido - Resultado: Adequado Aspecto final  - MIO: Especificação:  meio púrpura translúcido ligeiramente opalescente - Resultado: Adequado Aspecto final - Citrato: Especificação:meio verde escuro translúcido ligeiramente opalescente - Resultado: Adequado Aspecto final - Rhamnose: Especificação: meio verde claro translúcido - Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'EPM: Especificação: P. vulgaris ATCC 13315 LTD +; Glicose +; Gás +; H2S +. Resultado: Adequado EPM: Especificação: E. coli ATCC 25922 LTD -; Glicose +; Gás +; H2S -. Resultado: Adequado EPM: Especificação: P. aeruginosa ATCC 27853 LTD -; Glicose -; Gás -; H2S -. Resultado: Adequado EPM mini: Especificação: S. flexneri ATCC 12022 LTD -; Glicose +; Gás -; H2S -. Resultado: Adequado EPM mini: Especificação:S. typhimurium ATCC 14028 LTD -; Glicose +; Gás +; H2S +. Resultado: Adequado  Caldo Lisina mini: Especificação: S. flexneri ATCC 12022 - (coloração amarela). Resultado: Adequado Caldo Lisina mini: Especificação: S. typhimurium ATCC 14028 + (coloração púrpura). Resultado: Adequado  MIO mini: Especificação: E. coli ATCC 25922 Motilidade +; Indol +; Ornitina +. Resultado: Adequado MIO mini: Especificação:S. flexneri ATCC 12022 Motilidade -; Indol -; Ornitina -. Resultado: Adequado  Citrato mini: Especificação: E. coli ATCC 25922 Crescimento ausente, sem mudança da coloração. Resultado: Adequado Citrato mini: Especificação: K. pneumoniae ATCC 13883 Crescimento com mudança da coloração do meio para azul. Resultado: Adequado  Caldo Rhamnose mini:  K. pneumoniae ATCC 13883 + (coloração amarela). Resultado: Adequado Caldo Rhamnose mini: S. flexneri ATCC 12022 - (coloração verde). Resultado: Adequado   Esterilidade - Especificação: Ausência de crescimento. Resultado: Adequado'
        },
        'PI85': {
            aspecto: 'pH final - EPM: Especificação:  7,3 ± 0,1 - Resultado: Adequado  Aspecto final - EPM:: Especificação: meio verde escuro translúcido ligeiramente opalescente - Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'EPM: Especificação: P. vulgaris ATCC 13315 LTD +; Glicose +; Gás +; H2S +. Resultado: Adequado EPM: Especificação: E. coli ATCC 25922 LTD -; Glicose +; Gás +; H2S -. Resultado: Adequado EPM: Especificação: P. aeruginosa ATCC 27853 LTD -; Glicose -; Gás -; H2S -. Resultado: Adequado EPM mini: Especificação: S. flexneri ATCC 12022 LTD -; Glicose +; Gás -; H2S -. Resultado: Adequado EPM mini: Especificação:S. typhimurium ATCC 14028 LTD -; Glicose +; Gás +; H2S +. Resultado: Adequado'
        },
        'PI86': {
            aspecto: 'pH final - MIO: Especificação:  6,5 ± 0,2 - Resultado: Adequado Aspecto final  - MIO: Especificação:  meio púrpura translúcido ligeiramente opalescente - Resultado: Adequado ',
            bacteriana: 'conforme',
            infoText1: 'MIO mini: Especificação: E. coli ATCC 25922 Motilidade +; Indol +; Ornitina +. Resultado: Adequado MIO mini: Especificação:S. flexneri ATCC 12022 Motilidade -; Indol -; Ornitina -. Resultado: Adequado  '
        },
        'PI87': {
            aspecto: 'pH final - Lisina: Especificação:  6,0 ± 0,2 - Resultado: AdequadoAspecto final  - Lisina: Especificação: meio púrpura translúcido - Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Caldo Lisina mini: Especificação: S. flexneri ATCC 12022 - (coloração amarela). Resultado: Adequado Caldo Lisina mini: Especificação: S. typhimurium ATCC 14028 + (coloração púrpura). Resultado: Adequado'
        },
        'PI88': {
            aspecto: 'pH final - Rhamnose: Especificação:  6,8 ± 0,2 - Resultado: Adequado Aspecto final - Rhamnose: Especificação: meio verde claro translúcido - Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Caldo Rhamnose mini:  K. pneumoniae ATCC 13883 + (coloração amarela). Resultado: Adequado Caldo Rhamnose mini: S. flexneri ATCC 12022 - (coloração verde). Resultado: Adequado'
        },
        
        'PI89': {
            aspecto: 'pH final - Citrato: Especificação:  6,9 ± 0,2 - Resultado: Adequado Aspecto final - Citrato: Especificação:meio verde escuro translúcido ligeiramente opalescente - Resultado: Adequado ',
            bacteriana: 'conforme',
            infoText1: 'Citrato mini: Especificação: E. coli ATCC 25922 Crescimento ausente, sem mudança da coloração. Resultado: Adequado Citrato mini: Especificação: K. pneumoniae ATCC 13883 Crescimento com mudança da coloração do meio para azul. Resultado: Adequado'
        },
        'PI88': {
            aspecto: 'pH final - Rhamnose: Especificação:  6,8 ± 0,2 - Resultado: Adequado Aspecto final - Rhamnose: Especificação: meio verde claro translúcido - Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Caldo Rhamnose mini:  K. pneumoniae ATCC 13883 + (coloração amarela). Resultado: Adequado Caldo Rhamnose mini: S. flexneri ATCC 12022 - (coloração verde). Resultado: Adequado'
        },
        'PA379	Swab de Rayon Estéril pcte c/ 100 un - Sob encomenda': {
            aspecto: 'Aspecto. Especificação: Haste plástica de 15 cm com ponta de fibras de Rayon. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Esterilidade. Especificação: Ausência de crescimento. Resultado: Adequado'
        },
        'PA150	Acquaplus II cx c/ 10 testes - Sob encomenda': {
            aspecto: 'Aspecto FLM -  Especificação: Pó homogêneo amarelo a creme. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho Microbiológico P. aeruginosa ATCC 27853 - Especificação: Turvação sem fluorescência e indol negativo. Resultado: Adequado Desempenho Microbiológico K. pneumoniae ATCC 13883 - Especificação: Turvação verde azulada sem fluorescência e indol negativo. Resultado: Adequado Desempenho Microbiológico E. coli ATCC 25922 - - Especificação: Turvação verde azulada com fluorescência e indol positivo. Resultado: Adequado Esterilidade dos sacos de coleta,  seringas e tubos PS: Ausência de crescimento'
        },
        'PA149	Acquaplus I sachê c/ 10 testes': {
            aspecto: 'Aspecto final FLM -  Especificação: Pó homogêneo amarelo a creme.  Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho Microbiológico P. aeruginosa ATCC 27853 - Especificação: Turvação sem fluorescência e indol negativo. Resultado: Adequado Desempenho Microbiológico K. pneumoniae ATCC 13883 - Especificação: Turvação verde azulada sem fluorescência e indol negativo. Resultado: Adequado Desempenho Microbiológico E. coli ATCC 25922 -  Especificação: Turvação verde azulada com fluorescência e indol positivo. Resultado: Adequado Esterilidade dos sacos de coleta: Especificação: Ausência de crescimento. Resultado: Adequado'
        },
        'PA267	Agulha para Repique de Niquel Cromo Com Cabo': {
            aspecto: 'Aspecto. Especificação: Cabo com Agulha medindo 26,5 cm ± 0,5 cm de comprimento. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Não aplicável.'
        },
        'PA268	Agulha para Repique de Niquel Cromo Sem Cabo - Sob encomenda': {
            aspecto: 'Aspecto. Especifciação: Agulha medindo 7,5 cm ± 0,5 cm de comprimento. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Não aplicável.'
        },
        'PA269	Agulha para Repique de Platina Com Cabo': {
            aspecto: 'Aspecto. Especificação: Agulha medindo 26,0 ± 1,0 cm de comprimento. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Não aplicável.'
        },
        'PA270	Agulha para Repique de Platina Sem Cabo - Sob encomenda': {
            aspecto: 'Aspecto. Especificação: Agulha medindo 7,5 ± 1,0 cm de comprimento. resultado: Adequado.',
            bacteriana: 'conforme',
            infoText1: 'Não aplicável.'
        },
        'PA271	Alça de Niquel Cromo Com Cabo 0,001 mL': {
            aspecto: 'Não aplicável.',
            bacteriana: 'conforme',
            infoText1: 'Não aplicável.'
        },
        'PA272	Alça de Niquel Cromo Com Cabo 0,01 mL': {
            aspecto: 'Não aplicável.',
            bacteriana: 'conforme',
            infoText1: 'Não aplicável.'
        },
        'PA273	Alça de Niquel Cromo Sem Cabo': {
            aspecto: 'Não aplicável.',
            bacteriana: 'conforme',
            infoText1: 'Não aplicável.'
        },
        'PA274	Alça de Niquel Cromo Sem Cabo 0,001 mL': {
            aspecto: 'Não aplicável.',
            bacteriana: 'conforme',
            infoText1: 'Não aplicável.'
        },
        'PA275	Alça de Niquel Cromo Sem Cabo 0,01 mL': {
            aspecto: 'Não aplicável.',
            bacteriana: 'conforme',
            infoText1: 'Não aplicável.'
        },
        'PA276	Alça de Platina Com Cabo - Sob encomenda': {
            aspecto: 'Aspecto. Especificação: Alça com diâmetro interno de  4,9 – 5,1 mm. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Não aplicável.'
        },
        'PA277	Alça de Platina Com Cabo 0,001 mL': {
            aspecto: 'Não aplicável.',
            bacteriana: 'conforme',
            infoText1: 'Não aplicável.'
        },
        'PA278	Alça de Platina Com Cabo 0,01 mL': {
            aspecto: 'Não aplicável.',
            bacteriana: 'conforme',
            infoText1: 'Não aplicável.'
        },
        'PA279	Alça de Platina Sem Cabo - Sob encomenda': {
            aspecto: 'Aspecto. Especifciação: Alça com diâmetro interno de 4,9 – 5,1 mm. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Não aplicável.'
        },
        'PA280	Alça de Platina Sem Cabo 0,001mL': {
            aspecto: 'Não aplicável.',
            bacteriana: 'conforme',
            infoText1: 'Não aplicável.'
        },
        'PA281	Alça de Platina Sem Cabo 0,01mL': {
            aspecto: 'Não aplicável.',
            bacteriana: 'conforme',
            infoText1: 'Não aplicável.'
        },
        'PA282	Alça de Niquel Cromo Com Cabo': {
            aspecto: 'Diâmetro interno. Especificação: 4,4 mm a 4,8 mm. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Não aplicável.'
        },
        'PA283	Alça Tipo L de Niquel Cromo Com Cabo - Sob encomenda': {
            aspecto: 'Aspecto. Especificação: Alça medindo 7,5 cm ± 0,5 cm de comprimento com a extremidade dobrada em ângulo de 90º deixando o “L” com 5,0 mm. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Não aplicável.'
        },
        'PA240	EDTA 5% frasco c/ 500mL': {
            aspecto: 'Macroscópica. Especificação: O anticoagulante deve apresentar-se límpido, de coloração azul e sem precipitados. Resultado: O anticoagulante apresenta-se dentro da especificação.',
            bacteriana: 'conforme',
            infoText1: 'Avaliação da atividade anticoagulante. Especificação: Sangue total colocado no EDTA 5% em volumes de 1, 2, 3, 4 e 5 ml. Resultado: Em todos os volumes o sangue foi anticoagulado e não houve, após análise de extensão sanguínea, alterações morfológicas.'
        },
        'PA239	EDTA 5% frasco c/ 100mL': {
            aspecto: 'Macroscópica. Especificação: O anticoagulante deve apresentar-se límpido, de coloração azul e sem precipitados. Resultado: O anticoagulante apresenta-se dentro da especificação.',
            bacteriana: 'conforme',
            infoText1: 'Avaliação da atividade anticoagulante. Especificação: Sangue total colocado no EDTA 5% em volumes de 1, 2, 3, 4 e 5 ml. Resultado: Em todos os volumes o sangue foi anticoagulado e não houve, após análise de extensão sanguínea, alterações morfológicas.'
        },
        'PA219	May Grunwald frasco c/ 1000mL': {
            aspecto: 'Macroscópica. Especificação: O corante deve apresentar-se  sem precipitados. A verificação de precipitados é feita por gotejamento em papel de filtro e superfície inox.  Resultado: O corante apresenta-se sem precipitados.',
            bacteriana: 'conforme',
            infoText1: 'Coloração de extensões sanguíneas (em tampão, água deionizada e água de torneira) para avaliação das características tintoriais. Especificação: Coloração pela técnica de May-Grünwald e Giemsa.  Resultado: As células mostraram-se com as características tintoriais esperadas.'
        },
        'PA194	EA 36 frasco c/ 1000mL': {
            aspecto: 'Macroscópica. -  Especificação: Avaliação da presença de precipitados a partir de gotejamento em papel de filtro gramatura 80.  Resultado: O corante não apresenta precipitados. A coloração  está dentro do padrão esperado.',
            bacteriana: 'conforme',
            infoText1: 'Coloração de esfregaços para avaliação das características tintoriais -  Especificação: Coloração pela técnica de Papanicolau.  Resultado: As células mostraram-se bem preservadas com as características tintoriais   dentro do esperado.'
        },
        'PA195	EA 36 frasco c/ 500mL - Conjunto de Coloração Papanicolau': {
            aspecto: 'Macroscópica. -  Especificação: Avaliação da presença de precipitados a partir de gotejamento em papel de filtro gramatura 80.  Resultado: O corante não apresenta precipitados. A coloração  está dentro do padrão esperado.',
            bacteriana: 'conforme',
            infoText1: 'Coloração de esfregaços para avaliação das características tintoriais. -  Especificação: Coloração pela técnica de Papanicolau.  Resultado: As células mostraram-se bem preservadas com as características tintoriais   dentro do esperado.'
        },
        'PA201	Giemsa frasco c/ 1000mL': {
            aspecto: 'Macroscópica -  Especificação: O corante deve apresentar-se  sem precipitados. A verificação de precipitados é feita por gotejamento em papel de filtro e superfície inox.  Resultado: O corante apresenta-se sem precipitados.',
            bacteriana: 'conforme',
            infoText1: 'Coloração de extensões sanguíneas (em tampão, água deionizada e água de torneira) para avaliação das características tintoriais. -  Especificação: Coloração pela técnica de May-Grünwald e Giemsa.  Resultado: As células mostraram-se com as características tintoriais esperadas.'
        },
        'PA202	Giemsa frasco c/ 500mL': {
            aspecto: 'Macroscópica. Especificação: O corante deve apresentar-se sem precipitados. A verificação de precipitados é feita por gotejamento em papel de filtro e superfície inox.  Resultado: O corante apresenta-se sem precipitados.',
            bacteriana: 'conforme',
            infoText1: 'Coloração de extensões sanguíneas (em tampão, água deionizada e água de torneira) para avaliação das características tintoriais. - Especificação:  Coloração pela técnica de May-Grünwald e Giemsa. Resultado: As células mostraram-se com as características tintoriais esperadas.'
        },
        'PA203	Hematoxilina de Harris frasco c/ 1000mL': {
            aspecto: 'Macroscópica.-  Especificação: Avaliação da presença de precipitados a partir de gotejamento em papel de filtro gramatura 80. Pode haver a formação de precipitados.  Resultado: O corante não apresenta precipitados.',
            bacteriana: 'conforme',
            infoText1: 'Coloração de esfregaços para avaliação das características tintoriais. -  Especificação: Coloração pela técnica de Papanicolau.  Resultado: As células mostraram-se bem preservadas e com as características tintoriais esperadas.'
        },
        'PA204	Hematoxilina de Harris frasco c/ 500mL - Conjunto de Coloração Papanicolau': {
            aspecto: 'Macroscópica. - Especificação: Avaliação da presença de precipitados a partir de gotejamento em papel de filtro gramatura 80. Pode haver a formação de precipitados. Resultado: O corante não apresenta precipitados.',
            bacteriana: 'conforme',
            infoText1: 'Coloração de esfregaços para avaliação das características tintoriais. -  Especificação: Coloração pela técnica de Papanicolau.  Resultado: As células mostraram-se bem preservadas e com as características tintoriais esperadas.'
        },
        'PA205	Kit Instant Prov frascos c/ 500mL': {
            aspecto: 'Macroscópica.  Corante I: Especifciação: coloração azulada e límpida contra a luz, esverdeada e turva abaixo da linha da luz e sem precipitados. Resultado: Adequado. Corante II: Especificação: coloração eosina  límpida e sem precipitados.  Resultado: Adequado. Corante III: Especifciação: com coloração azul intensa e sem precipitados.  Resultado: Adequado.',
            bacteriana: 'conforme',
            infoText1: 'Coloração de extensões sanguíneas pela técnica descrita para o corante rápido. Especifciação: Células com as características tintoriais esperadas. Resultado: Adequado.'
        },
        'PA206	Instant Prov I frasco c/ 500mL': {
            aspecto: 'Macroscópica. Especificação: O corante I deve apresentar-se com coloração azulada e límpida contra a luz, esverdeada e turva abaixo da linha da luz e sem precipitados. Resultado: O corante I apresenta-se dentro das especificações desejadas.',
            bacteriana: 'conforme',
            infoText1: 'Coloração de extensões sanguíneas para avaliação das características tintoriais. Especificação: Coloração pela técnica descrita para o corante rápido.  Resultado: As células mostraram-se com as características tintoriais esperadas.'
        },
        'PA207	Instant Prov II frasco c/ 500mL': {
            aspecto: 'Macroscópica. Especificação: O corante II deve apresentar-se com coloração eosina e límpida e sem precipitados.  Resultado: O corante II apresenta-se dentro das especificações desejadas.',
            bacteriana: 'conforme',
            infoText1: 'Coloração de extensões sanguíneas para avaliação das características tintoriais. Especificação: Coloração pela técnica descrita para o corante rápido.  Resultado: As células mostraram-se com as características tintoriais esperadas.'
        },
        'PA208	Instant Prov III frasco c/ 500mL': {
            aspecto: 'Macroscópica. Especificação: O corante III deve apresentar-se com coloração azul intensa e sem precipitados. Resultado: O corante III apresenta-se dentro das especificações desejadas.',
            bacteriana: 'conforme',
            infoText1: 'Coloração de extensões sanguíneas para avaliação das características tintoriais. -  Especificação: Coloração pela técnica descrita para o corante rápido.  Resultado: As células mostraram-se com as características tintoriais esperadas.'
        },
        'PA209	Leishmann frasco c/ 1000mL': {
            aspecto: 'Macroscópica. Especificação: O corante deve apresentar-se  sem precipitados. A verificação de precipitados é feita por gotejamento em papel de filtro e superfície inox. Resultado: O corante apresenta-se sem precipitados.',
            bacteriana: 'conforme',
            infoText1: 'Coloração de extensões sanguíneas (em tampão, água deionizada e água de torneira) para avaliação das características tintoriais. Especificação: Coloração pela técnica de Leishman. Resultado: As células mostraram-se com as características tintoriais esperadas.'
        },
        'PA210	Leishmann frasco c/ 500mL': {
            aspecto: 'Macroscópica. Especificação: O corante deve apresentar-se  sem precipitados. A verificação de precipitados é feita por gotejamento em papel de filtro e superfície inox. Resultado: O corante apresenta-se sem precipitados.',
            bacteriana: 'conforme',
            infoText1: 'Coloração de extensões sanguíneas (em tampão, água deionizada e água de torneira) para avaliação das características tintoriais. -  Especificação: Coloração pela técnica de Leishman. Resultado: As células mostraram-se com as características tintoriais esperadas.'
        },
        'PA211	Líquido de Turck frasco c/ 1000mL': {
            aspecto: 'Macroscópica. Especificação: O líquido de Turk deve apresentar-se com coloração levemente azulada, límpido, sem precipitados e com odor acético.   Resultado: O líquido de Turk apresenta-se com coloração levemente azulada, límpido, sem precipitados e com odor acético.',
            bacteriana: 'conforme',
            infoText1: 'Contagem global de leucócitos -  Especificação: Sangue total coletado com EDTA 5% e diluído 1:20 no líquido de Turk. Resultado: A hemólise eritrocitária foi total e os leucócitos estavam com a morfologia bem evidente.'
        },
        'PA212	Líquido de Turck frasco c/ 500mL': {
            aspecto: 'Macroscópica. Especificação: O líquido de Turk deve apresentar-se com coloração levemente azulada, límpido, sem precipitados e com odor acético.   Resultado: O líquido de Turk apresenta-se com coloração levemente azulada, límpido, sem precipitados e com odor acético.',
            bacteriana: 'conforme',
            infoText1: 'Contagem global de leucócitos. -  Especificação: Sangue total coletado com EDTA 5% e diluído 1:20 no líquido de Turk. Resultado: A hemólise eritrocitária foi total e os leucócitos estavam com a morfologia bem evidente.'
        },
        'PA186	Conjunto de Coloração Papanicolau frascos c/ 500mL': {
            aspecto: 'Análise Macroscópica:  Avaliação da presença de precipitados a partir de gotejamento em papel de filtro gramatura 80: Hematoxilina de Harris. Especificação: ausência de precipitados. Resultado: Adequado Orange G-6: Especificação: ausência de precipitados. Resultado: Adequado EA-36: Especificação: ausência de precipitados. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Coloração de esfregaços para avaliação das características tintoriais. Hematoxilina de Harris: Especificação: Coloração pela técnica de Papanicolaou. Resultado: As células mostraram-se bem preservadas e com as características tintoriais esperadas. Orange G-6: Especificação: Coloração pela técnica de Papanicolaou. Resultado: As células mostraram-se bem preservadas e com as características tintoriais esperadas. EA-36: Especificação: Coloração pela técnica de Papanicolau. Resultado: As células mostraram-se bem preservadas e com as características tintoriais esperadas.'
        },
        'PA220	May Grunwald frasco c/ 500mL': {
            aspecto: 'Macroscópica. Especificação: O corante deve apresentar-se sem precipitados. A verificação de precipitados é feita por gotejamento em papel de filtro e superfície inox.  Resultado: O corante apresenta-se sem precipitados.',
            bacteriana: 'conforme',
            infoText1: 'Coloração de extensões sanguíneas (em tampão, água deionizada e água de torneira) para avaliação das características tintoriais. Especificação: Coloração pela técnica de May-Grünwald e Giemsa. Resultado: As células mostraram-se com as características tintoriais esperadas.'
        },
        'PA221	Orange G6 frasco c/ 1000mL': {
            aspecto: 'Macroscópica. Especificação:  Avaliação da presença de precipitados a partir de gotejamento em papel de filtro gramatura 80. Pode haver a formação de precipitados.  Resultado: O corante não apresenta precipitados',
            bacteriana: 'conforme',
            infoText1: 'Coloração pela técnica de Papanicolaou. -  Especificação: Coloração pela técnica de Papanicolaou.  Resultado: As células mostraram-se bem preservadas e com as características tintoriais esperadas.'
        },
        'PA222	Orange G6 frasco c/ 500mL - Conjunto de Coloração Papanicolau': {
            aspecto: 'Macroscópica. Especificação: Avaliação da presença de precipitados a partir de gotejamento em papel de filtro gramatura 80. Pode haver a formação de precipitados. Resultado: O corante não apresenta precipitados.',
            bacteriana: 'conforme',
            infoText1: 'Coloração de esfregaços para avaliação das características tintoriais. -  Especificação: Coloração pela técnica de Papanicolaou. Resultado: As células mostraram-se bem preservadas e com as características tintoriais esperadas'
        },
        'PA223	Single Prov frasco c/ 500mL': {
            aspecto: 'Macroscópica. Especificação: O corante deve apresentar-se  sem precipitados. A verificação de precipitados é feita por gotejamento em papel de filtro e superfície inox. Resultado:  O corante apresenta-se sem precipitados.',
            bacteriana: 'conforme',
            infoText1: 'Coloração de extensões sanguíneas (em tempos de 1 a 5 minutos) para avaliação das características tintoriais. Especificação: Coloração pela técnica descrita para o Single Prov.  Resultado: As células mostraram-se com as características tintoriais esperadas.'
        },
        'PA180	Azul de Cresil Brilhante frasco c/ 100mL': {
            aspecto: 'Macroscópica. Especificação: O corante deve apresentar-se  sem precipitados. A verificação de precipitados é feita por gotejamento em papel de filtro e superfície inox.  Resultado: O corante apresenta-se sem precipitados.',
            bacteriana: 'conforme',
            infoText1: 'Coloração supravital dos reticulócitos a partir da mistura sangue e corante na proporção de 1:1. Especificação: Visualização dos reticulócitos pela técnica direta e de contra coloração.  Resultado: Os reticulócitos ficaram bem evidenciados pela coloração dos grumos e filamentos de RNA, em ambas as técnicas.'
        },
        'PA358	Kit rápido Leishmann frascos c/ 1000 mL - Sob encomenda': {
            aspecto: 'Macroscópica. Leishmann: Especificação: O corante deve apresentar-se  sem precipitados. A verificação de precipitados é feita por gotejamento em papel de filtro e superfície inox.  Resultado: Adequado Macroscópica. Solução Tampão pH 6,8: Especificação: Líquido incolor translúcido e pH 6,8 ± 0,2.  Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Coloração de esfregaços para avaliação das características tintoriais. Leishmann:Especificação: Coloração pela técnica de Leishman. Resultado: Adequado Coloração de esfregaços para avaliação das características tintoriais. Solução Tampão pH 6,8:Especificação: Coloração pela técnica de Leishman. Resultado: Adequado'
        },
        'PA359	Kit rápido Wright frascos c/ 1000 mL - Sob encomenda': {
            aspecto: 'Macroscópica. Solução Tampão pH 6,8: Especificação: Líquido incolor translúcido e pH 6,8 ± 0,2. Resultado: Adequado Macroscópica. Wright:  O corante deve apresentar-se  sem precipitados. A verificação de precipitados é feita por gotejamento em papel de filtro e superfície inox.  Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Coloração de esfregaços para avaliação das características tintoriais. Solução Tampão pH 6,8: Especificação: Coloração pela técnica de Wright. Resultado: Adequado Coloração de esfregaços para avaliação das características tintoriais. Especificação: Wright: Coloração pela técnica de Wright. Resultado: Adequado'
        },
        'PA385	Tampão pH 6,8 blister c/ 5 unidades - Sob encomenda': {
            aspecto: 'Macroscópica. Especificação: Pó homogêneo e esbranquiçado. Resultado: Adequado pH. Especificação: 6,8 ± 0,2. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Coloração de extensões sanguíneas na solução tampão pH 6,8 para avaliação das características tintoriais. Especificação: Coloração pela técnica de Leishman. Resultado: As células mostraram-se com as características tintoriais esperadas'
        },
        'PA360	Kit rápido Leishmann frasco c/ 500 mL': {
            aspecto: 'Macroscópica. Leishmann: Especificação: O corante deve apresentar-se  sem precipitados. A verificação de precipitados é feita por gotejamento em papel de filtro e superfície inox. Resultado: Adequado. Macroscópica. Solução Tampão pH 6,8: Especificação: Líquido incolor translúcido e pH 6,8 ± 0,2. Resultado: Adequado.',
            bacteriana: 'conforme',
            infoText1: 'Coloração de esfregaços para avaliação das características tintoriais. Leishmann: Especificação: Coloração pela técnica de Leishman. Resultado: Adequado Coloração de esfregaços para avaliação das características tintoriais. Solução Tampão pH 6,8: Especificação: Coloração pela técnica de Leishman. Resultado: Adequado'
        },
        'PA361	Kit rápido Wright frasco c/ 500 mL - sob encomenda': {
            aspecto: 'pH final - Rhamnose: Especificação:  6,8 ± 0,2 - Resultado: Adequado Aspecto final - Rhamnose: Especificação: meio verde claro translúcido - Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Caldo Rhamnose mini:  K. pneumoniae ATCC 13883 + (coloração amarela). Resultado: Adequado Caldo Rhamnose mini: S. flexneri ATCC 12022 - (coloração verde). Resultado: Adequado'
        },
        'PA362	Wright frasco c/ 500 mL': {
            aspecto: 'Macroscópica. Especificação: O corante deve apresentar-se  sem precipitados. A verificação de precipitados é feita por gotejamento em papel de filtro e superfície inox.  Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Coloração de extensões sanguíneas (em tampão, água deionizada e água de torneira) para avaliação das características tintoriais. Especificação: Coloração pela técnica de Wright.  Resultado: Adequado'
        },
        'PA364	Wright frasco c/ 1000 mL': {
            aspecto: 'Macroscópica. Especificação: O corante deve apresentar-se  sem precipitados. A verificação de precipitados é feita por gotejamento em papel de filtro e superfície inox. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Coloração de extensões sanguíneas (em tampão, água deionizada e água de torneira) para avaliação das características tintoriais. Especificação:  Coloração pela técnica de Wright.  Resultado: Adequado'
        },
        'PA397	Easycolor galão c/ 5.000 mL': {
            aspecto: 'pH final - Rhamnose: Especificação:  6,8 ± 0,2 - Resultado: Adequado Aspecto final - Rhamnose: Especificação: meio verde claro translúcido - Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Coloração manual de extensões sanguíneas para avaliar as caeacterísticas tintoriais celulares.  Especificação: Coloração manual pelos tempos determinados pelo protocolo da Mindray.  Resultado: As células mostraram-se com as características tintoriais esperadas.'
        },
        'PA398	Solução Tampão pH 6,8 galão c/ 5.000 mL': {
            aspecto: 'Macroscópica. Especificação: Líquido incolor translúcido. Resultado: Adequado pH. Especificação: 6,8 ± 0,2. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Coloração de extensões sanguíneas na solução tampão pH 6,8 para avaliação das características tintoriais. Especificação: Coloração pela técnica de May-Grünwald e Giemsa. Resultado: As células mostraram-se com as características tintoriais esperadas.'
        },
        'PA403	Easycolor frasco c/ 1.000 mL - Sob encomenda': {
            aspecto: 'Macroscópica. Especificação: O corante deve apresentar-se sem precipitados. A verificação de precipitados é feita por gotejamento em papel de filtro e superfície inox. Resultado: O corante apresenta-se sem precipitados.',
            bacteriana: 'conforme',
            infoText1: 'Coloração de extensões sanguíneas (em tempos de 1 a 5 minutos) para avaliação das características tintoriais. Especificação: Coloração pela técnica descrita para o Single Prov.  Resultado: As células mostraram-se com as características tintoriais esperadas.'
        },
        'PA405	Easyclean galão c/ 5.000 mL': {
            aspecto: 'Macroscópica. Especificação: O corante deve apresentar-se sem precipitados. A verificação de precipitados é feita por gotejamento em papel de filtro e superfície inox. Resultado: O corante apresenta-se sem precipitados.',
            bacteriana: 'conforme',
            infoText1: 'Coloração de extensões sanguíneas (em tempos de 1 a 5 minutos) para avaliação das características tintoriais. Especificação: Coloração pela técnica descrita para o Single Prov.  Resultado: As células mostraram-se com as características tintoriais esperadas.'
        },
        'PA408	Easycolor II frasco c/ 1000 mL - Sob encomenda': {
            aspecto: 'Macroscópica. Especificação: O corante deve apresentar-se sem precipitados. A verificação de precipitados é feita por gotejamento em papel de filtro e superfície inox. Resultado: O corante apresenta-se sem precipitados.',
            bacteriana: 'conforme',
            infoText1: 'Coloração de extensões sanguíneas (em tempos de 1 a 5 minutos) para avaliação das características tintoriais. Especificação: Coloração pela técnica descrita para o Single Prov.  Resultado: As células mostraram-se com as características tintoriais esperadas.'
        },
        'PA409	Easycolor II galão c/ 5000 mL': {
            aspecto: 'Macroscópica. Especificação: O corante deve apresentar-se sem precipitados. A verificação de precipitados é feita por gotejamento em papel de filtro e superfície inox. Resultado: O corante apresenta-se sem precipitados.',
            bacteriana: 'conforme',
            infoText1: 'Coloração manual de extensões sanguíneas com o corante Easy Color II.  Especificação: Coloração manual pelos tempos determinados pelo protocolo da Sysmex.  Resultado: As células mostraram-se com as características tintoriais esperadas.'
        },
        'PA200	Fucsina Fenicada Ziehl Neelsen frasco c/ 1000mL': {
            aspecto: 'Aspecto final -  Especificação: Líquido vermelho intenso opalescente. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico M. tuberculosis H37 -  Especificação: Coloração vermelha. Resultado: Adequado Desempenho microbiológico E. coli ATCC 25922 -  Especificação: Coloração azul. Resultado: Adequado'
        },
        'PA181	Azul de Metileno Loeffler frasco c/ 500mL': {
            aspecto: 'Verificação do aspecto final e da presença de precipitados a partir de gotejamento em papel de filtro gramatura 80.  Especificação: Líquido azul escuro, translúcido, sem precipitados.  Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Não aplicável.'
        },
        'PA182	Azul de Metileno para Ziehl Neelsen frasco c/ 1000mL': {
            aspecto: 'Verificação do aspecto final e da presença de precipitados a partir de gotejamento em papel de filtro gramatura 80 -  Especificação: Líquido azul-escuro, translúcido, sem precipitados. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho Microbiológico M. tuberculosis H37 -  Especificação: Coloração vermelha   Resultado: Adequado Desempenho Microbiológico E. coli ATCC 25922 -  Especificação: Coloração azul   Resultado: Adequado'
        },
        'PA183	Azul de Metileno para Ziehl Neelsen frasco c/ 500mL': {
            aspecto: 'Verificação do aspecto final e da presença de precipitados a partir de gotejamento em papel de filtro gramatura 80 -  Especificação: Líquido azul-escuro, translúcido, sem precipitados. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico M. tuberculosis H37 -  Especificação: Coloração vermelha   Resultado: Adequado Desempenho microbiológico E. coli ATCC 25922 -  Especificação: Coloração azul   Resultado: Adequado'
        },
        'PA184	Azul de Ziehl Gabbet frasco c/ 500mL': {
            aspecto: 'Verificação do aspecto final e da presença de precipitados a partir de gotejamento em papel de filtro gramatura 80 -  Especificação: Líquido azul escuro, translúcido, sem precipitados. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho Microbiológio M. tuberculosis H37 -  Especificação: Coloração vermelha após técnica de Ziehl Gabbet  Resultado: Adequado Desempenho Microbiológio E. coli ATCC 25922 -  Especificação: Coloração azul após técnica de Ziehl Gabbet  Resultado: Adequado'
        },
        'PA185	Conjunto de Coloração Gram frascos c/500mL': {
            aspecto: 'Verificação do aspecto final e da presença de precipitados a partir de gotejamento em papel de filtro gramatura 80: Cristal Violeta. Especifciação: Líquido violeta escuro, translúcido, sem precipitados. Resultado: Adequado Lugol para Gram. Especifciação: Líquido amarelo-escuro, opalescente, sem precipitados. Resultado: Adequado Descorante para Gram.  Especifciação: Líquido incolor, transparente. Resultado: Adequado Fucsina Fenicada para Gram. Especifciação: Líquido avermelhado translúcido, sem precipitados. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho Microbiológico S. aureus ATCC 25923. Especifação: Coloração púrpura após técnica de Gram. Resultado: Adequado Desempenho Microbiológico E. coli ATCC 25922.  Especifação: Coloração vermelha após técnica de Gram. Resultado: Adequado'
        },
        'PA179	Azul de Algodão frasco c/ 100mL': {
            aspecto: 'Verificação do aspecto final e da presença de precipitados a partir de gotejamento em papel de filtro gramatura 80 -  Especificação: Líquido azul intenso, translúcido e sem precipitados  Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho Microbiológio C. albicans ATCC 10231  -  Especificação: Coloração azul das células fúngicas. Resultado: Adequado'
        },
        'PA224	Violeta Genciana frasco c/ 1000mL': {
            aspecto: 'Verificação do aspecto final e da presença de precipitados a partir de gotejamento em papel de filtro gramatura 80. Especificação: Líquido violeta escuro, translúcido, sem precipitados. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico S. aureus ATCC 25923 -  Especificação: Coloração púrpura. Resultado: Adequado Desempenho microbiológico E. coli ATCC 25922 -  Especificação: Coloração vermelha. Resultado: Adequado'
        },
        'PA225	Violeta Genciana frasco c/ 500m': {
            aspecto: 'Verificação do aspecto final e da presença de precipitados a partir de gotejamento em papel de filtro gramatura 80. Especificação: Líquido violeta escuro, translúcido, sem precipitados. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico S. aureus ATCC 25923 - Especificação: Coloração púrpura. Resultado: Adequado Desempenho microbiológico E. coli ATCC 25922 - Especificação: Coloração vermelha. Resultado: Adequado'
        },
        'PA187	Conjunto de Coloração Ziehl Gabbet frascos c/ 500mL': {
            aspecto: 'Verificação do aspecto final e da presença de precipitados a partir de gotejamento em papel de filtro gramatura 80: Fucsina de Ziehl Gabbet. Especifciação: Líquido vermelho intenso, opalescente, sem precipitados. Resultado: Adequado Azul de Gabbet: Especifciação: Líquido azul- escuro, translúcido, sem precipitados.  Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico M. tuberculosis H37. Especificação: Coloração vermelha após técnica de Ziehl Gabbet. Resultado: Adequado Desempenho microbiológico  E. coli ATCC 25922. Especificação: Coloração azul após técnica de Ziehl Gabbet.  Resultado: Adequado'
        },
        'PA188	Conjunto de Coloração Ziehl Neelsen frascos c/ 500mL': {
            aspecto: 'Verificação do aspecto final e da presença de precipitados a partir de gotejamento em papel de filtro gramatura 80: Fucsina Fenicada de Ziehl Neelsen. Especificação: Líquido vermelho intenso opalescente, sem precipitados. Resultado: Adequado Descorante para BAAR: Especificação: Líquido incolor transparente a levemente amarelado, sem precipitados. Resultado: Adequado Azul de Metileno Conc.:  Especificação: Líquido azul intenso translúcido, sem precipitados. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico M. tuberculosis H37. Especificação: Coloração vermelha após técnica de Ziehl Neelsen. Resultado: Adequado Desempenho microbiológico E. coli ATCC 25922. Especificação: Coloração azul após técnica de Ziehl Neelsen.  Resultado: Adequado'
        },
        'PA189	Cristal Violeta frasco c/ 500mL - Conjunto Coloração Gram': {
            aspecto: 'Verificação do aspecto final e da presença de precipitados a partir de gotejamento em papel de filtro gramatura 80. -  Especificação: Líquido violeta escuro, translúcido, sem precipitados   Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico S. aureus ATCC 25923 -  Especificação: Coloração púrpura   Resultado: Adequado Desempenho microbiológico E. coli ATCC 25922 -  Especificação: Coloração vermelha   Resultado: Adequado'
        },
        'PA190	Descorante para Gram frasco c/ 1000mL': {
            aspecto: 'Aspecto final -  Especificação: Líquido transparente incolor, com odor característico. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico S. aureus ATCC 25923 -  Especificação: Coloração púrpura. Resultado: Adequado Desempenho microbiológico E. coli ATCC 25922 -  Especificação: Coloração vermelha.  Resultado: Adequado'
        },
        'PA191	Descorante para Gram frasco c/ 500mL- Conjunto Coloração Gram': {
            aspecto: 'Aspecto final -  Especificação: Líquido transparente incolor, com odor característico  Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico S. aureus ATCC 25923 -  Especificação: Coloração púrpura   Resultado: Adequado Desempenho microbiológico E. coli ATCC 25922 -  Especificação: Coloração vermelha   Resultado: Adequado'
        },
        'PA192	Descorante para BAAR frasco c/ 1000mL': {
            aspecto: 'Aspecto final -  Especificação: Líquido incolor transparente a levemente amarelado, sem precipitados. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico M. tuberculosis H37 -  Especificação: Coloração vermelha   Resultado: Adequado Desempenho microbiológico E. coli ATCC 25922-  Especificação: Coloração azul   Resultado: Adequado'
        },
        'PA193	Descorante para BAAR frasco c/ 500mL': {
            aspecto: 'Aspecto final -  Especificação: Líquido incolor transparente a levemente amarelado, sem precipitados. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico M. tuberculosis H37 -  Especificação: Coloração vermelha   Resultado: Adequado Desempenho microbiológico E. coli ATCC 25922-  Especificação: Coloração azul   Resultado: Adequado'
        },
        'PA213	Lugol Forte 2% frasco c/ 1000mL': {
            aspecto: 'Aspecto final. Especificação: Líquido amarelo escuro opalescente. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Avaliação da coloração e da presença de precipitados a partir de gotejamento em papel de filtro gramatura 80. Especificação: Ausência de precipitados e coloração idêntica à do lote padrão. Resultado: Adequado'
        },
        'PA214	Lugol Forte 2% frasco c/ 500mL': {
            aspecto: 'Aspecto final. Especificação: Líquido amarelo-escuro opalescente. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Avaliação da coloração e da presença de precipitados a partir de gotejamento em papel de filtro gramatura 80. -  Especificação: Ausência de precipitados e coloração idêntica à do lote padrão.  Resultado: Adequado'
        },
        'PA215	Lugol Forte 5% frasco c/ 1000mL': {
            aspecto: 'Aspecto final. Especificação: Líquido amarelo-escuro opalescente. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Avaliação da coloração e da presença de precipitados a partir de gotejamento em papel de filtro gramatura 80. Especificação: Ausência de precipitados e coloração idêntica à do lote padrão. Resultado: Adequado'
        },
        'PA216	Lugol Forte 5% frasco c/ 500mL': {
            aspecto: 'Aspecto final. Especificação: Líquido amarelo escuro opalescente. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Avaliação da coloração e da presença de precipitados a partir de gotejamento em papel de filtro gramatura 80. Especificação: Ausência de precipitados e coloração idêntica à do lote padrão. Resultado: Adequado'
        },
        'PA217	Lugol para Gram frasco c/ 1000mL': {
            aspecto: 'Verificação do aspecto final e da presença de precipitados a partir de gotejamento em papel de filtro gramatura 80.  Especificação: Líquido amarelo-escuro opalescente, sem precipitados. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho Microbiológio S. aureus ATCC 25923 -  Especificação: Coloração púrpura (ROXO). Resultado: Adequado Desempenho Microbiológio E. coli ATCC 25922 -  Especificação: Coloração vermelh. Resultado: Adequado'
        },
        'PA218	Lugol para Gram frasco c/ 500mL - Conjunto Coloração Gram': {
            aspecto: 'Verificação do aspecto final e da presença de precipitados a partir de gotejamento em papel de filtro gramatura 80. Especificação: Líquido amarelo-escuro opalescente, sem precipitados. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho Microbiológio S. aureus ATCC 25923 - Especificação: Coloração púrpura (ROXO). Resultado: Adequado Desempenho Microbiológio E. coli ATCC 25922 -  Especificação: Coloração vermelha. Resultado: Adequado'
        },
        'PA196	Fucsina de Ziehl Gabbet frasco c/ 500mL - Conjunto de Coloração Ziehl Gabbet': {
            aspecto: 'Verificação do aspecto final e da presença de precipitados a partir de gotejamento em papel de filtro gramatura 80 -  Especificação: Líquido vermelho intenso, opalescente, sem precipitados. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico M. tuberculosis H37 -  Especificação: Coloração vermelha.  Resultado: Adequado Desempenho microbiológico E. coli ATCC 25922 -  Especificação: Coloração azul.  Resultado: Adequado'
        },
        'PA197	Fucsina Fenicada de Ziehl Neelsen frasco c/ 500mL': {
            aspecto: 'Verificação do aspecto final e da presença de precipitados a partir de gotejamento em papel de filtro gramatura 80 -  Especificação: Líquido vermelho intenso opalescente, sem precipitados. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológica M. tuberculosis H37  -  Especificação: Coloração vermelha. Resultado: Adequado Desempenho microbiológica E. coli ATCC 25922 -  Especificação: Coloração azul. Resultado: Adequado'
        },
        'PA198	Fucsina Fenicada Gram frasco c/ 1000mL': {
            aspecto: 'Verificação do aspecto final e da presença de precipitados a partir de gotejamento em papel de filtro gramatura 80 -  Especificação: Líquido avermelhado translúcido, sem precipitados. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico S. aureus ATCC 25923 -  Especificação: Coloração púrpura   Resultado: Adequado Desempenho microbiológico E. coli ATCC 25922 -  Especificação: Coloração vermelha   Resultado: Adequado'
        },
        'PA199	Fucsina Fenicada Gram frasco c/ 500mL - Conjunto Coloração Gram': {
            aspecto: 'Verificação do aspecto final e da presença de precipitados a partir de gotejamento em papel de filtro gramatura 80 -  Especificação: Líquido avermelhado translúcido, sem precipitados. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico S. aureus ATCC 25923 - Especificação: Coloração púrpura. Resultado: Adequado Desempenho microbiológico E. coli ATCC 25922 -  Especificação: Coloração vermelha. Resultado: Adequado'
        },
        'PA162	MIF Modificado frasco c/ 1000mL': {
            aspecto: 'Aspecto final -  Especificação: Líquido incolor translúcido, sem precipitados aparentes. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Conservação de amostra de fezes contendo diversos ovos, cistos e trofozoítos -  Especificação: Preservação das características dos parasitos por até 7 dias. Resultado: Adequado'
        },
        'PA310	Solução tampão pH 6,8 frasco c/ 500 mL': {
            aspecto: 'Macroscópica. Especificação: Líquido incolor translúcido. Resultado: Adequado pH. Especificação: 6,8 ± 0,2. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Coloração de extensões sanguíneas na solução tampão pH 6,8 para avaliação das características tintoriais. Especificação: Coloração pela técnica de May-Grünwald e Giemsa. Resultado: As células mostraram-se com as características tintoriais esperadas'
        },
        'PA284	Vaselina Líquida Estéril frasco c/ 100mL': {
            aspecto: 'Aspecto. Especificação: Líquido incolor transparente viscoso. Resultado: Adequado.  Reação ao tornassol. Especificação: Neutra. . Resultado: Adequado.  Densidade a 20°C.  Especificação: 0,820 – 0,905. Resultado: Adequado.  Viscosidade a 37,8°C.  Especificação: 10,8 – 15,5. Resultado: Adequado.',
            bacteriana: 'conforme',
            infoText1: 'Esterilidade. Especificação: Ausência de crescimento. Resultado: Adequado'
        },
        'PA285	Oleo de Imersão frasco c/ 100mL': {
            aspecto: 'Aspecto. Especifciação:Líquido viscoso, amarelo-claro, translúcido e sem precipitados. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Não aplicável.'
        },
        'PA309	Solução tampão pH 6,8 frasco c/ 1000 mL': {
            aspecto: 'Macroscópica. Especificação: Líquido incolor translúcido. Resultado: Adequado pH. Especificação: 6,8 ± 0,2. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Não aplicável.'
        },
        'PA241	Citoprov Spray frasco c/ 100mL': {
            aspecto: 'Macroscópica. Especificação: O fixador deve apresentar-se límpido, incolor e sem precipitados. Resultado: O fixador apresenta-se dentro da especificação.',
            bacteriana: 'conforme',
            infoText1: 'Coloração de esfregaços para avaliação das características tintoriais. Especificação: Coloração pela técnica de Papanicolau. Resultado: As células mostraram-se bem preservadas e com as características tintoriais esperadas.'
        },
        'PA170	Gluc Up 50g Limao frasco c/ 200mL': {
            aspecto: 'Aspecto. Especificação: Líquido translúcido. Resultado: Adequado Cor. Especificação: Incolor',
            bacteriana: 'conforme',
            infoText1: 'Pesquisa de coliformes totais. Especifciação: Ausência. Resultado: Adequado'
        },
        'PA172	Gluc Up 75g Laranja frasco c/ 300mL': {
            aspecto: 'Aspecto. Especificação: Líquido translúcido. Resultado: Adequado Cor. Especificação: Alaranjado. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Pesquisa de coliformes totais. Especificação: Ausência. Resultado: Adequado'
        },
        'PA173	Gluc Up 75g Limao copo c/ 300mL': {
            aspecto: 'Aspecto. Especificação: Líquido translúcido. Resultado: Adequado Cor. . Especificação: Incolor. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Pesquisa de coliformes totais. Especifciação: Ausência. Resultado: Adequado'
        },
        'PA169	Gluc Up 100g Limão frasco c/ 300mL': {
            aspecto: 'Aspecto. Especificação: Líquido translúcido. Resultado: Adequado Cor. Especificação: Incolor. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Pesquisa de coliformes totais. Especificação: Ausência. Resultado: Adequado'
        },
        'PA177	Gluc Up em Pó Limão Sachê c/ 50g': {
            aspecto: 'Aspecto final, após reconstituição com água. Especificação: Líquido translúcido. Resultado: Adequado Cor. Especificação: Incolor. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Não aplicável.'
        },
        'PA178	Gluc Up em Pó Limão Sachê c/ 75g': {
            aspecto: 'Aspecto final, após reconstituição com água. Especificação: Líquido translúcido. Resultado: Adequado Cor. Especificação: Incolor. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Não aplicável.'
        },
        'PA390	Gluc Up em Pó Limão frasco c/ 900g': {
            aspecto: 'Aspecto final, após reconstituição com água. Cor. Especificação: Incolor. Resultado: Adequado Dosagem. Especificação: Líquido translúcido. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Não aplicável.'
        },
        'PA393	Gluc Up em Pó Limão sachê c/ 900g': {
            aspecto: 'Aspecto final, após reconstituição com água. Cor. Especificação: Incolor. Resultado Incolor.  Dosagem.  Especificação: Líquido translúcido. Resultado Incolor.',
            bacteriana: 'conforme',
            infoText1: 'Não aplicável.'
        },
        'PA163	Hemoprov I Adulto cx c/ 10 frascos': {
            aspecto: 'pH final -  Especificação: 7,4 ± 0,2.  Resultado: Adequado Aspecto final -  Especificação: Meio liquido âmbar claro a medio, totalmente translúcido. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico P. aeruginosa ATCC 27853 -  Especificação: Crescimento bom a excelente. Resultado: Adequado Desempenho microbiológico S. pneumoniae ATCC 49619  -  Especificação: Crescimento bom a excelente. Resultado: Adequado Desempenho microbiológico H. influenzae ATCC 10211  -  Especificação: Crescimento bom a excelente. Resultado: Adequado Esterilidade -  Especificação: Ausência de crescimento. Resultado: Adequado'
        },
        'PA164	Hemoprov I Pediatrico cx c/ 10 frascos': {
            aspecto: 'pH final -  Especificação: 7,4 ± 0,2. Resultado: Adequado Aspecto final -  Especificação: Meio liquido âmbar claro a medio, totalmente translúcido. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico P. aeruginosa ATCC 27853 -  Especificação: Crescimento bom a excelente. Resultado: Adequado Desempenho microbiológico S. pneumoniae ATCC 49619  -  Especificação: Crescimento bom a excelente.  Resultado: Adequado Desempenho microbiológico H. influenzae ATCC 10211 -  Especificação: Crescimento bom a excelente.   Resultado: Adequado Esterilidade -  Especificação: Ausência de crescimento.  Resultado: Adequado'
        },
        'PA165	Hemoprov II Adulto cx c/ 10 frascos': {
            aspecto: 'pH final -  Especificação: 7,4 ± 0,2.  Resultado: Adequado Aspecto final -  Especificação: Meio âmbar claro translúcido. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico N. meningitidis ATCC 13090 -  Especificação: Crescimento bom a excelente. Resultado: Adequado Desempenho microbiológico S. pneumoniae ATCC 49619  -  Especificação: Crescimento bom a excelente. Resultado: Adequado Desempenho microbiológico S. pyogenes ATCC 19615 -  Especificação: Crescimento bom a excelente. Resultado: Adequado Esterilidade -  Especificação: Ausência de crescimento. Resultado: Adequado'
        },
        'PA166	Hemoprov II Pediatrico cx c/ 10 frascos': {
            aspecto: 'pH final -  Especificação: 7,4 ± 0,2. Resultado: Adequado Aspecto final -  Especificação: Meio liquido âmbar claro a medio, totalmente translúcido. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico N. meningitidis ATCC 13090 -  Especificação: Crescimento bom a excelente  Resultado: Adequado  Desempenho microbiológico S. pneumoniae ATCC 49619  -  Especificação: Crescimento bom a excelente  Resultado: Adequado  Desempenho microbiológico S. pyogenes ATCC 19615  -  Especificação: Crescimento bom a excelente   Resultado: Adequado  Esterilidade -  Especificação: Ausência de crescimento  Resultado: Adequado'
        },
        'PA167	Hemoprov III Adulto cx c/ 10 frascos - Sob encomenda': {
            aspecto: 'pH final -  Especificação: 7,4 ± 0,2. Resultado: Adequado Aspecto final -  Especificação: Meio liquido âmbar claro a medio, totalmente translúcido. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico B. fragilis ATCC 25285 -  Especificação: Crescimento bom a excelente. Resultado: Adequado Desempenho microbiológico  S. pneumoniae ATCC 49619  -  Especificação: Crescimento bom a excelente.  Resultado: Adequado Desempenho microbiológico  H. influenzae ATCC 19615  -  Especificação: Crescimento bom a excelente. Resultado: Adequado Esterilidade -  Especificação: Ausência de crescimento. Resultado: Adequado'
        },
        'PA168	Hemoprov III Pediatrico cx c/ 10 frascos': {
            aspecto: 'pH final -  Especificação: 7,4 ± 0,2. Resultado: Adequado Aspecto final -  Especificação: Meio liquido âmbar claro a medio, totalmente translúcido. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico B. fragilis ATCC 25285 -  Especificação: Crescimento bom a excelente.  Resultado: Adequado Desempenho microbiológico S. pneumoniae ATCC 49619  -  Especificação: Crescimento bom a excelente.  Resultado: Adequado Desempenho microbiológico H. influenzae ATCC 19615   -  Especificação: Crescimento bom a excelente.  Resultado: Adequado Esterilidade -  Especificação: Ausência de crescimento.  Resultado: Adequado'
        },
        'PA287	Lact Up 50g Laranja frasco c/ 300mL': {
            aspecto: 'Aspecto. Especificação: Líquido translúcido. Resultado: Adequado Cor. Especificação: Alaranjado. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Pesquisa de coliformes totais. Especificação: Ausência. Resultado: Adequado'
        },
        'PA288	Lact Up 50g Limão copo c/ 300mL': {
            aspecto: 'Aspecto. Especificação: Líquido translúcido levemente opalescente. Resultado: Adequado Cor.  Especificação: Incolor a amarelado. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Pesquisa de coliformes totais. Especificação: Ausência. Resultado: Adequado'
        },
        'PA290	Lact Up em Pó Sachê Limao c/ 50g': {
            aspecto: 'Aspecto final, após reconstituição com água. Especificação: Líquido leitoso. Resultado: Adequado Cor. Especificação: Branco a amarelo-claro. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Não aplicável.'
        },
        'PA401	Lact Up em Pó Limao sachê c/ 900g': {
            aspecto: 'Aspecto final, após reconstituição com água. Especificação: Líquido leitoso Cor. Especificação: Branco a amarelo-claro',
            bacteriana: 'conforme',
            infoText1: 'Não aplicável.'
        },
        'PA384	Agar Sangue/Sangue (Base TSA) pcte c/ 10 biplacas 90x15mm': {
            aspecto: 'pH antes da adição do sangue.  Especificação: 7,3 ± 0,1. Resultado: Adequado Aspecto final. Especificação: Meio vermelho sangue opalescente. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico E. coli ATCC 25922. Especificação: Crescimento excelente de colônias grandes, acinzentadas e brilhantes. Resultado: Adequado Desempenho microbiológico S. aureus ATCC 25923. Especificação: Crescimento excelente de colônias grandes, amareladas e opacas. Resultado: Adequado Desempenho microbiológico S. pneumoniae ATCC 49619. Especificação: Crescimento moderado a bom de colônias pequenas alfa-hemolíticas. Resultado: Adequado Desempenho microbiológico S. pyogenes ATCC 19615. Especificação: Crescimento moderado a bom de colônias pequenas beta-hemolíticas. Resultado: Adequado Esterilidade. Especificação: Ausência de crescimento. Resultado: Adequado'
        },
        'PA42	Agar Chocolate/Thayer Martin pcte c/ 10 biplacas 90x15mm': {
            aspecto: 'pH antes da adição de sangue. Ágar Chocolate: Especificação: 7,3 ± 0,1.  Resultado: Adequado pH antes da adição de sangue. Ágar Thayer Martin: Especificação: 7,3 ± 0,1. Resultado: Adequado Aspecto final. Ágar Chocolate: Especificação: Meio castanho opalescente. Resultado: Adequado Aspecto final. Ágar Thayer Martin: Especificação: Meio castanho opalescente. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico H. influenzae ATCC 10211 (inóculo padronizado em 10.000 UFC/mL). Ágar Chocolate: Especificação: Crescimento moderado a bom de colônias médias translúcidas. Resultado: Adequado Desempenho microbiológico H. influenzae ATCC 10211 (inóculo padronizado em 10.000 UFC/mL). Ágar Thayer Martin: Especificação: N.A. Desempenho microbiológico N. meningitidis ATCC 25923 (inóculo padronizado em 10.000 UFC/mL para ágar chocolate e 100.000 UFC/mL para ágar Thayer Martin). Ágar Chocolate: Especificação: Crescimento moderado a bom de colônias pequenas translúcidas. Resultado: Adequado  Desempenho microbiológico N. meningitidis ATCC 25923 (inóculo padronizado em 10.000 UFC/mL para ágar chocolate e 100.000 UFC/mL para ágar Thayer Martin). Ágar Thayer Martin: Especificação: Crescimento moderado a bom de colônias pequenas translúcidas   Resultado: Adequado Desempenho microbiológico C. albicans ATCC 10231*  Ágar Chocolate: Especificação: N.A. Desempenho microbiológico C. albicans ATCC 10231* Ágar Thayer Martin: Especificação: crescimento acentuadamente inibido. Resultado: Adequado Desempenho microbiológico S. epidermidis ATCC 12228 * Ágar Chocolate: Especificação: N.A.  Desempenho microbiológico S. epidermidis ATCC 12228 * Ágar Thayer Martin: Especificação:  Crescimento acentuadamente inibido. Resultado: Adequado Desempenho microbiológico E. coli ATCC 25922 * Ágar Chocolate: Especificação: N.A. Desempenho microbiológico E. coli ATCC 25922 * Ágar Thayer Martin: Especificação: Crescimento acentuadamente inibido. Resultado: Adequado Esterilidade -  Especificação: Ausência de crescimento  Resultado: Adequado'
        },
        'PA43	Agar Cled/Cled pcte c/ 10 biplacas 90x15mm': {
            aspecto: 'pH final. Especificação: 7,3 ± 0,2. Resultado: Adequado Aspecto final. Especificação: Meio verde claro translúcido, ligeiramente opalescente. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho micrbiológico E. coli ATCC 25922 . Especificação: Crescimento bom a excelente de colônias amarelas grandes. Resultado: Adequado Desempenho micrbiológico S. aureus ATCC 25923. Especificação: Crescimento bom a excelente de colônias amarelas, pequenas e opacas. Resultado: Adequado Desempenho micrbiológico P. vulgaris ATCC 13315.  Especificação: Crescimento bom a excelente de colônias azul esverdeadas, translúcidas. Resultado: Adequado Esterilidade. Especificação: Ausência de crescimento. Resultado: Adequado'
        },
        'PA44	Agar Mac Conkey/SS pcte c/ 10 biplacas 90x15mm': {
            aspecto: 'pH final. Especificação: Ágar Mac Conkey: Especifciação: 7,1 ± 0,2. Resultado: Adequado pH final. Especificação: Ágar SS: Especifciação: 7,4 ± 0,2. Resultado: Adequado Aspecto final Ágar Mac Conkey: Especificação: Meio rosado translúcido, ligeiramente opalescente. Resultado: Adequado Aspecto final Ágar SS: Especificação: Meio vermelho alaranjado, ligeiramente opalescente. Resultado: Adequado Observação: o ágar SS pode apresentar alguns precipitados/cristais, que em nada interferem no seu desempenho.',
            bacteriana: 'conforme',
            infoText1: 'E. coli ATCC 25922  Ágar Mac Conkey: Especificação:  Crescimento excelente de colônias vermelhas com precipitado de bile. Resultado: Adequado E. coli ATCC 25922 Ágar SS: Especificação: Crescimento escasso ou ausente de colônias vermelhas. Resultado: Adequado S. typhimurium ATCC 14028  Ágar Mac Conkey:  Especificação: Crescimento excelente de colônias incolores translúcidas. Resultado: Adequado S. typhimurium ATCC 14028 Ágar SS:  Especificação: Crescimento excelente de colônias incolores com centro negro.  Resultado: Adequado S. flexneri ATCC 12022 Ágar Mac Conkey: Especificação: Crescimento excelente de colônias incolores translúcidas. Resultado: Adequado  S. flexneri ATCC 12022  Ágar SS: Especificação: Crescimento excelente de colônias incolores translúcidas. Resultado: Adequado E. faecalis ATCC 29212 Ágar Mac Conkey: Especificação: Crescimento ausente. Resultado: Adequado E. faecalis ATCC 29212 Ágar SS:  Especificação: Crescimento ausente. Resultado: Adequado Esterilidade. Especificação: Ausência de crescimento. Resultado: Adequado'
        },
        'PA45	Agar Sangue/Chocolate pcte c/ 10 biplacas 90x15mm': {
            aspecto: 'pH final a 25º C. Ágar Sangue:  Especificação: 7,3 ± 0,1. Resultado: Adequado pH final a 25º C. Ágar Chocolate: Especificação: 7,3 ± 0,1. Resultado: Adequado Aspecto final Ágar Sangue: Especificação: Meio vermelho sangue opalescente.  Aspecto final Ágar Chocolate: Especificação: Meio sólido, marrom brilhante, homogêneo.   Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico S. pneumoniae ATCC 49619 (inóculo padronizado em 100 UFC/mL) Ágar Sangue: Especificação: Crescimento bom (em tensão de CO2). Colônias pequenas e umbilicadas, alfa hemolíticas. Resultado: Adequado Desempenho microbiológico S. pneumoniae ATCC 49619 (inóculo padronizado em 100 UFC/mL) Ágar Chocolate: N.A   Desempenho microbiológico S. pyogenes ATCC 19615 (inóculo padronizado em 100 UFC/mL)  Ágar Sangue: Especificação:Crescimento bom a excelente. Colônias pequenas, beta hemolíticas. Resultado: Adequado Desempenho microbiológico S. pyogenes ATCC 19615 (inóculo padronizado em 100 UFC/mL) Ágar Chocolate: Especificação: N.A.  Desempenho microbiológico H. influenzae ATCC 10211 (inóculo padronizado em 100 UFC/mL) Ágar Sangue:  Especificação: N.A.  Desempenho microbiológico H. influenzae ATCC 10211 (inóculo padronizado em 100 UFC/mL) Ágar Chocolate: Especificação: Crescimento moderado a bom de colônias médias translúcidas  Resultado: Adequado Esterilidade. Especificação: Ausência de crescimento. Resultado: Adequado'
        },
        'PA46	Agar Sangue/Mac Conkey pcte c/ 10 biplacas 90x15mm': {
            aspecto: 'pH final. Ágar Sangue: Especificação: 7,3 ± 0,1. Resultado: Adequado pH final. Ágar Mac Conkey: Especificação: 7,1 ± 0,2. Resultado: Adequado Aspecto final. Ágar Sangue: Especificação: Meio vermelho sangue opalescente. Resultado: Adequado Aspecto final. Ágar Mac Conkey: Especificação: Meio rosado translúcido. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico E. coli ATCC 25922 (inóculo padronizado em 10.000 UFC/mL para ágar sangue e em 100.000 UFC/mL para ágar mac conkey) Ágar Sangue: Especificação: Crescimento excelente de colônias grandes, acinzentadas e brilhantes.  Resultado: Adequado Desempenho microbiológico E. coli ATCC 25922 (inóculo padronizado em 10.000 UFC/mL para ágar sangue e em 100.000 UFC/mL para ágar mac conkey) Ágar Mac Conkey: Especificação: Crescimento excelente de colônias vermelhas com precipitado de bile. Resultado: Adequado Desempenho microbiológico S. aureus ATCC 25923 (inóculo padronizado em 10.000 UFC/mL)  Ágar Sangue: Especificação: Crescimento excelente de colônias grandes, amareladas e opacas. Resultado: Adequado  Desempenho microbiológico S. aureus ATCC 25923 (inóculo padronizado em 10.000 UFC/mL)  Ágar Mac Conkey: Especificação: Crescimento ausente. Resultado: Adequado Desempenho microbiológico S. pneumoniae ATCC 49619 (inóculo padronizado em 10.000 UFC/mL) Ágar Sangue: Especificação: Crescimento moderado a bom de colônias pequenas alfa-hemolíticas  Desempenho microbiológico S. pneumoniae ATCC 49619 (inóculo padronizado em 10.000 UFC/mL) Ágar Mac Conkey:Especificação: N.A.  Desempenho microbiológico S. pyogenes ATCC 19615  (inóculo padronizado em 10.000 UFC/mL)  Ágar Sangue: Especificação: Crescimento moderado a bom de colônias pequenas beta-hemolíticas Desempenho microbiológico S. pyogenes ATCC 19615  (inóculo padronizado em 10.000 UFC/mL) Ágar Mac Conkey: Especificação: N.A.   Desempenho microbiológico S. typhimurium ATCC 14028 (inóculo padronizado em 100.000 UFC/mL) Ágar Sangue: Especificação: N.A. Desempenho microbiológico S. typhimurium ATCC 14028 (inóculo padronizado em 100.000 UFC/mL) Ágar Mac Conkey: Crescimento excelente de colônias incolores translúcidas  Resultado: Adequado Desempenho microbiológico S. flexneri ATCC 12022 (inóculo padronizado em 100.000 UFC/mL) Ágar Sangue: Especificação: N.A.  Desempenho microbiológico S. flexneri ATCC 12022 (inóculo padronizado em 100.000 UFC/mL) Ágar Mac Conkey: Especificação: Crescimento excelente de colônias incolores translúcidas.  Resultado: Adequado Desempenho microbiológico E. faecalis ATCC 29212 (inóculo padronizado em 100.000 UFC/mL) Ágar Sangue: Especificação: N.A. Desempenho microbiológico E. faecalis ATCC 29212 (inóculo padronizado em 100.000 UFC/mL) Ágar Mac Conkey: Especificação: Crescimento ausente. Resultado: Adequado Esterilidade -  Especificação: Ausência de crescimento  Resultado: Adequado'
        },
        'PA47	Agar Sangue/Teague pcte c/ 10 biplacas 90x15mm': {
            aspecto: 'pH final.  Ágar Sangue: Especificação: 7,3 ± 0,1. Resultado: Adequado pH final. Ágar Teague:  Especificação: 7,1 ± 0,2. Resultado: Adequado Aspecto final. Ágar Sangue: Especificação: Meio vermelho sangue opalescente. Resultado: Adequado Aspecto final. Ágar Teague:  Especificação: Meio castanho translúcido ligeiramente opalescente. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico E. coli ATCC 25922 (inóculo padronizado em 10.000 UFC/mL para ágar sangue e em 100.000 UFC/mL para ágar teague) Ágar Sangue: Especificação:  Crescimento excelente de colônias grandes, acinzentadas e brilhantes. Resultado: Adequado Desempenho microbiológico E. coli ATCC 25922 (inóculo padronizado em 10.000 UFC/mL para ágar sangue e em 100.000 UFC/mL para ágar teague) Ágar Teague: Especificação: crescimento excelente de colônias púrpura com centro negro e brilho verde metálico. Resultado: Adequado Desempenho microbiológico S. aureus ATCC 25923 (inóculo padronizado em 10.000 UFC/mL para ágar sangue e em 100.000 UFC/mL para ágar teague) Ágar Sangue: Especificação: Crescimento excelente de colônias grandes, amareladas e opacas. Resultado: Adequado Desempenho microbiológico S. aureus ATCC 25923 (inóculo padronizado em 10.000 UFC/mL para ágar sangue e em 100.000 UFC/mL para ágar teague) Ágar Teague:  Especificação: crescimento Ausente. Resultado: Adequado Desempenho microbiológico S. pneumoniae ATCC 49619 (inóculo padronizado em 10.000 UFC/mL) Ágar Sangue: Especificação: Crescimento moderado a bom de colônias pequenas alfa-hemolíticas /  Desempenho microbiológico S. pneumoniae ATCC 49619 (inóculo padronizado em 10.000 UFC/mL) Ágar Teague: Especificação: N.A.   Desempenho microbiológico S. pyogenes ATCC 19615 (inóculo padronizado em 10.000 UFC/mL) Ágar Sangue: Especificação: Crescimento moderado a bom de colônias pequenas beta-hemolíticas /   Desempenho microbiológico S. pyogenes ATCC 19615 (inóculo padronizado em 10.000 UFC/mL) Ágar Teague: N.A.  Desempenho microbiológico S. typhimurium ATCC 14028 (inóculo padronizado em 100.000 UFC/mL) Ágar Sangue: Especificação: N.A.  Desempenho microbiológico S. typhimurium ATCC 14028 (inóculo padronizado em 100.000 UFC/mL) Ágar Teague: Especificação: Crescimento excelente de colônias incolores translúcidas. Resultado: Adequado Esterilidade. Especificação: Ausência de crescimento. Resultado: Adequado'
        },
        'PA48	Agar Sangue/Thayer Martin pcte c/ 10 biplacas 90x15mm': {
            aspecto: 'pH final. Ágar Sangue: Especificação: 7,3 ± 0,1. Resultado: Adequado pH final. Ágar Thayer Martin:  Especificação: 7,3 ± 0,1. Resultado: Adequado Aspecto final Ágar Sangue: Especificação: Meio vermelho sangue opalescente. Resultado: Adequado Aspecto final Ágar Thayer Martin: Especificação: Meio castanho opalescente. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológioco E. coli ATCC 25922 (inóculo padronizado em 10.000 UFC/mL para ágar sangue e em 100.000 UFC/mL para ágar thayer martin). Ágar Sangue: Especificação: Crescimento excelente de colônias grandes,acinzentadas e brilhantes. Resultado: Adequado Desempenho microbiológioco E. coli ATCC 25922 (inóculo padronizado em 10.000 UFC/mL para ágar sangue e em 100.000 UFC/mL para ágar thayer martin) Ágar Thayer Martin: Especificação: Crescimento acentuadamente inibido. Resultado: Adequado Desempenho microbiológioco S. aureus ATCC 259231. Ágar Sangue: Especificação: Crescimento excelente de colônias grandes, amareladas e opacas. Resultado: Adequado Desempenho microbiológioco S. aureus ATCC 259231. Ágar Thayer Martin: Especificação:  N.A  Desempenho microbiológioco S. pneumoniae ATCC 496191 Ágar Sangue:  -  Especificação: Crescimento moderado a bom de colônias pequenas alfa-hemolíticas. Resultado: Adequado Desempenho microbiológioco S. pneumoniae ATCC 496191 Ágar Thayer Martin: Especificação: N.A.  Desempenho microbiológioco S. pyogenes ATCC 196151 Ágar Sangue: Especificação: Crescimento moderado a bom de colônias pequenas beta -hemolíticas. Resultado: Adequado Desempenho microbiológioco S. pyogenes ATCC 196151 Ágar Thayer Martin:  Especificação: N.A.  Desempenho microbiológioco N. meningitidis ATCC 130902. Ágar Sangue: Especificação: N.A.  Desempenho microbiológioco N. meningitidis ATCC 130902 Ágar Thayer Martin: Crescimento moderado a bom de colônias pequenas translúcidas. Resultado: Adequado Desempenho microbiológioco C. albicans ATCC 102312 Ágar Sangue: Especificação: N.A.  Desempenho microbiológioco C. albicans ATCC 102312 Ágar Thayer Martin: Especificação: Crescimento acentuadamente inibido. Resultado: Adequado Desempenho microbiológioco S. epidermidis  ATCC 122282 Ágar Sangue: Especificação: N.A. Desempenho microbiológioco S. epidermidis  ATCC 122282 Ágar Thayer Martin: Especificação: Crescimento acentuadamente inibido. Resultado: Adequado Esterilidade. Especificação: Ausência de crescimento. Resultado: Adequado'
        },
        'PA49	Cromonew UTI pcte c/ 10 biplacas 90x15mm': {
            aspecto: 'pH final. Especificação: 5,8 ± 0,2. Resultado: Adequado Aspecto final. Especificação: Meio âmbar claro a médio, ligeiramente opalescente e sem precipitados. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico E. coli ATCC 25922. Especificação: Crescimento excelente de colônias grandes púrpuras com halo transparente. Resultado: Adequado Desempenho microbiológico P. mirabilis ATCC 25933. Especificação: Crescimento excelente de colônias grandes bege e com halo marrom. Resultado: Adequado Desempenho microbiológico K. pneumoniae ATCC 13883.  Especificação: Crescimento excelente de colônias grandes azul turqueza. Resultado: Adequado Desempenho microbiológico E. faecalis ATCC 29212. Especificação: Crescimento excelente de colônias pequenas azul turqueza. Resultado: Adequado Esterilidade.  Especificação: Ausência de crescimento. Resultado: Adequado'
        },
        'PA50	Uriprov pcte c/ 10 biplacas 90x15mm': {
            aspecto: 'pH final. Ágar CLED:  Especificação: 7,3 ± 0,1.  Resultado: Adequado pH final. Ágar Mac Conkey:  Especificação: 7,1 ± 0,2. Resultado: Adequado Aspecto final. Ágar CLED: Especificação: Meio verde claro translúcido. Resultado: Adequado Aspecto final. Ágar Mac Conkey: Especificação: Meio rosado translúcido. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico E. coli ATCC 25922 (inóculo padronizado em 10.000 UFC/mL para ágar CLED e em 100.000 UFC/mL para ágar MacConkey) Ágar CLED: Especificação: crescimento bom a excelente de colônias grandes, amarelas. Resultado: Adequado Desempenho microbiológico E. coli ATCC 25922 (inóculo padronizado em 10.000 UFC/mL para ágar CLED e em 100.000 UFC/mL para ágar MacConkey) Ágar Mac Conkey: Especificação: Crescimento excelente de colônias vermelhas com precipitado de bile  Resultado: Adequado. Desempenho microbiológico S. aureus ATCC 25923 (inóculo padronizado em 10.000 UFC/mL) Ágar CLED: Especificação: Crescimento bom a excelente de colônias pequenas, amarelas e opacas. Resultado: Adequado  Desempenho microbiológico S. aureus ATCC 25923 (inóculo padronizado em 10.000 UFC/mL)  Ágar Mac Conkey: Especificação: N.A.   Desempenho microbiológico P. vulgaris ATCC 13315 (inóculo padronizado em 10.000 UFC/mL) Ágar CLED: Especificação: Crescimento bom a excelente de colônias azul esverdeadas translúcidas. Resultado: Adequado Desempenho microbiológico P. vulgaris ATCC 13315 (inóculo padronizado em 10.000 UFC/mL) Ágar Mac Conkey: Especificação: N.A.   Desempenho microbiológico S. typhimurium ATCC 14028  (inóculo padronizado em 100.000 UFC/mL) Ágar CLED: Especificação:  N.A. Desempenho microbiológico S. typhimurium ATCC 14028  (inóculo padronizado em 100.000 UFC/mL) Ágar Mac Conkey: Especificação: Crescimento excelente de colônias incolores translúcidas. Resultado: Adequado Desempenho microbiológico S. flexneri ATCC 12022 (inóculo padronizado em 100.000 UFC/mL) Ágar CLED: Especificação: N.A. Desempenho microbiológico S. flexneri ATCC 12022 (inóculo padronizado em 100.000 UFC/mL) Ágar Mac Conkey: Crescimento excelente de colônias incolores translúcidas.  Resultado: Adequado Desempenho microbiológico E. faecalis ATCC 29212 (inóculo padronizado em 100.000 UFC/mL)  Ágar CLED: Especificação: N.A.  Desempenho microbiológico E. faecalis ATCC 29212 (inóculo padronizado em 100.000 UFC/mL) Ágar Mac Conkey: Crescimento ausente. Resultado: Adequado Esterilidade -  Especificação: Ausência de crescimento  Resultado: Adequado'
        },
        'PA295	Agar TSA frasco c/ 100 mL - sob encomenda': {
            aspecto: 'pH final. Especificação: 7,3 ± 0,2. Resultado: Adequado Aspecto final. Especificação: Meio bege claro translúcido. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico E. coli ATCC 25922. Especificação:  Crescimento bom a excelente. Resultado: Adequado  Desempenho microbiológico S. pyogenes ATCC 19615. Especificação: Crescimento bom a excelente. Resultado: Adequado  Esterilidade. Especificação: Ausência de crescimento. Resultado: Adequado'
        },
        'PA100	Agar Cled frasco c/ 100mL': {
            aspecto: 'pH final -  Especificação: 7,3 ± 0,2  Resultado: Adequado Aspecto final -  Especificação: Meio verde claro translúcido, ligeiramente opalescente  Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico E. coli ATCC 25922 -  Especificação: Crescimento bom a excelente de colônias amarelas grandes  Resultado: Adequado Desempenho microbiológico S. aureus ATCC 25923 -  Especificação: Crescimento bom a excelente de colônias amarelas, pequenas e opacas  Resultado: Adequado Desempenho microbiológico P. vulgaris ATCC 13315 -  Especificação: Crescimento bom a excelente de colônias azul esverdeadas, translúcidas  Resultado: Adequado Esterilidade -  Especificação: Ausência de crescimento  Resultado: Adequado'
        },
        'PA101	Agar Enterico de Hektoen frasco c/100mL - Sob encomenda': {
            aspecto: 'pH final -  Especificação: 7,5 ± 0,2  Resultado: Adequado Aspecto final - Especificação: Meio verde translúcido, ligeiramente opalescente  Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico E. coli ATCC 25922 -  Especificação: Crescimento escasso ou ausente de colônias amarelas. Resultado: Adequado Desempenho microbiológico S. typhimurium ATCC 14028   -  Especificação: Crescimento excelente de colônias verde-azuladas com centro preto. Resultado: Adequado Desempenho microbiológico S. flexneri ATCC 12022-  Especificação: Crescimento excelente de colônias verdes com centro verde-azulado. Resultado: Adequado Desempenho microbiológico E. faecalis ATCC 29212 -  Especificação: Crescimento ausente. Resultado: Adequado Esterilidade -  Especificação: Ausência de crescimento. Resultado: Adequado'
        },
        'PA102	Agar Mac Conkey frasco c/ 100mL': {
            aspecto: 'pH final -  Especificação: 7,1 ± 0,2   Resultado: Adequado Aspecto final -  Especificação: Meio rosado translúcido, ligeiramente opalescente   Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico E. coli ATCC 25922 -  Especificação: Crescimento excelente de colônias vermelhas com precipitado de bile  Resultado: Adequado  Desempenho microbiológico P. mirabilis  ATCC 12453 -  Especificação: Crescimento excelente de colônias incolores, sem swarming   Resultado: Adequado  Desempenho microbiológico E. faecalis ATCC 29212 -  Especificação: Crescimento ausente  Resultado: Adequado   Esterilidade -  Especificação: Ausência de crescimento   Resultado: Adequado'
        },
        'PA104	Agar Mueller Hinton frasco c/ 100mL': {
            aspecto: 'pH final -  Especificação: 7,3 ± 0,1. Resultado: Adequado Aspecto final - Especificação: Meio bege claro translúcido, ligeiramente opalescente. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico P. aeruginosa ATCC 27853*  -  Especificação: Crescimento excelente de colônias esverdeadas. Resultado: Adequado Desempenho microbiológico E. faecalis ATCC 29212*-  Especificação: Crescimento excelente de colônias puntiformes. Resultado: Adequado Conteúdo de Cátions (Testado com P. aeruginosa ATCC 27853 padronizada em 108 UFC/mL e discos com 10 µg) -  Especificação: Amicacina – diâmetro da zona de inibição entre 20 e 26 mm / Gentamicina – diâmetro da zona de inibição entre 17 e 23 mm / Tobramicina – diâmetro da zona de inibição entre 20 e 26 mm. Resultado: Adequado Conteúdo de Timidina(Testado com E. faecalis ATCC 29212 padronizada em 108 UFC/mL e disco com 25 µg) -  Especificação: Sulfametoxazol - Trimetoprim – diâmetro da zona de inibição entre 26 e 34 mm. Resultado: Adequado Esterilidade -  Especificação: Ausência de crescimento. Resultado: Adequado'
        },
        'PA106	Agar SS frasco c/ 100mL': {
            aspecto: 'pH final -  Especificação: 7,4 ± 0,2. Resultado: Adequado Aspecto final -  Especificação: Meio vermelho alaranjado, ligeiramente opalescente. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico E. coli ATCC 25922 -  Especificação: Crescimento escasso ou ausente de colônias vermelhas   Resultado: Adequado Desempenho microbiológico S. typhimurium ATCC 14028 -  Especificação: Crescimento excelente de colônias incolores com centro preto   Resultado: Adequado Desempenho microbiológico S. flexneri ATCC 12022 -  Especificação: Crescimento excelente de colônias incolores translúcidas  Resultado: Adequado Desempenho microbiológico E. faecalis ATCC 29212 -  Especificação: Crescimento ausente   Resultado: Adequado Esterilidade -  Especificação:  Ausência de crescimento  Resultado: Adequado'
        },
        'PA109	Meio Base para Agar Sangue frasco c/ 100mL': {
            aspecto: 'pH antes da adição do sangue -  Especificação: 7,3 ± 0,1.  Resultado: Adequado Aspecto final -  Especificação: Meio vermelho sangue opalescente. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico E. coli ATCC 25922-  Especificação: Crescimento excelente de colônias grandes, acinzentadas e brilhantes  Resultado: Adequado Desempenho microbiológico S. aureus ATCC 25923-  Especificação: Crescimento excelente de colônias grandes, amareladas e opacas   Resultado: Adequado Desempenho microbiológico S. pneumoniae ATCC 49619 -  Especificação: Crescimento moderado a bom de colônias pequenas -hemolíticas  Resultado: Adequado Desempenho microbiológico S. pyogenes ATCC 19615 -  Especificação: Crescimento moderado a bom de colônias pequenas -hemolíticas  Resultado: Adequado Esterilidade -  Especificação: Ausência de crescimento  Resultado: Adequado'
        },
        'PA110	Caldo Tetrationato frasco c/ 100mL': {
            aspecto: 'pH final -  Especificação: 8,4 ± 0,2. Resultado: Adequado Aspecto final -  Especificação: Meio incolor a levemente amarelado translúcido, com pptado branco denso no fundo. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico E. coli ATCC 25922 -  Especificação: Crescimento fraco (inibido) de colônias vermelhas com precipitado de bile  Resultado: Adequado Desempenho microbiológico S. typhimurium ATCC 14028 -  Especificação: Crescimento bom a excelente de colônias incolores   Resultado: Adequado Esterilidade -  Especificação: Ausência de crescimento  Resultado: Adequado'
        },
        'PA112	Caldo TSB frasco c/ 100mL': {
            aspecto: 'pH final -  Especificação: 7,3 ± 0,2.  Resultado: Adequado Aspecto final -  Especificação: Meio âmbar claro translúcido a âmbar escuro. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico Aspergillus brasiliensis ATCC 16404 ou similar. Especificação: Crescimento bom a excelente.  Resultado: Adequado Desempenho microbiológico Bacillus subtilis ATCC 6633 ou similar. Especificação: Crescimento bom a excelente. Resultado: Adequado Desempenho microbiológico Candida albicans ATCC 10231 ou similar. Especificação: Crescimento bom a excelente. Resultado: Adequado Esterilidade. Especificação: Ausência de crescimento  Resultado: Adequado'
        },
        'PA410	Caldo TSB c/ 90mL em frasco PET 150mL': {
            aspecto: 'pH final -  Especificação: 7,3 ± 0,2.  Resultado: Adequado Aspecto final -  Especificação: Meio âmbar claro translúcido a âmbar escuro. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico Aspergillus brasiliensis ATCC 16404 ou similar. Especificação: Crescimento bom a excelente.  Resultado: Adequado Desempenho microbiológico Bacillus subtilis ATCC 6633 ou similar. Especificação: Crescimento bom a excelente. Resultado: Adequado Desempenho microbiológico Candida albicans ATCC 10231 ou similar. Especificação: Crescimento bom a excelente. Resultado: Adequado Esterilidade. Especificação: Ausência de crescimento  Resultado: Adequado'
        },
        'PA411	Caldo Letheen c/ 90mL em frasco PET 150mL': {
            aspecto: 'pH final. Especificação: 7,2 ± 0,2. Resultado: Adequado Aspecto final. Especificação: Caldo âmbar claro translúcido. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico E. coli ATCC 8739. Especificação:  Crescimento bom a excelente. Resultado: Adequado Desempenho microbiológico S. aureus ATCC 6538. Especificação: Crescimento bom a excelente. Resultado: Adequado Esterilidade. Especificação: Ausência de crescimento. Resultado: Adequado'
        },
        'PA99	Agar Batata Dextrose frasco c/ 100mL - Sob encomenda': {
            aspecto: 'pH final. Especificação: 7,2 ± 0,2. Resultado: Adequado Aspecto final. Especificação: Meio âmbar claro, ligeiramente opalescente. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico C. albicans ATCC 10231. Especificação: Crescimento bom a excelente de colônias brancas cremosas. Resultado: Adequado Desempenho microbiológico A. niger ATCC 16404. Especificação: Crescimento bom a excelente de colônias com centro negro e periferia branco-amarelada. Resultado: Adequado Esterilidade. Especificação: Ausência de crescimento. Resultado: Adequado'
        },
        'PA125	Cult Pack Agar Bacteriológico sachê 15g - Sob encomenda': {
            aspecto: 'Aspecto - Especificação: Pó/grânulos bege-claro, fluidos, homogêneos. Resultado: Adequado Integridade da embalagem:  Especificação: Íntegra. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Não aplicável.'
        },
        'PA126	Cult Pack Agar Batata Dextrose qsp 1000 mL - Sob encomenda': {
            aspecto: 'Aspecto - Especificação: Pó/Grânulos bege-claro, fluidos, homogêneos. Resultado: Adequado Integridade da embalagem:  Especificação: Íntegra. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Não aplicável.'
        },
        'PA127	Cult Pack Agar Citrato de Simmons qsp 1000 mL - Sob encomenda': {
            aspecto: 'Aspecto - Especificação: Pó amarelo-mostarda a amarelo-esverdeado, fluido e homogêneo. Resultado: Adequado Integridade da embalagem:  Especificação: Íntegra. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Não aplicável.'
        },
        'PA128	Cult Pack Agar Cled qsp 1000 mL - Sob encomenda': {
            aspecto: 'Aspecto - Especificação: Pó fino, bege-esverdeado, homogêneo. Resultado: Adequado Integridade da embalagem:  Especificação: Íntegra. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Não aplicável.'
        },
        'PA129	Cult Pack Agar Columbia qsp 1000 mL - Sob encomenda': {
            aspecto: 'Aspecto - Especificação: Pó fino, bege, homogêneo. Resultado: Adequado Integridade da embalagem:  Especificação: Íntegra. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Não aplicável.'
        },
        'PA130	Cult Pack Agar Dnase qsp 1000 mL - sob encomenda': {
            aspecto: 'Aspecto - Especificação: Pó fino, bege-claro, homogêneo. Resultado: Adequado Integridade da embalagem:  Especificação: Íntegra. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: '- MURRAY, P.R. Manual of Clinical Microbiology. 7th Ed. Washington, ASM Press,1999. - KONEMAN, E.W. et al. Color Atlas and Textbook of Diagnostic Microbiology.  5th Ed. Philadelphia, Lippincott, 1997. - MAC FADDIN, J. F. Biochemical Tests for Identification of Medical Bacteria. 3rd Ed. Philadelphia,  Lippincott Williams & Wilkins, 2000. - ISENBERG, H. D.  Clinical Microbiology Procedures Handbook, Washington, D. C., American Society for Microbiology, 1992. - DIFCO Manual. Dehydrated Culture Media and Reagents for Microbiology, 10th Ed. Detroit, Difco Laboratories, 1984. - DIFCO Manual. 11th Ed. Sparks, Ma., Difco Laboratories, 1998.'
        },
        'PA131	Cult Pack Agar Enterico de Hektoen qsp 1000 mL - Sob encomenda': {
            aspecto: 'Aspecto - Especificação: Pó palha claro homogêneo. Resultado: Adequado Integridade da embalagem:  Especificação: Íntegra. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Não aplicável.'
        },
        'PA132	Cult Pack Agar Mac Conkey qsp 1000 mL': {
            aspecto: 'Aspecto – Especificação: Pó/ Grânulos bege-rosado a rosado homogêneo. Resultado: Adequado Integridade da embalagem:  Especificação: Íntegra. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Não aplicável.'
        },
        'PA133	Cult Pack Agar Manitol qsp 1000 mL - Sob encomenda': {
            aspecto: 'Aspecto – Especificação: Pó/Grânulo levemente rosado e homogêneo. Resultado: Adequado Integridade da embalagem:  Especificação: Íntegra. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Não aplicável.'
        },
        'PA134	Cult Pack Agar Mueller Hinton qsp 1000 mL': {
            aspecto: 'Aspecto – Especificação: Pó fino, bege, homogêneo. Resultado: Adequado Integridade da embalagem:  Especificação: Íntegra. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Não aplicável.'
        },
        'PA136	Cult Pack Agar Sabouraud Dextrose qsp 1000 mL - Sob encomenda': {
            aspecto: 'Aspecto – Especificação: Pó / Grânulos bege, homogêneo. Resultado: Adequado Integridade da embalagem:  Especificação: Íntegra. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Não aplicável.'
        },
        'PA137	Cult Pack Agar SS qsp 1000 mL - Sob encomenda': {
            aspecto: 'Aspecto – Especificação: Pó fino, bege rosado, homogêneo. Resultado: Adequado Integridade da embalagem:  Especificação: Íntegra. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Não aplicável.'
        },
        'PA138	Cult Pack Agar Teague qsp 1000 mL - Sob encomenda': {
            aspecto: 'Aspecto – Especificação: Pó/grânulos púrpura a rosa. Resultado: Adequado Integridade da embalagem:  Especificação: Íntegra. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Não aplicável.'
        },
        'PA139	Cult Pack Agar TSA qsp 1000 mL - Sob encomenda': {
            aspecto: 'Aspecto – Especificação: Pó/grânulo bege-claro homogêneo. Resultado: Adequado Integridade da embalagem: Especificação: Íntegra. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Não aplicável'
        },
        'PA140	Cult Pack Agar TSI qsp 1000 mL - Sob encomenda': {
            aspecto: 'Aspecto – Especificação: Pó bege rosado, fluido, homogêneo. Resultado: Adequado Integridade da embalagem:  Especificação: Íntegra. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Não aplicável.'
        },
        'PA141	Cult Pack Agar XLD qsp 1000 mL - Sob encomenda': {
            aspecto: 'Aspecto – Especificação: Pó fino, rosado, homogêneo. Resultado: Adequado Integridade da embalagem:  Especificação: Íntegra. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Não aplicável.'
        },
        'PA142	Cult Pack Base Agar Sangue sachê 40g - Sob encomenda': {
            aspecto: 'Aspecto – Especificação: Pó/grânulo bege-claro homogêneo. Resultado: Adequado Integridade da embalagem:  Especificação: Íntegra. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Não aplicável.'
        },
        'PA143	Cult Pack Caldo BHI qsp 1000 mL - Sob encomenda': {
            aspecto: 'Aspecto – Especificação: Pó/Grânulos bege-claro,  fluidos, homogêneos. Resultado: Adequado Integridade da embalagem:  Especificação: Íntegra. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Não aplicável.'
        },
        'PA146	Cult Pack Caldo Tetrationato qsp 1000 mL - Sob encomenda': {
            aspecto: 'Aspecto – Especificação: Pó fino, entre branco e bege claro, homogêneo. Resultado: Adequado Integridade da embalagem: Especificação: Íntegra. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Não aplicável.'
        },
        'PA147	Cult Pack Caldo Tioglicolato qsp 1000 mL - Sob encomenda': {
            aspecto: 'Aspecto – Especificação: Pó amarelo-palha fino e homogêneo. Resultado: Adequado Integridade da embalagem: Especificação: Íntegra. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Não aplicável.'
        },
        'PA148	Cult Pack Caldo TSB  qsp 1000 mL - Sob encomenda': {
            aspecto: 'Aspecto – Especificação: Pó fino, bege, homogêneo. Resultado: Adequado Integridade da embalagem: Especificação: Íntegra. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Não aplicável.'
        },
        'PA114	Meio Rugai com Lisina c/ 10 tubos': {
            aspecto: 'pH final - Meio de Rugai: Especificação: 7,4 ± 0,2. Resultado: Adequado pH final - Meio de Lisina Motilidade: Especificação: 6,5 ± 0,2. Resultado: Adequado Aspecto final -  Meio de Rugai: Especificação: Meio verde-escuro translúcido, ligeiramente opalescente.  Resultado: Adequado Aspecto final -  Meio de Lisina Motilidade: Especificação:  Meio púrpura ligeiramente opalescente. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico P. vulgaris ATCC 13315 - Especificação: LTD +; Glicose +; Gás +; H2S +; URE +; LIS -; MOT +; IND +. Resultado: Adequado Desempenho microbiológico K. pneumoniae ATCC 13883 - Especificação: LTD -; Glicose +; Gás +; H2S -; URE +; LIS +; MOT -; IND -. Resultado: Adequado Desempenho microbiológico E. coli ATCC 25922 - Especificação: LTD -; Glicose +; Gás +; H2S -; URE -; LIS +; MOT +; IND +. Resultado: Adequado Desempenho microbiológico P. aeruginosa ATCC 27853 - Especificação: TD -; Glicose -; Gás -; H2S -; URE -; LIS -; MOT +; IND -. Resultado: Adequado Desempenho microbiológico S. flexneri ATCC 12022 - Especificação: LTD -; Glicose +; Gás -; H2S -; URE -; LIS -; MOT -; IND -. Resultado: Adequado Desempenho microbiológico S. typhimurium ATCC 14028  - Especificação: LTD -; Glicose +; Gás +; H2S +; URE -; LIS +; MOT +; IND -.  Resultado: Adequado Esterilidade - Especificação: Ausência de crescimento. Resultado: Adequado'
        },
        'PA313	Agar Sabouraud com Cloranfenicol cx c/ 10 tubos (9mL)': {
            aspecto: 'pH final. Especificação: 5,6 ± 0,2. Resultado: Adequado Aspecto final. Especificação: Meio sólido âmbar claro, ligeiramente opalescente. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico C. albicans ATCC 10231. Especificação: Crescimento bom a excelente de colônias brancas cremosas. Resultado: Adequado Desempenho microbiológico E. coli ATCC 25922. Especificação: Crescimento inibido. Resultado: Adequado Desempenho microbiológico A. niger ATCC 16404. Especificação: Crescimento bom a excelente de colônias cotonosas. Resultado: Adequado Esterilidade. Especificação: Ausência de crescimento. Resultado: Adequado'
        },
        'PA314	Agar Mycosel cx c/ 10 tubos (9mL)': {
            aspecto: 'pH final. Especificação: 7,2 ± 0,2. Resultado: Adequado Aspecto final. Especificação: Meio âmbar claro, ligeiramente opalescente. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico C. albicans ATCC 10231. Especificação: Crescimento bom a excelente de colônias brancas cremosas. Resultado: Adequado Desempenho microbiológico T. mentagrophytes ATCC 9533. Especificação: Crescimento bom a excelente de colônias cotonosas. Resultado: Adequado Desempenho microbiológicoE. coli ATCC 25922. Especificação: Crescimento inibido. Resultado: Adequado Desempenho microbiológico A. niger ATCC 16404. Especificação: Crescimento inibido. Resultado: Adequado Esterilidade. Especificação: Ausência de crescimento. Resultado: Adequado'
        },
        'PA315	Meio de Lowenstein cx c/ 10 tubos (9mL)': {
            aspecto: 'Aspecto final. Especificação: Meio verde-claro opalescente. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico M. tuberculosis H37Rv (ATCC 27294) ou similar. Especificação: Crescimento bom a excelente de colônias granulares, foscas, secas e friáveis. Resultado: Adequado Esterilidade. Especificação: Ausência de crescimento. Resultado: Adequado'
        },
        'PA316	Agar Sabouraud Dextrose cx c/ 10 tubos (9mL)': {
            aspecto: 'pH final. Especificação: 5,6 ± 0,2. Resultado: Adequado Aspecto final. Especificação: Meio âmbar claro, ligeiramente opalescente. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico C. albicans ATCC 10231. Especificação: Crescimento bom a excelente de colônias brancas. Resultado: Adequado Desempenho microbiológico A. niger ATCC 16404. Especificação: Crescimento bom a excelente de colônias negras com  contorno amarelado.  Resultado: Adequado Esterilidade. Especificação: Ausência de crescimento. Resultado: Adequado'
        },
        'PA336	Descontaminante p/ Ogawa Sachê c/ 10 tubos': {
            aspecto: 'Aspecto final. Especificação: Líquido incolor e translúcido. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Esterilidade. Especificação: Ausência de crescimento. Resultado: Adequado'
        },
        'PA52	Agar Bile Esculina cx c/ 10 tubos': {
            aspecto: 'pH final. Especificação: 6,6 ± 0,2. Resultado: Adequado Aspecto final.  Especificação: Meio âmbar claro translúcido, ligeiramente opalescente. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico E. coli ATCC 25922. Especificação: Crescimento ausente. Resultado: Adequado Desempenho microbiológico E. faecalis ATCC 29212.  Especificação: Crescimento bom a excelente com escurecimento do meio. Resultado: Adequado Esterilidade.  Especificação:Ausência de crescimento.  Resultado: Adequado'
        },
        'PA53	Agar Cetrimide cx c/ 10 tubos - Sob encomenda': {
            aspecto: 'pH final. Especificação: 7,4 ± 0,2. Resultado: Adequado Aspecto final. Especificação: Meio incolor opalescente. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico P. aeruginosa ATCC 27853. Especificação: Crescimento bom a excelente com pigmento fluorescente. Resultado: Adequado Desempenho microbiológico E. coli ATCC 25922. Especificação: Crescimento inibido. Resultado: Adequado Desempenho microbiológico S. maltophilia ATCC 13637. Especificação: Crescimento inibido. Resultado: Adequado Esterilidade. Especificação: Ausência de crescimento. Resultado: Adequado'
        },
        'PA54	Agar Chocolate Suplementado cx c/ 08 tubos': {
            aspecto: 'pH final a 25º C. Especificação: 7,3 ± 0,1. Resultado: Adequado Aspecto final. Especificação: Meio castanho opalescente. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico H. influenzae ATCC 10211. Especificação: Crescimento moderado a bom de colônias médias translúcidas. Resultado: Adequado Esterilidade. Especificação: Ausência de crescimento. Resultado: Adequado'
        },
        'PA55	Agar Citrato de Simmons cx c/ 10 tubos': {
            aspecto: 'pH final. Especificação: 6,9 ± 0,2. Resultado: Adequado Aspecto final. Especificação: Meio verde escuro translúcido, ligeiramente opalescente. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico K. pneumoniae ATCC 13883. Especificação: Crescimento com alteração de cor do meio azul. Resultado: Adequado Desempenho microbiológico E. coli ATCC 25922  -  Especificação: Crescimento ausente, sem alteração de cor do meio. Resultado: Adequado Esterilidade. Especificação: Ausência de crescimento. Resultado: Adequado'
        },
        'PA56	Agar Fenilalanina cx c/ 10 tubos': {
            aspecto: 'pH antes da adição do sangue.  Especificação: 7,3 ± 0,2.  Resultado: Adequado Aspecto final. Especificação: Meio âmbar claro translúcido. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico E. coli ATCC 25922. Especificação: Crescimento sem mudança de coloração para verde, após adição de cloreto férrico 10%. Resultado: Adequado Desempenho microbiológico P. mirabilis ATCC 25933.  Especificação: Crescimento com mudança de coloração para verde, após adição de cloreto férrico 10%. Resultado: Adequado Esterilidade. Especificação: Ausência de crescimento. Resultado: Adequado'
        },
        'PA57	Agar Manitol cx c/ 10 tubos': {
            aspecto: 'pH final. Especificação: 7,4 ± 0,2. Resultado: Adequado Aspecto final. Especificação: Meio de cor pêssego a vermelho rosado, ligeiramente opalescente.  Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico S. aureus ATCC 25923.  Especificação: Crescimento moderado a bom de colônias amarelas. Resultado: Adequado Desempenho microbiológico S. epidermidis ATCC 12228.  Especificação: Crescimento moderado a bom de colônias incolores puntiformes. Resultado: Adequado Desempenho microbiológico P. mirabilis ATCC 25933. Especificação: Crescimento acentuadamente inibido. Resultado: Adequado Esterilidade. Especificação: Ausência de crescimento. Resultado: Adequado'
        },
        'PA58	Agar Mycosel cx c/ 08 tubos': {
            aspecto: 'pH final. Especificação: 7,2 ± 0,2. Resultado: Adequado Aspecto final. Especificação: Meio âmbar claro, ligeiramente opalescente. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico C. albicans ATCC 10231. Especificação: Crescimento bom a excelente de colônias brancas cremosas. Resultado: Adequado Desempenho microbiológico T. mentagrophytes ATCC 9533. Especificação: Crescimento bom a excelente de colônias cotonosas. Resultado: Adequado Desempenho microbiológico E. coli ATCC 25922.  Especificação:  Crescimento inibido. Resultado: Adequado Desempenho microbiológico A. niger ATCC 16404. Especificação: Crescimento inibido.Resultado: Adequado Esterilidade. Especificação: Ausência de crescimento. Resultado: Adequado'
        },
        'PA59	Agar OF Glicose cx c/ 10 tubos': {
            aspecto: 'pH final. Especificação: 6,9 ± 0,2. Resultado: Adequado Aspecto final. Especificação: Meio verde escuro translúcido. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desenvolvimento microbiológico P. aeruginosa ATCC 27853.  Especificação: Oxidação. Resultado: Adequado Desenvolvimento microbiológico K. pneumoniae ATCC 13883.  Especificação: Oxidação e Fermentação.  Resultado: Adequado Desenvolvimento microbiológico M. osloensis ATCC 10973. Especificação: Inalterado. Resultado: Adequado Esterilidade. Especificação: Ausência de crescimento. Resultado: Adequado'
        },
        'PA60	Agar Sabouraud Com Cloranfenicol cx c/ 10 tubos': {
            aspecto: 'pH final. Especificação: 5,6 ± 0,2.  Resultado: Adequado Aspecto final. Especificação: Meio sólido âmbar claro, ligeiramente opalescente. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico C. albicans ATCC 10231. Especificação: Crescimento bom a excelente de colônias brancas cremosas. Resultado: Adequado Desempenho microbiológico E. coli ATCC 25922. Especificação: Crescimento inibido.  Resultado: Adequado Desempenho microbiológico A. niger ATCC 16404.  Especificação: Crescimento bom a excelente de colônias cotonosas. Resultado: Adequado Esterilidade.  Especificação: Ausência de crescimento. Resultado: Adequado'
        },
        'PA61	Agar Sabouraud Dextrose cx c/ 08 tubos': {
            aspecto: 'pH final. Especificação: 5,6 ± 0,2. Resultado: Adequado Aspecto final. Especificação: Meio âmbar claro, ligeiramente opalescente. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico C. albicans ATCC 10231. Especificação: Crescimento bom a excelente de colônias brancas. Resultado: Adequado Desempenho microbiológico A. niger ATCC 16404. Especificação: Crescimento bom a excelente de colônias negras com  contorno amarelado. Resultado: Adequado Esterilidade. Especificação: Ausência de crescimento. Resultado: Adequado'
        },
        'PA63	Agar Thayer Martin cx c/ 08 tubos': {
            aspecto: 'pH  antes da adição do sangue. Especificação: 7,3 ± 0,1. Resultado: Adequado Aspecto final. Especificação: Meio castanho opalescente. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico N. meningitidis ATCC 13090. Especificação: Crescimento moderado a bom de colônias pequenas translúcidas. Resultado: Adequado Desempenho microbiológico S. epidermidis ATCC 12228. Especificação: Crescimento acentuadamente inibido. Resultado: Adequado Desempenho microbiológico E. coli ATCC 25922. Especificação: Crescimento acentuadamente inibido. Resultado: Adequado Desempenho microbiológico C. albicans ATCC 10231.  Especificação: Crescimento acentuadamente inibido. Resultado: Adequado Esterilidade. Especificação: Ausência de crescimento. Resultado: Adequado'
        },
        'PA64	Agar TSA cx c/ 10 tubos': {
            aspecto: 'pH final. Especificação: 7,3 ± 0,2. Resultado: Adequado Aspecto final.  Especificação: Meio bege claro translúcido. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico E. coli ATCC 25922.  Especificação: Crescimento bom a excelente. Resultado: Adequado Desempenho microbiológico S. pyogenes ATCC 19615. Especificação: Crescimento bom a excelente. Resultado: Adequado Esterilidade. Especificação: Ausência de crescimento. Resultado: Adequado'
        },
        'PA65	Agar TSI cx c/ 10 tubos': {
            aspecto: 'pH final. Especificação: 7,4 ± 0,2. Resultado: Adequado Aspecto final. Especificação: Meio laranja-avermelhado, ligeiramente opalescente. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico E. coli ATCC 25922.  Especificação: Base Ácida; Ápice Ácido; GÁS +; H2S -. Resultado: Adequado Desempenho microbiológico P. aeruginosa ATCC 27853. Especificação: Base Alcalina; Ápice Alcalino; GÁS -; H2S -.Resultado: Adequado Desempenho microbiológico S. typhimurium ATCC 14028. Especificação: Base Ácida; Ápice Alcalino; GÁS +; H2S +.  Resultado: Adequado Desempenho microbiológico S. flexneri ATCC 12022.  Especificação: Base Ácida; Ápice Alcalino; GÁS -; H2S -. Resultado: Adequado Esterilidade. Especificação: Ausência de crescimento. Resultado: Adequado'
        },
        'PA66	Agar Ureia cx c/ 10 tubos': {
            aspecto: 'pH final. Especificação: 6,8 ± 0,2. Resultado: Adequado Aspecto final. Especificação: Meio alaranjado claro translúcido. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico E. coli ATCC 25922. Especificação: Uréia - (inalterado). Resultado: Adequado Desempenho microbiológico K. pneumoniae ATCC 13883. Especificação: Uréia + (inalterado).  Resultado: Adequado Esterilidade. Especificação: Ausência de crescimento. Resultado: Adequado'
        },
        'PA67	Caldo Arginina cx c/ 10 tubos': {
            aspecto: 'pH final. Especificação: 6,0 ± 0,2. Resultado: Adequado Aspecto final. Especificação: Meio púrpura translúcido. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico K. pneumoniae ATCC 13883. Especificação: - (coloração amarela). Resultado: Adequado Desempenho microbiológico  E. cloacae ATCC 13047 -  Especificação: + (coloração púrpura).  Resultado: Adequado Esterilidade. Especificação: Ausência de crescimento. Resultado: Adequado'
        },
        'PA68	Caldo BHI cx c/ 10 tubos': {
            aspecto: 'pH final. Especificação: 7,4 ± 0,2. Resultado: Adequado Aspecto final. Especificação: Meio âmbar claro translúcido. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico N. meningitidis ATCC 13090. Especificação: Crescimento bom a excelente. Resultado: Adequado Desempenho microbiológico S. pneumoniae ATCC 49619. Especificação: Crescimento bom a excelente. Resultado: Adequado Desempenho microbiológico S. pyogenes ATCC 19615. Especificação: Crescimento bom a excelente. Resultado: Adequado Esterilidade. Especificação: Ausência de crescimento. Resultado: Adequado'
        },
        'PA69	Caldo GBS (Todd Hewitt) cx c/ 10 tubos': {
            aspecto: 'pH final. Especificação: 7,8 ± 0,2. Resultado: Adequado Aspecto final. Especificação: Meio âmbar claro translúcido. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico S. agalactiae ATCC 12386. Especificação: Crescimento bom a excelente. Resultado: Adequado Desempenho microbiológico E. coli ATCC 25922. Especificação: Crescimento inibido. Resultado: Adequado Esterilidade. Especificação: Ausência de crescimento. Resultado: Adequado'
        },
        'PA70	Caldo Glicosado cx c/ 10 tubos': {
            aspecto: 'pH final. Especificação: 7,3 ± 0,2. Resultado: Adequado Aspecto final.  Especificação: Meio âmbar claro translúcido. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico S. pyogenes ATCC 19615 (inóculo padronizado a 10.000 UFC/mL). Especificação: Crescimento bom a excelente. Resultado: Adequado Desempenho microbiológico E. coli ATCC 25922 (inóculo padronizado a 10.000 UFC/mL).  Especificação: Crescimento bom a excelente. Resultado: Adequado Esterilidade. Especificação: Ausência de crescimento. Resultado: Adequado'
        },
        'PA71	Caldo GN cx c/ 10 tubos': {
            aspecto: 'pH final. Especificação: 7,0 ± 0,2. Resultado: Adequado Aspecto final. Especificação: Meio âmbar claro translúcido. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico S. typhimurium ATCC 14028. Especificação: Crescimento bom a excelente no subcultivo. Resultado: Adequado Desempenho microbiológico E. coli ATCC 25922. Especificação: Crescimento bom a excelente no subcultivo. Resultado: Adequado Desempenho microbiológico S. flexneri ATCC 12022. Especificação: Crescimento bom a excelente no subcultivo. Resultado: Adequado Esterilidade. Especificação: Ausência de crescimento. Resultado: Adequado'
        },
        'PA72	Caldo Letheen cx c/ 08 tubos': {
            aspecto: 'pH final. Especificação: 7,2 ± 0,2. Resultado: Adequado Aspecto final. Especificação: Caldo âmbar claro translúcido. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico E. coli ATCC 8739. Especificação:  Crescimento bom a excelente. Resultado: Adequado Desempenho microbiológico S. aureus ATCC 6538. Especificação: Crescimento bom a excelente. Resultado: Adequado Esterilidade. Especificação: Ausência de crescimento. Resultado: Adequado'
        },
        'PA73	Caldo Lisina cx c/ 10 tubos': {
            aspecto: 'pH final. Especificação:  6,0 ± 0,2.  Resultado: Adequado Aspecto final. Especificação: Meio púrpura translúcido. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico S. flexneri ATCC 12022. Especificação: - (coloração amarela).  Resultado: Adequado Desempenho microbiológico S. typhimurium ATCC 14028. Especificação: + (coloração púrpura). Resultado: Adequado Esterilidade. Especificação: Ausência de crescimento. Resultado: Adequado'
        },
        'PA74	Caldo Malonato cx c/ 10 tubos': {
            aspecto: 'pH final. Especificação: 6,7 ± 0,2. Resultado: Adequado Aspecto final. Especificação: Meio verde translúcido. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico K. pneumoniae ATCC 13883. Especificação: + (coloração azul). Resultado: Adequado Desempenho microbiológico E. coli ATCC 25922. Especificação: - (coloração amarela ou verde). Resultado: Adequado Esterilidade. Especificação: Ausência de crescimento. Resultado: Adequado'
        },
        'PA75	Caldo MR-VP cx c/ 10 tubos - Sob encomenda': {
            aspecto: 'pH final. Especificação: 6,9 ± 0,2. Resultado: Adequado Aspecto final. Especificação: Meio âmbar claro translúcido. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico E. aerogenes ATCC 13048. Especificação: MR -; VP +.  Resultado: Adequado Desempenho microbiológico E. coli ATCC 25922 -  Especificação: MR +; VP -. Resultado: Adequado Esterilidade. Especificação: Ausência de crescimento. Resultado: Adequado'
        },
        'PA76	Caldo MTS cx c/ 10 tubos': {
            aspecto: 'pH final. Especificação: 7,3 ± 0,2. Resultado: Adequado Aspecto final. Especificação: Meio púrpura translúcido. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico E. faecalis ATCC 29212. Especificação: Crescimento com mudança de coloração do meio para amarelo. Resultado: Adequado Desempenho microbiológico S. viridans CEPA Selvagem. Especificação: Crescimento ausente, sem mudança de coloração. Resultado: Adequado Esterilidade. Especificação: Ausência de crescimento. Resultado: Adequado'
        },
        'PA77	Caldo Mueller Hinton cx c/ 10 tubos': {
            aspecto: 'pH final. Especificação: 7,3 ± 0,1. Resultado: Adequado Aspecto final. Especificação: Meio bege claro translúcido. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico S. pyogenes ATCC 19615. Especificação: Crescimento bom a excelente. Resultado: Adequado Desempenho microbiológico N. meningitidis ATCC 13090.  Especificação: Crescimento bom a excelente. Resultado: Adequado Esterilidade. Especificação: Ausência de crescimento. Resultado: Adequado'
        },
        'PA78	Caldo Ornitina cx c/ 10 tubos': {
            aspecto: 'pH final. Especificação: 6,0 ± 0,2.  Resultado: Adequado Aspecto final. Especificação: Meio púrpura translúcido. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico K. pneumoniae ATCC 13883. Especificação: - (coloração amarela). Resultado: Adequado Desempenho microbiológico E. cloacae ATCC 13047. Especificação: + (coloração púrpura).  Resultado: Adequado Esterilidade. Especificação: Ausência de crescimento. Resultado: Adequado'
        },
        'PA79	Caldo Purpura de Bromocresol cx c/ 10 tubos - sob encomenda': {
            aspecto: 'pH final. Especificação: 6,8 ± 0,2. Resultado: Adequado Aspecto final. Especificação: Meio púrpura translúcido. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico E. coli ATCC 25922. Especificação: + (coloração amarela). Resultado: Adequado Desempenho microbiológico P. mirabilis ATCC 25933. Especificação: - (coloração púrpura). Resultado: Adequado Esterilidade. Especificação: Ausência de crescimento. Resultado: Adequado'
        },
        'PA80	Caldo Rhamnose cx c/ 10 tubos': {
            aspecto: 'pH final. Especificação: 6,8 ± 0,2. Resultado: Adequado Aspecto final. Especificação: Meio verde claro translúcido. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico S. flexneri ATCC 12022. Especificação: - (coloração verde). Resultado: Adequado Desempenho microbiológico K. pneumoniae ATCC 13883. Especificação: + (coloração amarela). Resultado: Adequado Esterilidade. Especificação: Ausência de crescimento. Resultado: Adequado'
        },
        'PA81	Caldo Selenito cx c/ 10 tubos': {
            aspecto: 'pH final. Especificação: 7,0 ± 0,2. Resultado: Adequado Aspecto final. Especificação: Meio âmbar claro translúcido. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico E. coli ATCC 25922.  Especificação: Crescimento fraco (inibido) de colônias vermelhas com precipitado de bile, após subcultivo em ágar Mac Conkey. Resultado: Adequado Desempenho microbiológico S. typhimurium ATCC 14028. Especificação: Crescimento bom a excelente de colônias incolores, após subcultivo em ágar Mac Conkey. Resultado: Adequado Esterilidade. Especificação: Ausência de crescimento. Resultado: Adequado'
        },
        'PA82	Caldo Tetrationato cx c/ 10 tubos': {
            aspecto: 'pH final. Especificação: 8,4 ± 0,2. Resultado: Adequado Aspecto final. Especificação: Meio incolor a levemente amarelado translúcido, com pptado branco denso no fundo. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico E. coli ATCC 25922. Especificação: Crescimento fraco (inibido) de colônias vermelhas com precipitado de bile, após subcultivo em ágar Mac Conkey. Resultado: Adequado Desempenho microbiológico S. typhimurium ATCC 14028. Especificação: Crescimento bom a excelente de colônias incolores, após subcultivo em ágar Mac Conkey. Resultado: Adequado Esterilidade. Especificação: Ausência de crescimento. Resultado: Adequado'
        },
        'PA83	Caldo Tioglicolato cx c/ 10 tubos': {
            aspecto: 'pH final. Especificação: 7,1 ± 0,2. Resultado: Adequado Aspecto final. Especificação: Meio levemente amarelado, translúcido com uma camada superior rosa de aproximadamente 10 mm. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico B. fragilis ATCC 25285. Especificação: Crescimento bom a excelente. Resultado: Adequado Desempenho microbiológico S. aureus ATCC 25923. Especificação: Crescimento bom a excelente. Resultado: Adequado Esterilidade. Especificação: Ausência de crescimento. Resultado: Adequado'
        },
        'PA84	Caldo Tioglicolato sem Indicador cx c/ 10 tubos': {
            aspecto: 'pH final. Especificação: 7,1 ± 0,2. Resultado: Adequado Aspecto final. Especificação: Meio levemente amarelado, translúcido. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico B. fragilis ATCC 25285. Especificação: Crescimento bom a excelente. Resultado: Adequado Desempenho microbiológico S. aureus ATCC 25923. Especificação: Crescimento bom a excelente. Resultado: Adequado Esterilidade. Especificação: Ausência de crescimento.Resultado: Adequado'
        },
        'PA85	Caldo TSB cx c/ 10 tubos': {
            aspecto: 'pH final. Especificação: 7,3 ± 0,2. Resultado: Adequado Aspecto final. Especificação: Meio âmbar claro translúcido a âmbar escuro. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico Aspergillus brasiliensis ATCC 16404 ou similar. Especificação: Crescimento bom a excelente.  Resultado: Adequado Desempenho microbiológico Bacillus subtilis ATCC 6633 ou similar. Especificação: Crescimento bom a excelente. Resultado: Adequado Desempenho microbiológico Candida albicans ATCC 10231 ou similar. Especificação: Crescimento bom a excelente. Resultado: Adequado Esterilidade. Especificação: Ausência de crescimento  Resultado: Adequado'
        },
        'PA86	Caldo Ureia cx c/ 10 tubos': {
            aspecto: 'pH final. Especificação: 6,8 ± 0,2. Resultado: Adequado Aspecto final. Especificação: Meio alaranjado claro translúcido. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico E. coli ATCC 25922. Especificação: Uréia - (inalterado). Resultado: Adequado Desempenho microbiológico K. pneumoniae ATCC 13883. Especificação: Uréia + (inalterado).  Resultado: Adequado Esterilidade. Especificação: Ausência de crescimento. Resultado: Adequado'
        },
        'PA87	Caldo Bile 2% Verde Brilhante 4% cx c/ 10 tubos': {
            aspecto: 'pH final. Especificação: 7,4 ± 0,2. Resultado: Adequado Aspecto final. Especificação: Meio verde brilhante translúcido. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico E. aerogenes ATCC 13048 Inóculo ~ 1000 UFC. Especificação: Crescimento bom a excelente com produção de gás.  Resultado: Adequado Desempenho microbiológico E. coli ATCC 25922 Inóculo ~ 1000 UFC. Especificação: Crescimento bom a excelente com produção de gás. Resultado: Adequado Desempenho microbiológico S. aureus ATCC 25923 Inóculo ~ 1000 UFC. Especificação: Crescimento inibido. Resultado: Adequado Desempenho microbiológico E. faecalis ATCC 29212 Inóculo ~ 1000 UFC. Especificação: Crescimento inibido. Resultado: Adequado Esterilidade.  Especificação: Ausência de crescimento. Resultado: Adequado'
        },
        'PA88	Cloreto de Sodio 0,85% Estéril cx c/ 10 tubos': {
            aspecto: 'Concentração. Especificação: 0,85 g em 100 mL de água ±  0,05 g. Resultado: Adequado Aspecto final. Especificação: Líquido cristalino e homogêneo.  Resultado: Adequado Provas de identificação e Impurezas. Especificação: Conforme Farmacopéia Brasileira II págs. 247 e 248. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico S. aureus ATCC 25923. Especificação: Crescimento bom a excelente no subcultivo. Resultado: Adequado Desempenho microbiológico S. epidermidis ATCC 12228. Especificação: Crescimento bom a excelente no subcultivo. Resultado: Adequado Desempenho microbiológico S. pyogenes ATCC 19615.  Especificação: Crescimento bom a excelente no subcultivo. Resultado: Adequado Esterilidade.  Especificação: Ausência de crescimento. Resultado: Adequado'
        },
        'PA89	Gel de Urease cx c/ 50 tubos': {
            aspecto: 'pH. Especificação: 6,6 ± 0,2. Resultado: Adequado Aspecto final.  Especificação: Gel amarelo-alaranjado, opalescente e sem precipitados. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico E. coli ATCC 25922. Especificação: Urease – (gel inalterado). Resultado: Adequado Desempenho microbiológico M. morganii IAL 417. Especificação: Urease + (gel rosa pink). Resultado: Adequado Esterilidade -  Especificação: Ausência de crescimento  Resultado: Adequado'
        },
        'PA90	Meio de EPM com Ureia cx c/ 10 tubos': {
            aspecto: 'pH final. Especificação: 7,4 ± 0,2. Resultado: Adequado Aspecto final.  Especificação: Meio verde escuro translúcido, ligeiramente opalescente. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico P. vulgaris ATCC 13315. Especificação: LTD +; Glicose +; Gás +; H2S +; URE +.  Resultado: Adequado Desempenho microbiológico  E. coli ATCC 25922. Especificação: LTD -; Glicose +; Gás +; H2S -; URE -. Resultado: Adequado Desempenho microbiológico  P. aeruginosa ATCC 27853.  Especificação: LTD -; Glicose -; Gás -; H2S -; URE -.  Resultado: Adequado Desempenho microbiológico  S. typhimurium ATCC 14028.  Especificação: LTD -; Glicose +; Gás +; H2S +; URE -.  Resultado: Adequado Esterilidade. Especificação: Ausência de crescimento. Resultado: Adequado'
        },
        'PA91	Meio de Lowenstein cx c/ 08 tubos': {
            aspecto: 'Aspecto final. Especificação: Meio verde-claro opalescente. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico M. tuberculosis H37Rv (ATCC 27294) ou similar.  Especificação: Crescimento bom a excelente de colônias granulares, foscas, secas e friáveis. Resultado: Adequado Esterilidade. Especificação: Ausência de crescimento. Resultado: Adequado'
        },
        'PA92	Meio de MILI cx c/ 10 tubos': {
            aspecto: 'pH final. Especificação: 6,6 ± 0,2. Resultado: Adequado Aspecto final. Especificação: Meio púrpura translúcido, ligeiramente opalescente. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico S. flexneri ATCC 12022.  Especificação: MOT -; LIS -; IND -. Resultado: Adequado Desempenho microbiológico E. coli ATCC 25922.  Especificação:  MOT +; LIS +; IND +.   Resultado: Adequado Esterilidade: Especificação: Ausência de crescimento. Resultado: Adequado'
        },
        'PA93	Meio de MIO cx c/ 10 tubos': {
            aspecto: 'pH final. Especificação: 6,5 ± 0,2. Resultado: Adequado Aspecto final. Especificação: Meio púrpura translúcido, ligeiramente opalescente. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico S. flexneri ATCC 12022. Especificação:  MOT -; LIS -; ORN -. Resultado: Adequado Desempenho microbiológico E. coli ATCC 25922.  Especificação: MOT +; LIS +; ORN +. Resultado: Adequado Esterilidade. Especificação: Ausência de crescimento. Resultado: Adequado'
        },
        'PA94	Meio de Ogawa Kudoh cx c/ 10 tubos': {
            aspecto: 'Aspecto final. Especificação: Meio verde-claro opalescente. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico M. tuberculosis H37Rv (ATCC 27294) ou similar. Especificação: Crescimento bom a excelente de colônias granulares, foscas, secas e friáveis. Resultado: Adequado Esterilidade. Especificiação: Ausência de crescimento. Resultado: Adequado'
        },
        'PA95	Meio de Stuart cx c/ 10 tubos': {
            aspecto: 'pH final. Especificação: 7,3 ± 0,2. Resultado: Adequado Aspecto final. Especificação: Meio semi sólido, levemente opalescente. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico S. pyogenes ATCC 19615.  Especificação: Crescimento no subcultivo. Resultado: Adequado Desempenho microbiológico S. pneumoniae ATCC 49619.  Especificação: Crescimento no subcultivo. Resultado: Adequado Desempenho microbiológico E. coli ATCC 25922. Especificação: Crescimento no subcultivo. Resultado: Adequado Esterilidade. Especificação: Ausência de crescimento. Resultado: Adequado'
        },
        'PA96	Meio SIM cx c/ 10 tubos': {
            aspecto: 'pH final. Especificação: 7,3 ± 0,2. Resultado: Adequado Aspecto final.  Especificação: Meio âmbar médio,  opalescente, sem precipitados. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desenvolvimento microbiológico S. flexneri ATCC 12022. Especificação:  MOT -; IND -; H2S -. Resultado: Adequado Desenvolvimento microbiológico E. coli ATCC 25922. Especificação: MOT +; IND +; H2S -. Resultado: Adequado Desenvolvimento microbiológico S. typhimurium ATCC 14028. Especificação: MOT +; IND -; H2S +. Resultado: Adequado Esterilidade. Especificação: Ausência de crescimento. Resultado: Adequado'
        },
        'PA386	Caldo Bile 2% Verde Brilhante 5% sachê c/ 10 tubos - Sob encomenda': {
            aspecto: 'NA',
            bacteriana: 'conforme',
            infoText1: 'NA'
        },
        'PA374	Caldo Tioglicolato caixa c/ 10 tubos - 9mL - Sob encomenda': {
            aspecto: 'pH final. Especificação: 7,1 ± 0,2. Resultado: Adequado Aspecto final. Especificação: Meio levemente amarelado, translúcido com uma camada superior rosa de aproximadamente 10 mm. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico B. fragilis ATCC 25285. Especificação: Crescimento bom a excelente. Resultado: Adequado Desempenho microbiológico S. aureus ATCC 25923. Especificação: Crescimento bom a excelente. Resultado: Adequado Esterilidade. Especificação: Ausência de crescimento. Resultado: Adequado'
        },
        'PA375	Caldo TSB caixa c/ 10 tubos - 9mL': {
            aspecto: 'pH final. Especificação: 7,3 ± 0,2. Resultado: Adequado Aspecto final. Especificação:Meio âmbar claro translúcido a âmbar escuro. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico Aspergillus brasiliensis ATCC 16404 ou similar. Especificação: Crescimento bom a excelente. Resultado: Adequado Desempenho microbiológico Bacillus subtilis ATCC 6633 ou similar. Especificação: Crescimento bom a excelente. Resultado: Adequado Desempenho microbiológico Candida albicans ATCC 10231 ou similar. Especificação: Crescimento bom a excelente. Resultado: Adequado Esterilidade. Especificação: Ausência de crescimento. Resultado: Adequado'
        },
        'PA352	FLM blister c/ 5 flaconetes': {
            aspecto: 'Aspecto do FLM. Especificação: Pó fino creme a amarelo homogêneo. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho Microbiológico P. aeruginosa ATCC 27853. Especificação: Turvação sem fluorescência e indol negativo. Resultado: Adequado Desempenho Microbiológico K. pneumoniae ATCC 13883. Especificação: Turvação verde azulada sem fluorescência e indol negativo. Resultado: Adequado Desempenho Microbiológico E. coli ATCC 25922. Especificação: Turvação verde azulada com fluorescência e indol positivo. Resultado: Adequado'
        },
        'PA402	Caldo Tioglicolato sem Indicador cx c/ 10 tubos - 9 mL - Sob encomenda': {
            aspecto: 'pH final. Especificação: 7,1 ± 0,2. Resultado: Adequado Aspecto final. Especificação: Meio levemente amarelado, translúcido. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico B. fragilis ATCC 25285. Especificação: Crescimento bom a excelente. Resultado: Adequado Desempenho microbiológico S. aureus ATCC 25923. Especificação: Crescimento bom a excelente. Resultado: Adequado Esterilidade. Especificação: Ausência de crescimento. Resultado: Adequado'
        },
        'PA39	Agar XLD pcte c/ 08 placas 60x10mm - Sob encomenda': {
            aspecto: 'pH final. Especificação: 7,4 ± 0,2. Resultado: Adequado Aspecto final. Especificação: Meio vermelho translúcido, ligeiramente opalescente. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico E. coli ATCC 25922. Especificação: Crescimento escasso ou ausente de colônias amarelas. Resultado: Adequado Desempenho microbiológico S. typhimurium ATCC 14028. Especificação: Crescimento excelente de colônias vermelhas com centro preto. Resultado: Adequado Desempenho microbiológico S. flexneri ATCC 12022.  Especificação: Crescimento excelente de colônias vermelhas translúcidas. Resultado: Adequado Desempenho microbiológico E. faecalis ATCC 29212. Especificação: Crescimento ausente. Resultado: Adequado Esterilidade. Especificação: Ausência de crescimento. Resultado: Adequado'
        },
        'PA37	Agar TSA para Contato pcte c/ 05 placas c/ 60x10mm': {
            aspecto: 'pH final, Especificação: 7,3 ± 0,2. Resultado: Adequado Aspecto final. Especificação: Meio bege claro translúcido. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho micrológico E. coli ATCC 25922. Especificação: Crescimento bom a excelente. Resultado: Adequado Desempenho micrológico S. pyogenes ATCC 19615.  Especificação: Crescimento bom a excelente. Resultado: Adequado Esterilidade. Especificação: Ausência de crescimento. Resultado: Adequado'
        },
        'PA323	Cromonew ESBL pcte c/ 10 placas 60x15mm': {
            aspecto: 'pH final a 25º C. Especificação: 6,8 ± 0,2. Resultado: Adequado Aspecto final. Especificação: Meio sólido, amarelo-claro translúcido a ligeiramente opalescente, sem precipitados. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico K. pneumoniae ATCC 13883 Inóculo ~ 10.000 UFC. Especificação: Inibição total. Resultado: Adequado. Desempenho microbiológico E. coli ATCC 25922 Inóculo ~ 10.000 UFC. Especificação: Inibição total. Resultado: Adequado. Desempenho microbiológico K. pneumoniae ATCC 700603 Inóculo ~ 10.000 UFC.  Especificação: Crescimento bom de colônias azuis.  Resultado: Adequado. Esterilidade. Especificação: Ausência de crescimento. Resultado: Adequado.'
        },
        'PA330	Agar Manitol pcte c/ 10 placas 60x15mm': {
            aspecto: 'pH final. Especificação: 7,4 ± 0,2. Resultado: Adequado Aspecto final. Especificação: Meio de cor pêssego a vermelho rosado, ligeiramente opalescente. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico S. aureus ATCC 25923. Especificação: Crescimento moderado a bom de colônias amarelas. Resultado: Adequado Desempenho microbiológico S. epidermidis ATCC 12228. Especificação: Crescimento moderado a bom de colônias incolores puntiformes. Resultado: Adequado Desempenho microbiológico P. mirabilis ATCC 25933. Especificação: Crescimento acentuadamente inibido. Resultado: Adequado Esterilidade. Especificação: Ausência de crescimento. Resultado: Adequado'
        },
        'PA331	Agar SS pcte c/ 10 placas 60x15mm - Sob encomenda': {
            aspecto: 'pH final. Especificação: 7,0 ± 0,2. Resultado: Adequado Aspecto final. Especificação: Meio vermelho alaranjado, ligeiramente opalescente. Resultado: Adequado Observação: este ágar pode apresentar alguns precipitados/cristais, que em nada interferem no seu desempenho microbiológico.',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico E. coli ATCC 25922. Especificação: Crescimento escasso ou ausente de colônias amarelas. Resultado: Adequado Desempenho microbiológico S. typhimurium ATCC 14028. Especificação: Crescimento excelente de colônias incolores com centro preto.  Resultado: Adequado Desempenho microbiológico S. flexneri ATCC 12022. Especificação: Crescimento excelente de colônias incolores translúcidas. Resultado: Adequado Desempenho microbiológico E. faecalis ATCC 29212. Especificação: Crescimento ausente. Resultado: Adequado Esterilidade. Especificação: Ausência de crescimento. Resultado: Adequado'
        },
        'PA332	Agar Thayer Martin pcte c/ 10 placas 60x15mm - Sob encomenda': {
            aspecto: 'pH antes da adição do sangue. Especificação: 7,3 ± 0,1. Resultado: Adequado Aspecto final. Especificação: Meio castanho opalescente. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico N. meningitidis ATCC 13090. Especificação: Crescimento moderado a bom de colônias pequenas translúcidas. Resultado: Adequado Desempenho microbiológico S. epidermidis ATCC 12228.  Especificação: Crescimento acentuadamente inibido. Resultado: Adequado Desempenho microbiológico E. coli ATCC 25922. Especificação: Crescimento acentuadamente inibido. Resultado: Adequado Desempenho microbiológico C. albicans ATCC 10231. Especificação: Crescimento acentuadamente inibido. Resultado: Adequado Esterilidade. Especificação: Ausência de crescimento. Resultado: Adequado'
        },
        'PA344	Agar Cled pcte c/ 10 placas 60x15mm': {
            aspecto: 'pH final. Especificação: 7,3 ± 0,2. Resultado: Adequado Aspecto final. Especificação: Meio verde claro translúcido, ligeiramente opalescente. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico E. coli ATCC 25922. Especificação: Crescimento bom a excelente de colônias amarelas grandes. Resultado: Adequado Desempenho microbiológico S. aureus ATCC 25923. Especificação: Crescimento bom a excelente de colônias amarelas, pequenas e opacas. Resultado: Adequado Desempenho microbiológico P. vulgaris ATCC 13315.  Especificação: Crescimento bom a excelente de colônias azul esverdeadas, translúcidas. Resultado: Adequado Esterilidade -  Especificação: Ausência de crescimento. Resultado: Adequado'
        },
        'PA319	Cromonew MRSA pcte c/ 10 placas 60x15mm': {
            aspecto: 'pH final. Especificação: 7,0 ± 0,2. Resultado: Adequado Aspecto final. Especificação: Meio sólido, amarelo claro opalescente, sem precipitados. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico S. aureus ATCC 25923 Inóculo ~ 1000 UFC. Especificação: Inibição total. Resultado: Adequado Desempenho microbiológico E. faecalis ATCC 29212 Inóculo ~ 1000 UFC. Especificação: Inibição total. Resultado: Adequado Desempenho microbiológico E. coli ATCC 25922 Inóculo ~ 1000 UFC.  Especificação: Inibição total. Resultado: Adequado Desempenho microbiológico S. aureus ATCC 33591 Inóculo ~ 100 UFC.  Especificação: Crescimento bom de colônias  verde-azuladas, de tonalidade clara. Resultado: Adequado Esterilidade.  Especificação: Ausência de crescimento. Resultado: Adequado'
        },
        'PA321	Cromonew VRE pcte c/ 10 placas 60x15mm': {
            aspecto: 'pH final a 25º C. Especificação: 7,8 ± 0,2. Resultado: Adequado Aspecto final. Especificação: Meio sólido, vermelho opaco podendo apresentar pequenos precipitados. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico S. aureus ATCC 25923 Inóculo ~ 1000 UFC. Especificação: Inibição total. Resultado: Adequado Desempenho microbiológico E. faecalis ATCC 29212 Inóculo ~ 1000 UFC. Especificação: Inibição total. Resultado: Adequado Desempenho microbiológico E. faecalis ATCC 51299 Inóculo ~ 100 UFC. Especificação: Crescimento bom de colônias azuis características. Resultado: Adequado Desempenho microbiológico S. faecium ATCC 700221 Inóculo ~ 100 UFC. Especificação: Crescimento bom de colônias  verdes características com fundo amarelo. Resultado: Adequado Esterilidade. Especificação: Ausência de crescimento. Resultado: Adequado'
        },
        'PA325	Cromonew KPC pcte c/ 10 placas 60x15mm': {
            aspecto: 'pH final a 25º C. Especificação: 7,0 ± 0,2. Resultado: Adequado Aspecto final. Especificação: Meio sólido, âmbar claro, ligeiramente opalescente e sem precipitados. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico E. faecalis ATCC 29212 Inóculo ~ 1.000 UFC. Especificação: Inibição total. Resultado: Adequado Desempenho microbiológico E. coli ATCC 25922 Inóculo ~ 1.000 UFC. Especificação: Inibição total. Resultado: Adequado Desempenho microbiológico K. pneumoniae ATCC 13883 Inóculo ~ 1.000 UFC. Especificação: Inibição total. Resultado: Adequado Desempenho microbiológico K. pneumoniae ATCC BAA-1705 Inóculo ~ 100 UFC. Especificação: Crescimento bom de colônias azuis. Resultado: Adequado Desempenho microbiológico C. parasilosis ATCC 22019 Inóculo ~ 1.000 UFC. Especificação: Inibição total. Resultado: Adequado Esterilidade. Especificação: Ausência de crescimento. Resultado: Adequado'
        },
        'PA328	Cromonew Candida pcte c/ 10 placas 60x15mm': {
            aspecto: 'pH final. Especificação: 6,1 ± 0,2. Resultado: Adequado Aspecto final. Especificação: Meio âmbar claro, levemente opalescente. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico C. albicans ATCC 10231. Especificação: Crescimento bom de colônias verde. Resultado: Adequado Desempenho microbiológico C. tropicalis INCQS 40281. Especificação: Crescimento bom de colônias azuis a verde-bandeira. Resultado: Adequado Desempenho microbiológico C. parasilosis ATCC 22019. Especificação: Crescimento bom de colônias branco brilhosa a roxa. Resultado: Adequado Esterilidade. Especificação: Ausência de crescimento. Resultado: Adequado'
        },
        'PA329	Cromonew UTI pcte c/ 10 placas 60x15mm': {
            aspecto: 'pH final - Rhamnose: Especificação:  6,8 ± 0,2 - Resultado: Adequado Aspecto final - Rhamnose: Especificação: meio verde claro translúcido - Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico E. coli ATCC 25922. Especificação: Crescimento excelente de colônias transparentes rosa-escuras a púrpuras com ou sem halos no meio ao redor. Resultado: Adequado Desempenho microbiológico P. mirabilis ATCC 25933. Especificação: Crescimento excelente de colônias cor palha a bege com halo marrom. Resultado: Adequado Desempenho microbiológico K. pneumoniae ATCC 13883. Especificação:Crescimento excelente de colônias azul-médio a escuro. Resultado: Adequado Desempenho microbiológico E. faecalis ATCC 29212. Especificação: Crescimento excelente de colônias pequenas verde-azuladas. Resultado: Adequado Esterilidade. Especificação: Ausência de crescimento. Resultado: Adequado'
        },
        'PA07	Agar Cetrimide pcte c/ 08 placas 60x10mm - Sob encomenda': {
            aspecto: 'pH final -  Especificação: 7,4 ± 0,2.  Resultado: Adequado  Aspecto final -  Especificação: Meio incolor opalescente. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico P. aeruginosa ATCC 27853 -  Especificação: Crescimento bom a excelente com pigmento fluorescente   Resultado: Adequado Desempenho microbiológico E. coli ATCC 25922 -  Especificação: Crescimento inibido   Resultado: Adequado Desempenho microbiológico S. maltophilia ATCC 13637 -  Especificação: Crescimento inibido   Resultado: Adequado Esterilidade -  Especificação: Ausência de crescimento   Resultado: Adequado'
        },
        'PA14	Agar Mac Conkey pcte c/ 08 placas 60x10 mm': {
            aspecto: 'pH final -  Especificação: 7,1 ± 0,2. Resultado: Adequado  Aspecto final -  Especificação: Meio rosado translúcido, ligeiramente opalescente. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico E. coli ATCC 25922 - Especificação: Crescimento excelente de colônias vermelhas com precipitado de bile - Resultado: Adequado Desempenho microbiológico P. mirabilis ATCC 25933 - Especificação: Crescimento excelente de colônias incolores, sem swarming - Resultado: Adequado Desempenho microbiológico  E. faecalis ATCC 29212 - Especificação:Crescimento ausente - Resultado: Adequado Esterilidade - Especificação: Ausência de crescimento Resultado: Adequado'
        },
        'PA13	Agar Letheen pcte c/ 08 placas 60x10mm': {
            aspecto: 'pH final - Especificação: 7,2 ± 0,2. Resultado: Adequado  Aspecto final -  Especificação: Meio âmbar claro, ligeiramente opalescente. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico E. coli ATCC 8739 - Especificação: Crescimento bom a excelente. Resultado: Adequado Desempenho microbiológico S. aureus ATCC 6538 - Especificação: Crescimento bom a excelente. Resultado: Adequado Esterilidade - Especificação: Ausência de crescimento Resultado: Adequado'
        },
        'PA16	Agar Manitol pcte c/ 08 placas 60x10mm - Sob encomenda': {
            aspecto: 'pH final -  Especificação: 7,4 ± 0,2. Resultado: Adequado  Aspecto final -  Especificação: Meio de cor pêssego a vermelho rosado, ligeiramente opalescente. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico S. aureus ATCC 25923  -  Especificação: Crescimento moderado a bom de colônias amarelas. Resultado: Adequado Desempenho microbiológico S. epidermidis ATCC 12228 -  Especificação: Crescimento moderado a bom de colônias incolores puntiformes. Resultado: Adequado Desempenho microbiológico P. mirabilis ATCC 25933 -  Especificação: Crescimento acentuadamente inibido. Resultado: Adequado Esterilidade -  Especificação: Ausência de crescimento. Resultado: Adequado'
        },
        'PA24	Agar Sabouraud Dextrose para Contato pcte c/ 05 placas 60x10mm - sob encomenda': {
            aspecto: 'pH final. Especificação: 5,6 ± 0,2. Resultado: Adequado Aspecto final. Especificação: Meio âmbar claro, ligeiramente opalescente. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico C. albicans ATCC 10231. Especificação: Crescimento bom a excelente de colônias brancas. Resultado: Adequado Desempenho microbiológico A. niger ATCC 16404. Especificação: Crescimento bom a excelente de esporos pretos e contorno amarelado. Resultado: Adequado Esterilidade. Especificação: Ausência de crescimento. Resultado: Adequado'
        },
        'PA25	Agar Sabouraud Dextrose pcte c/ 08 placas 60x10mm': {
            aspecto: 'pH final. Especificação: 5,6 ± 0,2. Resultado: Adequado Aspecto final. Especifciação: Meio âmbar claro, ligeiramente opalescente. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico C. albicans ATCC 10231. Especifciação: Crescimento bom a excelente de colônias brancas. Resultado: Adequado Desempenho microbiológico A. brasiliensis ATCC 16404. Especifciação: Crescimento bom a excelente de esporos pretos e contorno amarelado. Resultado: Adequado  Esterilidade. Especifciação: Ausência de crescimento. Resultado: Adequado'
        },
        'PA26	Agar Sabouraud Dextrose pcte c/ 10 placas 90x15mm': {
            aspecto: 'pH final. Especificação: 5,6 ± 0,2. Resultado: Adequado Aspecto final. Especifciação: Meio âmbar claro, ligeiramente opalescente. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico C. albicans ATCC 10231. Especificação: Crescimento bom a excelente de colônias brancas. Resultado: Adequado Desempenho microbiológico A. niger ATCC 16404. Especificação: Crescimento bom a excelente de esporos pretos e contorno amarelado. Resultado: Adequado  Esterilidade. Especificação: Ausência de crescimento. Resultado: Adequado'
        },
        'PA22	Agar PCA pcte c/ 10 placas 90x15mm': {
            aspecto: 'pH final -  Especificação: 7,0 ± 0,2. Resultado: Adequado  Aspecto final -  Especificação: Meio âmbar claro translúcido e  ligeiramente opalescente. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho Microbiológio E. coli ATCC 25922 -  Especificação: Crescimento bom a excelente. Resultado: Adequado Desempenho Microbiológio S. aureus ATCC 25923 -  Especificação: Crescimento bom a excelente. Resultado: Adequado Esterilidade -  Especificação: Ausência de crescimento. Resultado: Adequado'
        },
        'PA20	Agar Mycosel pcte c/ 10 placas 90x15mm': {
            aspecto: 'pH final -  Especificação: 6,7 ± 0,4. Resultado: Adequado Aspecto final -  Especificação: Meio âmbar claro, ligeiramente opalescente. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico C. albicans ATCC 10231 -  Especificação: Crescimento bom a excelente de colônias brancas cremosas. Resultado: Adequado Desempenho microbiológico E. coli ATCC 25922 -  Especificação: Crescimento inibido. Resultado: Adequado Desempenho microbiológico A. brasiliensis ATCC 16404 -  Especificação: Crescimento inibido. Resultado: Adequado Esterilidade -  Especificação: Ausência de crescimento. Resultado: Adequado'
        },
        'PA23	Agar Sabouraud com Cloranfenicol pcte c/ 10 placas 90x15mm': {
            aspecto: 'pH final -  Especificação: 5,6 ± 0,2  Resultado: Adequado Aspecto final -  Especificação: Meio sólido âmbar claro, ligeiramente opalescente  Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico C. albicans ATCC 10231 -  Especificação: Crescimento bom a excelente de colônias brancas cremosas  Resultado: Adequado Desempenho microbiológico E. coli ATCC 25922 -  Especificação: Crescimento inibido   Resultado: Adequado Desempenho microbiológico A. niger ATCC 16404 -  Especificação: Crescimento bom a excelente de colônias cotonosas  Resultado: Adequado Esterilidade -  Especificação: Ausência de crescimento  Resultado: Adequado'
        },
        'PA19	Agar Mueller Hinton pcte c/ 10 placas 90x15mm': {
            aspecto: 'pH final -  Especificação: 7,3 ± 0,1  Resultado: Adequado Aspecto final -  Especificação: Meio bege claro translúcido, ligeiramente opalescente  Resultado: Adequado Espessura do ágar -  Especificação: 4 mm ± 0,5  Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico P. aeruginosa ATCC 27853 (inóculo padronizado em 10.000 UFC/mL) -  Especificação: Crescimento excelente de colônias esverdeadas. Resultado: Adequado  Desempenho microbiológico E. faecalis ATCC 29212 (inóculo padronizado em 10.000 UFC/mL)  -  Especificação: Crescimento excelente de colônias puntiformes. Resultado: Adequado  Conteúdo de Cátions (Testado com P. aeruginosa ATCC 27853 padronizada em 108 UFC/mL e discos com 10 µg) -  Especificação: Amicacina – diâmetro da zona de inibição entre 20 e 26 mm / Gentamicina – diâmetro da zona de inibição entre 17 e 23 mm / Tobramicina – diâmetro da zona de inibição entre  20 e 26 mm. Resultado: Adequado  Conteúdo de Timidina(Testado com E. faecalis ATCC 29212 padronizada em 108 UFC/mL e disco com 25 µg)  -  Especificação: Sulfametoxazol - Trimetoprim – diâmetro da zona de inibição entre 26 e 34 mm. Resultado: Adequado  Esterilidade -  Especificação: Ausência de crescimento. Resultado: Adequado'
        },
        'PA15	Agar Mac Conkey pcte c/ 10 placas 90x15mm': {
            aspecto: 'pH final. Especificação: 7,1 ± 0,2. Resultado: Adequado Aspecto final. Especificação: Meio rosado translúcido, ligeiramente opalescente. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico E. coli ATCC 25922. Especificação: Crescimento excelente de colônias vermelhas com precipitado de bile. Resultado: Adequado Desempenho microbiológico P. mirabilis ATCC 12453. Especificação: Crescimento excelente de colônias incolores, sem swarming. Resultado: Adequado Desempenho microbiológico E. faecalis ATCC 29212. Especificação: Crescimento ausente. Resultado: Adequado Esterilidade: Especificação: Ausência de crescimento. Resultado: Adequado'
        },
        'PA17	Agar Manitol pcte c/ 10 placas 90x15mm': {
            aspecto: 'pH final -  Especificação: 7,4 ± 0,2  Resultado: Adequado  Aspecto final -  Especificação: Meio de cor pêssego a vermelho rosado, ligeiramente opalescente  Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico S. aureus ATCC 25923 -  Especificação: Crescimento moderado a bom de colônias amarelas  Resultado: Adequado  Desempenho microbiológico S. epidermidis ATCC 12228 -  Especificação: Crescimento moderado a bom de colônias incolores puntiformes  Resultado: Adequado  Desempenho microbiológico P. mirabilis ATCC 25933 -  Especificação: Crescimento acentuadamente inibido  Resultado: Adequado  Esterilidade -  Especificação: Ausência de crescimento  Resultado: Adequado'
        },
        'PA12	Agar Enterico de Hektoen pcte c/ 10 placas 90x15mm': {
            aspecto: 'pH final -  Especificação: 7,5 ± 0,2  Resultado: Adequado Aspecto final -  Especificação: Meio verde translúcido, ligeiramente opalescente  Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico E. coli ATCC 25922 -  Especificação: Crescimento escasso ou ausente de colônias amarelas.  Resultado: Adequado Desempenho microbiológico S. typhimurium ATCC 14028 -  Especificação: Crescimento excelente de colônias verde-azuladas com centro preto. Resultado: Adequado Desempenho microbiológico S. flexneri ATCC 12022 -  Especificação: Crescimento excelente de colônias verdes com centro verde-azulado.  Resultado: Adequado Desempenho microbiológico E. faecalis ATCC 29212 -  Especificação: Crescimento ausente.  Resultado: Adequado Esterilidade -  Especificação: Ausência de crescimento.  Resultado: Adequado'
        },
        'PA08	Agar Cetrimide pcte c/ 10 placas 90x15mm': {
            aspecto: 'pH final -  Especificação: 7,4 ± 0,2   Resultado: Adequado Aspecto final -  Especificação: Meio incolor opalescente  Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico P. aeruginosa ATCC 27853 -  Especificação: Crescimento bom a excelente com pigmento fluorescente   Resultado: Adequado Desempenho microbiológico E. coli ATCC 25922 -  Especificação: Crescimento inibido   Resultado: Adequado Desempenho microbiológico S. maltophilia ATCC 13637 -  Especificação: Crescimento inibido   Resultado: Adequado Esterilidade -  Especificação: Ausência de crescimento   Resultado: Adequado'
        },
        'PA09	Agar Chocolate Suplementado pcte c/ 10 placas 90x15mm': {
            aspecto: 'Aspecto final -  Especificação: Meio castanho opalescente. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico H. influenzae ATCC 10211 -  Especificação: Crescimento moderado a bom de colônias médias translúcidas   Resultado: Adequado Esterilidade -  Especificação: Ausência de crescimento   Resultado: Adequado'
        },
        'PA10	Agar Cled pcte c/ 10 placas 90x15mm': {
            aspecto: 'pH final -  Especificação: 7,3 ± 0,2   Resultado: Adequado Aspecto final - Especificação: Meio verde-claro translúcido, ligeiramente opalescente  Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico E. coli ATCC 25922 -  Especificação: Crescimento bom a excelente de colônias amarelas grandes.  Resultado: Adequado Desempenho microbiológico S. aureus ATCC 25923 -  Especificação: Crescimento bom a excelente de colônias amarelas, pequenas e opacas  Resultado: Adequado Desempenho microbiológico P. vulgaris ATCC 13315 -  Especificação: Crescimento bom a excelente de colônias azul esverdeadas, translúcidas  Resultado: Adequado Esterilidade -  Especificação: Ausência de crescimento. Resultado: Adequado'
        },
        'PA02	Agar Baird Parker pcte c/ 10 placas 90x15mm': {
            aspecto: 'pH final   - Especificação : 7,3 ± 0,1  - Resultado:  Adequado Aspecto final - Meio amarelo ovo opalescente - Resultado:  Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico S. aureus ATCC 25923 - Especificação:  Crescimento excelente de colônias negras com halo de lecitinase.  Resultado: Adequado    Desempenho microbiológico S. epidermidis ATCC 12228 - Especificação:   Crescimento ausente a variável de colônias negras sem halo de lecitinase- Resultado: Adequado                                       Desempenho microbiológico E. coli ATCC 25922 - Especificação: Ausência de crescimento - Resultado: Adequado                             Esterilidade - Especificação: Ausência de crescimento - Resultado: Adequado'
        },
        'PA03	Agar Batata Dextrose pcte c/ 10 placas 90x15mm': {
            aspecto: 'pH final  - Especificação: 5,6 ± 0,2 - Resultado: Adequado Aspecto final -Especificação: Meio âmbar claro, ligeiramente opalescente - Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico C. albicans ATCC 10231 - Especificação: Crescimento bom a excelente de colônias brancas cremosas   Resultado: Adequado Desempenho microbiológico A. brasiliensis ATCC 16404 - Especificação: Crescimento bom a excelente de colônias com centro negro e periferia branco-amarelada  Resultado: Adequado Esterilidade - Especificação: Ausência de crescimento  Resultado: Adequado'
        },
        'PA04	Agar BHI com Vancomicina pcte c/ 10 placas 90x15mm - Sob encomenda': {
            aspecto: 'pH final - Especificação: 6,6 ± 0,2 - Resultado: Adequado Aspecto final - Especificação: Meio âmbar claro translúcido, ligeiramente opalescente - Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho Microbiológico E. faecalis ATCC 29212 - Especificação: Crescimento inibido  Resultado: Adequado Desempenho Microbiológico E. faecalis ATCC 51299  - Especificação: Crescimento bom a excelente de colônias puntiformes Resultado: Adequado Esterilidade -  Especificação: Ausência de crescimento  Resultado: Adequado'
        },
        'PA06	Agar Bile Esculina com Vancomicina pcte c/ 10 placas 90x15mm': {
            aspecto: 'pH final - Especificação: 6,6 ± 0,2.  Resultado: Adequado Aspecto final - Especificação: Meio âmbar claro translúcido, ligeiramente opalescente. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico E. faecalis ATCC 29212 -  Especificação: Crescimento inibido.  Resultado: Adequado Desempenho microbiológico E. faecalis ATCC 51299 -  Especificação: Crescimento bom a excelente de colônias puntiformes com enegrecimento do ágar.  Resultado: Adequado Esterilidade -  Especificação: Ausência de crescimento. Resultado: Adequado'
        },
        'PA11	Agar Dnase pcte c/ 10 placas 90x15mm': {
            aspecto: 'pH final -  Especificação: 7,3 ± 0,2. Resultado: Adequado Aspecto final -  Especificação: Meio âmbar claro, ligeiramente opalescente. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico S. aureus ATCC 25923 -  Especificação:  Zona clara ao redor da estria, após inundar a placa com HCl 1 N.  Resultado: Adequado Desempenho microbiológico S. epidermidis ATCC 12228 -  Especificação: Ausência de zona clara ao redor da estria, após inundar a placa com HCl 1 N. Resultado: Adequado Esterilidade -  Especificação: Ausência de crescimento. Resultado: Adequado'
        },
        'PA33	Agar SS pcte c/ 10 placas 90x15mm': {
            aspecto: 'pH final. Especificação: 7,0 ± 0,2.  Resultado: Adequado Aspecto final,  Especificação: Meio vermelho alaranjado, ligeiramente opalescente. Resultado: Adequado Observação: este ágar pode apresentar alguns precipitados/cristais, que em nada interferem no seu desempenho microbiológico.',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico E. coli ATCC 25922. Especificação: Crescimento escasso ou ausente de colônias amarelas. Resultado: Adequado Desempenho microbiológico S. typhimurium ATCC 14028. Especificação: Crescimento excelente de colônias incolores com centro preto. Resultado: Adequado Desempenho microbiológico S. flexneri ATCC 12022. Especificação: Crescimento excelente de colônias incolores translúcidas. Resultado: Adequado Desempenho microbiológico E. faecalis ATCC 29212. Especificação: Crescimento ausente. Resultado: Adequado Esterilidade. Especificação: Ausência de crescimento.  Resultado: Adequado'
        },
        'PA322	Cromonew ESBL pcte c/ 10 placas 90x15mm': {
            aspecto: 'Aspecto final. Especificação: Meio sólido, amarelo-claro translúcido a ligeiramente opalescente, sem precipitados. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico K. pneumoniae ATCC 13883 Inóculo ~ 10.000 UFC. Especificação: Inibição total. Resultado: Adequado. Desempenho microbiológico E. coli ATCC 25922 Inóculo ~ 10.000 UFC. Especificação: Inibição total. Resultado: Adequado. Desempenho microbiológico K. pneumoniae ATCC 700603 Inóculo ~ 10.000 UFC.  Especificação: Crescimento bom de colônias azuis.  Resultado: Adequado. Esterilidade. Especificação: Ausência de crescimento. Resultado: Adequado.'
        },
        'PA32	Agar Sangue de Carneiro Com Azida pcte c/ 10 placas 90x15mm': {
            aspecto: 'pH. Especificação: 7,3 ± 0,1. Resultado: Adequado Aspecto final. Especificação: Meio vermelho sangue opalescente. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico E. coli ATCC 25922. Especificação: Crescimento inibido. Resultado: Adequado Desempenho microbiológico E. faecalis ATCC 29212. Especificação: Crescimento bom de colônias puntiformes.  Resultado: Adequado Esterilidade. Especificação: Ausência de crescimento.  Resultado: Adequado'
        },
        'PA320	Cromonew VRE pcte c/ 10 placas 90x15mm': {
            aspecto: 'pH final a 25º C. Especificação: 7,8 ± 0,2. Resultado: Adequado Aspecto final. Especificação: Meio sólido, vermelho opaco podendo apresentar pequenos precipitados. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico S. aureus ATCC 25923 Inóculo ~ 1000 UFC. Especificação: Inibição total. Resultado: Adequado Desempenho microbiológico E. faecalis ATCC 29212 Inóculo ~ 1000 UFC. Especificação: Inibição total. Resultado: Adequado Desempenho microbiológico E. faecalis ATCC 51299 Inóculo ~ 100 UFC. Especificação: Crescimento bom de colônias azuis características. Resultado: Adequado Desempenho microbiológico S. faecium ATCC 700221 Inóculo ~ 100 UFC. Especificação: Crescimento bom de colônias  verdes características com fundo amarelo. Resultado: Adequado Esterilidade. Especificação: Ausência de crescimento. Resultado: Adequado'
        },
        'PA345	Agar DRBC pcte c/ 10 placas 90x15mm': {
            aspecto: 'pH final -  Especificação: 5,6 ± 0,2  Resultado: Adequado Aspecto final -  Especificação: Meio rosa brilhante, ligeiramente opalescente  Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico Aspergillus brasiliensis ATCC 16404 Inoculação Pontual. Especificação: Crescimento, diâmetro da colônia reduzido. Resultado: Adequado Desempenho microbiológico Bacillus subtilis ATCC 6633 Inóculo ~ 1000 UFC. Especificação: Crescimento inibido. Resultado: Adequado Desempenho microbiológico Candida albicans ATCC 10231 Inóculo ~ 10 - 300 UFC. Especificação: Crescimento, pode apresentar recuperação reduzida. Resultado: Adequado Esterilidade. Especificação: Crescimento inibido. Resultado: Adequado'
        },
        'PA346	Agar MYP pcte c/ 10 placas 90x15mm': {
            aspecto: 'pH final a 25º C. Especificação: 7,2 ± 0,2. Resultado: Adequado Aspecto final. Especificação: Meio laranja amarelado a rosa alaranjado, ligeiramente opalescente. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico Bacillus cereus ATCC 11778 inóculo ~ 10 – 300 UFC. Especificação: Crescimento; colônias rosas com halo de lecitinase. Resultado: Adequado Desempenho microbiológico Bacillus subtilis ATCC 6633 inóculo ~ 10 – 300 UFC.  Especificação: Crescimento; colônias translúcidas, cor de ágar. Resultado: Adequado Desempenho microbiológico Escherichia coli ATCC 8739 inóculo ~ 300 – 1000 UFC. Especificação: Crescimento notavelmente oprimido a inibido; colônias amarelas, se recuperadas. Resultado: Adequado Esterilidade. Especificação: Ausência de crescimento. Resultado: Adequado'
        },
        'PA34	Agar Teague pcte c/ 10 placas 90x15mm': {
            aspecto: 'pH final. Especificação: 7,1 ± 0,2. Resultado: Adequado Aspecto final. Especificação: Meio púrpura escuro, ligeiramente opalescente. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico E. coli ATCC 25922. Especificação: Crescimento excelente de colônias púrpura com centro negro e brilho verde metálico. Resultado: Adequado Desempenho microbiológico S. typhimurium ATCC 14028. Especificação: Crescimento excelente de colônias incolores translúcidas. Resultado: Adequado Desempenho microbiológico S. aureus ATCC 25923. Especificação: Crescimento ausente. Resultado: Adequado Esterilidade. Especificação: Ausência de crescimento. Resultado: Adequado'
        },
        'PA318	Cromonew MRSA pcte c/ 10 placas 90x15mm': {
            aspecto: 'pH final. Especificação: 7,0 ± 0,2. Resultado: Adequado Aspecto final. Especificação: Meio sólido, amarelo claro opalescente, sem precipitados. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico S. aureus ATCC 25923 Inóculo ~ 1000 UFC. Especificação: Inibição total. Resultado: Adequado Desempenho microbiológico E. faecalis ATCC 29212 Inóculo ~ 1000 UFC. Especificação: Inibição total. Resultado: Adequado Desempenho microbiológico E. coli ATCC 25922 Inóculo ~ 1000 UFC. Especificação: Inibição total. Resultado: Adequado Desempenho microbiológico S. aureus ATCC 33591 Inóculo ~ 100 UFC. Especificação: Crescimento bom de colônias  verde-azuladas, de tonalidade clara. Resultado: Adequado Esterilidade. Especificação: Ausência de crescimento. Resultado: Adequado'
        },
        'PA341	Agar MH-F (Agar sangue de cavalo base Mueller Hinton + B-NAD) pcte c/ 10 placas 90x15mm': {
            aspecto: 'pH antes da adição do sangue. Especificação: 7,3 ± 0,1. Resultado: Adequado Aspecto final. Especificação: Meio vermelho sangue opalescente. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico S. pneumoniae ATCC 49619. Especificação: Crescimento bom de colônias  Alfa-hemolíticas. Resultado: Adequado Desempenho microbiológico H. influenzae ATCC 49766. Especificação: Crescimento bom de colônias gama-hemolíticas. Resultado: Adequado Esterilidade -  Especificação: Ausência de crescimento. Resultado: Adequado'
        },
        'PA324	Cromonew KPC pcte c/ 10 placas 90x15mm': {
            aspecto: 'pH final a 25º C. Especificação: 7,0 ± 0,2. Resultado: Adequado Aspecto final. Especificação: Meio sólido, âmbar claro, ligeiramente opalescente e sem precipitados. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico E. faecalis ATCC 29212 Inóculo ~ 1.000 UFC. Especificação: Inibição total. Resultado: Adequado Desempenho microbiológico E. coli ATCC 25922 Inóculo ~ 1.000 UFC. Especificação: Inibição total. Resultado: Adequado Desempenho microbiológico K. pneumoniae ATCC 13883 Inóculo ~ 1.000 UFC. Especificação: Inibição total. Resultado: Adequado Desempenho microbiológico K. pneumoniae ATCC BAA-1705 Inóculo ~ 100 UFC. Especificação: Crescimento bom de colônias azuis. Resultado: Adequado Desempenho microbiológico C. parasilosis ATCC 22019 Inóculo ~ 1000 UFC. Especificação: Inibição total. Resultado: Adequado Esterilidade. Especificação: Ausência de crescimento. Resultado: Adequado'
        },
        'PA30	Agar Sangue de Carneiro (Base Triptose) pcte c/ 10 placas 90x15mm - Sob encomenda': {
            aspecto: 'pH antes da adição do sangue. Especificação: 7,3 ± 0,1. Resultado: Adequado Aspecto final. Especificação: Meio vermelho sangue opalescente. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico E. coli ATCC 25922. Especificação: Crescimento excelente de colônias grandes, acinzentadas e brilhantes. Resultado: Adequado Desempenho microbiológico S. aureus ATCC 25923.  Especificação: Crescimento excelente de colônias grandes, amareladas e opacas. Resultado: Adequado Desempenho microbiológico S. pneumoniae ATCC 49619. Especificação: Crescimento moderado a bom de colônias pequenas alfa -hemolíticas. Resultado: Adequado Desempenho microbiológico S. pyogenes ATCC 19615.  Especificação: Crescimento moderado a bom de colônias pequenas beta -hemolíticas. Resultado: Adequado Esterilidade.  Especificação: Ausência de crescimento.  Resultado: Adequado'
        },
        'PA308	Cromonew Candida pcte c/ 10 placas 90x15mm': {
            aspecto: 'pH final. Especificação: 6,1 ± 0,2. Resultado: Adequado Aspecto final. Especificação: Meio âmbar claro, levemente opalescente. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico C. albicans ATCC 10231. Especificação: Crescimento bom de colônias verde. Resultado: Adequado Desempenho microbiológico C. tropicalis INCQS 40281. Especificação: Crescimento bom de colônias azuis a verde-bandeira. Resultado: Adequado Desempenho microbiológico C. parasilosis ATCC 22019. Especificação: Crescimento bom de colônias branco brilhosa a roxa. Resultado: Adequado Esterilidade. Especificação: Ausência de crescimento. Resultado: Adequado'
        },
        'PA31	Agar Sangue de Carneiro (Base TSA) pcte c/ 10 placas 90x15mm': {
            aspecto: 'Aspecto final. Especificação: Meio vermelho vivo/sangue opalescente. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico E. coli ATCC 25922 ou similar. Especificação: Crescimento excelente de colônias grandes, acinzentadas e brilhantes. Resultado: Adequado Desempenho microbiológico S. aureus ATCC 25923 ou similar.  Especificação: Crescimento excelente de colônias grandes, amareladas e opacas. Resultado: Adequado Desempenho microbiológico S. pneumoniae ATCC 49619 ou similar. Especificação: Crescimento moderado a bom de colônias pequenas alfa-hemolíticas. Resultado: Adequado Desempenho microbiológico S. pyogenes ATCC 19615 ou similar. Especificação: Crescimento moderado a bom de colônias pequenas beta-hemolíticas. Resultado: Adequado Esterilidade.  Especificação: Ausência de crescimento. Resultado: Adequado'
        },
        'PA29	Agar Sangue de Carneiro (Base Mueller Hinton) pcte c/ 10 placas 90x15mm': {
            aspecto: 'pH antes da adição do sangue. Especificação: 7,3 ± 0,1. Resultado: Adequado Aspecto final. Especificação: Meio vermelho sangue opalescente. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico E. coli ATCC 25922. Especificação: Crescimento excelente de colônias grandes, acinzentadas e brilhantes. Resultado: Adequado Desempenho microbiológico S. aureus ATCC 25923.  Especificação: Crescimento excelente de colônias grandes, amareladas e opacas. Resultado: Adequado Desempenho microbiológico S. pneumoniae ATCC 49619.  Especificação: Crescimento moderado a bom de colônias pequenas Alfa -hemolíticas. Resultado: Adequado Desempenho microbiológico S. pyogenes ATCC 19615.  Especificação: Crescimento moderado a bom de colônias pequenas Beta -hemolíticas. Resultado: Adequado Esterilidade.  Especificação: Ausência de crescimento. Resultado: Adequado'
        },
        'PA27	Agar Sangue de Carneiro (Base Columbia) pcte c/ 10 placas 90x15mm': {
            aspecto: 'pH antes da adição do sangue. Especificação: 7,3 ± 0,1. Resultado: Adequado Aspecto final. Especificação: Meio vermelho sangue opalescente. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico E. coli ATCC 25922. Especificação: Crescimento excelente de colônias grandes, acinzentadas e brilhantes. Resultado: Adequado Desempenho microbiológico S. aureus ATCC 25923.  Especificação: Crescimento excelente de colônias grandes, amareladas e opacas.  Resultado: Adequado Desempenho microbiológico S. pneumoniae ATCC 49619.  Especificação: Crescimento moderado a bom de colônias pequenas -hemolíticas.  Resultado: Adequado Desempenho microbiológico S. pyogenes ATCC 19615.  Especificação: Crescimento moderado a bom de colônias pequenas -hemolíticas.  Resultado: Adequado  Esterilidade.  Especificação: Ausência de crescimento.  Resultado: Adequado'
        },
        'PA36	Agar Triptico de soja (TSA) pcte c/ 10 placas 90x15mm': {
            aspecto: 'pH final. Especificação: 7,3 ± 0,2. Resultado: Adequado Aspecto final. Especificação: Meio bege claro translúcido. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico E. coli ATCC 25922. Especificação: Crescimento bom a excelente. Resultado: Adequado Desempenho microbiológico S. pyogenes ATCC 19615. Especificação: Crescimento bom a excelente. Resultado: Adequado Esterilidade. Especificação: Ausência de crescimento. Resultado: Adequado'
        },
        'PA387	Agar Chocolate + B-NAD pcte c/ 10 placas 90x15mm - Sob encomenda': {
            aspecto: 'pH final a 25º C. Especificação: 7,3 ± 0,1. Resultado: Adequado Aspecto final. Especificação: Meio castanho opalescente. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico N. meningitidis ATCC 13090. Especificação: Crescimento moderado a bom de colônias brancas acizentadas. Resultado: Adequado Desempenho microbiológico H. influenzae ATCC 10211. Especificação: Crescimento moderado a bom de colônias médias translúcidas. Resultado: Adequado Esterilidade. Especificação: Ausência de crescimento. Resultado: Adequado'
        },
        'PA38	Agar Verde Brilhante pcte c/ 10 placas 90x15mm - Sob encomenda': {
            aspecto: 'pH final. Especificação: 6,9 ± 0,2. Resultado: Adequado Aspecto final. Especificação: Meio marrom alaranjado, ligeiramente opalescente. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico E. coli ATCC 25922.  Especificação: Crescimento ausente ou acentuadamente inibido. Resultado: Adequado Desempenho microbiológico S. typhimurium ATCC 14028.  Especificação: Crescimento bom de colônias rosadas ou brancas e centro vermelho. Resultado: Adequado Desempenho microbiológico S. aureus ATCC 25923.  Especificação: Crescimento ausente ou acentuadamente inibido. Resultado: Adequado Esterilidade. Especificação: Ausência de crescimento. Resultado: Adequado'
        },
        'PA380	Agar Sangue c/ telurito pcte c/ 10 placas 90x15mm - Sob encomenda': {
            aspecto: 'pH antes da adição do sangue. Especificação: 7,3 ± 0,2. Resultado: Adequado Aspecto final. Especificação: Meio vermelho escuro opalescente. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico S. aureus ATCC 25923 Inóculo ~ 1000 UFC. Especificação: Crescimento conforme de colônias cinzas ou pretas. Resultado: Adequado Desempenho microbiológico  C. diphtheriae ATCC 13812 Inóculo ~ 1000 UFC. Especificação: Crescimento conforme de colônias cinza ou preta. Resultado: Adequado Desempenho microbiológico S. epidermidis ATCC 12228 Inóculo ~ 1000 UFC. Especificação: Crescimento nulo ou parcial. Resultado: Adequado Desempenho microbiológico  E. coli ATCC 25922 Inóculo ~ 10.000 UFC. Especificação: Inibição total. Resultado: Adequado Esterilidade. Especificação: Ausência de crescimento. Resultado: Adequado'
        },
        'PA348	Agar PCA com TTC pcte c/ 10 placas 90x15mm - Sob encomenda': {
            aspecto: 'Aspecto final. Especificação: Meio bege a levemente rosado translúcido e ligeiramente opalescente. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico. E. coli ATCC 25922 Inóculo ~ 1000 UFC. Especificação: Crescimento ótimo de colônias vermelhas/rosadas. Resultado: Adequado Desempenho microbiológico S. aureus ATCC 25923Inóculo ~ 1000 UFC. Especificação: Crescimento bom de colônias vermelhas/rosadas. Resultado: Adequado Esterilidade. Especificação: Ausência de crescimento. Resultado: Adequado'
        },
        'PA349	Cromonew ALOA Listeria pcte c/ 10 placas 90x15mm': {
            aspecto: 'pH final a 25º C. Especificação: 7,2 ± 0,2. Resultado: Adequado Aspecto final.  Especificação: Meio âmbar claro a amarelado, ligeiramente opalescente. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico L. monocytogenes ATCC 7644 Inóculo ~ 1000 UFC.  Especificação: Crescimento de colônias azul esverdeadas com halo opaco ao seu redor. Resultado: Adequado Desempenho microbiológico L. innocua ATCC 33090 Inóculo ~ 1000 UFC. Especificação: Crescimento de colônias azul esverdeadas sem halo opaco ao seu redor. Resultado: Adequado Desempenho microbiológico E. coli ATCC 25922 Inóculo ~ 10.000 UFC. Especificação: Inibição total. Resultado: Adequado Desempenho microbiológico  E. faecalis ATCC 29212 Inóculo ~ 10.000 UFC. Especificação: Inibição total. Resultado: Adequado Esterilidade. Especificação: Ausência de crescimento. Resultado: Adequado'
        },
        'PA35	Agar Thayer Martin pcte c/ 10 placas 90x15mm': {
            aspecto: 'pH antes da adição do sangue. Especificação: 7,3 ± 0,1. Resultado: Adequado Aspecto final. Especificação: Meio castanho opalescente. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico N. meningitidis ATCC 13090. Especificação: Crescimento moderado a bom de colônias pequenas translúcidas. Resultado: Adequado Desempenho microbiológico S. epidermidis ATCC 12228. Especificação: Crescimento acentuadamente inibido. Resultado: Adequado Desempenho microbiológico C. albicans ATCC 10231. Especificação: Crescimento acentuadamente inibido. Resultado: Adequado Desempenho microbiológico E. coli ATCC 25922. Especificação: Crescimento acentuadamente inibido. Resultado: Adequado Esterilidade. Especificação: Ausência de crescimento. Resultado: Adequado'
        },
        'PA350	Cromonew ECC pcte c/ 10 placas 90x15mm': {
            aspecto: 'pH final a 25º C. Especificação: 7,2 ± 0,2. Resultado: Adequado Aspecto final. Especificação: Meio em gel amarelo-claro ligeiramente opalescente. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico Staphylococcus aureus ATCC 25923 ≥ 104 UFC/mL. Especificação: Crescimento inibido. Resultado: Adequado Desempenho microbiológico Escherichia coli ATCC 25922 50-100 UFC/mL.  Especificação: Crescimento bom de colônias verde-azuladas. Resultado: Adequado Desempenho microbiológico Salmonella typhimurium ATCC 14028 50-100 UFC/mL. Especificação: Crescimento bom de colônias incolores. Resultado: Adequado Esterilidade. Especificação: Ausência de crescimento. Resultado: Adequado'
        },
        'PA395	Cromonew Strep B pcte c/ 10 placas 90x15mm': {
            aspecto: 'Aspecto final. Especificação: Meio sólido, amarelo a âmbar claro opalescente com matiz cinza, com precipitados. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico  E. faecalis ATCC 29212 Inóculo ~ 1.000 UFC. Especificação: Crescimento de colônia azul intenso com halo azul intenso. Resultado: Adequado Desempenho microbiológico E. coli ATCC 25922 Inóculo ~ 1.000 UFC. Especificação: Inibição total. Resultado: Adequado Desempenho microbiológico S. aureus ATCC 25923 Inóculo ~ 1.000 UFC. Especificação: Inibição total. Resultado: Adequado Desempenho microbiológico  S. agalactiae ATCC  13813 Inóculo ~ 100 UFC. Especificação: Crescimento bom de colônia branca a azul-claro com halo azul-claro a médio. Resultado: Adequado Esterilidade. Especificação: Ausência de crescimento. Resultado: Adequado'
        },
        'PA40	Agar XLD pcte c/ 10 placas 90x15mm': {
            aspecto: 'pH final. Especificação: 7,4 ± 0,2. Resultado: Adequado Aspecto final. Especificação: Meio vermelho translúcido, ligeiramente opalescente. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico E. coli ATCC 25922.  Especificação: Crescimento escasso ou ausente de colônias amarelas. Resultado: Adequado Desempenho microbiológico S. typhimurium ATCC 14028. Especificação: Crescimento excelente de colônias vermelhas com centro preto. Resultado: Adequado Desempenho microbiológico S. flexneri ATCC 12022. Especificação: Crescimento excelente de colônias vermelhas translúcidas. Resultado: Adequado Desempenho microbiológico E. faecalis ATCC 29212. Especificação: Crescimento ausente. Resultado: Adequado Esterilidade. Especificação: Ausência de crescimento.  Resultado: Adequado'
        },
        'PA406	Agar BHI pcte c/ 10 placas 90x15mm - Sob encomenda': {
            aspecto: 'pH final - Especificação: 6,6 ± 0,2 - Resultado: Adequado Aspecto final - Especificação: Meio âmbar claro translúcido, ligeiramente opalescente - Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho Microbiológico S. pyogenes ATCC 19615 - Especificação: Crescimento bom de colônias brancas características  Resultado: Adequado Desempenho Microbiológico S. pneumoniae ATCC 49619  - Especificação: Crescimento bom de colônias brancas características Resultado: Adequado Esterilidade -  Especificação: Ausência de crescimento  Resultado: Adequado'
        },
        'PA41	Cromonew UTI pcte c/ 10 placas 90x15mm': {
            aspecto: 'pH final. Especificação: 6,8 ± 0,2. Resultado: Adequado Aspecto final.  Especificação: Meio âmbar claro a médio, ligeiramente opalescente e sem precipitados. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico E. coli ATCC 25922. Especificação: Crescimento excelente de colônias transparentes rosa-escuras a púrpuras com ou sem halos no meio ao redor.   Resultado: Adequado Desempenho microbiológico P. mirabilis ATCC 25933. Especificação: Crescimento excelente de colônias cor palha a bege com halo marrom. Resultado: Adequado Desempenho microbiológico K. pneumoniae ATCC 13883. Especificação: Crescimento excelente de colônias azul-médio a escuro. Resultado: Adequado Desempenho microbiológico E. faecalis ATCC 29212. Especificação: Crescimento excelente de colônias pequenas verde-azuladas. Resultado: Adequado Esterilidade. Especificação: Ausência de crescimento  Resultado: Adequado'
        },
        'PA28	Agar Sangue de Carneiro (Base Mueller Hinton) pcte c/ 10 placas 140x15mm': {
            aspecto: 'pH final. Especificação: 7,3 ± 0,1. Resultado: Adequado Aspecto final. Especificação: Meio vermelho sangue opalescente. Resultado: Adequado Espessura do ágar. Especificação: 4 mm.  Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico E. coli ATCC 259222. Especificação: Crescimento excelente de colônias grandes brilhantes. Resultado: Adequado Desempenho microbiológico S. aureus ATCC 259232. Especificação: Crescimento excelente de colônias médias e opacas. Resultado: Adequado Desempenho microbiológico P. aeruginosa ATCC 278532. Especificação: Crescimento excelente de colônias esverdeadas. Resultado: Adequado Desempenho microbiológico E. faecalis ATCC 292122. Especificação: Crescimento excelente de colônias puntiformes. Resultado: Adequado Conteúdo de Cátions (Testado com P. aeruginosa ATCC 27853 padronizada em 108 UFC/mL e discos com 10 µg). Especificação: Amicacina – diâmetro da zona de inibição entre 18 e 26 mm/ Gentamicina – diâmetro da zona de inibição entre 16 e 21 mm/ Tobramicina – diâmetro da zona de inibição entre  19 e 25 mm. Resultado: Adequado Conteúdo de Timidina (Testado com E. faecalis ATCC 29212 padronizada em 108 UFC/mL e disco com 25 µg).  Especificação: Sulfametoxazol-Trimetoprim – diâmetro da zona de inibição acima de 20 mm, livre de colônias puntiformes. Resultado: Adequado Esterilidade.  Especificação: Ausência de crescimento. Resultado: Adequado'
        },
        'PA340	Agar MH-F (Agar sangue de cavalo base Mueller Hinton + B-NAD) pcte c/ 10 placas 140x15mm': {
            aspecto: 'pH antes da adição do sangue. Especificação: 7,3 ± 0,1. Resultado: Adequado Aspecto final. Especificação: Meio vermelho sangue opalescente. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico S. pneumoniae ATCC 49619. Especificação: Crescimento bom de colônias  Alfa-hemolíticas. Resultado: Adequado Desempenho microbiológico H. influenzae ATCC 49766. Especificação: Crescimento bom de colônias gama-hemolíticas. Resultado: Adequado Esterilidade -  Especificação: Ausência de crescimento. Resultado: Adequado'
        },
        'PA347	Agar MYP pcte c/ 10 placas 140x15mm - Sob encomenda': {
            aspecto: 'pH final a 25º C. Especificação: 7,2 ± 0,2  Resultado: Adequado Aspecto final.  Especificação: Meio laranja amarelado a rosa alaranjado, ligeiramente opalescente. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico Bacillus cereus ATCC 11778 inóculo ~ 10 – 300 UFC. Especificação: Crescimento; colônias rosas com halo de lecitinase. Resultado: Adequado Desempenho microbiológico Bacillus subtilis ATCC 6633 inóculo ~ 10 – 300 UFC.   Especificação: Crescimento; colônias translúcidas, cor de ágar. Resultado: Adequado Desempenho microbiológico Escherichia coli ATCC 8739 inóculo ~ 300 – 1000 UFC. Especificação: Crescimento notavelmente oprimido a inibido; colônias amarelas, se recuperadas. Resultado: Adequado Desempenho microbiológico Staphylococcus aureus ATCC 6538 inóculo ~ 10 – 300 UFC. Especificação: Crescimento; colônias amarelas. Resultado: Adequado Esterilidade. Especificação: Ausência de crescimento. Resultado: Adequado'
        },
        'PA312	Agar XLD pcte c/ 10 placas 140x15mm - Sob encomenda': {
            aspecto: 'pH final. Especifciação: 7,4 ± 0,2. Resultado: Adequado Aspecto final. Especificação: Meio vermelho translúcido, ligeiramente opalescente. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico E. coli ATCC 25922. Especificação: Crescimento escasso ou ausente de colônias amarelas. Resultado Adequado.  Desempenho microbiológico S. typhimurium ATCC 14028. Especificação: Crescimento excelente de colônias vermelhas com centro preto. Resultado Adequado.  Desempenho microbiológico S. flexneri ATCC 12022. Especificação: Crescimento excelente de colônias vermelhas translúcidas. Resultado Adequado.  Desempenho microbiológico E. faecalis ATCC 29212. Especificação: Crescimento ausente. Resultado Adequado.  Esterilidade. Especificação: Ausência de crescimento. Resultado Adequado.'
        },
        'PA18	Agar Mueller Hinton pcte c/ 10 placas 140x15mm': {
            aspecto: 'pH final -  Especificação: 7,3 ± 0,1. Resultado: Adequado Aspecto final -  Especificação: Meio bege claro translúcido, ligeiramente opalescente.  Resultado: Adequado Espessura do ágar - Especificação: 4 mm ± 0,5.  Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico P. aeruginosa ATCC 27853 * -  Especificação: Crescimento excelente de colônias esverdeadas  Resultado: Adequado  Desempenho microbiológico E. faecalis ATCC 29212 * -  Especificação: Crescimento excelente de colônias puntiformes  Resultado: Adequado  Conteúdo de Cátions (Testado com P. aeruginosa ATCC 27853 padronizada em 108 UFC/mL e discos com 10 µg)-  Especificação: Amicacina – diâmetro da zona de inibição entre 20 e 26 mm / Gentamicina – diâmetro da zona de inibição entre 17 e 23 mm / Tobramicina – diâmetro da zona de inibição entre  20 e 26 mm  Resultado: Adequado  Conteúdo de Timidina(Testado com E. faecalis ATCC 29212 padronizada em 108 UFC/mL e disco com 25 µg) -  Especificação: Sulfametoxazol - Trimetoprim – diâmetro da zona de inibição entre 26 e 34 mm Resultado: Adequado  Esterilidade -  Especificação: Ausência de crescimento  Resultado: Adequado'
        },
        'PA338	Agar Sangue/Mac Conkey/Manitol pcte c/ 10 triplacas 90x15 mm - Sob encomenda': {
            aspecto: 'pH antes da adição do sangue. Especificação: Ágar Sangue: 7,3 ± 0,1. Resultado: Adequado   pH final. Ágar Mac Conkey: Especificação: 7,1 ± 0,2. Resultado: Adequado pH final. Ágar Manitol:  Especificação: 7,1 ± 0,2. Resultado: Adequado Aspecto final. Ágar Sangue: Especificação: Meio vermelho sangue opalescente. Resultado: Adequado Aspecto final. Ágar Mac Conkey: Especificação:  Meio rosado translúcido. Resultado: Adequado Aspecto final. Ágar Manitol:  Especificação: Meio vermelho translúcido, ligeiramente opalescente. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Ágar Sangue Desempenho microbiológico  E. coli ATCC 25922 Inóculo ~ 1000 UFC. Especificação: Crescimento excelente de colônias grandes, acinzentadas e brilhantes. Resultado: Adequado Desempenho microbiológico S. aureus ATCC 25923 Inóculo ~ 1000 UFC. Especificação: Crescimento excelente de colônias grandes, amareladas e opacas. Resultado: Adequado Desempenho microbiológico S. pneumoniae ATCC 49619 Inóculo ~ 1000 UFC. Especificação: Crescimento moderado a bom de colônias pequenas α hemolíticas. Resultado: Adequado Desempenho microbiológico S. pyogenes ATCC 19615  Inóculo ~ 1000 UFC. Especificação: Crescimento moderado a bom de colônias pequenas β hemolíticas. Resultado: Adequado  Ágar Mac Conkey Desempenho microbiológico E. coli ATCC 25922 Inóculo ~ 10.000 UFC. Especificação: Crescimento excelente de colônias vermelhas com precipitado de bile. Resultado: Adequado Desempenho microbiológico P. mirabilis ATCC 12453 Inóculo ~ 10.000 UFC. Especificação: Crescimento excelente de colônias incolores, sem swarming. Resultado: Adequado Desempenho microbiológico E. faecalis ATCC 29212 Inóculo ~ 10.000 UFC. Especificação: Crescimento ausente  Resultado: Adequado  Ágar Manitol  Desempenho microbiológico S. aureus ATCC 25923 Inóculo ~ 10.000 UFC. Especificação: Crescimento moderado a bom de colônias brancas com halo amarelo ao seu redor. Resultado: Adequado Desempenho microbiológico S. epidermidis ATCC 12228 Inóculo ~ 10.000 UFC. Especificação:  Crescimento moderado a bom de colônias brancas puntiformes. Resultado: Adequado Desempenho microbiológico P. mirabilis ATCC 25933 Inóculo ~ 10.000 UFC.  Especificação: Crescimento acentuadamente inibido  Resultado: Adequado  Esterilidade.  Especificação:  Ausência de crescimento Resultado: Adequado'
        },
        'PA339	Agar Sangue/Mac Conkey/SS pcte c/ 10 triplacas 90x15mm - Sob encomenda': {
            aspecto: 'pH final. Ágar Sangue: Especificação: 7,3 ± 0,1. Resultado: Adequado pH final. Ágar Mac Conkey: Especificação: 7,1 ± 0,2. Resultado: Adequado pH final. Ágar SS: Especificação: 7,0 ± 0,2  Resultado: Adequado  Aspecto final. Ágar Sangue: Especificação: Meio vermelho sangue opalescente. Resultado: Adequado Aspecto final. Ágar Mac Conkey: Especificação: Meio rosado translúcido. Resultado: Adequado Aspecto final. Ágar SS: Especificação: Meio vermelho alaranjado, ligeiramente opalescente  Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Ágar Sangue Desempenho microbiológico E. coli ATCC 25922 Inóculo ~ 1000 UFC. Especificação: Crescimento excelente de colônias grandes, acinzentadas e brilhantes. Resultado: Adequado Desempenho microbiológico S. aureus ATCC 25923 Inóculo ~ 1000 UFC. Especificação: Crescimento excelente de colônias grandes, amareladas e opacas. Resultado: Adequado Desempenho microbiológico S. pneumoniae ATCC 49619 Inóculo ~ 1000 UFC. Especificação:  Crescimento moderado a bom de colônias pequenas α hemolíticas. Resultado: Adequado Desempenho microbiológico S. pyogenes ATCC 19615 Inóculo ~ 1000 UFC. Especificação: Crescimento moderado a bom de colônias pequenas β hemolíticas  Resultado: Adequado  Mac Conkey Desempenho microbiológico E. coli ATCC 25922  Inóculo ~ 10.000 UFC. Especificação: Crescimento excelente de colônias vermelhas com precipitado de bile. Resultado: Adequado Desempenho microbiológico P. mirabilis ATCC 12453 Inóculo ~ 10.000 UFC. Especificação: Crescimento excelente de colônias incolores, sem swarming. Resultado: Adequado Desempenho microbiológico E. faecalis ATCC 29212 Inóculo ~ 10.000 UFC. Especificação: Crescimento ausente. Resultado: Adequado  SS Desempenho microbiológico E. coli ATCC 25922 Inóculo ~ 10.000 UFC. Especificação: Crescimento escasso ou ausente de colônias amarelas. Resultado: Adequado Desempenho microbiológico S. typhimurium ATCC 14028 Inóculo ~ 10.000 UFC. Especificação: Crescimento excelente de colônias incolores com centro preto. Resultado: Adequado Desempenho microbiológico E. faecalis ATCC 29212 Inóculo ~ 10.000 UFC. Especificação: Crescimento ausente. Resultado: Adequado  Esterilidade. Especificação: Ausência de crescimento. Resultado: Adequado'
        },
        'PA333	Cromonew UTI pcte c/ 10 triplacas 90x15mm': {
            aspecto: 'pH final. Especificação: 5,8 ± 0,2. Resultado: Adequado Aspecto final.  Especificação: Meio âmbar claro a médio, ligeiramente opalescente e sem precipitados. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico E. coli ATCC 25922. Especificação: Crescimento excelente de colônias transparentes rosa-escuras a púrpuras com ou sem halos no meio ao redor. Resultado: Adequado Desempenho microbiológico P. mirabilis ATCC 25933. Especificação: Crescimento excelente de colônias cor palha a bege com halo marrom. Resultado: Adequado Desempenho microbiológico K. pneumoniae ATCC 13883. Especificação:Crescimento excelente de colônias azul-médio a escuro. Resultado: Adequado Desempenho microbiológico E. faecalis ATCC 29212. Especificação: Crescimento excelente de colônias pequenas verde-azuladas. Resultado: Adequado Esterilidade. Especificação: Ausência de crescimento. Resultado: Adequado'
        },
        'PA334	Agar Sangue/Chocolate/Mac Conkey pcte c/ 10 triplacas 90x15mm': {
            aspecto: 'Aspecto final Ágar Sangue: Especificação: Meio vermelho sangue opalescente. Resultado: Adequado Aspecto final Ágar Chocolate: Especificação: Meio castanho opalescente. Resultado: Adequado Aspecto final Ágar Mac Conkey: Especificação: Meio rosado translúcido. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico E. coli ATCC 25922 (inóculo padronizado em 10.000 UFC/mL para ágar sangue e em 100.000 UFC/mL para ágar mac conkey) - Ágar Sangue: Especificação: Crescimento excelente de colônias grandes, acinzentadas e brilhantes. Resultado: Adequado Desempenho microbiológico E. coli ATCC 25922 (inóculo padronizado em 10.000 UFC/mL para ágar sangue e em 100.000 UFC/mL para ágar mac conkey) - Ágar Chocolate: N.A.  Desempenho microbiológico E. coli ATCC 25922 (inóculo padronizado em 10.000 UFC/mL para ágar sangue e em 100.000 UFC/mL para ágar mac conkey) - Ágar Mac Conkey: Especificação: Crescimento excelente de colônias vermelhas com precipitado de bile. Resultado: Adequado Desempenho microbiológico S. aureus ATCC 25923 (inóculo padronizado em 10.000 UFC/mL para ágar sangue e em 100.000 UFC/mL para ágar mac conkey) - Ágar Sangue:  Especificação: Crescimento excelente de colônias grandes, acinzentadas e brilhantes. Resultado: Adequado Desempenho microbiológico S. aureus ATCC 25923 (inóculo padronizado em 10.000 UFC/mL para ágar sangue e em 100.000 UFC/mL para ágar mac conkey) - Ágar Chocolate: N.A. Desempenho microbiológico S. aureus ATCC 25923 (inóculo padronizado em 10.000 UFC/mL para ágar sangue e em 100.000 UFC/mL para ágar mac conkey) - Ágar Mac Conkey:  Especificação: Crescimento excelente de colônias vermelhas com precipitado de bile. Resultado: Adequado Desempenho microbiológico S. pneumoniae ATCC 49619 (inóculo padronizado em 10.000 UFC/mL) - Ágar Sangue: Especificação: Crescimento moderado a bom de colônias pequenas α-hemolíticas. Resultado: Adequado Desempenho microbiológico S. pneumoniae ATCC 49619 (inóculo padronizado em 10.000 UFC/mL) - Ágar Chocolate: N.A. Desempenho microbiológico S. pneumoniae ATCC 49619 (inóculo padronizado em 10.000 UFC/mL) - Ágar Mac Conkey: N.A.  Desempenho microbiológico S. pyogenes ATCC 19615 (inóculo padronizado em 10.000 UFC/mL) - Ágar Sangue: Especificação: Crescimento moderado a bom de colônias pequenas β-hemolíticas. Resultado: Adequado Desempenho microbiológico S. pyogenes ATCC 19615 (inóculo padronizado em 10.000 UFC/mL) - Ágar Chocolate: N.A.  Desempenho microbiológico S. pyogenes ATCC 19615 (inóculo padronizado em 10.000 UFC/mL) - Ágar Mac Conkey: N.A.  Desempenho microbiológico H. influenzae ATCC 10211 (inóculo padronizado em 10.000 UFC/mL) - Ágar Sangue: N.A.  Desempenho microbiológico H. influenzae ATCC 10211 (inóculo padronizado em 10.000 UFC/mL) - Ágar Chocolate: Especificação: Crescimento moderado a bom de colônias médias translúcidas. Resultado: Adequado Desempenho microbiológico H. influenzae ATCC 10211 (inóculo padronizado em 10.000 UFC/mL) - Ágar Mac Conkey: N.A.  Esterilidade. Especificação: Ausência de crescimento. Resultado: Adequado'
        },
        'PA335	Agar XLD/Mac Conkey/Cromonew Salmonella pcte c/ 10 triplacas 90x15mm': {
            aspecto: 'pH final. Especificação: Ágar XLD: 7,4 ± 0,2. Resultado: Adequado pH final. Especificação: Ágar Mac Conkey: 7,1 ± 0,2. Resultado: Adequado pH final. Especificação: Ágar Cromonew Salmonella: 7,7 ± 0,2. Resultado: Adequado Aspecto final. Especificação: Ágar XLD: Meio vermelho translúcido, ligeiramente opalescente. Resultado: Adequado Aspecto final. Especificação: Ágar Mac Conkey: Meio rosado translúcido. Resultado: Adequado Aspecto final. Especificação: Ágar Cromonew Salmonella: Meio âmbar claro, ligeiramente opalescente. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'XLD Desempenho microbiológico E. coli ATCC 25922 Inóculo ~ 10.000 UFC. Especificação: Crescimento escasso ou ausente de colônias amarelas. Resultado: Adequado Desempenho microbiológico S. typhimurium ATCC 14028 Inóculo ~ 10.000 UFC.  Especificação: Crescimento excelente de colônias vermelhas com centro preto. Resultado: Adequado Desempenho microbiológico S. flexneri ATCC 12022 Inóculo ~ 10.000 UFC. Especificação: Crescimento excelente de colônias vermelhas translúcidas.  Resultado: Adequado Desempenho microbiológico E. faecalis ATCC 29212 Inóculo ~ 10.000 UFC. Especificação: Crescimento ausente. Resultado: Adequado  Mac Conkey Desempenho microbiológico E. coli ATCC 25922 Inóculo ~ 10.000 UFC. Especificação: Crescimento excelente de colônias vermelhas com precipitado de bile. Resultado: Adequado Desempenho microbiológico P. mirabilis ATCC 12453 Inóculo ~ 10.000 UFC. Especificação: Crescimento excelente de colônias incolores, sem swarming. Resultado: Adequado Desempenho microbiológico  E. faecalis ATCC 29212 Inóculo ~ 10.000 UFC. Especificação: Crescimento ausente  Resultado: Adequado.   Cromonew Salmonella Desempenho microbiológico S. typhimurium ATCC 14028 Inóculo ~ 10.000 UFC. Especificação: Crescimento excelente de colônias roxo claro com halo. Resultado: Adequado Desempenho microbiológico E. coli ATCC 25922 Inóculo ~ 10.000 UFC. Especificação: Crescimento excelente de colônias azuis. Resultado: Adequado Desempenho microbiológico S. aureus ATCC 25923 Inóculo ~ 10.000 UFC. Especificação: Crescimento ausente. Resultado: Adequado   Esterilidade. Especificação: Ausência de crescimento. Resultado: Adequado'
        },
        'PA353	Cloreto de sódio 0,85% estéril sachê c/ 10 tubos': {
            aspecto: 'Concentração. Especificação: 0,85 g em 100 mL de água ±  0,05 g. Resultado: Adequado Aspecto final. Especificação: Líquido cristalino e homogêneo. Resultado: Adequado Provas de identificação e Impurezas. Especificação: Conforme Farmacopéia Brasileira II págs. 247 e 248. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico S. aureus ATCC 25923. Especificação: Crescimento bom a excelente no subcultivo. Resultado: Adequado Desempenho microbiológico S. epidermidis ATCC 12228. Especificação: Crescimento bom a excelente no subcultivo. Resultado: Adequado Desempenho microbiológico S. pyogenes ATCC 19615. Especificação: Crescimento bom a excelente no subcultivo. Resultado: Adequado Esterilidade. Especificação: Ausência de crescimento. Resultado: Adequado'
        },
        'PA354	Cloreto de sódio 0,85% + Swab sachê c/ 10 tubos (20 swabs) - Sob encomenda': {
            aspecto: 'Concentração. Especificação: 0,85 g em 100 mL de água ±  0,05 g. Resultado: Adequado Aspecto final. Especificação: Líquido cristalino e homogêneo. Resultado: Adequado Provas de identificação e Impurezas. Especificação: Conforme Farmacopéia Brasileira II págs. 247 e 248. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico S. aureus ATCC 25923. Especificação: Crescimento bom a excelente no subcultivo. Resultado: Adequado Desempenho microbiológico S. epidermidis ATCC 12228. Especificação: Crescimento bom a excelente no subcultivo. Resultado: Adequado Desempenho microbiológico S. pyogenes ATCC 19615.  Especificação: Crescimento bom a excelente no subcultivo. Resultado: Adequado Esterilidade. Especificação: Ausência de crescimento.  Resultado: Adequado'
        },
        'PA355	VTM (Seg. CDC) sachê c/ 10 tubos - Sob encomenda': {
            aspecto: 'Aspecto final. Especificação: Límpido com ausência de partículas macroscópicas suspensas. Resultado: Adequado Coloração. Especificação: Incolor.  Resultado: Adequado pH final. Especificação: 7,4 ± 0,5.  Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Esterilidade. Especificação: Ausência de crescimento. Resultado: Adequado.  Desempenho. Especifciação: Manutenção da viabilidade do vírus SARS-COV-2 por 48 horas em temperatura ambiente (10 a 30º C) e refrigerado (2 a 8º C). Resultado: Adequado.'
        },
        'PA356	VTM  (Seg CDC) + Swab sachê c/ 10 tubos (20 swabs) - Sob encomenda': {
            aspecto: 'Aspecto final. Especificação: Límpido com ausência de partículas macroscópicas suspensas. Resultado: Adequado Coloração. Especificação: Incolor. Resultado: Adequado pH final. Especifciação: 7,4 ± 0,5. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Esterilidade. Especificação: Ausência de crescimento. Resultado: Adequado Desempenho. Especificação: Manutenção da viabilidade do vírus SARS-COV-2 por 48 horas em temperatura ambiente (10 a 30º C) e refrigerado (2 a 8º C).  Resultado: Adequado'
        },
        'PA365	VTM + Swab sachê c/ 10 tubos (20 swabs) - Sob encomenda': {
            aspecto: 'Aspecto final. Especificação: Límpido com ausência de partículas macroscópicas suspensas. Resultado: Adequado Coloração. Especificação: Vermelho. Resultado: Adequado Coloração (congelado).  Especificação: Amarelo. Resultado: Adequado pH final.  Especificação: 7,3 ± 0,1. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Esterilidade. Especificação: Ausência de crescimento. Resultado: Adequado Desempenho.  Especificação: Manutenção da viabilidade do vírus SARS-COV-2 por 48 horas em temperatura ambiente (10 a 30º C) e refrigerado (2 a 8º C). Resultado: Adequado'
        },
        'PA368	VTM caixa c/ 50 tubos - Sob encomenda': {
            aspecto: 'Aspecto final. Especificação: Límpido com ausência de partículas macroscópicas suspensas. Resultado: Adequado Coloração. Especificação: Vermelho. Resultado: Adequado Coloração (congelado).  Especificação: Amarelo. Resultado: Adequado pH final.  Especificação: 7,3 ± 0,1. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Esterilidade. Especificação: Ausência de crescimento. Resultado: Adequado Desempenho.  Especificação: Manutenção da viabilidade do vírus SARS-COV-2 por 48 horas em temperatura ambiente (10 a 30º C) e refrigerado (2 a 8º C). Resultado: Adequado'
        },
        'PA369	VTM caixa c/ 100 tubos - Sob encomenda': {
            aspecto: 'Aspecto final. Especificação: Límpido com ausência de partículas macroscópicas suspensas. Resultado: Adequado Coloração. Especificação: Vermelho. Resultado: Adequado Coloração (congelado). Especificação: Amarelo. Resultado: Adequado pH final. Especificação: 7,3 ± 0,1. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Esterilidade. Especificação: Ausência de crescimento. Resultado: Adequado Desempenho.  Especificação: Manutenção da viabilidade do vírus SARS-COV-2 por 48 horas em temperatura ambiente (10 a 30º C) e refrigerado (2 a 8º C). Resultado: Adequado'
        },
        'PA363	VTM sachê c/ 10 tubos - Sob encomenda': {
            aspecto: 'Aspecto final. Especificação: Límpido com ausência de partículas macroscópicas suspensas. Resultado: Adequado. Coloração. Especificação: Vermelho. Resultado: Adequado. Coloração (congelado). Especificação: Amarelo. Resultado: Adequado. pH final.  Especificação: 7,3 ± 0,1.  Resultado: Adequado.',
            bacteriana: 'conforme',
            infoText1: 'Esterilidade. Especificação: Ausência de crescimento. Resultado: Adequado Desempenho. Especificação: Manutenção da viabilidade do vírus SARS-COV-2 por 48 horas em temperatura ambiente (10 a 30º C) e refrigerado (2 a 8º C). Resultado: Adequado'
        },
        'PA382	Meio de Stuart + Swab sachês c/ 10 tubos (10 Swab) - Sob encomenda': {
            aspecto: 'pH final. Especificação: 7,3 ± 0,2. Resultado: Adequado Aspecto final. Especificação: Meio semi sólido, levemente opalescente. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico S. pyogenes ATCC 19615. Especificação: Crescimento no subcultivo. Resultado: Adequado Desempenho microbiológico S. pneumoniae ATCC 49619. Especificação: Crescimento no subcultivo. Resultado: Adequado Desempenho microbiológico E. coli ATCC 25922. Especificação: Crescimento no subcultivo   Resultado: Adequado Esterilidade. Especificação: Ausência de crescimento. Resultado: Adequado'
        },
        'PA376	Meio de Stuart sachê c/ 10 tubos - Sob encomenda': {
            aspecto: 'pH final. Especificação: 7,3 ± 0,2. Resultado: Adequado Aspecto final. Especificação: Meio semi sólido, levemente opalescente. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico S. pyogenes ATCC 19615. Especificação: Crescimento no subcultivo. Resultado: Adequado Desempenho microbiológico N. meningitidis ATCC 13090. Especificação: Crescimento no subcultivo. Resultado: Adequado Desempenho microbiológico E. coli ATCC 25922. Especificação: Crescimento no subcultivo. Resultado: Adequado Esterilidade. Especificação: Ausência de crescimento. Resultado: Adequado'
        },
        'PA161	Transprov V (Glicerina Tamponada + Coletor) cx c/ 12 frascos': {
            aspecto: 'Aspecto final - Especificação: Meio líquido incolor levemente opalescente. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico S. flexneri ATCC 12022 -  Especificação: Crescimento no subcultivo. Resultado: Adequado Desempenho microbiológico S. typhimurium ATCC 14028  -  Especificação: Crescimento no subcultivo.   Resultado: Adequado Esterilidade -  Especificação: Ausência de crescimento. Resultado: Adequado'
        },
        'PA407	VTM sachê c/ 10 tubos falcon - Sob encomenda': {
            aspecto: 'Aspecto final. Especificação: Límpido com ausência de partículas macroscópicas suspensas. Resultado: Adequado. Coloração. Especificação: Vermelho. Resultado: Adequado. Coloração (congelado). Especificação: Amarelo. Resultado: Adequado. pH final.  Especificação: 7,3 ± 0,1.  Resultado: Adequado.',
            bacteriana: 'conforme',
            infoText1: 'Esterilidade. Especificação: Ausência de crescimento. Resultado: Adequado Desempenho. Especificação: Manutenção da viabilidade do vírus SARS-COV-2 por 48 horas em temperatura ambiente (10 a 30º C) e refrigerado (2 a 8º C). Resultado: Adequado'
        },
        'PA260	Pseudomonas aeruginosa NEWP 0053 frasco c/ 05 discos': {
            aspecto: 'Não aplicável.',
            bacteriana: 'conforme',
            infoText1: 'Cepa de 4ª Geração. Teste de Viabilidade. Especificação: Contagem de células viáveis/mL: > 100.000 UFC/mL. Resultado: Adequado Teste de Pureza. Microscopia: Especificação: BGN. Resultado: Adequado Teste de Pureza. Cultura: inoculação em Ágar Sangue e Ágar McConkey: colônias típicas.  Resultado: Adequado Testes Fenotípicos. Provas Bioquímicas Manuais: Especificação: Oxidase +.  Resultado: Adequado Provas Bioquímicas Automatizadas: Especificação:  Glicose: + (oxidativo); Acetamida: +; Esculina: -; Uréia: -; Citrato: +; Malonato: +; Lisina: -; Polimixina B: S; Triptofano-desaminase: -; Maltose: -; Manitol: +; Xilose: +; Rafinose: -; Sorbitol: -; Sacarose: -; Inositol: -; Adonitol: -; Gás Sulfídrico: -; ONPG: -; Rhamnose: -; Arabinose: -; Arginina +; Ornitina: -.  Resultado: Adequado Teste de Suscetibilidade a antimicrobianos (método de Kirby Bauer – limites de tamanho do halo de inibição em mm) Amicacina 30: 20-26; Aztreonam 30: 23-29; Cefepima 30: 25-31; Cefiderocol 30: 23-29; Ceftazidima 10: 21-27;  Ceftolozana-tazobactam 30-10: 25-31; Ciprofloxacino 5: 25-33; Gentamicina 10: 17-23; Imipenem 10: 20-28;  Levofloxacino 5: 19-26; Meropenem 10: 27-33; Piperacilina-Tazobactam 30-6: 23-29; Tobramicina 10: 20-26.  Resultado: Adequado'
        },
        'PA261	Salmonella typhimurium NEWP 0028 frasco c/ 05 discos': {
            aspecto: 'Não aplicável.',
            bacteriana: 'conforme',
            infoText1: 'Cepa de 4ª Geração. Teste de Viabilidade. Especificação: Contagem de células viáveis/mL: superior a 100.000 UFC/mL. Resultado: Adequado Teste de Pureza. Microscopia. Especificação:  CBGN. Resultado: Adequado Teste de Pureza. Cultura. Especificação: inoculação em Ágar Sangue e Ágar McConkey: colônias típicas. Resultado: Adequado Testes Fenotípicos. Provas Bioquímicas Automatizadas: Glicose: +; Rafinose: -; Inositol: +; Uréia: -; Lisina:+; Triptofano-desaminase: -; Tartarato:-; OF/Glicose:+; Citrato:+; Sacarose: -; Rhamnose: +; Adonitol: -; Gás Sulfídrico: +; Arginina: -; Malonato: -; Sorbitol: +; Arabinose: +; Melobiose: +; Indol: -; Ornitina: +; VP: -; Esculina: -; ONPG: -; Oxidase: -; Acetamida: -; Cetrimide: -. Resultado: Adequado'
        },
        'PA262	Shigella flexneri NEWP 0122 frasco c/ 05 discos': {
            aspecto: 'Não aplicável.',
            bacteriana: 'conforme',
            infoText1: 'Cepa de 4ª Geração. Teste de Viabilidade. Especificação: Contagem de células viáveis/mL: superior a 100.000 UFC/mL. Resultado: Adequado Teste de Pureza. Microscopia:  Especificação: BGN.  Resultado: Adequado Teste de Pureza. Cultura:  Especificação: inoculação em Ágar Sangue e Ágar McConkey: colônias típicas.  Resultado: Adequado Testes Fenotípicos. Provas Bioquímicas: Oxidase: -; Indol: -; Lactose: -; Glicose: + (fermentativo); Acetamida: -;   Esculina: -; Uréia: -; Malonato: -;   Lisina: -; Polimixina B: S; Triptofano-desaminase: -;    Maltose: -; Manitol: +; Xilose: -;   Rafinose: -; Sorbitol: -; Sacarose: -; Inositol: -; Adonitol: -; Gás Sulfídrico: -; ONPG: -; Rhamnose: -; Arabinose: +; Arginina -; Ornitina: -.  Resultado: Adequado'
        },
        'PA263	Staphylococcus aureus NEWP 0023 frasco c/ 05 discos': {
            aspecto: 'Não aplicável.',
            bacteriana: 'conforme',
            infoText1: 'Cepa de 4ª Geração. Teste de Viabilidade. Especificação: Contagem de células viáveis/mL: superior a 100.000 UFC/mL. Resultado: Adequado Teste de Pureza. Microscopia: Especificação: CGP.  Resultado: Adequado Teste de Pureza. Cultura: Especificação: inoculação em Ágar Sangue: colônias típicas.  Resultado: Adequado Testes Fenotípicos. Provas Bioquímicas Manuais: Especificação: Catalase: +; Coagulase livre: +; Coagulase ligada: +. Resultado: Adequado Provas Bioquímicas Automatizadas: Especificação: Bacitracina: R; Optoquina: R; Hemicelulose: -; NaCl 6,5%: +; Bile 10%: +; Bile 40%: +; Esculina: -; Arginina: +; Uréia: +; Vermelho Tetrazólio: +; Novobiocina: S; Dextrose: +; Lactose: +; Manitol: +; Rafinose: -; Salicina: -; Sorbitol: +; Sacarose: +; Trealose: +; Arabinose: -; PYR: +; Inulina: -; Melibiose: -; Melezitose: -; Celobiose: -; Ribose: +;Xilose: -. Resultado: Adequado'
        },
        'PA264	Staphylococcus aureus NEWP 0038 frasco c/ 05 discos': {
            aspecto: 'Não aplicável.',
            bacteriana: 'conforme',
            infoText1: 'Cepa de 4ª Geração. Teste de Viabilidade. Especificação: Contagem de células viáveis/mL: superior a 100.000 UFC/mL. Resultado: Adequado. Teste de Pureza. Microscopia: Especificação: CGP. Resultado: Adequado. Teste de Pureza. Cultura: Especificação: inoculação em Ágar Sangue: colônias típicas. Resultado: Adequado. Testes Fenotípicos. Provas Bioquímicas Manuais:  Especificação: Catalase: +; Coagulase livre: +; Coagulase ligada: +.  Resultado: Adequado. Provas Bioquímicas Automatizadas:  Especificação: Bacitracina: R; Optoquina: R; Hemicelulose: -; NaCl 6,5%: +; Bile 10%: +; Bile 40%: +; Esculina: -; Arginina: +; Uréia: +; Vermelho Tetrazólio: +; Novobiocina: S; Dextrose: +; Lactose: +; Manitol: +; Rafinose: -; Salicina: -; Sorbitol: -; Sacarose: +; Trealose: +; Arabinose: -; PYR: +; Inulina: -; Melibiose: -; Melezitose: -; Celobiose: -; Ribose: +; Xilose: - . Resultado: Adequado.'
        },
        'PA265	Staphylococcus epidermidis NEWP 0128 frasco c/ 05 discos': {
            aspecto: 'Não aplicável.',
            bacteriana: 'conforme',
            infoText1: 'Cepa de 4ª Geração. Teste de Viabilidade. Especificação: Contagem de células viáveis/mL: superior a 100.000 UFC/mL. Resultado: Adequado Teste de Pureza. Microscopia: Especificação: CGP agrupados. Resultado: Adequado Teste de Pureza. Cultura:  Especificação: inoculação em Ágar Sangue: colônias típicas.  Resultado: Adequado Testes Fenotípicos. Provas Bioquímicas Automatizadas: Especificação: Cristal violeta: - Novobiocina: - VP: + Bile esculina: - Lactose: + Tolerância ao sal:  +  Optoquina: + PYR: - Uréia: + tirealose: - Nitrato: + Fosfatase: +  Arginina: +  Manitol: - . Resultado: Adequado'
        },
        'PA266	Streptococcus pyogenes NEWP 0015 frasco c/ 05 discos': {
            aspecto: 'Não aplicável.',
            bacteriana: 'conforme',
            infoText1: 'Cepa de 4ª Geração. Teste de Viabilidade. Especificação: Contagem de células viáveis/mL: superior a 100.000 UFC/mL. Resultado: Adequado Teste de Pureza. Microscopia: Especificação: CGP em cadeias.  Resultado: Adequado Teste de Pureza. Cultura: Especificação: inoculação em Ágar Sangue: colônias típicas beta hemolíticas.  Resultado: Adequado Testes Fenotípicos. Provas Bioquímicas Automatizadas: Especificação: Novobiocina: R; Bile Esculina: S; Lactose: +; NaCl 6,5%: S; Bacitracina: S; PYR: +; Glicose: +; Sacarose: +;  Celobiose: -; Optoquina: R; Uréia: -; Trealose: +; Sorbitol: -; Inulina: -; Salicina: +; Arginina: -; Manitol: -; Arabinose: -; Rafinose: -; Catalase: -. Resultado: Adequado'
        },
        'PA250	Enterobacter aerogenes NEWP 0048 frasco c/ 05 discos': {
            aspecto: 'Não aplicável.',
            bacteriana: 'conforme',
            infoText1: 'Cepa de 4ª Geração Teste de Viabilidade. Contagem de células viáveis/mL. Especificação: superior a 100.000 UFC/mL. Resultado: Adequado Teste de Pureza. Microscopia: Especificação: BGN. Resultado: Adequado Cultura: Especificação: crescimento em Ágar Sangue e em Ágar MacConkey: colônias típicas sem contaminantes. Resultado: Adequado Testes Fenotípicos: Provas Bioquímicas: Oxidase: -; Motilidade: +; Indol: -; Ornitina: +; Lisina: +; Ramnose: +;  Lactose: +; Glicose: +; Rafinose: +; Inositol: +; Uréia: -; Lisina: +; TDA: -; Indol: -; Citrato: +; Sacarose: +; Rhamnose: +; Adonitol: +; H2S: -; Arginina: -; Malonato: +; Sorbitol: +; Arabinose: +; Melibiose: +; VP: +; Esculina: +; ONPG: +. Resultado: Adequado'
        },
        'PA251	Enterobacter cloacae NEWP 0047 frasco c/ 05 discos - Sob encomenda': {
            aspecto: 'Não aplicável.',
            bacteriana: 'conforme',
            infoText1: 'Cepa de 4ª Geração Teste de Viabilidade. Contagem de células viáveis/mL: Especificação: superior a 100.000 UFC/mL. Resultado: Adequado Microscopia. Especifciação:BGN. Resultado: Adequado Cultura: crescimento em Ágar Sangue e em Ágar MacConkey. Especificação: colônias típicas sem contaminantes.  Resultado: Adequado Testes Fenotípicos. Provas Bioquímicas:  Especificação: Oxidase: -; Motilidade: +; Indol: -; Ornitina: +; Lisina: -; Ramnose: +;  Lactose: +; Glicose: + (fermentativo); Esculina: -; Uréia: -;   Citrato: +; Malonato: +; Triptofano-desaminase: -; Maltose: +; Rafinose: +; Sorbitol: +; Sacarose: +; Inositol: +; Adonitol: -; Gás sulfídrico: -; ONPG: + ; Rhamnose: +; Arabinose: +; Arginina: +; VP: +; Acetamida: -; Manitol: +; Xilose: -.  Resultado: Adequado'
        },
        'PA252	Enterococcus faecalis NEWP 0012 frasco c/ 05 discos': {
            aspecto: 'Não aplicável.',
            bacteriana: 'conforme',
            infoText1: 'Cepa de 4ª Geração Teste de Viabilidade. Especifciação: Contagem de células viáveis/mL: superior a 100.000 UFC/mL. Resultado: Adequado Teste de Pureza. Microscopia. Especificação: CGP. Resultado: Adequado Teste de Pureza. Cultura. Especificação: inoculação em Ágar Sangue: colônias típicas. Resultado: Adequado Testes Fenotípicos. Provas Bioquímicas Manuais: Especificação: Catalase: -. Resultado: Adequado Provas Bioquímicas Automatizadas. Especificações: Bacitracina: R; Optoquina: R; Hemicelulose: +; NaCl 6,5%: +; Bile 10%: +; Bile 40%: +; Esculina: +; Arginina: +; Uréia: -; Vermelho Tetrazólio: +; Novobiocina: R; Dextrose: +; Lactose: +; Manitol: +; Rafinose: -; Salicina: +; Sorbitol: +; Sacarose: +; Trealose: +; Arabinose: -; PYR: +; Inulina: -; Melibiose: -; Melezitose: -; Celobiose: +; Ribose: +; Xilose: - . Resultado: Adequado Teste de Suscetibilidade a antimicrobianos (método de Kirby Bauer – limites de tamanho do halo de inibição em mm). Especificação: Ampicilina 2: 15-21; Ciprofloxacino 5: 19-25; Gentamicina 30: 12-18; Estreptomicina 300: 14-20;  Imipenem 10: 24-30; Levofloxacino  5: 19-25; Linezolida 10: 19-25;  Nitrofurantoína 100: 18-24; Norfloxacino 10: 16-22; Sulfametoxazol-Trimetoprima 23,75-1,25: 20; Teicoplanina  30: 15-21;Tigeciclina 15: 20-26; Vancomicina 5: 10-16. Resultado: Adequado'
        },
        'PA253	Enterococcus faecalis NEWP 0033 frasco c/ 05 discos': {
            aspecto: 'Não aplicável.',
            bacteriana: 'conforme',
            infoText1: 'Cepa de 4ª Geração. Teste de Viabilidade. Contagem de células viáveis/mL: superior a 100.000 UFC/mL. Resultado: Adequado Teste de Pureza. Microscopia. Especifciação: CGP. Resultado: Adequado Teste de Pureza. Especifciação: Cultura: inoculação em Ágar Sangue: colônias típicas. Resultado: Adequado Testes Fenotípicos. Provas Bioquímicas Manuais. Especificação: Catalase: -. Resultado: Adequado Provas Bioquímicas Automatizadas: Especifciação: Cristal violeta: +; Novobiocina: +; VP: +; Bile esculina: +; PNP-B-D galactopiranoside: +; Lactose: +; NaCl 6,5%: +; Ribose: +; Bacitracina: +; PYR: +; PNP-B-D- glucuronide: -; Optoquina: +; Uréia: -; Trealose: + ; Sorbitol: -; Inulina: -; Piruvato: - ; Nitrato: -; Indoxil fosfatase: -; Fosfatase: -; Arginina: +; Manitol: +; Manose: +; Arabinose: -; Rafinose: -; Hem: -. Resultado: Adequado'
        },
        'PA254	Escherichia coli Beta Lactamase NEWP 0018 frasco c/ 05 discos': {
            aspecto: 'Não aplicável.',
            bacteriana: 'conforme',
            infoText1: 'Cepa de 4ª Geração. Teste de Viabilidade. Especificação: Contagem de células viáveis/mL: superior a 100.000 UFC/mL. Resultado: Adequado Teste de Pureza. Microscopia: Especificação: BGN. Resultado: Adequado Teste de Pureza. Cultura. Especifciação: crescimento em Ágar Sangue e em Ágar MacConkey: colônias típicas sem contaminantes. Resultado: Adequado Testes Fenotípicos. Provas Bioquímicas. Especificação: Oxidase: -; Lactose: +; Lisina: +;   Motilidade: +; Glicose: +; Gás sulfídrico: -; Ureia: -; Sacarose: -;  LTD: -; Indol: +; Acetamida: -; Esculina: -; Citrato: -; Malonato: -; Polimixina B: S; Maltose: +; Manitol: +; Xilose: +; Rafinose: -; Sorbitol: +; Inositol: -; Adonitol: -; ONPG: +; Rhamnose: +; Arabinose: +; Arginina: -; Ornitina: +. Resultado: Adequado Teste de Suscetibilidade a antimicrobianos (método de Kirby Bauer – limites de tamanho do halo de inibição em mm). Especificação: Amoxacilina-ácido clavulânico 20-10: 17-22; Ampicilina-sulbactam 10-10: 13-19; Piperacilina-tazobactam 30-6: 21-27; Ceftolozana-tazobactam 30-10: 25-31. Resultado: Adequado'
        },
        'PA255	Escherichia coli NEWP 0022 frasco c/ 05 discos': {
            aspecto: 'Não aplicável.',
            bacteriana: 'conforme',
            infoText1: 'Cepa de 4ª Geração. Teste de Viabilidade. Especificação: Contagem de células viáveis/mL: superior a 100.000 UFC/mL. Resultado: Adequado Teste de Pureza. Microscopia: Especificação: BGN.  Resultado: Adequado Teste de Pureza. Cultura: Especificação: crescimento em Ágar Sangue e em Ágar MacConkey: colônias típicas sem contaminantes.  Resultado: Adequado Testes Fenotípicos. Provas Bioquímicas:  Especifciação: Oxidase: -; Lactose: +; Lisina: +;   Motilidade: +; Glicose: +; Gás sulfídrico: -; Ureia: -; Sacarose: -; LTD: -; Indol: +; Acetamida: -; Esculina: -;  Citrato: -; Malonato: -; Polimixina B: S;  Maltose: +; Manitol: +; Xilose: +; Rafinose: -; Sorbitol: +; Sacarose: -; Inositol: -; Adonitol: -; ONPG: +; Rhamnose: +; Arabinose: +; Arginina: -; Ornitina: + .  Resultado: Adequado Teste de Suscetibilidade a antimicrobianos (método de Kirby Bauer – limites de tamanho do halo de inibição em mm). Especificação: Amicacina 30: 19-26; Ampicilina 10: 15-22; Ampicilina-sulbactam 10-10: 19-24; Amoxicilina-ácido clavulânico 20-10: 18-24; Aztreonam 30: 28-36; Cefadroxila 30: 14-20;  Cefazolina 30: 21-27; Cefepima 30: 31-37; Cefotaxima 5: 25-31; Cefoxitina 30: 23-29;  Ceftazidima 10: 23-29; Ceftriaxona 30: 29-35; Cefuroxima 30: 20-26; Ciprofloxacino 5: 29-37; Cloranfenicol 30: 21-27; Ertapenem 10: 29-36;  Gentamicina 10: 19-26; Imipenem 10: 26-32; Levofloxacino 5: 29-37; Meropenem 10:  28-35; Ácido nalidíxico 30: 22-28; Nitrofurantoína 100: 17-23;  Norfloxacino 10: 28-35; Piperacilina-tazobactam 30-6: 21-27;  Sulfametoxazol/trimetoprima 23,75-1,25: 23-29; Tobramicina 10: 18-26.  Resultado: Adequado'
        },
        'PA256	Escherichia coli NEWP 0039 frasco c/ 05 discos': {
            aspecto: 'Não aplicável.',
            bacteriana: 'conforme',
            infoText1: 'Cepa de 4ª Geração. Teste de Viabilidade. Especificação: Contagem de células viáveis/mL: superior a 100.000 UFC/mL. Resultado: Adequado. Teste de Pureza. Microscopia: Especificação: BGN. Resultado: Adequado. Teste de Pureza. Cultura: crescimento em Ágar Sangue e em Ágar MacConkey: colônias típicas sem contaminantes. Resultado: Adequado. Testes Fenotípicos. Provas Bioquímicas: Especificação: Oxidase: -; Lactose: +; Lisina: +;   Motilidade: +; Glicose: +; Gás sulfídrico: -; Ureia: -; Sacarose: -;  LTD: -; Indol: +; Acetamida: -; Esculina: -; Citrato: -; Malonato: -; Polimixina B: S; Maltose: +; Manitol: +; Xilose: +; Rafinose: -; Sorbitol: +; Sacarose: -; Inositol: -; Adonitol: -; ONPG: +; Rhamnose: +; Arabinose: +; Arginina: -; Ornitina: - . Resultado: Adequado.'
        },
        'PA257	Klebsiella pneumoniae NEWP 0083 frasco c/ 05 discos': {
            aspecto: 'Não aplicável.',
            bacteriana: 'conforme',
            infoText1: 'Cepa de 4ª Geração. Teste de Viabilidade. Contagem de células viáveis/mL. Especificação: superior a 100.000 UFC/mL. Resultado: Adequado Teste de Pureza. Microscopia: Especificação: BGN.  Resultado: Adequado Teste de Pureza. Cultura: Especificação: inoculação em Ágar Sangue e em Ágar MacConkey: colônias típicas.  Resultado: Adequado Testes Fenotípicos. Provas Bioquímicas Manuais: Especificação: Oxidase: -; Indol: -; Lactose: +.  Resultado: Adequado Provas Bioquímicas Automatizadas: Especificação: Glicose (fermentativo); Esculina: +; Uréia: +; Citrato: +; Malonato: +; Lisina: +; Triptofano-desaminase: -; Maltose: + ;     Rafinose: +; Sorbitol: +; Sacarose: +; Inositol: +; Adonitol: +;   Gás sulfídrico: -; ONPG: + ; Rhamnose: +; Arabinose: +; Arginina: -; Ornitina: -; Melibiose: - ;     VP: +.  Resultado: Adequado Teste de Suscetibilidade a antimicrobianos (valores de CIM em mcg/mL). Especificação: Amicacina: ≤ 2;  Aztreonam: ≤ 8; Cefepime: ≤ 4; Cefotaxima: ≤ 4; Ciprofloxacino:  ≤ 0,5; Gentamicina: ≤ 0,5; Imipenem: ≤ 4; Meropenem: ≤ 2; Piperacilina/tazobactam: ≤ 8; Sulfametoxazol-trimetoprim: ≤ 10.  Resultado: Adequado'
        },
        'PA258	Proteus mirabilis NEWP 0133 frasco c/ 05 discos': {
            aspecto: 'Não aplicável.',
            bacteriana: 'conforme',
            infoText1: 'Cepa de 4ª Geração.  Teste de Viabilidade. Especificação: Contagem de células viáveis/mL: superior a 100.000 UFC/mL. Resultado: Adequado Teste de Pureza. Microscopia: Especifciação: BGN. Resultado: Adequado Teste de Pureza. Cultura: inoculação em Ágar Sangue e em Ágar MacConkey: colônias típicas. Resultado: Adequado Testes Fenotípicos. Provas Bioquímicas Manuais: Especificação: Oxidase: -; Indol: -; Lactose: -. Resultado: Adequado Provas Bioquímicas Automatizadas: Especificação: Glicose: +; Acetamida: -; Esculina: -; Uréia: +; Citrato: -; Malonato: -; Lisina: -; Polimixina B: S; Triptofano-Desaminase: +; Lactose: -; Maltose: -; Manitol: -; Xilose: +; Rafinose: -; Sorbitol: -; Sacarose: -; Inositol: -; Adonitol: -; Gás Sulfídrico: +; ONPG: -; Rhamnose: -; Arabinose: -; Arginina: -; Ornitina: +. Resultado: Adequado'
        },
        'PA259	Pseudomonas aeruginosa NEWP 0027 frasco c/ 05 discos': {
            aspecto: 'Não aplicável.',
            bacteriana: 'conforme',
            infoText1: 'Cepa de 4ª Geração. Teste de Viabilidade. Especificação: Contagem de células viáveis/mL: superior a 100.000 UFC/mL. Resultado: Adequado Teste de Pureza. Microscopia: Especificação: BGN. Resultado: Adequado Teste de Pureza. Cultura: Especificação: inoculação em Ágar Sangue e Ágar McConkey: colônias típicas. Resultado: Adequado Testes Fenotípicos: Provas Bioquímicas Manuais: Oxidase +. Resultado: Adequado Provas Bioquímicas Automatizadas: Especifciação: Glicose: + (oxidativo); Acetamida: +; Esculina: -; Uréia: -; Citrato: +; Malonato: +; Lisina: -; Polimixina B: S; Triptofano-desaminase: -; Maltose: -; Manitol: +; Xilose: +; Rafinose: -; Sorbitol: -; Sacarose: -; Inositol: -; Adonitol: -; Gás Sulfídrico: -; ONPG: -; Rhamnose: -; Arabinose: -; Arginina +; Ornitina: -. Resultado: Adequado Teste de Suscetibilidade a antimicrobianos (valores de CIM em mcg/mL). Especificação: Amicacina: ≤ 2 Ampicilina: ≥ 32      Ampicilina/sulbactam: ≥ 32      Aztreonam: ≤ 8 Cefepime: ≤ 4            Cefotaxima: 32 Cefoxitina: ≥ 32      Ceftazidima: ≤ 8 Cefalotina: ≥ 32      Ciprofloxacino: ≤ 0,5      Gentamicina: ≤ 0,5 Imipenem: ≤ 4      Meropenem: ≤ 2 Piperacilina/tazobactam: 16      Sulfametoxazol-trimetoprim: ≥ 320. Resultado: Adequado'
        },
        'PA248	Burkholderia cepacia NEWP 0059 frasco c/ 05 discos - sob encomenda': {
            aspecto: 'Não aplicável.',
            bacteriana: 'conforme',
            infoText1: 'Cepa de 4ª Geração Teste de Viabilidade. Especificação: Contagem de células viáveis/mL: superior a 100.000 UFC/mL. Resultado: Adequado Teste de Pureza. Microscopia. Especificação: BGN. Resultado: Adequado Teste de Pureza. Cultura. Especifciação: crescimento em Ágar Sangue e em Ágar MacConkey: colônias típicas sem contaminantes. Resultado: Adequado Testes Fenotípicos. Provas Bioquímicas. Especifciação: Oxidase: + (tardia); Pigmento amarelo no TSI; OF-lactose; oxidativo; Lisina: +; Crescimento característico em ágar MacConkey  ;  Glicose: + (oxidativo); Acetamida: +; Esculina: +; Uréia: -; Citrato: +   ; Malonato: +; Triptofano-desaminase: -; Maltose: +     ; Manitol: +; Xilose: +; Rafinose: - ; Sorbitol: -; Sacarose: +;        Inositol: -; Adonitol: -; Gás sulfídrico: -; ONPG: +     ; Ramnose: -; Arabinose: +     ; Arginina: -; Ornitina: -  .  Resultado: Adequado'
        },
        'PA249	Candida albicans NEWP 0031 c/ 05 discos': {
            aspecto: 'Não aplicável.',
            bacteriana: 'conforme',
            infoText1: 'Cepa de 4ª Geração Teste de Viabilidade. Especificação: Contagem de células viáveis/mL: superior a 100.000 UFC/mL. Resultado: Adequado Teste de pureza. Cultura. Especificação: inoculação em Ágar Sangue e Ágar Sabouraud: colônias típicas. Resultado: Adequado Testes Fenotípicos: Características em cultivo/Microcultivo. Especificação: desenv. de clamidoconídeos. Crescimento em caldo Sabouraud hipertônico: Positivo. Desenv. em ágar cromogênico: colônias verdes características de Candida albicans. Resultado: Adequado Provas bioquímicas. Especificação: Glicose: +; Glicina: -;  Arabinose: -;     Xilose: +; Adonitol: +; Xilitol: +; Galactose: +; 2KG: +; Inositol: -; Sorbitol: +; MDG: +; NAG: +;  Celobiose: -; actose: -; Maltose: +; Sacarose: +; Trealose: +;  Melizitose: -; Rafinose: -. Resultado: Adequado'
        },
        'PA151	Newplus I cx c/ 08 testes - Sob encomenda': {
            aspecto: 'pH final - Caldo Letheen. Especificação: 7,3 ± 0,1. Resultado: Adequado pH final - Ágar Letheen. Especificação: 7,3 ± 0,1. Resultado: Adequado pH final - Ágar Sabouraud. Especificação: 5,6 ± 0,2. Resultado: Adequado pH final - Ágar MacConkey. Especificação: 7,1 ± 0,2.  Resultado: Adequado  Aspecto final - Caldo Letheen. Especificação: meio âmbar claro, translúcido. Resultado: Adequado Aspecto final - Ágar Letheen. Especificação: meio âmbar claro, translúcido e ligeiramente opalescente. Resultado: Adequado Aspecto final - Ágar Sabouraud. Especificação: meio âmbar claro, translúcido e ligeiramente opalescente. Resultado: Adequado Aspecto final - Ágar MacConkey. Especificação: Meio rosado translúcido, ligeiramente opalescente. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Caldo Letheen (inóculo padronizado em 10.000 UFC/mL). Especificação: E. coli ATCC 8739 Crescimento bom a excelente. Resultado: Adequado. Caldo Letheen (inóculo padronizado em 10.000 UFC/mL). Especificação: S. aureus ATCC 6538 Crescimento bom a excelente. Resultado: Adequado. Ágar Letheen (inóculo padronizado em 10.000 UFC/mL). Especificação: E. coli ATCC 8739 Crescimento bom a excelente. Resultado: Adequado. Ágar Letheen (inóculo padronizado em 10.000 UFC/mL). Especificação: S. aureus ATCC 6538 Crescimento bom a excelente. Resultado: Adequado. Ágar Sabouraud (inóculo padronizado em 10.000 UFC/mL). Especificação: C. albicans ATCC 10231 Crescimento bom a excelente  de colônias brancas. Resultado: Adequado. Ágar Sabouraud (inóculo padronizado em 10.000 UFC/mL). Especificação: A. niger ATCC 16404 Crescimento bom a excelente de esporos pretos e contorno amarelado. Resultado: Adequado Ágar MacConkey (inóculo padronizado em 100.000 UFC/mL). Especificação: E. coli ATCC 25922 Crescimento excelente de colônias vermelhas com precipitado de bile. Resultado: Adequado. Ágar MacConkey (inóculo padronizado em 100.000 UFC/mL). Especificação: S. typhimurium ATCC 14028 Crescimento excelente de colônias incolores translúcidas. Resultado: Adequado. Ágar MacConkey (inóculo padronizado em 100.000 UFC/mL). Especificação: E. faecalis ATCC 29212 Crescimento ausente. Resultado: Adequado.  Esterilidade dos Meios, Pipetas e Espátulas. Especificação: Ausência de crescimento. Resultado: Adequado.'
        },
        'PA152	Newplus II cx c/ 08 testes': {
            aspecto: 'pH final Ágar Cetrimide. Especificação:  7,4 ± 0,2. Resultado: Adequado pH final Ágar XLD. Especificação:  7,4 ± 0,2. Resultado: Adequado pH final Ágar Manitol. Especificação:  7,4 ± 0,2. Resultado: Adequado pH final Ágar MacConkey. Especificação:  7,1 ± 0,2. Resultado: Adequado  Aspecto final Ágar Cetrimide. Especificação: Meio incolor opalescente. Resultado: Adequado Aspecto final Ágar XLD. Especificação: Meio vermelho translúcido, ligeiramente opalescente. Resultado: Adequado Aspecto final Ágar  Manitol. Especificação: Meio vermelho translúcido, ligeiramente opalescente. Resultado: Adequado Aspecto final Ágar MacConkey. Especificação: Meio rosado translúcido, ligeiramente opalescente. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Ágar Cetrimide. Especificação: P. aeruginosa ATCC 27853 Crescimento bom a excelente com pigmento fluorescente.  Resultado: Adequado Ágar Cetrimide. Especificação: E. coli ATCC 25922 Crescimento inibido.  Resultado: Adequado Ágar Cetrimide. Especificação: S. maltophilia ATCC 13637 Crescimento inibido.  Resultado: Adequado  Ágar XLD. Especificação: E. coli ATCC 25922 Crescimento escasso ou ausente de colônias amarelas. Resultado: Adequado Ágar XLD. Especificação: S. typhimurium ATCC 14028 Crescimento excelente de colônias vermelhas com centro preto. Resultado: Adequado Ágar XLD. Especificação: S. flexneri ATCC 12022 Crescimento excelente de colônias vermelhas translúcidas. Resultado: Adequado Ágar XLD. Especificação: E. faecalis ATCC 29212 Crescimento ausente. Resultado: Adequado  Ágar Manitol. Especificação: S. aureus ATCC 25923  Crescimento moderado a bom de colônias amarelas. Resultado: Adequado Ágar Manitol. Especificação: S. epidermidis ATCC 12228 Crescimento moderado a bom de colônias vermelhas puntiformes. Resultado: Adequado Ágar Manitol. Especificação: P. mirabilis ATCC 25933 Crescimento acentuadamente inibido. Resultado: Adequado   Ágar MacConkey. Especificação: E. coli ATCC 25922 Crescimento excelente de colônias vermelhas com precipitado de bile. Resultado: Adequado Ágar MacConkey. Especificação: S. typhimurium ATCC 14028 Crescimento excelente de colônias incolores translúcidas. Resultado: Adequado Ágar MacConkey. Especificação: S. flexneri ATCC 12022 Crescimento excelente de colônias incolores translúcidas. Resultado: Adequado Ágar MacConkey. Especificação: E. faecalis ATCC 29212 Crescimento ausente. Resultado: Adequado  Esterilidade dos Meios. Especifciação: Ausência de crescimento. Resultado: Adequado'
        },
        'PA153	Newplus III cx c/ 05 testes - Sob encomenda': {
            aspecto: 'pH Ágar TSA. Especificação: 7,3 ± 0,1. Resultado: Adequado pH Ágar Sabouraud. Especificação: 5,6 ± 0,2. Resultado: Adequado  Aspecto final Ágar TSA. Especificação: meio âmbar claro, translúcido e ligeiramente opalescente. Resultado: Adequado Aspecto final Ágar Sabouraud:. Especificação: meio âmbar claro, translúcido e ligeiramente opalescente. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Ágar TSA. Especificação: E. coli ATCC 25922 Crescimento bom a excelente de colônias grandes. Resultado: Adequado Ágar TSA. Especificação: S. pyogenes ATCC 19615 Crescimento bom a excelente de colônias puntiformes. Resultado: Adequado Ágar Sabouraud. Especificação: C. albicans ATCC 10231 Crescimento bom a excelente  de colônias brancas. Resultado: Adequado Ágar Sabouraud. Especificação: A. niger ATCC 16404 Crescimento bom a excelente de esporos pretos e contorno amarelado. Resultado: Adequado Esterilidade dos Meios. Especificação: Ausência de crescimento. Resultado: Adequado'
        },
        'PA291	Esteriprov 15L pcte c/ 10 unidades': {
            aspecto: 'Características Físicas. Especificação: 39x58 cm; 7 micras; branco leitoso. Resultado: Adequado Integridade Física. Especificação: Ausência de furos e dobras na selagem em todo o lote. Resultado: Adequado Resistência Térmica. Especificação: Ausência de rompimento ou deformação após autoclavação, a 121º C por 15 - 30 minutos. Resultado: Adequado Estanqueidade. Especificação: Ausência de vazamentos ou rupturas, saco suspenso durante 1 minuto, com 3,0 L de água no interior dos sacos. Resultado: Adequado Resistência Física. Especificação: Ausência de ruptura após carga de 7,5 Kg no saco plástico, suspenso por 2 min. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Não aplicável.'
        },
        'PA292	Esteriprov 50L pcte c/ 10 unidades': {
            aspecto: 'Características Físicas. Especificação: 63x80 cm; 10 micras; branco leitoso. Resultado: Adequado Integridade Física. Especificação: Ausência de furos ou dobras na selagem em todo o lote. Resultado: Adequado Resistência Térmica. Especificação: Ausência de rompimento ou deformação após autoclavação  a 121º C por 15 - 30 minutos. Resultado: Adequado Estanqueidade. Especificação: Ausência de vazamentos ou rupturas, após vigorosa agitação de 1 min, com 7,0 L de água no interior dos sacos. Resultado: Adequado Resistência Física. Especificação: Ausência de ruptura após carga de 30 Kg no saco plástico suspenso por 2 min. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Não aplicável.'
        },
        'PA377	Saco Plástico Estéril 120mL c/ Tiossulfato - Sob encomenda': {
            aspecto: 'NA',
            bacteriana: 'conforme',
            infoText1: 'NA'
        },
        'PA154	Egg Yolk com Telurito frasco c/ 100mL': {
            aspecto: 'Aspecto final -  Especificação: Suspensão líquida com densidade característica e cor amarela opaca. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico S. aureus ATCC 25923 -  Especificação: Crescimento excelente de colônias negras com halo de lecitinase   Resultado: Adequado Desempenho microbiológico S. epidermidis ATCC 12228 -  Especificação: Crescimento variável de colônias negras sem halo de lecitinase  Resultado: Adequado Desempenho microbiológico E. coli ATCC 25922 -  Especificação: Ausência de crescimento   Resultado: Adequado Esterilidade -  Especificação: Ausência de crescimento   Resultado: Adequado'
        },
        'PA155	Egg Yolk sem Telurito frasco c/ 100mL': {
            aspecto: 'Aspecto final -  Especificação: Suspensão líquida com densidade característica e cor amarela opaca. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico S. aureus ATCC 25923 -  Especificação:  Crescimento excelente de colônias brancas com halo de lecitinase. Resultado: Adequado Desempenho microbiológico S. epidermidis ATCC 12228 -  Especificação:  Crescimento excelente de colônias brancas sem halo de lecitinase. Resultado: Adequado Esterilidade -  Especificação: Ausência de crescimento. Resultado: Adequado'
        },
        'PA158	Sangue de Carneiro Desfibrinado frasco c/ 50mL - Sob encomenda': {
            aspecto: 'Aspecto final. Especificação: Vermelho vivo, opalescente, homogêneo, sem sinais de hemólise e coagulação. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho Microbiológico E. coli ATCC 25922. Especifciação: Crescimento excelente de colônias grandes, acinzentadas e brilhantes. Resultado: Adequado Desempenho Microbiológico S. aureus ATCC 25923. Especifciação: Crescimento excelente de colônias grandes, amareladas e opacas.  Resultado: Adequado Desempenho Microbiológico S. pneumoniae ATCC 49619. Especifciação: Crescimento moderado a bom de colônias pequenas Alfa hemolíticas.  Resultado: Adequado Desempenho Microbiológico S. pyogenes ATCC 19615. Especifciação: Crescimento moderado a bom de colônias pequenas Beta hemolíticas. Resultado: Adequado Esterilidade. Especificação: Ausência de crescimento. Resultado: Adequado'
        },
        'PA159	Suplemento VX cx c/ 10 frascos': {
            aspecto: 'Aspecto final Solução A. Especificação: Pó compacto levemente rosado. Resultado: Adequado Aspecto final Solução B. Especificação: Líquido incolor transparente, sem precipitado visível. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico N. meningitidis ATCC 13090. Especificação: Crescimento moderado a bom de colônias pequenas translúcidas. Resultado: Adequado Desempenho microbiológico H. influenzae ATCC 10211.  Especificação: Crescimento moderado a bom de colônias médias translúcidas. Resultado: Adequado Esterilidade. Especificação: Ausência de crescimento. Resultado: Adequado'
        },
        'PA242	Bacitracina frasco c/ 25 discos': {
            aspecto: 'Aspecto final. Especificação: Disco de papel branco com 6 mm de diâmetro. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico S. pyogenes ATCC 19615. Especificação: Qualquer halo de sensibilidade (SENSÍVEL). Resultado: Adequado Desempenho microbiológico S. agalactiae ATCC 13813. Especificação: Sem halo da zona de inibição  (RESISTENTE). Resultado: Adequado'
        },
        'PA246	Novobiocina frasco c/ 25 discos': {
            aspecto: 'Aspecto final. Especificação: Disco de papel branco com 6 mm de diâmetro. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico S. epidermidis ATCC 12228. Especificação: Diâmetro da zona de inibição > 16 mm (SENSÍVEL). Resultado: Adequado Desempenho microbiológico S. saprophyticus ATCC 35552. Especificação: Diâmetro da zona de inibição ≤ 16 mm (RESISTENTE). Resultado: Adequado'
        },
        'PA115	Kit EPM - MILI c/ 25 testes': {
            aspecto: 'pH final - EPM: Especificação:  7,3 ± 0,1 - Resultado: Adequado pH final - MILI: Especificação:  6,6 ± 0,2 - Resultado: Adequado pH final - Reativo de Kovacs: Especificação: não aplicável - Resultado:  não aplicável Aspecto final - EPM:  Especificação: meio verde-escuro translúcido ligeiramente opalescente - Resultado: Adequado Aspecto final - MILI:  Especificação: meio púrpura translúcido ligeiramente opalescente - Resultado: Adequado Aspecto final - Reativo de Kovacs: Especificação: Líquido amarelo brilhante e translúcido - Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'EPM: Especificação: P. vulgaris ATCC 13315 LTD +; Glicose +; Gás +; H2S +  Resultado: Adequado EPM: Especificação: E. coli ATCC 25922 LTD -; Glicose +; Gás +; H2S -  Resultado: Adequado EPM: Especificação: P. aeruginosa ATCC 27853 LTD -; Glicose -; Gás -; H2S -  Resultado: Adequado EPM: Especificação: S. flexneri ATCC 12022 LTD -; Glicose +; Gás -; H2S - Resultado: Adequado EPM: Especificação: S. typhimurium ATCC 14028 LTD -; Glicose +; Gás +; H2S + Resultado: Adequado MILI:  Especificação: E. coli ATCC 25922 Motilidade +; Indol +; Ornitina + Resultado: Adequado MILI:  Especificação: S. flexneri ATCC 12022 Motilidade -; Indol -; Ornitina - Resultado: Adequado Reativo de Kovacs:  Especificação: S. flexneri ATCC 12022 (inoculado em meio de MILi) MOT -; IND -; LIS - Resultado: Adequado Reativo de Kovacs:  Especificação: E. coli ATCC 25922 (inoculado em meio de MILi) MOT +; IND +; LIS + Resultado: Adequado Esterilidade - Especificação: Ausência de crescimento Resultado: Adequado'
        },
        'PA116	Kit EPM-MILI-Citrato c/16 testes': {
            aspecto: 'pH final - EPM: Especificação:  7,3 ± 0,1 - Resultado: Adequado pH final - MILI: Especificação:  6,6 ± 0,2 - Resultado: Adequado pH final - Citrato: Especificação:  6,9 ± 0,2 - Resultado: Adequado pH final - Reativo de Kovacs: Especificação: não aplicável - Resultado:  não aplicável Aspecto final - EPM:  Especificação: meio verde-escuro translúcido ligeiramente opalescente - Resultado: Adequado Aspecto final - MILI:  Especificação: meio púrpura translúcido ligeiramente opalescente - Resultado: Adequado Aspecto final - Citrato:  Especificação: meio verde escuro translúcido ligeiramente opalescente - Resultado: Adequado Aspecto final - Reativo de Kovacs: Especificação: Líquido amarelo brilhante e translúcido - Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'EPM: Especificação: P. vulgaris ATCC 13315 LTD +; Glicose +; Gás +; H2S +.  Resultado: Adequado EPM: Especificação: E. coli ATCC 25922 LTD -; Glicose +; Gás +; H2S -.  Resultado: Adequado EPM: Especificação: P. aeruginosa ATCC 27853 LTD -; Glicose -; Gás -; H2S -.  Resultado: Adequado EPM: Especificação: S. flexneri ATCC 12022 LTD -; Glicose +; Gás -; H2S -. Resultado: Adequado EPM: Especificação: S. typhimurium ATCC 14028 LTD -; Glicose +; Gás +; H2S +. Resultado: Adequado MILI:  Especificação: E. coli ATCC 25922 Motilidade +; Indol +; Ornitina +. Resultado: Adequado MILI:  Especificação: S. flexneri ATCC 12022 Motilidade -; Indol -; Ornitina -. Resultado: Adequado Citrato: Especificação: E. coli ATCC 25922 Crescimento ausente, sem mudança da coloração -. Resultado: Adequado Citrato: K. pneumoniae ATCC 13883 Crescimento com mudança da coloração do meio para azul. Resultado: Adequado Reativo de Kovacs:  Especificação: S. flexneri ATCC 12022 (inoculado em meio de MILi) MOT -; IND -; LIS -. Resultado: Adequado Reativo de Kovacs:  Especificação: E. coli ATCC 25922 (inoculado em meio de MILi) MOT +; IND +; LIS +. Resultado: Adequado Esterilidade - Especificação: Ausência de crescimento. Resultado: Adequado'
        },
        'PA117	Kit para Confirmação de Enterococos c/ 25 testes': {
            aspecto: 'pH final - Ágar Bile Esculina: Especificação:  6,6 ± 0,2 - Resultado: Adequado pH final - Meio de MTS:Especificação:  7,3 ± 0,2 - Resultado: Adequado Aspecto final - Ágar Bile Esculina: Especificação: Meio âmbar claro translúcido, ligeiramente opalescente - Resultado: Adequado Aspecto final - MTS:  Especificação: Meio púrpura translúcido - Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Ágar Bile Esculina: Especificação: E. faecalis ATCC 29212 Crescimento bom a excelente com escurecimento do meio - Resultado: Adequado Ágar Bile Esculina: Especificação: E. coli ATCC 25922    Crescimento ausente - Resultado: Adequado Meio de MTS: Especificação: E. faecalis ATCC 29212  Crescimento com mudança de coloração do meio para amarelo - Resultado: Adequado Meio de MTS: Especificação: S. viridans Cepa Selvagem  Crescimento ausente, sem mudança de coloração - Resultado: Adequado'
        },
        'PA118	Kit para Enterobacterias c/ 10 testes': {
            aspecto: 'pH final - EPM: Especificação:  7,3 ± 0,1 - Resultado: Adequado pH final - Lisina: Especificação:  6,0 ± 0,2 - Resultado: Adequado pH final - MIO: Especificação:  6,5 ± 0,2 - Resultado: Adequado pH final - Citrato: Especificação:  6,9 ± 0,2 - Resultado: Adequado pH final - Rhamnose: Especificação:  6,8 ± 0,2 - Resultado: Adequado  Aspecto final - EPM:: Especificação: meio verde escuro translúcido ligeiramente opalescente - Resultado: Adequado Aspecto final  - Lisina: Especificação: meio púrpura translúcido - Resultado: Adequado Aspecto final  - MIO: Especificação:  meio púrpura translúcido ligeiramente opalescente - Resultado: Adequado Aspecto final - Citrato: Especificação:meio verde escuro translúcido ligeiramente opalescente - Resultado: Adequado Aspecto final - Rhamnose: Especificação: meio verde claro translúcido - Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'EPM: Especificação: P. vulgaris ATCC 13315 LTD +; Glicose +; Gás +; H2S + Resultado: Adequado EPM: Especificação: E. coli ATCC 25922 LTD -; Glicose +; Gás +; H2S - Resultado: Adequado EPM: Especificação: P. aeruginosa ATCC 27853 LTD -; Glicose -; Gás -; H2S - Resultado: Adequado EPM: Especificação: S. flexneri ATCC 12022 LTD -; Glicose +; Gás -; H2S - Resultado: Adequado EPM: Especificação:S. typhimurium ATCC 14028 LTD -; Glicose +; Gás +; H2S + Resultado: Adequado  Caldo Lisina: Especificação: S. flexneri ATCC 12022 - (coloração amarela) Resultado: Adequado Caldo Lisina: Especificação: S. typhimurium ATCC 14028 + (coloração púrpura) Resultado: Adequado  MIO: Especificação: E. coli ATCC 25922 Motilidade +; Indol +; Ornitina + Resultado: Adequado MIO: Especificação:S. flexneri ATCC 12022 Motilidade -; Indol -; Ornitina - Resultado: Adequado  Citrato: Especificação: E. coli ATCC 25922 Crescimento ausente, sem mudança da coloração - Resultado: Adequado Citrato: Especificação: K. pneumoniae ATCC 13883 Crescimento com mudança da coloração do meio para azul - Resultado: Adequado  Caldo Rhamnose:  Especificação: K. pneumoniae ATCC 13883 + (coloração amarela) - Resultado: Adequado Caldo Rhamnose:  Especificação: S. flexneri ATCC 12022 - (coloração verde)) - Resultado: Adequado   Esterilidade - Especificação: Ausência de crescimento Resultado: Adequado'
        },
        'PA120	Kit para Micobacterias cx c/ 10 testes': {
            aspecto: 'Aspecto final - Ogawa Kudoh: Especificação: Meio verde-claro opalescente. Resultado: Adequado Aspecto final - NaOH: Especificação: Líquido incolor e translúcido. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Especificação: Desempenho microbiológico M. tuberculosis H37Rv (ATCC 27294) ou similar - Resultado: Adequado Especificação: Crescimento bom a excelente de colônias granulares, foscas, secas e friáveis - Resultado: Adequado Esterilidade: Ogawa Kudoh: ausência de crescimento - Resultado: Adequado Esterilidade:NaOH: ausência de crescimento - Resultado: Adequado'
        },
        'PA121	Meio Rugai com Lisina c/ 50 tubos': {
            aspecto: 'pH final - Meio de Rugai: Especificação: 7,4 ± 0,2. Resultado: Adequado pH final - Meio de Lisina Motilidade: Especificação: 6,5 ± 0,2. Resultado: Adequado Aspecto final - Meio de Rugai: Especificação: Meio verde- escuro translúcido, ligeiramente opalescente. Resultado: Adequado. Aspecto final -Meio de Lisina Motilidade: Especificação: Meio púrpura ligeiramente opalescente. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico P. vulgaris ATCC 13315 - Especificação:  LTD +; Glicose +; Gás +; H2S +; URE +; LIS -; MOT +; IND +. Resultado: Adequado Desempenho microbiológico K. pneumoniae ATCC 13883 - Especificação: LTD -; Glicose +; Gás +; H2S -; URE +; LIS +; MOT -; IND -. Resultado: Adequado Desempenho microbiológico E. coli ATCC 25922 - Especificação: LTD -; Glicose +; Gás +; H2S -; URE -; LIS +; MOT +; IND +. Resultado: Adequado Desempenho microbiológico P. aeruginosa ATCC 27853 - Especificação: LTD -; Glicose -; Gás -; H2S -; URE -; LIS -; MOT +; IND -. Resultado: Adequado Desempenho microbiológico S. flexneri ATCC 12022  - Especificação: LTD -; Glicose +; Gás -; H2S -; URE -; LIS -; MOT -; IND -. Resultado: Adequado Desempenho microbiológico S. typhimurium ATCC 14028 - Especificação: LTD -; Glicose +; Gás +; H2S +;URE -; LIS +; MOT +; IND -.  Resultado: Adequado Esterilidade:  Especificação: Ausência de crescimento. Resultado: Adequado'
        },
        'PA122	Mini Kit EPM - MILI c/ 25 testes': {
            aspecto: 'pH final - EPM: Especificação:  7,3 ± 0,1 - Resultado: Adequado pH final - MILI: Especificação:  6,6 ± 0,2 - Resultado: Adequado  Aspecto final - EPM:  Especificação: meio verde-escuro translúcido ligeiramente opalescente - Resultado: Adequado Aspecto final - MILI:  Especificação: meio púrpura translúcido ligeiramente opalescente - Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'EPM: Especificação: P. vulgaris ATCC 13315 LTD +; Glicose +; Gás +; H2S +. Resultado: Adequado EPM: Especificação: E. coli ATCC 25922 LTD -; Glicose +; Gás +; H2S -.  Resultado: Adequado EPM: Especificação: P. aeruginosa ATCC 27853 LTD -; Glicose -; Gás -; H2S -.  Resultado: Adequado EPM: Especificação: S. flexneri ATCC 12022 LTD -; Glicose +; Gás -; H2S -. Resultado: Adequado EPM: Especificação: S. typhimurium ATCC 14028 LTD -; Glicose +; Gás +; H2S +. Resultado: Adequado MILI:  Especificação: E. coli ATCC 25922 Motilidade +; Indol +; Ornitina +. Resultado: Adequado MILI:  Especificação: S. flexneri ATCC 12022 Motilidade -; Indol -; Ornitina -. Resultado: Adequado Esterilidade - Especificação: Ausência de crescimento. Resultado: Adequado'
        },
        'PA123	Mini Kit NF-PROV c/ 05 testes': {
            aspecto: 'pH final - OF (base, glicose, lactose, xilose e maltose): Especificação:  7,1 ± 0,2 - Resultado: Adequado pH final - Caldo BHI: Especificação:  7,4 ± 0,2 - Resultado: Adequado pH final - Cetrimide: Especificação:  7,2 ± 0,2 - Resultado: Adequado pH final - Nitrato Motilidade: Especificação:  7,4 ± 0,2 - Resultado: Adequado pH final - Gelatina: 6,9 ± 0,1 - Resultado: Adequado  Aspecto final - OF (base, glicose, lactose, xilose e maltose): Especificação: meio verde escuro translúcido - Resultado: Adequado Aspecto final - Caldo BHI: Especificação:  meio âmbar claro translúcido - Resultado: Adequado Aspecto final - Cetrimide: Especificação:  meio incolor opalescente - Resultado: Adequado Aspecto final - Nitrato Motilidade: Especificação: Meio âmbar claro, ligeiramente opalescente - Resultado: Adequado Aspecto final - Gelatina: Especificação: Meio âmbar claro, gelatinoso e ligeiramente opalescente - Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'OF-Glicose.  Especificação: P. aeruginosa ATCC 27853  Oxidação - Resultado: Adequado OF-Glicose.  K. pneumoniae ATCC 13883 Oxidação e Fermentação - Resultado: Adequado OF-Glicose.  Especificação: M. osloensis ATCC 10973  Inalterado - Resultado: Adequado  OF-Lactose. Especificação: B. cepacia ATCC 17759  Oxidação - Resultado: Adequado OF-Lactose. Especificação: K. pneumoniae ATCC 13883 Oxidação e Fermentação - Resultado: Adequado OF-Lactose. Especificação: M. osloensis ATCC 10973  Inalterado - Resultado: Adequado  OF-Xilose. Especificação: B. cepacia ATCC 17759  Oxidação - Resultado: Adequado OF-Xilose. Especificação: K. pneumoniae ATCC 13883 Oxidação e Fermentação - Resultado: Adequado OF-Xilose. Especificação: M. osloensis ATCC 10973  Inalterado - Resultado: Adequado  OF-Maltose. Especificação: S. maltophilia Cepa Selvagem Oxidação - Resultado: Adequado OF-Maltose. Especificação: K. pneumoniae ATCC 13883 Oxidação e Fermentação - Resultado: Adequado OF-Maltose. Especificação: M. osloensis ATCC 10973  Inalterado - Resultado: Adequado  OF-Base. Especificação: P. aeruginosa ATCC 27853  Inalterado - Resultado: Adequado OF-Base. Especificação: K. pneumoniae ATCC 13883 Inalterado - Resultado: Adequado Caldo BHI (inóculo padronizado em 10.000 UFC/mL). Especificação: N. meningitidis ATCC 13090   Crescimento bom a excelente - Resultado: Adequado Caldo BHI (inóculo padronizado em 10.000 UFC/mL). Especificação: S. pneumoniae ATCC 49619 Crescimento bom a excelente - Resultado: Adequado Caldo BHI (inóculo padronizado em 10.000 UFC/mL). Especificação: S. pyogenes ATCC 19615 Crescimento bom a excelente - Resultado: Adequado  Ágar Cetrimide (inóculo padronizado em 100.000 UFC/mL). Especificação: P. aeruginosa ATCC 27853 Crescimento bom a excelente com pigmento fluorescente - Resultado: Adequado Ágar Cetrimide (inóculo padronizado em 100.000 UFC/mL). Especificação: E. coli ATCC 25922 Crescimento inibido - Resultado: Adequado Ágar Cetrimide (inóculo padronizado em 100.000 UFC/mL). Especificação: S. maltophilia ATCC 13637 Crescimento inibido - Resultado: Adequado  Meio de Nitrato-Motilidade (prova do nitrato revelada através dos reativos correspondentes e adição de zinco em pó quando necessário).  Especificação: P. aeruginosa ATCC 27853 MOT +; NIT +. Resultado: Adequado Meio de Nitrato-Motilidade (prova do nitrato revelada através dos reativos correspondentes e adição de zinco em pó quando necessário).  Especificação: P. mirabilis ATCC 25933   MOT +; NIT +. Resultado: Adequado Meio de Nitrato-Motilidade (prova do nitrato revelada através dos reativos correspondentes e adição de zinco em pó quando necessário).  Especificação: A. baumannii Cepa Selvagem MOT -; NIT - . Resultado: Adequado  Meio de Gelatina (inóculo padronizado em 100.000 UFC/mL). Especificação: P. aeruginosa ATCC 27853   Meio sólido após refrigeração. Resultado: Adequado Meio de Gelatina (inóculo padronizado em 100.000 UFC/mL). Especificação: S. marcescens ATCC 43861 Meio liquefeito após refrigeração. Resultado: Adequado  Esterilidade - Especificação: Ausência de crescimento Resultado: Adequado'
        },
        'PA124	Mini Kit para Enterobacterias c/ 10 testes': {
            aspecto: 'pH final - EPM: Especificação:  7,3 ± 0,1 - Resultado: Adequado pH final - Lisina: Especificação:  6,0 ± 0,2 - Resultado: Adequado pH final - MIO: Especificação:  6,5 ± 0,2 - Resultado: Adequado pH final - Citrato: Especificação:  6,9 ± 0,2 - Resultado: Adequado pH final - Rhamnose: Especificação:  6,8 ± 0,2 - Resultado: Adequado  Aspecto final - EPM:: Especificação: meio verde escuro translúcido ligeiramente opalescente - Resultado: Adequado Aspecto final  - Lisina: Especificação: meio púrpura translúcido - Resultado: Adequado Aspecto final  - MIO: Especificação:  meio púrpura translúcido ligeiramente opalescente - Resultado: Adequado Aspecto final - Citrato: Especificação:meio verde escuro translúcido ligeiramente opalescente - Resultado: Adequado Aspecto final - Rhamnose: Especificação: meio verde claro translúcido - Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'EPM: Especificação: P. vulgaris ATCC 13315 LTD +; Glicose +; Gás +; H2S +. Resultado: Adequado EPM: Especificação: E. coli ATCC 25922 LTD -; Glicose +; Gás +; H2S -. Resultado: Adequado EPM: Especificação: P. aeruginosa ATCC 27853 LTD -; Glicose -; Gás -; H2S -. Resultado: Adequado EPM mini: Especificação: S. flexneri ATCC 12022 LTD -; Glicose +; Gás -; H2S -. Resultado: Adequado EPM mini: Especificação:S. typhimurium ATCC 14028 LTD -; Glicose +; Gás +; H2S +. Resultado: Adequado  Caldo Lisina mini: Especificação: S. flexneri ATCC 12022 - (coloração amarela). Resultado: Adequado Caldo Lisina mini: Especificação: S. typhimurium ATCC 14028 + (coloração púrpura). Resultado: Adequado  MIO mini: Especificação: E. coli ATCC 25922 Motilidade +; Indol +; Ornitina +. Resultado: Adequado MIO mini: Especificação:S. flexneri ATCC 12022 Motilidade -; Indol -; Ornitina -. Resultado: Adequado  Citrato mini: Especificação: E. coli ATCC 25922 Crescimento ausente, sem mudança da coloração. Resultado: Adequado Citrato mini: Especificação: K. pneumoniae ATCC 13883 Crescimento com mudança da coloração do meio para azul. Resultado: Adequado  Caldo Rhamnose mini:  K. pneumoniae ATCC 13883 + (coloração amarela). Resultado: Adequado Caldo Rhamnose mini: S. flexneri ATCC 12022 - (coloração verde). Resultado: Adequado   Esterilidade - Especificação: Ausência de crescimento. Resultado: Adequado'
        },
        'PA230	Hidroxido de Potassio 40% frasco c/ 100mL': {
            aspecto: 'Aspecto final -  Especificação: Líquido incolor e translúcido  Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico E. aerogenes ATCC 13048 -  Especificação: VP + (coloração vermelha)  Resultado: Adequado  Desempenho microbiológico  E. coli ATCC 25922  -  Especificação: VP - (sem formação de cor)  Resultado: Adequado    Esterilidade -  Especificação: Ausência de crescimento  Resultado: Adequado'
        },
        'PA231	Plasma de Coelho Liofilizado frasco c/ 3 mL após reconstituição': {
            aspecto: 'Aspecto final -  Especificação: Pó compacto levemente amarelado e uniforme  Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico S. aureus ATCC 25923 -  Especificação: Aglutinação consistente na prova de coagulase ligada (em lâmina) / Formação de coágulo consistente na prova de coagulase livre (em tubo) após  2 horas incubado a 35º C   Resultado: Adequado Desempenho microbiológico S. epidermidis ATCC 12228 -  Especificação: Ausência de aglutinação consistente na prova de coagulase ligada. / Ausência de formação de coágulo consistente na prova de coagulase livre.   Resultado: Adequado'
        },
        'PA232	Reativo de Erlich frasco c/ 100mL - Sob encomenda': {
            aspecto: 'Aspecto final -  Especificação: Líquido amarelo brilhante e translúcido  Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico S. flexneri ATCC 12022 -  Especificação:  MOT -; LIS -; ORN -  Resultado: Adequado  Desempenho microbiológico E. coli ATCC 25922 -  Especificação:  MOT +; LIS +; ORN +  Resultado: Adequado'
        },
        'PA233	Reativo de Kovacs frasco c/ 100mL': {
            aspecto: 'Aspecto final -  Especificação: Líquido translúcido amarelo a amarelo-esverdeado  Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico S. flexneri ATCC 12022 -  Especificação:  MOT -; IND -; ORN -  Resultado: Adequado  Desempenho microbiológico E. coli ATCC 25922 -  Especificação:  MOT +; IND +; ORN +  Resultado: Adequado'
        },
        'PA234	Reativo de Kovacs frasco c/ 10mL': {
            aspecto: 'Aspecto final -  Especificação: Líquido translúcido amarelo a amarelo-esverdeado  Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico S. flexneri ATCC 12022 -  Especificação: Reação negativa  Resultado: Adequado  Desempenho microbiológico E. coli ATCC 25922 -  Especificação: Reação positiva  Resultado: Adequado'
        },
        'PA235	Reativo de Kovacs frasco c/ 30mL': {
            aspecto: 'Aspecto final. Especificação: Líquido translúcido amarelo a amarelo-esverdeado. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico S. flexneri ATCC 12022. Especificação: Reação negativa. Resultado: Adequado Desempenho microbiológico E. coli ATCC 25922. Especificação: Reação positiva. Resultado: Adequado'
        },
        'PA236	Reativo para Catalase frasco c/ 15mL': {
            aspecto: 'Aspecto final. Especificação: Líquido transparente e incolor. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico S. aureus ATCC 25923. Especificação: Formação de bolhas no contato com as colônias. Resultado: Adequado Desempenho microbiológico S. pyogenes ATCC 19615.  Especificação: Ausência de bolhas no contato com as colônias.  Resultado: Adequado'
        },
        'PA238	Reativo para Prova do Vermelho de Metila frasco c/ 10mL': {
            aspecto: 'Aspecto final. Especificação: Líquido vermelho brilhante e translúcido. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico E. aerogenes ATCC 13048 (inoculado em caldo MRVP). Especificação: MR – (sem formação de cor). Resultado: Adequado Desempenho microbiológico E. coli ATCC 25922 (inoculado em caldo MRVP). Especificação:: MR + (coloração vermelha). Resultado: Adequado  Esterilidade. Especificação: Ausência de crescimento. Resultado: Adequado'
        },
        'PA226	Alfa Naftol 5% frasco c/ 30mL': {
            aspecto: 'Aspecto final - Especificação: Líquido amarelo claro e translúcido. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico E. aerogenes ATCC 13048 -  Especificação: VP + (coloração vermelha). Resultado: Adequado Desempenho microbiológico E. coli ATCC 25922 -  Especificação: VP - (sem formação de cor). Resultado: Adequado Esterilidade -  Especificação: Ausência de crescimento. Resultado: Adequado'
        },
        'PA227	Cloreto Férrico 10% frasco c/ 100mL': {
            aspecto: 'Aspecto final - Especificação: Líquido amarelo-escuro brilhante e translúcido. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico E. coli ATCC 25922  -  Especificação: Sem mudança de coloração para verde. Resultado: Adequado Desempenho microbiológico P. mirabilis ATCC 25933 -  Especificação: Mudança de coloração para verde-escuro. Resultado: Adequado'
        },
        'PA228	Conjunto para Prova de Nitrato frascos c/ 10mL': {
            aspecto: 'Aspecto final N,N-Dimetil-alfa-naftilamina. Especifciação: Solução rosa clara a transparente sem precipitados. Resultado: Adequado Aspecto final Ácido Sulfanílico. Especificação: Solução transparente sem precipitados. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico P. aeruginosa ATCC 27853. Especifciação: MOT +; NIT + . Resultado: Adequado Desempenho microbiológico P. mirabilis ATCC 25933.  Especifciação: MOT +; NIT + . Resultado: Adequado Desempenho microbiológico A. baumannii Cepa Selvagem.  Especifciação: MOT -; NIT - . Resultado: Adequado'
        },
        'PA229	Conjunto para Prova de VP frascos c/ 10mL - Sob encomenda': {
            aspecto: 'Aspecto final Alfa Naftol. Especifciação: Líquido amarelo claro e translúcido. Resultado: Adequado Aspecto final Hidróxido de potássio. Especifciação: Líquido incolor e translúcido.  Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico E. aerogenes ATCC 13048. Especifciação: VP + (coloração vermelha). Resultado: Adequado Desempenho microbiológico E. coli ATCC 25922. Especifciação: VP - (sem formação de cor). Resultado: Adequado'
        },
        'PA311	Tiras de hemolisina frasco c/ 10 tiras - Sob encomenda': {
            aspecto: 'Aspecto final. Especificação: Tiras brancas com impregnação reativa homogênea. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico S. agalactiae ATCC 13813.  Especificação: Formação de uma seta ou meia-lua convergindo para a tira na intersecção da mesma com o crescimento da bacteriano. Resultado: Adequado Desempenho microbiológico S. pneumoniae ATCC 49619. Especificação:  Ausência da formação de uma seta ou meia-lua convergindo para a tira na intersecção da mesma com o crescimento da bacteriano. Resultado: Adequado'
        },
        'PA317	Alfa Naftol 5% frasco c/ 100 mL - Sob encomenda': {
            aspecto: 'Aspecto final. Especifciação: Líquido amarelo claro e translúcido. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico E. aerogenes ATCC 13048 (inoculado em caldo MRVP). Especificação: VP + (coloração vermelha). Resultado: Adequado. Desempenho microbiológico E. coli ATCC 25922 (inoculado em caldo MRVP).  Especificação: VP - (sem formação de cor). Resultado: Adequado. Esterilidade.  Especificação: Ausência de crescimento. Resultado: Adequado.'
        },
        'PA394	Reativo para Oxidase frasco c/ 50 discos - ITEM REVENDA': {
            aspecto: 'NA',
            bacteriana: 'conforme',
            infoText1: 'NA'
        }
       
        
    };

    $('#opcao_desempenho').change(function() {
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
