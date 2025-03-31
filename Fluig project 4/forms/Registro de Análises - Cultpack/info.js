$(document).ready(function() {
    var produtoData = {
    		'PA125	Cult Pack Agar Bacteriológico sachê 15 g	PA - MC em sachê': {
                aspecto: 'Aspecto - Especificação: Pó/grânulos bege-claro, fluidos, homogêneos. Resultado: Adequado Integridade da embalagem:  Especificação: Íntegra. Resultado: Adequado',
                dosagem: ' g/300 mL',
                bacteriana: true, // Marcar a caixa de seleção "bacteriana"
                infoText1: 'Desempenho microbiológico E. coli ATCC 25922. Especificação:  Crescimento bom a excelente. Resultado: Adequado  Desempenho microbiológico S. pyogenes ATCC 19615. Especificação: Crescimento bom a excelente. Resultado: Adequado'
            },
            'PA126	Cult Pack Agar Batata Dextrose qsp 1000 mL	PA - MC em sachê': {
                aspecto: 'Aspecto - Especificação: Pó/Grânulos bege-claro, fluidos, homogêneos. Resultado: Adequado Integridade da embalagem:  Especificação: Íntegra. Resultado: Adequado',
                dosagem: ' g/200 mL',
                bacteriana: true,
                infoText1:'Desempenho microbiológico E. coli ATCC 25922 -  Especificação: Crescimento bom a excelente de colônias amarelas grandes  Resultado: Adequado Desempenho microbiológico S. aureus ATCC 25923 -  Especificação: Crescimento bom a excelente de colônias amarelas, pequenas e opacas  Resultado: Adequado Desempenho microbiológico P. vulgaris ATCC 13315 -  Especificação: Crescimento bom a excelente de colônias azul esverdeadas, translúcidas  '
            },
            'PA127	Cult Pack Agar Citrato de Simmons qsp 1000 mL	PA - MC em sachê': {
                aspecto: 'Aspecto final - Especificação: Meio verde translúcido, ligeiramente opalescente  Resultado: Adequado',
                dosagem: ' g/200 mL',
                bacteriana: true,
                infoText1: 'Aspecto - Especificação: Pó amarelo-mostarda a amarelo-esverdeado, fluido e homogêneo. Resultado: Adequado Integridade da embalagem:  Especificação: Íntegra. Resultado: Adequado'
            },
            // Continue adicionando os outros produtos conforme necessário
            'PA128	Cult Pack Agar Cled qsp 1000 mL 	PA - MC em sachê': {
                aspecto: 'Aspecto - Especificação: Pó fino, bege-esverdeado, homogêneo. Resultado: Adequado Integridade da embalagem:  Especificação: Íntegra. Resultado: Adequado',
                dosagem: ' g/300 mL',
                bacteriana: true,
                infoText1: 'Desempenho microbiológico E. coli ATCC 25922 -  Especificação: Crescimento excelente de colônias vermelhas com precipitado de bile  Resultado: Adequado  Desempenho microbiológico P. mirabilis  ATCC 12453 -  Especificação: Crescimento excelente de colônias incolores, sem swarming   Resultado: Adequado  Desempenho microbiológico E. faecalis ATCC 29212 -  Especificação: Crescimento ausente  Resultado: Adequado '
            },
            'PA129	Cult Pack Agar Columbia qsp 1000 mL	PA - MC em sachê': {
                aspecto: 'Aspecto - Especificação: Pó fino, bege, homogêneo. Resultado: Adequado Integridade da embalagem:  Especificação: Íntegra. Resultado: Adequado',
                bacteriana: 'conforme',
                infoText1: 'Desempenho microbiológico P. aeruginosa ATCC 27853*  -  Especificação: Crescimento excelente de colônias esverdeadas. Resultado: Adequado Desempenho microbiológico E. faecalis ATCC 29212*-  Especificação: Crescimento excelente de colônias puntiformes. Resultado: Adequado Conteúdo de Cátions (Testado com P. aeruginosa ATCC 27853 padronizada em 108 UFC/mL e discos com 10 µg) -  Especificação: Amicacina – diâmetro da zona de inibição entre 20 e 26 mm / Gentamicina – diâmetro da zona de inibição entre 17 e 23 mm / Tobramicina – diâmetro da zona de inibição entre 20 e 26 mm. Resultado: Adequado Conteúdo de Timidina(Testado com E. faecalis ATCC 29212 padronizada em 108 UFC/mL e disco com 25 µg) -  Especificação: Sulfametoxazol - Trimetoprim – diâmetro da zona de inibição entre 26 e 34 mm. Resultado: Adequado '
            },
            'PA130	Cult Pack Agar Dnase qsp 1000 mL 	PA - MC em sachê': {
                aspecto: 'Aspecto - Especificação: Pó fino, bege-claro, homogêneo. Resultado: Adequado Integridade da embalagem:  Especificação: Íntegra. Resultado: Adequado',
                bacteriana: 'conforme',
                infoText1: 'Desempenho microbiológico E. coli ATCC 25922 -  Especificação: Crescimento escasso ou ausente de colônias vermelhas   Resultado: Adequado Desempenho microbiológico S. typhimurium ATCC 14028 -  Especificação: Crescimento excelente de colônias incolores com centro preto   Resultado: Adequado Desempenho microbiológico S. flexneri ATCC 12022 -  Especificação: Crescimento excelente de colônias incolores translúcidas  Resultado: Adequado Desempenho microbiológico E. faecalis ATCC 29212 -  Especificação: Crescimento ausente   Resultado: Adequado Esterilidade -  Especificação:  Ausência de crescimento  Resultado: Adequado'
            },
            'PA131	Cult Pack Agar Enterico de Hektoen qsp 1000 mL	PA - MC em sachê': {
                aspecto: 'Aspecto - Especificação: Pó palha claro homogêneo. Resultado: Adequado Integridade da embalagem:  Especificação: Íntegra. Resultado: Adequado',
                bacteriana: 'conforme',
                infoText1: 'Desempenho microbiológico E. coli ATCC 25922-  Especificação: Crescimento excelente de colônias grandes, acinzentadas e brilhantes  Resultado: Adequado Desempenho microbiológico S. aureus ATCC 25923-  Especificação: Crescimento excelente de colônias grandes, amareladas e opacas   Resultado: Adequado Desempenho microbiológico S. pneumoniae ATCC 49619 -  Especificação: Crescimento moderado a bom de colônias pequenas alfa-hemolíticas  Resultado: Adequado Desempenho microbiológico S. pyogenes ATCC 19615 -  Especificação: Crescimento moderado a bom de colônias pequenas beta-hemolíticas  Resultado: Adequado '
            },
            'PA132	Cult Pack Agar Mac Conkey qsp 1000 mL	PA - MC em sachê': {
                aspecto: 'Aspecto – Especificação: Pó/ Grânulos bege-rosado a rosado homogêneo. Resultado: Adequado Integridade da embalagem:  Especificação: Íntegra. Resultado: Adequado',
                bacteriana: 'conforme',
                infoText1: 'Desempenho microbiológico E. coli ATCC 25922 -  Especificação: Crescimento fraco (inibido) de colônias vermelhas com precipitado de bile  Resultado: Adequado Desempenho microbiológico S. typhimurium ATCC 14028 -  Especificação: Crescimento bom a excelente de colônias incolores   Resultado: Adequado '
            },
            'PA133	Cult Pack Agar Manitol qsp 1000 mL	PA - MC em sachê': {
                aspecto: 'Aspecto – Especificação: Pó/Grânulo levemente rosado e homogêneo. Resultado: Adequado Integridade da embalagem:  Especificação: Íntegra. Resultado: Adequado',
                bacteriana: 'conforme',
                infoText1: 'Desempenho microbiológico Aspergillus brasiliensis ATCC 16404 ou similar. Especificação: Crescimento bom a excelente.  Resultado: Adequado Desempenho microbiológico Bacillus subtilis ATCC 6633 ou similar. Especificação: Crescimento bom a excelente. Resultado: Adequado Desempenho microbiológico Candida albicans ATCC 10231 ou similar. Especificação: Crescimento bom a excelente. Resultado: Adequado '
            },
            'PA134	Cult Pack Agar Mueller Hinton qsp 1000 mL	PA - MC em sachê': {
                aspecto: 'Aspecto – Especificação: Pó fino, bege, homogêneo. Resultado: Adequado Integridade da embalagem:  Especificação: Íntegra. Resultado: Adequado',
                bacteriana: 'conforme',
                infoText1: 'Desempenho microbiológico Aspergillus brasiliensis ATCC 16404 ou similar. Especificação: Crescimento bom a excelente.  Resultado: Adequado Desempenho microbiológico Bacillus subtilis ATCC 6633 ou similar. Especificação: Crescimento bom a excelente. Resultado: Adequado Desempenho microbiológico Candida albicans ATCC 10231 ou similar. Especificação: Crescimento bom a excelente. Resultado: Adequado '
            },
            'PA136	Cult Pack Agar Sabouraud Dextrose qsp 1000 mL 	PA - MC em sachê': {
                aspecto: 'Aspecto – Especificação: Pó / Grânulos bege, homogêneo. Resultado: Adequado Integridade da embalagem:  Especificação: Íntegra. Resultado: Adequado',
                bacteriana: 'conforme',
                infoText1: 'Desempenho microbiológico E. coli ATCC 8739. Especificação:  Crescimento bom a excelente. Resultado: Adequado Desempenho microbiológico S. aureus ATCC 6538. Especificação: Crescimento bom a excelente. Resultado: Adequado '
            },
            'PA137	Cult Pack Agar SS qsp 1000 mL	PA - MC em sachê': {
                aspecto: 'Aspecto – Especificação: Pó fino, bege rosado, homogêneo. Resultado: Adequado Integridade da embalagem:  Especificação: Íntegra. Resultado: Adequado',
                bacteriana: 'conforme',
                infoText1: 'Desempenho microbiológico C. albicans ATCC 10231. Especificação: Crescimento bom a excelente de colônias brancas cremosas. Resultado: Adequado Desempenho microbiológico A. niger ATCC 16404. Especificação: Crescimento bom a excelente de colônias com centro negro e periferia branco-amarelada. Resultado: Adequado '
            },
            'PA138	Cult Pack Agar Teague qsp 1000 mL 	PA - MC em sachê': {
                aspecto: 'Aspecto – Especificação: Pó/grânulos púrpura a rosa. Resultado: Adequado Integridade da embalagem:  Especificação: Íntegra. Resultado: Adequado',
                bacteriana: 'conforme',
                infoText1: 'Desempenho microbiológico S. aureus ATCC 25923.  Especificação: Crescimento moderado a bom de colônias amarelas. Resultado: Adequado Desempenho microbiológico S. epidermidis ATCC 12228.  Especificação: Crescimento moderado a bom de colônias incolores puntiformes. Resultado: Adequado Desempenho microbiológico P. mirabilis ATCC 25933. Especificação: Crescimento acentuadamente inibido. Resultado: Adequado '
            },
            'PA139	Cult Pack Agar TSA qsp 1000 mL 	PA - MC em sachê': {
                aspecto: 'Aspecto – Especificação: Pó/grânulo bege-claro homogêneo. Resultado: Adequado Integridade da embalagem: Especificação: Íntegra. Resultado: Adequado',
                bacteriana: 'conforme',
                infoText1: 'Desempenho microbiológico C. albicans ATCC 10231. Especificação: Crescimento bom a excelente de colônias brancas cremosas. Resultado: Adequado Desempenho microbiológico T. mentagrophytes ATCC 9533. Especificação: Crescimento bom a excelente de colônias cotonosas. Resultado: Adequado Desempenho microbiológico E. coli ATCC 25922.  Especificação:  Crescimento inibido. Resultado: Adequado Desempenho microbiológico A. niger ATCC 16404. Especificação: Crescimento inibido.Resultado: Adequado'
            },
            'PA140	Cult Pack Agar TSI qsp 1000 mL 	PA - MC em sachê': {
                aspecto: 'Aspecto – Especificação: Pó bege rosado, fluido, homogêneo. Resultado: Adequado Integridade da embalagem:  Especificação: Íntegra. Resultado: Adequado',
                bacteriana: 'conforme',
                infoText1: 'Desenvolvimento microbiológico P. aeruginosa ATCC 27853.  Especificação: Oxidação. Resultado: Adequado Desenvolvimento microbiológico K. pneumoniae ATCC 13883.  Especificação: Oxidação e Fermentação.  Resultado: Adequado Desenvolvimento microbiológico M. osloensis ATCC 10973. Especificação: Inalterado. Resultado: Adequado'
            },
            'PA141	Cult Pack Agar XLD qsp 1000 mL	PA - MC em sachê': {
                aspecto: 'Aspecto – Especificação: Pó fino, rosado, homogêneo. Resultado: Adequado Integridade da embalagem:  Especificação: Íntegra. Resultado: Adequado',
                bacteriana: 'conforme',
                infoText1: 'Desempenho microbiológico C. albicans ATCC 10231. Especificação: Crescimento bom a excelente de colônias brancas cremosas. Resultado: Adequado Desempenho microbiológico E. coli ATCC 25922. Especificação: Crescimento inibido.  Resultado: Adequado Desempenho microbiológico A. niger ATCC 16404.  Especificação: Crescimento bom a excelente de colônias cotonosas. Resultado: Adequado'
            },
            'PA142	Cult Pack Base Agar Sangue sachê 40 g	PA - MC em sachê': {
                aspecto: 'Aspecto – Especificação: Pó/grânulo bege-claro homogêneo. Resultado: Adequado Integridade da embalagem:  Especificação: Íntegra. Resultado: Adequado',
                bacteriana: 'conforme',
                infoText1: 'Desempenho microbiológico C. albicans ATCC 10231. Especificação: Crescimento bom a excelente de colônias brancas. Resultado: Adequado Desempenho microbiológico A. niger ATCC 16404. Especificação: Crescimento bom a excelente de colônias negras com  contorno amarelado. Resultado: Adequado'
            },
            'PA143	Cult Pack Caldo BHI qsp 1000 mL	PA - MC em sachê': {
                aspecto: 'Aspecto – Especificação: Pó/Grânulos bege-claro,  fluidos, homogêneos. Resultado: Adequado Integridade da embalagem:  Especificação: Íntegra. Resultado: Adequado',
                bacteriana: 'conforme',
                infoText1: 'Desempenho microbiológico N. meningitidis ATCC 13090. Especificação: Crescimento moderado a bom de colônias pequenas translúcidas. Resultado: Adequado Desempenho microbiológico S. epidermidis ATCC 12228. Especificação: Crescimento acentuadamente inibido. Resultado: Adequado Desempenho microbiológico E. coli ATCC 25922. Especificação: Crescimento acentuadamente inibido. Resultado: Adequado Desempenho microbiológico C. albicans ATCC 10231.  Especificação: Crescimento acentuadamente inibido. Resultado: Adequado'
            },
            'PA146	Cult Pack Caldo Tetrationato qsp 1000 mL	PA - MC em sachê': {
                aspecto: 'Aspecto – Especificação: Pó fino, entre branco e bege claro, homogêneo. Resultado: Adequado Integridade da embalagem: Especificação: Íntegra. Resultado: Adequado',
                bacteriana: 'conforme',
                infoText1: 'Desempenho microbiológico E. coli ATCC 25922.  Especificação: Crescimento bom a excelente. Resultado: Adequado Desempenho microbiológico S. pyogenes ATCC 19615. Especificação: Crescimento bom a excelente. Resultado: Adequado'
            },
            'PA147	Cult Pack Caldo Tioglicolato qsp 1000 mL	PA - MC em sachê': {
                aspecto: 'Aspecto – Especificação: Pó amarelo-palha fino e homogêneo. Resultado: Adequado Integridade da embalagem: Especificação: Íntegra. Resultado: Adequado',
                bacteriana: 'conforme',
                infoText1: 'Desempenho microbiológico E. coli ATCC 25922.  Especificação: Base Ácida; Ápice Ácido; GÁS +; H2S -. Resultado: Adequado Desempenho microbiológico P. aeruginosa ATCC 27853. Especificação: Base Alcalina; Ápice Alcalino; GÁS -; H2S -.Resultado: Adequado Desempenho microbiológico S. typhimurium ATCC 14028. Especificação: Base Ácida; Ápice Alcalino; GÁS +; H2S +.  Resultado: Adequado Desempenho microbiológico S. flexneri ATCC 12022.  Especificação: Base Ácida; Ápice Alcalino; GÁS -; H2S -. Resultado: Adequado'
            },
            'PA148	Cult Pack Caldo TSB  qsp 1000 mL 	PA - MC em sachê': {
                aspecto: 'Aspecto – Especificação: Pó fino, bege, homogêneo. Resultado: Adequado Integridade da embalagem: Especificação: Íntegra. Resultado: Adequado',
                bacteriana: 'conforme',
                infoText1: 'Desempenho microbiológico E. coli ATCC 25922. Especificação: Uréia - (inalterado). Resultado: Adequado Desempenho microbiológico K. pneumoniae ATCC 13883. Especificação: Uréia + (inalterado).  Resultado: Adequado '
            },
        'PA191': {
            aspecto: 'Aspecto final -  Especificação: Líquido transparente incolor, com odor característico  ',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico S. aureus ATCC 25923 -  Especificação: Coloração púrpura   Resultado: Adequado Desempenho microbiológico E. coli ATCC 25922 -  Especificação: Coloração vermelha   Resultado: Adequado'
        },
        'PI47': {
            aspecto: 'Aspecto final -  Especificação: Líquido transparente incolor, com odor característico  ',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico S. aureus ATCC 25923 -  Especificação: Coloração púrpura   Resultado: Adequado Desempenho microbiológico E. coli ATCC 25922 -  Especificação: Coloração vermelha   Resultado: Adequado'
        },
        'PA192': {
            aspecto: 'Aspecto final -  Especificação: Líquido incolor transparente a levemente amarelado, sem precipitados. ',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico M. tuberculosis H37 -  Especificação: Coloração vermelha   Resultado: Adequado Desempenho microbiológico E. coli ATCC 25922-  Especificação: Coloração azul   Resultado: Adequado'
        },
        'PA193': {
            aspecto: 'Aspecto final -  Especificação: Líquido incolor transparente a levemente amarelado, sem precipitados. ',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico M. tuberculosis H37 -  Especificação: Coloração vermelha   Resultado: Adequado Desempenho microbiológico E. coli ATCC 25922-  Especificação: Coloração azul   Resultado: Adequado'
        },
        'PI53': {
            aspecto: 'Aspecto final -  Especificação: Líquido incolor transparente a levemente amarelado, sem precipitados. ',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico M. tuberculosis H37 -  Especificação: Coloração vermelha   Resultado: Adequado Desempenho microbiológico E. coli ATCC 25922-  Especificação: Coloração azul   Resultado: Adequado'
        },
        'PA196': {
            aspecto: 'Verificação do aspecto final e da presença de precipitados a partir de gotejamento em papel de filtro gramatura 80 -  Especificação: Líquido vermelho intenso, opalescente, sem precipitados.',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico M. tuberculosis H37 -  Especificação: Coloração vermelha.  Resultado: Adequado Desempenho microbiológico E. coli ATCC 25922 -  Especificação: Coloração azul.  Resultado: Adequado'
        },
        'PA197': {
            aspecto: 'Verificação do aspecto final e da presença de precipitados a partir de gotejamento em papel de filtro gramatura 80 -  Especificação: Líquido vermelho intenso opalescente, sem precipitados.',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológica M. tuberculosis H37  -  Especificação: Coloração vermelha. Resultado: Adequado Desempenho microbiológica E. coli ATCC 25922 -  Especificação: Coloração azul. Resultado: Adequado'
        },
        'PI52': {
            aspecto: 'Verificação do aspecto final e da presença de precipitados a partir de gotejamento em papel de filtro gramatura 80 -  Especificação: Líquido vermelho intenso opalescente, sem precipitados.',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológica M. tuberculosis H37  -  Especificação: Coloração vermelha. Resultado: Adequado Desempenho microbiológica E. coli ATCC 25922 -  Especificação: Coloração azul. Resultado: Adequado'
        },
        'PA198': {
            aspecto: 'Verificação do aspecto final e da presença de precipitados a partir de gotejamento em papel de filtro gramatura 80 -  Especificação: Líquido avermelhado translúcido, sem precipitados.',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico S. aureus ATCC 25923 -  Especificação: Coloração púrpura   Resultado: Adequado Desempenho microbiológico E. coli ATCC 25922 -  Especificação: Coloração vermelha   Resultado: Adequado'
        },
        'PA199': {
            aspecto: 'Verificação do aspecto final e da presença de precipitados a partir de gotejamento em papel de filtro gramatura 80 -  Especificação: Líquido avermelhado translúcido, sem precipitados. ',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico S. aureus ATCC 25923 - Especificação: Coloração púrpura. Resultado: Adequado Desempenho microbiológico E. coli ATCC 25922 -  Especificação: Coloração vermelha. Resultado: Adequado'
        },
        'PI48': {
            aspecto: 'Verificação do aspecto final e da presença de precipitados a partir de gotejamento em papel de filtro gramatura 80 -  Especificação: Líquido avermelhado translúcido, sem precipitados.',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico S. aureus ATCC 25923 - Especificação: Coloração púrpura. Resultado: Adequado Desempenho microbiológico E. coli ATCC 25922 -  Especificação: Coloração vermelha. Resultado: Adequado'
        },
        'PA200': {
            aspecto: 'Aspecto final -  Especificação: Líquido vermelho intenso opalescente. ',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico M. tuberculosis H37 -  Especificação: Coloração vermelha. Resultado: Adequado Desempenho microbiológico E. coli ATCC 25922 -  Especificação: Coloração azul. Resultado: Adequado'
        },
        'PA213': {
            aspecto: 'Aspecto final. Especificação: Líquido amarelo escuro opalescente.',
            bacteriana: 'conforme',
            infoText1: 'Avaliação da coloração e da presença de precipitados a partir de gotejamento em papel de filtro gramatura 80. Especificação: Ausência de precipitados e coloração idêntica à do lote padrão. Resultado: Adequado'
        },
        'PA214': {
            aspecto: 'Aspecto final. Especificação: Líquido amarelo-escuro opalescente. ',
            bacteriana: 'conforme',
            infoText1: 'Avaliação da coloração e da presença de precipitados a partir de gotejamento em papel de filtro gramatura 80. -  Especificação: Ausência de precipitados e coloração idêntica à do lote padrão.  Resultado: Adequado'
        },
        'PA215': {
            aspecto: 'Aspecto final. Especificação: Líquido amarelo-escuro opalescente. ',
            bacteriana: 'conforme',
            infoText1: 'Avaliação da coloração e da presença de precipitados a partir de gotejamento em papel de filtro gramatura 80. Especificação: Ausência de precipitados e coloração idêntica à do lote padrão. Resultado: Adequado'
        },
        'PA216': {
            aspecto: 'Aspecto final. Especificação: Líquido amarelo escuro opalescente. ',
            bacteriana: 'conforme',
            infoText1: 'Avaliação da coloração e da presença de precipitados a partir de gotejamento em papel de filtro gramatura 80. Especificação: Ausência de precipitados e coloração idêntica à do lote padrão. Resultado: Adequado'
        },
        'PA217': {
            aspecto: 'Verificação do aspecto final e da presença de precipitados a partir de gotejamento em papel de filtro gramatura 80.  Especificação: Líquido amarelo-escuro opalescente, sem precipitados.',
            bacteriana: 'conforme',
            infoText1: 'Desempenho Microbiológio S. aureus ATCC 25923 -  Especificação: Coloração púrpura (ROXO). Resultado: Adequado Desempenho Microbiológio E. coli ATCC 25922 -  Especificação: Coloração vermelh. Resultado: Adequado'
        },
        'PA218': {
            aspecto: 'Verificação do aspecto final e da presença de precipitados a partir de gotejamento em papel de filtro gramatura 80. Especificação: Líquido amarelo-escuro opalescente, sem precipitados. ',
            bacteriana: 'conforme',
            infoText1: 'Desempenho Microbiológio S. aureus ATCC 25923 - Especificação: Coloração púrpura (ROXO). Resultado: Adequado Desempenho Microbiológio E. coli ATCC 25922 -  Especificação: Coloração vermelha. Resultado: Adequado'
        },
        'PI46': {
            aspecto: 'Verificação do aspecto final e da presença de precipitados a partir de gotejamento em papel de filtro gramatura 80. Especificação: Líquido amarelo-escuro opalescente, sem precipitados. ',
            bacteriana: 'conforme',
            infoText1: 'Desempenho Microbiológio S. aureus ATCC 25923 - Especificação: Coloração púrpura (ROXO). Resultado: Adequado Desempenho Microbiológio E. coli ATCC 25922 -  Especificação: Coloração vermelha. Resultado: Adequado'
        },
        'PA224': {
            aspecto: 'Verificação do aspecto final e da presença de precipitados a partir de gotejamento em papel de filtro gramatura 80. Especificação: Líquido violeta escuro, translúcido, sem precipitados. ',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico S. aureus ATCC 25923 -  Especificação: Coloração púrpura. Resultado: Adequado Desempenho microbiológico E. coli ATCC 25922 -  Especificação: Coloração vermelha. Resultado: Adequado'
        },
        'PA225': {
            aspecto: 'Verificação do aspecto final e da presença de precipitados a partir de gotejamento em papel de filtro gramatura 80. Especificação: Líquido violeta escuro, translúcido, sem precipitados. ',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico S. aureus ATCC 25923 - Especificação: Coloração púrpura. Resultado: Adequado Desempenho microbiológico E. coli ATCC 25922 - Especificação: Coloração vermelha. Resultado: Adequado'
        },
        'PA162': {
            aspecto: 'Aspecto final -  Especificação: Líquido incolor translúcido, sem precipitados aparentes.',
            bacteriana: 'conforme',
            infoText1: 'Conservação de amostra de fezes contendo diversos ovos, cistos e trofozoítos -  Especificação: Preservação das características dos parasitos por até 7 dias. Resultado: Adequado'
        },
        'PA284': {
            aspecto: 'Aspecto. Especificação: Líquido incolor transparente viscoso. Resultado: Adequado.',
            bacteriana: 'conforme',
            infoText1: 'Esterilidade. Especificação: Ausência de crescimento. Resultado: Adequado'
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
        'PI89': {
            aspecto: 'pH final - Citrato: Especificação:  6,9 ± 0,2 - Resultado: Adequado Aspecto final - Citrato: Especificação:meio verde escuro translúcido ligeiramente opalescente - Resultado: Adequado ',
            bacteriana: 'conforme',
            infoText1: 'Citrato mini: Especificação: E. coli ATCC 25922 Crescimento ausente, sem mudança da coloração. Resultado: Adequado Citrato mini: Especificação: K. pneumoniae ATCC 13883 Crescimento com mudança da coloração do meio para azul. Resultado: Adequado'
        }
        
        
    };

    $('#opcao').change(function() {
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