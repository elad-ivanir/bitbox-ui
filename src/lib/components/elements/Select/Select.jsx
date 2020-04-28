import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import useTheme from "../../../hooks/useTheme";
import { SelectBox } from "./Select.styles";
import { ArrowDown, CheckSign } from "../../../constants/style/shapes";

const Select = ({ value, onChange, options, isDisabled, isMulti, text, textLabel }) => {
    const [toggle, setToggle] = useState();
    const [Value, setValue] = useState(value);
    const [filteredValues, setFilteredValues] = useState(options)

    const toggleMenu = e => {
        setToggle(!toggle)
    };

    const handleChange = (option) => e => {
        if(!isMulti) {
            onChange(option); 
            setValue(option);
            // toggleMenu();
        } else {
            if(!Value.includes(option)){
                setValue([...Value, option])
            } else {
                setValue(Value.filter(x => x != option))
            }
        }
        
        // call to props.onValueChange
        // call to props.onChange
    }

    const handleInputChange = e => {
        const values = options.filter(option => option[textLabel].includes(e.target.value))            ;
        setFilteredValues(values);
    };  

    const handelCheckSign = option => {
        if(isMulti){
            return Value.includes(option);
        } else {
            return (Value == option)
        }
    }

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
                        <ArrowDown className="select-box--icon" data-active={toggle} />
                    </div>
                    {isDisabled ?
                        null :
                        <div className="options-container" data-active={toggle} onMouseLeave={toggleMenu}>
                            <input className="options-container--search" type="text" onChange={handleInputChange}/>
                            {filteredValues.map((option, key) => {
                                return (
                                    <div className="options-container--option" key={key} onClick={handleChange(option)}>
                                        <CheckSign className="option--check-sign" data-ischecked={handelCheckSign(option)}/>
                                        <label className="option--label">{option[textLabel]}</label>
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
