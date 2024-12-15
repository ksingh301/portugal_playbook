import { useEffect, useRef } from 'react';

declare global {
  interface Window {
    maplibregl: any;
  }
}

interface Location {
  id: number;
  name: string;
  coordinates: [number, number];
  description: string;
}

export default function LocationMap() {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<any>(null);

  const locations: Location[] = [
    { 
      id: 1, 
      name: "Sintra Palace",
      coordinates: [-9.3968, 38.7979],
      description: "Historic palace with stunning architecture"
    },
    { 
      id: 2, 
      name: "Algarve Coast",
      coordinates: [-8.2500, 37.1300],
      description: "Beautiful coastal venues with ocean views"
    },
    { 
      id: 3, 
      name: "Douro Valley",
      coordinates: [-7.7500, 41.1500],
      description: "Vineyard venues with breathtaking landscapes"
    }
  ];

  useEffect(() => {
    if (!mapContainer.current) return;

    map.current = new window.maplibregl.Map({
      container: mapContainer.current,
      style: {
        version: 8,
        sources: {
          'stamen-watercolor': {
            type: 'raster',
            tiles: [
              'https://tiles.stadiamaps.com/tiles/stamen_watercolor/{z}/{x}/{y}.jpg'
            ],
            tileSize: 256,
            attribution: 'Map tiles by Stamen Design, under CC BY 3.0. Data by OpenStreetMap, under CC BY SA.'
          }
        },
        layers: [
          {
            id: 'stamen-watercolor-layer',
            type: 'raster',
            source: 'stamen-watercolor',
            minzoom: 0,
            maxzoom: 18
          }
        ]
      },
      center: [-8.5, 39.5],
      zoom: 5.5,
      maxBounds: [
        [-11, 35],
        [-5, 43]
      ]
    });

    // Add navigation controls
    map.current.addControl(new window.maplibregl.NavigationControl());

    // Add markers for each location
    locations.forEach((location) => {
      const marker = document.createElement('div');
      marker.className = 'custom-marker';
      
      new window.maplibregl.Marker({
        element: marker,
        anchor: 'bottom'
      })
        .setLngLat(location.coordinates)
        .setPopup(
          new window.maplibregl.Popup({ offset: 25 })
            .setHTML(
              `<h3 class="font-bold text-gray-900">${location.name}</h3>
               <p class="text-gray-600">${location.description}</p>`
            )
        )
        .addTo(map.current);
    });

    return () => {
      map.current?.remove();
    };
  }, []);

  return (
    <section className="py-24 bg-gray-950">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Map Container */}
          <div 
            ref={mapContainer} 
            className="relative aspect-[4/5] bg-gray-900 rounded-xl overflow-hidden"
          />

          {/* Content */}
          <div>
            <h2 className="text-4xl font-bold text-white mb-6">
              Explore Special Wedding Spots
            </h2>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Embark on an unforgettable journey through Portugal's most enchanting wedding venues. 
              From historic palaces in Sintra to coastal villas in the Algarve, discover locations 
              that will make your celebration truly unique.
            </p>
            <div className="space-y-4">
              {locations.map((location) => (
                <div 
                  key={location.id}
                  className="p-4 bg-gray-800/50 rounded-lg border border-gray-700/50 
                  hover:bg-gray-800 transition-colors duration-300 cursor-pointer"
                >
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {location.name}
                  </h3>
                  <p className="text-gray-400">
                    {location.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 