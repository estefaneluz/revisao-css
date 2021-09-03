import './styles.css'
import chatIcon from '../../assets/icone-chat.svg'

export default function ContactIndividual({img, nome, local}) {
    return(
        <div>
            <img src={img} alt={`Foto de perfil de ${nome}`}/>
            <div>
                <h3>{nome}</h3>
                <p>{local}</p>
            </div>
            <img src={chatIcon} alt="icone de chat"/>
        </div>
    );
}