const ValidationMessage = ({ date,isValid }) => {
    
    return (
        isValid ? <span className="msg msg-success">{date} es una fecha valida</span> : <span className="msg msg-error">{date} no es una fecha valida. El formato válido es DD/MM/YYYY</span>
    ) ;
};

export default ValidationMessage;
