import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";
import setting from './assets/setting.png'

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 60 60" {...props}>
      <image xlinkHref={setting} />
      {/* <path d="M644.5568 585.6256m-281.4464 0a281.4464 281.4464 0 1 0 562.8928 0 281.4464 281.4464 0 1 0-562.8928 0Z" fill="#4eceb4" p-id="1631"></path>
      <path d="M512 675.2768c-90.0608 0-163.2768-73.2672-163.2768-163.2768S421.9392 348.7232 512 348.7232s163.2768 73.2672 163.2768 163.2768-73.216 163.2768-163.2768 163.2768z m0-265.1136c-56.1664 0-101.8368 45.6704-101.8368 101.8368s45.6704 101.8368 101.8368 101.8368 101.8368-45.6704 101.8368-101.8368-45.6704-101.8368-101.8368-101.8368z" fill="#067d73" p-id="1632"></path>
      <path d="M512 969.7792c-34.816 0-69.888-4.0448-104.192-12.032-14.336-3.328-24.32-16.384-23.7056-31.1296 0.0512-1.4336 0.1024-2.816 0.1024-4.2496 0-58.3168-47.4112-105.728-105.728-105.728-20.48 0-40.3456 5.888-57.4976 16.9984a30.70464 30.70464 0 0 1-38.8608-4.4544c-49.4592-51.4048-86.6304-114.3296-107.52-181.8624-4.352-14.1312 1.9968-29.3888 15.104-36.3008 18.2272-9.5744 33.1776-24.1152 43.2128-42.1376 28.3648-50.944 10.0352-115.456-40.9088-143.8208-1.4848-0.8192-2.9696-1.5872-4.4544-2.3552a30.72 30.72 0 0 1-15.8208-35.8912c20.3264-71.68 58.5216-138.0864 110.3872-192.0512 10.24-10.5984 26.5216-12.4928 38.8608-4.4544a105.1136 105.1136 0 0 0 57.4976 17.0496c58.3168 0 105.728-47.4112 105.728-105.728 0-1.4336-0.0512-2.816-0.1024-4.2496a30.78656 30.78656 0 0 1 23.7056-31.1296 458.71104 458.71104 0 0 1 211.2512 0.6656c14.1824 3.4304 24.0128 16.3328 23.552 30.9248v0.6656c-0.0512 1.024-0.1024 2.0992-0.1024 3.1232 0 58.3168 47.4112 105.728 105.728 105.728 19.9168 0 39.3728-5.5808 56.2176-16.2304a30.7712 30.7712 0 0 1 38.6048 4.7616c49.2032 51.5072 86.1184 114.4832 106.8032 182.016a30.7712 30.7712 0 0 1-14.592 35.9424c-17.408 9.5232-31.744 23.808-41.4208 41.1648-28.3648 50.944-10.0352 115.456 40.9088 143.8208 0.4608 0.256 0.9728 0.512 1.4336 0.768l1.2288 0.6656a30.72512 30.72512 0 0 1 15.36 35.5328c-20.1216 71.68-58.0096 138.1376-109.7216 192.256a30.76608 30.76608 0 0 1-38.6048 4.7616 105.4976 105.4976 0 0 0-56.2176-16.2304c-58.3168 0-105.728 47.4112-105.728 105.728 0 1.024 0.0512 2.0992 0.1024 3.1232v0.6656c0.512 14.592-9.3184 27.5456-23.552 30.9248a456.79104 456.79104 0 0 1-107.0592 12.7488z m-67.584-67.2768a395.64288 395.64288 0 0 0 137.8304-0.4608c10.0352-82.6368 80.64-146.8416 165.9392-146.8416 22.7328 0 45.0048 4.608 65.6896 13.4656a397.6448 397.6448 0 0 0 72.8576-127.6416c-66.6112-49.152-88.0128-141.6192-46.6432-215.808 11.0592-19.8144 25.9072-37.0688 43.6736-50.7904-16.0256-43.1616-39.8336-83.6608-69.8368-119.04a166.62016 166.62016 0 0 1-65.6896 13.4656c-85.2992 0-155.904-64.2048-165.9392-146.8416-45.568-8.192-92.0576-8.3968-137.8304-0.4608C434.5856 204.3392 363.8784 268.8 278.4256 268.8c-23.4496 0-46.4384-4.9152-67.6352-14.2848A397.73184 397.73184 0 0 0 137.728 381.44c30.7712 21.9136 53.0432 53.4016 63.5392 90.2656 12.2368 42.9568 6.9632 88.064-14.7456 127.0784-11.52 20.6336-27.0848 38.4-45.7216 52.3776a399.91296 399.91296 0 0 0 69.9904 118.272c21.1968-9.3696 44.1856-14.2848 67.6352-14.2848 85.4528 0.0512 156.16 64.512 165.9904 147.3536z" fill="#067d73" p-id="1633"></path> */}
    </Svg>
  );
};

export default Icon;
