// import React from 'react';
// import { View, Text } from 'react-native';
// import { Ionicons, MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';

// const chats = [
//   {
//     id: 1,
//     name: 'JOHN KHORE...',
//     you: true,
//     time: '4:04 PM',
//     message: '✔✔ .',
//     avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
//     unread: false,
//   },
//   {
//     id: 2,
//     name: 'Happy Bhaijaan❤️',
//     time: '10:23 AM',
//     message: '✔/ https://youtube.com/shorts/tGwWY31Hfwo?si=8vWhmm...',
//     avatar: 'https://randomuser.me/api/portraits/men/2.jpg',
//     unread: true,
//   },
//   {
//     id: 3,
//     name: 'TPC IT 2026',
//     time: '',
//     message: 'Announcements, TPC IT 2026',
//     avatar: 'https://randomuser.me/api/portraits/men/3.jpg',
//     unread: false,
//   },
//   {
//     id: 4,
//     name: 'UIET HELPDESK 20...',
//     time: 'Yesterday',
//     message: '~DC Kundra: UIET~NSDC INTERNSHIP PROGRAM ✌️',
//     avatar: 'https://randomuser.me/api/portraits/men/4.jpg',
//     unread: false,
//   },
//   {
//     id: 5,
//     name: 'UIET IT helpdesk 2...',
//     time: 'Yesterday',
//     message: '~Anmol_bnsl: UIET~NSDC INTERNSHIP PROGRAM ✌️',
//     avatar: 'https://randomuser.me/api/portraits/men/5.jpg',
//     unread: false,
//   },
// ];

// export default function ChatsScreen() {
//   return (
//     <View style={{ flex: 1, backgroundColor: '#101010' }}>
//       {/* Header */}
//       <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 16, paddingTop: 40, paddingBottom: 10, backgroundColor: '#101010' }}>
//         <Text style={{ color: '#fff', fontSize: 32, fontWeight: 'bold' }}>Chats</Text>
//         <View style={{ flexDirection: 'row', alignItems: 'center' }}>
//           <Ionicons name="ellipsis-horizontal" size={28} color="#fff" style={{ marginRight: 18 }} />
//           <View style={{ backgroundColor: '#25D366', borderRadius: 20, padding: 6 }}>
//             <Ionicons name="add" size={24} color="#fff" />
//           </View>
//         </View>
//       </View>
//       {/* Search Bar */}
//       <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#232323', borderRadius: 12, marginHorizontal: 16, paddingHorizontal: 12, height: 38, marginBottom: 8 }}>
//         <Ionicons name="search" size={20} color="#b0b0b0" />
//         <Text style={{ color: '#b0b0b0', marginLeft: 8, fontSize: 15 }}>Ask Meta AI or Search</Text>
//       </View>
//       {/* Filter Chips */}
//       <View style={{ flexDirection: 'row', marginHorizontal: 10, marginBottom: 8 }}>
//         {['All', 'Unread', 'Favourites', 'Groups'].map((label, idx) => (
//           <View key={label} style={{ backgroundColor: idx === 0 ? '#25D366' : '#232323', borderRadius: 16, paddingHorizontal: 14, paddingVertical: 5, marginRight: 8 }}>
//             <Text style={{ color: idx === 0 ? '#101010' : '#b0b0b0', fontWeight: 'bold', fontSize: 13 }}>{label}</Text>
//           </View>
//         ))}
//       </View>
//       {/* Locked & Archived */}
//       <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 16, marginBottom: 2 }}>
//         <MaterialCommunityIcons name="lock" size={18} color="#b0b0b0" style={{ marginRight: 10 }} />
//         <Text style={{ color: '#b0b0b0', fontSize: 15 }}>Locked chats</Text>
//       </View>
//       <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 16, marginBottom: 8 }}>
//         <MaterialCommunityIcons name="archive-outline" size={18} color="#b0b0b0" style={{ marginRight: 10 }} />
//         <Text style={{ color: '#b0b0b0', fontSize: 15, fontWeight: 'bold' }}>Archived</Text>
//       </View>
//       {/* Chat List */}
//       <View style={{ flex: 1 }}>
//         {chats.map((chat, idx) => (
//           <View key={chat.id} style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 10, paddingHorizontal: 16, backgroundColor: '#101010', borderBottomWidth: 0.5, borderBottomColor: '#232323' }}>
//             <View style={{ width: 48, height: 48, borderRadius: 24, overflow: 'hidden', marginRight: 12, backgroundColor: '#232323', justifyContent: 'center', alignItems: 'center' }}>
//               <FontAwesome5 name="user-circle" size={40} color="#b0b0b0" />
//             </View>
//             <View style={{ flex: 1 }}>
//               <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 2 }}>
//                 <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 16, flexShrink: 1 }} numberOfLines={1}>{chat.name} {chat.you && <Text style={{ color: '#b0b0b0', fontWeight: 'normal' }}>(You)</Text>}</Text>
//                 <Text style={{ color: '#b0b0b0', fontSize: 13, marginLeft: 8 }}>{chat.time}</Text>
//               </View>
//               <Text style={{ color: '#b0b0b0', fontSize: 14 }} numberOfLines={1}>{chat.message}</Text>
//             </View>
//             {/* Status icons */}
//             {idx === 0 && (
//               <MaterialCommunityIcons name="check-all" size={20} color="#25D366" style={{ marginLeft: 8 }} />
//             )}
//             {idx === 1 && (
//               <MaterialCommunityIcons name="check" size={20} color="#b0b0b0" style={{ marginLeft: 8 }} />
//             )}
//           </View>
//         ))}
//       </View>
//     </View>
//   );
// } 

