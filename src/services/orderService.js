// Define the sequential order status flow
export const statusFlow = [
  "Open",
  "Accepted",
  "Picked Up",
  "In Transit",
  "Delivered",
];

// Mark order as accepted and assign driver
export const acceptOrder = (orders, orderId) => {
  return orders.map((order) => {
    if (String(order.id) === String(orderId)) {
      return {
        ...order,
        status: "Accepted",
        assignedDriverId: "driver1",
        timeline: [
          ...(order.timeline || []),
          {
            status: "Accepted",
            time: new Date().toISOString(),
          },
        ],
      };
    }
    return order;
  });
};

// Transition the order to the next sequential status
export const moveToNextStatus = (orders, orderId, location = null) => {
  return orders.map((order) => {
    if (String(order.id) !== String(orderId)) return order;

    const currentIndex = statusFlow.indexOf(order.status);

    // Handle invalid or unknown status
    if (currentIndex === -1) return order;

    const nextStatus = statusFlow[currentIndex + 1];

    // Return if already at the final status
    if (!nextStatus) return order;

    const timelineEntry = {
      status: nextStatus,
      time: new Date().toISOString(),
    };

    // Include location snapshot in the timeline if provided
    if (location && location.latitude && location.longitude) {
      timelineEntry.location = {
        lat: location.latitude,
        lng: location.longitude,
      };
    }

    return {
      ...order,
      status: nextStatus,
      timeline: [...(order.timeline || []), timelineEntry],
    };
  });
};

// Update the driver's current location
export const updateDriverLocation = (orders, orderId, location) => {
  return orders.map((order) => {
    if (String(order.id) !== String(orderId)) return order;

    return {
      ...order,
      driverLocation: location,
    };
  });
};

// Remove an order from the list
export const deleteOrder = (orders, orderId) => {
  return orders.filter((order) => String(order.id) !== String(orderId));
};

// Retrieve a specific order by ID
export const getOrderById = (orders, orderId) => {
  return orders.find((order) => String(order.id) === String(orderId));
};
