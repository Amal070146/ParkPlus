interface Vehicle {
    id: string;
    model: string;
    vehicle_number: string;
    owner: string;
};


interface ScheduleFormData {
    startTime: string;
    endTime: string;
    timeError: string;
    location: string;
    vehicle: string;
    vehicles: Vehicle[];
    addon: Addon[];
};
