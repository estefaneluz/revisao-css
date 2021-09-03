import "./styles.css"
import somaIcon from '../../assets/icone-soma.svg'

export default function NearbyIndividualCard({nome, img}){
    return(
        <div className="person-card">
            <img className="person-img" src={img} alt={`icone de ${nome}`}/>
            <h3>{nome}</h3>
            <img className="soma-icon" src={somaIcon} alt="icone de soma"/>
        </div>
    )
}