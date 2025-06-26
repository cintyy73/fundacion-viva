import { InfoWindow, Marker as MarkerNpm } from "@react-google-maps/api";
import { useState } from "react";

interface MarkerProps {
  entity: {
    id: number;
    bussinessName?: string;
    fantasyName?: string;
    lat?: number;
    lng?: number;
  };
}

export const Marker = ({ entity }: MarkerProps) => {
  const [open, setOpen] = useState(false);

  const onToggleOpen = () => setOpen(!open);

  if (entity.lat === undefined || entity.lng === undefined) return null;

  return (
    <MarkerNpm
      position={{ lat: entity.lat, lng: entity.lng }}
      title={entity.fantasyName}
      onClick={onToggleOpen}
    >
      {open && (
        <InfoWindow onCloseClick={onToggleOpen}>
          <div id="content">
            <h1 style={{ fontSize: "1.2rem" }}>{entity.fantasyName}</h1>
            <p>{entity.bussinessName}</p>
          </div>
        </InfoWindow>
      )}
    </MarkerNpm>
  );
};
