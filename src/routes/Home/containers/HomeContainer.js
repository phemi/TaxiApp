import { connect } from 'react-redux';
import Home from '../components/Home';
import { getCurrentLocation } from '../modules/Home';

const mapStateToProps = (state) => ({
  region: state.home.region
});

const mapActionCreators = {
  getCurrentLocation
};

export default connect(mapStateToProps, mapActionCreators)(Home);
