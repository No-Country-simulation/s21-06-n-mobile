import React, { useState, useEffect, useRef } from 'react';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { Text, TouchableOpacity, StyleSheet, View, FlatList } from 'react-native';
import { useBottomSheetStore } from '../../store/bottomSheetStore';

// Lista de filtros
const FILTERS = [
    { category: 'Artes e intereses', options: ['Arete', 'Cultura', 'Musica', '123123', 'alhiqwue', '123jahiagqywgeuqfeqwteqw'] },
    { category: 'Deportes', options: ['Futbol', 'Basket', 'Tenis'] },
    { category: 'Social', options: ['Reuniones', 'Eventos', 'Amigos'] },
    // Agregar más categorías si es necesario
];

export default function GlobalBottomSheet() {
    const bottomSheetRef = useRef<BottomSheet>(null);
    const isOpen = useBottomSheetStore(state => state.isOpen);
    const closeBottomSheet = useBottomSheetStore(state => state.closeBottomSheet);

    // Estado para los filtros seleccionados
    const [selectedFilters, setSelectedFilters] = useState<any>({
        'Artes e intereses': [],
        'Deportes': [],
        'Social': [],
    });

    // Maneja la selección de los filtros
    const toggleFilter = (category: string, option: string) => {
        setSelectedFilters((prevState: Record<string, string[]>) => {
            const updated = { ...prevState };
            if (updated[category].includes(option)) {
            updated[category] = updated[category].filter((item: string) => item !== option);
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

    // Función para confirmar los filtros
    const applyFilters = () => {
        console.log('Aplicando filtros:', selectedFilters);
        // Aquí puedes hacer lo que necesites con los filtros seleccionados
        closeBottomSheet();
    };

    // Renderiza las opciones de cada filtro
    const renderFilterOptions = (category: string, options: string[]) => {
        return (
            <View style={{flex: 1, flexDirection:'row', columnGap: 5, flexWrap: 'wrap'}}>
                {options.map(option => (
                    <View key={option} style={styles.optionContainer}>
                        <TouchableOpacity onPress={() => toggleFilter(category, option)}>
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
                    </View>
                ))}
            </View>
        );
    };

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
                    <Text style={styles.applyButtonText}>Aplicar filtros</Text>
                </TouchableOpacity>
            </BottomSheetView>
        </BottomSheet>
    );
}

const styles = StyleSheet.create({
    contentContainer: {
        flex: 1,
        padding: 20,
        alignItems: 'flex-start',
    },
    title: {
        fontSize: 18,
        fontWeight: 500,
        marginBottom: 20,
        lineHeight: 22
    },
    filterContainer: {
        marginBottom: 20,
    },
    filterTitle: {
        fontSize: 16,
        fontWeight: 500,
        marginBottom: 10,
        lineHeight: 24
    },
    optionContainer: {
        marginBottom: 0,
    },
    optionBox: {
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 27,
        paddingVertical: 10,
        paddingHorizontal: 15,
        marginBottom: 10,
        alignItems: 'center',
    },
    selectedOption: {
        backgroundColor: '#7F7F7F80', // Color de fondo cuando está seleccionado
    },
    optionText: {
        fontSize: 16,
        lineHeight: 22,
        color: '#000',
    },
    selectedText: {
        color: '#000', // Cambia el color del texto cuando está seleccionado
    },
    applyButton: {
        marginTop: 20,
        backgroundColor: '#007bff',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        width: '100%',
        alignItems: 'center',
    },
    applyButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
