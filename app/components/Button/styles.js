import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  buttonContainer: {
    flex: 0.5,
    width: '100%',
    flexDirection: 'row'
  },
  buttonWrapper: {
    height: 50,
    alignSelf: 'flex-end',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: 'rgb(183,183,183)',
    width: '100%'
  },
  button: {
    justifyContent: 'center',
    alignSelf: 'flex-end',
    paddingVertical: 14,
    width: '100%'
  },
  buttonText: {
    color: 'rgb(21, 126, 251)',
    fontSize: 18,
    fontWeight: '400',
    textAlign: 'center'
  },
  icon: {
    marginTop: -5,
    padding: 0,
    margin: 0,
    textAlign: 'center'
  }
});
