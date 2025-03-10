import LabelCategory from '@/components/LabelCategory/LabelCategory';
import { useConfiguration } from '@/hooks/useColorScheme';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Index = () => {
    const { colorObject } = useConfiguration();
    const intereses = ['Arte', 'Cultura', 'Música', 'Videojuegos']
    return (
        <View style={[styles.container, { backgroundColor: colorObject.background }]}>
            <View style={[styles.imageWrapper, { backgroundColor: '#B4B4B4' }]}>

            </View>
            <View style={[styles.shortWrapper]}>
                <Text>María Rodriguez</Text>
                <View style={[styles.socialNetworkWrapper]}>
                    <View>
                        <Text>Instagram</Text>
                    </View>
                    <View>
                        <Text>Facebook</Text>
                    </View>
                    <View>
                        <Text>TikTok</Text>
                    </View>
                </View>
            </View>
            <View style={[styles.aboutMeWrapper]}>
                <Text style={[styles.subtitle]}>Sobre mi</Text>
                <Text style={[styles.aboutMeDescription]}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus modi eum reprehenderit aliquid voluptates itaque delectus. Voluptatibus et, repellendus veniam suscipit iusto doloremque quisquam neque ut libero vitae, quas pariatur.</Text>
            </View>
            <View style={[styles.interesesWrapper]}>
                <Text style={[styles.subtitle]}>Mis intereses</Text>
                <View style={[styles.interesesContain]}>
                    {intereses.map((x, i) => (
                        <LabelCategory key={i} text={x}/>
                    ))}
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderWidth: 1,
        width: '100%',
        paddingHorizontal: 20,
        alignItems: 'center',
        paddingTop: 30
    },
    imageWrapper: {
        width: 100,
        height: 100,
        borderRadius: 80
    },
    shortWrapper: {
        borderWidth: 1,
        alignItems: 'center',
        width: '80%',
        rowGap: 10,
        paddingTop: 10
    },
    socialNetworkWrapper: {
        borderWidth: 1,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    aboutMeWrapper: {
        paddingVertical: 20,
        rowGap: 10
    },
    subtitle:{
        fontWeight: 500,
        fontSize: 16,
        lineHeight: 24
    },
    aboutMeDescription:{
        fontSize: 12,
        fontWeight: 400,
        lineHeight: 16,
        opacity: 0.5
    },
    interesesWrapper:{
        borderWidth: 1,
        width: '100%'
    },
    interesesContain:{
        flexDirection: 'row',
        justifyContent: 'space-between'
        
    }
})

export default Index;
