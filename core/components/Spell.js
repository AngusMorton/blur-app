import React, {PropTypes} from 'react'
import {
    AppRegistry,
    Image,
    ListView,
    StyleSheet,
    Text,
    View,
} from 'react-native';

const Spell = ({onClick, spell}) => (
    <View style={styles.container} onClick={onClick}>
        <Text style={styles.name}>{spell.name}</Text>
        <Text style={styles.class}>{spell.school}</Text>
    </View>
)

Spell.propTypes = {
    onClick: PropTypes.func,
    spell: PropTypes.shape({
        name: PropTypes.string.isRequired,
        school: PropTypes.string.isRequired
    }).isRequired
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        height: 72,
        backgroundColor: '#F5FCFF',
        justifyContent: 'center',
    },
    name: {
        fontSize: 16,
        marginLeft: 16,
        textAlign: 'left',
        color: 'black',
    },
    class: {
        fontSize: 14,
        textAlign: 'left',
        marginLeft: 16,
    },
});

export default Spell