function gerar(){
    // PARA NÃO GERAR VARIAS TABELAS
    table1.innerHTML = ' '
    table2.innerHTML = ' '
    
    // JSON FUNCIONÁRIOS
    var tabela = {
        "funcionarios":[
            {
                "nome":"João da Silva", 
                "skills":["Java","PHP","Javascript","React"]
            },
            {
                "nome":"Renata Souza",
                "skills":["Python","Angular"]
            },
            {
                "nome":"Rodrigo Campos",
                "skills":["Scrum", "Project", "Office","Gestão de Equipe"]
            },
            {
                "nome":"Tarcisio Moura",
                "skills":["ShellScript","Linux","Apache","Segurança"]
            },
            {
                "nome":"Joselito Marmita",
                "skills":[
                    "Manutenção de PC","Cabeamento","Configuração"]
            },
            {
                "nome":"Fernando Pessoa",
                "skills":["Mídias Sociais","Marketing","Design"]
            }
        ]
    }
    
    // RESPOSTA DOS TITULOS
    table1.innerHTML += 
    `<tr>
        <th class="align-middle h5">
            <p class="font-weight-bold">NOME</p>
        </th>
        <th class="align-middle h5">
            <p class="font-weight-bold">SKILLS</p>
        </th>
    </tr>
    `
    
    // RESPOSTA DAS INFORMAÇÕES
    var nSkills 
    for (var i = 0; i < tabela.funcionarios.length; i++) {
        nSkills = tabela.funcionarios[i].skills.length
        table2.innerHTML += `
        <tr>
            <td class="align-middle bg-secondary text-white" rowspan="${nSkills+1}">
                <h4 class="text-center"> ${tabela.funcionarios[i].nome} </h4>
            </td> 
                `
                for (var i2 = 0; i2 < nSkills; i2++){
                    table2.innerHTML += `
                    <td class=" bg-light">
                        ${tabela.funcionarios[i].skills[i2]}
                    </td>
                    `
                }
        table2.innerHTML += `</tr>`
    }
}