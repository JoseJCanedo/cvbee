/**
 * Calculates the second Monday of a given month and year
 * @param {number} year - The year (e.g., 2025)
 * @param {number} month - The month (1-12)
 * @returns {Date} - Date object representing the second Monday
 */
export function getSecondMonday(year: number, month: number) {
    // Create date object for the first day of the month
    const firstDay = new Date(year, month - 1, 1);

    // Get the day of the week (0 = Sunday, 1 = Monday, etc.)
    const firstDayOfWeek = firstDay.getDay();

    // Calculate days to add to get to first Monday
    let daysToFirstMonday;
    if (firstDayOfWeek === 0) { // Sunday
        daysToFirstMonday = 1;
    } else if (firstDayOfWeek === 1) { // Monday
        daysToFirstMonday = 0;
    } else {
        daysToFirstMonday = 8 - firstDayOfWeek;
    }

    // First Monday is on day (1 + daysToFirstMonday)
    // Second Monday is 7 days later
    const secondMondayDate = 1 + daysToFirstMonday + 7;

    return new Date(year, month - 1, secondMondayDate);
}

/**
 * Determines if a month number is odd or even
 * @param {number} month - The month number (1-12)
 * @returns {boolean} - True if odd month, false if even month
 */
export function isOddMonth(month: number) {
    return month % 2 === 1;
}

/**
 * Formats a date object into a readable string
 * @param {Date} date - The date to format
 * @returns {string} - Formatted date string
 */
export function formatDate(date: Date) {
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };
    return date.toLocaleDateString('en-US', options);
}

/**
 * Gets the second Monday information for current and next month
 * @returns {Object} - Object containing current and next month data
 */
export function getCurrentAndNextSecondMondays() {
    // Get current date
    const now = new Date();
    const currentYear = now.getFullYear();
    const currentMonth = now.getMonth() + 1; // getMonth() returns 0-11, we want 1-12

    // Calculate next month
    let nextMonth = currentMonth + 1;
    let nextYear = currentYear;
    if (nextMonth > 12) {
        nextMonth = 1;
        nextYear++;
    }

    // Calculate second Mondays
    const currentSecondMonday = getSecondMonday(currentYear, currentMonth);
    const nextSecondMonday = getSecondMonday(nextYear, nextMonth);

    return {
        current: {
            month: currentMonth,
            year: currentYear,
            monthName: new Date(currentYear, currentMonth - 1).toLocaleDateString('en-US', { month: 'long' }),
            secondMonday: currentSecondMonday,
            secondMondayFormatted: formatDate(currentSecondMonday),
            isOdd: isOddMonth(currentMonth),
            monthType: isOddMonth(currentMonth) ? 'Odd' : 'Even'
        },
        next: {
            month: nextMonth,
            year: nextYear,
            monthName: new Date(nextYear, nextMonth - 1).toLocaleDateString('en-US', { month: 'long' }),
            secondMonday: nextSecondMonday,
            secondMondayFormatted: formatDate(nextSecondMonday),
            isOdd: isOddMonth(nextMonth),
            monthType: isOddMonth(nextMonth) ? 'Odd' : 'Even'
        }
    };
}

/**
 * Gets the second Monday for any specific month and year
 * @param {number} year - The year
 * @param {number} month - The month (1-12)
 * @returns {Object} - Object containing month data
 */
export function getSecondMondayForMonth(year: number, month: number) {
    const secondMonday = getSecondMonday(year, month);

    return {
        month,
        year,
        monthName: new Date(year, month - 1).toLocaleDateString('en-US', { month: 'long' }),
        secondMonday,
        secondMondayFormatted: formatDate(secondMonday),
        isOdd: isOddMonth(month),
        monthType: isOddMonth(month) ? 'Odd' : 'Even'
    };
}