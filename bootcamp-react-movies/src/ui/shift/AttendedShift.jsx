import { useDispatch, useSelector } from "react-redux";
import { finalizeShift } from "../../architecture/redux/states/shifts/shift.state";

import "./AttendedShift.css";
const AttendedShift = () => {
    const dispatch = useDispatch();

    const selectedShiftId = useSelector(
        (state) => state.shifts.selectedShiftId
    );
    const selectedShift = useSelector((state) =>
        state.shifts.shifts.find((shift) => shift.id === selectedShiftId)
    );

    const isFinalized = selectedShift && selectedShift.finished;

    const handleClick = () => {
        dispatch(finalizeShift(selectedShift.id));
    };

    return (
        <div className="attended-shift-container">
            <h2>Atendido</h2>
            {!selectedShiftId || isFinalized ? (
                <p className="no-shift-selected-msg">No hay turnos atendidos</p>
            ) : (
                <>
                    <ul>
                        <li>
                            <span>Tipo:</span> {selectedShift.type}
                        </li>
                        <li>
                            <span>Fecha: </span>
                            {selectedShift.date}
                        </li>
                        <li>
                            <span>Razón: </span> {selectedShift.reason}
                        </li>
                        {selectedShift.type === "oficial" && (
                            <li>
                                <span>Nombre del oficial:</span>{" "}
                                {selectedShift.officerFullname}
                            </li>
                        )}
                        {selectedShift.type === "online" && (
                            <>
                                <li>
                                    <span>Fecha programada: </span>
                                    {selectedShift.scheduledDate}
                                </li>
                                <li>
                                    <span>Fecha de finalización: </span>
                                    {selectedShift.finishDate}
                                </li>
                            </>
                        )}
                    </ul>
                    <button onClick={handleClick}>Finalizar</button>
                </>
            )}
        </div>
    );
};

export default AttendedShift;
