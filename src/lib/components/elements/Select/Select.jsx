import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import useTheme from "../../../hooks/useTheme";
import { SelectBox } from "./Select.styles";
import { ArrowDown, CheckSign } from "../../../constants/style/shapes";

const Select = ({ value, onChange, options, isDisabled, selectBoxLabel, text, textLabel }) => {
    const [toggle, setToggle] = useState();
    const [Value, setValue] = useState(value);
    const [filteredValues, setFilteredValues] = useState(options)

    const toggleMenu = e => {
        setToggle(!toggle)
    };

    const handleChange = (option) => e => {
        onChange(option);
        setValue(option);
        toggleMenu();
    }

    const handleInputChange = e => {
        const values = options.filter(option => option[textLabel].includes(e.target.value))            ;
        setFilteredValues(values);
    };  

    const theme = useTheme();

    return (
        <ThemeProvider theme={theme}>
            <SelectBox>
                <h2>{text}</h2>
                <div className="select-box" >
                    <div className="select-box--main" data-isDisabled={isDisabled} onClick={toggleMenu} >
                        <div className="selected" data-isDisabled={isDisabled}>
                            {Value ? Value[textLabel] : null}
                        </div>
                        <ArrowDown className="select-box--icon" data-active={toggle}/>
                    </div>
                    {isDisabled ?
                        null :
                        <div className="options-container" data-active={toggle}>
                            <input className="options-container--search" type="text" onChange={handleInputChange}/>
                            {filteredValues.map((option, key) => {
                                return (
                                    <div className="options-container--option" key={key} onClick={handleChange(option)}>
                                        <label className="option--label">{option[textLabel]}</label>
                                        <CheckSign className="option--check-sign"/>
                                    </div>
                                )
                            })}
                        </div>
                    }
                </div>
            </SelectBox>
        </ThemeProvider>
    );
};

export default Select;
