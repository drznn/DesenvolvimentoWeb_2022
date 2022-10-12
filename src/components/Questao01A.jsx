function Questao01A() {
    let aluno = ['André', 'Albuquerque ',' Engenharia de Software ']

    return (
        <div className="d-flex">
        {aluno.map(
            (object) => {
                return (
        
                    <h1 className="p-2" key={object}>{object}</h1>
                )
            }
        )}
        </div>
    )

}

export default Questao01A;