import { BaseComponent } from '../models/layout';

export interface ComponentStyle {
  position?: 'absolute' | 'relative';
  top?: string;
  left?: string;
  width?: string;
  height?: string;
  zIndex?: number;
  gridRow?: string;
  gridColumn?: string;
}

export function resolveComponentStyle(
  component: BaseComponent
): ComponentStyle {
  if (component.grid) {
    return {
      position: 'relative',
      gridRow: `${component.grid.row} / span ${component.grid.rowSpan ?? 1}`,
      gridColumn: `${component.grid.column} / span ${
        component.grid.colSpan ?? 1
      }`,
    };
  }

  if (component.style) {
    return {
      position: 'absolute',
      top: component.style.top,
      left: component.style.left,
      width: component.style.width,
      height: component.style.height,
      zIndex: component.style.zIndex,
    };
  }

  return {};
}
