import { DefaultTheme } from "styled-components";
import { light as lightCard } from "../components/Card/theme";
import base from "./base";
import { lightColors } from "./colors";
import { lightFilter } from "./filter";
import { light as lightModal } from "../widgets/Modal/theme";
import { light as lightToggle } from "../components/Toggle/theme";
import { light as lightTooltip } from "../components/Tooltip/theme";

const lightTheme: DefaultTheme = {
  ...base,
  isDark: false,
  filter: lightFilter,
  colors: lightColors,
  modal: lightModal,
  card: lightCard,
  main: "",
  toggle: lightToggle,
  tooltip: lightTooltip,

};

export default lightTheme;
