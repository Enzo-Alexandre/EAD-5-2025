document.addEventListener("DOMContentLoaded", () => {
    const usuariosArray = [];
    const form = document.getElementById("userForm");
    const listaUsuarios = document.getElementById("listausers");
    
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        adicionarUsuario();
    });
    
    function adicionarUsuario() {
        const nome = document.getElementById("nomeUsuario").value.trim();
        const email = document.getElementById("emailUsuario").value.trim();
        const senha = document.getElementById("senhaUsuario").value.trim();
        const palavraChave = document.getElementById("palavraChave").value.trim();
        const foto = document.getElementById("fotoUsuario").files[0];

        if (!nome || !email || !senha || !palavraChave || !foto) {
            alert("Preencha todos os campos!");
            return;
        }

        const usuario = { nome, email, senha, palavraChave, fotoURL: URL.createObjectURL(foto) };
        usuariosArray.push(usuario);
        atualizarListaUsuarios();
        form.reset();
    }

    function removerUsuario(email) {
        const index = usuariosArray.findIndex(user => user.email === email);
        if (index !== -1) {
            usuariosArray.splice(index, 1);
            atualizarListaUsuarios();
        }
    }

    function atualizarListaUsuarios() {
        listaUsuarios.innerHTML = "";
        usuariosArray.forEach(user => {
            const li = document.createElement("li");
            li.innerHTML = `
                <img src="${user.fotoURL}" alt="Foto de ${user.nome}" width="50" height="50" style="border-radius:50%"> 
                ${user.nome} - ${user.email} 
                <button onclick='removerUsuario("${user.email}")'>Remover</button>
            `;
            listaUsuarios.appendChild(li);
        });
    }

    document.getElementById("navigateBtn").addEventListener("click", () => {
        window.location.href = "contato.html";
    });
});
