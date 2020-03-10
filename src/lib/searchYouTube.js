var searchYouTube = ({key, query, max = 5}, callback) => {
  $.get('https://www.googleapis.com/youtube/v3/search', {
    part: 'snippet',
    key: key,
    q: query,
    maxResults: max,
    type: 'video',
    videoEmbeddable: 'true'
  })
    .done(({items}) => {
      if (callback) {
        callback(items);
      }
    })
    .fail(({responseJSON}) => {
      responseJSON.error.errors.forEach((err) =>
        console.error(err)
      );
    });
};

export default searchYouTube;

/* 

Fetch API Methid : 

var searchYouTube = ({key, query, max = 5}, callback) => {
  fetch('https://www.googleapis.com/youtube/v3/search')
  .then(data => data.json())
  .then(data => callback(data))
  .catch(err => console.log(err))
};

*/