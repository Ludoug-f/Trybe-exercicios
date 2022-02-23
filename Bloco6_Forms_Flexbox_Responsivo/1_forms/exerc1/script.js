function enviarForm(event) {
    event.preventDefault();
}

function limparForm() {
    const infos = document.querySelectorAll('input');
    const textArea = document.querySelector('textarea');
    for (let index = 0; index < infos.length; index += 1) {
        const valores = infos[index];
        valores.value = '';
        valores.checked = false;
    }
    textArea.value = '';
}

window.onload = function () {
    const clearBtn = document.querySelector('#clear-btn');
    clearBtn.addEventListener('click', limparForm);
    const submitBtn = document.querySelector('#submit-btn');
    submitBtn.addEventListener('click', enviarForm);
  };