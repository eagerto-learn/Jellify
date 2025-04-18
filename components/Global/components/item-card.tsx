import React from 'react'
import type { CardProps as TamaguiCardProps } from 'tamagui'
import { getToken, Card as TamaguiCard, View, YStack } from 'tamagui'
import { BaseItemDto } from '@jellyfin/sdk/lib/generated-client/models'
import { Text } from '../helpers/text'
import { Image } from 'expo-image'
import { getImageApi } from '@jellyfin/sdk/lib/utils/api'
import Client from '../../../api/client'

interface CardProps extends TamaguiCardProps {
	caption?: string | null | undefined
	subCaption?: string | null | undefined
	item: BaseItemDto
	squared?: boolean
}

export function ItemCard(props: CardProps) {
	return (
		<View alignItems='center' margin={5}>
			<TamaguiCard
				size={'$12'}
				height={props.size}
				width={props.size}
				backgroundColor={getToken('$color.amethyst')}
				circular={!props.squared}
				borderRadius={props.squared ? 5 : 'unset'}
				animation='bouncy'
				hoverStyle={props.onPress ? { scale: 0.925 } : {}}
				pressStyle={props.onPress ? { scale: 0.875 } : {}}
				{...props}
			>
				<TamaguiCard.Header></TamaguiCard.Header>
				<TamaguiCard.Footer padded>
					{/* { props.item.Type === 'MusicArtist' && (
                        <BlurhashedImage
                            cornered
                            item={props.item}
                            type={ImageType.Logo}
                            width={logoDimensions.width}
                            height={logoDimensions.height}
                            />
                        )} */}
				</TamaguiCard.Footer>
				<TamaguiCard.Background>
					<Image
						source={getImageApi(Client.api!).getItemImageUrlById(
							props.item.Type === 'Audio' ? props.item.AlbumId! : props.item.Id!,
						)}
						placeholder={
							props.item.ImageBlurHashes && props.item.ImageBlurHashes['Primary']
								? props.item.ImageBlurHashes['Primary'][0]
								: undefined
						}
						style={{
							width: '100%',
							height: '100%',
							borderRadius: props.squared ? 2 : 100,
						}}
					/>
				</TamaguiCard.Background>
			</TamaguiCard>
			{props.caption && (
				<YStack alignContent='center' alignItems='center' maxWidth={props.size}>
					<Text bold lineBreakStrategyIOS='standard' numberOfLines={1}>
						{props.caption}
					</Text>

					{props.subCaption && (
						<Text lineBreakStrategyIOS='standard' numberOfLines={1} textAlign='center'>
							{props.subCaption}
						</Text>
					)}
				</YStack>
			)}
		</View>
	)
}
