const url = 'https://api.spacexdata.com/v3/missions';

const getData = async () => {
  const response = await fetch(url);
  const data = await response.json();
  const allMission = data.map((mission) => ({
    mission_name: mission.mission_name,
    mission_id: mission.mission_id,
    description: mission.description,
  }));
  return allMission;
};

export default getData;
