export type Breakpoints = string[];

export type MediaQueries = {
  xxs: string;
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  xxl: string;
  nav: string;
};
export type MediaQueriesSize = {
  margin: string;
  marginr: string;
  marginb: string;
  marginbmd: string;
  padding: string;
  paddingPage: string;
  paddingsm: string;
};

export type BreakpointMap = {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
  nav: number;
};

export type Spacing = number[];

export type Radii = {
  small: string;
  default: string;
  card: string;
  nftImage: string;
  tag: string;
  circle: string;
};

export type Shadows = {
  active: string;
  success: string;
  warning: string;
  focus: string;
  inset: string;
  box: string;
  nav: string;
};

export type Gradients = {
  bubblegum: string;
  inverseBubblegum: string;
  cardHeader: string;
  blue: string;
  violet: string;
  violetAlt: string;
  gold: string;
  linear: string;
  linear1: string;
};

export type Colors = {
  white: string;
  primary: string;
  primaryBright: string;
  primaryDark: string;
  secondary: string;
  tertiary: string;
  success: string;
  failure: string;
  warning: string;
  avatarBg: string;
  cardBorder: string;
  contrast: string;
  dropdown: string;
  dropdownDeep: string;
  invertedContrast: string;
  input: string;
  inputPanel: string;
  inpuShadows: string;
  inputSecondary: string;
  inputSelect: string;
  background: string;
  backgroundOpacity: string;
  backgroundPage: string;
  backgroundLight: string;
  backgroundSelect: string;
  backgroundDisabled: string;
  backgroundPrimary: string;
  backgroundMember: string;
  backgroundCard: string;
  backgroundModal: string;
  textValue: string;
  backgroundAlt: string;
  backgroundInput: string;
  text: string;
  whiteBlack: string;
  memberNum: string;
  textPrimary: string;
  textDisabled: string;
  textSubtle: string;
  disabled: string;
  greyText: string;
  // Gradients
  gradients: Gradients;
  CircleBg: string;
  // Additional colors
  binance: string;
  overlay: string;
  gold: string;
  silver: string;
  bronze: string;

  // NFT Token Colors
  triangleDinosaur: string;
  meat: string;
};

export type Filters = {
  brightness: string
  grayscale: string
  blur: string
}

export type ZIndices = {
  dropdown: number;
  modal: number;
};
