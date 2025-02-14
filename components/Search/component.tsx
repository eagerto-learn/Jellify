import React, { useCallback, useState } from "react";
import Input from "../Global/helpers/input";
import Item from "../Global/components/item";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParamList } from "../types";
import { QueryKeys } from "../../enums/query-keys";
import { fetchSearchResults } from "../../api/queries/functions/search";
import { useQuery } from "@tanstack/react-query";
import { FlatList, useColorScheme } from "react-native";
import { Text } from "../Global/helpers/text";

export default function Search({ 
    navigation
 }: { 
    navigation: NativeStackNavigationProp<StackParamList>
}): React.JSX.Element {

    const isDarkMode = useColorScheme() === 'dark';
    const [searchString, setSearchString] = useState<string | undefined>(undefined);

    const { data: items, refetch, isFetched, isFetching } = useQuery({
        queryKey: [QueryKeys.Search, searchString],
        queryFn: () => fetchSearchResults(searchString)
    })

    const search = useCallback(() => {

        let timeout : NodeJS.Timeout;
        
        return () => {
            clearTimeout(timeout);
            timeout = setTimeout(() => refetch, 1000)
        }
    }, []);

    const handleSearchStringUpdate = (value: string | undefined) => {
        setSearchString(value)
        search();
    }

    return (
        <FlatList
            contentInsetAdjustmentBehavior="automatic"
            progressViewOffset={10}
            ListHeaderComponent={(
                <Input
                    placeholder="Seek and ye shall find..."
                    onChangeText={(value) => handleSearchStringUpdate(value)}
                    value={searchString}
                />
            )}
            ListEmptyComponent={(
                <Text>No results found</Text>
            )}
            data={items}
            refreshing={isFetching}
            renderItem={({ index, item }) => {
                return (
                    <Item item={item} queueName={searchString ?? "Search"} navigation={navigation} />
                )
            }} 
            style={{
                overflow: 'hidden' // Prevent unnecessary memory usage
            }} 
        />
    )
}