import { Dimensions } from 'react-native';

const width = Dimensions.get('window').width;

const styles = {
  searchResultsWrapper: {
    top: 200,
    position: 'absolute',
    width,
    height: 1000,
    backgroundColor: '#fff',
    opacity: 0.9
  },
  primaryText: {
    fontWeight: 'bold',
    color: '#373737'
  },
  secondarytext: {
    fontStyle: 'italic',
    color: '#7D7D7D'
  },
  leftIcons: {
    fontSize: 20,
    color: '#7D7D7D'
  },
  distance: {
    fontSize: 12
  }
};

export default styles;
