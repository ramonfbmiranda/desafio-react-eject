// DADOS DA API QUE VAI BUSCAR LIVROS PELO ISBN (IDENTIFICAÇÃO DE LIVROS) E CONECTAR NO SISTEMA

const GOOGLE_BOOKS = "https://www.googleapis.com/books/v1/volumes";

export const limparIsbn = (valor = "") => valor.replace(/[^0-9Xx]/g, "");

const isbnValido = (isbn) => isbn.length === 10 || isbn.length === 13;

// Capa pela Open Library. Com default=false, capa inexistente dá 404 (e não imagem em branco).
export const capaOpenLibrary = (isbn) =>
  `https://covers.openlibrary.org/b/isbn/${limparIsbn(isbn)}-L.jpg?default=false`;

// Usa a capa salva; se não houver, tenta pelo ISBN
export function urlCapa(livro) {
  if (livro.capaUrl) return livro.capaUrl;
  if (livro.isbn) return capaOpenLibrary(livro.isbn);
  return "";
}

export async function buscarPorIsbn(valor) {
  const isbn = limparIsbn(valor);
  if (!isbnValido(isbn)) return null;

  const chave = import.meta.env.VITE_GOOGLE_BOOKS_KEY;
  const url = `${GOOGLE_BOOKS}?q=isbn:${isbn}&maxResults=1${chave ? `&key=${chave}` : ""}`;

  const resposta = await fetch(url);
  if (!resposta.ok) throw new Error("Falha ao consultar o Google Books.");

  const dados = await resposta.json();
  const info = dados.items?.[0]?.volumeInfo;
  if (!info) return null; // livro não existe no catálogo

  return {
    isbn,
    titulo: info.title ?? "",
    autor: info.authors?.join(", ") ?? "",
    ano: parseInt(info.publishedDate) || "",
    paginas: info.pageCount || "",
    editora: info.publisher ?? "",
    resumo: (info.description ?? "").replace(/<[^>]*>/g, ""),
    capaUrl: info.imageLinks?.thumbnail?.replace("http://", "https://") ?? "",
  };
}