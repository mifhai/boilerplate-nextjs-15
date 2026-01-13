import is from "@sindresorhus/is";
import { getProperty } from "dot-prop";

// Module types section
export type Nil = null | undefined;
export type Nullable<T> = T | null;

// Module functions section
export const isValue = is;

export function isNill<TValue = unknown>(value: TValue) {
  return is.nullOrUndefined(value);
}

export function isNumeric<TValue = unknown>(value: TValue) {
  return is.numericString(value);
}

export function ensureString<TValue = unknown>(value: TValue, defaultValue: string) {
  return is.string(value) ? value : defaultValue;
}

export function ensureNumeric<TValue = unknown>(value: TValue, defaultValue: string) {
  if (is.numericString(value)) {
    return value;
  }

  return defaultValue;
}

export function ensureNumber<TValue = unknown>(value: TValue, defaultValue: number | null = null) {
  return is.number(value) ? value : defaultValue;
}

export function ensureBoolean<TValue = unknown>(value: TValue, defaultValue: boolean) {
  return is.boolean(value) ? value : defaultValue;
}

export function ensureArray<TValue = unknown, TEntry = unknown>(value: TValue, defaultValue: Array<TEntry>) {
  return is.array(value) ? value : defaultValue;
}

export function ensureDate<TValue = unknown, TDefault = Date | string>(value: TValue, defaultValue: TDefault) {
  return is.array(value) ? value : defaultValue;
}

export function objectData<TData>(obj: TData) {
  return {
    getString(path: string, defaultValue: string = "") {
      const value = getProperty(obj, path);

      return ensureString<typeof value>(value, defaultValue);
    },
    getNumeric(path: string, defaultValue: string = "0") {
      const value = getProperty(obj, path);

      return ensureNumeric<typeof value>(value, defaultValue);
    },
    getNumber(path: string, defaultValue: number | null = null) {
      const value = getProperty(obj, path);

      return ensureNumber<typeof value>(value, defaultValue);
    },
    getBoolean(path: string, defaultValue: boolean = false) {
      const value = getProperty(obj, path);

      return ensureBoolean<typeof value>(value, defaultValue);
    },
    getArray<TEntry = string>(path: string, defaultValue: Array<TEntry> = []) {
      const value = getProperty(obj, path);

      return ensureArray<typeof value>(value, defaultValue) as Array<TEntry>;
    },
    getValueOrNull<TValue = unknown>(path: string) {
      const value = getProperty(obj, path);

      return !isNill(value) ? (value as TValue) : null;
    },
  };
}

export function isJSON(value: string) {
  try {
    JSON.parse(value);
  } catch {
    return false;
  }

  return true;
}

export function parseJSON<T = unknown>(value: string, fallback?: T) {
  try {
    return JSON.parse(value) as T;
  } catch {
    return value || fallback;
  }
}
