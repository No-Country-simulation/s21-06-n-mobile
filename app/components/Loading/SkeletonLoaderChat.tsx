import React from 'react';
import { Text, View } from 'react-native';
const SkeletonLoaderChat = () => {
    return (
        // <SkeletonPlaceholder>
        //   <SkeletonPlaceholder.Item flexDirection="row" alignItems="center">
        //     <SkeletonPlaceholder.Item width={40} height={40} borderRadius={20} />
        //     <SkeletonPlaceholder.Item marginLeft={10} flex={1}>
        //       <SkeletonPlaceholder.Item width="60%" height={20} />
        //       <SkeletonPlaceholder.Item width="40%" height={20} marginTop={6} />
        //     </SkeletonPlaceholder.Item>
        //   </SkeletonPlaceholder.Item>
        // </SkeletonPlaceholder>
        <View>
          <Text>Loading</Text>
        </View>
    );
}

export default SkeletonLoaderChat;
