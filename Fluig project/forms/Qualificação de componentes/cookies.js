document.addEventListener('DOMContentLoaded', function() {
    function setCookie(name, value, days) {
        let expires = "";
        if (days) {
            let date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + encodeURIComponent(value || "") + expires + "; path=/; Secure; SameSite=None";
    }

    function getCookie(name) {
        let nameEQ = name + "=";
        let ca = document.cookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i].trim();
            if (c.indexOf(nameEQ) === 0) return decodeURIComponent(c.substring(nameEQ.length, c.length));
        }
        return null;
    }

    function toggleCampos(id, cookieName) {
        let checkbox = document.getElementById(id);
        let target = document.getElementById(cookieName);

        if (checkbox && target) {
            target.style.display = checkbox.checked ? 'block' : 'none';
            setCookie(cookieName, checkbox.checked, 7);
        }
    }

    function restoreVisibility() {
        setTimeout(() => {  // Atraso para evitar conflitos no Fluig
            let toggles = [
                { id: 'analiseMicroN', target: 'camposAdicionais' },
                { id: 'lotePilotoS', target: 'motivoLotePiloto' },
                { id: 'lotePilotoN', target: 'qualificacaoCampos' },
                { id: 'analiseAdicionalN', target: 'camposAdicionais2' },
                { id: 'lotePiloto2S', target: 'motivoLotePiloto2' },
                { id: 'lotePiloto2N', target: 'qualificacaoCampos2' },
                { id: 'qualificado3', target: 'observacoesContainer' },
                { id: 'analiseMicroN1', target: 'qualificacaoSection' },
                { id: 'qualificado1', target: 'observacoesSAP1' }
            ];

            toggles.forEach(t => {
                let element = document.getElementById(t.target);
                if (element) element.style.display = getCookie(t.target) === 'true' ? 'block' : 'none';
            });
        }, 500); // Ajuste o tempo se necessário
    }

    restoreVisibility();
});
