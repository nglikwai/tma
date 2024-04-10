"use client";
import { Button } from "@chakra-ui/button";
import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/menu";
import { useRouter, useSearchParams } from "next/navigation";
import { FC, useEffect, useState } from "react";

type MenuOption = {
    key: string;
    title: string;
};
type props = {
    menu: MenuOption[];
};
const DropMenu: FC<props> = ({ menu }) => {
    const [selected, setSelected] = useState(menu[0]);
    const router = useRouter();
    const query = useSearchParams();

    const handleSelect = (item: MenuOption) => {
        setSelected(item);
        router.push(`?filter=${item.key}`);
    };

    useEffect(() => {
        const filter = query.get("filter");
        const selectedMenu = menu.find(item => item.key === filter);
        if (selectedMenu) {
            setSelected(selectedMenu);
        }
    }, []);
    return (
        <Menu>
            <MenuButton
                as={Button}
                borderRadius={"2px"}
                rightIcon={<img src="/images/icon-arrow-down.svg" />}
                background={"#FFFFFF"}
                _hover={{ background: "#FFFFFF", border: "1px solid #40A9FF" }}
                _active={{ background: "#FFFFFF", border: "1px solid #40A9FF" }}
                className="flex items-center border border-[#D9D9D9] px-3 py-2 w-[192px] sm:w-auto h-10 justify-between text-start"
            >
                <span className="font-normal">{selected.title}</span>
            </MenuButton>
            <MenuList borderRadius={"2px"} boxShadow={"0px 9px 28px #0000000D"}>
                {menu.map(item => (
                    <MenuItem value={item.key} key={item.key} _hover={{ bg: "#F5F5F5" }} onClick={() => handleSelect(item)}>
                        {item.title}
                    </MenuItem>
                ))}
            </MenuList>
        </Menu>
    );
};

export default DropMenu;
