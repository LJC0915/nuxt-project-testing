import {Permissions} from "../types/Permissions";

export function findLabel(code: string, permissions: Permissions): string {
  for (const permission of permissions) {
    if (code === permission.code) {
      return permission.label;
    } else {
      const label = findLabel(code, permission.children);
      if (label) {
        return label;
      }
    }
  }
  return null;
}
