import React, { createContext, useState, useEffect } from 'react';
import { NavigationContainer, getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MaterialCommunityIcons, Ionicons, FontAwesome5, FontAwesome } from '@expo/vector-icons';
import ChatsScreen from './screens/ChatsScreen';
import ChatDetailScreen from './screens/ChatDetialScreen';
import CallsScreen from './screens/CallsScreen';
import CommunitiesScreen from './screens/CommunitiesScreen';
import SettingsScreen from './screens/SettingsScreen';
import { View, Text, Platform, Alert } from 'react-native';
import * as Notifications from 'expo-notifications';
import * as Device from 'expo-device';
import Constants from 'expo-constants';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Set notification handler to show alerts and play sound in foreground
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

export const ExpoTokenContext = createContext(null);

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// Stack Navigator for Chats
function ChatsStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ChatsList" component={ChatsScreen} />
      <Stack.Screen name="ChatDetail" component={ChatDetailScreen} />
    </Stack.Navigator>
  );
}

function UpdatesScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: '#101010', justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ color: '#fff', fontSize: 20 }}>Updates Screen</Text>
    </View>
  );
}

async function registerForPushNotificationsAsync() {
  try {
    if (!Device.isDevice) {
      console.log('Must use physical device for Push Notifications');
      return null;
    }

    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;

    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }

    if (finalStatus !== 'granted') {
      Alert.alert(
        'Notification Permission Denied',
        'Push notifications are disabled. You can enable them in your device settings.',
        [{ text: 'OK' }]
      );
      return null;
    }

    const tokenData = await Notifications.getExpoPushTokenAsync({
      projectId: '573919ed-5da3-45cd-be92-80d115e76dc9',
    });
    const token = tokenData.data;
    console.log('Expo push token:', token);

    // Save token to AsyncStorage
    try {
      await AsyncStorage.setItem('expoPushToken', token);
    } catch (e) {
      console.error('Failed to save token to AsyncStorage:', e);
    }

    if (Platform.OS === 'android') {
      await Notifications.setNotificationChannelAsync('default', {
        name: 'default',
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: '#FF231F7C',
      });
    }

    return token;
  } catch (error) {
    console.error('Error retrieving push token:', error);
    return null;
  }
}

export default function App() {
  const [expoPushToken, setExpoPushToken] = useState(null);

  useEffect(() => {
    registerForPushNotificationsAsync().then(token => {
      setExpoPushToken(token);
    });
    const subscription = Notifications.addNotificationReceivedListener(notification => {
      console.log('Notification received:', notification);
    });
    return () => subscription.remove();
  }, []);

  return (
    <ExpoTokenContext.Provider value={expoPushToken}>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Chats"
          screenOptions={({ route }) => ({
            headerShown: false,
            tabBarStyle: (() => {
              const routeName = getFocusedRouteNameFromRoute(route) ?? '';
              if (route.name === 'Chats' && routeName === 'ChatDetail') {
                return { display: 'none' };
              }
              return {
                backgroundColor: '#181818',
                borderTopWidth: 0,
                height: 65,
              };
            })(),
            tabBarActiveTintColor: '#fff',
            tabBarInactiveTintColor: '#b0b0b0',
            tabBarLabelStyle: {
              fontSize: 12,
              marginBottom: 6,
            },
            tabBarIcon: ({ focused, color, size }) => {
              if (route.name === 'Updates') {
                return <MaterialCommunityIcons name="progress-clock" size={26} color={focused ? '#fff' : '#b0b0b0'} style={focused ? { backgroundColor: '#222', borderRadius: 20, padding: 4 } : {}} />;
              } else if (route.name === 'Calls') {
                return <Ionicons name="call-outline" size={26} color={focused ? '#fff' : '#b0b0b0'} style={focused ? { backgroundColor: '#222', borderRadius: 20, padding: 4 } : {}} />;
              } else if (route.name === 'Communities') {
                return <FontAwesome5 name="users" size={26} color={focused ? '#fff' : '#b0b0b0'} style={focused ? { backgroundColor: '#222', borderRadius: 20, padding: 4 } : {}} />;
              } else if (route.name === 'Chats') {
                return <Ionicons name="chatbubbles" size={26} color={focused ? '#fff' : '#b0b0b0'} style={focused ? { backgroundColor: '#222', borderRadius: 20, padding: 4 } : {}} />;
              } else if (route.name === 'Settings') {
                return <FontAwesome name="gear" size={26} color={focused ? '#fff' : '#b0b0b0'} style={focused ? { backgroundColor: '#222', borderRadius: 20, padding: 4 } : {}} />;
              }
            },
          })}
        >
          <Tab.Screen name="Updates" component={UpdatesScreen} />
          <Tab.Screen name="Calls" component={CallsScreen} />
          <Tab.Screen name="Communities" component={CommunitiesScreen} />
          <Tab.Screen name="Chats" component={ChatsStack} />
          <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </ExpoTokenContext.Provider>
  );
}