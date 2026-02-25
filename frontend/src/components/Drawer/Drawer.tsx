import { useState } from 'react';
import { Drawer, Button } from '@chakra-ui/react';
import { X, Menu } from 'lucide-react';
import { DrawerProps, DrawerActions, DrawerItem } from './drawer.types';
import { Link } from 'react-router-dom';

export default function DrawerComponent({
    trigger,
    menu,
}: DrawerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = (isOpen: boolean) => setIsOpen(!isOpen)

  const actions: DrawerActions = {
    isOpenDrawer: isOpen,
    toggleDrawer,
  };

  const renderTriggerNode = () => {
    if (trigger?.customElement) {
      return trigger.customElement(actions);
    }
    
    return (
      <Button
        variant="ghost"
        onClick={() => toggleDrawer(isOpen)}
        className={trigger?.classNames ?? "xl:hidden text-white"}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />} 
      </Button>
    );
  };


  return (
    <>
      {renderTriggerNode()}
      <Drawer.Root
        open={isOpen}
        onOpenChange={(details) => {
          setIsOpen(details.open);
        //   onOpenChange?.(details.open);
        }}
      >
        <Drawer.Positioner>
          <Drawer.Content>
            {menu.topSection &&
                <Drawer.Header className="flex items-center space-x-3 p-4">
                    {menu.topSection(actions)}
                   
                    <Button
                        variant="ghost"
                        onClick={() => toggleDrawer(isOpen)}
                    >
                        <X size={24} />
                    </Button>  
                </Drawer.Header>
            }
            <Drawer.Body className="p-3 space-y-2">
                {
                    menu.items.length > 0 && (
                        <ul className="flex flex-col space-y-2">
                            {menu.items.map((item: DrawerItem, index: number) => (
                                <li className="flex items-center justify-between gap-3 w-full" key={index}>
                                    <Link  
                                        to={item.href}
                                        onClick={() => toggleDrawer(isOpen)}
                                        className='w-full text-left px-4 py-3 rounded-lg hover:bg-gray-100 transition-colors flex items-center space-x-3 text-gray-700'    
                                    >
                                        {item.icon}
                                        <span>{item.label}</span>
                                    </Link>
                                    {index === 0 && !menu.topSection && 
                                        <Button
                                            onClick={() => toggleDrawer(isOpen)}
                                        >
                                            <X size={24} />
                                        </Button>
                                    }
                                </li>      
                            ))}
                        </ul>
                    )
                }

                {menu.bottomSection && menu.bottomSection(actions)}
            </Drawer.Body>
          </Drawer.Content>
        </Drawer.Positioner>
        <Drawer.Backdrop />
      </Drawer.Root>
    </>
  );
}