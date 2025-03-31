function defineStructure() {
    addColumn("datacalendario");
    addColumn("numeroSolicitacao");
    addColumn("nome_empresa");
    addColumn("categoria");
    addColumn("natureza_reclamacao");
    addColumn("n_nota");
    addColumn("vendedor_representante");
    addColumn("linhaDinamicaDataset3");
    addColumn("conclusao1");
    addColumn("companyid");
    addColumn("metadata#active");
}

function onSync(lastSyncDate) {}

function createDataset(fields, constraints, sortFields) {
    var colunas = [
        "datacalendario", "numeroSolicitacao", "nome_empresa", "categoria", "natureza_reclamacao",
        "n_nota", "vendedor_representante", "conclusao1", "linhaDinamicaDataset3", "companyid", "metadata#active"
    ];

    // Obtém os dados do dataset original
    var dataset = DatasetFactory.getDataset('DSFormulariodeReclamacaodeclientese-ouDuvidasTecnicas', colunas, constraints, null);

    // Cria novo dataset com a estrutura desejada
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

            // Verifica se a coluna "linhaDinamicaDataset3" contém JSON
            if (colunas[j] === 'linhaDinamicaDataset3' && valor) {
                try {
                    var jsonData = JSON.parse(valor);
                    var formattedData = [];

                    // Verifica se há dados válidos em 'what', 'when', 'who', 'solicitacaoFluig'
                    for (var k = 0; k < jsonData.length; k++) {
                        if (jsonData[k].what && jsonData[k].when && jsonData[k].who && jsonData[k].solicitacaoFluig) {
                            formattedData.push(
                                "[Código: " + jsonData[k].what + 
                                ", Nome do Produto: " + jsonData[k].when + 
                                ", Lote: " + jsonData[k].who + 
                                ", Quantidade Reclamada: " + jsonData[k].solicitacaoFluig + "]"
                            ); 
                        }
                    }

                    row.push(formattedData.join(', ')); // Junta os valores formatados
                } catch (e) {
                    row.push("Erro ao processar dados"); // Em caso de erro, adiciona uma mensagem de erro
                }
            } else {
                row.push(valor); // Para as outras colunas, apenas adiciona o valor original
            }
        }

        newDataset.addRow(row); // Adiciona a linha formatada ao novo dataset
    }

    return newDataset;
}

function onMobileSync(user) {}