import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import { Ionicons, MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';

const chats = [
  {
    id: 1,
    name: 'JOHN KHORE...',
    you: true,
    time: '4:04 PM',
    message: '✓✓ .',
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
    unread: false,
    readReceipts: 'double-check',
  },
  {
    id: 2,
    name: 'Happy Bhaijaan❤️',
    time: '10:23 AM',
    message: '✓ https://youtube.com/shorts/tGwWY31Hfwo?si=8vWhmm...',
    avatar: 'https://randomuser.me/api/portraits/men/2.jpg',
    unread: true,
    readReceipts: 'single-check',
  },
  {
    id: 3,
    name: 'TPC IT 2026',
    time: '',
    message: 'Announcements, TPC IT 2026',
    avatar: 'https://randomuser.me/api/portraits/men/3.jpg',
    unread: false,
    isGroup: true,
  },
  {
    id: 4,
    name: 'UIET HELPDESK 20...',
    time: 'Yesterday',
    message: '~DC Kundra: UIET~NSDC INTERNSHIP PROGRAM ✌️',
    avatar: 'https://randomuser.me/api/portraits/men/4.jpg',
    unread: false,
    isGroup: true,
  },
  {
    id: 5,
    name: 'UIET IT helpdesk 2...',
    time: 'Yesterday',
    message: '~Anmol_bnsl: UIET~NSDC INTERNSHIP PROGRAM ✌️',
    avatar: 'https://randomuser.me/api/portraits/men/5.jpg',
    unread: false,
    isGroup: true,
  },
  {
    id: 6,
    name: 'Mom',
    time: 'Yesterday',
    message: 'Don\'t forget to take your medicines',
    avatar: 'https://randomuser.me/api/portraits/women/1.jpg',
    unread: true,
    unreadCount: 2,
  },
  {
    id: 7,
    name: 'Rahul Sharma',
    time: 'Yesterday',
    message: 'Hey! Are you coming to the party tonight?',
    avatar: 'https://randomuser.me/api/portraits/men/6.jpg',
    unread: false,
    you: false,
    readReceipts: 'double-check',
  },
  {
    id: 8,
    name: 'College Friends',
    time: 'Tuesday',
    message: 'Priya: When is the next reunion?',
    avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
    unread: true,
    unreadCount: 5,
    isGroup: true,
  },
  {
    id: 9,
    name: 'Dad',
    time: 'Tuesday',
    message: 'Call me when you reach home',
    avatar: 'https://randomuser.me/api/portraits/men/7.jpg',
    unread: false,
    you: false,
    readReceipts: 'single-check',
  },
  {
    id: 10,
    name: 'Workout Buddy',
    time: 'Monday',
    message: 'Tomorrow 6 AM gym?',
    avatar: 'https://randomuser.me/api/portraits/men/8.jpg',
    unread: false,
  },
  {
    id: 11,
    name: 'Office Team',
    time: 'Monday',
    message: 'Manager: Team meeting at 10 AM tomorrow',
    avatar: 'https://randomuser.me/api/portraits/women/3.jpg',
    unread: true,
    unreadCount: 3,
    isGroup: true,
  },
  {
    id: 12,
    name: 'Lakhan Uiet',
    time: 'Sunday',
    message: 'https://sports-injury-prediction.vercel.app/',
    avatar: 'https://randomuser.me/api/portraits/men/9.jpg',
    unread: false,
    you: false,
    readReceipts: 'double-check',
  },
  {
    id: 13,
    name: 'Pizza Delivery',
    time: 'Sunday',
    message: 'Your order has been delivered. Thank you!',
    avatar: 'https://randomuser.me/api/portraits/men/10.jpg',
    unread: false,
  },
  {
    id: 14,
    name: 'Sarah Johnson',
    time: 'Saturday',
    message: 'Thanks for the birthday wishes! 🎂',
    avatar: 'https://randomuser.me/api/portraits/women/4.jpg',
    unread: false,
    you: false,
    readReceipts: 'double-check',
  },
  {
    id: 15,
    name: 'Study Group',
    time: 'Saturday',
    message: 'Alex: Anyone has notes for chapter 5?',
    avatar: 'https://randomuser.me/api/portraits/men/11.jpg',
    unread: true,
    unreadCount: 7,
    isGroup: true,
  },
];

export default function ChatsScreen({ navigation }) {
  const handleChatPress = (chat) => {
    navigation.navigate('ChatDetail', { chat });
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#101010' }}>
      {/* Header */}
      <View style={{ 
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'space-between', 
        paddingHorizontal: 16, 
        paddingTop: 50, 
        paddingBottom: 10, 
        backgroundColor: '#101010' 
      }}>
        <Text style={{ color: '#fff', fontSize: 32, fontWeight: 'bold' }}>Chats</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <TouchableOpacity style={{ marginRight: 18 }}>
            <Ionicons name="camera-outline" size={28} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity style={{ marginRight: 18 }}>
            <Ionicons name="ellipsis-vertical" size={28} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity style={{ backgroundColor: '#25D366', borderRadius: 20, padding: 6 }}>
            <Ionicons name="add" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Search Bar */}
      <TouchableOpacity style={{ 
        flexDirection: 'row', 
        alignItems: 'center', 
        backgroundColor: '#232323', 
        borderRadius: 12, 
        marginHorizontal: 16, 
        paddingHorizontal: 12, 
        height: 38, 
        marginBottom: 8 
      }}>
        <Ionicons name="search" size={20} color="#b0b0b0" />
        <Text style={{ color: '#b0b0b0', marginLeft: 8, fontSize: 15 }}>Ask Meta AI or Search</Text>
      </TouchableOpacity>

      {/* Filter Chips */}
      <View style={{ flexDirection: 'row', marginHorizontal: 10, marginBottom: 2, height: 36 }}>
        {['All', 'Unread', 'Favourites', 'Groups'].map((label, idx, arr) => (
          <TouchableOpacity
            key={label}
            style={{
              backgroundColor: idx === 0 ? '#25D366' : '#232323',
              borderRadius: 16,
              flex: 1,
              marginRight: idx !== arr.length - 1 ? 8 : 0,
              minHeight: 28,
              justifyContent: 'center',
              alignItems: 'center',
              paddingVertical: 2,
            }}
          >
            <Text
              style={{
                color: idx === 0 ? '#000' : '#b0b0b0',
                fontWeight: idx === 0 ? 'bold' : 'normal',
                fontSize: 13,
              }}
            >
              {label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Locked & Archived */}
      <TouchableOpacity style={{ 
        flexDirection: 'row', 
        alignItems: 'center', 
        marginHorizontal: 16, 
        marginBottom: 8,
        paddingVertical: 8
      }}>
        <MaterialCommunityIcons name="lock" size={18} color="#b0b0b0" style={{ marginRight: 12 }} />
        <Text style={{ color: '#b0b0b0', fontSize: 15 }}>Locked chats</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{ 
        flexDirection: 'row', 
        alignItems: 'center', 
        marginHorizontal: 16, 
        marginBottom: 8,
        paddingVertical: 8
      }}>
        <MaterialCommunityIcons name="archive-outline" size={18} color="#b0b0b0" style={{ marginRight: 12 }} />
        <Text style={{ color: '#b0b0b0', fontSize: 15, fontWeight: 'bold' }}>Archived</Text>
        <View style={{ 
          backgroundColor: '#25D366', 
          borderRadius: 10, 
          minWidth: 20, 
          height: 20, 
          justifyContent: 'center', 
          alignItems: 'center', 
          marginLeft: 8 
        }}>
          <Text style={{ color: '#000', fontSize: 12, fontWeight: 'bold' }}>3</Text>
        </View>
      </TouchableOpacity>

      {/* Chat List */}
      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        {chats.map((chat) => (
          <TouchableOpacity 
            key={chat.id} 
            style={{ 
              flexDirection: 'row', 
              alignItems: 'center', 
              paddingVertical: 12, 
              paddingHorizontal: 16, 
              backgroundColor: '#101010',
              borderBottomWidth: 0.2,
              borderBottomColor: '#232323'
            }}
            onPress={() => handleChatPress(chat)}
            activeOpacity={0.7}
          >
            <View style={{ 
              width: 50, 
              height: 50, 
              borderRadius: 25, 
              overflow: 'hidden', 
              marginRight: 12, 
              backgroundColor: '#232323',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <Image 
                source={{ uri: chat.avatar }} 
                style={{ width: 50, height: 50, borderRadius: 25 }}
                defaultSource={{ uri: 'https://via.placeholder.com/50x50/232323/b0b0b0?text=?' }}
              />
            </View>
            
            <View style={{ flex: 1 }}>
              <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 4 }}>
                <Text style={{ 
                  color: '#fff', 
                  fontWeight: 'bold', 
                  fontSize: 16, 
                  flex: 1 
                }} numberOfLines={1}>
                  {chat.name}
                  {chat.you && <Text style={{ color: '#b0b0b0', fontWeight: 'normal' }}> (You)</Text>}
                </Text>
                <Text style={{ color: '#b0b0b0', fontSize: 12 }}>{chat.time}</Text>
              </View>
              
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ 
                  color: '#b0b0b0', 
                  fontSize: 14, 
                  flex: 1 
                }} numberOfLines={1}>
                  {chat.message}
                </Text>
                
                <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 8 }}>
                  {chat.readReceipts === 'double-check' && (
                    <MaterialCommunityIcons name="check-all" size={16} color="#25D366" />
                  )}
                  {chat.readReceipts === 'single-check' && (
                    <MaterialCommunityIcons name="check" size={16} color="#b0b0b0" />
                  )}
                  {chat.unreadCount && (
                    <View style={{ 
                      backgroundColor: '#25D366', 
                      borderRadius: 10, 
                      minWidth: 20, 
                      height: 20, 
                      justifyContent: 'center', 
                      alignItems: 'center', 
                      marginLeft: 4 
                    }}>
                      <Text style={{ color: '#000', fontSize: 12, fontWeight: 'bold' }}>
                        {chat.unreadCount}
                      </Text>
                    </View>
                  )}
                </View>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}