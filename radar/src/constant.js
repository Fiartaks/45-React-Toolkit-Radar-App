export const options = {
    method: 'GET',
    url: 'https://flight-radar1.p.rapidapi.com/flights/list-in-boundary',
    params: {
      bl_lat: '34.503215',
      bl_lng: '25.324261',
      tr_lat: '42.869652',
      tr_lng: '44.552871',
      limit: '300'
    },
    headers: {
      'x-rapidapi-key': 'cbe9111332mshab02883c742656cp1f1d81jsn722495a01950',
      'x-rapidapi-host': 'flight-radar1.p.rapidapi.com'
    }
  };
  
  export const options2 ={
    headers: {
      'x-rapidapi-key': 'cbe9111332mshab02883c742656cp1f1d81jsn722495a01950',
      'x-rapidapi-host': 'flight-radar1.p.rapidapi.com'
    }
  };
  