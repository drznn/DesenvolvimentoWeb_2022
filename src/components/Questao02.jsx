import { useState } from 'react'

function Questao02() {

    const [numero1, setNumero1] = useState();
    const [numero2, setNumero2] = useState();
    const [resultado, setResultado] = useState(0);


    return (
        <div>
            <div className='d-block p-4'>
                <input type="text" className="form-control" style={{width:'150px'}}
                    placeholder='Numero 1'
                    onChange={
                        (event) => {
                            setNumero1(parseInt(event.target.value))
                        }
                    }
                />
                <input
                    type="text" className="form-control" style={{width:'150px'}}
                    placeholder='Numero 2'
                    onChange={
                        (event) => {
                            setNumero2(parseInt(event.target.value))
                        }
                    }
                />
            </div>
            <div class="d-flex p-4">
                <button className='btn btn-primary m-2'
                    type='button'
                    value='+'
                    onClick={
                        (event) => {
                            setResultado(numero1 + numero2)
                        }
                    }
                >+</button>
                <button className='btn btn-primary m-2'
                    type='button'
                    value='-'
                    onClick={
                        (event) => {
                            setResultado(numero1 - numero2)
                        }
                    }
                >-</button>
                <button className='btn btn-primary m-2'
                    type='button'
                    value='*'
                    onClick={
                        (event) => {
                            setResultado(numero1 * numero2)
                        }
                    }
                >*</button>
                <button className='btn btn-primary m-2'
                    type='button'
                    value='/'
                    onClick={
                        (event) => {
                            setResultado(numero1 / numero2)
                        }
                    }
                >/</button>
            </div>
            <h3>Resultado : {resultado}</h3>
        </div>
    )
}

export default Questao02;