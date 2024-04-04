const uniqueArray = uniqueItemArray;

function uniqueNewPrices(fileContent, l) {
    const data = JSON.parse(fileContent);
    if (data && data.lines) {
        data.lines.forEach(item => {
            const element = uniqueArray.find(i => i.id === item.id);

            if (element) {
                if (l === leagues[0]) {
                    element.chaosValueLeague = item.chaosValue;
                } else if (l === leagues[1]) {
                    element.chaosValueHCLeague = item.chaosValue;
                } else if (l === leagues[2]) {
                    element.chaosValueStandard = item.chaosValue;
                }
            }
        });
    }
}

function uniqueNewFile() {
    let string = '';
    for (const item of uniqueArray) {
        string += `{ id: ${item.id}, baseType: "${item.baseType}", shortName: "${item.shortName}", name: "${item.name}", image: "${item.image}", chaosValueLeague: ${item.chaosValueLeague}, chaosValueHCLeague: ${item.chaosValueHCLeague}, chaosValueStandard: ${item.chaosValueStandard} },\n`;
    }
    const body = 'const uniqueItemArray = [\n' + string + '];';

    const fs = require('fs');
    fs.writeFileSync('js/regex/GeneratedUniquePrices.js', body, 'utf8');
}

