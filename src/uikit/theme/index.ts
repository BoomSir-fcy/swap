import { CardTheme } from "../components/Card/types";
import { Colors, Breakpoints, MediaQueries, Spacing, Shadows, Radii, ZIndices, MediaQueriesSize, Filters } from "./types";
import { ModalTheme } from "../widgets/Modal/types";
import { ToggleTheme } from "../components/Toggle/types";
import { TooltipTheme } from "../components/Tooltip/types";

export interface PancakeTheme {
  siteWidth: number;
  isDark: boolean;
  filter: Filters;
  colors: Colors;
  card: CardTheme;
  breakpoints: Breakpoints;
  mediaQueries: MediaQueries;
  spacing: Spacing;
  shadows: Shadows;
  radii: Radii;
  modal: ModalTheme;
  zIndices: ZIndices;
  toggle: ToggleTheme;
  tooltip: TooltipTheme;
  mediaQueriesSize: MediaQueriesSize;
}

export { default as dark } from "./dark";
export { default as light } from "./light";

export { lightColors } from "./colors";
export { darkColors } from "./colors";
