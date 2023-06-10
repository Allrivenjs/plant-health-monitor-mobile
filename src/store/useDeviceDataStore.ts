import create from 'zustand';

import {axiosClient} from '../lib/axiosClient';

export interface DeviceData {
  temperatura: number;
  humedad: number;
  luz: number;
}

interface DeviceDataState {
  data: DeviceData;
  setData: (data: DeviceData) => void;
};

export const useDeviceDataStore = create<DeviceDataState>((set, get) => ({
  data: {
    temperatura: 0,
    humedad: 0,
    luz: 0,
  },
  setData: (data: DeviceData) => set(state => ({data})),
}));
