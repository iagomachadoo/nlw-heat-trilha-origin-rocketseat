/*
const gitHub = 'iagomachadoo';
const instagran = 'iago.machado';
const facebook = 'iago.machado.923'
*/

const linksSocialMedia = {
    gitHub: 'iagomachadoo',
    instagram: 'iago.machado',
    facebook: 'iago.machado.923'
}
/*
function changeSocialMediaLinks(){

    for(let li of socialLinks.children){
        const social = li.getAttribute('class')

        li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`

        alert(li.children[0].href)


    }essa é uma forma simplificada de criar um laço. Nesse caso, estamos pegando os filhos do elemento que tem o id socialLinks (ul) e jogando dentro da variável li

    userName.textContent = 'Olívia'essa simplificação pode ocorrer porque o js entende que toda vez que temos qualquerCoisa.comandoQueAcesseODom esse qualqueCoisa é um elemento do html que tem um id. Isso só funciona para id
}
//changeSocialMediaLinks();
*/

function getGitHubProfileInfos(){

    const url = `https://api.github.com/users/${linksSocialMedia.gitHub}`//guardando a url que acessa o perfil de usuário do github

    fetch(url)
    .then(response => response.json())
    .then(data => {
        userName.textContent = data.name
        userBio.textContent = data.bio
        profilePicture.src = data.avatar_url
        userLogin.textContent = data.login

    })//O fetch() é uma função que vai pegar a resposta da api. Se o processo de pegar a resposta der certo, então essa resposta é joganda dentro da função then() que é uma promise. Dentro da promise é criada uma arraw function que transforma a dado recebido pelo fetch em um json, isso deve ser feito porque o fetch não sabe que o dado que ele pegou na api é um json, para ele é apenas um objeto. Outra contração que o js permite é que quando temos apenas uma coisa a ser feita na função, podemos passá-la sem as {}. O segundo then() está pegando a resposta do fetch transformada em json e jogando dentro da arrow function data


    
}//função para pegar informações de usuário direto do github

getGitHubProfileInfos()

/*Arrow function

Função normal:
    function nomeDaFuncao(argumento){
        bloco de código
    }
    
Arrow function:
    argumento => {
        bloco de código
    }

Arrow function com mais de um argumento: 
    (argumento1, argumento2) => {
        bloco de código
    }

Arrow function sem argumento:
    () => {
        bloco de código
    }
*/
