interface LocationState {
    latitude: number | null;
    longitude: number | null;
    error?: string;
}

interface NearbyParkings {
    name: string;
    latitude: number;
    longitude: number;
    booked: boolean;
    image: string;
    rate: number;
    available: number;
    total: number;
    id: string;
    addon: string[];
}
