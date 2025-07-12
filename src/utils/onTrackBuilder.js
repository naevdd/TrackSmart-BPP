module.exports = function buildOnTrackResponse(trackingData) {
  return {
    context: {
      action: "on_track",
      timestamp: new Date().toISOString(),
    },
    message: {
      tracking: {
        status: trackingData.status,
        location: trackingData.location,
        updated_at: trackingData.updated_at,
      },
    },
  };
};