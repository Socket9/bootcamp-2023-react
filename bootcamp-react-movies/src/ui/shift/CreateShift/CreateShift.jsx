import { useState } from "react";
import { useDispatch } from "react-redux";
import { addShift } from "../../../architecture/redux/states/shifts/shift.state";
import Dropdown from "./Dropdown";
import "./CreateShift.css";
const CreateShift = () => {
    const types = ["Caja", "Online", "Oficial"];
    const dispatch = useDispatch();
    const [shiftData, setShiftData] = useState({
        date: "",
        type: "",
        reason: "",
        officerFullName: "",
        scheduledDate: "",
        finishDate: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setShiftData({
            ...shiftData,
            [name]: value,
        });
    };

    const handleDropdownChange = (selectedType) => {
        setShiftData({
            ...shiftData,
            type: selectedType,
            scheduledDate: "",
            finishDate: "",
            officerFullName: "",
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addShift(shiftData));
    };

    const renderDynamicInputs = () => {
        if (shiftData.type === "Online") {
            return (
                <>
                    <div className="item">
                        <input
                            type="datetime-local"
                            name="scheduledDate"
                            value={shiftData.scheduledDate}
                            onChange={handleChange}
                            placeholder="Fecha Programada"
                        />
                    </div>
                    <div className="item">
                        <input
                            type="datetime-local"
                            name="finishDate"
                            value={shiftData.finishDate}
                            onChange={handleChange}
                            placeholder="Fecha Finalización"
                        />
                    </div>
                </>
            );
        } else if (shiftData.type === "Oficial") {
            return (
                <div className="item">
                    <input
                        type="text"
                        name="officerFullName"
                        value={shiftData.officerFullName}
                        onChange={handleChange}
                        placeholder="Nombre del Oficial: "
                    />
                </div>
            );
        }
        return null;
    };

    return (
        <>
            <section className="form-container">
                <h2>Crear turno</h2>
                <form onSubmit={handleSubmit}>
                    <div className="item">
                        <Dropdown
                            types={types}
                            onChange={handleDropdownChange}
                        />
                    </div>
                    <div className="item">
                        <input
                            type="datetime-local"
                            name="date"
                            value={shiftData.date}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="item">
                        <input
                            type="text"
                            onChange={handleChange}
                            placeholder="Razon:"
                        />
                    </div>
                    {renderDynamicInputs()}
                    <button>Crear</button>
                </form>
            </section>
        </>
    );
};

export default CreateShift;
