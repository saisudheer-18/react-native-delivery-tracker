import { createContext, useState } from "react";
import {
    acceptOrder as acceptOrderService,
    moveToNextStatus as moveToNextStatusService,
    updateDriverLocation as updateDriverLocationService,
} from "../services/orderService";
import { startTracking, stopTracking } from "../services/trackingService";
import { mockOrders } from "../utils/mockOrders";

export const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const [orders, setOrders] = useState(mockOrders);

  // Accept an order and assign driver
  const acceptOrder = (orderId) => {
    setOrders((prev) => acceptOrderService(prev, orderId));
  };

  // Update the current location of the driver
  const updateDriverLocation = (orderId, location) => {
    setOrders((prev) => updateDriverLocationService(prev, orderId, location));
  };

  // Move order to the next status in the flow
  const moveToNextStatus = (orderId) => {
    setOrders((prev) => {
      const order = prev.find((o) => String(o.id) === String(orderId));
      if (!order) return prev;

      // First, update the order status
      const updatedOrders = moveToNextStatusService(prev, orderId);

      // Retrieve the updated order to evaluate its new status
      const updatedOrder = updatedOrders.find(
        (o) => String(o.id) === String(orderId),
      );

      // Start tracking when order transitions to Picked Up
      if (updatedOrder.status === "Picked Up") {
        startTracking(orderId, updateDriverLocation);
      }

      // Stop tracking when order transitions to Delivered
      if (updatedOrder.status === "Delivered") {
        stopTracking(orderId, updateDriverLocation);
      }

      return updatedOrders;
    });
  };

  // Delete an order and clean up any active tracking
  const deleteOrder = (orderId) => {
    stopTracking(orderId, updateDriverLocation);
    setOrders((prev) => prev.filter((o) => String(o.id) !== String(orderId)));
  };

  return (
    <OrderContext.Provider
      value={{
        orders,
        acceptOrder,
        moveToNextStatus,
        updateDriverLocation,
        deleteOrder,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};
