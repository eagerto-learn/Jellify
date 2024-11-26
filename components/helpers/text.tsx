import { H1 as TamaguiH1, H2 as TamaguiH2, SizeTokens, Label as TamaguiLabel, H5 } from "tamagui"

interface LabelProps {
    htmlFor: string,
    children: string,
    size: SizeTokens
}

export function Label(props: LabelProps): React.JSX.Element {
    return (
        <TamaguiLabel htmlFor={props.htmlFor} justifyContent="flex-end">{ props.children }</TamaguiLabel>
    )
}

export function H1({ children }: { children: string }): React.JSX.Element {
    return (
        <TamaguiH1 marginBottom={10}>{ children }</TamaguiH1>
    )
}

export function H2({ children }: { children: string }): React.JSX.Element {
    return (
        <TamaguiH2 marginVertical={25}>{ children }</TamaguiH2>
    )
}

interface TextProps {
    children: string,
    alignCenter?: boolean | undefined
}

export function Text(props: TextProps): React.JSX.Element {
    return (
        <H5 fontSize="$3" alignContent={props.alignCenter ? 'center' : 'unset'}>
            { props.children }
        </H5>
    )
}