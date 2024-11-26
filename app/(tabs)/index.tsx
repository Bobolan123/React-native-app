import { useState } from "react";
import {
    Image,
    StyleSheet,
    Platform,
    View,
    Text,
    TextInput,
    Button,
} from "react-native";

export default function HomeScreen() {
    const [name, setName] = useState<string>("a");

    return (
        <View style={styles.stepContainer}>
            <View>
                <Text style={styles.text}>{name}</Text>
                <TextInput
                    onChangeText={v => setName(v)}
                    value={name}
                    style={styles.input}
                    autoCapitalize="none"
                    // keyboardType="numeric"
                    maxLength={12}
                    multiline
                    autoCorrect={false}
                />
                <Button title="ok"/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    titleContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
    },
    stepContainer: {
        flex: 1,
        // alignItems:"center",
        // justifyContent:"center"
        paddingTop: 40,
        paddingHorizontal: 20,
    },
    text: {
        color: "black",
        fontSize: 40,
    },
    input: {
        borderColor: "violet",
        borderWidth: 2,
        fontSize: 40,
        padding: 2,
        paddingHorizontal: 20,
    },
});
