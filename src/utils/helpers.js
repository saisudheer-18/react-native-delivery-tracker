export const getStatusMeta = (status) => {
  switch (status) {
    case "Accepted":
      return { color: "#2563EB", label: "Accepted" };
    case "Picked Up":
      return { color: "#F59E0B", label: "Picked Up" };
    case "In Transit":
      return { color: "#7C3AED", label: "In Transit" };
    case "Delivered":
      return { color: "#16A34A", label: "Delivered" };
    default:
      return { color: "#6B7280", label: "Open" };
  }
};

export const nextLabel = (status) => {
  switch (status) {
    case "Accepted":
      return "Mark as Picked Up";
    case "Picked Up":
      return "Start Transit";
    case "In Transit":
      return "Mark as Delivered";
    default:
      return "Next";
  }
};

export const formatTime = (time) => {
  return new Date(time).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
};
