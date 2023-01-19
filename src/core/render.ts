import Block from "./Block";

export function render(query: string, block: Block) {
  const root = document.querySelector(query);
  if (!root) {
    return;
  }
  root.innerHTML = "";
  root.appendChild(block.getContent());
  block.dispatchComponentDidMount();
  return root;
}
