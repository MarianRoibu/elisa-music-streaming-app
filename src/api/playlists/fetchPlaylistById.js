const fetchPlaylistById = async (id, token) => {
    try {
      const request = await fetch(`${process.env.REACT_APP_API_URL}/playlists/id/${id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const response = await request.json();
      return response;
    } catch (error) {
      console.error(error);
      return { msg: error.message, token };
    }
  };
  
  export default fetchPlaylistById;
  