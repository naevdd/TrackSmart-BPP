exports.calculateETA = async (trackingInfo) => {
  // Mocked ETA logic; replace with real distance/time calculation
  if (trackingInfo.transport_mode === "air") return "2025-07-12T15:00:00+05:30";
  if (trackingInfo.transport_mode === "road") return "2025-07-14T20:00:00+05:30";
  return "2025-07-16T23:59:00+05:30";
};
