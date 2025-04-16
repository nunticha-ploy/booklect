import Header from "../components/Header";
import Footer from "../components/Footer";
import './team.css';
import '../globals.css';

export default function Home(){
    const developers = [
        {
            id: 1,
            url: "/ploy.png",
            name: "Nunticha Thummee",
            title: "Computer programming student",
            description: "A student programmer with a love for design and creativity. Always ready to learn, create, and take on the next exciting challenge!"
        },
        {
            id: 2,
            url: "/olga.png",
            name: "Olga Timoshenko",
            title: "Computer Programming student",
            description: "Results-driven person with a passion for problem-solving."
        },
        {
            id: 3,
            url: "/ploy.png",
            name: "Via Alexa Yu",
            title: "Computer Porgramming student",
            description: "Information to be added."
        }
    ]

    return(
        <div>
            <Header/>
            <section className="mainContainer">
                <h2 className="headTag">Our team</h2>
                <ul className="mainBox">
                    {developers.map((dev) => (
                        <li key={dev.id} className="devContainer">
                            <img src={dev.url} className="image"/>
                            <h3>{dev.name}</h3>
                            <h4>{dev.title}</h4>
                            <p>{dev.description}</p>
                        </li>
                    ))}
                </ul>
            </section>
            <Footer/>
        </div>
    )

}