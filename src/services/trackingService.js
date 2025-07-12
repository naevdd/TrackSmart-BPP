const delhiveryAdapter = require("../adapters/delhiveryAdapter");
const indiaPostAdapter = require("../adapters/indiaPostAdapter");
const etaService = require("./etaService");

exports.handleTrack = async (payload) => {
  console.log("Received payload:", JSON.stringify(payload, null, 2));
  const { order_id, provider_id } = payload.message;
  let trackingInfo;

  switch (provider_id) {
    case "delhivery":
      trackingInfo = await delhiveryAdapter.track(order_id);
      break;
    case "india_post":
      trackingInfo = await indiaPostAdapter.track(order_id);
      break;
    default:
      throw new Error("Unknown provider");
  }

  const eta = await etaService.calculateETA(trackingInfo);
  return {
    context: payload.context,
    message: {
      tracking: {
        order_id,
        status: trackingInfo.status,
        location: trackingInfo.location,
        date_of_updation: trackingInfo.updated_at,
        estimated_delivery: eta,
      },
    },
  };
};