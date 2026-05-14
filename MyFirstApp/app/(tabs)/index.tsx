import { Image } from 'expo-image';
import { StyleSheet } from 'react-native';
import { View, Text, StatusBar } from 'react-native';

export default function App() {
  return (
    <View style={s.screen}>
      <StatusBar barStyle="dark-content" />
      
      <Image
        source={{ uri: 'https://media.discordapp.net/attachments/1335234294045610099/1504434257223749692/image.png?ex=6a06f915&is=6a05a795&hm=171c8356fa2697a719e3b10a4b6ad47ff9f6ce4140acde800876b9318ddcff86&=&format=webp&quality=lossless' }}
        style={s.photo}
        contentFit="cover" // This ensures the image fills the circle completely
      />
      
      <Text style={s.name}>John Neo Tapon</Text>
      <Text style={s.course}>MMA · CS126</Text>
      
      <Text style={s.bio}>
        Someone who struggles to draw, gym goer, plays games like valorant and overwatch and more.
      </Text>
    </View>
  );
}

const s = StyleSheet.create({
  screen: { 
    flex: 1, 
    backgroundColor: '#ba82ff', 
    alignItems: 'center', 
    justifyContent: 'center',
    paddingHorizontal: 30 // Increased padding for a cleaner bio look
  },
  photo: { 
    width: 180,           // Increased from 120
    height: 180,          // Increased from 120
    borderRadius: 90,     // Must be 1/2 of width/height
    marginBottom: 20,
    backgroundColor: '#ddd' // Placeholder color while image loads
  },
  name: { 
    fontSize: 26,         // Slightly larger for emphasis
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
    lineHeight: 22
  }
});