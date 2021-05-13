import moment from "moment";

function CalcOfPrecipitation(longitude, latitude) {
    let dateArray = [];
    let responseDT = [];
    for (let i = 0; i < 10; i++) {
        if (i === 0) {
            dateArray.push(parseInt(new Date().getTime()/1000));
            fetch(`https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=${latitude}&lon=${longitude}&dt=${dateArray[i]}&units=metric&lang=ru&appid=e82996ed7935d8141c26eff1f2aa0f37`)
                .then(response => response.json())
                .then(result => test(result))
                .catch(error => console.log("error", error));
        } else {
            let str = moment().subtract(i, 'days');
            dateArray.push(parseInt(new Date(str).getTime()/1000));
            if (i === 5) {
                fetch(`https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=${latitude}&lon=${longitude}&dt=${dateArray[i]}&units=metric&lang=ru&appid=e82996ed7935d8141c26eff1f2aa0f37`)
                    .then(response => response.json())
                    .then(result => test(result, str))
                    .catch(error => console.log("error", error));
            }
        }

    }
    if (responseDT !== []) {
       /* for (const [key, value] of Object.entries(responseDT)) {
            console.log(`key: ${key}, value: ${value}`)
        }*/
        console.log(dateArray, responseDT);
    }

    return '';
}

function test(result, str) {
    let test = moment(str).format('YYYYDDMM');
    let rainSum = 0;
    if (test === '20210805') {
        for (let i = 0; i<=result.hourly.length; i++) {
            let rain = result.hourly[i]['rain']?.['1h'];
            if (rain !== undefined) {
                rainSum += rain;
            }
            console.log((rainSum))
        }

    }
}
export default CalcOfPrecipitation;