import IdiomaComponent from "./IdiomaComponent";
import './IdiomasComponent.css';

const IdiomasComponent = ({ languages }) => {
    const languagesList = Object.entries(languages).map(([idioma, nivel]) => (
        <IdiomaComponent key={idioma} language={idioma} level={nivel} />
    ));
    return (
        <section className="languages-container">
            <h2 className="title">IDIOMAS</h2>
            <div className="languages-list">{languagesList}</div>
        </section>
    );
};

export default IdiomasComponent;
