$(document).ready(function() {
    var produtoData = {
        'PA384': {
            aspecto: 'Especificação: Meio vermelho sangue opalescente. Resultado: Adequado',
            dosagem: ' g/300 mL',
            bacteriana: true, // Marcar a caixa de seleção "bacteriana"
            infoText1: 'Desempenho microbiológico E. coli ATCC 25922. Especificação: Crescimento excelente de colônias grandes, acinzentadas e brilhantes. Resultado: Adequado Desempenho microbiológico S. aureus ATCC 25923. Especificação: Crescimento excelente de colônias grandes, amareladas e opacas. Resultado: Adequado Desempenho microbiológico S. pneumoniae ATCC 49619. Especificação: Crescimento moderado a bom de colônias pequenas alfa-hemolíticas. Resultado: Adequado Desempenho microbiológico S. pyogenes ATCC 19615. Especificação: Crescimento moderado a bom de colônias pequenas beta-hemolíticas. Resultado: Adequado'
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
