window.onload = function () {
	const preElements = document.querySelectorAll("pre");
	preElements.forEach((preElement) => {
	  const copyButton = document.createElement('button');
	  copyButton.textContent = 'copy';
	  copyButton.classList.add('copy-button');
	  copyButton.onclick = function() {
		copy(copyButton);
	  };
	  preElement.insertBefore(copyButton, preElement.firstChild);
	});
  };

  function copy(button) {
	const codeBlock = button.parentNode.querySelector('.highlight code');
	const selection = window.getSelection();
	const range = document.createRange();
	range.selectNodeContents(codeBlock);
	selection.removeAllRanges();
	selection.addRange(range);
	const code = selection.toString();
	selection.removeAllRanges();
	navigator.clipboard.writeText(code).then(() => {
	  button.innerText = 'copied!';
	}, () => {
	  button.innerText = 'failed to copy';
	}).finally(() => {
	  setTimeout(() => {
		button.innerText = 'copy';
	  }, 1000);
	});
  }