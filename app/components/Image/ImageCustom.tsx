import React, { useState } from 'react';
import { Image, ImageStyle, StyleProp, View, ViewStyle } from 'react-native';

interface IImageCustom {
    viewStyle: StyleProp<ViewStyle>,
    imageStyle: StyleProp<ImageStyle>,
    url: string
}

const ImageCustom = ({ url, viewStyle }: IImageCustom) => {
    const [hasError, setHasError] = useState(false);

    const handleImageError = () => {
        setHasError(true);
    }
    return (
        <View style={viewStyle}>
            <Image
                style={{ flex: 1, width: '100%', borderRadius: 20 }}
                source={hasError ? require('../../assets/images/descarga.png') : { uri: url }}

                onError={handleImageError} // Maneja el error de carga
                resizeMode="cover"
            />
        </View>
    );
}

export default ImageCustom;
