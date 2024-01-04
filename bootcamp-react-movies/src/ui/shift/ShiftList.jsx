import Shift from "./Shift";
import './Shift.css'
import { useSelector } from "react-redux";

const ShiftList = () => {
    const shifts = useSelector((store) => store.shifts.shifts);

    const unfinishedShifts = shifts.filter((shift) => !shift.finished);

    return (
        <main className="shifts-container">
            <h2>Pendientes</h2>
            {unfinishedShifts.map((shift, index) => (
                <Shift key={index} shift={shift} />
            ))}
        </main>
    );
};

export default ShiftList;
