import React from 'react'
import { StyleSheet, View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
interface Props {
    children: JSX.Element | JSX.Element[];
}

export const GradientBackground = ({children}: Props) => {
    return (
        <View style={{flex: 1}}>
            <LinearGradient 
                colors={['#084F6A','#75CEDB','white']}
                style={{...StyleSheet.absoluteFillObject}}
                start={{
                    x: 0.1,
                    y: 0.1
                }}
                end={{
                    x: 0.5,
                    y: 0.8
                }}
            />
            {children}
        </View>
    )
}
