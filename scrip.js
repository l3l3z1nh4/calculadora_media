const form =  document.getElementById ('formAtividade');
let linhas = ''
const aprovadoImg = '<img src="/images/aprovado.png" alt="emoji festejando">'
const reprovadoImg = '<img src="/images/reprovado.png" alt="emoji triste">'
const atividades = []
const notas = []
const spanAprovado ='<span id="aprovado" class="resultado" >APROVADO</span>'
const spanReprovado = '<span id="reprovado" class="resultado" >REPROVADO</span>'
const notaMinima = parseFloat(prompt('Média miníma:'))

form.addEventListener ('submit', function(e){
    e.preventDefault();

    addLinha()
    atualizaTabela()
    atualizaMedia()
})

function addLinha (){
    const inputNomeAtividade = document.getElementById('nome-atividade');
    const inputNotaAtividade = document.getElementById('nota-atividade');

    if (atividades.includes(inputNomeAtividade.value)){
        alert (`A atividade "${inputNomeAtividade.value}" já foi inserida`)
    } else {
        atividades.push(inputNomeAtividade.value)
        notas.push (parseFloat(inputNotaAtividade.value))
    
        let linha = '<tr>';
        linha += `<td>${inputNomeAtividade.value}</td>`
        linha += `<td>${inputNotaAtividade.value}</td>`
        linha += `<td>${inputNotaAtividade.value >= notaMinima? aprovadoImg :reprovadoImg }</td>`;
        linha += '</tr>'
    
        linhas += linha
    }

    inputNomeAtividade.value = ''
    inputNotaAtividade.value = ''
}

function atualizaTabela (){
    const corpoTabela = document.querySelector ('tbody');
    corpoTabela.innerHTML = linhas
}

function atualizaMedia(){
    const media = calculaMedia()
    document.getElementById('mediaFinalValor').innerHTML = media
    document.getElementById('mediaFinalResultado').innerHTML = media >= notaMinima ? spanAprovado: spanReprovado;
}

function calculaMedia(){
    let somaNotas = 0
    for (let i=0; i< notas.length; i++){
        somaNotas += notas[i]
    }
    return somaNotas/notas.length
}

