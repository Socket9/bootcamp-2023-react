/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import "./Shift.css";
import { setSelectedShiftId } from "../../architecture/redux/states/shifts/shift.state";

const Shift = ({ shift }) => {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(setSelectedShiftId(shift.id));
    };

    return (
        <div className="shift-item">
            <div className="content">
                <div className="item">
                    <p>ID</p>
                    <span>{shift.id}</span>
                </div>
                <div className="item">
                    <p>Tipo</p>
                    <span>{shift.type}</span>
                </div>
                <div className="item">
                    <p>Fecha</p>
                    <span>{shift.date}</span>
                </div>
                <div className="item">
                    <p>Razón</p>
                    <span>{shift.reason}</span>
                </div>
                {shift.type === "Oficial" && (
                    <div className="item">
                        <p>Nombre del oficial</p>
                        <span>{shift.officerFullName}</span>
                    </div>
                )}
                {shift.type === "Online" && (
                    <>
                        <div className="item">
                            <p>Programada</p>
                            <span>{shift.scheduledDate}</span>
                        </div>
                        <div className="item">
                            <p>Finalizada</p>
                            <span>{shift.finishDate}</span>
                        </div>
                    </>
                )}
            </div>
            <button onClick={handleClick}>Atender</button>
        </div>
    );
};

export default Shift;
