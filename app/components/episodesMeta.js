import meta from './sideMenuJson';


var metaData =  meta.episodes.map(function(episode){
  return episode.episodesMeta.episodeName;
});

export default metaData;
