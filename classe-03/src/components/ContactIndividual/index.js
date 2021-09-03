import './styles.css'
import chatIcon from '../../assets/icone-chat.svg'

export default function ContactIndividual({img, nome, local}) {
    return(
        <div className="contact-card">
            <img 
                className="contact-img"
                src={img} alt={`Foto de perfil de ${nome}`}
            />
            <div>
                <h3>{nome}</h3>
                <p>{local}</p>
            </div>
            <img id="chat-icon" src={chatIcon} alt="icone de chat"/>
        </div>
    );
}