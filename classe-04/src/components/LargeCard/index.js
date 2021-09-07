import './styles.css'

import userImg from '../../assets/jenny.png'
import design04 from '../../assets/design4.png'
import design05 from '../../assets/design5.png'
import design06 from '../../assets/design6.png'
import followImg from '../../assets/icone-usuario-dark.svg'


export default function LargeCard() {
    return(
        <div className="card large-card">
            <div className="user-info">
                <img className="user-img" src={userImg}/>
                <div>
                    <h2>Usuário</h2>
                    <p>UX Designer</p>
                    <button className="btn-white">
                        <img src={followImg}/> 
                        Seguindo
                    </button>
                </div>
            </div>
            <div className="design-container">
                <img src={design04}/>
                <img src={design05}/>
                <img src={design06}/>
            </div>
        </div>
    )
}