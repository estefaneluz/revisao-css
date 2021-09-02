import './styles.css'
import fechar from '../../assets/botao-fechar.svg'

export default function Modal({children, close}) {
    return (
        <div className="card">
            <img
                onClick={close} 
                id="fechar" 
                src={fechar} 
                alt="icone de fechar"/>
            {children}
        </div>
    )
}