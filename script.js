document.addEventListener('DOMContentLoaded', function () {
    let click_btn_encriptar = document.getElementById('btn-encriptar');
    let click_btn_desencriptar = document.getElementById('btn-desencriptar');
    let click_btn_copiar = document.getElementById('btn-copiar');
    let input = document.getElementById('mensagem')

    let textarea = document.getElementById('textarea')
    // let click_btn_copiar = document.getElementById('btn-copiar');

    click_btn_encriptar.addEventListener('click', function () {
        encriptar(textarea.value)
    })

    click_btn_desencriptar.addEventListener("click", function () {

        desencriptar(textarea.value)
    })

    click_btn_copiar.addEventListener("click", function () {
        
        textarea.value = input.value
        input.value = "";
    })

    function encriptar(string) {

        string = string.toLowerCase()

        const main = string.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g,"ufat");

        let msg = document.getElementById('mensagem')
        msg.value = main;

        textarea.value = "";

    }

    function desencriptar(string) {
        

        string = string.toLowerCase()

        const duo = string.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g,"u");

        let msg = document.getElementById('mensagem')
        msg.value = duo;

        textarea.value = "";
    }
})


