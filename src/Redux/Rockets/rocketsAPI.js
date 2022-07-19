const getRocketsFromAPI = async () => {
  const result = await fetch('https://api.spacexdata.com/v3/rockets');
  const rocketsData = await result.json();
  const rockets = rocketsData.map((data) => ({
    id: data.id,
    rocketName: data.rocket_name,
    description: data.description,
    flickrImages: data.flickr_images,
  }));
  return rockets;
};

export default getRocketsFromAPI;
