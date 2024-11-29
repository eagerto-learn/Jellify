import { ScrollView, YStack } from "tamagui";
import _ from "lodash";
import { H2 } from "../Global/text";
import RecentlyPlayed from "./helpers/recently-played";
import { useApiClientContext } from "../jellyfin-api-provider";
import RecentArtists from "./helpers/recent-artists";
import { RefreshControl } from "react-native";
import { HomeProvider, useHomeContext } from "./provider";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeStackParamList, ProvidedHomeProps } from "./types";
import { HomeArtistScreen } from "./screens/artist";
import { SafeAreaView } from "react-native-safe-area-context";

export const HomeStack = createNativeStackNavigator<HomeStackParamList>();

export default function Home(): React.JSX.Element {

    return (
        <HomeProvider>
            <HomeStack.Navigator 
                id="Home" 
                initialRouteName="Home"
                screenOptions={{
                }}
            >
                <HomeStack.Screen 
                    name="Home" 
                    component={ProvidedHome} 
                    options={{
                        headerShown: false
                    }}
                />

                <HomeStack.Screen 
                    name="Artist" 
                    component={HomeArtistScreen} 
                    options={({ route }) => ({
                        title: route.params.artistName,
                        headerLargeTitle: true,
                        headerLargeTitleStyle: {
                            fontFamily: 'Aileron-Bold'
                        }
                    })}
                />
            </HomeStack.Navigator>
        </HomeProvider>
    );
}

function ProvidedHome({ route, navigation }: ProvidedHomeProps): React.JSX.Element {

    const { user } = useApiClientContext();

    const { refreshing: refetching, onRefresh: onRefetch } = useHomeContext()

    return (
        <SafeAreaView>
            <ScrollView 
                contentInsetAdjustmentBehavior="automatic"
                paddingLeft={10}
                refreshControl={
                    <RefreshControl 
                        refreshing={refetching} 
                        onRefresh={onRefetch}
                    />
                }>
                <YStack alignContent='flex-start'>
                    <H2>{`Hi, ${user!.name}`}</H2>
                    <RecentArtists route={route} navigation={navigation} />
                    <RecentlyPlayed />
                </YStack>
            </ScrollView>
        </SafeAreaView>
    );
}