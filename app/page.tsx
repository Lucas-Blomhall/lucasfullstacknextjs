"use client"; // This is a client component 👈🏽

import Image from "next/image";
import React, { useState, useEffect } from "react";

export default function Home() {
  const [cars, setCars] = useState<Car[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/cars")
      .then((res) => res.json())
      .then((data) => {
        setCars(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (!cars) return <p>No profile data</p>;

  return (
    <div>
      {cars.map((car) => (
        <div key={car.id}>
          <h2>{car.car_name}</h2>
          <p>Price: {car.price}</p>
        </div>
      ))}
    </div>
  );
}
