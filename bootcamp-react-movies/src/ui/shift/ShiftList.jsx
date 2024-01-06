import Shift from "./Shift";
import "./Shift.css";
import { useSelector } from "react-redux";
import "primeicons/primeicons.css";
import { useState } from "react";

const ShiftList = () => {
    const shifts = useSelector((store) => store.shifts.shifts);
    const [showAttended, setShowAttended] = useState(false);

    const unfinishedShifts = shifts.filter((shift) => !shift.finished);

    const handleClick = () => {
        setShowAttended(!showAttended);
    };

    return (
        <main className="shifts-container">
            <div className="bar">
                <h2>Pendientes</h2>
                <button onClick={handleClick}>
                    {showAttended === false ? (
                        <i className="pi pi-eye"></i>
                    ) : (
                        <i className="pi pi-eye-slash"></i>
                    )}
                </button>
            </div>
            {showAttended == true
                ? shifts.map((shift, index) => (
                      <Shift key={index} shift={shift} />
                  ))
                : unfinishedShifts.map((shift, index) => (
                      <Shift key={index} shift={shift} />
                  ))}
        </main>
    );
};

export default ShiftList;
