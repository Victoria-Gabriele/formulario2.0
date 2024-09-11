document.addEventListener('DOMContentLoaded', () =>{
document.getElementById('meuformulario').addEventListener('submit', async (event) => { 
   event.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const resultDiv = document.getElementById('formresultado');

    resultDiv.innerHTML = 'Enviando Dados...';
    
    try {
        //Simula uma chamada de AP para enviar os dados
        await fakeApiCall ({nome, email});
        resultDiv.innerHTML = 'Dados enviados com sucesso!';
        } catch (error) {
        resultDiv.innerHTML = `Erro: $(error.message)`;
    }
});
//Função para simular uma chamada de API
function fakeApiCall(retorno) {
    return new Promise((resolve, reject) => {
        setTimeout (() => {
            if (retorno.nome && retorno.email) {
                resolve('Dados enviados');
            } else {
                reject(new Error('Dados inválidos'));
            }
        }, 4000);
        });
    }
})
