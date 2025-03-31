function createDataset(fields, constraints, sortFields) {
    var dataset = DatasetBuilder.newDataset();

    dataset.addColumn("email");

    // Exemplo: Adicionando e-mails manualmente
    dataset.addRow(["suporteti@newprov.com.br"]);
    dataset.addRow(["email2@exemplo.com"]);
    dataset.addRow(["email3@exemplo.com"]);
    
    return dataset;
}
