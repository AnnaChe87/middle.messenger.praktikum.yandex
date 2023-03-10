import { Block } from "../core";

export function isBlockArray(value: unknown): value is Block[] {
  return Array.isArray(value) && value.every((i) => i instanceof Block);
}
