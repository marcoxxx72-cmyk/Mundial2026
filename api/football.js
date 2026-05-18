export default async function handler(req, res) {
  const { path } = req.query;
  const url = `https://api.football-data.org/v4/${path}`;
  
  const response = await fetch(url, {
    headers: {
      'X-Auth-Token': '756b5806bcc542e2bd2d3a09de10d732'
    }
  });
  
  const data = await response.json();
  
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.status(200).json(data);
}
