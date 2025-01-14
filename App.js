import { StatusBar } from "expo-status-bar";
import { useState } from "react";

import { Modal, Pressable, StyleSheet, Text, View } from "react-native";

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);

  console.log(modalVisible);

  return (
    <View style={styles.container}>
      <Pressable onPress={() => setModalVisible(true)}>
        <Text style={styles.showText}>Show Modal</Text>
      </Pressable>
      <Modal
        animationType="slide"
        backgroundColor="#000"
        visible={modalVisible}
        onRequestClose={() => setModalVisible(!modalVisible)}
      >
        <View style={styles.modal}>
          <Text style={styles.modalText}>This is a modal...</Text>
          <Pressable onPress={() => setModalVisible(false)}>
            <Text style={styles.modalText}>Close</Text>
          </Pressable>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  modal: {
    height: 200,
    marginTop: 150,
    backgroundColor: "#aaa",
    justifyContent: "center",
    flexDirection: "column",
    gap: 72,
  },
  modalText: {
    textAlign: "center",
    fontSize: 18,
  },
  showText: {
    fontSize: 24,
  },
});
