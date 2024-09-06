// Contador para a Tabela 1
let recordIdCounter = 0;

// Função para adicionar uma nova linha à Tabela 1
function addNewRecord() {
    console.log("Adicionando nova linha na Tabela 1");
    const tabela = document.getElementById('tabelaRegistros').getElementsByTagName('tbody')[0];
    const newRow = tabela.insertRow();

    const index = recordIdCounter++; // Incrementa o contador para gerar um ID único
    console.log("Novo index para Tabela 1:", index);

    const cells = [
        `<input type="text" id="codigo_${index}" name="codigo_${index}" class="form-control col-md-3">`,
        `<input type="text" id="lote_${index}" name="lote_${index}" class="form-control col-md-3">`,
        `<input type="text" id="quantidade_${index}" name="quantidade_${index}" class="form-control col-md-2">`,
        `<input type="text" id="datafabricacao_${index}" name="datafabricacao_${index}" class="form-control col-md-2">`,
        `<button type="button" onclick="removeRow(this)"><i class="flaticon flaticon-trash icon-md" aria-hidden="true"></i></button>`
    ];

    cells.forEach((cellHtml, cellIndex) => {
        const newCell = newRow.insertCell(cellIndex);
        newCell.innerHTML = cellHtml;
    });

    saveTableData(); // Salva os dados após adicionar uma nova linha
}

// Função para remover uma linha da Tabela 1
function removeRow(button) {
    console.log("Removendo linha da Tabela 1");
    const row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
    saveTableData(); // Salva os dados após remover uma linha
}

// Função para salvar os dados da Tabela 1
function saveTableData() {
    console.log("Salvando dados da Tabela 1");
    const tabela = document.getElementById('tabelaRegistros').getElementsByTagName('tbody')[0];
    const rows = tabela.rows;
    const data = [];

    for (let i = 0; i < rows.length; i++) {
        const row = rows[i];
        const rowData = {
            codigo: row.cells[0].children[0].value || '',
            lote: row.cells[1].children[0].value || '',
            quantidade: row.cells[2].children[0].value || '',
            datafabricacao: row.cells[3].children[0].value || ''
        };
        console.log("Dados da linha", i, ":", rowData);
        data.push(rowData);
    }

    console.log("Dados salvos para Tabela 1:", JSON.stringify(data));

    // Atualizar o campo hidden com os dados
    document.getElementById('linhaDinamicaDataset').value = JSON.stringify(data);
}

// Função para carregar os dados da Tabela 1
function loadTableData() {
    console.log("Carregando dados da Tabela 1");
    const data = JSON.parse(document.getElementById('linhaDinamicaDataset').value || '[]');
    console.log("Dados carregados para Tabela 1:", data);
    const tabela = document.getElementById('tabelaRegistros').getElementsByTagName('tbody')[0];

    // Limpar a tabela
    tabela.innerHTML = '';
    recordIdCounter = 0; // Resetar IDs

    data.forEach((item, index) => {
        const newRow = tabela.insertRow();

        newRow.insertCell(0).innerHTML = `<input type="text" id="codigo_${index}" name="codigo_${index}" class="form-control col-md-3" value="${item.codigo || ''}">`;
        newRow.insertCell(1).innerHTML = `<input type="text" id="lote_${index}" name="lote_${index}" class="form-control col-md-3" value="${item.lote || ''}">`;
        newRow.insertCell(2).innerHTML = `<input type="text" id="quantidade_${index}" name="quantidade_${index}" class="form-control col-md-2" value="${item.quantidade || ''}">`;
        newRow.insertCell(3).innerHTML = `<input type="text" id="datafabricacao_${index}" name="datafabricacao_${index}" class="form-control col-md-2" value="${item.datafabricacao || ''}">`;
        newRow.insertCell(4).innerHTML = '<button type="button" onclick="removeRow(this)"><i class="flaticon flaticon-trash icon-md" aria-hidden="true"></i></button>';
    });
}

// Adicionar um evento para salvar os dados quando o botão de salvar é clicado
document.getElementById('btnSalvar').addEventListener('click', () => {
    saveTableData(); // Salva os dados quando o botão de salvar é clicado
});

