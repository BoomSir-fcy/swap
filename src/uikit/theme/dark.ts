import { DefaultTheme } from "styled-components";
import { dark as darkCard } from "../components/Card/theme";
import base from "./base";
import { darkColors } from "./colors";
import { darkFilter } from "./filter";
import { dark as darkTooltip } from "../components/Tooltip/theme";
import { dark as darkToggle } from "../components/Toggle/theme";
import { dark as darkModal } from "../widgets/Modal/theme";

const darkTheme: DefaultTheme = {
  ...base,
  isDark: true,
  filter: darkFilter,
  colors: darkColors,
  tooltip: darkTooltip,
  toggle: darkToggle,
  card: darkCard,
  main: "",
  modal: darkModal
};

export default darkTheme;
