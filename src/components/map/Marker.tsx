import { useEffect, useRef, useState } from "react";

interface MarkerProps {
  entity: {
    id: number;
    bussinessName?: string;
    fantasyName?: string;
    lat?: number;
    lng?: number;
  };
  map: google.maps.Map | null;
}

export const Marker = ({ entity, map }: MarkerProps) => {
  const markerRef = useRef<google.maps.marker.AdvancedMarkerElement | null>(
    null,
  );
  const infoWindowRef = useRef<google.maps.InfoWindow | null>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!map || entity.lat === undefined || entity.lng === undefined) return;

    const markerContent = document.createElement("div");
    markerContent.innerHTML = `
      <div style="background: white; padding: 6px; border-radius: 4px; font-size: 14px;">
        <strong>${entity.fantasyName || "Sin nombre"}</strong>
      </div>
    `;

    const marker = new google.maps.marker.AdvancedMarkerElement({
      position: { lat: entity.lat, lng: entity.lng },
      map,
      title: entity.fantasyName ?? "",
      content: markerContent,
    });

    markerRef.current = marker;

    const infoWindow = new google.maps.InfoWindow({
      content: `
        <div>
          <h1 style="font-size:1.2rem">${entity.fantasyName || "Sin nombre"}</h1>
          <p>${entity.bussinessName || ""}</p>
        </div>
      `,
    });

    infoWindowRef.current = infoWindow;

    const handleClick = () => {
      if (open) {
        infoWindow.close();
        setOpen(false);
      } else {
        infoWindow.open({
          anchor: marker,
          map,
        });
        setOpen(true);
      }
    };

    marker.addListener("click", handleClick);

    return () => {
      marker.map = null;
      infoWindow.close();
    };
  }, [map, entity, open]);

  return null;
};
