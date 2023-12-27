const ExperienciaLaboralItemComponent = ({
    company,
    job,
    year,
    description,
}) => {
    return (
        <div className="experience-item">
            <h3 className="experience-title">{job}</h3>
            <p className="experience-subtitle">
                {company} <span className="experience-year">| {year}</span>
            </p>
            <p className="experience-description">{description}</p>
        </div>
    );
};

export default ExperienciaLaboralItemComponent;
