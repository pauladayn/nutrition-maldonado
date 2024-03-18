import { Poppins, Montserrat, Cormorant_Garamond, DM_Sans } from "next/font/google";

export const poppins = Poppins({
    subsets: ['latin'],
    display: 'swap',
    weight: ['200', '400', '700', '900']
})

export const montserrat = Montserrat({
    subsets: ['latin'],
    display: 'swap',
    style: ['normal'],
    weight: ['200', '400', '700', '900']
})

export const cormorant = Cormorant_Garamond({
    subsets: ['latin'],
    display: 'swap',
    style: ['italic', 'normal'],
    weight: ['300', '500', '700']
})

export const dmSans = DM_Sans({
    subsets: ['latin'],
    display: 'swap',
    weight: ['100', '300', '500', '800', '1000']
})