export interface Garden {
    id:              number;
    name:            string;
    image:           string;
    plant_type:      string;
    min_temperature: number;
    max_temperature: number;
    water_levels:    number;
    sun_levels:      number;
    created_at:      Date;
    updated_at:      Date;
};
