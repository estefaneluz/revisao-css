import './styles.css'
import userImg from '../../assets/jenny.png'
import design01 from '../../assets/design1.png'
import design02 from '../../assets/design2.png'
import design03 from '../../assets/design3.png'
import followImg from '../../assets/icone-usuario.svg'

export default function SmallCard() {
    return(
        <div className='card small-card'>
            <div className="user-info">
                <img className="user-img" src={userImg}/>
                <div>
                    <h2>Jenny Molla</h2>
                    <p>UX Designer</p>
                </div>
                <button className="btn-dark">
                    <img src={followImg}/>
                    Seguir
                </button>
            </div>
            <div className='design-container'>
                <img src={design01}/>
                <img src={design02}/>
                <img src={design03}/>
            </div>
        </div>
    )
}