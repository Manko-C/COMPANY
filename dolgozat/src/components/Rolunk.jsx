import About from "./about.json"
import "./rolunk.css"
export default function AboutUs(){


    return(
        <>
        <header>
            <div>
                <img src={About.logo} alt="Logo"></img>
            </div>
            <div>
                <h1>
                    {About.companyName}
                </h1>
                <h2>
                    {About.founded}
                </h2>
            </div>
            <div><p>{About.mission}</p></div>
        </header>
        <main>
            <div>
                <p>{About.values.join(",")}</p>
            </div>
            <div>
                <p>{About.description}</p>
            </div>
        </main>
        <footer className="footer_rolunk">
            <div>
                <p>{About.contact.address}</p>
                <p>{About.contact.email}</p>
                <p>{About.contact.phone}</p>
            </div>
        </footer>
        </>
    )
}