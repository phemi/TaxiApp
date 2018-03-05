import { Dimensions } from 'react-native';

const width = Dimensions.get('window').width;

const styles = {
  searchBox: {
    top: 60,
    position: 'absolute',
    width
  },

  inputWrapper: {
    marginLeft: 15,
    marginRight: 10,
    marginTop: 10,
    marginBottom: 0,
    backgroundColor: '#fff',
    opacity: 0.9,
    borderRadius: 7
  },
  secondInputWrapper: {
    marginLeft: 15,
    marginRight: 10,
    marginTop: 0,
    backgroundColor: '#fff',
    opacity: 0.9,
    borderRadius: 7
  },
  inputSearch: {
    fontSize: 14
  },
  label: {
    fontSize: 10,
    fontSTyle: 'italic',
    marginLeft: 10,
    marginTop: 10,
    marginBottom: 0
  }
};

export default styles;
