interface HabitProps{
    completed: number
}

export function Habit ({completed}: HabitProps) {
    return(
        <div className="">{completed}</div>
    )
}