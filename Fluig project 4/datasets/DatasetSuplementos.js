function defineStructure() {
    addColumn('Resp');
    addColumn('Resp4');
    addColumn('Respk');
    addColumn('Respp1');
    addColumn('aprovado');
    addColumn('aspecto');
    addColumn('bacteriana');
    addColumn('companyid');
    addColumn('data_final_esterilidade');
    addColumn('data_final_microbiologico');
    addColumn('data_inicio_esterilidade');
    addColumn('datacalendario');
    addColumn('datainicio2');
    addColumn('estufa');
    addColumn('infoText1');
    addColumn('itens');
    addColumn('linhaDinamicaDataset');
    addColumn('lote');
    addColumn('metadata#active');
    addColumn('opcao');
    addColumn('prioridade');
    addColumn('respc');
    addColumn('numeroSolicitacao');
    addColumn('lote_dos_reagentes');

}

function onSync(lastSyncDate) {}

function createDataset(fields, constraints, sortFields) {
    var colunas = [
        'Resp', 'Resp4', 'Respk', 'Respp1', 'aprovado', 'aspecto', 'bacteriana', 'companyid',
        'data_final_esterilidade', 'data_final_microbiologico', 'data_inicio_esterilidade',
        'datacalendario', 'datainicio2', 'estufa', 'infoText1', 'itens', 'linhaDinamicaDataset',
        'lote', 'metadata#active', 'opcao', 'prioridade', 'respc', 'numeroSolicitacao', 'lote_dos_reagentes'
    ];

    // Obtém os dados do dataset original
    var dataset = DatasetFactory.getDataset('DSRegistrodeanalises-meiodeculturasuplementos', colunas, constraints, null);

    // Criar novo dataset com a formatação desejada
    var newDataset = DatasetBuilder.newDataset();

    // Adiciona as colunas ao novo dataset
    for (var i = 0; i < colunas.length; i++) {
        newDataset.addColumn(colunas[i]);
    }

    // Função para formatar a data no padrão brasileiro
    function formatDate(dateStr) {
        try {
            var date = new java.text.SimpleDateFormat("yyyy-MM-dd'T'HH:mm").parse(dateStr);
            return new java.text.SimpleDateFormat("dd/MM/yyyy HH:mm").format(date);
        } catch (e) {
            return dateStr; // Retorna o valor original se houver erro
        }
    }

    // Processa os registros do dataset original
    for (var i = 0; i < dataset.rowsCount; i++) {
        var row = [];

        for (var j = 0; j < colunas.length; j++) {
            var valor = dataset.getValue(i, colunas[j]);

            // Verifica e formata as datas nas colunas de data
            if (colunas[j] === 'data_inicio_esterilidade' || 
                colunas[j] === 'data_final_esterilidade' || 
                colunas[j] === 'data_final_microbiologico' || 
                colunas[j] === 'datainicio2') {
                valor = formatDate(valor);
            }

            // Verifica se a coluna "linhaDinamicaDataset" contém JSON e formata corretamente
            if (colunas[j] === 'linhaDinamicaDataset' && valor && valor.startsWith('[') && valor.endsWith(']')) {
                try {
                    var jsonData = JSON.parse(valor);
                    var formattedData = [];
                    
                    for (var k = 0; k < jsonData.length; k++) {
                        if (jsonData[k].codigo && jsonData[k].lote) {
                            formattedData.push("[Código: " + jsonData[k].codigo + ", Lote: " + jsonData[k].lote + "]"); 
                        }
                    }

                    row.push(formattedData.join(', ')); // Junta os valores formatados
                } catch (e) {
                    row.push(valor); // Mantém o valor original se houver erro na conversão
                }
            } else {
                row.push(valor);
            }
        }

        // Adiciona a linha formatada ao novo dataset
        newDataset.addRow(row);
    }

    return newDataset;
}

function onMobileSync(user) {}
