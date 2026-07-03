
export enum AppView {
  HOME = 'home',
  ABOUT = 'about',
  SERVICES = 'services',
  CONTACT = 'contact',
  WHO_WE_ARE = 'who_we_are'
}

export interface NavItem {
  label: string;
  view: AppView;
  path: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}
