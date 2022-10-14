let title = document.div.getElementByClass('logo');

let rump = function textChange() {
    title.innerHTML = 'Hello, World';
}

title.onclick = rump;

title.addEventListener('click', rump);

