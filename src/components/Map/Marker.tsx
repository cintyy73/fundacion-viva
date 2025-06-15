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

  return (
    entity && (
      <MarkerNpm
        position={{
          lat: entity.lat || 0,
          lng: entity.lng || 0,
        }}
        title={entity.fantasyName}
        onClick={onToggleOpen}
      >
        {open && (
          <InfoWindow onCloseClick={onToggleOpen}>
            <div id="content">
              <div id="siteNotice" />
              <h1
                id="firstHeading"
                className="firstHeading"
                style={{ fontSize: "1.2rem" }}
              >
                {entity.fantasyName}
              </h1>
              <div id="bodyContent">
                <p>{entity.bussinessName}</p>
              </div>
            </div>
          </InfoWindow>
        )}
      </MarkerNpm>
    )
  );
};