function defineStructure() {
    
}

function onSync(lastSyncDate) {
    
}

function createDataset(fields, constraints, sortFields) {
    var dataset = DatasetBuilder.newDataset();
    
    // Define e adiciona apenas as colunas desejadas
    dataset.addColumn("solicitante");
    dataset.addColumn("finalidade");

    // Obtenha os dados do dataset original para a versão específica
    var versaoDesejada = "2000";
    var datasetDSSolicitacaodepagamento = DatasetFactory.getDataset("DSSolicitacaodepagamento", null, null, null);

    // Filtra as linhas da versão desejada e adiciona ao novo dataset somente as colunas necessárias
    for (var i = 0; i < datasetDSSolicitacaodepagamento.rowsCount; i++) {
    	var filtroVersao = DatasetFactory.createConstraint("version", "%2000%", "%2000%", ConstraintType.MUST);
        
        // Verifica se a versão é a desejada antes de adicionar ao novo dataset
        if (versao === versaoDesejada) {
            var solicitante = datasetDSSolicitacaodepagamento.getValue(i, "solicitante");
            var finalidade = datasetDSSolicitacaodepagamento.getValue(i, "finalidade");
            
            // Adiciona apenas as colunas solicitante e finalidade para a versão correta
            dataset.addRow([solicitante, finalidade]);
        }
    }
    
    return datasetDSSolicitacaodepagamento;
}

function onMobileSync(user) {
    
}
