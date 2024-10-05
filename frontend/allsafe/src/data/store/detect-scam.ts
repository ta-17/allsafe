import { create } from 'zustand'

type DetectScamStore = {
    sharedMsg: string
    sharedSubmit: boolean
    setSharedMsg: (msg: string) => void
    setSharedSubmit: () => void
}

export const useDetectScamStore = create<DetectScamStore>((set) => ({
    sharedMsg: '',
    sharedSubmit: false,
    setSharedMsg: (msg: string) => set({ sharedMsg: msg }),
    setSharedSubmit: () =>
        set((state) => ({ sharedSubmit: !state.sharedSubmit })),
}))
