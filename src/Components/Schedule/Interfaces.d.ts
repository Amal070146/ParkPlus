interface VehicleDetails {
	name: string
	regno: string
	owner: string
}

interface Schedule {
	startTime: string
	endTime: string
	vehicle: VehicleDetails
	location: string
}