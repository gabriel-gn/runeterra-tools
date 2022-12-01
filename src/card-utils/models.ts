export enum CARD_TYPE {
    CHAMPION = 'Champion',
    FOLLOWER = 'Follower',
    SPELL = 'Spell',
    LANDMARK = 'Landmark',
    EQUIPMENT = 'Equipment',
}
export type CardType = `${CARD_TYPE.CHAMPION}`
    | `${CARD_TYPE.FOLLOWER}`
    | `${CARD_TYPE.SPELL}`
    | `${CARD_TYPE.LANDMARK}`
    | `${CARD_TYPE.EQUIPMENT}`
