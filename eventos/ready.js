module.exports = (client) => {
  
    client.user.setPresence( 
      {
        status: "online", 
        activity: { 
          name: 'tron-hosting.xyz', 
          url: "https://tron-hosting.xyz/", // poner url solo si esta en el modo streaming.
          type: "PLAYING"
        }
      }
    );
   
    
  }