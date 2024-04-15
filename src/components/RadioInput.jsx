import "./RadioInput.css";

const RadioInput = ({ name, vals, handleOnChange, checked }) => {
    return (
        <div className="radio-container input-container">
            <p className="name">{name}</p>
            <div className="radio-options">
                {vals.map((option, index) => {
                    return (
                        <>
                            <label key={`${name}-radio-${index}`} className="radio-option">
                                <input
                                    type="radio"
                                    name={name}
                                    value={option}
                                    onChange={handleOnChange}
                                    checked={checked === option}
                                    className="radio-input"
                                    key={`${name}-radio-input-${index}`}
                                    required
                                />
                                {option}
                            </label>
                        </>
                    );
                }) }
            </div>
        </div>
    );
}

export default RadioInput;