import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import { FC, useState } from "react";
import { Marker } from "./Marker";

const containerStyle = {
  width: "100%",
  height: "200px",
  borderRadius: "15px",
  margin: "20px 0 20px",
};

interface LatLongProp {
  lat: number;
  lng: number;
}

interface GoogleMapProps {
  center?: LatLongProp;
  markers?: {
    id: number;
    bussinessName?: string;
    fantasyName?: string;
    lat?: number;
    lng?: number;
  }[];
  styles?: { width: string; height: string };
}

const defaultCenter = { lat: -33.1185, lng: -59.5408 };

const Map: FC<GoogleMapProps> = ({
  markers,
  styles,
  center = defaultCenter,
}) => {
  const mapContainerStyle = styles || containerStyle;
  const [map, setMap] = useState<google.maps.Map | null>(null);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyBhRHxxf25ibvleBZsIuDPDycfn9lCLxZ0",
    libraries: ["marker"],
  });

  if (!isLoaded) return null;

  return (
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      center={center}
      zoom={5}
      onLoad={(mapInstance) => setMap(mapInstance)}
    >
      {!!markers?.length &&
        markers.map((marker) => (
          <Marker key={`marker-${marker.id}`} entity={marker} map={map} />
        ))}
    </GoogleMap>
  );
};

export default Map;
