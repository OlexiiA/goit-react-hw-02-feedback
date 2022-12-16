import React from "react";
import { List, ListItem } from './Statistics.styled'

export const Statistics = ({ good, neutral, bad, total, goodPersentage, }) => {
    return (
        <List>
            <ListItem>Good: {good}</ListItem>
            <ListItem>Neutral: {neutral}</ListItem>
            <ListItem>Bad: {bad}</ListItem>
            <ListItem>Total: {total}</ListItem>
            <ListItem>Positive feedback: {goodPersentage}</ListItem>
        </List>)
}