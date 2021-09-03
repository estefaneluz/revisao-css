import './styles.css'

export default function Card ({img, titulo, descricao}) {
    return (
        <div className="card">
            <img src={img} alt={`icone de ${titulo}`}/>
            <h2>{titulo}</h2>
            <p>{descricao}</p>
            <button>{`Learn more about ${titulo}`}</button>
        </div>
    )
}