import React, { useState } from "react";
import ReactDOM from "react-dom";
import Select from "./lib/components/elements/Select/Select";

const Jsx = () => {
    const options = [
        {
            text: 'Automobiles',
            value: 0
        },
        {
            text: 'Film & Animation',
            value: 1
        },
        {
            text: 'Sience & Technology',
            value: 2
        },
        {
            text: 'פ',
            value: 3
        },
        {
            text: 'פי',
            value: 4
        },
        {
            text: 'פיב',
            value: 5
        },
        {
            text: 'פיבי',
            value: 6
        }
    ];
    
    const [value, setValue] = useState();

    const onChange = (value) => {
        setValue(value);
    }

    return (
        <Select
            text={"value.text"}
            options={options}
            textLabel={"text"}
            value={value}
            onChange={onChange}
            // isMulti={true}
        />
    )
}

ReactDOM.render(<Jsx />, document.getElementById("root"));
