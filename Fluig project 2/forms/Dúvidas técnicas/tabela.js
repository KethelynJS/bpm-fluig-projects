//Gerar IDs únicos para a Tabela 3
let record3IdCounter = 1; // Começa com 1 para corresponder ao exemplo HTML

// Função para adicionar uma nova linha à Tabela 3 (tabelaRegistros3)
function addNewRecord3() {
    console.log("Adicionando nova linha na Tabela 3");
    const tabela = document.getElementById('tabelaRegistros3').getElementsByTagName('tbody')[0];
    const newRow = tabela.insertRow();

    const index = record3IdCounter++; // Incrementa o contador para gerar um ID único
    console.log("Novo index para Tabela 3:", index);

    const cells = [
        `<textarea name="what_c${index}" class="form-control textarea-fixed-size" rows="2"></textarea>`,
        `<textarea name="when_c${index}" class="form-control textarea-fixed-size" rows="2"></textarea>`,
        `<textarea name="who_c${index}" class="form-control textarea-fixed-size" rows="2"></textarea>`,
        `<input type="text" name="solicitacaoFluig_c${index}" class="form-control textarea-fixed-size" style="height: 50px;">`
    ];

    cells.forEach((cellHtml, cellIndex) => {
        const newCell = newRow.insertCell(cellIndex);
        newCell.innerHTML = cellHtml;
    });

    saveTableData3();
}



// Função para salvar os dados da Tabela 3
function saveTableData3() {
    console.log("Salvando dados da Tabela 3");
    const tabela = document.getElementById('tabelaRegistros3').getElementsByTagName('tbody')[0];
    const rows = tabela.rows;
    const data = [];

    for (let i = 0; i < rows.length; i++) {
        const row = rows[i];
        const rowData = {
            what: row.cells[0].children[0].value || '',
            when: row.cells[1].children[0].value || '',
            who: row.cells[2].children[0].value || '',
            solicitacaoFluig: row.cells[3].children[0].value || ''
        };
        console.log("Dados da linha", i, ":", rowData);
        data.push(rowData);
    }

    console.log("Dados salvos para Tabela 3:", JSON.stringify(data));

    // Atualizar o campo hidden com os dados
    document.getElementById('linhaDinamicaDataset3').value = JSON.stringify(data);
}

// Função para carregar os dados da Tabela 3
function loadTableData3() {
    console.log("Carregando dados da Tabela 3");
    const data = JSON.parse(document.getElementById('linhaDinamicaDataset3').value || '[]');
    console.log("Dados carregados para Tabela 3:", data);
    const tabela = document.getElementById('tabelaRegistros3').getElementsByTagName('tbody')[0];

    // Limpar a tabela
    tabela.innerHTML = '';
    record3IdCounter = 1; // Resetar IDs para começar a partir de 1

    data.forEach((item, index) => {
        const newRow = tabela.insertRow();

        newRow.insertCell(0).innerHTML = `<textarea name="what_c${index + 1}" class="form-control textarea-fixed-size" rows="2">${item.what || ''}</textarea>`;
        newRow.insertCell(1).innerHTML = `<textarea name="when_c${index + 1}" class="form-control textarea-fixed-size" rows="2">${item.when || ''}</textarea>`;
        newRow.insertCell(2).innerHTML = `<textarea name="who_c${index + 1}" class="form-control textarea-fixed-size" rows="2">${item.who || ''}</textarea>`;
        newRow.insertCell(3).innerHTML = `<input type="text" name="solicitacaoFluig_c${index + 1}" class="form-control textarea-fixed-size" style="height: 50px;" value="${item.solicitacaoFluig || ''}">`;
    });

    
}

// Função para salvar todas as tabelas (incluindo Tabela 3)
function saveAllTables3() {
    saveTableData3(); // Salva os dados da Tabela 3
    // Adicione chamadas para salvar outras tabelas se necessário
    console.log("Todos os dados das tabelas foram salvos.");
}

// Carregar os dados quando a página for carregada
document.addEventListener('DOMContentLoaded', function() {
    console.log("Página carregada, carregando dados da Tabela 3");
    loadTableData3(); // Carrega os dados da Tabela 3
    console.log("Dados da Tabela 3 carregados");
});


