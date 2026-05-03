export type DroneCategory = "ALL" | "SPRAYING" | "MAPPING" | "MONITORING";

export interface DroneSpec {
  label: string;
  value: string;
}

export interface Drone {
  id: string;
  name: string;
  role: string;
  category: DroneCategory;
  coverage: number;
  coverageUnit: string;
  battery: string;
  sprayWidth?: string;
  image: string;
  description: string;
  specs: DroneSpec[];
  features: string[];
}

export const drones: Drone[] = [
  {
    id: "scout",
    name: "CANOPY Scout",
    role: "Field Mapping",
    category: "MAPPING",
    coverage: 12,
    coverageUnit: "ha/hr",
    battery: "45 min",
    image: "/images/newdrone1.png",
    description: "Compact, high-resolution mapping drone for detailed field analysis and crop health monitoring.",
    specs: [
      { label: "Max Coverage", value: "12 ha/hr" },
      { label: "Flight Time", value: "45 minutes" },
      { label: "Sensor Type", value: "RGB + Multispectral" },
      { label: "Autonomy Level", value: "Waypoint Navigation" },
      { label: "Wind Resistance", value: "Level 4" },
      { label: "Camera Resolution", value: "20 MP" },
    ],
    features: ["Real-time NDVI", "Automated Mapping", "Cloud Sync", "Weather Adaptive"],
  },
  {
    id: "spray",
    name: "CANOPY Spray",
    role: "Precision Spraying",
    category: "SPRAYING",
    coverage: 10,
    coverageUnit: "ha/hr",
    battery: "35 min",
    sprayWidth: "4.5m",
    image: "/images/newdrone2.png",
    description: "Hexacopter spraying system with intelligent flow control and variable rate application.",
    specs: [
      { label: "Max Coverage", value: "10 ha/hr" },
      { label: "Flight Time", value: "35 minutes" },
      { label: "Spray Tank", value: "16 liters" },
      { label: "Spray Width", value: "4.5 meters" },
      { label: "Wind Resistance", value: "Level 5" },
      { label: "Autonomy Level", value: "AI Path Planning" },
    ],
    features: ["Variable Rate", "Terrain Following", "Obstacle Avoidance", "Flow Control"],
  },
  {
    id: "atlas",
    name: "CANOPY Atlas",
    role: "Wide-Area Monitoring",
    category: "MONITORING",
    coverage: 20,
    coverageUnit: "ha/hr",
    battery: "55 min",
    image: "/images/newdrone3.png",
    description: "Long-endurance monitoring platform for large-scale agricultural operations and surveillance.",
    specs: [
      { label: "Max Coverage", value: "20 ha/hr" },
      { label: "Flight Time", value: "55 minutes" },
      { label: "Sensor Type", value: "Thermal + RGB" },
      { label: "Autonomy Level", value: "Full Autonomy" },
      { label: "Wind Resistance", value: "Level 6" },
      { label: "Range", value: "15 km" },
    ],
    features: ["Thermal Imaging", "Long Range", "Live Streaming", "Emergency Response"],
  },
  {
    id: "micro",
    name: "CANOPY Micro",
    role: "Small Plot + Greenhouse",
    category: "SPRAYING",
    coverage: 4,
    coverageUnit: "ha/hr",
    battery: "25 min",
    sprayWidth: "2m",
    image: "/images/newdrone4.png",
    description: "Compact precision unit designed for greenhouse operations and small plot farming.",
    specs: [
      { label: "Max Coverage", value: "4 ha/hr" },
      { label: "Flight Time", value: "25 minutes" },
      { label: "Spray Tank", value: "6 liters" },
      { label: "Spray Width", value: "2 meters" },
      { label: "Wind Resistance", value: "Level 3" },
      { label: "Autonomy Level", value: "Indoor Navigation" },
    ],
    features: ["Ultra-compact", "Indoor Capable", "Low Noise", "Precise Hover"],
  },
];

export const categoryLabels: Record<DroneCategory, string> = {
  ALL: "ALL",
  SPRAYING: "SPRAYING",
  MAPPING: "MAPPING",
  MONITORING: "MONITORING",
};
