
const grupoInicial = document.getElementById('grupo-inicial');
var primeiroGrupo = document.querySelector('.grupos');
const addGrupoButton = document.getElementById('add-grupo');
const addItemButton = document.getElementById('add-item');
const nomeNovoGrupoInput = document.getElementById('nome-novo-grupo');
const nomeNovoItemInput = document.getElementById('nome-novo-item');
let grupos = document.querySelectorAll(".grupo");
let itens = document.querySelectorAll('.item');
const contextMenu = document.getElementById('contextMenu');
let itemAtual = 5;

itens.forEach((item) => {
  item.addEventListener('contextmenu', (event) => {
    event.preventDefault(); // Evita menu padrão do navegador

    // Calcula a posição do menu de contexto
    const x = event.clientX + window.scrollX;
    const y = event.clientY + window.scrollY;

    contextMenu.style.left = x + 'px';
    contextMenu.style.top = y + 'px';
    contextMenu.style.display = 'block';

    // Adicione event listeners para os itens do menu aqui...
  });
});

// Fechar menu ao clicar fora
document.addEventListener('click', (event) => {
  if (!contextMenu.contains(event.target)) {
    contextMenu.style.display = 'none';
    editForm.classList.add('hidden');
  }
});

// Fechar menu com tecla Escape
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    contextMenu.style.display = 'none';
    editForm.classList.add('hidden');
  }
});


//ao iniciar o arrastar (clica e segura)
document.addEventListener("dragstart", (e) => {
  e.target.classList.add("dragging");
});

//ao terminar o arrastar (solta o objeto)
document.addEventListener("dragend", (e) => {
  e.target.classList.remove("dragging");
});
    
function createGrupoElement(grupoNome) {
  const iptNome = document.getElementById('nome-novo-grupo');
  const grupo = document.createElement('div');
  const kanban = document.getElementById('kanban');
  grupo.classList.add('grupo'); // Adiciona a classe "grupo" ao elemento
  grupo.addEventListener("dragover", (e) => {
    const dragging = document.querySelector(".dragging");
    const applyAfter = getNewPosition(grupo, e.clientY);

    if (applyAfter) {
      applyAfter.insertAdjacentElement("afterend", dragging);
    } else {
      grupo.prepend(dragging);
    }
  });

  const tituloGrupo = document.createElement('div');
  tituloGrupo.classList.add('titulo-grupo');

  const textoTitulo = document.createElement('h1');
  textoTitulo.textContent = grupoNome;
  tituloGrupo.appendChild(textoTitulo);
  tituloGrupo.appendChild(grupo);

  kanban.appendChild(tituloGrupo);
  iptNome.value = "";
  return grupo;
}

addGrupoButton.addEventListener('click', () => {
  const grupoNome = nomeNovoGrupoInput.value;
  const grupo = createGrupoElement(grupoNome);
  // Adicionando os event listeners para dragstart e dragend
  grupo.addEventListener("dragstart", (e) => {
    e.target.classList.add("dragging");
  });

  grupo.addEventListener("dragend", (e) => {
    e.target.classList.remove("dragging");
  });

  primeiroGrupo.append(grupo);
  console.log(primeiroGrupo);
});


function createItemElement(itemName) {
  const iptNome = document.getElementById('nome-novo-item');
  const grupoInicial = grupos[0];
  const item = document.createElement('div');
  item.classList.add('item');
  item.textContent = itemName || 'Novo Item';
  item.setAttribute('draggable', 'true');
  item.id = "item-"+ ++itemAtual;
  console.log(item.id);

  item.addEventListener('contextmenu', (event) => {
    event.preventDefault(); // Evita menu padrão do navegador

    // Calcula a posição do menu de contexto
    const x = event.clientX + window.scrollX;
    const y = event.clientY + window.scrollY;

    contextMenu.style.left = x + 'px';
    contextMenu.style.top = y + 'px';
    contextMenu.style.display = 'block';

  });


  grupoInicial.appendChild(item);
  iptNome.value = itemName;
  return item;
}

addItemButton.addEventListener('click', () => {
  const itemName = nomeNovoItemInput.value;
  const novoItem = createItemElement(itemName);

  grupoInicial.appendChild(novoItem);

  nomeNovoItemInput.value = ''; // Limpa o campo após criar o item
});

grupos.forEach((item) => {
  item.addEventListener("dragover", (e) => {
    const dragging = document.querySelector(".dragging");
    const applyAfter = getNewPosition(item, e.clientY);

    if (applyAfter) {
      applyAfter.insertAdjacentElement("afterend", dragging);
    } else {
      item.prepend(dragging);
    }
  });
});

//Retorna a posição
function getNewPosition(grupo, posY) {
  const cards = grupo.querySelectorAll(".item:not(.dragging)");
  let result;

  for (let refer_card of cards) {
    const box = refer_card.getBoundingClientRect();
    const boxCenterY = box.y + box.height / 2;

    if (posY >= boxCenterY) result = refer_card;
  }

  return result;
}
