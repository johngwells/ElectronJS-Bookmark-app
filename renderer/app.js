// This file is required by the index.html file and will
// be executed in the renderer process for that window.

const { ipcRenderer } = require('electron');
const items = require('./items');

// All of the Node.js APIs are available in this process.
let showModal = document.getElementById('show-modal');
let closeModal = document.getElementById('close-modal');
let modal = document.getElementById('modal');
let addItem = document.getElementById('add-item');
let itemUrl = document.getElementById('url');

// disable & enable modal buttons
const toggleModalButtons = () => {
  // check state of buttons
  if (addItem.disabled === true) {
    addItem.disabled = false;
    addItem.style.opacity = 1;
    addItem.innerHTML = 'Add Item';
    closeModal.style.display = 'inline';
  } else {
    addItem.disabled = true;
    addItem.style.opacity = 0.5;
    addItem.innerHTML = 'Adding';
    closeModal.style.display = 'none';
  }
};

showModal.addEventListener('click', e => {
  modal.style.display = 'flex';
  itemUrl.focus();
});

closeModal.addEventListener('click', e => {
  modal.style.display = 'none';
});

addItem.addEventListener('click', e => {
  if (itemUrl.value) {
    // send new item url to main process
    ipcRenderer.send('new-item', itemUrl.value);

    // Disable buttons
    toggleModalButtons();
  }
});

// Listen for new item for main process
ipcRenderer.on('new-item-success', (e, newItem) => {
  // Add new item to 'items' node
  items.addItem(newItem, true);

  // Enable buttons
  toggleModalButtons();

  // Hide modal and clear value
  modal.style.display = 'none';
  itemUrl.value = '';
});

itemUrl.addEventListener('keyup', e => {
  if (e.key === 'Enter') {
    addItem.click();
  }
});
