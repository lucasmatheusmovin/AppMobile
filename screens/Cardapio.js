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
            nome: 'Mec lanche infeliz',
            preco: '2,99'
        },
        {
            id: '2',
            nome: 'Saladinha',
            preco: '1,99'
        },
        {
            id: '3',
            nome: 'Nugget Borrachudo',
            preco: '0,99'
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
    const Pedido = ({ id, nome, preco, style }) => (
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
                        'Clicou no bot�o do prato #'.concat(id),
                        ToastAndroid.SHORT,
                        ToastAndroid.BOTTOM);
                }
            }>
            <View style={style.view}>
                <View style={{ flex: 93 }}>
                    <Text style={style.text}>Nome: {nome}</Text>
                    <Text style={style.text}>Preço: {preco}</Text>
                </View>
            </View>

        </TouchableOpacity>
    );
    const renderPedido = ({ item }) => (
        <Pedido
            id={item.id}
            nome={item.nome}
            preco={item.preco}
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
        </View>
    );
}