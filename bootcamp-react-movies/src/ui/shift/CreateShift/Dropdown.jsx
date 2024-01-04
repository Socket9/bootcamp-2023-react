const Dropdown = ({ types, onChange }) => {
    const handleDropdownChange = (e) => {
        if (onChange) {
            onChange(e.target.value);
        }
    };

    return (
        <select name="types" id="types" onChange={handleDropdownChange}>
            {types.map((type, index) => (
                <option key={index} value={type}>
                    {type}
                </option>
            ))}
        </select>
    );
};

export default Dropdown;
