import { selector } from "recoil";
import { countState, searchState, cartState } from "./atom";

export const countNextState = selector({
    key : "counterNextState",
    get : ({get}) => {
        return get(countState)
    }
})

export const searchNextState = selector({
    key : "searchNextState",
    get : ({get}) => {
        return get(searchState)
    }
})

export const cartNextState = selector({
    key : "cartNextState",
    get : ({get}) => {
        return get(cartState)
    }
})