
import { IColaborador } from '../../shered/interfaces/IColaborador'
import './Colaborador.css'

interface ColaboradorProps {
    colaborador: IColaborador
    corDeFundo : string 
}

const Colaborador = ({ corDeFundo, colaborador } : ColaboradorProps) => {
    return (<div className='colaborador'>
        <div className='cabecalho' style={{ backgroundColor: corDeFundo }}>
            <div className='divImg'>
            <img src={colaborador.imagem} alt={colaborador.nome}/>
            </div>
        </div>
        <div className='rodape'>
            <h4>{colaborador.nome}</h4>
            <h5>{colaborador.cargo}</h5>
        </div>
    </div>)
}

export default Colaborador
