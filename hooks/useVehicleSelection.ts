"use client";

import { useEffect, useState } from "react";

export interface VehicleSelection {
  make: string;
  model: string;
  year: string;
}

const STORAGE_KEY = "selectedVehicle";
const EVENT_KEY = "vehicleSelectionUpdated";

export function useVehicleSelection() {
  const [vehicle, setVehicle] = useState<VehicleSelection>({
    make: "",
    model: "",
    year: "",
  });

  useEffect(() => {
    if (typeof window === "undefined") return;
    const stored = window.sessionStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        setVehicle(parsed);
      } catch {
        // ignore parse errors
      }
    }
    const handleExternalUpdate = (event: Event) => {
      const customEvent = event as CustomEvent<VehicleSelection>;
      if (customEvent.detail) {
        setVehicle(customEvent.detail);
      }
    };

    window.addEventListener(EVENT_KEY, handleExternalUpdate as EventListener);
    return () => {
      window.removeEventListener(EVENT_KEY, handleExternalUpdate as EventListener);
    };
  }, []);

  const broadcastUpdate = (nextVehicle: VehicleSelection) => {
    if (typeof window === "undefined") return;
    window.dispatchEvent(
      new CustomEvent(EVENT_KEY, {
        detail: nextVehicle,
      })
    );
  };

  const updateVehicle = (nextVehicle: VehicleSelection) => {
    setVehicle(nextVehicle);
    if (typeof window !== "undefined") {
      window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(nextVehicle));
    }
    broadcastUpdate(nextVehicle);
  };

  const clearVehicle = () => {
    const cleared = { make: "", model: "", year: "" };
    setVehicle(cleared);
    if (typeof window !== "undefined") {
      window.sessionStorage.removeItem(STORAGE_KEY);
    }
    broadcastUpdate(cleared);
  };

  return { vehicle, updateVehicle, clearVehicle };
}

