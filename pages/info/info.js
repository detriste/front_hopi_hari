
    document.getElementById("updateForm").addEventListener("submit", async function (e) {
      e.preventDefault();

      const id = document.getElementById("id").value;
      const first_name = document.getElementById("first_name").value;
      const last_name = document.getElementById("last_name").value;
      const email = document.getElementById("email").value;

      try {
        const response = await fetch(`http://localhost:3000/alterar/${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ first_name, last_name, email }),
        });

        const data = await response.json();

        document.getElementById("resposta").innerText = data.mensagem || data.erro || "Erro desconhecido";
      } catch (error) {
        console.error("Erro ao fazer requisição:", error);
        document.getElementById("resposta").innerText = "Erro ao conectar com o servidor.";
      }
    });