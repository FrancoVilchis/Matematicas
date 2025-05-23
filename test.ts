const data = ["Andrew","Robert","Lee","02-September-1981","M"]

function driver(data: Array<string>): string {
    return `${data[2].toUpperCase().slice(0, 5).padEnd(5, '9')}`
}

driver(data); // LEE99809021AR9AA