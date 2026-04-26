let intervals = {};
let lastLocations = {};

export const startTracking = (orderId, updateDriverLocation) => {
  // Clear existing interval if tracking is already active
  if (intervals[orderId]) {
    clearInterval(intervals[orderId]);
    delete intervals[orderId];
  }

  const mockRoute = [
    { latitude: 17.385044, longitude: 78.486671 },
    { latitude: 17.395044, longitude: 78.496671 },
    { latitude: 17.405044, longitude: 78.506671 },
    { latitude: 17.415044, longitude: 78.516671 },
  ];

  let index = 0;

  // Trigger initial location update immediately
  const firstLocation = {
    ...mockRoute[0],
    updatedAt: new Date().toISOString(),
  };

  lastLocations[orderId] = firstLocation;
  updateDriverLocation(orderId, firstLocation);

  index++;

  intervals[orderId] = setInterval(() => {
    const location = {
      ...mockRoute[index % mockRoute.length],
      updatedAt: new Date().toISOString(),
    };

    lastLocations[orderId] = location;
    updateDriverLocation(orderId, location);

    index++;
  }, 5000);
};

export const stopTracking = (orderId, updateDriverLocation) => {
  // Ensure the last known location is saved before stopping
  if (lastLocations[orderId] && updateDriverLocation) {
    updateDriverLocation(orderId, lastLocations[orderId]);
  }

  if (intervals[orderId]) {
    clearInterval(intervals[orderId]);
    delete intervals[orderId];
  }

  delete lastLocations[orderId];
};
