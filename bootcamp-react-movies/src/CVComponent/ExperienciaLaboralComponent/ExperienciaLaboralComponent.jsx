import ExperienciaLaboralItemComponent from "./ExperienciaLaboralItemComponent";
import "./ExperienciaLaboralComponent.css";

const ExperienciaLaboralComponent = ({ workExperience }) => {
    const workExperienceList = Object.values(workExperience).map(
        (item, index) => (
            <ExperienciaLaboralItemComponent
                key={index}
                company={item.company}
                job={item.job}
                year={item.year}
                description={item.description}
            />
        )
    );

    return (
        <section className="work-experience-container">
            <h2 className="main-subtitle">EXPERIENCIA PROFESIONAL</h2>
            <div className="experience-list">{workExperienceList}</div>
        </section>
    );
};

export default ExperienciaLaboralComponent;
