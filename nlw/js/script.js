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

function changeSocialMediaLinks(){

    for(let li of socialLinks.children){
        const social = li.getAttribute('class')

        li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`

        alert(li.children[0].href)


    }/*essa é uma forma simplificada de criar um laço. Nesse caso, estamos pegando os filhos do elemento que tem o id socialLinks (ul) e jogando dentro da variável li*/

    /*userName.textContent = 'Olívia'essa simplificação pode ocorrer porque o js entende que toda vez que temos qualquerCoisa.comandoQueAcesseODom esse qualqueCoisa é um elemento do html que tem um id. Isso só funciona para id*/
}

changeSocialMediaLinks();