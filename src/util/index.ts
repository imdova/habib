export const isCurrentPage = (pathname: string, linkPath: string): boolean => {
  // Convert Next.js dynamic route segments (e.g., [id]) into a regex pattern
  const regexPattern = linkPath
    .replace(/\[.*?\]/g, "[^/]+") // Replace [dynamic] segments with a wildcard pattern
    .replace(/\//g, "\\/"); // Escape forward slashes

  // Create a regex to check if the pathname matches the expected pattern
  const regex = new RegExp(`^${regexPattern}(/|$)`);
  return regex.test(pathname);
};
