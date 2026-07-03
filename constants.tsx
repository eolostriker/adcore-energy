
import React from 'react';
import { AppView, NavItem, ServiceItem } from './types';

// Using the provided logo URL or a stylized representation
export const LOGO_URL = 'https://raw.githubusercontent.com/shadcn-ui/ui/main/apps/www/public/og.png'; // Fallback if local image not found

export const NAV_ITEMS: NavItem[] = [
  { label: 'Início', view: AppView.HOME, path: '/' },
  { label: 'Quem Somos', view: AppView.WHO_WE_ARE, path: '/quem-somos' },
  { label: 'Soluções', view: AppView.SERVICES, path: '/solucoes' },
  { label: 'Sobre', view: AppView.ABOUT, path: '/sobre' },
  { label: 'Contato', view: AppView.CONTACT, path: '/contato' },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'res-1',
    title: 'Energia Residencial',
    description: 'Reduza sua conta de luz em até 90% com sistemas fotovoltaicos sob medida para sua casa.',
    icon: 'Home'
  },
  {
    id: 'com-1',
    title: 'Soluções Comerciais',
    description: 'Aumente a competitividade da sua empresa com energia limpa e previsibilidade de custos.',
    icon: 'Building2'
  },
  {
    id: 'ind-1',
    title: 'Usinas Industriais',
    description: 'Projetos de alta complexidade para grandes indústrias que buscam sustentabilidade e economia.',
    icon: 'Factory'
  },
  {
    id: 'man-1',
    title: 'Manutenção e Monitoramento',
    description: 'Acompanhamento em tempo real e manutenção preventiva para garantir a máxima performance.',
    icon: 'Activity'
  }
];
