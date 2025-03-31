// Gerar IDs únicos para a Tabela 3
let record3IdCounter = 1; // Começa com 1 para corresponder ao exemplo HTML

// Função para adicionar uma nova linha à Tabela 3 (tabelaRegistros3)
function addNewRecord3() {
    console.log("Adicionando nova linha na Tabela 3");
    const tabela = document.getElementById('tabelaRegistros3').getElementsByTagName('tbody')[0];
    const newRow = tabela.insertRow();

    const index = record3IdCounter++; // Incrementa o contador para gerar um ID único
    console.log("Novo index para Tabela 3:", index);

    const cells = [
        `<textarea name="codigo_descricao_c${index}" class="form-control" rows="2" placeholder="Digite o código e a descrição"></textarea>`,
        `<input type="text" name="lote_c${index}" class="form-control" placeholder="Digite o lote">`,
        `<input type="date" name="validade_c${index}" class="form-control">`, // Campo de data adicionado
        `<input type="text" name="quantidade_c${index}" class="form-control" placeholder="Digite a quantidade">`,
        `<input type="text" name="nf_origem_c${index}" class="form-control" placeholder="Digite a NF">`,
        `<button type="button" onclick="removeRow5(this)"><i class="flaticon flaticon-trash icon-md" aria-hidden="true"></i></button>`
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
            codigo_descricao: row.cells[0].children[0].value || '',
            lote: row.cells[1].children[0].value || '',
            validade: row.cells[2].children[0].value || '', // Adicionando o novo campo de data à estrutura de dados
            quantidade: row.cells[3].children[0].value || '',
            nf_origem: row.cells[4].children[0].value || ''
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

        newRow.insertCell(0).innerHTML = `<textarea name="codigo_descricao_c${index + 1}" class="form-control" rows="2" placeholder="Digite o código e a descrição">${item.codigo_descricao || ''}</textarea>`;
        newRow.insertCell(1).innerHTML = `<input type="text" name="lote_c${index + 1}" class="form-control" placeholder="Digite o lote" value="${item.lote || ''}">`;
        newRow.insertCell(2).innerHTML = `<input type="date" name="validade_c${index + 1}" class="form-control" value="${item.validade || ''}">`; // Campo de data carregado
        newRow.insertCell(3).innerHTML = `<input type="text" name="quantidade_c${index + 1}" class="form-control" placeholder="Digite a quantidade" value="${item.quantidade || ''}">`;
        newRow.insertCell(4).innerHTML = `<input type="text" name="nf_origem_c${index + 1}" class="form-control" placeholder="Digite a NF" value="${item.nf_origem || ''}">`;
        newRow.insertCell(5).innerHTML = '<button type="button" onclick="removeRow5(this)"><i class="flaticon flaticon-trash icon-md" aria-hidden="true"></i></button>';
    });
}

// Função para salvar todas as tabelas (incluindo Tabela 3)
function saveAllTables3() {
    saveTableData3(); // Salva os dados da Tabela 3
    console.log("Todos os dados das tabelas foram salvos.");
}

// Carregar os dados quando a página for carregada
document.addEventListener('DOMContentLoaded', function() {
    console.log("Página carregada, carregando dados da Tabela 3");
    loadTableData3(); // Carrega os dados da Tabela 3
    console.log("Dados da Tabela 3 carregados");
});

function removeRow5(button) {
    const row = button.closest('tr'); // Encontra a linha do botão
    row.remove(); // Remove a linha da tabela
    saveTableData3(); // Salva os dados atualizados
}
