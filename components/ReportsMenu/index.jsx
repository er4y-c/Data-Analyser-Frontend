import React from 'react'
import { DropdownMenu, Button } from '@radix-ui/themes';
import { CaretDownIcon } from '@radix-ui/react-icons';
import Panel from './Panel';
import { panels } from '../../utils';

const ReportsMenu = () => (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <Button variant="soft" className="cursor-pointer">
          <p className="text-sm font-semibold text-gray-200">Reports</p>
          <CaretDownIcon className="text-gray-200 font-semibold" />
        </Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content className="px-2">
        {
          panels.map((panel, index) => (
              <Panel
                key={index}
                icon={panel.icon}
                title={panel.title}
                description={panel.description}
                href={panel.href}
              />
            ),
          )
        }
        {/* <DropdownMenu.Item shortcut="⌘ E">Edit</DropdownMenu.Item>
        <DropdownMenu.Item shortcut="⌘ D">Duplicate</DropdownMenu.Item>
        <DropdownMenu.Separator />
        <DropdownMenu.Item shortcut="⌘ N">Archive</DropdownMenu.Item>
        <DropdownMenu.Sub>
          <DropdownMenu.SubTrigger>More</DropdownMenu.SubTrigger>
          <DropdownMenu.SubContent>
            <DropdownMenu.Item>Move to project…</DropdownMenu.Item>
            <DropdownMenu.Item>Move to folder…</DropdownMenu.Item>
            <DropdownMenu.Separator />
            <DropdownMenu.Item>Advanced options…</DropdownMenu.Item>
          </DropdownMenu.SubContent>
        </DropdownMenu.Sub>

        <DropdownMenu.Separator />
        <DropdownMenu.Item>Share</DropdownMenu.Item>
        <DropdownMenu.Item>Add to favorites</DropdownMenu.Item>
        <DropdownMenu.Separator />
        <DropdownMenu.Item shortcut="⌘ ⌫" color="red">
          Delete
        </DropdownMenu.Item>
     */}
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  )

export default ReportsMenu;