// Carregar os dados da tabela ao iniciar
window.onload = loadTableData;



// ====================================================
// Código para a Tabela 2 (tabelaRegistross)
// ====================================================

// Contador para a Tabela 2
let record2IdCounter = 0;

// Função para adicionar uma nova linha à Tabela 2
function addNewRecord2() {
    console.log("Adicionando nova linha na Tabela 2");
    const tabela = document.getElementById('tabelaRegistross').getElementsByTagName('tbody')[0];
    const newRow = tabela.insertRow();

    const index = record2IdCounter++; // Incrementa o contador para gerar um ID único
    console.log("Novo index para Tabela 2:", index);

    const cells = [
        `<textarea id="causa_${index}" name="causa_${index}" class="form-control textarea-fixed-size col-md-6"></textarea>`,
        `<textarea id="porque_${index}" name="porque_${index}" class="form-control textarea-fixed-size col-md-6"></textarea>`,
        `<button type="button" onclick="removeRow2(this)"><i class="flaticon flaticon-trash icon-xl" aria-hidden="true"></i></button>`
    ];

    cells.forEach((cellHtml, cellIndex) => {
        const newCell = newRow.insertCell(cellIndex);
        newCell.innerHTML = cellHtml;
    });

    saveTableData2(); // Salva os dados após adicionar uma nova linha
}

// Função para remover uma linha da Tabela 2
function removeRow2(button) {
    console.log("Removendo linha da Tabela 2");
    const row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
    saveTableData2(); // Salva os dados após remover uma linha
}

// Função para salvar os dados da Tabela 2
function saveTableData2() {
    console.log("Salvando dados da Tabela 2");
    const tabela = document.getElementById('tabelaRegistross').getElementsByTagName('tbody')[0];
    const rows = tabela.rows;
    const data = [];

    for (let i = 0; i < rows.length; i++) {
        const row = rows[i];
        const rowData = {
            causa: row.cells[0].children[0].value || '',
            porque: row.cells[1].children[0].value || ''
        };
        console.log("Dados da linha", i, ":", rowData);
        data.push(rowData);
    }

    console.log("Dados salvos para Tabela 2:", JSON.stringify(data));

    // Atualizar o campo hidden com os dados
    document.getElementById('tabela2Data').value = JSON.stringify(data);
}

// Função para carregar os dados da Tabela 2
function loadTableData2() {
    console.log("Carregando dados da Tabela 2");
    const data = JSON.parse(document.getElementById('tabela2Data').value || '[]');
    console.log("Dados carregados para Tabela 2:", data);
    const tabela = document.getElementById('tabelaRegistross').getElementsByTagName('tbody')[0];

    // Limpar a tabela
    tabela.innerHTML = '';
    record2IdCounter = 0; // Resetar IDs

    data.forEach((item, index) => {
        const newRow = tabela.insertRow();

        newRow.insertCell(0).innerHTML = `<textarea id="causa_${index}" name="causa_${index}" class="form-control textarea-fixed-size col-md-6" rows="2">${item.causa || ''}</textarea>`;
        newRow.insertCell(1).innerHTML = `<textarea id="porque_${index}" name="porque_${index}" class="form-control textarea-fixed-size col-md-6" rows="2">${item.porque || ''}</textarea>`;
        newRow.insertCell(2).innerHTML = '<button type="button" onclick="removeRow2(this)"><i class="flaticon flaticon-trash icon-xl" aria-hidden="true"></i></button>';
    });
}

// Função para submeter o formulário, salvando os dados das tabelas
function submitForm() {
    console.log("Submetendo formulário");
    saveTableData(); // Salva os dados da Tabela 1
    saveTableData2(); // Salva os dados da Tabela 2
    console.log("Formulário submetido com dados salvos");
    document.getElementById('meuFormulario').submit();
}

// Carregar os dados quando a página for carregada
document.addEventListener('DOMContentLoaded', () => {
    loadTableData();  // Carregar dados da Tabela 1
    loadTableData2(); // Carregar dados da Tabela 2
});



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