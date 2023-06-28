import {useEffect, useState} from 'react';
import {Alert} from 'react-native';

import {Garden} from '../../interfaces/garden';
import {GardenInformation} from '../../interfaces/gardenInformation';
import {axiosClient} from '../../lib/axiosClient';
import {socket} from '../../lib/socketIOClient';

import {useGardensStore} from '../../store';
import {DeviceData, useDeviceDataStore} from '../../store/useDeviceDataStore';

export const useGardenScreen = (gardenId: number) => {
  const [garden, setGarden] = useState<Garden | undefined>({
    id: 0,
    name: '',
    plant_type: '',
    image:
      'https://res.cloudinary.com/dyuhuguiq/image/upload/v1672598755/plant1_iovkrr.png',
    min_temperature: 0,
    max_temperature: 0,
    sun_levels: 0,
    water_levels: 0,
    device_mac: '',
    created_at: new Date(),
    updated_at: new Date(),
    schedule: {
      id: 0,
      daysOfSchedule: [],
      created_at: '',
      updated_at: '',
    },
  });

  const [gardenInformations, setGardenInformations] =
    useState<GardenInformation[]>([]);

  const getGardenById = useGardensStore(
    gardensStore => gardensStore.getGardenById,
  );
  const deleteGardenById = useGardensStore(
    gardensStore => gardensStore.deleteGardenById,
  );
  const deviceData = useDeviceDataStore(
    deviceDataStore => deviceDataStore.data,
  );

  const setData = useDeviceDataStore(
    deviceDataStore => deviceDataStore.setData,
  );

  const getGardenInformation = async (gardenId: number) => {
    try {
      const res = await axiosClient.get(`garden-information/${gardenId}`);
      setGardenInformations(res.data.gardenInformations);

      if(res.data.gardenInformations.length > 0) {
        setData({
          temperatura: Number(res.data.gardenInformations[0].temperature.toFixed(0)),
          humedad: Number(res.data.gardenInformations[0].humidity.toFixed(0)),
          luz: Number(res.data.gardenInformations[0].sun_level.toFixed(0)),
        });
      }
    } catch (e) {
      Alert.alert(
        'Error al conectar con el servidor',
        'Error al intentar obtener la información de los jardines, por favor ingrese de nuevo!',
      );
      console.log('error on login request: ', e);
    }
  };

  useEffect(() => {
    if (garden?.device_mac !== '') {
      socket.on(`device-data-${garden?.device_mac}`, (data: DeviceData) => {
        setData({
          temperatura: Number(data.temperatura.toFixed(0)),
          humedad: Number(data.humedad.toFixed(0)),
          luz: Number(data.luz.toFixed(0)),
        });
      });

      getGardenInformation(gardenId);
    }
  }, [garden]);

  useEffect(() => {
    setGarden(getGardenById(gardenId));
  }, []);

  return {
    garden,
    deviceData,
    gardenInformations,
    getGardenInformation,

    deleteGardenById,
  };
};
