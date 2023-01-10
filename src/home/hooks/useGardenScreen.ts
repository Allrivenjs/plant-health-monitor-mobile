import {useEffect, useState} from 'react';

import {Garden} from '../../interfaces/garden';

import { useGardensStore } from '../../store';

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
    created_at: new Date(),
    updated_at: new Date(),
    schedule: {
      id: 0,
      daysOfSchedule: [],
      created_at: '',
      updated_at: '',
    }
  });

  const getGardenById = useGardensStore(gardensStore => gardensStore.getGardenById);

  useEffect(() => {
    setGarden(getGardenById(gardenId));
  }, []);

  return {
    garden,
  };
};
