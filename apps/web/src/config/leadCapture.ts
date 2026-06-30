export const LEAD_CAPTURE_WEB_APP_URL =
  "https://script.google.com/macros/s/AKfycbyRi9CWD_I_ulg2ccv_D2CvBmRo4UjYmS-ejXwJoj7hpeIRrSZfMQlvYhyqyq-f7trg/exec";

export const LEAD_CAPTURE_ADMINS = {
  Bunzaa: {
    adminKey: "Bunzaa",
    businessName: "Bunzaa",
  },
  KanchanMedicos: {
    adminKey: "KanchanMedicos",
    businessName: "Kanchan Medicos",
  },
  DevanshSports: {
    adminKey: "DevanshSports",
    businessName: "Devansh Sports",
  },
} as const;

export type LeadCaptureAdminKey = keyof typeof LEAD_CAPTURE_ADMINS;
