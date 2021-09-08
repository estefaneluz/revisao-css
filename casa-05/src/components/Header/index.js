import './styles.css'
import Navbar from "../Navbar";
import background from '../../assets/image-header.jpg'

export default function Header() {
    return (
        <div className="container-header">
            <Navbar/>
            <h2>We are creatives</h2>
        </div>
    )
}