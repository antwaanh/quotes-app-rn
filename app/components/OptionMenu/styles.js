import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  optionMenuContainer: {
    flex: 1,
    alignSelf: 'flex-end'
  },
  optionMenu: {
    backgroundColor: 'white'
  },
  optionMenuHeader: {
    backgroundColor: 'rgb(250,250,250)'
  },
  optionMenuHeaderText: {
    color: 'rgb(155,155,155)',
    fontWeight: '400',
    fontSize: 13,
    textAlign: 'center',
    paddingVertical: 10
  },
  optionMenuItem: {
    height: 50,
    flexDirection: 'row'
  },
  optionMenuIcon: {
    paddingVertical: 20,
    paddingHorizontal: 18
  },
  optionMenuLabel: {
    flex: 1,
    justifyContent: 'center',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'rgb(200,199,204)'
  },
  optionMenuLabelText: {
    fontSize: 15
  },
  optionMenuSubLabelText: {
    fontSize: 12,
    color: 'rgb(147, 146, 151)'
  }
});
