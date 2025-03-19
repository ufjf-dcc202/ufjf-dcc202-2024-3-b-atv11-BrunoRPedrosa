const lista = ["Um", "Dois", "Três"];
export function getLista() {
  return window.structuredClone(lista);
}
export function limpaLista() {
  lista.splice(0);
}
export function adicionaNaLista(novoItem) {
  lista.push(novoItem);
}
export function removeDaLista(pos) {
  lista.splice(pos, 1);
}
