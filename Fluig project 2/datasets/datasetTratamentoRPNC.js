function defineStructure() {
    addColumn("data_inicio");
    addColumn("numeroSolicitacao");
    addColumn("setor_responsavel");
    addColumn("natureza_desvio");
    addColumn("data_ocorrencia");
    addColumn("tipo_nao_conformidade");
    addColumn("setor_responsavel_investigacao");
    addColumn("conclusao");
    addColumn("codigo");
    addColumn("lote");
    addColumn("quantidade");
    addColumn("datafabricacao");
    addColumn("companyid");
    addColumn("metadata#active");
}

function onSync(lastSyncDate) {}

function createDataset(fields, constraints, sortFields) {
    var constraintsList = [];

    // Filtros necessários
    constraintsList.push(DatasetFactory.createConstraint("companyid", getValue("WKCompany"), getValue("WKCompany"), ConstraintType.MUST));
    constraintsList.push(DatasetFactory.createConstraint("metadata#active", "true", "true", ConstraintType.MUST));

    var colunas = [
        "data_inicio", "numeroSolicitacao", "setor_responsavel", "natureza_desvio",
        "data_ocorrencia", "tipo_nao_conformidade", "setor_responsavel_investigacao", "conclusao",
        "linhaDinamicaDataset", "companyid", "metadata#active"
    ];

    var datasetOriginal = DatasetFactory.getDataset("DSFormulariodeRegistrodeRPNC", colunas, constraintsList, null);

    var dataset = DatasetBuilder.newDataset();
    dataset.addColumn("data_inicio");
    dataset.addColumn("numeroSolicitacao");
    dataset.addColumn("setor_responsavel");
    dataset.addColumn("natureza_desvio");
    dataset.addColumn("data_ocorrencia");
    dataset.addColumn("tipo_nao_conformidade");
    dataset.addColumn("setor_responsavel_investigacao");
    dataset.addColumn("conclusao");
    dataset.addColumn("codigo");
    dataset.addColumn("lote");
    dataset.addColumn("quantidade");
    dataset.addColumn("datafabricacao");
    dataset.addColumn("companyid");
    dataset.addColumn("metadata#active");

    for (var i = 0; i < datasetOriginal.rowsCount; i++) {
        var data_inicio = datasetOriginal.getValue(i, "data_inicio") || "";
        var numeroSolicitacao = datasetOriginal.getValue(i, "numeroSolicitacao") || "";
        var setor_responsavel = datasetOriginal.getValue(i, "setor_responsavel") || "";
        var natureza_desvio = datasetOriginal.getValue(i, "natureza_desvio") || "";
        var data_ocorrencia = datasetOriginal.getValue(i, "data_ocorrencia") || "";
        var tipo_nao_conformidade = datasetOriginal.getValue(i, "tipo_nao_conformidade") || "";
        var setor_responsavel_investigacao = datasetOriginal.getValue(i, "setor_responsavel_investigacao") || "";
        var conclusao = datasetOriginal.getValue(i, "conclusao") || "";
        var linhaDinamicaDataset = datasetOriginal.getValue(i, "linhaDinamicaDataset") || "";
        var companyid = datasetOriginal.getValue(i, "companyid") || "";
        var metadata_active = datasetOriginal.getValue(i, "metadata#active") || "";

        if (linhaDinamicaDataset) {
            try {
                var itens = JSON.parse(linhaDinamicaDataset);
                for (var j = 0; j < itens.length; j++) {
                    dataset.addRow([
                        data_inicio,
                        numeroSolicitacao,
                        setor_responsavel,
                        natureza_desvio,
                        data_ocorrencia,
                        tipo_nao_conformidade,
                        setor_responsavel_investigacao,
                        conclusao,
                        itens[j].codigo ? itens[j].codigo.replace(/[|;]/g, "") : "",
                        itens[j].lote ? itens[j].lote.replace(/[|;]/g, "") : "",
                        itens[j].quantidade ? itens[j].quantidade.replace(/[|;]/g, "") : "",
                        itens[j].datafabricacao ? itens[j].datafabricacao.replace(/[|;]/g, "") : "",
                        companyid,
                        metadata_active
                    ]);
                }
            } catch (e) {
                log.error("Erro ao converter JSON do campo linhaDinamicaDataset: " + e);
            }
        } else {
            dataset.addRow([
                data_inicio,
                numeroSolicitacao,
                setor_responsavel,
                natureza_desvio,
                data_ocorrencia,
                tipo_nao_conformidade,
                setor_responsavel_investigacao,
                conclusao,
                "",
                "",
                "",
                "",
                companyid,
                metadata_active
            ]);
        }
    }

    return dataset;
}

function onMobileSync(user) {}
