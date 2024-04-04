console.log('processFile.js 123');
testSaving ();

//const uniqueArray = uniqueItemArray;

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

function testSaving () {
  console.log('processFile.js testSaving');
  const fs = require('fs');
  const stdA = fs.readFileSync('Ninja_json/Standard_UniqueJewel.json', 'utf8');
  //const stdB = fs.readFileSync('Ninja_json/Standard_UniqueWeapon.json', 'utf8');
  //const stdC = fs.readFileSync('Ninja_json/Standard_UniqueArmour.json', 'utf8');
  //const stdD = fs.readFileSync('Ninja_json/Standard_UniqueAccessory.json', 'utf8');
  //const arrayAll = [...JSON.parse(stdA), ...JSON.parse(stdB), ...JSON.parse(stdC), ...JSON.parse(stdD)];
  //console.log('processFile.js stdA ' + stdA);
  console.log('processFile.js parse ', JSON.parse(stdA));
  let string = '';
  //for (const item of arrayAll) {
  //  string += `{ id: ${item.id}, baseType: "${item.baseType}", shortName: "${item.shortName}", name: "${item.name}", image: "${item.image}", chaosValueLeague: ${item.chaosValueLeague}, chaosValueHCLeague: ${item.chaosValueHCLeague}, chaosValueStandard: ${item.chaosValueStandard} },\n`;
  //}
  const strAll = 'const uniqueItemArray = [\n' + string + '];';
  console.log('processFile.js strAll ');
  fs.writeFileSync('Ninja_json/GeneratedUniqueArray.js', strAll, 'utf8');
  console.log('processFile.js last ');
}
