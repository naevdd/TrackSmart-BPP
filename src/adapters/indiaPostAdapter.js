exports.track = async (order_id) => {
  // Mocked example; replace with real API call using axios
  return {
    status: "Out for Delivery",
    location: {
      gps: "28.6139,77.2090",
      address: "Patna"
    },
    updated_at: new Date().toISOString()
  };
};
