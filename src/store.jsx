import { atom } from "jotai"

export const apiDataAtom = atom(null)

export const filterTagAtom = atom(null)

export const allFilterTagsAtom = atom({
  keywords: [],
})
