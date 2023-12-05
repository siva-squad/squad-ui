import { SPINNER_CLASS_NAME } from "./consts";
import type { SpinnerProps } from "./type";

export const Spinner = ({ size, theme, loading, background }: SpinnerProps) => {
  if (!loading) return null;
  return (
    <span
      role="status"
      aria-label="Loading"
      data-testid="spinner"
    >
      <svg
        aria-hidden="true"
        className={SPINNER_CLASS_NAME({ theme, size, background })}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="12"
          cy="12"
          r="10.9714"
          transform="rotate(90 12 12)"
          stroke="currentColor"
          strokeWidth="2.05714"
          fill="none"
        />
        <path
          d="M12 24C13.5759 24 15.1363 23.6896 16.5922 23.0866C18.0481 22.4835 19.371 21.5996 20.4853 20.4853C21.5996 19.371 22.4835 18.0481 23.0866 16.5922C23.6896 15.1363 24 13.5759 24 12L21.94 12C21.94 13.3053 21.6829 14.5979 21.1834 15.8039C20.6838 17.0098 19.9517 18.1056 19.0286 19.0286C18.1056 19.9517 17.0099 20.6838 15.8039 21.1834C14.5979 21.6829 13.3053 21.94 12 21.94V24Z"
          fill="currentFill"
        />
      </svg>
    </span>
  );
};
