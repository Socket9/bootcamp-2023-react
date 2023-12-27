import "./EducacionComponent.css";

const EducacionItemComponent = ({ institution, description, year }) => {
    return (
        <div className="education-item">
            <h3>
                {institution}
            </h3>
            <p>
                {description} |
                <span className="item-year"> {year}</span>
            </p>
        </div>
    );
};

export default EducacionItemComponent;
