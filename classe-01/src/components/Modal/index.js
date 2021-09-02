import './styles.css'
import fechar from '../../assets/botao-fechar.svg'

export default function Modal({children}) {
    return (
        <div className="card">
            <img id="fechar" src={fechar} alt="icone de fechar"/>
            {children}
        </div>
    )
}