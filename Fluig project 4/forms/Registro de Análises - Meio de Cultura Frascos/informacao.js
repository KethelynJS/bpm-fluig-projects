$(document).ready(function() {
    var produtoData = {
        'PA295	Agar TSA frasco c/ 100 mL 	PA - MC em frasco': {
            aspecto: 'Aspecto final. Especificação: Meio bege claro translúcido. Resultado: Adequado',
            dosagem: ' g/300 mL',
            bacteriana: true, // Marcar a caixa de seleção "bacteriana"
            infoText1: 'Desempenho microbiológico E. coli ATCC 25922. Especificação:  Crescimento bom a excelente. Resultado: Adequado  Desempenho microbiológico S. pyogenes ATCC 19615. Especificação: Crescimento bom a excelente. Resultado: Adequado'
        },
        'PA100	Agar Cled frasco c/ 100 mL	PA - MC em frasco': {
            aspecto: 'Aspecto final -  Especificação: Meio verde claro translúcido, ligeiramente opalescente  Resultado: Adequado',
            dosagem: ' g/200 mL',
            bacteriana: true,
            infoText1:'Desempenho microbiológico E. coli ATCC 25922 -  Especificação: Crescimento bom a excelente de colônias amarelas grandes  Resultado: Adequado Desempenho microbiológico S. aureus ATCC 25923 -  Especificação: Crescimento bom a excelente de colônias amarelas, pequenas e opacas  Resultado: Adequado Desempenho microbiológico P. vulgaris ATCC 13315 -  Especificação: Crescimento bom a excelente de colônias azul esverdeadas, translúcidas  '
        },
        'PA101	Agar Enterico de Hektoen frasco c/ 100 mL	PA - MC em frasco': {
            aspecto: 'Aspecto final - Especificação: Meio verde translúcido, ligeiramente opalescente  Resultado: Adequado',
            dosagem: ' g/200 mL',
            bacteriana: true,
            infoText1: 'Desempenho microbiológico E. coli ATCC 25922 -  Especificação: Crescimento escasso ou ausente de colônias amarelas. Resultado: Adequado Desempenho microbiológico S. typhimurium ATCC 14028   -  Especificação: Crescimento excelente de colônias verde-azuladas com centro preto. Resultado: Adequado Desempenho microbiológico S. flexneri ATCC 12022-  Especificação: Crescimento excelente de colônias verdes com centro verde-azulado. Resultado: Adequado Desempenho microbiológico E. faecalis ATCC 29212 -  Especificação: Crescimento ausente. Resultado: Adequado'
        },
        // Continue adicionando os outros produtos conforme necessário
        'PA102	Agar Mac Conkey frasco c/ 100 mL	PA - MC em frasco': {
            aspecto: 'Aspecto final -  Especificação: Meio rosado translúcido, ligeiramente opalescente   Resultado: Adequado',
            dosagem: ' g/300 mL',
            bacteriana: true,
            infoText1: 'Desempenho microbiológico E. coli ATCC 25922 -  Especificação: Crescimento excelente de colônias vermelhas com precipitado de bile  Resultado: Adequado  Desempenho microbiológico P. mirabilis  ATCC 12453 -  Especificação: Crescimento excelente de colônias incolores, sem swarming   Resultado: Adequado  Desempenho microbiológico E. faecalis ATCC 29212 -  Especificação: Crescimento ausente  Resultado: Adequado '
        },
        'PA104	Agar Mueller Hinton frasco c/ 100 mL	PA - MC em frasco': {
            aspecto: 'Aspecto final - Especificação: Meio bege claro translúcido, ligeiramente opalescente. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico P. aeruginosa ATCC 27853*  -  Especificação: Crescimento excelente de colônias esverdeadas. Resultado: Adequado Desempenho microbiológico E. faecalis ATCC 29212*-  Especificação: Crescimento excelente de colônias puntiformes. Resultado: Adequado Conteúdo de Cátions (Testado com P. aeruginosa ATCC 27853 padronizada em 108 UFC/mL e discos com 10 µg) -  Especificação: Amicacina – diâmetro da zona de inibição entre 20 e 26 mm / Gentamicina – diâmetro da zona de inibição entre 17 e 23 mm / Tobramicina – diâmetro da zona de inibição entre 20 e 26 mm. Resultado: Adequado Conteúdo de Timidina(Testado com E. faecalis ATCC 29212 padronizada em 108 UFC/mL e disco com 25 µg) -  Especificação: Sulfametoxazol - Trimetoprim – diâmetro da zona de inibição entre 26 e 34 mm. Resultado: Adequado '
        },
        'PA106	Agar SS frasco c/ 100 mL	PA - MC em frasco': {
            aspecto: 'Aspecto final -  Especificação: Meio vermelho alaranjado, ligeiramente opalescente. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico E. coli ATCC 25922 -  Especificação: Crescimento escasso ou ausente de colônias vermelhas   Resultado: Adequado Desempenho microbiológico S. typhimurium ATCC 14028 -  Especificação: Crescimento excelente de colônias incolores com centro preto   Resultado: Adequado Desempenho microbiológico S. flexneri ATCC 12022 -  Especificação: Crescimento excelente de colônias incolores translúcidas  Resultado: Adequado Desempenho microbiológico E. faecalis ATCC 29212 -  Especificação: Crescimento ausente   Resultado: Adequado Esterilidade -  Especificação:  Ausência de crescimento  Resultado: Adequado'
        },
        'PA109	Meio Base para Agar Sangue frasco c/ 100 mL	PA - MC em frasco': {
            aspecto: 'Aspecto final -  Especificação: Meio vermelho sangue opalescente. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico E. coli ATCC 25922-  Especificação: Crescimento excelente de colônias grandes, acinzentadas e brilhantes  Resultado: Adequado Desempenho microbiológico S. aureus ATCC 25923-  Especificação: Crescimento excelente de colônias grandes, amareladas e opacas   Resultado: Adequado Desempenho microbiológico S. pneumoniae ATCC 49619 -  Especificação: Crescimento moderado a bom de colônias pequenas alfa-hemolíticas  Resultado: Adequado Desempenho microbiológico S. pyogenes ATCC 19615 -  Especificação: Crescimento moderado a bom de colônias pequenas beta-hemolíticas  Resultado: Adequado '
        },
        'PA110	Caldo Tetrationato frasco c/ 100 mL	PA - MC em frasco': {
            aspecto: 'Aspecto final -  Especificação: Meio incolor a levemente amarelado translúcido, com pptado branco denso no fundo. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico E. coli ATCC 25922 -  Especificação: Crescimento fraco (inibido) de colônias vermelhas com precipitado de bile  Resultado: Adequado Desempenho microbiológico S. typhimurium ATCC 14028 -  Especificação: Crescimento bom a excelente de colônias incolores   Resultado: Adequado '
        },
        'PA112	Caldo TSB frasco c/ 100 mL	PA - MC em frasco': {
            aspecto: 'Aspecto final -  Especificação: Meio âmbar claro translúcido a âmbar escuro. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico Aspergillus brasiliensis ATCC 16404 ou similar. Especificação: Crescimento bom a excelente.  Resultado: Adequado Desempenho microbiológico Bacillus subtilis ATCC 6633 ou similar. Especificação: Crescimento bom a excelente. Resultado: Adequado Desempenho microbiológico Candida albicans ATCC 10231 ou similar. Especificação: Crescimento bom a excelente. Resultado: Adequado '
        },
        'PA410	Caldo TSB c/ 90mL em frasco PET 150 mL	PA - MC em frasco': {
            aspecto: 'Aspecto final -  Especificação: Meio âmbar claro translúcido a âmbar escuro. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico Aspergillus brasiliensis ATCC 16404 ou similar. Especificação: Crescimento bom a excelente.  Resultado: Adequado Desempenho microbiológico Bacillus subtilis ATCC 6633 ou similar. Especificação: Crescimento bom a excelente. Resultado: Adequado Desempenho microbiológico Candida albicans ATCC 10231 ou similar. Especificação: Crescimento bom a excelente. Resultado: Adequado '
        },
        'PA411	Caldo Letheen c/ 90mL em frasco PET 150 mL	PA - MC em frasco': {
            aspecto: 'Aspecto final. Especificação: Caldo âmbar claro translúcido. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico E. coli ATCC 8739. Especificação:  Crescimento bom a excelente. Resultado: Adequado Desempenho microbiológico S. aureus ATCC 6538. Especificação: Crescimento bom a excelente. Resultado: Adequado '
        },
        'PA99	Agar Batata Dextrose frasco c/ 100mL 	PA - MC em frasco': {
            aspecto: 'Aspecto final. Especificação: Meio âmbar claro, ligeiramente opalescente. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico C. albicans ATCC 10231. Especificação: Crescimento bom a excelente de colônias brancas cremosas. Resultado: Adequado Desempenho microbiológico A. niger ATCC 16404. Especificação: Crescimento bom a excelente de colônias com centro negro e periferia branco-amarelada. Resultado: Adequado '
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
        'PA150': {
            aspecto: 'Aspecto FLM -  Especificação: Pó homogêneo amarelo a creme. Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho Microbiológico P. aeruginosa ATCC 27853 - Especificação: Turvação sem fluorescência e indol negativo. Resultado: Adequado Desempenho Microbiológico K. pneumoniae ATCC 13883 - Especificação: Turvação verde azulada sem fluorescência e indol negativo. Resultado: Adequado Desempenho Microbiológico E. coli ATCC 25922 - - Especificação: Turvação verde azulada com fluorescência e indol positivo. Resultado: Adequado Esterilidade dos sacos de coleta,  seringas e tubos PS: Ausência de crescimento'
        },
        'PA149': {
            aspecto: 'Aspecto final FLM -  Especificação: Pó homogêneo amarelo a creme.  Resultado: Adequado',
            bacteriana: 'conforme',
            infoText1: 'Desempenho Microbiológico P. aeruginosa ATCC 27853 - Especificação: Turvação sem fluorescência e indol negativo. Resultado: Adequado Desempenho Microbiológico K. pneumoniae ATCC 13883 - Especificação: Turvação verde azulada sem fluorescência e indol negativo. Resultado: Adequado Desempenho Microbiológico E. coli ATCC 25922 -  Especificação: Turvação verde azulada com fluorescência e indol positivo. Resultado: Adequado Esterilidade dos sacos de coleta: Especificação: Ausência de crescimento. Resultado: Adequado'
        },
        'PA413 - Fisioclean frasco c/ 1.000 mL': {
            aspecto: 'Líquido cristalino e homogêneo.',
            bacteriana: 'conforme',
            infoText1: 'Desempenho Microbiológico: Não aplicável'
        },
        'PI89': {
            aspecto: 'pH final - Citrato: Especificação:  6,9 ± 0,2 - Resultado: Adequado Aspecto final - Citrato: Especificação:meio verde escuro translúcido ligeiramente opalescente - Resultado: Adequado ',
            bacteriana: 'conforme',
            infoText1: 'Citrato mini: Especificação: E. coli ATCC 25922 Crescimento ausente, sem mudança da coloração. Resultado: Adequado Citrato mini: Especificação: K. pneumoniae ATCC 13883 Crescimento com mudança da coloração do meio para azul. Resultado: Adequado'
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
