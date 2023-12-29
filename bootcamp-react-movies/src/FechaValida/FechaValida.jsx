import { useState } from "react";
import ValidationMessage from "./ValidationMessage";
import "./styles.css";

const FechaValida = () => {
    const [date, setDate] = useState("");
    const [showMsg, setShowMsg] = useState(false);
    const [isValidDate, setIsValidDate] = useState(false);

    const handleChange = (e) => {
        setDate(e.target.value);
        setShowMsg(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const inputDate = date;
        const isValid = checkValidDate(inputDate);
        setShowMsg(true);
        setIsValidDate(isValid);
    };

    const checkValidDate = (inputDate) => {
        const dateFormat = /^\d{2}\/\d{2}\/\d{4}$/;
        const maxYear = 2099;
        const [day, month, year] = inputDate.split("/").map(Number);

        if (!inputDate.match(dateFormat)) {
            return false;
        }

        const maxDaysInMonth = new Date(year, month, 0).getDate();

        if (
            year <= maxYear &&
            month > 0 &&
            month <= 12 &&
            day > 0 &&
            day <= maxDaysInMonth &&
            Number.isInteger(day) &&
            Number.isInteger(month) &&
            Number.isInteger(year)
        ) {
            return true;
        }

        return false;
    };

    return (
        <>
            <div className="container">
                <div>
                    {showMsg ? (
                        <ValidationMessage date={date} isValid={isValidDate} />
                    ) : (
                        <span className="msg">
                            Ingrese un mensaje (DD/MM/YYYY)
                        </span>
                    )}
                </div>
                <form onSubmit={handleSubmit} className="form">
                    <input
                        type="text"
                        placeholder="DD/MM/YYYY"
                        maxLength={10}
                        onChange={handleChange}
                        value={date}
                    />
                    <button>Validar</button>
                </form>
            </div>
        </>
    );
};

export default FechaValida;
