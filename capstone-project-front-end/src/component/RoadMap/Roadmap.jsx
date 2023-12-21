import React, { useEffect } from 'react';

function Roadmap({ startingLocation, stepsInBetween, destination }) {
  useEffect(() => {
    const initMap = () => {

      const centralParkCoordinates = {
        lat: 40.7851,
        lng: -73.9683,
      };

      const map = new window.google.maps.Map(document.getElementById('map'), {
        center: { lat: 0, lng: 0 }, // Center the map initially (adjust as needed)
        zoom: 2, // Adjust the initial zoom level
      });

      const addMarker = (location, label) => {
        new window.google.maps.Marker({
          position: location,
          map,
          label,
        });
      };

      startingLocation.forEach((location, index) => {
        addMarker(location.coordinates, `S${index + 1}`);
      });

      stepsInBetween.forEach((location, index) => {
        addMarker(location.coordinates, `M${index + 1}`);
      });

      destination.forEach((location, index) => {
        addMarker(location.coordinates, `D${index + 1}`);
      });
    };

    // Initialize the map when the component mounts
    initMap();
  }, [startingLocation, stepsInBetween, destination]);

  return <div id="map" className="map"></div>;
}

export default Roadmap;
