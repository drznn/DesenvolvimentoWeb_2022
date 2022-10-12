
function Questao01B () {
    let disciplinas = ['Des.Web', 'Processos de Software','Qualidade de Software','Sistemas Operacionais']

    return (
        disciplinas.map(
            (object) => {
                return (
                    <h1 key={object}>{object}</h1>
                )
            }
        )
    )
}



export default Questao01B;