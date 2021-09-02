import './styles.css'
import coracao from '../../assets/coracao.svg'

export default function ThanksMessage({close}){
    return(
        <>
            <div>
                <img src={coracao} alt="icone de um coração"/>
                <h3>Thank you, James!</h3>
            </div>
            <p>We’ll use your feedback to improve our customer support performance.</p>
            <div>
                <input placeholder="Write a coment"/>
                <button onClick={close}>Done</button>
            </div>
        </>
    )
}