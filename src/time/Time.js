export function daysToWeeks(days) {
    return days/7;
}

export function hoursToDays(hours) {
    return hours/24;
}

export function minutesToHours(minutes) {
    return minutes/60;
}

export function secondsToMinutes(seconds) {
    return seconds/60;
}

export function millisecondsToSeconds(ms) {
    return ms/1000;
}

// 1 hour and 1 minute is 1 hour ago
// 1 hour and 59 minutes is 1 hour ago
export function toHumanTimeAgo(timestampMs) {
    let nowTimestampMs = Date.now();
    let timeDifferenceMs = nowTimestampMs - timestampMs;
    let timeDifferenceSeconds = millisecondsToSeconds(timeDifferenceMs);
    let timeDifferenceMinutes = secondsToMinutes(timeDifferenceSeconds);
    let timeDifferenceHours = minutesToHours(timeDifferenceMinutes);
    let timeDifferenceDays = hoursToDays(timeDifferenceHours);
    let timeDifferenceWeeks = daysToWeeks(timeDifferenceDays);

    if(timeDifferenceMinutes < 2) {
        return 'Now';
    } else if(timeDifferenceMinutes < 60) {
        return '' + Math.floor(timeDifferenceMinutes) + ' mins';
    } else if(timeDifferenceHours < 2) {
        return '1 hr';
    } else if(timeDifferenceHours < 24) {
        return '' + Math.floor(timeDifferenceHours) + ' hrs';
    } else if(timeDifferenceDays < 2) {
        return '1 day';
    } else if(timeDifferenceDays < 7) {
        return '' + Math.floor(timeDifferenceDays) + ' days';
    } else if(timeDifferenceWeeks < 2) {
        return '1 week';
    }else if(timeDifferenceWeeks < 4) {
        return '' + Math.floor(timeDifferenceWeeks) + ' weeks';
    } else {
        return 'Distant';
    }

    // months ago
    // years ago
}
