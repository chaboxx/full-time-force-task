

const getUserRepo = ( url ) =>{

  if ( !url ){
    return null;
  }
  const match = url.match(
    /^https?:\/\/(www\.)?github.com\/(?<owner>[\w.-]+)\/(?<repo>[\w.-]+)/
  );

  if (!match || !( match.groups?.owner && match.groups?.repo )) {
    return null;
  }
  
  return {
    owner : match.groups.owner,
    repo : match.groups.repo
  };
  

}


module.exports = {
  getUserRepo,
}