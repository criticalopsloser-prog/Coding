import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button, ScrollView, StatusBar } from 'react-native';
import { Image } from 'expo-image';

export default function App() {
  // State variables for the interactive features
  const [name, setName] = useState('');
  const [count, setCount] = useState(0);

  // Message logic from your screenshot
  const message =
    count > 0
      ? `${name || 'User'}, you tapped ${count} times!`
      : "Tap the + button to start";

  return (
    <ScrollView contentContainerStyle={s.screen}>
      <StatusBar barStyle="dark-content" />
      
      {/* Profile Image with your Discord link and contentFit fix */}
      <Image
        source={{ uri: 'https://media.discordapp.net/attachments/1335234294045610099/1504434257223749692/image.png?ex=6a06f915&is=6a05a795&hm=171c8356fa2697a719e3b10a4b6ad47ff9f6ce4140acde800876b9318ddcff86&=&format=webp&quality=lossless' }}
        style={s.photo}
        contentFit="cover"
      />
      
      <Text style={s.name}>John Neo Tapon</Text>
      <Text style={s.course}>MMA · CS126</Text>
      
      <Text style={s.bio}>
        Someone who struggles to draw, gym goer, plays games like valorant and overwatch and more.
      </Text>

      {/* Interactive Section */}
      <View style={s.interactiveContainer}>
        <TextInput 
          placeholder="Enter your name" 
          onChangeText={setName} 
          style={s.input}
          placeholderTextColor="#444"
        />

        <Text style={s.counterText}>
          {name === '' ? "Please enter your name" : `Wassup, ${name}!`}
        </Text>
        <Text style={s.counterText}>{message}</Text>

        <View style={s.buttonContainer}>
          <Button title="+" onPress={() => setCount(count + 1)} color="#000" />
          <Button title="-" onPress={() => setCount(count - 1)} color="#000" />
          <Button title="Reset" onPress={() => setCount(0)} color="#d11" />
        </View>
      </View>
    </ScrollView>
  );
}

const s = StyleSheet.create({
  screen: { 
    flexGrow: 1, 
    backgroundColor: '#ba82ff', 
    alignItems: 'center', 
    justifyContent: 'center',
    paddingHorizontal: 30,
    paddingVertical: 50
  },
  photo: { 
    width: 180,          
    height: 180,          
    borderRadius: 90,     
    marginBottom: 20,
    backgroundColor: '#ddd'
  },
  name: { 
    fontSize: 26,        
    fontWeight: 'bold', 
    color: '#000',
    marginBottom: 4
  },
  course: { 
    fontSize: 18, 
    color: '#000',
    marginBottom: 15
  },
  bio: { 
    fontSize: 15, 
    color: '#000', 
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 30
  },
  interactiveContainer: {
    width: '100%',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.2)', // Slight transparent white box
    padding: 20,
    borderRadius: 15
  },
  input: {
    borderWidth: 3,
    borderColor: '#006aff',
    width: '90%',
    padding: 10,
    marginBottom: 10,
    borderRadius: 8,
    backgroundColor: '#fff'
  },
  counterText: {
    fontSize: 16,
    color: '#000',
    fontWeight: '600',
    marginVertical: 2
  },
  buttonContainer: { 
    marginTop: 15, 
    width: '70%',
    gap: 8
  }
});