import { useState } from 'react'

function Questao02() {

    const [numero1, setNumero1] = useState();
    const [numero2, setNumero2] = useState();
    const [resultado, setResultado] = useState(0);


    return (
        <div>
            <input
                type='text'
                placeholder='Numero 1'
                onChange={
                    (event) => {
                        setNumero1(parseInt(event.target.value))
                    }
                }
            />
            <input
                type='text'
                placeholder='Numero 2'
                onChange={
                    (event) => {
                        setNumero2(parseInt(event.target.value))
                    }
                }
            />

            <input
                type='button'
                value='+'
                onClick={
                    (event) => {
                        setResultado(numero1+numero2)
                    }
                }
            />
            <input
                type='button'
                value='-'
                onClick={
                    (event) => {
                        setResultado(numero1-numero2)
                    }
                }
            />
            <input
                type='button'
                value='*'
                onClick={
                    (event) => {
                        setResultado(numero1*numero2)
                    }
                }
            />
            <input
                type='button'
                value='/'
                onClick={
                    (event) => {
                        setResultado(numero1/numero2)
                    }
                }
            />
        <h3>Resultado : {resultado}</h3>
        </div>
    )
}

export default Questao02;