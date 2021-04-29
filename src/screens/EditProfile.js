import * as React from 'react';
import { View, useWindowDimensions } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import EditPublicProfile from './EditPublicProfile'
import EditPrivateProfile from './EditPrivateProfile'

import { FAB, Text } from 'react-native-paper';

const EditProfile = () => {
    const layout = useWindowDimensions();

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'public', title: 'public' },
        { key: 'private', title: 'private' },
    ]);

    const renderScene = SceneMap({
        public: EditPublicProfile,
        private: EditPrivateProfile,
    });

    return (
        <View style={{ flex: 1 }}>
            <TabView
                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={setIndex}
                initialLayout={{ width: layout.width }}
            />
            <FAB
                big
                label="Guardar"
                style={{
                    position: 'absolute',
                    margin: 16,
                    right: 20,
                    bottom: 20,
                }}
                icon="pencil"
                onPress={() => { }}
            />
        </View>
    )
}

export default EditProfile
