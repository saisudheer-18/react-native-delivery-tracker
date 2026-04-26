# 🚀 TrackFlow – Delivery Tracking App

A React Native application that simulates a **real-time delivery tracking system** with two roles:

* 🚚 **Delivery Driver**
* 🏢 **Operations Dashboard**

Built using **Expo, React Navigation, and Context API**, with mock data and simulated live tracking.

---

## 🎯 Objective

To build a mini delivery system that demonstrates:

* Order lifecycle management
* Real-time tracking simulation
* Role-based application flow
* Clean UI with structured architecture

---

## 🏆 What We Achieved

This project successfully implements:

### ✅ Functional Achievements

* Complete **order lifecycle flow**
* Real-time **location tracking simulation**
* Proper **start/stop tracking logic**
* Accurate **timeline updates**
* Role-based navigation (Driver & Operations)

---
## 🛠️ Technical Implementation

This project was developed using the following technologies and concepts:

### 📱 React Native (Expo)
Used Expo to build and run the application across both Android and Web platforms efficiently without complex native setup.

### 🧭 React Navigation
Implemented stack-based navigation to manage screen transitions between Login, Driver Dashboard, Operations Dashboard, and Order Details.

### ⚛️ Functional Components
All components are built using modern functional components for better readability and maintainability.

### 🔄 useState
Used for managing local state such as:
- Form inputs (login)
- UI updates
- Temporary component states

### ⚙️ useEffect
Used for handling side effects such as:
- Initial data loading
- Triggering tracking logic
- Running interval-based location updates

### 📋 FlatList
Used to efficiently render lists such as:
- Orders list (Driver & Operations)
- Timeline updates

FlatList ensures better performance compared to traditional loops.

### 🧠 Technical Achievements

* Centralized state using **Context API**
* Separation of concerns:

  * UI → components/screens
  * Logic → services
  * Data → context
* Scalable and maintainable architecture
* Clean and reusable components

---

### 🎨 UI/UX Achievements

* Status-based color system
* Clean card-based layout
* Timeline visualization
* Live tracking indicator
* Responsive design (Web + Android)

---

## 🔐 Login Credentials

| Role       | Email                                     | Password |
| ---------- | ----------------------------------------- | -------- |
| Driver     | [driver@test.com](mailto:driver@test.com) | 123456   |
| Operations | [ops@test.com](mailto:ops@test.com)       | 123456   |

---

## 🔁 Application Flow

### 🚚 Driver Flow

1. Login as Driver
2. View open orders
3. Accept order
4. Update order status:

```text id="flow-main"
Accepted → Picked Up → In Transit → Delivered
```

5. After **Picked Up**:

   * 🚀 Tracking starts
   * 📍 Location updates every 5 seconds

6. After **Delivered**:

   * 🛑 Tracking stops
   * 📍 Last location is saved

---

### 🏢 Operations Flow

1. Login as Operations
2. View all orders
3. Monitor:

   * Status updates
   * Driver location
   * Timeline

👉 Operations acts as a **monitoring dashboard**

---

## 📍 Location Tracking Logic

Tracking is simulated using:

```js id="tracking-code"
const mockRoute = [
  { latitude: 17.385044, longitude: 78.486671 },
  { latitude: 17.395044, longitude: 78.496671 },
  { latitude: 17.405044, longitude: 78.506671 },
  { latitude: 17.415044, longitude: 78.516671 }
];
```

### Behavior:

* Starts after **Picked Up**
* Updates every **5 seconds**
* Stops after **Delivered**
* Final location remains visible

---

## 🧠 Architecture Overview

### State Management

Managed using:

```text id="arch-context"
OrderContext.js
```

Handles:

* Orders state
* Status updates
* Location updates
* Tracking control

---

### Business Logic

Located in:

```text id="arch-services"
services/
```

* `orderService.js` → order updates
* `trackingService.js` → tracking logic

---

## 📂 Folder Structure

