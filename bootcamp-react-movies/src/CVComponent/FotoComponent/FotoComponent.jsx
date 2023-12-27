import './FotoComponent.css'

const FotoComponent = ({ url }) => {
    return (
        <div className='img-container'>
            <img src={url}></img>
        </div>
    );
};


export default FotoComponent;
