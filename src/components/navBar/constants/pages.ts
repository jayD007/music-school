import { Page } from '../../../types';
import { routes } from '../../../routes';
import HouseSidingTwoToneIcon from '@mui/icons-material/HouseSidingTwoTone';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import InfoTwoToneIcon from '@mui/icons-material/InfoTwoTone';
import PermContactCalendarTwoToneIcon from '@mui/icons-material/PermContactCalendarTwoTone';
import PhotoSizeSelectActualTwoToneIcon from '@mui/icons-material/PhotoSizeSelectActualTwoTone';

export const pages: Page[] = [
  { title: 'Home', route: routes.home, icon: HouseSidingTwoToneIcon },
  { title: 'Lessen', route: routes.lessons, icon: MenuBookIcon },
  { title: 'About', route: routes.about, icon: InfoTwoToneIcon },
  {
    title: 'Contact',
    route: routes.contact,
    icon: PermContactCalendarTwoToneIcon,
  },
  {
    title: 'Gallery',
    route: routes.gallery,
    icon: PhotoSizeSelectActualTwoToneIcon,
  },
];
