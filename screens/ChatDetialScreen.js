import React, { useState, useContext } from 'react';
import { View, Text, TouchableOpacity, ScrollView, TextInput, Image, KeyboardAvoidingView, Platform } from 'react-native';
import { Ionicons, MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';
import * as Notifications from 'expo-notifications';
import axios from 'axios';
import { ExpoTokenContext } from '../App';
import AsyncStorage from '@react-native-async-storage/async-storage';

const generateMessages = (chatName) => {
  const baseMessages = [
    {
      id: 1,
      text: "Hey! How are you doing?",
      time: "2:30 PM",
      isMe: false,
      status: "read"
    },
    {
      id: 2,
      text: "I'm doing great! Just finished my project work 😊",
      time: "2:32 PM",
      isMe: true,
      status: "delivered"
    },
    {
      id: 3,
      text: "That's awesome! Which project was it?",
      time: "2:33 PM",
      isMe: false,
      status: "read"
    },
    {
      id: 4,
      text: "The machine learning one we discussed last week",
      time: "2:35 PM",
      isMe: true,
      status: "read"
    },
    {
      id: 5,
      text: "Cool! Can you share the code with me?",
      time: "2:36 PM",
      isMe: false,
      status: "read"
    },
    {
      id: 6,
      text: "Sure! I'll send it on GitHub",
      time: "2:37 PM",
      isMe: true,
      status: "delivered"
    },
    {
      id: 7,
      text: "https://github.com/user/ml-project",
      time: "2:38 PM",
      isMe: true,
      status: "delivered"
    },
    {
      id: 8,
      text: "Thanks! I'll check it out",
      time: "2:40 PM",
      isMe: false,
      status: "read"
    },
    {
      id: 9,
      text: "Let me know if you need any help understanding the code",
      time: "2:41 PM",
      isMe: true,
      status: "read"
    },
    {
      id: 10,
      text: "Will do! Thanks for sharing 👍",
      time: "2:42 PM",
      isMe: false,
      status: "read"
    },
  ];

  // Add specific messages for certain chats
  if (chatName === 'Lakhan Uiet') {
    return [
      ...baseMessages,
      {
        id: 11,
        text: "InjuryPredictionML - Sports Injury Prediction",
        time: "4:40 PM",
        isMe: false,
        status: "read",
        isAppLink: true
      },
      {
        id: 12,
        text: "sports-injury-prediction-ml.vercel.app",
        time: "4:40 PM",
        isMe: false,
        status: "read",
        isLink: true
      },
      {
        id: 13,
        text: "https://sports-injury-prediction-ml.vercel.app/",
        time: "4:40 PM",
        isMe: false,
        status: "read",
        isLink: true
      },
      {
        id: 14,
        text: "https://sports-injury-prediction.vercel.app/",
        time: "7:44 PM",
        isMe: true,
        status: "read",
        isLink: true
      },
    ];
  }

  return baseMessages;
};

export default function ChatDetailScreen({ route, navigation }) {
  const { chat } = route.params;
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState(generateMessages(chat.name));
  const expoPushToken = useContext(ExpoTokenContext);

  const sendMessage = async () => {
    if (message.trim()) {
      const newMessage = {
        id: messages.length + 1,
        text: message,
        time: new Date().toLocaleTimeString('en-US', { 
          hour: 'numeric', 
          minute: '2-digit', 
          hour12: true 
        }),
        isMe: true,
        status: 'sent'
      };
      setMessages([...messages, newMessage]);
      setMessage('');
      // Send push notification to the other token
      try {
        // Get all tokens from AsyncStorage (simulate two tokens for demo)
        const storedToken = await AsyncStorage.getItem('expoPushToken');
        // For demo, hardcode the other token (replace with real logic in production)
        const otherToken = storedToken === 'ExponentPushToken[2rk4mnLBnzQeHqg3VUwwiu]'
          ? 'ExponentPushToken[6-jgerPsZjvqpt2lssYVI6]'
          : 'ExponentPushToken[2rk4mnLBnzQeHqg3VUwwiu]';
        if (storedToken && otherToken) {
          await axios.post('https://exp.host/--/api/v2/push/send', {
            to: otherToken,
            sound: 'default',
            title: chat.name,
            body: message,
            data: { sender: 'You', message },
          });
        }
      } catch (e) {
        console.error('Failed to send notification to other token:', e);
      }
    }
  };

  const renderMessage = (msg) => (
    <View 
      key={msg.id} 
      style={{
        alignSelf: msg.isMe ? 'flex-end' : 'flex-start',
        backgroundColor: msg.isMe ? '#17594A' : '#232323',
        borderRadius: 8,
        paddingVertical: 7,
        paddingHorizontal: 10,
        marginVertical: 2,
        marginHorizontal: 16,
        maxWidth: '80%',
        borderTopRightRadius: msg.isMe ? 6 : 8,
        borderTopLeftRadius: msg.isMe ? 8 : 6,
      }}
    >
      {msg.isAppLink && (
        <View style={{ 
          backgroundColor: msg.isMe ? '#1e8449' : '#1a1a1a', 
          borderRadius: 6, 
          padding: 8, 
          marginBottom: 4 
        }}>
          <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 14 }}>
            InjuryPredictionML - Sports Injury Prediction
          </Text>
        </View>
      )}
      
      <Text style={{ 
        color: msg.isMe ? '#fff' : '#fff', 
        fontSize: 16,
        textDecorationLine: msg.isLink ? 'underline' : 'none',
        color: msg.isLink ? (msg.isMe ? '#b2dfdb' : '#25D366') : (msg.isMe ? '#fff' : '#fff')
      }}>
        {msg.text}
      </Text>
      
      <View style={{ 
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'flex-end', 
        marginTop: 4 
      }}>
        <Text style={{ 
          color: msg.isMe ? '#004d40' : '#b0b0b0', 
          fontSize: 12, 
          marginRight: 4 
        }}>
          {msg.time}
        </Text>
        
        {msg.isMe && (
          <MaterialCommunityIcons 
            name={msg.status === 'read' ? 'check-all' : 'check'} 
            size={16} 
            color={msg.status === 'read' ? '#4fc3f7' : '#004d40'} 
          />
        )}
      </View>
    </View>
  );

  return (
    <KeyboardAvoidingView 
      style={{ flex: 1, backgroundColor: '#101010' }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      {/* Header */}
      <View style={{ 
        flexDirection: 'row', 
        alignItems: 'center', 
        paddingHorizontal: 16, 
        paddingTop: 50, 
        paddingBottom: 10, 
        backgroundColor: '#232323',
        borderBottomWidth: 0.2,
        borderBottomColor: '#333'
      }}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginRight: 12 }}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        
        <Image 
          source={{ uri: chat.avatar }} 
          style={{ width: 40, height: 40, borderRadius: 20, marginRight: 12 }}
        />
        
        <View style={{ flex: 1 }}>
          <Text style={{ color: '#fff', fontSize: 18, fontWeight: 'bold' }}>
            {chat.name.replace('...', '')}
          </Text>
          <Text style={{ color: '#b0b0b0', fontSize: 13 }}>
            {chat.name === 'Lakhan Uiet' ? 'tap here for contact info' : 'last seen recently'}
          </Text>
        </View>
        
        <TouchableOpacity style={{ marginRight: 16 }}>
          <Ionicons name="videocam" size={24} color="#fff" />
        </TouchableOpacity>
        
        <TouchableOpacity>
          <Ionicons name="call" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Messages */}
      <ScrollView 
        style={{ flex: 1 }}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingVertical: 8 }}
      >
        {/* Date Header */}
        <View style={{ alignItems: 'center', marginVertical: 16 }}>
          <View style={{ 
            backgroundColor: '#232323', 
            borderRadius: 12, 
            paddingHorizontal: 12, 
            paddingVertical: 4 
          }}>
            <Text style={{ color: '#b0b0b0', fontSize: 12 }}>
              {chat.name === 'Lakhan Uiet' ? 'Thursday' : 'Today'}
            </Text>
          </View>
        </View>

        {/* Call Status for Lakhan Uiet */}
        {chat.name === 'Lakhan Uiet' && (
          <View style={{ alignItems: 'center', marginVertical: 8 }}>
            <View style={{ 
              backgroundColor: '#d32f2f', 
              borderRadius: 12, 
              paddingHorizontal: 12, 
              paddingVertical: 6,
              flexDirection: 'row',
              alignItems: 'center'
            }}>
              <MaterialCommunityIcons name="phone-missed" size={16} color="#fff" style={{ marginRight: 6 }} />
              <Text style={{ color: '#fff', fontSize: 12 }}>No answer</Text>
              <Text style={{ color: '#fff', fontSize: 12, marginLeft: 8 }}>4:40 PM</Text>
            </View>
          </View>
        )}

        {/* Messages */}
        {messages.map(renderMessage)}

        {/* Friday Header for Lakhan Uiet */}
        {chat.name === 'Lakhan Uiet' && (
          <View style={{ alignItems: 'center', marginVertical: 16 }}>
            <View style={{ 
              backgroundColor: '#232323', 
              borderRadius: 12, 
              paddingHorizontal: 12, 
              paddingVertical: 4 
            }}>
              <Text style={{ color: '#b0b0b0', fontSize: 12 }}>Friday</Text>
            </View>
          </View>
        )}
      </ScrollView>

      {/* Input Area */}
      <View style={{ 
        flexDirection: 'row', 
        alignItems: 'center', 
        paddingHorizontal: 16, 
        paddingVertical: 8, 
        backgroundColor: '#101010',
        borderTopWidth: 0.2,
        borderTopColor: '#232323'
      }}>
        <TouchableOpacity style={{ marginRight: 12 }}>
          <Ionicons name="add" size={24} color="#b0b0b0" />
        </TouchableOpacity>
        
        <View style={{ 
          flex: 1, 
          flexDirection: 'row', 
          alignItems: 'center', 
          backgroundColor: '#232323', 
          borderRadius: 20, 
          paddingHorizontal: 12,
          paddingVertical: 8
        }}>
          <TextInput
            style={{ 
              flex: 1, 
              color: '#fff', 
              fontSize: 16,
              maxHeight: 100
            }}
            placeholder="Message"
            placeholderTextColor="#b0b0b0"
            value={message}
            onChangeText={setMessage}
            multiline
          />
          
          <TouchableOpacity style={{ marginLeft: 8 }}>
            <Ionicons name="happy-outline" size={24} color="#b0b0b0" />
          </TouchableOpacity>
        </View>
        
        <TouchableOpacity style={{ marginLeft: 12 }}>
          <MaterialCommunityIcons name="paperclip" size={24} color="#b0b0b0" />
        </TouchableOpacity>
        
        <TouchableOpacity style={{ marginLeft: 12 }}>
          <Ionicons name="camera" size={24} color="#b0b0b0" />
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={{ 
            backgroundColor: '#25D366', 
            borderRadius: 20, 
            padding: 8, 
            marginLeft: 12 
          }}
          onPress={sendMessage}
        >
          <Ionicons name={message.trim() ? "send" : "mic"} size={20} color="#fff" />
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}