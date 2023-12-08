import { useCalendar, useLocale } from "react-aria";
import { useCalendarState } from "react-stately";
import { createCalendar } from "@internationalized/date";
import { CalendarGrid } from "./CalendarGrid";
import { Button } from "../Button/Button";
import "./Calender.css"

// Reuse the Button from your component library. See below for details.

export function Calendar(props: any) {
    let { locale } = useLocale();
    let state = useCalendarState({
        ...props,
        locale,
        createCalendar,
    });

    let { calendarProps, prevButtonProps, nextButtonProps, title } =
        useCalendar(props, state);

    return (
        <div {...calendarProps} className="calendar">
            <div className="header">
                <h2>{title}</h2>
                <Button {...prevButtonProps}>&lt;</Button>
                <Button {...nextButtonProps}>&gt;</Button>
            </div>
            <CalendarGrid state={state} />
        </div>
    );
}