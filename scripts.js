document.addEventListener('DOMContentLoaded', () => {
    fetch('musicas.json')
        .then(response => response.json())
        .then(data => {
            const listaMusicas = document.getElementById('lista-musicas');
            data.musicas.forEach(musica => {
                const li = document.createElement('li');
                li.innerHTML = `<span>${musica.artista}</span> - ${musica.titulo}`;
                listaMusicas.appendChild(li);
            });
        })
        .catch(error => console.error('Erro ao carregar a lista de músicas:', error));
});
