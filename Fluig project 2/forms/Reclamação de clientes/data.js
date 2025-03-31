document.addEventListener('DOMContentLoaded', function() {
  // Função para definir a data atual no campo de data
  function setCurrentDate() {
    const dateField = document.getElementById('datacalendario');
    const today = new Date().toISOString().split('T')[0];
    dateField.value = today;
  }

  // Chama a função para definir a data quando a página é carregada
  setCurrentDate();
});
