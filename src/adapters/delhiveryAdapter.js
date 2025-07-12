exports.track = async (order_id) => {
  // Return only sample/mock data with GPS coordinates
  return {
    status: "In Transit",
    location: {
      gps: "28.6139,77.2090",
      address: "New Delhi Hub"
    },
    updated_at: new Date().toISOString()
  };
};