import * as React from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    TouchableOpacity,
    ToastAndroid,
} from 'react-native';

import { Button, Icon } from 'native-base';

export default function PedidosView(props) {
    const navigation = props.navigation;
    const DATA = [
        {
            id: '1',
            mesa_id: '12',
        },
        {
            id: '2',
            mesa_id: '9',
        },
        {
            id: '3',
            mesa_id: '20',
        },
    ];
    const styles = StyleSheet.create({
        safeArea: {
            flex: 1,
        },
        container: {
            flex: 1,
        },
        scrollView: {
            flex: 1,
        },
        content: {
            flex: 1,
        },
    });
    const Pedido = ({ id, mesa, style }) => (
        <TouchableOpacity
            style={{
                width: "95%",
                backgroundColor: "#FF0000",
                color: "#FFFF00",
                justifyContent: 'center',
                padding: 0,
                marginLeft: 10,
                marginBottom: 2,
                marginTop: 2,
                borderRadius: 10,
            }}
            onPress={
                () => {
                    ToastAndroid.showWithGravity(
                        'Clicou no botão do pedido #'.concat(id),
                        ToastAndroid.SHORT,
                        ToastAndroid.BOTTOM);
                }
            }>
            <View style={style.view}>
                <View style={{ flex: 93 }}>
                    <Text style={style.text}>Pedido #{id}</Text>
                    <Text style={style.text}>Mesa: {mesa}</Text>
                </View>
                <View style={{ flex: 7, position: 'absolute', bottom: 10, right: 10, }}>
                    <TouchableOpacity
                        onPress={
                            () => {
                                ToastAndroid.showWithGravity(
                                    'Clicou no botão de deletar do pedido #'.concat(id),
                                    ToastAndroid.SHORT,
                                    ToastAndroid.BOTTOM);
                            }} >
                        <Icon type="FontAwesome" name="trash" style={{color:"#FF0000"}}>


                        </Icon>
                    </TouchableOpacity>
                </View>
            </View>

        </TouchableOpacity>
    );
    const renderPedido = ({ item }) => (
        <Pedido
            id={item.id}
            mesa={item.mesa_id}
            style={
                {
                    text: {
                        color: "#000000",
                        fontWeight: "bold",
                        fontSize: 18,
                    },
                    view: {
                        backgroundColor: "#FFFF00",
                        padding: 10,
                        margin: 5,
                        width: "97%",
                        flexDirection: "row",
                        borderRadius: 10,
                    }
                }
            }
        />
    );
    return (
        <View style={styles.container}>
            <FlatList
                data={DATA}
                renderItem={renderPedido}
                keyExtractor={item => item.id}
            />
            <View
                style={{
                    position: 'absolute',
                    bottom: 25,
                    right: 25,
                }}>
                <Button
                    rounded
                    style={{
                        height: 60,
                        width: 60,
                        backgroundColor: "#FF0000",
                        color: "#FFFF00",
                        justifyContent: 'center',
                    }}
                    onPress={() => {
                        const navigation = props.navigation;
                        navigation.navigate('Cadastro');
                        ToastAndroid.showWithGravity(
                            'Clicou no botão de criar pedido',
                            ToastAndroid.SHORT,
                            ToastAndroid.BOTTOM);
                    }}>
                    <Icon type="FontAwesome" name="plus" style={{color: "#FFFF00"}} />
                </Button>
            </View>
        </View>
    );
}