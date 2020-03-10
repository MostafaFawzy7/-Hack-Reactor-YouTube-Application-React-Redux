import { connect } from 'react-redux';
import VideoList from './../components/VideoList.js';

const mapStateToProps = state => {
  return {
    videos: state.videoList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleVideoListEntryTitleClick: (video) => dispatch({
      type: 'CHANGE_VIDEO',
      video: video
    })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(VideoList);