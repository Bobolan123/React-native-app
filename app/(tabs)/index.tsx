import InputTodo from "@/components/todos/input.todo";
import ListTodo from "@/components/todos/list.todo";
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
    const [todoList, setTodoList] = useState<ITodo[]>([]);

    const addTodo = (title:string) => {
        var id = Date.now() + Math.random()
        const todo = {id:id,title}
        setTodoList([...todoList, todo])
    } 

    const deleteTodo = (id:number) => {
        const newTodo = todoList.filter(todo=> todo.id !=id)
        setTodoList(newTodo)
    }
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.stepContainer}>
                <InputTodo addTodo={addTodo}/>
                <ListTodo todoList={todoList} deleteTodo={deleteTodo}/>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    stepContainer: {
        flex: 1,
        gap: 5,
        paddingTop: 40,
        paddingHorizontal: 20,
    },
});
