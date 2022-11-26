import React from 'react';
import {
  Text,
  View,
  ImageBackground,
  TouchableHighlight,
  TextInput,
  Image,
  Modal,
  Alert,
  ScrollView,
} from 'react-native';

function Home() {
  return (
    <ScrollView>
      <View
        style={{
          flexGrow: 1,
          justifyContent: 'center',
          alignItems: 'center',
          width: '360',
          height: '800',
        }}>
        <View
          style={{
            width: '360px',
            height: '90px',
            display: 'flex',
            flexDirection: 'row',
            borderBottomEndRadius: 5,
            borderBottomColor: '#FB9600',
          }}>
          <Image
            source={require('../assets/logo.png')}
            style={{ marginLeft: '10%', marginTop: '10%' }}
          />
          <Text
            style={{
              width: '128px',
              height: '36px',
              fontSize: 15,
              fontFamily: 'Roboto',
              marginLeft: '12%',
              textAlign: 'center',
              color: '#53ADEF',
              marginTop: '10%',
            }}>
            TOP SEGUROS BRASIL
          </Text>
          <Image
            source={require('../assets/menu.png')}
            style={{ marginLeft: '10%', marginTop: '10%' }}
          />
        </View>

        <View
          style={{
            flexGrow: 1,
            width: '360px',
            height: '608px',
            backgroundColor: '#E5E5E5',
          }}>
          <Text
            style={{
              fontSize: 20,
              color: 'black',
              fontFamily: 'Roboto',
              marginLeft: '30%',
              marginTop: '15%',
            }}>
            Tipos de seguros
          </Text>

          <View style={{ display: 'flex', flexDirection: 'row' }}>
            <View
              style={{
                width: '162px',
                height: '146px',
                backgroundColor: 'white',
                borderRadius: 20,
                marginTop: '10%',
                marginLeft: '5%',
              }}>
              <Text style={{fontFamily: 'Roboto', fontSize: '10', marginTop: '5%', marginLeft: '10%'}}>Seguro para Carros</Text>
              <Image
                source={require('../assets/carro.png')}
                style={{ marginLeft: '20%', marginTop: '42%' }}
              />
            </View>

            <View
              style={{
                width: '162px',
                height: '146px',
                backgroundColor: 'white',
                borderRadius: 20,
                marginTop: '10%',
                marginLeft: '2%',
              }}>
              <Text style={{fontFamily: 'Roboto', fontSize: '10', marginTop: '5%', marginLeft: '10%'}}>Seguro para Motos</Text>
                <Image
                source={require('../assets/moto.png')}
                style={{ marginLeft: '20%', marginTop: '42%' }}
              />
              </View>
          </View>

          <View style={{ display: 'flex', flexDirection: 'row' }}>
            <View
              style={{
                width: '162px',
                height: '146px',
                backgroundColor: 'white',
                borderRadius: 20,
                marginTop: '10%',
                marginLeft: '5%',
              }}>
                <Text style={{fontFamily: 'Roboto', fontSize: '10', marginTop: '5%', marginLeft: '10%'}}>Seguro para Vans</Text>
                <Image
                source={require('../assets/van.png')}
                style={{ marginLeft: '20%', marginTop: '40%' }}
              />
              </View>

            <View
              style={{
                width: '162px',
                height: '146px',
                backgroundColor: 'white',
                borderRadius: 20,
                marginTop: '10%',
                marginLeft: '2%',
              }}>
              <Text style={{fontFamily: 'Roboto', fontSize: '10', marginTop: '5%', marginLeft: '5%'}}>Seguro para Caminhões</Text>
              <Image
                source={require('../assets/caminhao.png')}
                style={{ marginLeft: '20%', marginTop: '42%' }}
              />
              </View>
          </View>
        </View>

        <View
          style={{
            width: '360px',
            height: '90px',
            display: 'flex',
            flexDirection: 'row',
            borderBottomEndRadius: 5,
            borderBottomColor: '#FB9600',
          }}>
          <Text
            style={{
              fontFamily: 'Roboto',
              fontSize: 8,
              textAlign: 'center',
              textAlignVertical: 'center',
              marginLeft: '30%',
              marginTop: '10%',
            }}>
            {' '}
            © Copyright Top Seguros Brasil - 2022
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

export default Home;
