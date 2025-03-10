import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const ChatSkeleton = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <SkeletonPlaceholder backgroundColor="#000" >
          {/* Repetimos varias veces para simular mensajes en carga */}
          <React.Fragment>
            {Array(6).fill(null).map((_, index) => (
              <View 
                key={index} 
                style={[
                  styles.messageContainer, 
                  index % 2 === 0 ? styles.leftMessage : styles.rightMessage
                ]}
              >
                {index % 2 === 0 && (
                  <SkeletonPlaceholder.Item width={40} height={40} borderRadius={20} />
                )}
                <SkeletonPlaceholder.Item 
                  width="60%" 
                  height={40} 
                  borderRadius={10} 
                  marginLeft={index % 2 === 0 ? 10 : 0} 
                />
              </View>
            ))}
          </React.Fragment>
        </SkeletonPlaceholder>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'flex-end'
  },
  messageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  leftMessage: {
    alignSelf: 'flex-start',
  },
  rightMessage: {
    alignSelf: 'flex-end',
  },
});

export default ChatSkeleton;
