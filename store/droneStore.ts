import { create } from "zustand";
import { Drone, DroneCategory } from "@/data/drones";

interface DroneStore {
  activeDrone: Drone | null;
  isPanelOpen: boolean;
  activeCategory: DroneCategory;
  setActiveDrone: (drone: Drone | null) => void;
  openPanel: (drone: Drone) => void;
  closePanel: () => void;
  setActiveCategory: (category: DroneCategory) => void;
}

export const useDroneStore = create<DroneStore>((set) => ({
  activeDrone: null,
  isPanelOpen: false,
  activeCategory: "ALL",
  setActiveDrone: (drone) => set({ activeDrone: drone }),
  openPanel: (drone) => set({ activeDrone: drone, isPanelOpen: true }),
  closePanel: () => set({ isPanelOpen: false }),
  setActiveCategory: (category) => set({ activeCategory: category }),
}));
