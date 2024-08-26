function defineStructure() {
    addColumn("id"); // Adicione uma coluna chave única
    addColumn("codigo");
    addColumn("lote");
    addColumn("quantidade");
    addColumn("datafabricacao");
    addColumn("datavalidade");
    setKey(["id"]); // Defina a coluna chave primária
}

function onSync(lastSyncDate) {
    // Não é necessário implementar para esta solução
}

function createDataset(fields, constraints, sortFields) {
    var dataset = DatasetBuilder.newDataset();
    dataset.addColumn("id"); // Adicione a coluna chave
    dataset.addColumn("codigo");
    dataset.addColumn("lote");
    dataset.addColumn("quantidade");
    dataset.addColumn("datafabricacao");
    dataset.addColumn("datavalidade");

    // Simulando alguns dados para o exemplo
    dataset.addRow(["1", "123", "ABCD", "10", "2023-01-01", "2024-01-01"]);
    dataset.addRow(["2", "456", "EFGH", "20", "2023-02-01", "2024-02-01"]);

    return dataset;
}

function onMobileSync(user) {
    // Não é necessário implementar para esta solução
}
