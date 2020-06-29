function gerar(){
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
                "skills":["Scrum", "Project", "Office", "Gestão de Equipe"]
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

    table1.innerHTML += 
    `<tr>
        <th class="h3">
            <p class="font-weight-bold">NOME</p>
        </th>
        <th class="h3">
            <p class="font-weight-bold">SKILLS</p>
        </th>
    </tr>
    `

    for (let i = 0; i < tabela.funcionarios.length; i++) {
        table2.innerHTML += `
            <tr>
                <th class="pr-2 pl-2 lead">
                    ${tabela.funcionarios[i].nome}
                </th>
                <th class="pr-2 pl-2 lead">
                    ${tabela.funcionarios[i].skills}&nbsp&nbsp
                </th>
            </tr> `
    }
}
