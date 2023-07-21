import { useRouter } from "next/router";

// ----------------------------------------------------------------------

export default function useActiveLink(path, deep = true) {
  const { pathname, asPath } = useRouter();

  const checkPath = path && path?.startsWith("#");

  const currentPath = path === "/" ? false : path;

  const normalActive =
    (!checkPath && pathname === currentPath) ||
    (!checkPath && asPath === currentPath);

  const deepActive =
    (!checkPath && pathname.includes(currentPath)) ||
    (!checkPath && asPath.includes(currentPath));
  console.log("checkPath", checkPath, path);

  return {
    active: deep ? deepActive : normalActive,
    isExternalLink: path && path.includes("http"),
  };
}
