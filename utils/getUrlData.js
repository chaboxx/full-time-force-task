

const getUrlData = ( url ) =>{

  const match = url.match(
    /^https?:\/\/(www\.)?github.com\/(?<owner>[\w.-]+)\/(?<repo>[\w.-]+)/
  );

  if (!match || !( match.groups?.owner && match.groups?.repo )) {
    throw new Error("Incorrect Url");
  }
  
  return {
    owner : match.groups.owner,
    repo : match.groups.repo,
  };
  

}


module.exports = {
  getUrlData,
}