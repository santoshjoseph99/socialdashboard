import {SunMoonIcon} from 'lucide-react';

import {Button} from '@/components/ui/button';
import {useTheme} from '@/components/theme-provider';

export function ModeToggle() {
  const {setTheme, theme} = useTheme();

  const handleClick = () => {
    return theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  return (
    <Button variant="outline" size="icon" onClick={handleClick}>
      <SunMoonIcon />
    </Button>
  );
}
