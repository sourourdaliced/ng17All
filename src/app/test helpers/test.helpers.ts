import { DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";

export const getElementByAttributeName = (
  name: string,
  template: DebugElement
): DebugElement => {
  return template.query(By.css(`[data-testid="${name}"]`));
};
