import { Stack, useLocalSearchParams } from 'expo-router';
import React from 'react';

const ChatLayout = () => {
    const { name } = useLocalSearchParams();
    return (
        <Stack>
            <Stack.Screen name='index'
                options={{
                    title: name?.toString() ?? 'Chat'
                }}
            />
        </Stack>
    );
}

export default ChatLayout;
