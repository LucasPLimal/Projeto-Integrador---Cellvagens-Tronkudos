(function () {
    var modal = document.getElementById('videoModal');
    if (!modal) return;

    var iframe = modal.querySelector('iframe');
    if (!iframe) return;

    // Guarda o src original (para restaurar quando o modal for reaberto).
    // Usamos data-src no HTML para evitar carregar o vídeo automaticamente ao carregar a página.
    var originalSrc = iframe.getAttribute('data-src') || '';

    // Restaura o src ao abrir o modal (caso tenha sido limpo ao fechar)
    modal.addEventListener('show.bs.modal', function () {
        if (!iframe.getAttribute('src')) {
            iframe.setAttribute('src', originalSrc);
        }
    });

    // Remove o src ao fechar o modal — isto interrompe imediatamente a reprodução
    modal.addEventListener('hidden.bs.modal', function () {
        iframe.setAttribute('src', '');
    });
})();