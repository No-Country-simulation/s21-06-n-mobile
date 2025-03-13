const tintColorLight = '#7B61FF';
const tintColorDark = '#7B61FF';

export const Colors = {
    light: {
        textTitle: '#13CAD6',
        text: '#1C1B1F',
        textInput: '#13CAD6',
        textButton: '#fff',
        gradien: ['#33E4DB', '#00BBD3'],
        background: '#fff',
        tint: tintColorLight,
        icon: '#687076',
        tabIconDefault: '#000000',
        tabIconSelected: tintColorLight,
        cardBackground: '#fff',
        buttonBackground: '#7B61FF',
        colorLineCategorie: '#4A90E2',
        BorderLabelCategory: '#5D9EEA',
        TextLabelCategory: '#5D9EEA',
        // Nuevos colores agregados
        inputBackground: '#F0F0F0', // Fondo del input de texto
        placeholderText: '#888', // Color del texto de placeholder
        chatBubbleBackground: '#E0E0E0',
        skeletonBackground: '#000',
        skeletonHighlight: '#F0F0F0',
        inputToolbarBackground: '#F0F0F0',
        selectedOption:{
            borderColor: '#6200ee',
            backgroundColor: '#7B61FF',
        }
    },
    dark: {
        textTitle: '#13CAD6',
        text: '#fff',
        textInput: '#13CAD6',
        textButton: '#FFF',
        gradien: ['#33E4DB', '#00BBD3'],
        background: '#000',
        tint: tintColorDark,
        icon: '#687076',
        tabIconDefault: '#687076',
        tabIconSelected: tintColorDark,
        cardBackground: '#060606',
        buttonBackground: '#7B61FF',
        colorLineCategorie: '#4A90E2',
        BorderLabelCategory: '#5D9EEA',
        TextLabelCategory: '#5D9EEA',
        // Nuevos colores agregados
        inputBackground: '#333', // Fondo del input de texto
        placeholderText: '#888', // Color del texto de placeholder
        chatBubbleBackground: '#444', 
        skeletonBackground: '#333', // Fondo del skeleton en modo oscuro
        skeletonHighlight: '#444',
        inputToolbarBackground: '#222',
        selectedOption:{
            borderColor: '#6200ee',
            backgroundColor: '#7B61FF',
        }
    },
};