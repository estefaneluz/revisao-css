import "./styles.css"
import NearbyIndividualCard from "../NearbyIndividualCard";
import josh from '../../assets/josh.png'
import christer from '../../assets/christer.png'
import lise from '../../assets/lise.png'
import katrine from '../../assets/katrine.png'

export default function NearbyFriends(){
    const nearbyFriends = [
        {
            nome: "Josh",
            imagem: josh
        },
        {
            nome: "Christer",
            imagem: christer
        },
        {
            nome: "Lise",
            imagem: lise
        },
        {
            nome: "Katrine",
            imagem: katrine
        }
    ]
    return (
        <div className="card">
            <div className="header">
                <h2>Nearby Friends</h2>
                <a href="/">See All</a>
            </div>

            <div className="row">
                {
                nearbyFriends.map(friend => 
                <NearbyIndividualCard
                    nome={friend.nome}
                    img={friend.imagem}
                />
                )}
            </div>
        </div>
    );
}