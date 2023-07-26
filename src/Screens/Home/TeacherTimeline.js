import { View, Text } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useEffect } from 'react';
import { BackHandler } from 'react-native';
import { Menu, MenuOptions, MenuOption, MenuContext, MenuProvider, MenuTrigger } from 'react-native-popup-menu';



const TeacherTimeline = () => {
    const navigation = useNavigation();

    

    return (
        // <View>
        //     <Text>TeacherTimeline</Text>
        // </View>
        <MenuProvider>
            <Menu>
                <MenuTrigger text="open menu"/>
                <MenuOptions OnSelect={()=> alert('open i ')} text="option 1"> </MenuOptions>
            </Menu>
        </MenuProvider>
    )
}

export default TeacherTimeline