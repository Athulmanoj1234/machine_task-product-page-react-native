import React from 'react';
import { StyleSheet, Text, View, Image, Button, ScrollView, TouchableOpacity } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { LinearGradient } from 'expo-linear-gradient';
import { Picker } from '@react-native-picker/picker';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Feather from '@expo/vector-icons/Feather';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';


export default function App() {
  return (
    // main duv
    <ScrollView>
      <LinearGradient style={styles.container}
        colors={['#87CEEB', 'white']}
        start={{ x: 0.2, y: 0 }}
        end={{ x: 0.3, y: 0.3 }}
      >
        {/* header */}
        <View style={styles.header}>
          <AntDesign name="arrowleft" size={24} color="black" />
          <AntDesign name="search1" size={24} color="blue" />
        </View>
        {/* banner */}
        <View style={styles.banner} >
          <View style={styles.cucina}>
            {/* <Image source={require('./french-fries-lays-potato-chip-salt-vinegar-lays-chips-pack-602fb52ba63306ad0fb6e24f85fc2d12.png')} */}
            <Image source={{ uri: "https://m.media-amazon.com/images/I/715jhSW5PCL._UF1000,1000_QL80_.jpg" }}
              style={{ width: 300, height: 320, marginRight: 10, marginTop: -20 }}></Image>
          </View>
          <View style={{ paddingLeft: 3, paddingTop: 20, flexDirection: 'column', marginTop: 2 }}>
            <Text style={{ fontWeight: 'bold', fontSize: 19 }}>Cucina French Frie</Text>
            <Text>1 Pack</Text>
          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 9 }}>
            <View style={{ flexDirection: 'column' }}>
              <Text style={{ fontWeight: 'bold', fontSize: 19 }} >AED 115</Text>
              <Text style={{ marginTop: 3 }}>Pcs / carton</Text>
            </View>
            <View style={{ flexDirection: 'row', gap: 19, backgroundColor: 'white', borderRadius: 9, borderColor: '#87CEEB', borderWidth: 2, paddingVertical: 0.3, paddingHorizontal: 19, justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ color: '#87CEEB', fontWeight: 600 }}>-</Text>
              <Text style={{ color: '#87CEEB', fontWeight: 600 }}>1</Text>
              <Text style={{ color: '#87CEEB', fontWeight: 600 }}>+</Text>
            </View>
          </View>

          <View style={{ marginTop: 15, elevation: 1, borderRadius: 2, width: '40%', height: 55, flexDirection: 'row', alignItems: 'center', position: 'relative', paddingLeft: 12, justifyContent: 'space-between' }}>
            <Text style={{ marginLeft: 11 }}>per Carton</Text>
            <Picker style={{}} />
          </View>

          <LinearGradient style={{ height: 70, width: '100%', marginTop: '5%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderRadius: 20 }}
            colors={['white', '#88E788']}
            start={{ x: 0, y: 0 }}
            end={{ x: 6, y: 0.5 }}
          >
            <View style={{ flexDirection: 'row' }}>
              <FontAwesome5 name="whatsapp-square" size={24} color="green" />
              <Text style={{ marginTop: 2, fontSize: 18, marginLeft: 14, fontWeight: 'light' }}>Chat with us</Text>
            </View>
            <MaterialIcons name="arrow-right" size={29} color="black" style={{}} />
          </LinearGradient>

          <View style={{ height: 70, width: '100%', marginTop: 15, elevation: 2, shadowColor: 'black', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <View style={{ flexDirection: 'row', gap: 8 }}>
              <MaterialIcons name="qr-code-scanner" size={24} color="blue" />
              <View style={{ flexDirection: 'column', marginTop: -6 }}>
                <Text>Product Details</Text>
                <Text style={{ color: 'silver' }}>Care instructions, Pack, Contains</Text>
              </View>
            </View>
            <MaterialIcons name="arrow-drop-down" size={24} color="black" />
          </View>

          <View style={{ height: 70, width: '100%', marginTop: -10, elevation: 2, shadowColor: 'black', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <View style={{ flexDirection: 'row', gap: 8 }}>
              <MaterialIcons name="qr-code-scanner" size={24} color="blue" />
              <View style={{ flexDirection: 'column', marginTop: -6 }}>
                <Text>Product Details</Text>
                <Text style={{ color: 'silver' }}>Care instructions, Pack, Contains</Text>
              </View>
            </View>
            <MaterialIcons name="arrow-drop-down" size={24} color="black" />
          </View>

          <LinearGradient style={{ paddingTop: 28, paddingLeft: 30, height: 400, borderRadius: 20 }}
            colors={['white', '#6393ed']}
            start={{ x: 6, y: 0 }}
            end={{ x: 0.1, y: 20 }}
          >
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Related Products</Text>
              <MaterialIcons name="arrow-right" size={29} color="black" style={{}} />
            </View>

            <View style={{ height: 380, width: 320, flexDirection: 'row', gap: 30 }}>
              <View style={{ backgroundColor: 'white', height: '70%', marginTop: 20, width: '55%', borderRadius: 20, position: 'relative', flexDirection: 'column', alignItems: 'center', elevation: 2 }}>
                {/* product card */}
                <Image source={require('./french-fries-lays-potato-chip-salt-vinegar-lays-chips-pack-602fb52ba63306ad0fb6e24f85fc2d12.png')} style={{ position: 'absolute', height: 120, width: 120, marginTop: 25 }}></Image>
                <Text style={{ position: 'absolute', top: '60%' }}>{`Cucina Chicken \n Burger 100 gm`}</Text>
                <Text style={{ fontWeight: 'bold', position: 'absolute', top: 200, right: 84 }}>AED 115</Text>
                <TouchableOpacity title="Select Option" style={{ height: 20, backgroundColor: '#5f98f1', width: '130', position: 'absolute', top: 230, borderRadius: 5, color: 'white', }}><Text style={{ color: 'white', fontWeight: 'bold', position: 'relative', left: 22 }}>Select Option</Text></TouchableOpacity>
              </View>

              <View style={{ backgroundColor: 'white', height: '70%', marginTop: 20, width: '55%', borderRadius: 20, position: 'relative', flexDirection: 'column', alignItems: 'center', elevation: 2 }}>
                product card
                <Image source={require('./french-fries-lays-potato-chip-salt-vinegar-lays-chips-pack-602fb52ba63306ad0fb6e24f85fc2d12.png')} style={{ position: 'absolute', height: 120, width: 120, marginTop: 25 }}></Image>
                <Text style={{ position: 'absolute', top: '60%' }}>{`Cucina Chicken \n Burger 100 gm`}</Text>
                <Text style={{ fontWeight: 'bold', position: 'absolute', top: 200, right: 84 }}>AED 115</Text>
                <TouchableOpacity style={{ height: 20, backgroundColor: '#5f98f1', width: '130', position: 'absolute', top: 230, borderRadius: 5, color: 'white', }}><Text style={{ color: 'white', fontWeight: 'bold', position: 'relative', left: 22 }}>Select Option</Text></TouchableOpacity>
              </View>
            </View>

          </LinearGradient>

          <View style={{ paddingTop: 60, paddingLeft: 10, flexDirection: 'row', gap: 16, position: 'relative' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 20 }}>AED 115</Text>
            <TouchableOpacity style={{ height: 40, width: 230, backgroundColor: '#5f98f1', paddingVertical: 3, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderRadius: 10, position: 'absolute', top: 53, left: 100 }}><Text style={{ fontWeight: 'bold', color: 'white' }}>Add to Cart</Text></TouchableOpacity>
          </View>
        </View>

        <View style={{ flexDirection: 'row', paddingLeft: 30, width: '100%', paddingRight: 20, justifyContent: 'space-between', height: 80 }}>
          {/* home */}
          <View style={{ flexDirection: 'column' }}>
            <Feather name="home" size={24} color="black" style={{ marginLeft: 7 }} />
            <Text>Home</Text>
          </View>
          {/* orders */}
          <View style={{ flexDirection: 'column' }}>
            <Feather name="shopping-bag" size={24} color="black" style={{ marginLeft: 10 }} />
            <Text>Orders</Text>
          </View>
          {/* Cart */}
          <View style={{ flexDirection: 'column' }}>
            <Feather name="shopping-cart" size={24} color="black" />
            <Text>Cart</Text>
          </View>
          {/* wishlist  */}
          <View style={{ flexDirection: 'column' }}>
            <MaterialCommunityIcons name="account-box-multiple-outline" size={24} color="black" style={{ marginLeft: 10 }} />
            <Text>Wishlist</Text>
          </View>
          {/* Account */}
          <View style={{ flexDirection: 'column' }}>
            <MaterialCommunityIcons name="account" size={24} color="black" style={{ marginLeft: 13 }} />
            <Text>Account</Text>
          </View>
        </View>
      </LinearGradient>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    backgroundColor: 'silver',
    paddingRight: 15,
    gap: 18,

  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 55,
    paddingRight: 20,
    paddingLeft: 20,
    backgroundColor: 'white',
    height: 100,
    borderRadius: 20,
  },
  banner: {
    flexDirection: 'column',
    // height: 600,
    // position: 'relative',
    paddingLeft: 15,
    marginBottom: 70,

  },
  cucina: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // position: 'absolute',
    // top: 10,
    // right: 13,
    backgroundColor: 'white',
    width: 350,
    height: 350,
    padding: 20,
    elevation: 10,
    shadowColor: 'black',
    borderRadius: 20,
  },
  laysImage: {

  },
});

