for (var i = 0; i < 5; i++) {
  const button = document.createElement('button');
  button.innerHTML = `Button number ${i}`;
  button.onclick = function () {
    alert(`Button number ${i}`);
  }
  document.body.appendChild(button);
}