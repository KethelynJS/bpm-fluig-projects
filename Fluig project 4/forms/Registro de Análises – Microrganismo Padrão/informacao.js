$(document).ready(function () {
    var opcaoData = {
        'PA260	Pseudomonas aeruginosa NEWP 0053 frasco c/ 05 discos	PA - Micro-organ pad': {
            aspecto: 'Líquido incolor translúcido.',
            dosagem: ' g/300 mL',
            resultado_analise: 'Cepa de 4ª Geração. Teste de Viabilidade. Especificação: Contagem de células viáveis/mL: > 100.000 UFC/mL. Resultado: Adequado Teste de Pureza. Microscopia: Especificação: BGN. Resultado: Adequado Teste de Pureza. Cultura: inoculação em Ágar Sangue e Ágar McConkey: colônias típicas.  Resultado: Adequado Testes Fenotípicos. Provas Bioquímicas Manuais: Especificação: Oxidase +.  Resultado: Adequado Provas Bioquímicas Automatizadas: Especificação:  Glicose: + (oxidativo); Acetamida: +; Esculina: -; Uréia: -; Citrato: +; Malonato: +; Lisina: -; Polimixina B: S; Triptofano-desaminase: -; Maltose: -; Manitol: +; Xilose: +; Rafinose: -; Sorbitol: -; Sacarose: -; Inositol: -; Adonitol: -; Gás Sulfídrico: -; ONPG: -; Rhamnose: -; Arabinose: -; Arginina +; Ornitina: -.  Resultado: Adequado Teste de Suscetibilidade a antimicrobianos (método de Kirby Bauer – limites de tamanho do halo de inibição em mm) Amicacina 30: 20-26; Aztreonam 30: 23-29; Cefepima 30: 25-31; Cefiderocol 30: 23-29; Ceftazidima 10: 21-27;  Ceftolozana-tazobactam 30-10: 25-31; Ciprofloxacino 5: 25-33; Gentamicina 10: 17-23; Imipenem 10: 20-28;  Levofloxacino 5: 19-26; Meropenem 10: 27-33; Piperacilina-Tazobactam 30-6: 23-29; Tobramicina 10: 20-26.  Resultado: Adequado',
            motivoAnalise: 'motivoan'
        },
        'PA261	Salmonella typhimurium NEWP 0028 frasco c/ 05 discos	PA - Micro-organ pad': {
            aspecto: 'Líquido incolor translúcido.',
            dosagem: ' g/200 mL',
            resultado_analise: 'Cepa de 4ª Geração. Teste de Viabilidade. Especificação: Contagem de células viáveis/mL: superior a 100.000 UFC/mL. Resultado: Adequado Teste de Pureza. Microscopia. Especificação:  CBGN. Resultado: Adequado Teste de Pureza. Cultura. Especificação: inoculação em Ágar Sangue e Ágar McConkey: colônias típicas. Resultado: Adequado Testes Fenotípicos. Provas Bioquímicas Automatizadas: Glicose: +; Rafinose: -; Inositol: +; Uréia: -; Lisina:+; Triptofano-desaminase: -; Tartarato:-; OF/Glicose:+; Citrato:+; Sacarose: -; Rhamnose: +; Adonitol: -; Gás Sulfídrico: +; Arginina: -; Malonato: -; Sorbitol: +; Arabinose: +; Melobiose: +; Indol: -; Ornitina: +; VP: -; Esculina: -; ONPG: -; Oxidase: -; Acetamida: -; Cetrimide: -. Resultado: Adequado',
            motivoAnalise: 'motivoan'
        },
        'PA262	Shigella flexneri NEWP 0122 frasco c/ 05 discos	PA - Micro-organ pad': {
            aspecto: 'Líquido alaranjado translúcido.',
            dosagem: ' g/300 mL',
            resultado_analise: 'Cepa de 4ª Geração. Teste de Viabilidade. Especificação: Contagem de células viáveis/mL: superior a 100.000 UFC/mL. Resultado: Adequado Teste de Pureza. Microscopia:  Especificação: BGN.  Resultado: Adequado Teste de Pureza. Cultura:  Especificação: inoculação em Ágar Sangue e Ágar McConkey: colônias típicas.  Resultado: Adequado Testes Fenotípicos. Provas Bioquímicas: Oxidase: -; Indol: -; Lactose: -; Glicose: + (fermentativo); Acetamida: -;   Esculina: -; Uréia: -; Malonato: -;   Lisina: -; Polimixina B: S; Triptofano-desaminase: -;    Maltose: -; Manitol: +; Xilose: -;   Rafinose: -; Sorbitol: -; Sacarose: -; Inositol: -; Adonitol: -; Gás Sulfídrico: -; ONPG: -; Rhamnose: -; Arabinose: +; Arginina -; Ornitina: -.  Resultado: Adequado',
            motivoAnalise: 'motivoan'
        },
        'PA263	Staphylococcus aureus NEWP 0023 frasco c/ 05 discos	PA - Micro-organ pad': {
            aspecto: 'Líquido verde-claro translúcido.',
            dosagem: ' g/300 mL',
            resultado_analise: 'Cepa de 4ª Geração. Teste de Viabilidade. Especificação: Contagem de células viáveis/mL: superior a 100.000 UFC/mL. Resultado: Adequado Teste de Pureza. Microscopia: Especificação: CGP.  Resultado: Adequado Teste de Pureza. Cultura: Especificação: inoculação em Ágar Sangue: colônias típicas.  Resultado: Adequado Testes Fenotípicos. Provas Bioquímicas Manuais: Especificação: Catalase: +; Coagulase livre: +; Coagulase ligada: +. Resultado: Adequado Provas Bioquímicas Automatizadas: Especificação: Bacitracina: R; Optoquina: R; Hemicelulose: -; NaCl 6,5%: +; Bile 10%: +; Bile 40%: +; Esculina: -; Arginina: +; Uréia: +; Vermelho Tetrazólio: +; Novobiocina: S; Dextrose: +; Lactose: +; Manitol: +; Rafinose: -; Salicina: -; Sorbitol: +; Sacarose: +; Trealose: +; Arabinose: -; PYR: +; Inulina: -; Melibiose: -; Melezitose: -; Celobiose: -; Ribose: +;Xilose: -. Resultado: Adequado',
            motivoAnalise: 'motivoan'
        },
        'PA264	Staphylococcus aureus NEWP 0038 frasco c/ 05 discos	PA - Micro-organ pad': {
            aspecto: 'Líquido verde-claro translúcido.',
            dosagem: ' g/300 mL',
            resultado_analise: 'Cepa de 4ª Geração. Teste de Viabilidade. Especificação: Contagem de células viáveis/mL: superior a 100.000 UFC/mL. Resultado: Adequado. Teste de Pureza. Microscopia: Especificação: CGP. Resultado: Adequado. Teste de Pureza. Cultura: Especificação: inoculação em Ágar Sangue: colônias típicas. Resultado: Adequado. Testes Fenotípicos. Provas Bioquímicas Manuais:  Especificação: Catalase: +; Coagulase livre: +; Coagulase ligada: +.  Resultado: Adequado. Provas Bioquímicas Automatizadas:  Especificação: Bacitracina: R; Optoquina: R; Hemicelulose: -; NaCl 6,5%: +; Bile 10%: +; Bile 40%: +; Esculina: -; Arginina: +; Uréia: +; Vermelho Tetrazólio: +; Novobiocina: S; Dextrose: +; Lactose: +; Manitol: +; Rafinose: -; Salicina: -; Sorbitol: -; Sacarose: +; Trealose: +; Arabinose: -; PYR: +; Inulina: -; Melibiose: -; Melezitose: -; Celobiose: -; Ribose: +; Xilose: - . Resultado: Adequado.',
            motivoAnalise: 'motivoan'
        },
        'PA265	Staphylococcus epidermidis NEWP 0128 frasco c/ 05 discos	PA - Micro-organ pad': {
            aspecto: 'Líquido alaranjado translúcido.',
            dosagem: ' g/300 mL',
            resultado_analise: 'Cepa de 4ª Geração. Teste de Viabilidade. Especificação: Contagem de células viáveis/mL: superior a 100.000 UFC/mL. Resultado: Adequado Teste de Pureza. Microscopia: Especificação: CGP agrupados. Resultado: Adequado Teste de Pureza. Cultura:  Especificação: inoculação em Ágar Sangue: colônias típicas.  Resultado: Adequado Testes Fenotípicos. Provas Bioquímicas Automatizadas: Especificação: Cristal violeta: - Novobiocina: - VP: + Bile esculina: - Lactose: + Tolerância ao sal:  +  Optoquina: + PYR: - Uréia: + tirealose: - Nitrato: + Fosfatase: +  Arginina: +  Manitol: - . Resultado: Adequado',
            motivoAnalise: 'motivoan'
        },
        'PA266	Streptococcus pyogenes NEWP 0015 frasco c/ 05 discos	PA - Micro-organ pad': {
            aspecto: 'Líquido alaranjado translúcido.',
            dosagem: ' g/300 mL',
            resultado_analise: 'Cepa de 4ª Geração. Teste de Viabilidade. Especificação: Contagem de células viáveis/mL: superior a 100.000 UFC/mL. Resultado: Adequado Teste de Pureza. Microscopia: Especificação: CGP em cadeias.  Resultado: Adequado Teste de Pureza. Cultura: Especificação: inoculação em Ágar Sangue: colônias típicas beta hemolíticas.  Resultado: Adequado Testes Fenotípicos. Provas Bioquímicas Automatizadas: Especificação: Novobiocina: R; Bile Esculina: S; Lactose: +; NaCl 6,5%: S; Bacitracina: S; PYR: +; Glicose: +; Sacarose: +;  Celobiose: -; Optoquina: R; Uréia: -; Trealose: +; Sorbitol: -; Inulina: -; Salicina: +; Arginina: -; Manitol: -; Arabinose: -; Rafinose: -; Catalase: -. Resultado: Adequado',
            motivoAnalise: 'motivoan'
        },
        'PA250	Enterobacter aerogenes NEWP 0048 frasco c/ 05 discos	PA - Micro-organ pad': {
            aspecto: 'Líquido alaranjado translúcido.',
            dosagem: ' g/300 mL',
            resultado_analise: 'Cepa de 4ª Geração Teste de Viabilidade. Contagem de células viáveis/mL. Especificação: superior a 100.000 UFC/mL. Resultado: Adequado Teste de Pureza. Microscopia: Especificação: BGN. Resultado: Adequado Cultura: Especificação: crescimento em Ágar Sangue e em Ágar MacConkey: colônias típicas sem contaminantes. Resultado: Adequado Testes Fenotípicos: Provas Bioquímicas: Oxidase: -; Motilidade: +; Indol: -; Ornitina: +; Lisina: +; Ramnose: +;  Lactose: +; Glicose: +; Rafinose: +; Inositol: +; Uréia: -; Lisina: +; TDA: -; Indol: -; Citrato: +; Sacarose: +; Rhamnose: +; Adonitol: +; H2S: -; Arginina: -; Malonato: +; Sorbitol: +; Arabinose: +; Melibiose: +; VP: +; Esculina: +; ONPG: +. Resultado: Adequado',
            motivoAnalise: 'motivoan'
        },
        'PA251	Enterobacter cloacae NEWP 0047 frasco c/ 05 discos - Sob encomenda	PA - Micro-organ pad': {
            aspecto: 'Líquido alaranjado translúcido.',
            dosagem: ' g/300 mL',
            resultado_analise: 'Cepa de 4ª Geração Teste de Viabilidade. Contagem de células viáveis/mL: Especificação: superior a 100.000 UFC/mL. Resultado: Adequado Microscopia. Especifciação:BGN. Resultado: Adequado Cultura: crescimento em Ágar Sangue e em Ágar MacConkey. Especificação: colônias típicas sem contaminantes.  Resultado: Adequado Testes Fenotípicos. Provas Bioquímicas:  Especificação: Oxidase: -; Motilidade: +; Indol: -; Ornitina: +; Lisina: -; Ramnose: +;  Lactose: +; Glicose: + (fermentativo); Esculina: -; Uréia: -;   Citrato: +; Malonato: +; Triptofano-desaminase: -; Maltose: +; Rafinose: +; Sorbitol: +; Sacarose: +; Inositol: +; Adonitol: -; Gás sulfídrico: -; ONPG: + ; Rhamnose: +; Arabinose: +; Arginina: +; VP: +; Acetamida: -; Manitol: +; Xilose: -.  Resultado: Adequado',
            motivoAnalise: 'motivoan'
        },
        'PA252	Enterococcus faecalis NEWP 0012 frasco c/ 05 discos	PA - Micro-organ pad': {
            aspecto: 'Líquido alaranjado translúcido.',
            dosagem: ' g/300 mL',
            resultado_analise: 'Cepa de 4ª Geração Teste de Viabilidade. Especifciação: Contagem de células viáveis/mL: superior a 100.000 UFC/mL. Resultado: Adequado Teste de Pureza. Microscopia. Especificação: CGP. Resultado: Adequado Teste de Pureza. Cultura. Especificação: inoculação em Ágar Sangue: colônias típicas. Resultado: Adequado Testes Fenotípicos. Provas Bioquímicas Manuais: Especificação: Catalase: -. Resultado: Adequado Provas Bioquímicas Automatizadas. Especificações: Bacitracina: R; Optoquina: R; Hemicelulose: +; NaCl 6,5%: +; Bile 10%: +; Bile 40%: +; Esculina: +; Arginina: +; Uréia: -; Vermelho Tetrazólio: +; Novobiocina: R; Dextrose: +; Lactose: +; Manitol: +; Rafinose: -; Salicina: +; Sorbitol: +; Sacarose: +; Trealose: +; Arabinose: -; PYR: +; Inulina: -; Melibiose: -; Melezitose: -; Celobiose: +; Ribose: +; Xilose: - . Resultado: Adequado Teste de Suscetibilidade a antimicrobianos (método de Kirby Bauer – limites de tamanho do halo de inibição em mm). Especificação: Ampicilina 2: 15-21; Ciprofloxacino 5: 19-25; Gentamicina 30: 12-18; Estreptomicina 300: 14-20;  Imipenem 10: 24-30; Levofloxacino  5: 19-25; Linezolida 10: 19-25;  Nitrofurantoína 100: 18-24; Norfloxacino 10: 16-22; Sulfametoxazol-Trimetoprima 23,75-1,25: 20; Teicoplanina  30: 15-21;Tigeciclina 15: 20-26; Vancomicina 5: 10-16. Resultado: Adequado',
            motivoAnalise: 'motivoan'
        },
        'PA253	Enterococcus faecalis NEWP 0033 frasco c/ 05 discos	PA - Micro-organ pad': {
            aspecto: 'Líquido alaranjado translúcido.',
            dosagem: ' g/300 mL',
            resultado_analise: 'Cepa de 4ª Geração. Teste de Viabilidade. Contagem de células viáveis/mL: superior a 100.000 UFC/mL. Resultado: Adequado Teste de Pureza. Microscopia. Especifciação: CGP. Resultado: Adequado Teste de Pureza. Especifciação: Cultura: inoculação em Ágar Sangue: colônias típicas. Resultado: Adequado Testes Fenotípicos. Provas Bioquímicas Manuais. Especificação: Catalase: -. Resultado: Adequado Provas Bioquímicas Automatizadas: Especifciação: Cristal violeta: +; Novobiocina: +; VP: +; Bile esculina: +; PNP-B-D galactopiranoside: +; Lactose: +; NaCl 6,5%: +; Ribose: +; Bacitracina: +; PYR: +; PNP-B-D- glucuronide: -; Optoquina: +; Uréia: -; Trealose: + ; Sorbitol: -; Inulina: -; Piruvato: - ; Nitrato: -; Indoxil fosfatase: -; Fosfatase: -; Arginina: +; Manitol: +; Manose: +; Arabinose: -; Rafinose: -; Hem: -. Resultado: Adequado',
            motivoAnalise: 'motivoan'
        },
        'PA254	Escherichia coli Beta Lactamase NEWP 0018 frasco c/ 05 discos	PA - Micro-organ pad': {
            aspecto: 'Líquido alaranjado translúcido.',
            dosagem: ' g/300 mL',
            resultado_analise: 'Cepa de 4ª Geração. Teste de Viabilidade. Especificação: Contagem de células viáveis/mL: superior a 100.000 UFC/mL. Resultado: Adequado Teste de Pureza. Microscopia: Especificação: BGN. Resultado: Adequado Teste de Pureza. Cultura. Especifciação: crescimento em Ágar Sangue e em Ágar MacConkey: colônias típicas sem contaminantes. Resultado: Adequado Testes Fenotípicos. Provas Bioquímicas. Especificação: Oxidase: -; Lactose: +; Lisina: +;   Motilidade: +; Glicose: +; Gás sulfídrico: -; Ureia: -; Sacarose: -;  LTD: -; Indol: +; Acetamida: -; Esculina: -; Citrato: -; Malonato: -; Polimixina B: S; Maltose: +; Manitol: +; Xilose: +; Rafinose: -; Sorbitol: +; Inositol: -; Adonitol: -; ONPG: +; Rhamnose: +; Arabinose: +; Arginina: -; Ornitina: +. Resultado: Adequado Teste de Suscetibilidade a antimicrobianos (método de Kirby Bauer – limites de tamanho do halo de inibição em mm). Especificação: Amoxacilina-ácido clavulânico 20-10: 17-22; Ampicilina-sulbactam 10-10: 13-19; Piperacilina-tazobactam 30-6: 21-27; Ceftolozana-tazobactam 30-10: 25-31. Resultado: Adequado',
            motivoAnalise: 'motivoan'
        },
        'PA255	Escherichia coli NEWP 0022 frasco c/ 05 discos	PA - Micro-organ pad': {
            aspecto: 'Líquido alaranjado translúcido.',
            dosagem: ' g/300 mL',
            resultado_analise: 'Cepa de 4ª Geração. Teste de Viabilidade. Especificação: Contagem de células viáveis/mL: superior a 100.000 UFC/mL. Resultado: Adequado Teste de Pureza. Microscopia: Especificação: BGN.  Resultado: Adequado Teste de Pureza. Cultura: Especificação: crescimento em Ágar Sangue e em Ágar MacConkey: colônias típicas sem contaminantes.  Resultado: Adequado Testes Fenotípicos. Provas Bioquímicas:  Especifciação: Oxidase: -; Lactose: +; Lisina: +;   Motilidade: +; Glicose: +; Gás sulfídrico: -; Ureia: -; Sacarose: -; LTD: -; Indol: +; Acetamida: -; Esculina: -;  Citrato: -; Malonato: -; Polimixina B: S;  Maltose: +; Manitol: +; Xilose: +; Rafinose: -; Sorbitol: +; Sacarose: -; Inositol: -; Adonitol: -; ONPG: +; Rhamnose: +; Arabinose: +; Arginina: -; Ornitina: + .  Resultado: Adequado Teste de Suscetibilidade a antimicrobianos (método de Kirby Bauer – limites de tamanho do halo de inibição em mm). Especificação: Amicacina 30: 19-26; Ampicilina 10: 15-22; Ampicilina-sulbactam 10-10: 19-24; Amoxicilina-ácido clavulânico 20-10: 18-24; Aztreonam 30: 28-36; Cefadroxila 30: 14-20;  Cefazolina 30: 21-27; Cefepima 30: 31-37; Cefotaxima 5: 25-31; Cefoxitina 30: 23-29;  Ceftazidima 10: 23-29; Ceftriaxona 30: 29-35; Cefuroxima 30: 20-26; Ciprofloxacino 5: 29-37; Cloranfenicol 30: 21-27; Ertapenem 10: 29-36;  Gentamicina 10: 19-26; Imipenem 10: 26-32; Levofloxacino 5: 29-37; Meropenem 10:  28-35; Ácido nalidíxico 30: 22-28; Nitrofurantoína 100: 17-23;  Norfloxacino 10: 28-35; Piperacilina-tazobactam 30-6: 21-27;  Sulfametoxazol/trimetoprima 23,75-1,25: 23-29; Tobramicina 10: 18-26.  Resultado: Adequado',
            motivoAnalise: 'motivoan'
        },
        'PA256	Escherichia coli NEWP 0039 frasco c/ 05 discos	PA - Micro-organ pad': {
            aspecto: 'Líquido alaranjado translúcido.',
            dosagem: ' g/300 mL',
            resultado_analise: 'Cepa de 4ª Geração. Teste de Viabilidade. Especificação: Contagem de células viáveis/mL: superior a 100.000 UFC/mL. Resultado: Adequado. Teste de Pureza. Microscopia: Especificação: BGN. Resultado: Adequado. Teste de Pureza. Cultura: crescimento em Ágar Sangue e em Ágar MacConkey: colônias típicas sem contaminantes. Resultado: Adequado. Testes Fenotípicos. Provas Bioquímicas: Especificação: Oxidase: -; Lactose: +; Lisina: +;   Motilidade: +; Glicose: +; Gás sulfídrico: -; Ureia: -; Sacarose: -;  LTD: -; Indol: +; Acetamida: -; Esculina: -; Citrato: -; Malonato: -; Polimixina B: S; Maltose: +; Manitol: +; Xilose: +; Rafinose: -; Sorbitol: +; Sacarose: -; Inositol: -; Adonitol: -; ONPG: +; Rhamnose: +; Arabinose: +; Arginina: -; Ornitina: - . Resultado: Adequado.',
            motivoAnalise: 'motivoan'
        },
        'PA257	Klebsiella pneumoniae NEWP 0083 frasco c/ 05 discos	PA - Micro-organ pad': {
            aspecto: 'Líquido alaranjado translúcido.',
            dosagem: ' g/300 mL',
            resultado_analise: 'Cepa de 4ª Geração. Teste de Viabilidade. Contagem de células viáveis/mL. Especificação: superior a 100.000 UFC/mL. Resultado: Adequado Teste de Pureza. Microscopia: Especificação: BGN.  Resultado: Adequado Teste de Pureza. Cultura: Especificação: inoculação em Ágar Sangue e em Ágar MacConkey: colônias típicas.  Resultado: Adequado Testes Fenotípicos. Provas Bioquímicas Manuais: Especificação: Oxidase: -; Indol: -; Lactose: +.  Resultado: Adequado Provas Bioquímicas Automatizadas: Especificação: Glicose (fermentativo); Esculina: +; Uréia: +; Citrato: +; Malonato: +; Lisina: +; Triptofano-desaminase: -; Maltose: + ;     Rafinose: +; Sorbitol: +; Sacarose: +; Inositol: +; Adonitol: +;   Gás sulfídrico: -; ONPG: + ; Rhamnose: +; Arabinose: +; Arginina: -; Ornitina: -; Melibiose: - ;     VP: +.  Resultado: Adequado Teste de Suscetibilidade a antimicrobianos (valores de CIM em mcg/mL). Especificação: Amicacina: ≤ 2;  Aztreonam: ≤ 8; Cefepime: ≤ 4; Cefotaxima: ≤ 4; Ciprofloxacino:  ≤ 0,5; Gentamicina: ≤ 0,5; Imipenem: ≤ 4; Meropenem: ≤ 2; Piperacilina/tazobactam: ≤ 8; Sulfametoxazol-trimetoprim: ≤ 10.  Resultado: Adequado',
            motivoAnalise: 'motivoan'
        },
        'PA258	Proteus mirabilis NEWP 0133 frasco c/ 05 discos	PA - Micro-organ pad': {
            aspecto: 'Líquido alaranjado translúcido.',
            dosagem: ' g/300 mL',
            resultado_analise: 'Cepa de 4ª Geração.  Teste de Viabilidade. Especificação: Contagem de células viáveis/mL: superior a 100.000 UFC/mL. Resultado: Adequado Teste de Pureza. Microscopia: Especifciação: BGN. Resultado: Adequado Teste de Pureza. Cultura: inoculação em Ágar Sangue e em Ágar MacConkey: colônias típicas. Resultado: Adequado Testes Fenotípicos. Provas Bioquímicas Manuais: Especificação: Oxidase: -; Indol: -; Lactose: -. Resultado: Adequado Provas Bioquímicas Automatizadas: Especificação: Glicose: +; Acetamida: -; Esculina: -; Uréia: +; Citrato: -; Malonato: -; Lisina: -; Polimixina B: S; Triptofano-Desaminase: +; Lactose: -; Maltose: -; Manitol: -; Xilose: +; Rafinose: -; Sorbitol: -; Sacarose: -; Inositol: -; Adonitol: -; Gás Sulfídrico: +; ONPG: -; Rhamnose: -; Arabinose: -; Arginina: -; Ornitina: +. Resultado: Adequado',
            motivoAnalise: 'motivoan'
        },
        'PA259	Pseudomonas aeruginosa NEWP 0027 frasco c/ 05 discos	PA - Micro-organ pad': {
            aspecto: 'Líquido alaranjado translúcido.',
            dosagem: ' g/300 mL',
            resultado_analise: 'Cepa de 4ª Geração. Teste de Viabilidade. Especificação: Contagem de células viáveis/mL: superior a 100.000 UFC/mL. Resultado: Adequado Teste de Pureza. Microscopia: Especificação: BGN. Resultado: Adequado Teste de Pureza. Cultura: Especificação: inoculação em Ágar Sangue e Ágar McConkey: colônias típicas. Resultado: Adequado Testes Fenotípicos: Provas Bioquímicas Manuais: Oxidase +. Resultado: Adequado Provas Bioquímicas Automatizadas: Especifciação: Glicose: + (oxidativo); Acetamida: +; Esculina: -; Uréia: -; Citrato: +; Malonato: +; Lisina: -; Polimixina B: S; Triptofano-desaminase: -; Maltose: -; Manitol: +; Xilose: +; Rafinose: -; Sorbitol: -; Sacarose: -; Inositol: -; Adonitol: -; Gás Sulfídrico: -; ONPG: -; Rhamnose: -; Arabinose: -; Arginina +; Ornitina: -. Resultado: Adequado Teste de Suscetibilidade a antimicrobianos (valores de CIM em mcg/mL). Especificação: Amicacina: ≤ 2 Ampicilina: ≥ 32      Ampicilina/sulbactam: ≥ 32      Aztreonam: ≤ 8 Cefepime: ≤ 4            Cefotaxima: 32 Cefoxitina: ≥ 32      Ceftazidima: ≤ 8 Cefalotina: ≥ 32      Ciprofloxacino: ≤ 0,5      Gentamicina: ≤ 0,5 Imipenem: ≤ 4      Meropenem: ≤ 2 Piperacilina/tazobactam: 16      Sulfametoxazol-trimetoprim: ≥ 320. Resultado: Adequado',
            motivoAnalise: 'motivoan'
        },
        'PA248	Burkholderia cepacia NEWP 0059 frasco c/ 05 discos - sob encomenda	PA - Micro-organ pad': {
            aspecto: 'Líquido alaranjado translúcido.',
            dosagem: ' g/300 mL',
            resultado_analise: 'Cepa de 4ª Geração Teste de Viabilidade. Especificação: Contagem de células viáveis/mL: superior a 100.000 UFC/mL. Resultado: Adequado Teste de Pureza. Microscopia. Especificação: BGN. Resultado: Adequado Teste de Pureza. Cultura. Especifciação: crescimento em Ágar Sangue e em Ágar MacConkey: colônias típicas sem contaminantes. Resultado: Adequado Testes Fenotípicos. Provas Bioquímicas. Especifciação: Oxidase: + (tardia); Pigmento amarelo no TSI; OF-lactose; oxidativo; Lisina: +; Crescimento característico em ágar MacConkey  ;  Glicose: + (oxidativo); Acetamida: +; Esculina: +; Uréia: -; Citrato: +   ; Malonato: +; Triptofano-desaminase: -; Maltose: +     ; Manitol: +; Xilose: +; Rafinose: - ; Sorbitol: -; Sacarose: +;        Inositol: -; Adonitol: -; Gás sulfídrico: -; ONPG: +     ; Ramnose: -; Arabinose: +     ; Arginina: -; Ornitina: -  .  Resultado: Adequado',
            motivoAnalise: 'motivoan'
        },
        'PA249	Candida albicans NEWP 0031 c/ 05 discos	PA - Micro-organ pad': {
            aspecto: 'Líquido alaranjado translúcido.',
            dosagem: ' g/300 mL',
            resultado_analise: 'Cepa de 4ª Geração Teste de Viabilidade. Especificação: Contagem de células viáveis/mL: superior a 100.000 UFC/mL. Resultado: Adequado Teste de pureza. Cultura. Especificação: inoculação em Ágar Sangue e Ágar Sabouraud: colônias típicas. Resultado: Adequado Testes Fenotípicos: Características em cultivo/Microcultivo. Especificação: desenv. de clamidoconídeos. Crescimento em caldo Sabouraud hipertônico: Positivo. Desenv. em ágar cromogênico: colônias verdes características de Candida albicans. Resultado: Adequado Provas bioquímicas. Especificação: Glicose: +; Glicina: -;  Arabinose: -;     Xilose: +; Adonitol: +; Xilitol: +; Galactose: +; 2KG: +; Inositol: -; Sorbitol: +; MDG: +; NAG: +;  Celobiose: -; actose: -; Maltose: +; Sacarose: +; Trealose: +;  Melizitose: -; Rafinose: -. Resultado: Adequado',
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
