
function Questao01B () {
    let disciplinas = ['Des.Web', 'Processos de Software','Qualidade de Software','Sistemas Operacionais']

    return (
        <div className="d-flex">
        {disciplinas.map(
            (object) => {
                return (
                    <h1 className="p-2" key={object}>{object}</h1>
                )
            }
        )}
        </div>
    )
}



export default Questao01B;