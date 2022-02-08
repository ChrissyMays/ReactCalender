import React from "react";
import DayOfWeek from "./dayOfWeek"

import CalenderBox from "./calenderBox";

export default function contentWrapper(props) {
    const renderPreviousCalenderBoxes = () => {
        const previousCalenderBoxes = []

        for (let i=1; i<=props.startDay; i++) {

        previousCalenderBoxes.push(
            <CalenderBox date={props.daysInPreviousMonth - (props.startDay - i )} />
        ) 
        }
        return previousCalenderBoxes
    }
    const renderCalenderBoxes = () => {
        const calenderBoxes = []

        for (let i=0; i<props.daysInMonth; i++) {
            calenderBoxes.push(
                <CalenderBox date= {i} />
            )
        }
        return calenderBoxes
    }

    const renderNextCalenderBoxes = () => {
        const nextCalenderBoxes = []

        for (let i=1; i<=(42- props.daysInMonth - props.startDay); i++){
            nextCalenderBoxes.push(
                <CalenderBox date={i} />
            )

        }
        return nextCalenderBoxes
    }
    
    return (
        <div className="content-wrapper">
            < DayOfWeek day="Sunday" />
            < DayOfWeek day="Monday" />
            < DayOfWeek day="Tuesday" />
            < DayOfWeek day="Wednesday" />
            < DayOfWeek day="Thursday" />
            < DayOfWeek day="Friday" />
            < DayOfWeek day="Saturday" />
            {renderPreviousCalenderBoxes()}
            {renderCalenderBoxes()}
            {renderNextCalenderBoxes()}
        </div>
    )
}