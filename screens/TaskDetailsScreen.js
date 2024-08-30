import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function TaskDetailScreen({ route, navigation, updateTask }) {
  const { task, index } = route.params;
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);

  useEffect(() => {
    navigation.setOptions({ title: task.title });
  }, []);

  const handleUpdateTask = () => {
    updateTask(index, { title, description });
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <TextInput 
        style={styles.input}
        value={title}
        onChangeText={setTitle}
      />
      <TextInput 
        style={[styles.input, styles.descriptionInput]}
        value={description}
        onChangeText={setDescription}
        multiline
      />
      <TouchableOpacity style={styles.updateButton} onPress={handleUpdateTask}>
        <Text style={styles.updateButtonText}>Update Task</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#E8EAED',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  descriptionInput: {
    height: 100,
    textAlignVertical: 'top',
  },
  updateButton: {
    backgroundColor: '#55BCF6',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  updateButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});