import React, { useEffect, useRef } from 'react';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { Text, TouchableOpacity, StyleSheet, View, ScrollView, Image } from 'react-native';
import { useBottomSheetStore } from '../../store/bottomSheetStore';
import { Categories } from '@/mock/Events';
import { useEventStore } from '@/store/useEventStore';
import ActivityIndicator from '../Loading/ActivityIdicator';
import { useConfiguration } from '@/hooks/useColorScheme';
import Show from '../Show/Show';

type Category = {
    category: string;
    type: string;
    options: string[];
};

type CategoryIconProps = {
    type: string;
};

const CategoryIcon: React.FC<CategoryIconProps> = ({ type }) => {
    const iconSource = {
        ARTE: require('../../assets/images/Art.png'),
        GYM: require('../../assets/images/Gym.png'),
        SOCIAL: require('../../assets/images/Pizza.png'),
    };

    return (
        <Image
            style={styles.categoryIcon}
            source={iconSource[type as keyof typeof iconSource]}
        />
    );
};

const GlobalBottomSheet: React.FC = () => {
    const bottomSheetRef = useRef<BottomSheet>(null);
    const isOpen = useBottomSheetStore((state) => state.isOpen);
    const closeBottomSheet = useBottomSheetStore((state) => state.closeBottomSheet);
    const { selectedFilters, setSelectedFilters, loadEventsWithFilter } = useEventStore();
    const { colorObject } = useConfiguration();

    useEffect(() => {
        if (isOpen) {
            bottomSheetRef.current?.expand();
        } else {
            bottomSheetRef.current?.close();
        }
    }, [isOpen]);

    const handleApplyFilters = () => {
        loadEventsWithFilter(selectedFilters);
        closeBottomSheet();
    };

    const handleResetFilters = () => {
        setSelectedFilters([]);
        loadEventsWithFilter([]);
        closeBottomSheet();
    };

    const handleFilterToggle = (category: string, option: string) => {
        const updatedFilters = selectedFilters.includes(option)
            ? selectedFilters.filter((item) => item !== option)
            : [...selectedFilters, option];
        setSelectedFilters(updatedFilters);
    };

    const renderFilterOptions = (category: string, options: string[]) => (
        <View style={styles.optionsContainer}>
            {options.map((option) => (
                <TouchableOpacity
                    key={option}
                    onPress={() => handleFilterToggle(category, option)}
                >
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
        return <ActivityIndicator />;
    }

    return (
        <BottomSheet
            index={-1}
            ref={bottomSheetRef}
            snapPoints={['50%', '90%']}
            enablePanDownToClose={true}
            enableContentPanningGesture={false}
            onClose={closeBottomSheet}
        >
            <BottomSheetView style={styles.container}>
                <Text style={styles.headerTitle}>Filtros de búsqueda</Text>
                <ScrollView>
                    {Categories.map((item: Category) => (
                        <View key={item.category} style={styles.categoryContainer}>
                            <View style={styles.categoryHeader}>
                                <Show>
                                    <Show.When isTrue={item.type === 'ARTE' || item.type === 'GYM' || item.type === 'SOCIAL'}>
                                        <CategoryIcon type={item.type} />
                                    </Show.When>
                                </Show>
                                <Text style={styles.categoryTitle}>{item.category}</Text>
                            </View>
                            {renderFilterOptions(item.category, item.options)}
                        </View>
                    ))}
                    <View style={[styles.buttonWrapper]}>
                        <TouchableOpacity
                            style={[styles.applyButton, { backgroundColor: colorObject.buttonBackground }]}
                            onPress={handleApplyFilters}
                        >
                            <Text style={styles.applyButtonText}>Confirmar filtros</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.applyButton, { backgroundColor: 'white', borderWidth: 1}]}
                            onPress={handleResetFilters}
                        >
                            <Text style={[styles.applyButtonText, {color: 'black'}]}>Reestablecer</Text>
                        </TouchableOpacity>
                    </View>

                </ScrollView>

            </BottomSheetView>
        </BottomSheet>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: '500',
        marginBottom: 20,
    },
    categoryContainer: {
        marginBottom: 20,
    },
    categoryHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    categoryTitle: {
        fontSize: 16,
        fontWeight: '500',
        marginLeft: 10,
    },
    categoryIcon: {
        width: 30,
        height: 30,
        resizeMode: 'contain',
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
    buttonWrapper:{
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginBottom: 10,
        marginTop: 20,
    },
    applyButton: {
        paddingVertical: 14,
        borderRadius: 12,
        width: '48%',
        columnGap: 10,
        alignItems: 'center',
    },
    applyButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default GlobalBottomSheet;