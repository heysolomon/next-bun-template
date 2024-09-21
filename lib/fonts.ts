import { Inter } from "next/font/google";
// import localFont from 'next/font/local'

export const inter = Inter({
    display: 'swap',
    subsets: ["latin"],
    weight: ['300', '400', "500", "600", "700"],
    variable: '--font-inter',
})

// local font sample
// export const fontName = localFont({
//     display: 'swap',
//     src: "../public/fonts/name of the font",
//     weight: '400',
//     variable: '--font-',
// })
