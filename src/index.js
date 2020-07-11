export function formatDuration (seconds) {
    if (!seconds) return 'now';
    let remainingTime = seconds;
    let stringSections = [];

    Object.keys(secondsToUnitOfTime).forEach(unit => {
        remainingTime = formatUnitOfTime(remainingTime, stringSections, unit);
    })

    return turnSectionsIntoString(stringSections)
}

function formatUnitOfTime(remainingTime, stringSections, unit) {
    if (remainingTime >= secondsToUnitOfTime[unit]) {
        const numOfUnitOfTime = Math.floor(remainingTime / secondsToUnitOfTime[unit]);
        remainingTime -= (numOfUnitOfTime * secondsToUnitOfTime[unit]);
        numOfUnitOfTime === 1 ? stringSections.push(`1 ${unit}`) : stringSections.push(`${numOfUnitOfTime} ${unit}s`)
    }

    return remainingTime;
}

function turnSectionsIntoString(sections) {
    let formattedString = '';

    if (sections.length === 1) {
        return sections[0];
    }
    sections.forEach((section, index, arr) => {
       if (index < arr.length -2) {
            formattedString += section + ', '
       } else if (index === arr.length -1) {
            formattedString += 'and ' + section;
       } else if (index === arr.length - 2) {
           formattedString += section + ' ';
       }
    });

    return formattedString;
}

const secondsToUnitOfTime = {
    'year': 31536000,
    'day': 86400,
    'hour': 3600,
    'minute': 60,
    'second': 1
}
