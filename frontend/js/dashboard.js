document.addEventListener("DOMContentLoaded", async () => {
    function mostrarNotificacao(mensagem, tipo = 'sucesso') {
      const div = document.createElement('div');
      div.className = `notificacao ${tipo}`;
      div.innerText = mensagem;
      document.body.appendChild(div);
      setTimeout(() => div.remove(), 3000);
    }

    function fazerLogout() {
      mostrarNotificacao("Você saiu da conta.", "sucesso");
      localStorage.removeItem("token");
      setTimeout(() => {
        window.location.href = "index.html";
      }, 1500);
    }

    const token = localStorage.getItem("token");
    if (!token) {
      return fazerLogout();
    }

    function decodificarToken(token) {
      try {
        const payload = JSON.parse(atob(token.split('.')[1]));
        return payload.id;
      } catch {
        return null;
      }
    }
    const idUsuario = decodificarToken(token);
    if (!idUsuario) {
      return fazerLogout();
    }

    try {
      const resposta = await fetch(`http://localhost:3000/api/usuarios/usuarios/${idUsuario}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      if (!resposta.ok) throw new Error();
      const usuario = await resposta.json();

      document.getElementById("nomeUsuario").textContent = usuario.nome;
      document.getElementById("emailUsuario").textContent = usuario.email;
  
    } catch {
      return fazerLogout();
    }

    const formulario = document.getElementById("formAgendamento");
    if (formulario) {
      formulario.addEventListener("submit", async (e) => {
        e.preventDefault();
        const dados = new FormData(formulario);
        try {
          // Corrigindo a URL para a rota correta de agendamentos
          const resposta = await fetch("http://localhost:3000/api/agendamentos", {
            method: "POST",
            headers: { Authorization: `Bearer ${token}` },
            body: dados
          });
          const resultado = await resposta.json();
          if (resposta.ok) {
            mostrarNotificacao("Agendamento criado com sucesso!", "sucesso");
            formulario.reset();
          } else {
            mostrarNotificacao(resultado.mensagem || "Erro ao agendar.", "erro");
          }
        } catch {
          mostrarNotificacao("Erro ao processar o agendamento.", "erro");
        }
      });
    }
  

    const botaoSair = document.getElementById("botaoSair");
    if (botaoSair) {
      botaoSair.addEventListener("click", (e) => {
        e.preventDefault();
        fazerLogout();
      });
    }
  });
