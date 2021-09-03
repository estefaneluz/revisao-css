import './styles.css'
import ContactIndividual from '../ContactIndividual'
import lise from '../../assets/lise.png'
import emily from '../../assets/emily.png'
import jake from '../../assets/jake.png'
import cheryl from '../../assets/cheryl.png'

export default function Contacts(){
    const contacts = [
        {
            nome: "Lise",
            imagem: lise,
            local: "Bergen, Norway"
        },
        {
            nome: "Emily",
            imagem: emily,
            local: "Bergen, Norway",
        },
        {
            nome: "Jake",
            imagem: jake,
            local: "Bergen, Norway",
        },
        {
            nome: "Cheryl",
            imagem: cheryl,
            local: "Bergen, Norway",
        },
    ]

    return(
        <div className="card-contacs">
            <h2>Contacs <span>43</span></h2>
            { contacts.map(contact => 
                <ContactIndividual
                    nome={contact.nome}
                    img={contact.imagem}
                    local={contact.local}
                />
            )}
            <button>View everyone</button>
        </div>
    )
}