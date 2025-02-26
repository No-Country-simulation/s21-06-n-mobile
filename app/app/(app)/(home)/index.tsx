import React, { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, View } from 'react-native';
import CardChat from '@/components/CardChat/CardChat';
import { useAuth } from '@/hooks/useAuthentication';
import { useConfiguration } from '@/hooks/useColorScheme';
const Index = () => {
    const { colorObject } = useConfiguration();
    const { handleLogout } = useAuth();
    const [data, setData] = useState([
        { id: '1', owner: 'Misael Bazn', categories: ['Musica', 'Virtual', 'Video Juegos', 'Lectura'], title: 'Hablemos del Concierto de Billie' },
        { id: '2', owner: 'Juan Pérez', categories: ['Deportes', 'Fútbol', 'Presencial'], title: 'Partido de fútbol el domingo' },
        { id: '3', owner: 'María López', categories: ['Tecnología', 'Software', 'Virtual'], title: 'Desarrollo de nuevas tecnologías' },
        { id: '4', owner: 'Carlos García', categories: ['Arte', 'Pintura', 'Presencial'], title: 'Exposición de arte en el museo' },
        { id: '5', owner: 'Laura Martínez', categories: ['Literatura', 'Lectura', 'Virtual'], title: 'Club de lectura en línea' },
    ]);

    const loadMoreData = () => {
        const newData = [
            { id: '6', owner: 'Pedro González', categories: ['Música', 'Virtual'], title: 'Concierto virtual de rock' },
            { id: '7', owner: 'Ana Ramírez', categories: ['Cine', 'Presencial'], title: 'Estreno de película en el cine' },
            { id: '8', owner: 'Luis Fernández', categories: ['Deportes', 'Fútbol'], title: 'Partido amistoso de fútbol' },
        ];
        if (data.length.toString() === newData.findLast((item) => true)?.id.toString()) {
            
        } else{
            setData(prevData => [...prevData, ...newData]);
        }
        
    };
    interface DataItem {
        id: string;
        owner: string;
        categories: string[];
        title: string;
    }

    const keyExtractor = (item: DataItem, index: number): string => `${item.id}-${index}`;

    return (
        <View style={[styles.container, {backgroundColor: colorObject.background}]}>
            <FlatList
                style={{width: '100%'}}
                data={data}
                renderItem={({ item }) => (
                    <View style={styles.cardWrapper}>
                        <CardChat />
                    </View>
                )}
                keyExtractor={keyExtractor}
                onEndReached={loadMoreData}
                onEndReachedThreshold={0.1}
            />
            <Button title="Cerrar sesión" onPress={handleLogout} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
        alignItems: 'center',  
        justifyContent: 'flex-start',
    },
    cardWrapper: {
        width: '100%',
        alignItems: 'center'
    },
});

export default Index;
