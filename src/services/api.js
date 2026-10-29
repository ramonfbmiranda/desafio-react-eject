const BASE_URL = import.meta.env.VITE_API_URL ?? "http://localhost:3000";

async function requisitar(caminho, opcoes) {
  const resposta = await fetch(`${BASE_URL}${caminho}`, {
    headers: { "Content-Type": "application/json" },
    ...opcoes,
  });
  if (!resposta.ok) throw new Error("Erro ao comunicar com o servidor.");
  return resposta.status === 204 ? null : resposta.json();
}

export const listarLivros = () => requisitar("/livros");
export const buscarLivro = (id) => requisitar(`/livros/${id}`);
export const criarLivro = (dados) =>
  requisitar("/livros", { method: "POST", body: JSON.stringify(dados) });
export const atualizarLivro = (id, dados) =>
  requisitar(`/livros/${id}`, { method: "PUT", body: JSON.stringify(dados) });
export const deletarLivro = (id) =>
  requisitar(`/livros/${id}`, { method: "DELETE" });