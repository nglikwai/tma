"use client";
import { Button } from "@chakra-ui/button";
import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/menu";
import { FC, useState } from "react";

type props = {
    menu: { key: string; title: string }[];
};
const DropMenu: FC<props> = ({ menu }) => {
    const [selected, setSelected] = useState(menu[0]);
    return (
        <Menu>
            <MenuButton
                as={Button}
                borderRadius={"2px"}
                rightIcon={<img src="/images/icon-arrow-down.svg" />}
                background={"#FFFFFF"}
                _hover={{ background: "#FFFFFF", border: "1px solid #40A9FF" }}
                _active={{ background: "#FFFFFF", border: "1px solid #40A9FF" }}
                className="flex items-center border border-[#D9D9D9] px-3 py-2 w-[192px] h-10 justify-between text-start"
            >
                <span className="font-normal">{selected.title}</span>
            </MenuButton>
            <MenuList borderRadius={"2px"} boxShadow={"0px 9px 28px #0000000D"}>
                {menu.map(item => (
                    <MenuItem key={item.key} _hover={{ bg: "#F5F5F5" }} onClick={() => setSelected(item)}>
                        {item.title}
                    </MenuItem>
                ))}
            </MenuList>
        </Menu>
    );
};

export default DropMenu;
