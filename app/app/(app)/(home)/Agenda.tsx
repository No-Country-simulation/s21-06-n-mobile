import BottomSheet from '@/components/BottomSheet/BottomSheet';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const Agenda = () => {
    return (
        <GestureHandlerRootView>
            <BottomSheet />
        </GestureHandlerRootView>
    );
}

const styles = StyleSheet.create({

})

export default Agenda;
