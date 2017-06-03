import React, {
    Component,
} from 'react';
import {
    AppRegistry,
    Image,
    ListView,
    StyleSheet,
    Text,
    View,
} from 'react-native';

import Spell from './Spell'


var REQUEST_URL = 'https://blur-api-rvniroeptg.now.sh/spells';

class SpellList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2,
            }),
            loaded: false,
        };
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData() {
        fetch(REQUEST_URL)
            .then((response) => response.json())
            .then((responseData) => {
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(responseData),
                    loaded: true,
                });
            })
            .done();
    }

    render() {
        if (!this.state.loaded) {
            return this.renderLoadingView();
        }

        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderSpell}
                style={styles.listView}
                renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
            />
        );
    }

    renderLoadingView() {
        return (
            <View style={styles.container}>
                <Text>
                    Loading movies...
                </Text>
            </View>
        );
    }

    renderSpell(spell) {
        return (
            <Spell spell={spell} />
        );
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#F5FCFF',
    },
    name: {
        fontSize: 20,
        marginBottom: 8,
        marginLeft: 16,
        textAlign: 'left',
    },
    class: {
        textAlign: 'left',
        marginLeft: 16,
    },
    listView: {
        paddingTop: 8,
        backgroundColor: '#F5FCFF',
    },
    separator: {
        flex: 1,
        height: StyleSheet.hairlineWidth,
        backgroundColor: '#8E8E8E',
    },
});

export default SpellList