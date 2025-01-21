import { Api } from "@jellyfin/sdk/lib/api"
import { ImageFormat, ImageType } from "@jellyfin/sdk/lib/generated-client/models"
import { getImageApi } from "@jellyfin/sdk/lib/utils/api"
import _ from "lodash"
import { queryConfig } from "../query.config"
import Client from "../../../api/client"




export function fetchImage(api: Api, itemId: string, imageType?: ImageType) : Promise<string> {
    return new Promise(async (resolve) => {
        let imageResponse = await api.axiosInstance
            .get(getImageApi(api).getItemImageUrlById(
                itemId, 
                imageType, 
                { 
                    format: queryConfig.images.format, 
                    fillHeight: queryConfig.images.fillHeight,
                    fillWidth: queryConfig.images.fillWidth
                }
            ))

        console.debug(convertFileToBase64(imageResponse.data));
        console.debug(typeof imageResponse.data)
        resolve(convertFileToBase64(imageResponse.data));
    });
}

export function fetchItemImage(itemId: string, imageType?: ImageType, width?: number) {
    
    return getImageApi(Client.api!)
        .getItemImage({ 
            itemId, 
            imageType: imageType ? imageType : ImageType.Primary,
            format: ImageFormat.Jpg
        })
        .then(async (response) => {
            console.log(response.data)

            return convertFileToBase64(response.data)
        });
}

function base64toJpeg(encode: string) : string {
    return `data:image/jpeg;base64,${encode}`;
}

function convertFileToBase64(file: string): string {
    console.debug("Converting file to base64", file)
    let encode =  base64toJpeg(Buffer.from(file, 'binary').toString('base64'));

    console.debug(encode);

    return encode;
}