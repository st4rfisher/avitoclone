
export interface MenuItem {
    icon?: any,
    label?: string,
    to: string
  }

export interface DrawerProps {
    classNames?: string,
    trigger?: DrawerTrigger,
    menu: DrawerMenu,
}

export interface DrawerTrigger {
    classNames?: string,
    customElement?: ((actions: DrawerActions) => React.ReactNode),
}

export interface DrawerMenu {
    classNames?: string,
    topSection?: ((actions: DrawerActions) => React.ReactNode),  
    items: DrawerItem[] | MenuItem[],
    bottomSection?: ((actions: DrawerActions) => React.ReactNode),
}

export interface DrawerItem {
    id?: string | number;
    icon?: React.ReactNode;
    label?: React.ReactNode;
    value?: string;
    disabled?: boolean;
    classNames?: string,
    onSelect?: (item: DrawerItem) => void;
    // Дополнительные поля допускаются для расширения функционала
    [key: string]: any;
}
  
export interface DrawerActions {
    isOpenDrawer?: boolean,
    toggleDrawer?: (isOpen: boolean) => void,
  }