//Gerar IDs únicos para a Tabela 4
let record4IdCounter = 1; // Começa com 1 para a Tabela 4

// Função para adicionar uma nova linha à Tabela 4 (tabelaRegistros4)
function addNewRecord4() {
    console.log("Adicionando nova linha na Tabela 4");
    const tabela = document.getElementById('tabelaRegistros4').getElementsByTagName('tbody')[0];
    const newRow = tabela.insertRow();

    const index = record4IdCounter++; // Incrementa o contador para gerar um ID único
    console.log("Novo index para Tabela 4:", index);

    const cells = [
        `<textarea name="what_d${index}" class="form-control textarea-fixed-size" rows="2"></textarea>`,
        `<textarea name="when_d${index}" class="form-control textarea-fixed-size" rows="2"></textarea>`,
        `<textarea name="who_d${index}" class="form-control textarea-fixed-size" rows="2"></textarea>`,
        `<input type="text" name="solicitacaoFluig_d${index}" class="form-control textarea-fixed-size" style="height: 50px;">`
    ];

    cells.forEach((cellHtml, cellIndex) => {
        const newCell = newRow.insertCell(cellIndex);
        newCell.innerHTML = cellHtml;
    });

    saveTableData4();
}

// Função para salvar os dados da Tabela 4
function saveTableData4() {
    console.log("Salvando dados da Tabela 4");
    const tabela = document.getElementById('tabelaRegistros4').getElementsByTagName('tbody')[0];
    const rows = tabela.rows;
    const data = [];

    for (let i = 0; i < rows.length; i++) {
        const row = rows[i];
        const rowData = {
            what: row.cells[0].children[0].value || '',
            when: row.cells[1].children[0].value || '',
            who: row.cells[2].children[0].value || '',
            solicitacaoFluig: row.cells[3].children[0].value || ''
        };
        console.log("Dados da linha", i, ":", rowData);
        data.push(rowData);
    }

    console.log("Dados salvos para Tabela 4:", JSON.stringify(data));

    // Atualizar o campo hidden com os dados
    document.getElementById('linhaDinamicaDataset4').value = JSON.stringify(data);
}

// Função para carregar os dados da Tabela 4
function loadTableData4() {
    console.log("Carregando dados da Tabela 4");
    const data = JSON.parse(document.getElementById('linhaDinamicaDataset4').value || '[]');
    console.log("Dados carregados para Tabela 4:", data);
    const tabela = document.getElementById('tabelaRegistros4').getElementsByTagName('tbody')[0];

    // Limpar a tabela
    tabela.innerHTML = '';
    record4IdCounter = 1; // Resetar IDs para começar a partir de 1

    data.forEach((item, index) => {
        const newRow = tabela.insertRow();

        newRow.insertCell(0).innerHTML = `<textarea name="what_d${index + 1}" class="form-control textarea-fixed-size" rows="2">${item.what || ''}</textarea>`;
        newRow.insertCell(1).innerHTML = `<textarea name="when_d${index + 1}" class="form-control textarea-fixed-size" rows="2">${item.when || ''}</textarea>`;
        newRow.insertCell(2).innerHTML = `<textarea name="who_d${index + 1}" class="form-control textarea-fixed-size" rows="2">${item.who || ''}</textarea>`;
        newRow.insertCell(3).innerHTML = `<input type="text" name="solicitacaoFluig_d${index + 1}" class="form-control textarea-fixed-size" style="height: 50px;" value="${item.solicitacaoFluig || ''}">`;
    });
}

// Função para salvar todas as tabelas (incluindo Tabela 4)
function saveAllTables4() {
    saveTableData4(); // Salva os dados da Tabela 4
    // Adicione chamadas para salvar outras tabelas se necessário
    console.log("Todos os dados das tabelas foram salvos.");
}

// Carregar os dados quando a página for carregada
document.addEventListener('DOMContentLoaded', function() {
    console.log("Página carregada, carregando dados da Tabela 4");
    loadTableData4(); // Carrega os dados da Tabela 4
    console.log("Dados da Tabela 4 carregados");
});

