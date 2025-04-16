import Header from "../components/Header";
import Footer from "../components/Footer";
import './team.css';

export default function Home(){
    const developers = [
        {
            id: 1,
            url: "./img/ploy.jpeg",
            name: "Nunticha Thummee",
            title: "Computer programming student",
            description: "A student programmer with a love for design and creativity. Always ready to learn, create, and take on the next exciting challenge!"
        },
        {
            id: 2,
            url: "./img/ploy.jpeg",
            name: "Olga Timoshenko",
            title: "Computer Programming student",
            description: "Results-driven person with a passion for problem-solving."
        },
        {
            id: 3,
            url: "./img/ploy.jpeg",
            name: "Via Alexa Yu",
            title: "Computer Porgramming student",
            description: "Information to be added."
        }
    ]

    return(
        <div>
            <Header/>
            <section className="mainContainer">
                <ul>
                    {developers.map((dev) => (
                        <li key={dev.id}>
                            <img src={dev.url}></img>
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