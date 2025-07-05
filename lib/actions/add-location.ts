"use server";

import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

async function geocodeAddress(address: string) {
  const apiKey = process.env.GOOGLE_MAPS_API_KEY!;
  const response = await fetch(
    `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
      address
    )}&key=${apiKey}`
  );

  const data = await response.json();
  
  // Check for API errors
  if (data.status !== "OK") {
    throw new Error(`Geocoding failed: ${data.status} - ${data.error_message || 'Unknown error'}`);
  }
  
  // Check if results exist
  if (!data.results || data.results.length === 0) {
    throw new Error(`No results found for address: ${address}`);
  }
  
  // Check if geometry exists
  if (!data.results[0].geometry || !data.results[0].geometry.location) {
    throw new Error(`Invalid geometry data for address: ${address}`);
  }
  
  const { lat, lng } = data.results[0].geometry.location;
  return { lat, lng };
}

export async function addLocation(formData: FormData, tripId: string) {
  const session = await auth();
  if (!session) {
    throw new Error("Not authenticated");
  }

  const address = formData.get("address")?.toString();
  if (!address) {
    throw new Error("Missing address");
  }

  const { lat, lng } = await geocodeAddress(address);

  const count = await prisma.location.count({
    where: { tripId },
  });

  await prisma.location.create({
    data: {
      locationTitle: address,
      lat,
      lng,
      tripId,
      order: count,
    },
  });

  redirect(`/trips/${tripId}`);
}
