export interface EmailJsEnv {
  publicKey: string;
  serviceId: string;
  templateId: string;
}

export const readEmailJsEnv = (): EmailJsEnv | null => {
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

  if (
    typeof publicKey !== 'string' ||
    typeof serviceId !== 'string' ||
    typeof templateId !== 'string' ||
    publicKey.length === 0 ||
    serviceId.length === 0 ||
    templateId.length === 0
  ) {
    return null;
  }

  return {
    publicKey,
    serviceId,
    templateId,
  };
};
