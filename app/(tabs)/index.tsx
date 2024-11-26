import React, { useState } from "react";
import {
    Image,
    StyleSheet,
    Platform,
    View,
    Text,
    TextInput,
    Button,
    ScrollView,
    Keyboard,
    TouchableWithoutFeedback,
    FlatList,
} from "react-native";

export default function HomeScreen() {
    const [name, setName] = useState<string>("a");

    const [todoList, setTodoList] = useState([
        { id: 1, title: "Learn react" },
        { id: 2, title: "Learn react" },
        { id: 3, title: "Learn react" },
        { id: 4, title: "Learn react" },
        { id: 6, title: "Learn react" },
        { id: 7, title: "Learn react" },
        { id: 8, title: "Learn react" },
        { id: 9, title: "Learn react" },
    ]);

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.stepContainer}>
                <Text style={styles.text}>{name}</Text>
                <TextInput
                    onChangeText={(v) => setName(v)}
                    value={name}
                    style={styles.input}
                    autoCapitalize="none"
                    maxLength={12}
                    multiline
                    autoCorrect={false}
                />
                <Button
                    title="ok"
                    color={"red"}
                    onPress={() => alert("tap me")}
                />
                {/* <ScrollView style={styles.todos}>
                    {todoList.map((item) => (
                        <Text style={styles.text} key={item.id}>
                            {item.title} - {item.id}
                        </Text>
                    ))}
                </ScrollView> */}

                <FlatList
                    style={styles.todos}
                    data={todoList}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <Text style={styles.text}>
                            {item.title} - {item.id}
                        </Text>
                    )}
                />
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    stepContainer: {
        flex: 1,
        paddingTop: 40,
        paddingHorizontal: 20,
    },
    text: {
        color: "black",
        fontSize: 40,
        marginBottom: 40,
    },
    input: {
        borderColor: "violet",
        borderWidth: 2,
        fontSize: 40,
        padding: 2,
        paddingHorizontal: 20,
    },
    todos: {
        flex: 1,
        marginTop: 20,
        borderColor: "red",
        borderWidth: 3,
        padding: 10,
    },
});
