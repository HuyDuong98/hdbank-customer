export const setCookie = (name: string, value: unknown, days: number): void => {
  let expires = "";
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
};

export const getCookie = (
  name: string,
  cookieString?: string
): string | null => {
  const nameEQ = name + "=";
  const ca = (cookieString || document?.cookie || "").split(";");
  for (const c of ca) {
    let cookie = c;
    while (cookie.charAt(0) === " ") cookie = cookie.substring(1, c.length);
    if (cookie.indexOf(nameEQ) === 0)
      return cookie.substring(nameEQ.length, cookie.length);
  }

  return null;
};

export const eraseCookie = (name: string): void => {
  document.cookie = name + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
};
