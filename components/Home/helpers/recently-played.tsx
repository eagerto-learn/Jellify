import React, { useEffect } from "react";
import { Avatar, ScrollView, Text, YStack } from "tamagui";
import { useApiClientContext } from "../../jellyfin-api-provider";
import { Colors } from "../../../enums/colors";
import { useHomeContext } from "../provider";

export default function RecentlyPlayed(): React.JSX.Element {

    const { server } = useApiClientContext();
    const { recentTracks } = useHomeContext();

    useEffect(() => {
        console.log("Recently played", recentTracks);
    }, [
        recentTracks
    ])

    return (
        <ScrollView horizontal>
            { recentTracks && recentTracks.map((recentlyPlayedTrack) => {
                return (
                    <YStack maxWidth={150} gap="$2">
                        <Avatar borderRadius={2}>
                            <Avatar.Image src={`${server!.url}/Items/${recentlyPlayedTrack.AlbumId}/Images/Primary`} />
                            <Avatar.Fallback backgroundColor={Colors.Primary}/>
                        </Avatar>
                        <Text>{recentlyPlayedTrack.Name}</Text>
                    </YStack>
                )
            })}
        </ScrollView>
    )
}