```id="folder-structure"
src/
│
├── components/        # Reusable UI components
├── context/           # Global state management
├── navigation/        # Navigation setup
├── screens/           # App screens
├── services/          # Business logic
├── styles/            # Styling
└── utils/             # Mock data
```

---

## ⚙️ Setup Instructions

### 1. Install dependencies

```bash id="install"
npm install
```

---

### 2. Run Web

```bash id="run-web"
npm run web
```

---

### 3. Run Android

```bash id="run-android"
npm run android
```

> Requires emulator or Expo Go

---

## 📸 Screenshots

### 🌐 Web

### 🔐 Login

<img width="959" height="506" alt="image" src="https://github.com/user-attachments/assets/2dd6d20f-004d-406e-bec3-14d69949ffd0" />

### 🏢 Operations Dashboard
<img width="959" height="505" alt="image" src="https://github.com/user-attachments/assets/2c79e8dc-f4c7-447a-961b-4287a28e1a41" />

<img width="951" height="348" alt="image" src="https://github.com/user-attachments/assets/4a5ef90a-476b-4d97-86e9-0014ba8af620" />

<img width="959" height="410" alt="image" src="https://github.com/user-attachments/assets/3afaeb9a-842e-4957-a5e2-e691ff8278e3" />

<img width="957" height="442" alt="image" src="https://github.com/user-attachments/assets/9681a48b-0d5d-4c5f-8a4d-d41659795f99" />

<img width="959" height="461" alt="image" src="https://github.com/user-attachments/assets/adc880b1-12f3-441c-92e3-fbc038e0076f" />

<img width="959" height="470" alt="image" src="https://github.com/user-attachments/assets/3a3d9578-1b11-40c5-ad88-44a1e42954dd" />

<img width="959" height="457" alt="image" src="https://github.com/user-attachments/assets/583adb8f-844f-45b7-b7d3-6fcb31545540" />

---

### 📱 Android

<img width="720" height="1600" alt="image" src="https://github.com/user-attachments/assets/ae02fefb-eedb-4e7a-b2b2-be49cd765fd5" />

<img width="720" height="1600" alt="image" src="https://github.com/user-attachments/assets/9016e234-670b-4345-bcdf-3059bbfe349a" />

<img width="720" height="1600" alt="image" src="https://github.com/user-attachments/assets/74347b15-f8e4-4ca4-9910-3414c0d06a24" />

<img width="720" height="1600" alt="image" src="https://github.com/user-attachments/assets/70f93811-4ca6-4bad-ba93-4df9971677e7" />

<img width="720" height="1600" alt="image" src="https://github.com/user-attachments/assets/0403e1f2-52f1-43dc-9694-f60745d4f41f" />

<img width="720" height="1600" alt="image" src="https://github.com/user-attachments/assets/3e08d17d-7389-4127-b422-37d6691d4565" />

<img width="720" height="1600" alt="image" src="https://github.com/user-attachments/assets/fbc88969-2e09-4f14-a8b1-f5924b2b0b1f" />

---

## 🎥 Demo Video

https://drive.google.com/file/d/17hCIMyG3gIHDhN3-1rQN6ANT5xkzasvY/view?usp=sharing

```

---

## ✨ Key Features

* Role-based login system
* Order lifecycle management
* Real-time tracking simulation
* Timeline tracking
* Cross-platform support
* Clean UI and navigation

---

## ⚠️ Notes

* Uses mock data only
* Tracking is simulated (not real GPS)
* Designed for technical evaluation

---

## 👨‍💻 Author

Sai Sudheer

---

## 🔗 Repository

```text id="repo-link"
https://github.com/saisudheer-18/react-native-delivery-tracker
```

---

## 🏁 Conclusion

This project demonstrates:

* Strong understanding of React Native
* Real-time simulation logic
* Scalable architecture
* Clean UI/UX practices

---

✨ Built as a mini real-world delivery tracking system.
