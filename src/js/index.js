/*
    OBJETIVO - Quando clicarmos na aba temos que mostrar o conteudo da aba
    que foi clicado pelo usuario e esconder o conteudo da aba anterior

    - Passo 1 - Dar um jeito de pegar os elementos que representam as abas no HTML
    - Passo 2 - Dar um jeito de identificar o clique no elemento da aba
    - Passo 3 - Quando o usuario clicar, desmarcar a aba 'selecionado'
    - Passo 4 - Marcar a aba clicada como 'selecionado'
    - Passo 5 - Esconder o conteudo anterior
    - Passo 6 - Mostrar o conteudo da aba 'selecionado'

*/

// - Passo 1 - Dar um jeito de pegar os elementos que representam as abas no HTML
const abas = document.querySelectorAll(".aba");


abas.forEach(aba => {
   // - Passo 2 - Dar um jeito de identificar o clique no elemento da aba
        aba.addEventListener("click", function () {

            if(aba.classList.contains("selecionado")){
                return;
            }

            selecionarAba(aba)
            mostrarInformacoesDaAba(aba);
        });
})

    function selecionarAba(aba) {
// - Passo 3 - Quando o usuario clicar, desmarcar a aba 'selecionado'

    const abaSelecionada = document.querySelector(".aba.selecionado");
    abaSelecionada.classList.remove("selecionado");


// - Passo 4 - Marcar a aba clicada como 'selecionado'
        aba.classList.add('selecionado'); 

    }

    function mostrarInformacoesDaAba(aba){
//- Passo 5 - Esconder o conteudo anterior
        const informacaoSelecionada = document.querySelector(".informacao.selecionado");
        informacaoSelecionada.classList.remove("selecionado");

//- Passo 6 - Mostrar o conteudo da aba 'selecionado'
        const idDoElementoDeInformacoesDaAba = `informacao-${aba.id}`

        const informacaoASerMostrada = document.getElementById(idDoElementoDeInformacoesDaAba)
        informacaoASerMostrada.classList.add("selecionado")
    }
