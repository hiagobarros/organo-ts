import { IColaborador } from '../../shered/interfaces/IColaborador'
import Colaborador from '../Colaborador'
import './Time.css'
import React from 'react';

interface TimeProps {
    corPrimaria : string
    corSecundaria : string
    nome : string
    colaboradores : IColaborador[]
}

const Time = ({colaboradores, corPrimaria, corSecundaria, nome}:TimeProps) => {
    const css = { backgroundColor: corSecundaria }

    return (
        (colaboradores.length > 0) ? <section className='time' style={css}>
            <h3 style={{ borderColor: corPrimaria }}>{nome}</h3>
            <div className='colaboradores'>
                {colaboradores.map( colaborador => <Colaborador corDeFundo={corPrimaria} key={colaborador.nome} colaborador={colaborador}/> )}
            </div>
        </section> 
        : <React.Fragment/>
    )
}

export default Time