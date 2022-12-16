import React from "react";
import { List, Button } from "./FeedbackOptions.stayled";

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <List>
            {options.map(el => <li key={el}>
                <Button onClick={() => onLeaveFeedback(el)} action={el}>{el[0].toUpperCase() + el.slice(1)}</Button>
            </li>)}
        </List>
    );
}