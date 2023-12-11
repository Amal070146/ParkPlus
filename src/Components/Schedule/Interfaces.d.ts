interface VehicleDetails {
	id: string;
	model: string;
	vehicleNumber: string;
	owner: string;
}

interface Schedule {
	startTime: string
	endTime: string
	vehicle: string;
	location: string
}