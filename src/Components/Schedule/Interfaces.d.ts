interface Vehicle {
    id: string;
    model: string;
    vehicleNumber: string;
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
