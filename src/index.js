import React from 'react'
import { View, Text, Dimensions } from 'react-native'
import { createStackNavigator } from 'react-navigation-stack'

// Screen to be displayed
class HomeScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text> This is my Home Screen </Text>
            </View>
        )
    }
} 
const { width, height } = Dimensions.get('screen')

// Custom Header Component 

const CustomHeaderComponent = ({ navBackgroundColor = 'lightgrey', navLeftText, navRightText, customComponent, customComponentPosition, navBarShadowColor = 'grey', navBarShadowOffset = {width: 1, height: 1}, navBarShadowOpacity = 1 }) => {
    return (
        <View style={{width, height: height / 8, backgroundColor:navBackgroundColor, shadowColor:navBarShadowColor, shadowOffset:navBarShadowOffset, shadowOpacity:navBarShadowOpacity, alignItems: 'center', flexDirection: "row", justifyContent: 'space-around', }}>
            {navLeftText ? <Text>{navLeftText}</Text> : null}
            {customComponent ? customComponent : null}
            {navRightText ? <Text>{navRightText}</Text> : null}
        </View>
    )
}

// Imported this component in App.js
const AppNavigator = createStackNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: () => ({
            header: () => <CustomHeaderComponent navLeftText='left text' navRightText='right text' />
        })
    }
})

export default AppNavigator