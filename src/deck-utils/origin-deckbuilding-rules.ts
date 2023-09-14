// this is an auto-generated file from generate-origin-deckbuilding-rules.ts
import { RiotLoRCard } from "../riot-assets/models-cards";
import { DeckbuildingRule, DeckCard, LoRDeck } from "./models";
import { RIOT_LOR_ORIGIN_REGION_ABBREVIATION } from "../riot-assets/models-globals";

export const originDeckbuildingRules: DeckbuildingRule[] = [
  {
    name: "The Virtuoso",
    abbreviation: RIOT_LOR_ORIGIN_REGION_ABBREVIATION.JHIN,
    doesDeckMeetCondition: (lorDeck: LoRDeck) => {
      return lorDeck.cards.champions.some(
        (c: DeckCard) => c.card.cardCode === "06RU002"
      );
    },
    doesCardMeetCondition: (card: RiotLoRCard) => {
      const champion06RU002Cards = [
        "01IO056",
        "01IO033",
        "01NX006T1",
        "01NX046",
        "01NX040",
        "01PZ013",
        "01PZ048",
        "01PZ054",
        "01PZ030",
        "01PZ044",
        "01FR036",
        "01FR021",
        "01FR052",
        "01SI035",
        "01SI033",
        "02BW056",
        "02BW060",
        "02BW028",
        "02BW032T3",
        "02BW022T2",
        "02BW026T3",
        "02NX004",
        "02IO006T1",
        "03NX017",
        "03DE004",
        "03FR003",
        "03MT001",
        "03MT220",
        "03MT054T1",
        "03SI006",
        "04PZ005",
        "04PZ005T1",
        "04PZ020",
        "04BW007",
        "04BW016",
        "04SH089",
        "04SH067T1",
        "04SH067T4",
        "04SH009",
        "04SH097",
        "04SI007",
        "04SI012",
        "04MT013",
        "05BC163T1",
        "05FR006",
        "05PZ031",
        "05PZ014",
        "06NX024",
        "06NX013",
        "06NX009",
        "06RU002T1",
        "06RU002T5",
        "06IO004",
        "06IO003",
        "06SH009T2",
        "06SI012T1",
        "06MT018",
        "06BC051",
        "06IO015",
        "06PZ036",
        "06BW026",
        "06SH021",
        "07IO023",
        "07SH009",
        "07SH003",
        "06RU002",
      ];
      return champion06RU002Cards.includes(card.cardCode);
    },
  },
  {
    name: "The Wandering Caretaker",
    abbreviation: RIOT_LOR_ORIGIN_REGION_ABBREVIATION.BARD,
    doesDeckMeetCondition: (lorDeck: LoRDeck) => {
      return lorDeck.cards.champions.some(
        (c: DeckCard) => c.card.cardCode === "06RU001"
      );
    },
    doesCardMeetCondition: (card: RiotLoRCard) => {
      const champion06RU001Cards = [
        "06MT029",
        "06MT047",
        "06RU001",
        "06RU001T8",
        "06RU001T4",
        "06RU001T9",
        "06RU045",
        "06BC044",
        "06BC026",
        "06BC031",
        "06BC011",
        "06BC032",
        "08SI021",
        "08BC005",
      ];
      return champion06RU001Cards.includes(card.cardCode);
    },
  },
  {
    name: "Agony's Embrace",
    abbreviation: RIOT_LOR_ORIGIN_REGION_ABBREVIATION.EVELYNN,
    doesDeckMeetCondition: (lorDeck: LoRDeck) => {
      return lorDeck.cards.champions.some(
        (c: DeckCard) => c.card.cardCode === "06RU025"
      );
    },
    doesCardMeetCondition: (card: RiotLoRCard) => {
      const champion06RU025Cards = [
        "06RU025",
        "06RU025T14",
        "06RU025T5",
        "06PZ025",
        "06BW018",
        "06SH034",
        "06DE030",
        "06SI020",
        "06SI018",
        "06SI019",
        "07BW033",
        "07IO049",
      ];
      return champion06RU025Cards.includes(card.cardCode);
    },
  },
  {
    name: "The Shadow Reaper",
    abbreviation: RIOT_LOR_ORIGIN_REGION_ABBREVIATION.KAYN,
    doesDeckMeetCondition: (lorDeck: LoRDeck) => {
      return lorDeck.cards.champions.some(
        (c: DeckCard) => c.card.cardCode === "06RU005"
      );
    },
    doesCardMeetCondition: (card: RiotLoRCard) => {
      const champion06RU005Cards = [
        "06NX019",
        "06NX034",
        "06MT040",
        "06MT032",
        "06FR034",
        "06FR017",
        "06BC038",
        "06BC028",
        "06IO034",
        "06IO025",
        "06IO034T2",
        "06IO034T1",
        "06PZ007",
        "06PZ037",
        "06BW039",
        "06BW026",
        "06BW026T1",
        "06SH004T1",
        "06SH005",
        "06SH040",
        "06DE040",
        "06DE010",
        "06SI006",
        "06SI036",
        "06RU005",
      ];
      return champion06RU005Cards.includes(card.cardCode);
    },
  },
  {
    name: "Grandmaster At Arms",
    abbreviation: RIOT_LOR_ORIGIN_REGION_ABBREVIATION.JAX,
    doesDeckMeetCondition: (lorDeck: LoRDeck) => {
      return lorDeck.cards.champions.some(
        (c: DeckCard) => c.card.cardCode === "06RU008"
      );
    },
    doesCardMeetCondition: (card: RiotLoRCard) => {
      const champion06RU008Cards = [
        "06NX023",
        "06MT004",
        "06RU008",
        "06RU008T7",
        "06BC047",
        "06IO028",
        "06BW029",
        "06BW027",
        "06DE024",
        "06DE039",
        "06DE017",
        "06DE017T1",
        "06DE017T2",
        "06DE006",
        "06DE024T1",
        "06DE024T2",
        "06SI031",
        "06SI003",
        "06SI031T1",
        "07NX005",
        "07FR009",
      ];
      return champion06RU008Cards.includes(card.cardCode);
    },
  },
  {
    name: "The Arrow of Retribution",
    abbreviation: RIOT_LOR_ORIGIN_REGION_ABBREVIATION.VARUS,
    doesDeckMeetCondition: (lorDeck: LoRDeck) => {
      return lorDeck.cards.champions.some(
        (c: DeckCard) => c.card.cardCode === "06RU009"
      );
    },
    doesCardMeetCondition: (card: RiotLoRCard) => {
      const champion06RU009Cards = [
        "06NX019",
        "06NX034",
        "06MT040",
        "06MT032",
        "06FR034",
        "06FR017",
        "06BC038",
        "06BC028",
        "06IO034",
        "06IO025",
        "06IO034T2",
        "06IO034T1",
        "06PZ007",
        "06PZ037",
        "06BW039",
        "06BW026",
        "06BW026T1",
        "06SH004T1",
        "06SH005",
        "06SH040",
        "06DE040",
        "06DE010",
        "06SI006",
        "06SI036",
        "06RU009",
      ];
      return champion06RU009Cards.includes(card.cardCode);
    },
  },
  {
    name: "The Rune Mage",
    abbreviation: RIOT_LOR_ORIGIN_REGION_ABBREVIATION.RYZE,
    doesDeckMeetCondition: (lorDeck: LoRDeck) => {
      return lorDeck.cards.champions.some(
        (c: DeckCard) => c.card.cardCode === "06RU006"
      );
    },
    doesCardMeetCondition: (card: RiotLoRCard) => {
      const champion06RU006Cards = [
        "01IO041T2",
        "01IO029",
        "01IO032T2",
        "01IO010",
        "01IO054",
        "01NX025",
        "01NX039",
        "01NX052",
        "01DE019",
        "01DE050",
        "01DE027",
        "01DE041",
        "01PZ056T3",
        "01PZ028",
        "01PZ046",
        "01PZ001",
        "01PZ049",
        "01PZ016",
        "01FR024T1",
        "01FR042",
        "01FR029",
        "01FR016",
        "01FR012",
        "01FR010",
        "01SI047",
        "02PZ009",
        "02BW026T1",
        "02BW043",
        "02BW023",
        "02BW029",
        "02BW049",
        "02BW044",
        "02FR010",
        "02FR003",
        "02DE007",
        "02SI005",
        "02SI008T1",
        "02SI009",
        "02IO009",
        "03MT015",
        "03MT004",
        "03MT077",
        "03MT032",
        "03MT003T2",
        "03MT003T1",
        "03MT073T1",
        "03MT217T11",
        "03MT091",
        "03MT003",
        "03MT215",
        "03MT017",
        "03MT085",
        "03MT218",
        "03PZ014",
        "03PZ013",
        "03PZ025",
        "03PZ018",
        "03SI004",
        "03SI014",
        "03SI013",
        "03IO008",
        "03IO002T5",
        "03FR018",
        "03FR019",
        "04PZ007",
        "04BW014",
        "04BW008",
        "04BW004",
        "04IO007",
        "04SH100",
        "04SH019T2",
        "04SH080",
        "04SH035",
        "04SH039T3",
        "04SH039T2",
        "04SH073T3",
        "04SH003T4",
        "04SH003T9",
        "04SH130T13",
        "04SH130T7",
        "04SH130T8",
        "04SH130T10",
        "04SH130T12",
        "04SH130T9",
        "04SH130T11",
        "04SH120",
        "04SH109T1",
        "04SH099",
        "04SH098T3",
        "04SH098T12",
        "04SH098T7",
        "04SH098T6",
        "04SH098T2",
        "04SH098T10",
        "04SH098T5",
        "04SH098T8",
        "04SH098T1",
        "04SH120T2",
        "04SH120T1",
        "04SH034T1",
        "04SH034T2",
        "04SH034T3",
        "04SH037",
        "04SH030",
        "04SH066",
        "04SH083",
        "04SH092",
        "04SH110",
        "04SH106",
        "04FR010",
        "04NX002",
        "04NX001",
        "04MT015",
        "04DE012",
        "05BC230",
        "05BC200",
        "05BC136",
        "05BC141",
        "05BC209",
        "05BC001",
        "05BC026",
        "05BC218",
        "05BC217",
        "05BC040",
        "05FR016",
        "05IO006",
        "05SH018",
        "05SH020",
        "05NX003",
        "05PZ030",
        "05MT009",
        "05MT002",
        "06NX037",
        "06MT045",
        "06MT043",
        "06RU001T8",
        "06RU045",
        "06FR039",
        "06BC045",
        "06BC040",
        "06IO036",
        "06PZ032",
        "06PZ043",
        "06PZ027",
        "06PZ039",
        "06BW030",
        "06BW011T1",
        "06BW037",
        "06BW043",
        "06SH048",
        "06SH042",
        "06SH050",
        "06DE042",
        "06DE037T1",
        "06DE030",
        "06SI037",
        "06SI030",
        "06MT015",
        "06RU008T8",
        "06RU006T3",
        "06RU006T11",
        "06RU041",
        "06RU043",
        "06FR032",
        "06FR041",
        "06BC015T1",
        "06BC043",
        "06BC017",
        "06BC011",
        "06IO014T1",
        "06IO001T1",
        "06PZ006",
        "06PZ046",
        "06PZ022",
        "06BW027",
        "06SH033",
        "06DE026",
        "06DE040",
        "06DE026T1",
        "06DE026T2",
        "07NX007T5",
        "07BW026",
        "07IO011T5",
        "07IO017",
        "07BC015",
        "07RU015T3",
        "07RU015T6",
        "07RU015T2",
        "07RU015T7",
        "07RU016",
        "07IO041",
        "07SH038T2",
        "07SH041",
        "07SH013T7",
        "07SH013T5",
        "07SH009T2",
        "07SH003T3",
        "07SH039T1",
        "07SH043T2",
        "07SH044T1",
        "07MT013",
        "07MT013T1",
        "07MT013T2",
        "08BW008T3",
        "08BW008T5",
        "08BW032",
        "08BW002",
        "06RU006",
      ];
      return champion06RU006Cards.includes(card.cardCode);
    },
  },
  {
    name: "The World Ender",
    abbreviation: RIOT_LOR_ORIGIN_REGION_ABBREVIATION.AATROX,
    doesDeckMeetCondition: (lorDeck: LoRDeck) => {
      return lorDeck.cards.champions.some(
        (c: DeckCard) => c.card.cardCode === "06RU026"
      );
    },
    doesCardMeetCondition: (card: RiotLoRCard) => {
      const champion06RU026Cards = [
        "06NX020T1",
        "06NX020T5",
        "06NX020",
        "06MT035",
        "06MT035T1",
        "06MT006",
        "06MT006T2",
        "06MT006T3",
        "06RU005",
        "06RU005T11",
        "06RU005T2",
        "06RU005T3",
        "06RU005T8",
        "06RU026",
        "06RU026T1",
        "06RU026T3",
        "06RU009",
        "06RU009T7",
        "06RU009T6",
        "06FR018",
        "06FR018T1",
        "06FR018T3",
        "06BC029",
        "06BC029T1",
        "06BC029T3",
        "06IO023",
        "06IO023T1",
        "06IO023T3",
        "06PZ008",
        "06PZ008T3",
        "06PZ008T2",
        "06BW014",
        "06BW014T1",
        "06BW014T3",
        "06SH004T4",
        "06SH004",
        "06SH004T2",
        "06DE011",
        "06DE011T1",
        "06DE011T4",
        "06SI007",
        "06SI007T4",
        "06SI007T1",
      ];
      return champion06RU026Cards.includes(card.cardCode);
    },
  },
  {
    name: "Many-Shaped Jungle Friends",
    abbreviation: RIOT_LOR_ORIGIN_REGION_ABBREVIATION.NEEKO,
    doesDeckMeetCondition: (lorDeck: LoRDeck) => {
      return lorDeck.cards.champions.some(
        (c: DeckCard) => c.card.cardCode === "07RU012"
      );
    },
    doesCardMeetCondition: (card: RiotLoRCard) => {
      const champion07RU012Cards = [
        "01IO028",
        "01IO028T2",
        "01IO028T1",
        "01IO016",
        "01NX023",
        "01NX046",
        "01NX055",
        "01NX015",
        "01DE010",
        "01DE004",
        "01DE029",
        "01DE030",
        "01PZ033T1",
        "01PZ023",
        "01FR024",
        "01FR024T3",
        "01FR024T4",
        "01FR022",
        "01FR018",
        "01FR049",
        "01FR026",
        "01FR027",
        "01FR017",
        "01SI053",
        "01SI053T2",
        "01SI057",
        "01SI027T1",
        "01SI002",
        "01SI056",
        "01SI039",
        "02PZ001",
        "02DE006T2",
        "03NX017",
        "03MT083",
        "03MT018",
        "03MT034",
        "03MT214",
        "03PZ002",
        "03SI003",
        "03IO017",
        "03IO008T1",
        "03IO001",
        "03IO011",
        "03IO009",
        "03IO007T1",
        "04PZ002",
        "04PZ013",
        "04SH003",
        "04SH003T2",
        "04SH003T3",
        "04SH067",
        "04SH067T1",
        "04SH067T4",
        "04SH047",
        "04SH047T2",
        "04SH047T3",
        "04FR019T1",
        "04FR019",
        "04NX019",
        "04NX016",
        "04NX018",
        "04SI007",
        "04SI004T1",
        "04SI009",
        "04MT013",
        "04DE015",
        "05BC029",
        "05BC148",
        "05BC029T5",
        "05BC029T7",
        "05BC029T4",
        "05BC029T8",
        "05BC029T3",
        "05BC019",
        "05BC019T1",
        "05BC019T2",
        "05BC221",
        "05BC066",
        "05BC177",
        "05BC177T2",
        "05BC177T1",
        "05BC100",
        "05BC014",
        "05BC020",
        "05BC167T1",
        "05BC015",
        "05BC015T1",
        "05BC066T1",
        "05BC066T2",
        "05BC032",
        "05BC112",
        "05BC112T2",
        "05BC112T1",
        "05BC014T1",
        "05BC175",
        "05BC183",
        "06NX032",
        "06NX013",
        "06MT041",
        "06FR030",
        "06FR030T2",
        "06FR030T1",
        "06NX044",
        "06NX041",
        "06MT042",
        "06BC019",
        "06BC021",
        "06BC024",
        "06BC016",
        "06PZ041",
        "06BW044",
        "06DE043",
        "06DE034",
        "07IO046",
        "07IO047",
        "07FR008",
        "07FR008T2",
        "07FR008T1",
        "07SI007",
        "07BC005",
        "07PZ021",
        "07NX033",
        "07BW042",
        "07SH038",
        "07SH038T1",
        "07SH013",
        "07SH013T4",
        "07SH044",
        "07FR010",
        "07FR017",
        "07FR016",
        "07SI010",
        "07SI010T1",
        "07SI012",
        "07BC018",
        "07BC011",
        "07DE015",
        "08PZ026T1",
        "08MT027",
        "07RU012",
      ];
      return champion07RU012Cards.includes(card.cardCode);
    },
  },
  {
    name: "The Poro King's Decree",
    abbreviation: RIOT_LOR_ORIGIN_REGION_ABBREVIATION.PORO_KING,
    doesDeckMeetCondition: (lorDeck: LoRDeck) => {
      return lorDeck.cards.champions.some(
        (c: DeckCard) => c.card.cardCode === "07RU015"
      );
    },
    doesCardMeetCondition: (card: RiotLoRCard) => {
      const champion07RU015Cards = [
        "01IO005",
        "01NX034",
        "01DE049",
        "01PZ020",
        "01FR008",
        "01FR008T1",
        "01FR025",
        "01FR043",
        "01FR016",
        "01FR053",
        "01FR043T1",
        "01SI037",
        "02BW010",
        "02FR003",
        "03MT039",
        "03PZ019",
        "03PZ018",
        "04SH049",
        "04SH049T1",
        "04FR015",
        "05BC160",
        "05BC140",
        "06FR021",
        "06BC043",
        "07RU015",
        "07RU015T3",
        "07RU015T1",
        "07RU015T4",
      ];
      return champion07RU015Cards.includes(card.cardCode);
    },
  },
];
