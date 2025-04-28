const question1 = `
    <h3>Qual a diferença entre == e === em JavaScript?</h3>
    <ol>
        <li>Nenhuma</li>
        <li>== compara valores e tipos</li>
        <li id="correct">=== compara valores e tipos</li> <!-- Adicionando o id 'correct' -->
        <li>== é para booleanos apenas</li>
    </ol>
`;

const question2 = `
    <h3>O que const impede?</h3>
    <ol>
        <li id="correct">Reatribuição da variável</li> <!-- Adicionando o id 'correct' -->
        <li>Mutação de objetos internos</li>
        <li>Uso dentro de funções</li>
        <li>Uso de números</li>
    </ol>
`;

const question3 = `
    <h3>Qual o valor de typeof NaN?</h3>
    <ol>
        <li id="correct">undefined</li> <!-- Adicionando o id 'correct' -->
        <li>NaN</li>
        <li>number</li>
        <li>null</li>
    </ol>
`;

const question4 = `
    <h3>Qual dessas funções é uma arrow function válida?</h3>
    <ol>
        <li id="correct">const soma = (a, b) => a + b;</li> <!-- Adicionando o id 'correct' -->
        <li>function => soma(a, b) { return a + b; }</li>
        <li>soma => (a + b) =></li>
        <li>const soma => a + b;</li>
    </ol>
`;

const question5 = `
    <h3>Qual método é usado para transformar uma string em número inteiro?</h3>
    <ol>
        <li>Number.string()</li>
        <li id="correct">parseInt()</li> <!-- Adicionando o id 'correct' -->
        <li>stringToInt()</li>
        <li>Math.floorString()</li>
    </ol>
`;

const question6 = `
    <h3>Como podemos declarar uma função tradicional em JavaScript?</h3>
    <ol>
        <li>const function = () => {}</li>
        <li>func() = {}</li>
        <li id="correct">function minhaFuncao() {}</li> <!-- Adicionando o id 'correct' -->
        <li>declare function() {}</li>
    </ol>
`;

const question7 = `
    <h3>O que o método addEventListener faz?</h3>
    <ol>
        <li>Remove eventos de um elemento</li>
        <li>Adiciona um elemento ao DOM</li>
        <li id="correct">Adiciona um ouvinte de evento a um elemento</li> <!-- Adicionando o id 'correct' -->
        <li>Inicia uma função automaticamente</li>
    </ol>
`;

const question8 = `
    <h3>Qual desses valores é considerado "falsy" em JavaScript?</h3>
    <ol>
        <li>42</li>
        <li id="correct">""</li> <!-- Adicionando o id 'correct' -->
        <li>{}</li>
        <li>[]</li>
    </ol>
`;


let perguntasRespondidas = [];
let i = 0;

function toggleQuestions() {
    const perguntas = [question1, question2, question3, question4, question5, question6, question7, question8];

    const perguntasNaoRespondidas = perguntas.filter((pergunta, index) => !perguntasRespondidas.includes(index));

    if (perguntasNaoRespondidas.length === 0) {
        alert("Você respondeu todas as perguntas! Você acertou: " + i + " perguntas!");
        return;
    }

    const escolhido = Math.floor(Math.random() * perguntasNaoRespondidas.length);
    const perguntaEscolhida = perguntasNaoRespondidas[escolhido];

    const container = document.querySelector("main .container");
    container.innerHTML = perguntaEscolhida;

    perguntasRespondidas.push(perguntas.indexOf(perguntaEscolhida));

    const opcoes = document.querySelectorAll("ol li");

    opcoes.forEach((li) => {
        li.addEventListener('click', () => {
            
            const parentOl = li.parentNode;

            if (parentOl.id !== 'used') {
                parentOl.id = 'used';

                const block = document.createElement('div');
                block.classList.add('block');
                container.appendChild(block);

                if (li.id === 'correct') {
                    li.style.background = 'green';
                    i++;
                } else {
                    li.style.background = 'red';
                    const correctAnswer = parentOl.querySelector('#correct');
                    correctAnswer.style.background = 'green';
                }

                setTimeout(() => {
                    toggleQuestions();
                }, 2000);
            }
        });
    });
}

toggleQuestions();



