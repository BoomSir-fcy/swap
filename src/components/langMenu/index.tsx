import { Button, Dropdown, MenuProps } from "antd";
import React, { useMemo } from "react";
// Position

export type Position =
  | "bottom"
  | "bottomLeft"
  | "bottomRight"
  | "top"
  | "topLeft"
  | "topRight";

export interface OptionProps {
  label: string;
  value: any;
  id?: string | number;
}
interface Props {
  currentLang: string;
  position?: Position;
  langs: OptionProps[];
  setLang: (lang: OptionProps) => void;
}

const LangSelector: React.FC<Props> = ({
  currentLang,
  langs,
  position = "topRight",
  setLang,
}) => {
  const items: MenuProps["items"] = useMemo(() => {
    const list = langs.map((lang) => {
      return {
        key: lang.id,
        label: lang.label,
      };
    });
    return list;
  }, [langs]);

  const onClick: MenuProps["onClick"] = ({ key }) => {
    const obj = langs.find((item) => String(item.id) === key);
    setLang(obj);
  };

  return (
    <Dropdown menu={{ items, onClick }} placement="topRight">
      <Button>{currentLang}</Button>
    </Dropdown>
  );
};

export default React.memo(
  LangSelector,
  (prev, next) => prev.currentLang === next.currentLang
);
