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
                "skills":["Scrum","Project","Office","Gestão de Equipe"]
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
    
    res.innerHTML += `
    <table border="1" class="border-1 mt-3" >
        <tr>
            <td class="pr-2 pl-2">
                <p class="font-weight-bold">NOME</p>
            </td>
            <td class="pr-2 pl-2" >
                <p class="font-weight-bold">SKILLS</p>
            </td>
        </tr>
    </table>`
    
}
