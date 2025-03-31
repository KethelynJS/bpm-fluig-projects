const pessoas = [
  { nome: 'Adriel Oliveira', cargo: 'Gerente de Compras' },
  { nome: 'Bárbara', cargo: 'Diretora Executiva' },
  { nome: 'Fernando Barrachina Stocco', cargo: 'Gerente Controle de Qualidade' },
  { nome: 'Gisieli', cargo: 'Assistente Administrativo ' },
  { nome: 'Jean', cargo: 'Gerente de Logistica' },
  { nome: 'Juliano Bison', cargo: 'Gerente Comercial' },
  { nome: 'Luci', cargo: 'Gerente de Gestão de Pessoas' },
  { nome: 'Maikon Aurélio de Oliveira', cargo: 'Gerente TI' },
  { nome: 'Marat', cargo: 'Gerente de Produção' },
  { nome: 'Renata Carvalho Albano', cargo: 'Gerente da Garantia da Qualidade' },
  { nome: 'Elori Mieko Oikawa', cargo: 'Supervisora da produção' },
  { nome: 'Luiz Paulo Zelinski', cargo: 'Analista de PCP' },
  { nome: 'Viviane Mohr Gonçalves', cargo: 'Supervisora Comercial' },
  { nome: 'Maria Luíza Miozzo', cargo: 'Analista de PCM' },
  { nome: 'Robison Barrozo', cargo: 'Gerente de logistica' },
  { nome: 'Ana Paula Santos Bastos', cargo: '' },
  { nome: 'Marcia Fernandes', cargo: '' },
  { nome: 'João Vitor Rodrigues de Sousa', cargo: '' },
  { nome: 'Joseane Bueno de Oliveira', cargo: '' },
  { nome: 'Maria Fernanda Morais da Silva de Alenca', cargo: '' },
  { nome: 'Marcos Fabio Grandi', cargo: '' },
  { nome: 'Carla Marcolina Miranda Ramoso', cargo: '' },
  { nome: 'Caroline Dias Batista ', cargo: '' },
  { nome: 'Gesicka Valeria Quequoni de O', cargo: '' },
  { nome: 'Ismael da Costa Silva', cargo: '' },
  { nome: 'Evilin Eduarda Ferreira da Silva', cargo: '' },
  { nome: 'Lilda Dias Batista', cargo: '' },
  { nome: 'Raimunda Rosiene da S. Alves	', cargo: '' },
  { nome: 'Viviane Rodrigues dos Santos', cargo: '' },
  { nome: 'Miriam Ferreira do Nascimento', cargo: '' },
  { nome: 'Harrinson Josue R. Quevedo', cargo: '' },
  { nome: 'Veronica Marques Cunha', cargo: '' },
  { nome: 'Aleteia da Costa', cargo: '' },
  { nome: 'Andrieli Cristiane David Plasdo ', cargo: '' },
  { nome: 'Paulo Vinicius Martins	', cargo: '' },
  { nome: 'Noemi T. de Almeida Ferreira', cargo: '' },
  { nome: 'Eliana Schwenchk Mariano de Amorim	', cargo: '' },
  { nome: 'João Vitor da Silva	', cargo: '' },
  { nome: 'Julio Cesar do Nascimento		', cargo: '' },
  { nome: 'Leila Cristina P. de Oliveira		', cargo: '' },
  { nome: 'Lucas Franco Soares', cargo: '' },
  { nome: 'Cladiel Aparecido Albinos	', cargo: '' },
  { nome: 'Eliana Schwenchk Mariano de Amorim	', cargo: '' },
  { nome: 'Gladiel Aparecido Albino	', cargo: '' },
  { nome: 'Cristian Luciano Lopes	', cargo: '' },
  { nome: 'Raquel da Silva	', cargo: '' },
  { nome: 'Willian Sanches', cargo: '' },
  { nome: 'Ana Lúcia Aires Monteiro', cargo: '' },
  
  
  // Adicione mais pessoas conforme necessário
];

const input = document.getElementById('nome-input');
const suggestionsList = document.getElementById('suggestions-list');
const selectedNamesContainer = document.getElementById('selected-names');
let selectedNames = [];

// Filtra os nomes que começam com as letras digitadas
function filterSuggestions(query) {
  return pessoas.filter(pessoa => 
    pessoa.nome.toLowerCase().startsWith(query.toLowerCase())
  );
}

// Atualiza a lista de sugestões
function updateSuggestions() {
  const query = input.value;
  const filtered = filterSuggestions(query);
  suggestionsList.innerHTML = '';

  if (query) {
    filtered.forEach(pessoa => {
      const listItem = document.createElement('li');
      listItem.textContent = `${pessoa.nome} - ${pessoa.cargo}`;
      listItem.addEventListener('click', () => addName(pessoa));
      suggestionsList.appendChild(listItem);
    });
  }
}

// Adiciona o nome selecionado à lista de selecionados
function addName(pessoa) {
  if (!selectedNames.some(p => p.nome === pessoa.nome)) {
    selectedNames.push(pessoa);
    displaySelectedNames();
    input.value = '';
    suggestionsList.innerHTML = '';
    saveNames();
  }
}

// Exibe os nomes selecionados
function displaySelectedNames() {
  selectedNamesContainer.innerHTML = '';
  selectedNames.forEach(pessoa => {
    const nameDiv = document.createElement('div');
    nameDiv.classList.add('selected-name');
    nameDiv.innerHTML = `<span>${pessoa.nome}</span> - ${pessoa.cargo} <span class="remove-btn" data-nome="${pessoa.nome}">x</span>`;
    selectedNamesContainer.appendChild(nameDiv);
  });
}

// Remove o nome selecionado
selectedNamesContainer.addEventListener('click', (e) => {
  if (e.target.classList.contains('remove-btn')) {
    const nomeToRemove = e.target.getAttribute('data-nome');
    selectedNames = selectedNames.filter(pessoa => pessoa.nome !== nomeToRemove);
    displaySelectedNames();
    saveNames();
  }
});

// Salva os nomes selecionados em um campo oculto
function saveNames() {
  document.getElementById('nomesData').value = JSON.stringify(selectedNames);
  console.log("Nomes salvos:", document.getElementById('nomesData').value);
}

// Escuta as entradas no campo de texto para exibir sugestões
input.addEventListener('input', updateSuggestions);

// Carrega nomes salvos ao carregar a página (caso necessário)
document.addEventListener('DOMContentLoaded', () => {
  const nomesSalvos = JSON.parse(document.getElementById('nomesData').value || '[]');
  if (nomesSalvos.length > 0) {
    selectedNames = nomesSalvos;
    displaySelectedNames();
  }
});
