import moment from "moment";

function CalcOfPrecipitation(longitude, latitude) {
    let dateArray = [];
    let responseDT = [];
    for (let i = 0; i <= 1; i++) {
        if (i === 0) {
            let dateYYYYMMDD = moment().subtract(i, 'days').format('YYYYMMDD');
            dateArray.push(parseInt(new Date().getTime()/1000) - 100);
            fetch(`https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=${latitude}&lon=${longitude}&dt=${dateArray[i]}&units=metric&lang=ru&appid=e82996ed7935d8141c26eff1f2aa0f37`)
                .then(response => response.json())
                .then(result => responseDT.push(rainSum(result, dateArray[i])))
                .catch(error => console.log("error", error));
        } else {
            let str = moment().subtract(i, 'days');
            let dateYYYYMMDD = moment().subtract(i, 'days').format('YYYYMMDD');
            dateArray.push(parseInt(new Date(str).getTime()/1000));
            fetch(`https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=${latitude}&lon=${longitude}&dt=${dateArray[i]}&units=metric&lang=ru&appid=e82996ed7935d8141c26eff1f2aa0f37`)
                .then(response => response.json())
                .then(result => responseDT.push((rainSum(result, dateArray[i]))))
                .catch(error => console.log("error", error));
        }

    }
    if (responseDT !== []) {
        howManyDaysRain(responseDT);
    }

    return 'date';
}

function rainSum(result, str) {
    let rainSumObj = 0;
    for (let j = 0; j <= 24; j++) {
        if (result.hourly[j]?.['rain']?.['1h'] !== undefined) {
            let rain = (result.hourly[j]['rain']?.['1h']);
            //console.log(rain)
            if (rain !== undefined) {
                rainSumObj += rain;
            }
        }
    }
    console.log(typeof rainSumObj)
    return rainSumObj;
}

function howManyDaysRain(responseDT) {
    console.log(responseDT)
    return '';
}
export default CalcOfPrecipitation;

