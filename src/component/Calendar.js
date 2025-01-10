import React from "react"

const Calendar = () => {
    return(
        <div>
            <h2>오늘은 🗓️</h2>
            {/* 오늘 날짜 표시 */}
            <h1 style={{color: "gray"}}>{new Date().toDateString()}</h1>
        </div>
    );
}
export default Calendar