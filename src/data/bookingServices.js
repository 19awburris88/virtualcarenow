import { INTAKEQ_URL } from './constants';

// IntakeQ service IDs. Each one opens the booking page with that service preselected.
export const SERVICE_IDS = {
  healthCoaching: 'f55a3ff4-fa49-4e5f-9991-da36aedfb990',
  cough: '226b8e05-ae9c-4858-a9b7-af7c3ba62ceb',
  cold: '4d4275e1-38b5-41ff-845b-646c8567598f',
  soreThroat: '8c27d318-edff-4741-95dd-d79e1d137353',
  sinusitis: '0c3a7d13-bba9-4c83-a355-d2128678e683',
  allergies: '1f3d00f5-8d28-44bb-8c3c-e818ced9691d',
  conjunctivitis: '4089f6ea-2f4c-41a4-a02a-274031a63cc0',
  styes: 'c5d7f149-94a4-43ca-a0f3-f9f925ea82ad',
  uti: '3a5202cd-a088-4efd-8d51-8f81b9ca241c',
  bacterialVaginosis: 'c927ef9d-8e1a-4f70-bb54-839fabc3227e',
  yeastInfection: '056ed317-d8e4-4dee-9bad-18cc9ce21878',
  rash: '2743cd0b-d451-491c-be6a-997c0d9068fa',
  minorSkinInfections: '141c2ba3-d270-4d3a-9b5c-74298dd80ba5',
  dandruff: 'e88aecd4-5f4d-4043-955d-6d376f2f01c8',
  lice: '8faa4fa0-be57-4300-82fa-820c85d7eefd',
  hemorrhoids: '2c9458de-ded2-48c0-bcc5-167fec005479',
  toothache: '6e766358-83b7-462f-8526-9aea79652c0f',
  motionSickness: '0cdaad18-3cb7-48f9-b522-a8da0c70d8c9',
  medicationRefill: '931bac61-1bed-4150-bb8d-9797ed537925',
  vitaminD: '982fb0e7-bf63-401e-8480-da810e39e611',
  vitaminB12: '0254aa0a-2a92-42c5-a88d-7589a02099dc',
  electrolyteTesting: '17730b28-d81d-42e2-b0b9-2ffea02c476e',
  erectileDysfunction: '163e4f2b-6795-4727-ab02-f7d6613ff8e9',
  referral: '3ab1990b-295e-4c38-b66a-26aa02bb700c',
  generalConsultation: '2e6551ff-e066-4c16-98ad-0edff7cde741',
};

export function bookingUrl(serviceId) {
  return serviceId ? `${INTAKEQ_URL}?serviceId=${serviceId}` : INTAKEQ_URL;
}

// Options for the "What would you like to be seen for?" dropdown, in display order.
export const BOOKING_OPTIONS = [
  { label: 'Health Coaching', id: SERVICE_IDS.healthCoaching },
  { label: 'Cough', id: SERVICE_IDS.cough },
  { label: 'Cold & Flu Symptoms', id: SERVICE_IDS.cold },
  { label: 'Sore Throat', id: SERVICE_IDS.soreThroat },
  { label: 'Sinus Infections', id: SERVICE_IDS.sinusitis },
  { label: 'Allergies', id: SERVICE_IDS.allergies },
  { label: 'Pink Eye (Conjunctivitis)', id: SERVICE_IDS.conjunctivitis },
  { label: 'Styes', id: SERVICE_IDS.styes },
  { label: 'UTI Treatment', id: SERVICE_IDS.uti },
  { label: 'Bacterial Vaginosis', id: SERVICE_IDS.bacterialVaginosis },
  { label: 'Yeast Infections', id: SERVICE_IDS.yeastInfection },
  { label: 'Rashes', id: SERVICE_IDS.rash },
  { label: 'Minor Skin Infections', id: SERVICE_IDS.minorSkinInfections },
  { label: 'Dandruff', id: SERVICE_IDS.dandruff },
  { label: 'Lice & Scalp Infections', id: SERVICE_IDS.lice },
  { label: 'Hemorrhoids', id: SERVICE_IDS.hemorrhoids },
  { label: 'Toothache', id: SERVICE_IDS.toothache },
  { label: 'Motion Sickness', id: SERVICE_IDS.motionSickness },
  { label: 'Medication Refills — Non-Controlled', id: SERVICE_IDS.medicationRefill },
  { label: 'Vitamin D Deficiency', id: SERVICE_IDS.vitaminD },
  { label: 'Vitamin B-12 Deficiency', id: SERVICE_IDS.vitaminB12 },
  { label: 'Electrolyte Testing', id: SERVICE_IDS.electrolyteTesting },
  { label: 'Erectile Dysfunction', id: SERVICE_IDS.erectileDysfunction },
  { label: 'Referral to Additional Practitioners', id: SERVICE_IDS.referral },
  { label: 'General Medical Consultation / Not Listed', id: SERVICE_IDS.generalConsultation },
];
