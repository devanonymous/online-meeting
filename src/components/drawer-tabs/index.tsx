import React, { ChangeEvent } from 'react';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';

type Props = {
  activeTabIndex: number,
  onChange(event: React.ChangeEvent<{}>, newValue: number): void,
  indicatorColor?: 'primary' | 'secondary',
  textColor?: 'primary' | 'secondary' | 'inherit',
  centered?: boolean,
  tabLabels: string[],
};

export const DrawerTabs: React.FC<Props> = ({
  activeTabIndex,
  onChange,
  indicatorColor,
  textColor,
  centered,
  tabLabels,
}) => {
  return (
    <Tabs
      value={activeTabIndex}
      onChange={onChange}
      indicatorColor={indicatorColor || 'primary'}
      textColor={textColor || 'primary'}
      centered={centered || true}
    >
      {tabLabels.map((label: string) => (
        <Tab key={`${activeTabIndex}-${label}`} label={label} />
      ))}
    </Tabs>
  );
};
