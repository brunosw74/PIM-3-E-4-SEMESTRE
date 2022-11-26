import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
  view: {
    width: '360px',
    height: '96px',
    top: '0.24',
    position: 'absolute',
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'row',
  },
  text: {
    width: '128px',
    height: '36px',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontFamily: 'Raleway',
    color: '#53ADEF',
    fontSize: '14px',
    marginTop: '10%',
    marginLeft: '15%'
  },
  img: {
    marginLeft: '5%',
    marginTop: '10%',
  },
});

export default style;
