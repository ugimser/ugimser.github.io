// https://github.com/ayberkgezer/poe.ninja-API-Document/blob/main/README.md
const textDiv = document.getElementById('test');
const leagueCurrent = 'Necropolis';
const leagueCurrentHC = 'Hardcore+Necropolis';
const leagueStandard = 'Standard';

const url1 = 'https://poe.ninja/api/data/itemoverview?league=' + leagueCurrent + '&type=UniqueWeapon';
const url2 = 'https://poe.ninja/api/data/itemoverview?league=' + leagueCurrent + '&type=UniqueArmour';
const url3 = 'https://poe.ninja/api/data/itemoverview?league=' + leagueCurrent + '&type=UniqueAccessory';
const url4 = 'https://poe.ninja/api/data/itemoverview?league=' + leagueCurrent + '&type=UniqueJewel';

const urls = [url1, url2, url3, url4];
const leagues = [leagueCurrent, leagueCurrentHC, leagueStandard];

/*
for (const url of urls) {
    getData(url);
}
*/

/**
 * Now prices
 */
const newTabAll = Array.from(uniqueItemArray);
//const changedTab = [];
//
//
//newPrices();
//
//
function newPrices() {
    for (const l of leagues) {
        getPricesOfLeague('https://poe.ninja/api/data/itemoverview?league=' + l + '&type=UniqueWeapon', l);
        getPricesOfLeague('https://poe.ninja/api/data/itemoverview?league=' + l + '&type=UniqueArmour', l);
        getPricesOfLeague('https://poe.ninja/api/data/itemoverview?league=' + l + '&type=UniqueAccessory', l);
        getPricesOfLeague('https://poe.ninja/api/data/itemoverview?league=' + l + '&type=UniqueJewel', l);
    }
    console.log(newTabAll);
    //console.log(changedTab);
    //console.log(changedTab.length);
    
    const textarea = document.createElement('textarea');
    let string = '';
    for (const item of newTabAll) {
        string += `{ id: ${item.id}, baseType: "${item.baseType}", shortName: "${item.shortName}", name: "${item.name}", image: "${item.image}", chaosValueLeague: ${item.chaosValueLeague}, chaosValueHCLeague: ${item.chaosValueHCLeague}, chaosValueStandard: ${item.chaosValueStandard} },\n`;
    }
    textarea.innerHTML = 'const uniqueItemArray = [\n' + string + '];';
    textDiv.appendChild(textarea);
    
}

/*
let newTabAll = Array.from(uniqueItemArray)
const removeThis = [];
//function remove5l6l() {
    //for (const l of leagues) {
axios.get(`https://cors-anywhere.herokuapp.com/${url2}`)
            .then(response => {
                const data = response.data;
                if (data && data.lines) {
                    data.lines.forEach(item => {
                        let detailEnded = item.detailsId.substring(item.detailsId.length - 3);
                        if (detailEnded === '-5l' || detailEnded === '-6l') {
                            removeThis.push(item.id);
                        }
                    });
                }
                console.log(newTabAll);
                for (const r of removeThis) {
                    newTabAll = newTabAll.filter(item => item.id !== r);
                }

                console.log(newTabAll);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    //}
//}
/** */


function getPricesOfLeague(url, l) {
    axios.get(`https://cors-anywhere.herokuapp.com/${url}`)
        .then(response => {
           // console.log(response);
            const data = response.data;
            if (data && data.lines) {
                data.lines.forEach(item => {
                    const element = newTabAll.find(i => i.id === item.id);
                    const newElement = { id: item.id };

                    if (element) {
                        if (l === leagues[0]) {
                            element.chaosValueLeague = item.chaosValue;
                        } else if (l === leagues[1]) {
                            element.chaosValueHCLeague = item.chaosValue;
                        } else if (l === leagues[2]) {
                            element.chaosValueStandard = item.chaosValue;
                        }
                        //changedTab.push(element);
                    } else if (newElement) {
                        if (l === leagues[0]) {
                            newElement.chaosValueLeague = 0;
                        } else if (l === leagues[1]) {
                            newElement.chaosValueHCLeague = 0;
                        } else if (l === leagues[2]) {
                            newElement.chaosValueStandard = 0;
                        }
                    }
                });
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
}



function getData(url) {
    axios.get(`https://cors-anywhere.herokuapp.com/${url}`)
        .then(response => {
            //console.log(response); // SprawdŸ, czy otrzymujesz odpowiedŸ z serwera
            const data = response.data;
            // Process the data here

            const itemsAll = [
             /*   {
                    id: "id",
                    baseType: "baseType",
                    shortName: "empty",
                    name: "name",
                    image: "image",
                    chaosValueLeague: 0,
                    chaosValueHCLeague: 0,
                    chaosValueStandard: 0,
                }/** */
            ];

            if (data && data.lines) {
                data.lines.forEach(item => {
                    const newItem = {
                        id: item.id,
                        baseType: item.baseType,
                        shortName: "emptyyy",
                        name: item.name,
                        image: item.icon,
                        chaosValueLeague: item.chaosValue,
                        chaosValueHCLeague: 0,
                        chaosValueStandard: 0,
                    };
                    itemsAll.push(newItem);
                });
            }

            // Wrote data
            const textarea = document.createElement('textarea');
            let string = '';
            for (const item of itemsAll) {
                string += `{ id: ${item.id}, baseType: "${item.baseType}", shortName: "${item.shortName}", name: "${item.name}", image: "${item.image}", chaosValueLeague: ${item.chaosValueLeague}, chaosValueHCLeague: ${item.chaosValueHCLeague}, chaosValueStandard: ${item.chaosValueStandard} },\n`;
            }
            textarea.innerHTML = 'const uniqueItemsArray = [\n' + string + '];';
            textDiv.appendChild(textarea);
        })
        .catch(error => {
            console.error('Error:', error);
        });
}   /** */