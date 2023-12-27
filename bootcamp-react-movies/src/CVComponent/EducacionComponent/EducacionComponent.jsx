import EducacionItemComponent from "./EducacionItemComponent";
import './EducacionComponent.css';

const EducacionComponent = ({ education }) => {
    const educationItemList = Object.values(education).map((item, index) => (
        <EducacionItemComponent
            key={index}
            institution={item.intitution}
            description={item.description}
            year={item.year}
            state={item.state}
        />
    ));

    return (
        <section className="education-container">
            <h2 className="main-subtitle">FORMACIÓN</h2>
            <div className="education-list">{educationItemList}</div>
        </section>
    );
};

export default EducacionComponent;
