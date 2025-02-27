import React, { useState, useEffect, useRef } from 'react';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { Text, TouchableOpacity, StyleSheet, View, FlatList } from 'react-native';
import { useBottomSheetStore } from '../../store/bottomSheetStore';

const FILTERS = [
    { category: 'Artes e intereses', options: ['Arte', 'Cultura', 'Música', 'Pintura', 'Teatro'] },
    { category: 'Deportes', options: ['Fútbol', 'Basket', 'Tenis'] },
    { category: 'Social', options: ['Reuniones', 'Eventos', 'Amigos'] },
];

export default function GlobalBottomSheet() {
    const bottomSheetRef = useRef<BottomSheet>(null);
    const isOpen = useBottomSheetStore(state => state.isOpen);
    const closeBottomSheet = useBottomSheetStore(state => state.closeBottomSheet);

    const [selectedFilters, setSelectedFilters] = useState<Record<string, string[]>>({
        'Artes e intereses': [],
        'Deportes': [],
        'Social': [],
    });

    const toggleFilter = (category: string, option: string) => {
        setSelectedFilters(prevState => {
            const updated = { ...prevState };
            if (updated[category].includes(option)) {
                updated[category] = updated[category].filter(item => item !== option);
            } else {
                updated[category].push(option);
            }
            return updated;
        });
    };

    useEffect(() => {
        if (isOpen) {
            bottomSheetRef.current?.expand();
        } else {
            bottomSheetRef.current?.close();
        }
    }, [isOpen]);

    const applyFilters = () => {
        console.log('Aplicando filtros:', selectedFilters);
        closeBottomSheet();
    };

    const renderFilterOptions = (category: string, options: string[]) => (
        <View style={styles.optionsContainer}>
            {options.map(option => (
                <TouchableOpacity key={option} onPress={() => toggleFilter(category, option)}>
                    <View
                        style={[
                            styles.optionBox,
                            selectedFilters[category]?.includes(option) && styles.selectedOption,
                        ]}
                    >
                        <Text
                            style={[
                                styles.optionText,
                                selectedFilters[category]?.includes(option) && styles.selectedText,
                            ]}
                        >
                            {option}
                        </Text>
                    </View>
                </TouchableOpacity>
            ))}
        </View>
    );

    return (
        <BottomSheet
            index={-1}
            ref={bottomSheetRef}
            snapPoints={['25%', '50%', '90%']}
            enablePanDownToClose={true}
            onClose={closeBottomSheet}
        >
            <BottomSheetView style={styles.contentContainer}>
                <Text style={styles.title}>Filtros de búsqueda</Text>
                <FlatList
                    data={FILTERS}
                    keyExtractor={item => item.category}
                    renderItem={({ item }) => (
                        <View style={styles.filterContainer}>
                            <Text style={styles.filterTitle}>{item.category}</Text>
                            {renderFilterOptions(item.category, item.options)}
                        </View>
                    )}
                />
                <TouchableOpacity style={styles.applyButton} onPress={applyFilters}>
                    <Text style={styles.applyButtonText}>Confirmar filtros</Text>
                </TouchableOpacity>
            </BottomSheetView>
        </BottomSheet>
    );
}

const styles = StyleSheet.create({
    contentContainer: {
        flex: 1,
        padding: 20,
    },
    title: {
        fontSize: 18,
        fontWeight: '500',
        marginBottom: 20,
    },
    filterContainer: {
        marginBottom: 20,
    },
    filterTitle: {
        fontSize: 16,
        fontWeight: '500',
        marginBottom: 10,
    },
    optionsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 8,
    },
    optionBox: {
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 27,
        paddingVertical: 10,
        paddingHorizontal: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    selectedOption: {
        backgroundColor: '#7F7F7F80',
    },
    optionText: {
        fontSize: 16,
        color: '#000',
    },
    selectedText: {
        color: '#000',
    },
    applyButton: {
        marginTop: 20,
        backgroundColor: '#1C1B1F',
        paddingVertical: 14,
        borderRadius: 12,
        width: '100%',
        alignItems: 'center',
    },
    applyButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
