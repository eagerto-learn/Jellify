import { animations, tokens as TamaguiTokens, media, shorthands } from '@tamagui/config/v3'
import { createTamagui, createTokens } from 'tamagui' // or '@tamagui/core'
import { headingFont, bodyFont } from './fonts.config'

const tokens = createTokens({
  ...TamaguiTokens,
  color: {
    purpleDark: "#070217",
    purple: "#100538",
    purpleGray: "#B5AADC",
    white: "#ffffff",
    black: "#000000"
  },
})

const jellifyConfig = createTamagui({
    animations,
    fonts:{
        heading: headingFont,
        body: bodyFont,
    },
    media,
    shorthands,
    tokens,
    themes: {
      dark: {
        background: tokens.color.purpleDark,
        borderColor: tokens.color.purple,
        color: tokens.color.white
      },
      light: {
        background: tokens.color.white,
        color: tokens.color.purpleDark
      }
    }
});

export type JellifyConfig = typeof jellifyConfig

declare module 'tamagui' {
  // or '@tamagui/core'
  // overrides TamaguiCustomConfig so your custom types
  // work everywhere you import `tamagui`
  interface TamaguiCustomConfig extends JellifyConfig {}
}

export default jellifyConfig