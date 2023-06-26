import {getCardMainRegionFromDeck} from "./utils";
import {LoRDeck} from "./models";
import {forsakenBaccaiMock, teemoMock} from "../mocks/card-reference.mock";

describe("test deck-utils utils.ts", () => {
    // @ts-ignore
    const teemoSwainDeck: LoRDeck = {"code":"EQCQCAIDFYAQCBAIAIDAUEIVAMBAGAIHBECAKCRRTAA2IANGAEBQCAQDBAAQKCQBAEDAGDQBAEBQGDI","cards":{"champions":[{"card":{"associatedCardRefs":["01PZ022","01PZ008T2","01PZ008T1"],"regions":["Piltover & Zaun","Bandle City"],"regionRefs":["PiltoverZaun","BandleCity"],"cost":1,"name":"Teemo","cardCode":"01PZ008","keywordRefs":["Elusive"],"spellSpeedRef":"","rarity":"Champion","rarityRef":"Champion","subtypes":["YORDLE"],"supertype":"Champion","type":"Unit","collectible":true,"formats":["Commons Only","Eternal","Standard"],"formatRefs":["client_Formats_CommonsOnly_name","client_Formats_Eternal_name","client_Formats_Standard_name"]},"count":3},{"card":{"associatedCardRefs":["02NX007T2","02NX007T1"],"regions":["Noxus"],"regionRefs":["Noxus"],"cost":5,"name":"Swain","cardCode":"02NX007","keywordRefs":["Fearsome"],"spellSpeedRef":"","rarity":"Champion","rarityRef":"Champion","subtypes":[],"supertype":"Champion","type":"Unit","collectible":true,"formats":["Commons Only","Eternal","Standard"],"formatRefs":["client_Formats_CommonsOnly_name","client_Formats_Eternal_name","client_Formats_Standard_name"]},"count":3}],"followers":[{"card":{"associatedCardRefs":["06BC015T3"],"regions":["Bandle City"],"regionRefs":["BandleCity"],"cost":2,"name":"Junk Construct","cardCode":"06BC021","keywordRefs":["LastBreath"],"spellSpeedRef":"","rarity":"COMMON","rarityRef":"Common","subtypes":["FAE"],"supertype":"","type":"Unit","collectible":true,"formats":["Commons Only","Eternal","Standard"],"formatRefs":["client_Formats_CommonsOnly_name","client_Formats_Eternal_name","client_Formats_Standard_name"]},"count":3},{"card":{"associatedCardRefs":[],"regions":["Bandle City"],"regionRefs":["BandleCity"],"cost":2,"name":"Conchologist","cardCode":"05BC049","keywordRefs":[],"spellSpeedRef":"","rarity":"RARE","rarityRef":"Rare","subtypes":["YORDLE"],"supertype":"","type":"Unit","collectible":true,"formats":["Eternal","Standard"],"formatRefs":["client_Formats_Eternal_name","client_Formats_Standard_name"]},"count":3},{"card":{"associatedCardRefs":["01NX046T1"],"regions":["Noxus"],"regionRefs":["Noxus"],"cost":3,"name":"Arachnoid Sentry","cardCode":"01NX046","keywordRefs":[],"spellSpeedRef":"","rarity":"COMMON","rarityRef":"Common","subtypes":["SPIDER"],"supertype":"","type":"Unit","collectible":true,"formats":["Commons Only","Eternal"],"formatRefs":["client_Formats_CommonsOnly_name","client_Formats_Eternal_name"]},"count":3},{"card":{"associatedCardRefs":[],"regions":["Bandle City","Piltover & Zaun"],"regionRefs":["BandleCity","PiltoverZaun"],"cost":4,"name":"Aloof Travelers","cardCode":"05BC152","keywordRefs":[],"spellSpeedRef":"","rarity":"COMMON","rarityRef":"Common","subtypes":["YORDLE"],"supertype":"","type":"Unit","collectible":true,"formats":["Commons Only","Eternal"],"formatRefs":["client_Formats_CommonsOnly_name","client_Formats_Eternal_name"]},"count":3},{"card":{"associatedCardRefs":["02NX007"],"regions":["Noxus"],"regionRefs":["Noxus"],"cost":7,"name":"The Leviathan","cardCode":"02NX001","keywordRefs":["Overwhelm"],"spellSpeedRef":"","rarity":"EPIC","rarityRef":"Epic","subtypes":[],"supertype":"","type":"Unit","collectible":true,"formats":["Eternal","Standard"],"formatRefs":["client_Formats_Eternal_name","client_Formats_Standard_name"]},"count":3}],"spells":[{"card":{"associatedCardRefs":[],"regions":["Noxus"],"regionRefs":["Noxus"],"cost":1,"name":"Ravenous Flock","cardCode":"02NX009","keywordRefs":["Fast"],"spellSpeedRef":"Fast","rarity":"RARE","rarityRef":"Rare","subtypes":[],"supertype":"","type":"Spell","collectible":true,"formats":["Eternal"],"formatRefs":["client_Formats_Eternal_name"]},"count":3},{"card":{"associatedCardRefs":["01PZ022"],"regions":["Bandle City"],"regionRefs":["BandleCity"],"cost":1,"name":"Poison Dart","cardCode":"05BC164","keywordRefs":["Slow"],"spellSpeedRef":"Slow","rarity":"COMMON","rarityRef":"Common","subtypes":[],"supertype":"","type":"Spell","collectible":true,"formats":["Commons Only","Eternal","Standard"],"formatRefs":["client_Formats_CommonsOnly_name","client_Formats_Eternal_name","client_Formats_Standard_name"]},"count":3},{"card":{"associatedCardRefs":[],"regions":["Bandle City"],"regionRefs":["BandleCity"],"cost":2,"name":"Pokey Stick","cardCode":"05BC166","keywordRefs":["Fast"],"spellSpeedRef":"Fast","rarity":"COMMON","rarityRef":"Common","subtypes":[],"supertype":"","type":"Spell","collectible":true,"formats":["Commons Only","Eternal"],"formatRefs":["client_Formats_CommonsOnly_name","client_Formats_Eternal_name"]},"count":3},{"card":{"associatedCardRefs":[],"regions":["Noxus"],"regionRefs":["Noxus"],"cost":2,"name":"Disintegrate","cardCode":"06NX014","keywordRefs":["Fast"],"spellSpeedRef":"Fast","rarity":"COMMON","rarityRef":"Common","subtypes":[],"supertype":"","type":"Spell","collectible":true,"formats":["Commons Only","Eternal","Standard"],"formatRefs":["client_Formats_CommonsOnly_name","client_Formats_Eternal_name","client_Formats_Standard_name"]},"count":2},{"card":{"associatedCardRefs":[],"regions":["Noxus"],"regionRefs":["Noxus"],"cost":3,"name":"Death's Hand","cardCode":"02NX008","keywordRefs":["Fast"],"spellSpeedRef":"Fast","rarity":"COMMON","rarityRef":"Common","subtypes":[],"supertype":"","type":"Spell","collectible":true,"formats":["Commons Only","Eternal"],"formatRefs":["client_Formats_CommonsOnly_name","client_Formats_Eternal_name"]},"count":2},{"card":{"associatedCardRefs":[],"regions":["Noxus"],"regionRefs":["Noxus"],"cost":3,"name":"Scorched Earth","cardCode":"03NX013","keywordRefs":["Fast"],"spellSpeedRef":"Fast","rarity":"COMMON","rarityRef":"Common","subtypes":[],"supertype":"","type":"Spell","collectible":true,"formats":["Commons Only","Eternal","Standard"],"formatRefs":["client_Formats_CommonsOnly_name","client_Formats_Eternal_name","client_Formats_Standard_name"]},"count":1},{"card":{"associatedCardRefs":["06BC015T3"],"regions":["Bandle City"],"regionRefs":["BandleCity"],"cost":5,"name":"Portalpalooza","cardCode":"06BC017","keywordRefs":["Focus"],"spellSpeedRef":"Burst","rarity":"RARE","rarityRef":"Rare","subtypes":[],"supertype":"","type":"Spell","collectible":true,"formats":["Eternal","Standard"],"formatRefs":["client_Formats_Eternal_name","client_Formats_Standard_name"]},"count":3},{"card":{"associatedCardRefs":["05BC001T1"],"regions":["Bandle City"],"regionRefs":["BandleCity"],"cost":6,"name":"Minimorph","cardCode":"05BC001","keywordRefs":["Burst"],"spellSpeedRef":"Burst","rarity":"RARE","rarityRef":"Rare","subtypes":[],"supertype":"","type":"Spell","collectible":true,"formats":["Eternal","Standard"],"formatRefs":["client_Formats_Eternal_name","client_Formats_Standard_name"]},"count":2}],"landmarks":[],"equipments":[]},"cardCostQt":{"0":0,"1":9,"2":11,"3":6,"4":3,"5":6,"6":2,"7":3,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0},"mainFactions":["BC","NX"],"factions":["NX","PZ","BC"],"factionCardsQt":{"DE":0,"FR":0,"IO":0,"NX":17,"PZ":3,"SI":0,"BW":0,"MT":0,"SH":0,"BC":20,"RU":0},"essenceCost":26900,"mainFactionCardsQt":{"BC":23,"NX":17},"formats":["client_Formats_Eternal_name"]};
    // @ts-ignore
    const teemoBraumDeck: LoRDeck = {"code":"EEBACAIBGIBQCBAZGU5AEBABAECASFRIAUAQIAIIBENTIAQDAECA2IZRA4AQCCQMDAOSSLRU","cards":{"champions":[{"card":{"associatedCardRefs":["01PZ022","01PZ008T2","01PZ008T1"],"regions":["Piltover & Zaun","Bandle City"],"regionRefs":["PiltoverZaun","BandleCity"],"cost":1,"name":"Teemo","cardCode":"01PZ008","keywordRefs":["Elusive"],"spellSpeedRef":"","rarity":"Champion","rarityRef":"Champion","subtypes":["YORDLE"],"supertype":"Champion","type":"Unit","collectible":true,"formats":["Commons Only","Eternal","Standard"],"formatRefs":["client_Formats_CommonsOnly_name","client_Formats_Eternal_name","client_Formats_Standard_name"]},"count":2},{"card":{"associatedCardRefs":["01FR053","01FR009T2","01FR009T1"],"regions":["Freljord"],"regionRefs":["Freljord"],"cost":4,"name":"Braum","cardCode":"01FR009","keywordRefs":["Challenger","Regeneration"],"spellSpeedRef":"","rarity":"Champion","rarityRef":"Champion","subtypes":[],"supertype":"Champion","type":"Unit","collectible":true,"formats":["Commons Only","Eternal"],"formatRefs":["client_Formats_CommonsOnly_name","client_Formats_Eternal_name"]},"count":2},{"card":{"associatedCardRefs":["01FR024T4","01FR024T3","01FR024T2","01FR024T1"],"regions":["Freljord"],"regionRefs":["Freljord"],"cost":6,"name":"Anivia","cardCode":"01FR024","keywordRefs":["LastBreath"],"spellSpeedRef":"","rarity":"Champion","rarityRef":"Champion","subtypes":[],"supertype":"Champion","type":"Unit","collectible":true,"formats":["Commons Only","Eternal"],"formatRefs":["client_Formats_CommonsOnly_name","client_Formats_Eternal_name"]},"count":1}],"followers":[{"card":{"associatedCardRefs":[],"regions":["Freljord"],"regionRefs":["Freljord"],"cost":1,"name":"Omen Hawk","cardCode":"01FR022","keywordRefs":[],"spellSpeedRef":"","rarity":"COMMON","rarityRef":"Common","subtypes":[],"supertype":"","type":"Unit","collectible":true,"formats":["Commons Only","Eternal","Standard"],"formatRefs":["client_Formats_CommonsOnly_name","client_Formats_Eternal_name","client_Formats_Standard_name"]},"count":2},{"card":{"associatedCardRefs":["01PZ010","01PZ022"],"regions":["Piltover & Zaun"],"regionRefs":["PiltoverZaun"],"cost":2,"name":"Clump of Whumps","cardCode":"01PZ053","keywordRefs":[],"spellSpeedRef":"","rarity":"COMMON","rarityRef":"Common","subtypes":[],"supertype":"","type":"Unit","collectible":true,"formats":["Commons Only","Eternal","Standard"],"formatRefs":["client_Formats_CommonsOnly_name","client_Formats_Eternal_name","client_Formats_Standard_name"]},"count":3},{"card":{"associatedCardRefs":[],"regions":["Freljord"],"regionRefs":["Freljord"],"cost":3,"name":"Kindly Tavernkeeper","cardCode":"01FR050","keywordRefs":[],"spellSpeedRef":"","rarity":"COMMON","rarityRef":"Common","subtypes":[],"supertype":"","type":"Unit","collectible":true,"formats":["Commons Only","Eternal"],"formatRefs":["client_Formats_CommonsOnly_name","client_Formats_Eternal_name"]},"count":3},{"card":{"associatedCardRefs":["01PZ022"],"regions":["Piltover & Zaun"],"regionRefs":["PiltoverZaun"],"cost":3,"name":"Puffcap Peddler","cardCode":"01PZ025","keywordRefs":["Imbue"],"spellSpeedRef":"","rarity":"COMMON","rarityRef":"Common","subtypes":[],"supertype":"","type":"Unit","collectible":true,"formats":["Commons Only","Eternal","Standard"],"formatRefs":["client_Formats_CommonsOnly_name","client_Formats_Eternal_name","client_Formats_Standard_name"]},"count":3},{"card":{"associatedCardRefs":[],"regions":["Piltover & Zaun"],"regionRefs":["PiltoverZaun"],"cost":3,"name":"Amateur Aeronaut","cardCode":"01PZ009","keywordRefs":["Elusive"],"spellSpeedRef":"","rarity":"COMMON","rarityRef":"Common","subtypes":[],"supertype":"","type":"Unit","collectible":true,"formats":["Commons Only","Eternal"],"formatRefs":["client_Formats_CommonsOnly_name","client_Formats_Eternal_name"]},"count":2},{"card":{"associatedCardRefs":["01PZ022","01PZ010"],"regions":["Piltover & Zaun"],"regionRefs":["PiltoverZaun"],"cost":4,"name":"Chump Whump","cardCode":"01PZ058","keywordRefs":[],"spellSpeedRef":"","rarity":"RARE","rarityRef":"Rare","subtypes":["YORDLE"],"supertype":"","type":"Unit","collectible":true,"formats":["Eternal","Standard"],"formatRefs":["client_Formats_Eternal_name","client_Formats_Standard_name"]},"count":3},{"card":{"associatedCardRefs":[],"regions":["Freljord"],"regionRefs":["Freljord"],"cost":5,"name":"Rimetusk Shaman","cardCode":"01FR040","keywordRefs":[],"spellSpeedRef":"","rarity":"RARE","rarityRef":"Rare","subtypes":[],"supertype":"","type":"Unit","collectible":true,"formats":["Eternal","Standard"],"formatRefs":["client_Formats_Eternal_name","client_Formats_Standard_name"]},"count":2},{"card":{"associatedCardRefs":[],"regions":["Freljord"],"regionRefs":["Freljord"],"cost":5,"name":"Avarosan Hearthguard ","cardCode":"01FR041","keywordRefs":[],"spellSpeedRef":"","rarity":"EPIC","rarityRef":"Epic","subtypes":[],"supertype":"","type":"Unit","collectible":true,"formats":["Eternal","Standard"],"formatRefs":["client_Formats_Eternal_name","client_Formats_Standard_name"]},"count":1},{"card":{"associatedCardRefs":["01PZ013T1"],"regions":["Piltover & Zaun"],"regionRefs":["PiltoverZaun"],"cost":6,"name":"Augmented Experimenter","cardCode":"01PZ013","keywordRefs":[],"spellSpeedRef":"","rarity":"EPIC","rarityRef":"Epic","subtypes":[],"supertype":"","type":"Unit","collectible":true,"formats":["Eternal","Standard"],"formatRefs":["client_Formats_Eternal_name","client_Formats_Standard_name"]},"count":1},{"card":{"associatedCardRefs":[],"regions":["Piltover & Zaun"],"regionRefs":["PiltoverZaun"],"cost":6,"name":"Jae Medarda","cardCode":"01PZ035","keywordRefs":[],"spellSpeedRef":"","rarity":"EPIC","rarityRef":"Epic","subtypes":[],"supertype":"","type":"Unit","collectible":true,"formats":["Eternal"],"formatRefs":["client_Formats_Eternal_name"]},"count":1},{"card":{"associatedCardRefs":["01FR052T1"],"regions":["Freljord"],"regionRefs":["Freljord"],"cost":10,"name":"She Who Wanders","cardCode":"01FR052","keywordRefs":["Regeneration"],"spellSpeedRef":"","rarity":"EPIC","rarityRef":"Epic","subtypes":[],"supertype":"","type":"Unit","collectible":true,"formats":["Eternal","Standard"],"formatRefs":["client_Formats_Eternal_name","client_Formats_Standard_name"]},"count":1}],"spells":[{"card":{"associatedCardRefs":[],"regions":["Piltover & Zaun"],"regionRefs":["PiltoverZaun"],"cost":0,"name":"Thermogenic Beam","cardCode":"01PZ027","keywordRefs":["Slow"],"spellSpeedRef":"Slow","rarity":"RARE","rarityRef":"Rare","subtypes":[],"supertype":"","type":"Spell","collectible":true,"formats":["Eternal"],"formatRefs":["client_Formats_Eternal_name"]},"count":2},{"card":{"associatedCardRefs":[],"regions":["Freljord"],"regionRefs":["Freljord"],"cost":1,"name":"Elixir of Iron","cardCode":"01FR004","keywordRefs":["Burst"],"spellSpeedRef":"Burst","rarity":"COMMON","rarityRef":"Common","subtypes":[],"supertype":"","type":"Spell","collectible":true,"formats":["Commons Only","Eternal","Standard"],"formatRefs":["client_Formats_CommonsOnly_name","client_Formats_Eternal_name","client_Formats_Standard_name"]},"count":2},{"card":{"associatedCardRefs":[],"regions":["Piltover & Zaun"],"regionRefs":["PiltoverZaun"],"cost":2,"name":"Rummage","cardCode":"01PZ001","keywordRefs":["Burst"],"spellSpeedRef":"Burst","rarity":"COMMON","rarityRef":"Common","subtypes":[],"supertype":"","type":"Spell","collectible":true,"formats":["Commons Only","Eternal","Standard"],"formatRefs":["client_Formats_CommonsOnly_name","client_Formats_Eternal_name","client_Formats_Standard_name"]},"count":2},{"card":{"associatedCardRefs":[],"regions":["Piltover & Zaun"],"regionRefs":["PiltoverZaun"],"cost":2,"name":"Mystic Shot","cardCode":"01PZ052","keywordRefs":["Fast"],"spellSpeedRef":"Fast","rarity":"COMMON","rarityRef":"Common","subtypes":[],"supertype":"","type":"Spell","collectible":true,"formats":["Commons Only","Eternal","Standard"],"formatRefs":["client_Formats_CommonsOnly_name","client_Formats_Eternal_name","client_Formats_Standard_name"]},"count":2},{"card":{"associatedCardRefs":[],"regions":["Freljord"],"regionRefs":["Freljord"],"cost":2,"name":"Entreat","cardCode":"01FR029","keywordRefs":["Burst"],"spellSpeedRef":"Burst","rarity":"RARE","rarityRef":"Rare","subtypes":[],"supertype":"","type":"Spell","collectible":true,"formats":["Eternal"],"formatRefs":["client_Formats_Eternal_name"]},"count":1},{"card":{"associatedCardRefs":[],"regions":["Freljord"],"regionRefs":["Freljord"],"cost":3,"name":"Take Heart","cardCode":"01FR046","keywordRefs":["Burst"],"spellSpeedRef":"Burst","rarity":"RARE","rarityRef":"Rare","subtypes":[],"supertype":"","type":"Spell","collectible":true,"formats":["Eternal"],"formatRefs":["client_Formats_Eternal_name"]},"count":1},{"card":{"associatedCardRefs":[],"regions":["Freljord"],"regionRefs":["Freljord"],"cost":4,"name":"Bloodsworn Pledge","cardCode":"01FR010","keywordRefs":["Burst"],"spellSpeedRef":"Burst","rarity":"RARE","rarityRef":"Rare","subtypes":[],"supertype":"","type":"Spell","collectible":true,"formats":["Eternal","Standard"],"formatRefs":["client_Formats_Eternal_name","client_Formats_Standard_name"]},"count":1},{"card":{"associatedCardRefs":[],"regions":["Freljord"],"regionRefs":["Freljord"],"cost":5,"name":"Catalyst of Aeons","cardCode":"01FR012","keywordRefs":["Burst"],"spellSpeedRef":"Burst","rarity":"COMMON","rarityRef":"Common","subtypes":[],"supertype":"","type":"Spell","collectible":true,"formats":["Commons Only","Eternal"],"formatRefs":["client_Formats_CommonsOnly_name","client_Formats_Eternal_name"]},"count":1},{"card":{"associatedCardRefs":[],"regions":["Piltover & Zaun"],"regionRefs":["PiltoverZaun"],"cost":8,"name":"Progress Day!","cardCode":"01PZ049","keywordRefs":["Burst"],"spellSpeedRef":"Burst","rarity":"EPIC","rarityRef":"Epic","subtypes":[],"supertype":"","type":"Spell","collectible":true,"formats":["Eternal"],"formatRefs":["client_Formats_Eternal_name"]},"count":1}],"landmarks":[],"equipments":[]},"cardCostQt":{"0":2,"1":6,"2":8,"3":9,"4":6,"5":4,"6":3,"7":0,"8":1,"9":0,"10":1,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0},"mainFactions":["PZ","FR"],"factions":["FR","PZ","BC"],"factionCardsQt":{"DE":0,"FR":18,"IO":0,"NX":0,"PZ":22,"SI":0,"BW":0,"MT":0,"SH":0,"BC":0,"RU":0},"essenceCost":26000,"mainFactionCardsQt":{"PZ":22,"FR":18},"formats":["client_Formats_Eternal_name"]};
    // @ts-ignore
    const kaynVayneDeck: LoRDeck = {"code":"EUDQCBQGDIAQMCJIAEDAGIQBAYGAKAQGAADBKAQGAIMSEAQGA4CSQBIBAIAACAIGBIOACBQABMAQMCJAAEDAIBYA","cards":{"champions":[{"card":{"associatedCardRefs":["06DE021T3","06DE021T2","06DE021T1"],"regions":["Demacia"],"regionRefs":["Demacia"],"cost":3,"name":"Vayne","cardCode":"06DE021","keywordRefs":[],"spellSpeedRef":"","rarity":"Champion","rarityRef":"Champion","subtypes":[],"supertype":"Champion","type":"Unit","collectible":true,"formats":["Eternal","Standard"],"formatRefs":["client_Formats_Eternal_name","client_Formats_Standard_name"]},"count":3},{"card":{"associatedCardRefs":["06RU005T3","06RU005T6","06RU005T4","06RU005T8","06RU005T2","06RU005T11","06RU005T1","06RU005T10"],"regions":["Runeterra"],"regionRefs":["Runeterra"],"cost":5,"name":"Kayn","cardCode":"06RU005","keywordRefs":["Challenger"],"spellSpeedRef":"","rarity":"Champion","rarityRef":"Champion","subtypes":["DARKIN"],"supertype":"Champion","type":"Unit","collectible":true,"formats":["Eternal","Standard"],"formatRefs":["client_Formats_Eternal_name","client_Formats_Standard_name"]},"count":3}],"followers":[{"card":{"associatedCardRefs":["06BW026T1"],"regions":["Bilgewater"],"regionRefs":["Bilgewater"],"cost":1,"name":"Buhru Cultist","cardCode":"06BW026","keywordRefs":[],"spellSpeedRef":"","rarity":"COMMON","rarityRef":"Common","subtypes":["CULTIST"],"supertype":"","type":"Unit","collectible":true,"formats":["Commons Only","Eternal","Standard"],"formatRefs":["client_Formats_CommonsOnly_name","client_Formats_Eternal_name","client_Formats_Standard_name"]},"count":3},{"card":{"associatedCardRefs":[],"regions":["Shurima"],"regionRefs":["Shurima"],"cost":1,"name":"Forsaken Baccai","cardCode":"06SH005","keywordRefs":[],"spellSpeedRef":"","rarity":"COMMON","rarityRef":"Common","subtypes":["CULTIST"],"supertype":"","type":"Unit","collectible":true,"formats":["Commons Only","Eternal","Standard"],"formatRefs":["client_Formats_CommonsOnly_name","client_Formats_Eternal_name","client_Formats_Standard_name"]},"count":3},{"card":{"associatedCardRefs":["03MT092T1"],"regions":["Targon"],"regionRefs":["Targon"],"cost":2,"name":"Lunari Cultist","cardCode":"06MT032","keywordRefs":[],"spellSpeedRef":"","rarity":"COMMON","rarityRef":"Common","subtypes":["CULTIST"],"supertype":"","type":"Unit","collectible":true,"formats":["Commons Only","Eternal","Standard"],"formatRefs":["client_Formats_CommonsOnly_name","client_Formats_Eternal_name","client_Formats_Standard_name"]},"count":2},{"card":{"associatedCardRefs":["01IO013"],"regions":["Ionia"],"regionRefs":["Ionia"],"cost":3,"name":"Shadowblade Fanatic","cardCode":"06IO025","keywordRefs":["QuickStrike"],"spellSpeedRef":"","rarity":"COMMON","rarityRef":"Common","subtypes":["CULTIST"],"supertype":"","type":"Unit","collectible":true,"formats":["Commons Only","Eternal","Standard"],"formatRefs":["client_Formats_CommonsOnly_name","client_Formats_Eternal_name","client_Formats_Standard_name"]},"count":3},{"card":{"associatedCardRefs":[],"regions":["Bandle City"],"regionRefs":["BandleCity"],"cost":3,"name":"Blooming Cultist","cardCode":"06BC028","keywordRefs":[],"spellSpeedRef":"","rarity":"COMMON","rarityRef":"Common","subtypes":["CULTIST"],"supertype":"","type":"Unit","collectible":true,"formats":["Commons Only","Eternal","Standard"],"formatRefs":["client_Formats_CommonsOnly_name","client_Formats_Eternal_name","client_Formats_Standard_name"]},"count":2},{"card":{"associatedCardRefs":[],"regions":["Demacia","Freljord"],"regionRefs":["Demacia","Freljord"],"cost":4,"name":"Combat Cook","cardCode":"06DE006","keywordRefs":[],"spellSpeedRef":"","rarity":"COMMON","rarityRef":"Common","subtypes":["WEAPONMASTER"],"supertype":"","type":"Unit","collectible":true,"formats":["Commons Only","Eternal","Standard"],"formatRefs":["client_Formats_CommonsOnly_name","client_Formats_Eternal_name","client_Formats_Standard_name"]},"count":3},{"card":{"associatedCardRefs":[],"regions":["Piltover & Zaun"],"regionRefs":["PiltoverZaun"],"cost":4,"name":"Ambitious Cultist","cardCode":"06PZ007","keywordRefs":[],"spellSpeedRef":"","rarity":"COMMON","rarityRef":"Common","subtypes":["CULTIST"],"supertype":"","type":"Unit","collectible":true,"formats":["Commons Only","Eternal","Standard"],"formatRefs":["client_Formats_CommonsOnly_name","client_Formats_Eternal_name","client_Formats_Standard_name"]},"count":2}],"spells":[{"card":{"associatedCardRefs":[],"regions":["Ionia"],"regionRefs":["Ionia"],"cost":1,"name":"Momentous Choice","cardCode":"06IO034","keywordRefs":["Burst"],"spellSpeedRef":"Burst","rarity":"RARE","rarityRef":"Rare","subtypes":["CULTIST"],"supertype":"","type":"Spell","collectible":true,"formats":["Eternal","Standard"],"formatRefs":["client_Formats_Eternal_name","client_Formats_Standard_name"]},"count":3},{"card":{"associatedCardRefs":[],"regions":["Targon"],"regionRefs":["Targon"],"cost":4,"name":"The Expanse's Protection","cardCode":"06MT040","keywordRefs":["Burst"],"spellSpeedRef":"Burst","rarity":"RARE","rarityRef":"Rare","subtypes":["CULTIST"],"supertype":"","type":"Spell","collectible":true,"formats":["Eternal","Standard"],"formatRefs":["client_Formats_Eternal_name","client_Formats_Standard_name"]},"count":3},{"card":{"associatedCardRefs":[],"regions":["Noxus"],"regionRefs":["Noxus"],"cost":4,"name":"Furious Wielder","cardCode":"06NX034","keywordRefs":["Fast"],"spellSpeedRef":"Fast","rarity":"RARE","rarityRef":"Rare","subtypes":["CULTIST"],"supertype":"","type":"Spell","collectible":true,"formats":["Eternal","Standard"],"formatRefs":["client_Formats_Eternal_name","client_Formats_Standard_name"]},"count":3},{"card":{"associatedCardRefs":[],"regions":["Shurima"],"regionRefs":["Shurima"],"cost":5,"name":"Heedless Resurrection","cardCode":"06SH040","keywordRefs":["Slow"],"spellSpeedRef":"Slow","rarity":"EPIC","rarityRef":"Epic","subtypes":["CULTIST"],"supertype":"","type":"Spell","collectible":true,"formats":["Eternal","Standard"],"formatRefs":["client_Formats_Eternal_name","client_Formats_Standard_name"]},"count":3},{"card":{"associatedCardRefs":[],"regions":["Demacia"],"regionRefs":["Demacia"],"cost":5,"name":"Concerted Strike","cardCode":"02DE001","keywordRefs":["Fast"],"spellSpeedRef":"Fast","rarity":"COMMON","rarityRef":"Common","subtypes":[],"supertype":"","type":"Spell","collectible":true,"formats":["Commons Only","Eternal"],"formatRefs":["client_Formats_CommonsOnly_name","client_Formats_Eternal_name"]},"count":2}],"landmarks":[],"equipments":[{"card":{"associatedCardRefs":["06DE011T1"],"regions":["Demacia"],"regionRefs":["Demacia"],"cost":2,"name":"The Darkin Aegis","cardCode":"06DE011","keywordRefs":["Equipment","Tough"],"spellSpeedRef":"","rarity":"EPIC","rarityRef":"Epic","subtypes":["DARKIN"],"supertype":"","type":"Equipment","collectible":true,"formats":["Eternal","Standard"],"formatRefs":["client_Formats_Eternal_name","client_Formats_Standard_name"]},"count":2}]},"cardCostQt":{"0":0,"1":9,"2":4,"3":8,"4":11,"5":8,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0},"mainFactions":["Kayn","DE"],"factions":["BW","MT","NX","RU","DE","FR","IO","SH","BC","PZ"],"factionCardsQt":{"DE":10,"FR":0,"IO":6,"NX":3,"PZ":2,"SI":0,"BW":3,"MT":5,"SH":6,"BC":2,"RU":3},"essenceCost":28700,"mainFactionCardsQt":{"Kayn":30,"DE":10},"formats":["client_Formats_Eternal_name"]}
    // @ts-ignore
    const akshanSivirDeck: LoRDeck = {"code":"EMBQCBQHAQAQKAAMAQCAOFBWLWBACBQBAYDQKAIDAAHACBAAAIAQEAABAIDAABQLAQCAON3HQAAYUAICAECAAAYBAQDTW","cards":{"champions":[{"card":{"associatedCardRefs":["04SH130T2","04SH130T5","04SH130T1","04SH130T10","04SH003T14","04SH130T6","04SH130T13","04SH130T14","04SH130T7","04SH130T8"],"regions":["Shurima"],"regionRefs":["Shurima"],"cost":2,"name":"Akshan","cardCode":"04SH130","keywordRefs":["QuickStrike"],"spellSpeedRef":"","rarity":"Champion","rarityRef":"Champion","subtypes":[],"supertype":"Champion","type":"Unit","collectible":true,"formats":["Commons Only","Eternal","Standard"],"formatRefs":["client_Formats_CommonsOnly_name","client_Formats_Eternal_name","client_Formats_Standard_name"]},"count":3},{"card":{"associatedCardRefs":["04SH020T1","04SH020T2"],"regions":["Shurima"],"regionRefs":["Shurima"],"cost":4,"name":"Sivir","cardCode":"04SH020","keywordRefs":["QuickStrike","SpellShield"],"spellSpeedRef":"","rarity":"Champion","rarityRef":"Champion","subtypes":[],"supertype":"Champion","type":"Unit","collectible":true,"formats":["Commons Only","Eternal"],"formatRefs":["client_Formats_CommonsOnly_name","client_Formats_Eternal_name"]},"count":3}],"followers":[{"card":{"associatedCardRefs":["04SH118","04SH003T14"],"regions":["Shurima"],"regionRefs":["Shurima"],"cost":1,"name":"Treasure Seeker","cardCode":"04SH054","keywordRefs":[],"spellSpeedRef":"","rarity":"COMMON","rarityRef":"Common","subtypes":[],"supertype":"","type":"Unit","collectible":true,"formats":["Commons Only","Eternal"],"formatRefs":["client_Formats_CommonsOnly_name","client_Formats_Eternal_name"]},"count":3},{"card":{"associatedCardRefs":[],"regions":["Shurima"],"regionRefs":["Shurima"],"cost":1,"name":"Forsaken Baccai","cardCode":"06SH005","keywordRefs":[],"spellSpeedRef":"","rarity":"COMMON","rarityRef":"Common","subtypes":["CULTIST"],"supertype":"","type":"Unit","collectible":true,"formats":["Commons Only","Eternal","Standard"],"formatRefs":["client_Formats_CommonsOnly_name","client_Formats_Eternal_name","client_Formats_Standard_name"]},"count":2},{"card":{"associatedCardRefs":[],"regions":["Demacia"],"regionRefs":["Demacia"],"cost":2,"name":"Petricite Broadwing","cardCode":"05DE012","keywordRefs":["Formidable"],"spellSpeedRef":"","rarity":"RARE","rarityRef":"Rare","subtypes":[],"supertype":"","type":"Unit","collectible":true,"formats":["Eternal","Standard"],"formatRefs":["client_Formats_Eternal_name","client_Formats_Standard_name"]},"count":3},{"card":{"associatedCardRefs":[],"regions":["Shurima"],"regionRefs":["Shurima"],"cost":3,"name":"Merciless Hunter","cardCode":"04SH103","keywordRefs":["Fearsome"],"spellSpeedRef":"","rarity":"COMMON","rarityRef":"Common","subtypes":[],"supertype":"","type":"Unit","collectible":true,"formats":["Commons Only","Eternal","Standard"],"formatRefs":["client_Formats_CommonsOnly_name","client_Formats_Eternal_name","client_Formats_Standard_name"]},"count":2},{"card":{"associatedCardRefs":["04SH130T1","04SH130T10"],"regions":["Shurima"],"regionRefs":["Shurima"],"cost":3,"name":"Vekauran Vagabond","cardCode":"04SH128","keywordRefs":[],"spellSpeedRef":"","rarity":"COMMON","rarityRef":"Common","subtypes":[],"supertype":"","type":"Unit","collectible":true,"formats":["Commons Only","Eternal","Standard"],"formatRefs":["client_Formats_CommonsOnly_name","client_Formats_Eternal_name","client_Formats_Standard_name"]},"count":2},{"card":{"associatedCardRefs":[],"regions":["Demacia","Freljord"],"regionRefs":["Demacia","Freljord"],"cost":4,"name":"Combat Cook","cardCode":"06DE006","keywordRefs":[],"spellSpeedRef":"","rarity":"COMMON","rarityRef":"Common","subtypes":["WEAPONMASTER"],"supertype":"","type":"Unit","collectible":true,"formats":["Commons Only","Eternal","Standard"],"formatRefs":["client_Formats_CommonsOnly_name","client_Formats_Eternal_name","client_Formats_Standard_name"]},"count":2},{"card":{"associatedCardRefs":[],"regions":["Shurima"],"regionRefs":["Shurima"],"cost":5,"name":"Ruin Runner","cardCode":"04SH055","keywordRefs":["Overwhelm","SpellShield"],"spellSpeedRef":"","rarity":"COMMON","rarityRef":"Common","subtypes":[],"supertype":"","type":"Unit","collectible":true,"formats":["Commons Only","Eternal"],"formatRefs":["client_Formats_CommonsOnly_name","client_Formats_Eternal_name"]},"count":2}],"spells":[{"card":{"associatedCardRefs":[],"regions":["Shurima"],"regionRefs":["Shurima"],"cost":1,"name":"Shaped Stone","cardCode":"04SH093","keywordRefs":["Burst"],"spellSpeedRef":"Burst","rarity":"COMMON","rarityRef":"Common","subtypes":[],"supertype":"","type":"Spell","collectible":true,"formats":["Commons Only","Eternal"],"formatRefs":["client_Formats_CommonsOnly_name","client_Formats_Eternal_name"]},"count":3},{"card":{"associatedCardRefs":[],"regions":["Demacia"],"regionRefs":["Demacia"],"cost":2,"name":"Sharpsight","cardCode":"03DE014","keywordRefs":["Burst"],"spellSpeedRef":"Burst","rarity":"COMMON","rarityRef":"Common","subtypes":[],"supertype":"","type":"Spell","collectible":true,"formats":["Commons Only","Eternal"],"formatRefs":["client_Formats_CommonsOnly_name","client_Formats_Eternal_name"]},"count":2},{"card":{"associatedCardRefs":["04SH138T1"],"regions":["Shurima"],"regionRefs":["Shurima"],"cost":2,"name":"The Absolver","cardCode":"04SH138","keywordRefs":["Burst"],"spellSpeedRef":"Burst","rarity":"COMMON","rarityRef":"Common","subtypes":[],"supertype":"","type":"Spell","collectible":true,"formats":["Commons Only","Eternal"],"formatRefs":["client_Formats_CommonsOnly_name","client_Formats_Eternal_name"]},"count":2},{"card":{"associatedCardRefs":[],"regions":["Demacia"],"regionRefs":["Demacia"],"cost":3,"name":"Cataclysm","cardCode":"04DE003","keywordRefs":["Slow"],"spellSpeedRef":"Slow","rarity":"RARE","rarityRef":"Rare","subtypes":[],"supertype":"","type":"Spell","collectible":true,"formats":["Eternal","Standard"],"formatRefs":["client_Formats_Eternal_name","client_Formats_Standard_name"]},"count":1},{"card":{"associatedCardRefs":[],"regions":["Shurima"],"regionRefs":["Shurima"],"cost":4,"name":"Rite of Negation","cardCode":"04SH059","keywordRefs":["Fast"],"spellSpeedRef":"Fast","rarity":"EPIC","rarityRef":"Epic","subtypes":[],"supertype":"","type":"Spell","collectible":true,"formats":["Eternal","Standard"],"formatRefs":["client_Formats_Eternal_name","client_Formats_Standard_name"]},"count":1},{"card":{"associatedCardRefs":[],"regions":["Demacia"],"regionRefs":["Demacia"],"cost":5,"name":"Golden Aegis","cardCode":"04DE002","keywordRefs":["Slow"],"spellSpeedRef":"Slow","rarity":"RARE","rarityRef":"Rare","subtypes":[],"supertype":"","type":"Spell","collectible":true,"formats":["Eternal"],"formatRefs":["client_Formats_Eternal_name"]},"count":2},{"card":{"associatedCardRefs":[],"regions":["Demacia"],"regionRefs":["Demacia"],"cost":5,"name":"Concerted Strike","cardCode":"02DE001","keywordRefs":["Fast"],"spellSpeedRef":"Fast","rarity":"COMMON","rarityRef":"Common","subtypes":[],"supertype":"","type":"Spell","collectible":true,"formats":["Commons Only","Eternal"],"formatRefs":["client_Formats_CommonsOnly_name","client_Formats_Eternal_name"]},"count":2}],"landmarks":[],"equipments":[{"card":{"associatedCardRefs":["06SH004T2","06SH004T1"],"regions":["Shurima"],"regionRefs":["Shurima"],"cost":1,"name":"The Darkin Bloodletters","cardCode":"06SH004","keywordRefs":["Equipment"],"spellSpeedRef":"","rarity":"EPIC","rarityRef":"Epic","subtypes":["DARKIN"],"supertype":"","type":"Equipment","collectible":true,"formats":["Eternal","Standard"],"formatRefs":["client_Formats_Eternal_name","client_Formats_Standard_name"]},"count":3},{"card":{"associatedCardRefs":["06DE011T1"],"regions":["Demacia"],"regionRefs":["Demacia"],"cost":2,"name":"The Darkin Aegis","cardCode":"06DE011","keywordRefs":["Equipment","Tough"],"spellSpeedRef":"","rarity":"EPIC","rarityRef":"Epic","subtypes":["DARKIN"],"supertype":"","type":"Equipment","collectible":true,"formats":["Eternal","Standard"],"formatRefs":["client_Formats_Eternal_name","client_Formats_Standard_name"]},"count":2}]},"cardCostQt":{"0":0,"1":11,"2":12,"3":5,"4":6,"5":6,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0},"mainFactions":["SH","DE"],"factions":["SH","DE","FR"],"factionCardsQt":{"DE":14,"FR":0,"IO":0,"NX":0,"PZ":0,"SI":0,"BW":0,"MT":0,"SH":26,"BC":0,"RU":0},"essenceCost":29200,"mainFactionCardsQt":{"SH":26,"DE":14},"formats":["client_Formats_Eternal_name"]}

    it("should getCardMainRegionFromDeck, from BC/NX deck - Teemo acts like bandle city", () => {
        expect(getCardMainRegionFromDeck(teemoMock, teemoSwainDeck)).toBe('BC');
    });

    it("should getCardMainRegionFromDeck, from PZ/FR deck - Teemo acts like Piltover & Zaun", () => {
        expect(getCardMainRegionFromDeck(teemoMock, teemoBraumDeck)).toBe('PZ');
    });

    it("should getCardMainRegionFromDeck, from Kayn/DE deck - forsaken Baccai has to act like Kayn deckbuilding", () => {
        expect(getCardMainRegionFromDeck(forsakenBaccaiMock, kaynVayneDeck)).toBe('Kayn');
    });

    it("should getCardMainRegionFromDeck, from SH/DE deck - forsaken Baccai has to act like Shurima", () => {
        expect(getCardMainRegionFromDeck(forsakenBaccaiMock, akshanSivirDeck)).toBe('SH');
    });
});