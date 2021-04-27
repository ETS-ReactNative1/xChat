import React from 'react';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import EvilIconsIcon from 'react-native-vector-icons/EvilIcons';
import FeatherIcon from 'react-native-vector-icons/Feather';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import FontAwesome5ProIcon from 'react-native-vector-icons/FontAwesome5Pro';
import FontistoIcon from 'react-native-vector-icons/Fontisto';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useTheme } from 'react-native-paper';

const SuperIcon = ({type, name, size, color}) => {
    const theme = useTheme();
    switch (type) {
        case "MaterialCommunity": return <MaterialCommunityIcon name={name} size={size || 16} color={color || theme.colors.primary} />
        case "AntDesign": return <AntDesignIcon name={name} size={size || 16} color={color || theme.colors.primary} />
        case "Entypo": return <EntypoIcon name={name} size={size || 16} color={color || theme.colors.primary} />
        case "EvilIcons": return <EvilIconsIcon name={name} size={size || 16} color={color || theme.colors.primary} />
        case "Feather": return <FeatherIcon name={name} size={size || 16} color={color || theme.colors.primary} />
        case "FontAwesome": return <FontAwesomeIcon name={name} size={size || 16} color={color || theme.colors.primary} />
        case "FontAwesome5": return <FontAwesome5Icon name={name} size={size || 16} color={color || theme.colors.primary} />
        case "FontAwesome5Pro": return <FontAwesome5ProIcon name={name} size={size || 16} color={color || theme.colors.primary} />
        case "Fontisto": return <FontistoIcon name={name} size={size || 16} color={color || theme.colors.primary} />
        case "Material": case "MaterialIcons": return <MaterialIcon name={name} size={size || 16} color={color || theme.colors.primary} />
        default: return <IoniconsIcon name={name} size={size || 16} color={color || theme.colors.primary} />
    }
}

export default SuperIcon;