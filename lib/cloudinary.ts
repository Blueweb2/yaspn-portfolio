export const optimizeCloudinary = (
  url: string
) => {
  if (!url) return "";

  // KEEP SVG AS ORIGINAL

  if (url.endsWith(".svg")) {
    return url;
  }

  return url.replace(
    "/upload/",
    "/upload/f_auto,q_auto/"
  );
};