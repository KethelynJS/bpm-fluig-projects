
$(document).ready(function() {
    var produtoData = {
        'PA179	Azul de Algodão frasco c/ 100mL	PA - Corantes microb': {
            aspecto: 'Verificação do aspecto final e da presença de precipitados a partir de gotejamento em papel de filtro gramatura 80 -  Especificação: Líquido azul intenso, translúcido e sem precipitados.',
            dosagem: ' g/300 mL',
            bacteriana: true, // Marcar a caixa de seleção "bacteriana"
            infoText1: 'Desempenho Microbiológio C. albicans ATCC 10231  -  Especificação: Coloração azul das células fúngicas. Resultado: Adequado'
        },
        'PA181	Azul de Metileno Loeffler frasco c/ 500mL	PA - Corantes microb': {
            aspecto: 'Verificação do aspecto final e da presença de precipitados a partir de gotejamento em papel de filtro gramatura 80.  Especificação: Líquido azul escuro, translúcido, sem precipitados.  ',
            dosagem: ' g/200 mL',
            bacteriana: true,
            infoText1:'Não aplicável.'
        },
        'PA182	Azul de Metileno para Ziehl Neelsen frasco c/ 1000mL	PA - Corantes microb': {
            aspecto: 'Verificação do aspecto final e da presença de precipitados a partir de gotejamento em papel de filtro gramatura 80 -  Especificação: Líquido azul-escuro, translúcido, sem precipitados. ',
            dosagem: ' g/200 mL',
            bacteriana: true,
            infoText1: 'Desempenho Microbiológico M. tuberculosis H37 -  Especificação: Coloração vermelha   Resultado: Adequado Desempenho Microbiológico E. coli ATCC 25922 -  Especificação: Coloração azul   Resultado: Adequado'
        },
        // Continue adicionando os outros produtos conforme necessário
        'PA183	Azul de Metileno para Ziehl Neelsen frasco c/ 500mL	PA - Corantes microb': {
            aspecto: 'Verificação do aspecto final e da presença de precipitados a partir de gotejamento em papel de filtro gramatura 80 -  Especificação: Líquido azul-escuro, translúcido, sem precipitados. ',
            dosagem: ' g/300 mL',
            bacteriana: true,
            infoText1: 'Desempenho microbiológico M. tuberculosis H37 -  Especificação: Coloração vermelha   Resultado: Adequado Desempenho microbiológico E. coli ATCC 25922 -  Especificação: Coloração azul   Resultado: Adequado'
        },
        'PI51	Azul de Metileno p/ Ziehl Neelsen - avulso	PA - Corantes microb': {
            aspecto: 'Verificação do aspecto final e da presença de precipitados a partir de gotejamento em papel de filtro gramatura 80 -  Especificação: Líquido azul-escuro, translúcido, sem precipitados. ',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico M. tuberculosis H37 -  Especificação: Coloração vermelha   Resultado: Adequado Desempenho microbiológico E. coli ATCC 25922 -  Especificação: Coloração azul   Resultado: Adequado'
        },
        'PA184	Azul de Ziehl Gabbet frasco c/ 500mL	PA - Corantes microb': {
            aspecto: 'Verificação do aspecto final e da presença de precipitados a partir de gotejamento em papel de filtro gramatura 80 -  Especificação: Líquido azul escuro, translúcido, sem precipitados. ',
            bacteriana: 'conforme',
            infoText1: 'Desempenho Microbiológio M. tuberculosis H37 -  Especificação: Coloração vermelha após técnica de Ziehl Gabbet  Resultado: Adequado Desempenho Microbiológio E. coli ATCC 25922 -  Especificação: Coloração azul após técnica de Ziehl Gabbet  Resultado: Adequado'
        },
        'PA185	Conjunto de Coloração Gram frascos c/500mL	PA - Corantes microb': {
            aspecto: 'Verificação do aspecto final e da presença de precipitados a partir de gotejamento em papel de filtro gramatura 80: Cristal Violeta. Especificação: Líquido violeta escuro, translúcido, sem precipitados. Lugol para Gram. Especificação: Líquido amarelo-escuro, opalescente, sem precipitados. Descorante para Gram.  Especificação: Líquido incolor, transparente. Fucsina Fenicada para Gram. Especificação: Líquido avermelhado translúcido, sem precipitados. ',
            bacteriana: 'conforme',
            infoText1: 'Desempenho Microbiológico S. aureus ATCC 25923. Especifação: Coloração púrpura após técnica de Gram. Resultado: Adequado Desempenho Microbiológico E. coli ATCC 25922.  Especifação: Coloração vermelha após técnica de Gram. Resultado: Adequado'
        },
        'PA187	Conjunto de Coloração Ziehl Gabbet frascos c/ 500mL	PA - Corantes microb': {
            aspecto: 'Verificação do aspecto final e da presença de precipitados a partir de gotejamento em papel de filtro gramatura 80: Fucsina de Ziehl Gabbet. Especificação: Líquido vermelho intenso, opalescente, sem precipitados. Azul de Gabbet: Especificação: Líquido azul- escuro, translúcido, sem precipitados. ',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico M. tuberculosis H37. Especificação: Coloração vermelha após técnica de Ziehl Gabbet. Resultado: Adequado Desempenho microbiológico  E. coli ATCC 25922. Especificação: Coloração azul após técnica de Ziehl Gabbet.  Resultado: Adequado'
        },
        'PA188	Conjunto de Coloração Ziehl Neelsen frascos c/ 500mL	PA - Corantes microb': {
            aspecto: 'Verificação do aspecto final e da presença de precipitados a partir de gotejamento em papel de filtro gramatura 80: Fucsina Fenicada de Ziehl Neelsen. Especificação: Líquido vermelho intenso opalescente, sem precipitados. Descorante para BAAR: Especificação: Líquido incolor transparente a levemente amarelado, sem precipitados. Azul de Metileno Conc.:  Especificação: Líquido azul intenso translúcido, sem precipitados. ',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico M. tuberculosis H37. Especificação: Coloração vermelha após técnica de Ziehl Neelsen. Resultado: Adequado Desempenho microbiológico E. coli ATCC 25922. Especificação: Coloração azul após técnica de Ziehl Neelsen.  Resultado: Adequado'
        },
        'PA189	Cristal Violeta frasco c/ 500mL - Conjunto Coloração Gram	PA - Corantes microb': {
            aspecto: 'Verificação do aspecto final e da presença de precipitados a partir de gotejamento em papel de filtro gramatura 80. -  Especificação: Líquido violeta escuro, translúcido, sem precipitados.',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico S. aureus ATCC 25923 -  Especificação: Coloração púrpura   Resultado: Adequado Desempenho microbiológico E. coli ATCC 25922 -  Especificação: Coloração vermelha   Resultado: Adequado'
        },
        'PI36	Cristal violeta - avulso	PA - Corantes microb': {
            aspecto: 'Verificação do aspecto final e da presença de precipitados a partir de gotejamento em papel de filtro gramatura 80. -  Especificação: Líquido violeta escuro, translúcido, sem precipitados. ',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico S. aureus ATCC 25923 -  Especificação: Coloração púrpura   Resultado: Adequado Desempenho microbiológico E. coli ATCC 25922 -  Especificação: Coloração vermelha   Resultado: Adequado'
        },
        'PA190	Descorante para Gram frasco c/ 1000mL	PA - Corantes microb': {
            aspecto: 'Aspecto final -  Especificação: Líquido transparente incolor, com odor característico. ',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico S. aureus ATCC 25923 -  Especificação: Coloração púrpura. Resultado: Adequado Desempenho microbiológico E. coli ATCC 25922 -  Especificação: Coloração vermelha.  Resultado: Adequado'
        },
        'PA191	Descorante para Gram frasco c/ 500mL- Conjunto Coloração Gram	PA - Corantes microb': {
            aspecto: 'Aspecto final -  Especificação: Líquido transparente incolor, com odor característico  ',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico S. aureus ATCC 25923 -  Especificação: Coloração púrpura   Resultado: Adequado Desempenho microbiológico E. coli ATCC 25922 -  Especificação: Coloração vermelha   Resultado: Adequado'
        },
        'PI47	Descorante para Gram - avulso	PA - Corantes microb': {
            aspecto: 'Aspecto final -  Especificação: Líquido transparente incolor, com odor característico  ',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico S. aureus ATCC 25923 -  Especificação: Coloração púrpura   Resultado: Adequado Desempenho microbiológico E. coli ATCC 25922 -  Especificação: Coloração vermelha   Resultado: Adequado'
        },
        'PA192	Descorante para BAAR frasco c/ 1000mL	PA - Corantes microb': {
            aspecto: 'Aspecto final -  Especificação: Líquido incolor transparente a levemente amarelado, sem precipitados. ',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico M. tuberculosis H37 -  Especificação: Coloração vermelha   Resultado: Adequado Desempenho microbiológico E. coli ATCC 25922-  Especificação: Coloração azul   Resultado: Adequado'
        },
        'PA193	Descorante para BAAR frasco c/ 500mL	PA - Corantes microb': {
            aspecto: 'Aspecto final -  Especificação: Líquido incolor transparente a levemente amarelado, sem precipitados. ',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico M. tuberculosis H37 -  Especificação: Coloração vermelha   Resultado: Adequado Desempenho microbiológico E. coli ATCC 25922-  Especificação: Coloração azul   Resultado: Adequado'
        },
        'PI53	Descorante para BAAR - avulso	PA - Corantes microb': {
            aspecto: 'Aspecto final -  Especificação: Líquido incolor transparente a levemente amarelado, sem precipitados. ',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico M. tuberculosis H37 -  Especificação: Coloração vermelha   Resultado: Adequado Desempenho microbiológico E. coli ATCC 25922-  Especificação: Coloração azul   Resultado: Adequado'
        },
        'PA196	Fucsina de Ziehl Gabbet frasco c/ 500mL - Conjunto de Coloração Ziehl Gabbet	PA - Corantes microb': {
            aspecto: 'Verificação do aspecto final e da presença de precipitados a partir de gotejamento em papel de filtro gramatura 80 -  Especificação: Líquido vermelho intenso, opalescente, sem precipitados.',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico M. tuberculosis H37 -  Especificação: Coloração vermelha.  Resultado: Adequado Desempenho microbiológico E. coli ATCC 25922 -  Especificação: Coloração azul.  Resultado: Adequado'
        },
        'PA197	Fucsina Fenicada de Ziehl Neelsen frasco c/ 500mL	PA - Corantes microb': {
            aspecto: 'Verificação do aspecto final e da presença de precipitados a partir de gotejamento em papel de filtro gramatura 80 -  Especificação: Líquido vermelho intenso opalescente, sem precipitados.',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológica M. tuberculosis H37  -  Especificação: Coloração vermelha. Resultado: Adequado Desempenho microbiológica E. coli ATCC 25922 -  Especificação: Coloração azul. Resultado: Adequado'
        },
        'PI52	Fucsina Fenicada para Ziehl Neelsen – avulso	PA - Corantes microb': {
            aspecto: 'Verificação do aspecto final e da presença de precipitados a partir de gotejamento em papel de filtro gramatura 80 -  Especificação: Líquido vermelho intenso opalescente, sem precipitados.',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológica M. tuberculosis H37  -  Especificação: Coloração vermelha. Resultado: Adequado Desempenho microbiológica E. coli ATCC 25922 -  Especificação: Coloração azul. Resultado: Adequado'
        },
        'PA198	Fucsina Fenicada Gram frasco c/ 1000mL	PA - Corantes microb': {
            aspecto: 'Verificação do aspecto final e da presença de precipitados a partir de gotejamento em papel de filtro gramatura 80 -  Especificação: Líquido avermelhado translúcido, sem precipitados.',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico S. aureus ATCC 25923 -  Especificação: Coloração púrpura   Resultado: Adequado Desempenho microbiológico E. coli ATCC 25922 -  Especificação: Coloração vermelha   Resultado: Adequado'
        },
        'PA199	Fucsina Fenicada Gram frasco c/ 500mL - Conjunto Coloração Gram	PA - Corantes microb': {
            aspecto: 'Verificação do aspecto final e da presença de precipitados a partir de gotejamento em papel de filtro gramatura 80 -  Especificação: Líquido avermelhado translúcido, sem precipitados. ',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico S. aureus ATCC 25923 - Especificação: Coloração púrpura. Resultado: Adequado Desempenho microbiológico E. coli ATCC 25922 -  Especificação: Coloração vermelha. Resultado: Adequado'
        },
        'PI48	Fucsina Fenicada para Gram - avulso	PA - Corantes microb': {
            aspecto: 'Verificação do aspecto final e da presença de precipitados a partir de gotejamento em papel de filtro gramatura 80 -  Especificação: Líquido avermelhado translúcido, sem precipitados.',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico S. aureus ATCC 25923 - Especificação: Coloração púrpura. Resultado: Adequado Desempenho microbiológico E. coli ATCC 25922 -  Especificação: Coloração vermelha. Resultado: Adequado'
        },
        'PA200	Fucsina Fenicada Ziehl Neelsen frasco c/ 1000mL	PA - Corantes microb': {
            aspecto: 'Aspecto final -  Especificação: Líquido vermelho intenso opalescente. ',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico M. tuberculosis H37 -  Especificação: Coloração vermelha. Resultado: Adequado Desempenho microbiológico E. coli ATCC 25922 -  Especificação: Coloração azul. Resultado: Adequado'
        },
        'PA213	Lugol Forte 2% frasco c/ 1000mL	PA - Corantes microb': {
            aspecto: 'Aspecto final. Especificação: Líquido amarelo escuro opalescente.',
            bacteriana: 'conforme',
            infoText1: 'Avaliação da coloração e da presença de precipitados a partir de gotejamento em papel de filtro gramatura 80. Especificação: Ausência de precipitados e coloração idêntica à do lote padrão. Resultado: Adequado'
        },
        'PA214	Lugol Forte 2% frasco c/ 500mL	PA - Corantes microb': {
            aspecto: 'Aspecto final. Especificação: Líquido amarelo-escuro opalescente. ',
            bacteriana: 'conforme',
            infoText1: 'Avaliação da coloração e da presença de precipitados a partir de gotejamento em papel de filtro gramatura 80. -  Especificação: Ausência de precipitados e coloração idêntica à do lote padrão.  Resultado: Adequado'
        },
        'PA215	Lugol Forte 5% frasco c/ 1000mL	PA - Corantes microb': {
            aspecto: 'Aspecto final. Especificação: Líquido amarelo-escuro opalescente. ',
            bacteriana: 'conforme',
            infoText1: 'Avaliação da coloração e da presença de precipitados a partir de gotejamento em papel de filtro gramatura 80. Especificação: Ausência de precipitados e coloração idêntica à do lote padrão. Resultado: Adequado'
        },
        'PA216	Lugol Forte 5% frasco c/ 500mL	PA - Corantes microb': {
            aspecto: 'Aspecto final. Especificação: Líquido amarelo escuro opalescente. ',
            bacteriana: 'conforme',
            infoText1: 'Avaliação da coloração e da presença de precipitados a partir de gotejamento em papel de filtro gramatura 80. Especificação: Ausência de precipitados e coloração idêntica à do lote padrão. Resultado: Adequado'
        },
        'PA217	Lugol para Gram frasco c/ 1000mL	PA - Corantes microb': {
            aspecto: 'Verificação do aspecto final e da presença de precipitados a partir de gotejamento em papel de filtro gramatura 80.  Especificação: Líquido amarelo-escuro opalescente, sem precipitados.',
            bacteriana: 'conforme',
            infoText1: 'Desempenho Microbiológio S. aureus ATCC 25923 -  Especificação: Coloração púrpura (ROXO). Resultado: Adequado Desempenho Microbiológio E. coli ATCC 25922 -  Especificação: Coloração vermelh. Resultado: Adequado'
        },
        'PA218	Lugol para Gram frasco c/ 500mL - Conjunto Coloração Gram	PA - Corantes microb': {
            aspecto: 'Verificação do aspecto final e da presença de precipitados a partir de gotejamento em papel de filtro gramatura 80. Especificação: Líquido amarelo-escuro opalescente, sem precipitados. ',
            bacteriana: 'conforme',
            infoText1: 'Desempenho Microbiológio S. aureus ATCC 25923 - Especificação: Coloração púrpura (ROXO). Resultado: Adequado Desempenho Microbiológio E. coli ATCC 25922 -  Especificação: Coloração vermelha. Resultado: Adequado'
        },
        'PI46	Lugol para Gram - avulso	PA - Corantes microb': {
            aspecto: 'Verificação do aspecto final e da presença de precipitados a partir de gotejamento em papel de filtro gramatura 80. Especificação: Líquido amarelo-escuro opalescente, sem precipitados. ',
            bacteriana: 'conforme',
            infoText1: 'Desempenho Microbiológio S. aureus ATCC 25923 - Especificação: Coloração púrpura (ROXO). Resultado: Adequado Desempenho Microbiológio E. coli ATCC 25922 -  Especificação: Coloração vermelha. Resultado: Adequado'
        },
        'PA224	Violeta Genciana frasco c/ 1000mL	PA - Corantes microb': {
            aspecto: 'Verificação do aspecto final e da presença de precipitados a partir de gotejamento em papel de filtro gramatura 80. Especificação: Líquido violeta escuro, translúcido, sem precipitados. ',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico S. aureus ATCC 25923 -  Especificação: Coloração púrpura. Resultado: Adequado Desempenho microbiológico E. coli ATCC 25922 -  Especificação: Coloração vermelha. Resultado: Adequado'
        },
        'PA225	Violeta Genciana frasco c/ 500mL	PA - Corantes microb': {
            aspecto: 'Verificação do aspecto final e da presença de precipitados a partir de gotejamento em papel de filtro gramatura 80. Especificação: Líquido violeta escuro, translúcido, sem precipitados. ',
            bacteriana: 'conforme',
            infoText1: 'Desempenho microbiológico S. aureus ATCC 25923 - Especificação: Coloração púrpura. Resultado: Adequado Desempenho microbiológico E. coli ATCC 25922 - Especificação: Coloração vermelha. Resultado: Adequado'
        },
        'PA162	MIF Modificado frasco c/ 1000mL	PA - Diversos': {
            aspecto: 'Aspecto final -  Especificação: Líquido incolor translúcido, sem precipitados aparentes.',
            bacteriana: 'conforme',
            infoText1: 'Conservação de amostra de fezes contendo diversos ovos, cistos e trofozoítos -  Especificação: Preservação das características dos parasitos por até 7 dias. Resultado: Adequado'
        },
        'PA284	Vaselina Líquida Estéril frasco c/ 100mL	PA - Diversos': {
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
        'PI56 - Vaselina liquida estéril frasco c/ 5 mL - PA - Diversos': {
            aspecto: 'Aspecto. Especificação: Líquido incolor transparente viscoso. Resultado: Adequado.',
            bacteriana: 'conforme',
            infoText1: 'Esterilidade. Especificação: Ausência de crescimento. Resultado: Adequado'
        },
        'PA412 - Hipoclean frasco c/ 1.000 mL': {
            aspecto: 'Líquido translúcido e sem precipitados. pH 12,5 ± 1,0.',
            bacteriana: 'conforme',
            infoText1: 'Não aplicável'
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
