import { connect } from 'react-redux';
import VideoPlayer from '../components/VideoPlayer.js';

const mapStateToProps = state => {
  return {
    video: state.currentVideo
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleVideoListEntryTitleClick: (video) => dispatch({
      type: 'CHANGE_VIDEO',
      video
    })
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(VideoPlayer);