import React from "react";
import { useCalendarCell } from "react-aria";
import "./Calender.css";

export function CalendarCell({ state, date }: any) {
    let ref = React.useRef(null);
    let {
        cellProps,
        buttonProps,
        isSelected,
        isOutsideVisibleRange,
        isDisabled,
        isUnavailable,
        formattedDate,
    } = useCalendarCell({ date }, state, ref);

    return (
        <td {...cellProps}>
            <div
                {...buttonProps}
                ref={ref}
                hidden={isOutsideVisibleRange}
                className={`cell ${isSelected ? "selected" : ""} ${
                    isDisabled ? "disabled" : ""
                } ${isUnavailable ? "unavailable" : ""}`}
            >
                {formattedDate}
            </div>
        </td>
    );
}