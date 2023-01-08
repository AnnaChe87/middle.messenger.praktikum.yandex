function dayName(number) {
    const days = [
        "Воскресенье",
        "Понедельник",
        "Вторник",
        "Среда",
        "Четверг",
        "Пятница",
        "Суббота",
    ];

    return days[number];
}

export function getTime(dateStr) {
    const date = new Date(dateStr);
    const today = new Date();
    today.setHours(0, 0, 0);
    const weekStart = new Date();
    const dayOfWeek = today.getDay() || 7;
    weekStart.setDate(today.getDate() - dayOfWeek + 1);
    weekStart.setHours(0, 0, 0);

    if (date > today) {
        return date.toTimeString().slice(0, 5);
    }
    if (date > weekStart) {
        return dayName(date.getDay());
    }
    return date.toLocaleDateString();
}
