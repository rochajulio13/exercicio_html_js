const form = document.getElementById('formdeposito');

const campoA = document.getElementById('campo-a');
const campoB = document.getElementById('campo-b');

const menssagenSucesso = "Sua operação foi realizada com sucesso";
const menssagenDeErro = "sua operação não foi realizada";

const containerMensagemDeError = document.querySelector('.error-message');
const containerMensagemDeSucesso = document.querySelector('.success-message');

form.addEventListener('submit', function(e) { 
    e.preventDefault(); 

    const  a = campoA.value;
    const  b = campoB.value;

    campoB.value = "";
    campoA.value = "";

    let validarcampo = a < b;
    
    if(validarcampo){
        
        
        containerMensagemDeSucesso.innerHTML = menssagenSucesso;
        containerMensagemDeSucesso.style.display = 'block';

        return menssagenSucesso;
    } else {
        containerMensagemDeError.innerHTML = menssagenDeErro;
        containerMensagemDeError.style.display = 'block';
        campoB.style.border = '1px solid red'
        
        return menssagenDeErro;
    }})

    form.addEventListener('keyup', function(e){
        console.log(e.target.value);
        validarCampo = (e.target.value);
        

        if (validarCampo) {
            campoB.classList.add('error');
            document.querySelector('.error-message').style.display = 'block';
        }

            else {
                campoB.classList.remove('error');
                document.querySelector('.error-message').style.display = 'none';
            }
        });

