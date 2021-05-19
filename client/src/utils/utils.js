import moment from "moment";

async function calcOfPrecipitation(longitude, latitude) {
    let dateArray = [];
    const responseDT = new Map();
    for (let i = 0; i < 2; i++) {
        if (i === 0) {
            let dateYYYYMMDD = moment().subtract(i, 'days').format('YYYYMMDD');
            dateArray.push(parseInt(new Date().getTime() / 1000) - 100);
            const request = async () => {
                const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=${latitude}&lon=${longitude}&dt=${dateArray[i]}&units=metric&lang=ru&appid=e82996ed7935d8141c26eff1f2aa0f37`);
                const json = await response.json();
                responseDT.set(`${dateYYYYMMDD}`, rainSum(json, dateArray[i]));
            }
            await request();
        } else {
            let str = moment().subtract(i, 'days');
            let dateYYYYMMDD = moment().subtract(i, 'days').format('YYYYMMDD');
            dateArray.push(parseInt(new Date(str).getTime() / 1000));
            const request = async () => {
                const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=${latitude}&lon=${longitude}&dt=${dateArray[i]}&units=metric&lang=ru&appid=e82996ed7935d8141c26eff1f2aa0f37`);
                const json = await response.json();
                responseDT.set(`${dateYYYYMMDD}`, rainSum(json, dateArray[i]));
            }
            await request();
        }

    }
    return responseDT;
}

function rainSum(result, str) {
    let rainSumObj = 0;
    for (let j = 0; j <= 24; j++) {
        if (result.hourly[j]?.['rain']?.['1h'] !== undefined) {
            let rain = (result.hourly[j]['rain']?.['1h']);
            if (rain !== undefined) {
                rainSumObj += rain;
            }
        }
    }
    return rainSumObj;
}



export default calcOfPrecipitation;

