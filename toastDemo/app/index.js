import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
} from 'react-native';
import MXToast from 'react-native-mxtoast';

/*
 NSString* message = params[@"msg"];
 NSString* type = params[@"type"];
 CGFloat padding = [params[@"padding"] floatValue];
 CGFloat duration = [params[@"duration"] floatValue];
 */


export default class toastDemo extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Button onPress={this.showToast(0)} title={"默认"}/>
                <Button onPress={this.showToast(1)} title={"顶部 10s"}/>
                <Button onPress={this.showToast(2)} title={"顶部 长时间"}/>
                <Button onPress={this.showToast(3)} title={"顶部 短时间"}/>
                <Button onPress={this.showToast(4)} title={"中间 10s"}/>
                <Button onPress={this.showToast(5)} title={"中间 长时间"}/>
                <Button onPress={this.showToast(6)} title={"中间 短时间"}/>
                <Button onPress={this.showToast(7)} title={"底部 10s"}/>
                <Button onPress={this.showToast(8)} title={"底部 长时间"}/>
                <Button onPress={this.showToast(9)} title={"底部 短时间"}/>
            </View>
        );
    }

    showToast = (type) => () => {
        switch (type) {
            case 0:
                MXToast.show("默认样式");
                break;
            case 1:
                MXToast.show("顶部 10s", 10000, MXToast.TOP);
                break;
            case 2:
                MXToast.show("顶部 长时间", MXToast.LONG, MXToast.TOP);
                break;
            case 3:
                MXToast.show("顶部 短时间", MXToast.SHORT, MXToast.TOP);
                break;
            case 4:
                MXToast.show("中间 10s", 10000, MXToast.CENTER);
                break;
            case 5:
                MXToast.show("中间 长时间", MXToast.LONG, MXToast.CENTER);
                break;
            case 6:
                MXToast.show("中间 短时间", MXToast.SHORT, MXToast.CENTER);
                break;
            case 7:
                MXToast.show("底部 10s", 10000, MXToast.BOTTOM);
                break;
            case 8:
                MXToast.show("底部 长时间", MXToast.LONG, MXToast.BOTTOM);
                break;
            case 9:
                MXToast.show("底部 短时间", MXToast.SHORT, MXToast.BOTTOM);
                break;
        }
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        flexDirection: 'column'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});