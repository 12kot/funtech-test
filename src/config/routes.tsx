import { ReactElement } from 'react'
import { Navigate } from 'react-router-dom'

import { CreatorsPageLazy, DiscoverPageLazy, SellPageLazy, StatsPageLazy } from 'app'

export enum ERootRoutes {
  DISCOVER = '/',
  CREATORS = '/creators',
  SELL = '/sell',
  STATS = '/stats',
  PRIVACY_POLICY = '/privacy-policy',
  TERMS_CONDITIONS = '/terms-conditions',
  ABOUT_US = '/about-us',
  CONTACT = '/contact',
  ALL = '*',
}

export enum EAllAppRoutes {
  HOME = ERootRoutes.DISCOVER,
  CREATORS = ERootRoutes.CREATORS,
  SELL = ERootRoutes.SELL,
  STATS = ERootRoutes.STATS,
  PRIVACY_POLICY = ERootRoutes.PRIVACY_POLICY,
  TERMS_CONDITIONS = ERootRoutes.TERMS_CONDITIONS,
  ABOUT_US = ERootRoutes.ABOUT_US,
  CONTACT = ERootRoutes.CONTACT,
}

export interface INestedRoute {
  element: ReactElement
}

export interface IRoute {
  element: ReactElement
  nestedRoutes?: Record<string, INestedRoute>
}

export type TRoutes = Record<string, IRoute>

export const routes: TRoutes = {
  [ERootRoutes.DISCOVER]: {
    element: <DiscoverPageLazy />,
  },
  [ERootRoutes.CREATORS]: {
    element: <CreatorsPageLazy />,
  },
  [ERootRoutes.SELL]: {
    element: <SellPageLazy />,
  },
  [ERootRoutes.STATS]: {
    element: <StatsPageLazy />,
  },
  [ERootRoutes.PRIVACY_POLICY]: {
    element: <StatsPageLazy />,
  },
  [ERootRoutes.TERMS_CONDITIONS]: {
    element: <StatsPageLazy />,
  },
  [ERootRoutes.ABOUT_US]: {
    element: <StatsPageLazy />,
  },
  [ERootRoutes.CONTACT]: {
    element: <StatsPageLazy />,
  },
  [ERootRoutes.ALL]: {
    element: <Navigate to={ERootRoutes.DISCOVER} replace />,
  },
} as const
