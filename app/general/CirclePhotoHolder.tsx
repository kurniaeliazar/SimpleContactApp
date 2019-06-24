import React from 'react';
import { Image, ImageBackground } from 'react-native';

interface CirclePhotoHolderProps {
    sourceImage?: string;
}

const CirclePhotoHolder: React.FunctionComponent<CirclePhotoHolderProps> = props => {
    const { sourceImage } = props;
    const placeholder = require('../res/images/profile_picture_placeholder.png');
    const image = sourceImage ? { uri: sourceImage } : placeholder;

    const customStyle = {
        borderRadius: 150 / 2,
        height: 150,
        width: 150,
    };

    return (
        <ImageBackground source={placeholder} style={customStyle}>
            <Image source={image} style={customStyle} />
        </ImageBackground>
    );
};

export default CirclePhotoHolder;