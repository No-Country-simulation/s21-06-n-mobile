import React, { useEffect, useRef } from 'react';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { Text, TouchableOpacity, StyleSheet, View, FlatList, Image } from 'react-native';
import { useBottomSheetStore } from '../../store/bottomSheetStore';
import { Categories } from '@/mock/Events';
import { useEventStore } from '@/store/useEventStore';
import ActivityIdicator from '../Loading/ActivityIdicator';
import { useConfiguration } from '@/hooks/useColorScheme';
import Show from '../Show/Show';

export default function GlobalBottomSheet() {
    const bottomSheetRef = useRef<BottomSheet>(null);
    const isOpen = useBottomSheetStore(state => state.isOpen);
    const closeBottomSheet = useBottomSheetStore(state => state.closeBottomSheet);
    const { selectedFilters, setSelectedFilters: setFilterCategories, loadEventsWithFilter } = useEventStore();
    const { colorObject } = useConfiguration();



    useEffect(() => {
        if (isOpen) {
            bottomSheetRef.current?.expand();
        } else {
            bottomSheetRef.current?.close();
        }
    }, [isOpen]);


    const applyFilters = () => {
        loadEventsWithFilter(selectedFilters); 
        closeBottomSheet(); 
    };


    const toggleFilter = (category: string, option: string) => {
        let filter = selectedFilters;
        if(selectedFilters.includes(option)){
            filter = selectedFilters.filter(x => x !== option)
        }else{
            filter.push(option)   
        }
        setFilterCategories(filter)
    };
    


    const renderFilterOptions = (category: string, options: string[]) => (
        <View style={styles.optionsContainer}>
            {options.map(option => (
                <TouchableOpacity key={option} onPress={() => toggleFilter(category, option)}>
                    <View
                        style={[
                            styles.optionBox,
                            selectedFilters.includes(option) && styles.selectedOption,
                        ]}
                    >
                        <Text
                            style={[
                                styles.optionText,
                                selectedFilters.includes(option) && styles.selectedText,
                            ]}
                        >
                            {option}
                        </Text>
                    </View>
                </TouchableOpacity>
            ))}
        </View>
    );

    if (selectedFilters === undefined) {
        return <ActivityIdicator />
    }

    return (
        <BottomSheet
            index={-1}
            ref={bottomSheetRef}
            snapPoints={['25%', '50%', '90%']}
            enablePanDownToClose={true}  
            enableContentPanningGesture={false}      
            onClose={closeBottomSheet}
        >
            <BottomSheetView style={styles.contentContainer}>
                <Text style={styles.title}>Filtros de búsqueda</Text>
                <FlatList
                    data={Categories}
                    keyExtractor={item => item.category}
                    renderItem={({ item }) => (
                        <View style={styles.filterContainer}>
                            <View style={[styles.subtitle]}>
                                <Show>
                                    <Show.When isTrue={item.type === 'ARTE'}>
                                        <Image style={{width:30, objectFit:'contain'}} source={require(`../../assets/images/Art.png`)}/>
                                    </Show.When>
                                    <Show.When isTrue={item.type === 'GYM'}>
                                        <Image style={{width:30, objectFit:'contain'}} source={require(`../../assets/images/Gym.png`)}/>
                                    </Show.When>
                                    <Show.When isTrue={item.type === 'SOCIAL'}>
                                        <Image style={{width:30, objectFit:'contain'}}  source={require(`../../assets/images/Pizza.png`)}/>
                                    </Show.When>
                                </Show>
                                <Text style={styles.filterTitle}>{item.category}</Text>
                            </View>
                            {renderFilterOptions(item.category, item.options)}
                        </View>
                    )}
                />
                <TouchableOpacity style={[styles.applyButton, {backgroundColor: colorObject.buttonBackground}]} onPress={applyFilters}>
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
        fontWeight: '500'
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
    subtitle:{
        flexDirection:'row',
        alignItems: 'center',
        marginBottom: 10,
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
