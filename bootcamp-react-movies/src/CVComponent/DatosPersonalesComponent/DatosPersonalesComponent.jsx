import './DatosPersonalesComponent.css';

const DatosPersonalesComponent = ({ fullName, job, description }) => {
    return (
        <div className="info-container">
            <h1>{fullName}<span className='color-point'>.</span></h1>
            <h2>{job}</h2>
            <hr />
            <p>{description}</p>
        </div>
    );
};

export default DatosPersonalesComponent;
