import './styles.css'
import emojiFeliz from '../../assets/emoji-feliz.svg'
import emojiNeutro from '../../assets/emoji-neutro.svg'
import emojiTriste from '../../assets/emoji-triste.svg'

export default function Feedback() {
    return (
        <>
        <h3>How satisfied are you with our customer support performance?</h3>
            <div className="feedback">
                <div>
                    <img src={emojiTriste} alt="rosto triste"/>
                    <p>Unhappy</p>
                </div>
                <div>
                    <img src={emojiNeutro} alt="rosto Neutro"/>
                    <p>Neutral</p>
                </div>
                <div>
                    <img src={emojiFeliz} alt="rosto feliz"/>
                    <p>Satisfied</p>
                </div>
            </div>
            <button>Close</button>
        </>
    )
}