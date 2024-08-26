window.onload = function() {
    // Obtém a data atual
    var today = new Date();
    var day = String(today.getDate()).padStart(2, '0');
    var month = String(today.getMonth() + 1).padStart(2, '0'); // Janeiro é 0!
    var year = today.getFullYear();
    var formattedDate = year + '-' + month + '-' + day;

    // Lista de IDs dos campos de data
    var dateFields = [
        'datacalendario', 
        'datacalendario2', 
        'datacalendario3', 
        'datacalendario4', 
        'datacalendario6', 
        'dataConclusao', 
        'dataConclusao1', 
        'dataConclusao2'
    ];

    // Preenche todos os campos de data com a data atual
    dateFields.forEach(function(fieldId) {
        var field = document.getElementsByName(fieldId)[0];
        if (field) {
            field.value = formattedDate;
        }
    });
};



