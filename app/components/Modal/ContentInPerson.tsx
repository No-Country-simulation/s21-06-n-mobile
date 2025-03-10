import { useConfiguration } from '@/hooks/useColorScheme';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import TypeConnection from '../TypeConnection/TypeConnection';
import TypeGender from '../TypeGender/TypeGender';
import TotalPeople from '../TotalPeople/TotalPeople';
import LabelCategory from '../LabelCategory/LabelCategory';
import { router } from 'expo-router';

interface IContentInPersonProp {
    item: IEventItem,
    showDate: boolean

}
const ContentInPerson = ({ item, showDate = false }: IContentInPersonProp) => {
    const items = ['Regla 1', 'Regla 2', 'Regla 3', 'Regla 4'];

    const { colorObject } = useConfiguration();
    const subcategories = item.subcategories.length > 3 ? item.subcategories.slice(0, 3) : item.subcategories;
    return (
        <View style={{ width: '100%', alignItems: 'center' }}>
            <View style={[styles.banner]}>
                <View style={styles.dateContainer}>
                                    <Text style={styles.dateText}>
                                        {new Date(item.date).toLocaleString('en-US', { day: 'numeric' })}
                                    </Text>
                                    <Text style={styles.dateText}>
                                        {new Date(item.date).toLocaleString('en-US', { month: 'short' })}
                                    </Text>
                                </View>
            </View>
            <Text style={[styles.title]}>{item.title}</Text>
            <Text style={[styles.subtitle]}>{item.owner}</Text>
            <View style={[styles.containLabels]}>
                <TypeConnection type={item.type} />
                <TypeGender gender={item.gender} />
                <TotalPeople total={item.totalPeople} />
            </View>
            <View style={[styles.containLabels,{ columnGap: 10}]}>
                {subcategories.map((x, i) => (
                    <LabelCategory key={i} text={x} />
                ))}
            </View>
            <View>
                <Text style={[styles.titleDescription, {color: colorObject.text}]}>Introducción</Text>
                <Text style={[{color: colorObject.text}]}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi vel dolorem ut, praesentium quo impedit consequatur eligendi vitae eveniet nemo ipsa, possimus illo officiis. Explicabo officia dicta rem suscipit placeat.</Text>
            </View>
            <View style={[styles.containRules]}>
                <Text style={[styles.titleDescription, {color: colorObject.text}]}>Reglas</Text>
                {items.map((item, index) => (
                    <Text key={index} style={[styles.listItem, {color: colorObject.text}]}>• {item}</Text>
                ))}
            </View>
            <TouchableOpacity style={[styles.button, { backgroundColor: colorObject.buttonBackground }]}>
                <Text style={[styles.buttonText, { color: colorObject.textButton }]}>Ingresar al evento</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, { backgroundColor: colorObject.buttonBackground }]} onPress={() => router.push(`/(app)/(ichat)?name=${item.title}`)}>
                <Text style={[styles.buttonText, { color: colorObject.textButton }]}>Ver Chat</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    banner: {
        width: '100%',
        height: 172,
        backgroundColor: 'rgba(180, 180, 180, 0.5)',
        borderRadius: 10,
        position: 'relative'
    },
    dateContainer: {
        position: 'absolute',
        top: 5,
        left: 5,
        backgroundColor: 'white',
        paddingVertical: 2,
        paddingHorizontal: 6,
        borderRadius: 5,
        elevation: 3,
    },
    dateText: {
        fontWeight: 'bold',
        fontSize: 12,
        textAlign: 'center'
    },
    containLabels: {
        flexDirection: 'row',
        columnGap: 40,
        justifyContent: 'space-between',
        paddingVertical: 5
    },
    title: {
        fontSize: 18,
        lineHeight: 21,
        letterSpacing: -0.2,
        fontWeight: 500,
        marginVertical: 5
    },
    subtitle: {
        fontSize: 14,
        letterSpacing: -0.2,
        fontWeight: 500,
        opacity: 0.5
    },
    titleDescription: {
        fontWeight: 600,
        fontSize: 14,
        letterSpacing: -0.2,
        marginVertical: 8
    },
    description: {
        fontWeight: 400,
        fontSize: 12,
        letterSpacing: -0.2,
    },
    listItem: {
        fontSize: 12,
        fontWeight: 400,
        letterSpacing: -0.2,
        marginBottom: 5,
    },
    containRules: {
        width: '100%'
    },
    button: {
        borderRadius: 12,
        width: '100%',
        height: 50,
        marginTop: 10,
        paddingVertical: 14,
        alignItems: 'center'
    },
    buttonText: {
        fontWeight: 600,
        fontSize: 16,
        lineHeight: 22,
        letterSpacing: 0.2
    }
})

export default ContentInPerson;
