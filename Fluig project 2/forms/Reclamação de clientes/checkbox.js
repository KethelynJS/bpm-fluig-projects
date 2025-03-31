$(document).ready(function () {
    $('input[type="checkbox"]').change(function () {
        let selecionados = [];
        
        // Percorre todos os checkboxes marcados
        $('input[type="checkbox"]:checked').each(function () {
            // Se for "outros", pega também o valor do campo de texto
            if ($(this).attr('name') === 'outros') {
                let descricao = $('#descricao_outros').val().trim();
                if (descricao !== "") {
                    selecionados.push(descricao);
                } else {
                    selecionados.push($(this).val());
                }
            } else {
                selecionados.push($(this).val());
            }
        });

        // Atualiza o campo hidden com os valores separados por vírgula
        $('#natureza_reclamacao').val(selecionados.join(', '));
    });

    // Se o campo "outros" for marcado, força a atualização quando o usuário digitar
    $('#descricao_outros').on('input', function () {
        $('input[name="outros"]').trigger('change');
    });
});
