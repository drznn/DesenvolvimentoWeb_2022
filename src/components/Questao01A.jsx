function Questao01A() {
    let aluno = ['André', 'Albuquerque ',' Engenharia de Software ']

    return (
        aluno.map(
            (object) => {
                return (
                    <h1 key={object}>{object}</h1>
                )
            }
        )
    )

}

export default Questao01A;