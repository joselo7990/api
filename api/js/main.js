let cantidadDeUsuarios = 0;

fetch('https://reqres.in/api/users')
    .then((response) => response.json())
    .then((data) => mostrarUsuarios(data.data))
    .error((error) => console.log(error));


function mostrarUsuarios(usuario) {
    let body = document.getElementById('data').innerHTML;

    for (let i = 0; i < usuario.length; i++) {
        body += `<div class="user-data" >
        <img src="${usuario[i].avatar}" alt="" srcset="">
        <h3>${usuario[i].first_name} ${usuario[i].last_name}</h3>
    </div>`;
        cantidadDeUsuarios += 1;

    }
    document.getElementById('data').innerHTML = body;
}


function doFunction() {

    fetch(`https://reqres.in/api/users/${cantidadDeUsuarios+1}`)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            console.log([data.data]);
            mostrarUsuarios(
                [data.data]);

        })
        .catch(function(error) {
            console.log(error);
        });
};