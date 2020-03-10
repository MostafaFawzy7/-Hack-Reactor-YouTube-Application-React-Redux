import { connect } from 'react-redux';
import VideoList from './../components/VideoList.js';

const mapStateToProps = state => {
  return {
    videos: state.videoList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleVideoListEntryTitleClick: (videos) => dispatch({
      type: 'CHANGE_VIDEO_LIST',
      videos
    })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(VideoList);