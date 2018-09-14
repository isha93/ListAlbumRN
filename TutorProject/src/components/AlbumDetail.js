import React from 'react';
import {View, Text, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';


const AlbumDetail = ({album}) => {
    const {
        title, 
        artist , 
        thumbnail_image,
        image,
        url
    } = album;
    const {
        contentStyle, 
        imageStyle, 
        thumbnailContainerStyle, 
        headerTextStyle,
        imageContentAlbum
    } = styles;
    return(
        <Card>
            <CardSection>
                <View style={thumbnailContainerStyle}>
                    <Image 
                        style={imageStyle} 
                        source={{uri: thumbnail_image}}
                    />
                </View>
                <View style={contentStyle}>
                    <Text style={headerTextStyle}>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardSection>
            <CardSection>
                <Image 
                source={{uri: image }}
                style = {imageContentAlbum}
                />
            </CardSection>
            <CardSection>
                <Button onPress={() => Linking.openURL(url)}>
                    Buy Now!
                </Button>
            </CardSection>
        </Card>
    );
};

const styles = {
    contentStyle : {
        flexDirection : 'column',
        justifyContent : 'space-around'
    },
    headerTextStyle : {
        fontSize : 18
    },
    imageStyle : {
        height : 50,
        width : 50
    },
    thumbnailContainerStyle :{
        marginLeft : 10,
        marginRight : 10,
        justifyContent: 'center',
        alignItems : 'center'
    },
    imageContentAlbum : {
        height : 300,
        width : null,
        flex : 1
    }
}

export default AlbumDetail;