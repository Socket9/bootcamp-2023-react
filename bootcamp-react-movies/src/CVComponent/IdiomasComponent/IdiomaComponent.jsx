const IdiomaComponent = ({ language, level }) => {
    return (
        <div className="language-item">
            <span className="language">{language}: </span>
            <span className="level">{level}</span>
        </div>
    );
};

export default IdiomaComponent;
