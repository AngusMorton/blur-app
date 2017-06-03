/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ToolbarAndroid
} from 'react-native';
import SpellList from './core/components/SpellList'

export default class BlurReact extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ToolbarAndroid
                    title="Blur"
                    style={ styles.toolbar }
                />

                <SpellList />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#F5FCFF',
    },
    toolbar: {
        backgroundColor: '#3F51B5',
        height: 56,
    },
});

AppRegistry.registerComponent('BlurReact', () => BlurReact);
