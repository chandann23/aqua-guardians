// /app/actions/addLake.ts

"use server"

import { FormState } from '~/app/types';

interface LakeData {
  name: string;
  ph: number;
  temperature: number;
  tds: number;
  turbidity: number;
  location: string;
}

export async function addLake(prevState: FormState, formData: FormData): Promise<FormState> {
  // Extract data from formData
  const lakeData: LakeData = {
    name: formData.get('name') as string,
    ph: parseFloat(formData.get('ph') as string),
    temperature: parseFloat(formData.get('temperature') as string),
    tds: parseFloat(formData.get('tds') as string),
    turbidity: parseFloat(formData.get('turbidity') as string),
    location: formData.get('location') as string,
  };

  // Validate data
  const errors: FormState['errors'] = {};

  if (!lakeData.name) {
    errors.name = "Name is required";
  }

  if (isNaN(lakeData.ph) || lakeData.ph < 0 || lakeData.ph > 14) {
    errors.ph = "pH must be a number between 0 and 14";
  }

  if (isNaN(lakeData.temperature)) {
    errors.temperature = "Temperature must be a valid number";
  }

  if (isNaN(lakeData.tds) || lakeData.tds < 0) {
    errors.tds = "TDS must be a non-negative number";
  }

  if (isNaN(lakeData.turbidity) || lakeData.turbidity < 0) {
    errors.turbidity = "Turbidity must be a non-negative number";
  }

  if (!lakeData.location) {
    errors.location = "Location is required";
  }

  // If there are any errors, return them
  if (Object.keys(errors).length > 0) {
    return { success: false, errors };
  }

  try {
    // Here you would typically send this data to your API
    // For example:
    // const response = await fetch('/api/lakes', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(lakeData),
    // });

    // if (!response.ok) {
    //   throw new Error('Failed to add lake');
    // }

    // For now, we'll just log the data
    console.log("Lake data to be submitted:", lakeData);

    // If everything is successful, return success
    return { success: true };
  } catch (error) {
    // If there's an error with the API call, return a general error
    return {
      success: false,
      errors: {
        name: "Failed to add lake. Please try again."
      }
    };
  }
}