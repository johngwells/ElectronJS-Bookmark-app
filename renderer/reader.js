// Create a button in remote content to mark item as done
let readitClose = document.createElement('div');
readitClose.innerText = 'Done';

// Style button
readitClose.style.display= 'flex';
readitClose.style.bottom = '15px';
readitClose.style.right = '15px';
readitClose.style.padding = '5px 10px';
readitClose.style.fontSize = '20px';
readitClose.style.fontWeight = 'bold';
readitClose.style.background = 'salmon';
readitClose.style.color = 'white';
readitClose.style.borderRadius = '5px';
readitClose.style.cursor = 'default';
readitClose.style.boxShadow = '2px 2px 2px rgba(0,0,0,0.2)';
readitClose.style.zIndex = '9999';

// Attach click handler
readitClose.onclick = e => {
  alert('Done with item')
}

// Append button * Either option below works;
document.getElementsByTagName('body')[0].appendChild(readitClose);
