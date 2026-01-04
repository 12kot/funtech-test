'use client'

import { forwardRef, useImperativeHandle, useRef } from 'react'
import type { SwiperProps } from 'swiper/react'
import { Swiper, SwiperSlide } from 'swiper/react'
import type { Swiper as SwiperType } from 'swiper'
import { FreeMode, Mousewheel } from 'swiper/modules'

import styles from './styles.module.scss'
import { cn, vibrate } from 'shared/utils'

interface GenericSwiperProps<T> extends SwiperProps {
  id: string
  items: T[]
  disableVibrate?: boolean
  lastSlide?: React.ReactNode
  renderItem: (item: T, index: number) => React.ReactNode
  className?: string
  slideClassName?: string
  disableFreeMode?: boolean
  disableMousewheel?: boolean
  onIndexChange?: (activeIndex: number) => void
}

function GenericSwiperInner<T>(
  {
    id,
    items,
    lastSlide,
    renderItem,
    className,
    disableVibrate,
    slideClassName,
    onIndexChange,
    slidesPerView = 'auto',
    spaceBetween = 8,
    speed = 600,
    disableFreeMode,
    disableMousewheel,
    ...rest
  }: GenericSwiperProps<T>,
  ref: React.Ref<SwiperType | null>
) {
  const internalRef = useRef<SwiperType | null>(null)

  useImperativeHandle(ref, () => {
    if (internalRef.current) {
      return internalRef.current
    }

    throw new Error('Swiper instance is not available')
  })

  const freeModeOptions = {
    sticky: true,
    enabled: true,
    momentum: true,
    momentumRatio: 0.5,
  }

  const modules = []
  if (!disableMousewheel) modules.push(Mousewheel)
  if (!disableFreeMode) modules.push(FreeMode)

  return (
    <Swiper
      id={id}
      speed={speed}
      freeMode={disableFreeMode ? { enabled: false } : freeModeOptions}
      modules={modules}
      spaceBetween={spaceBetween}
      slidesPerView={slidesPerView}
      className={cn(styles.swiper, className)}
      mousewheel={disableMousewheel ? false : { releaseOnEdges: true }}
      onSwiper={(swiper) => {
        internalRef.current = swiper
      }}
      onSlideChange={(swiper) => {
        if (!disableVibrate) vibrate(20)
        onIndexChange?.(swiper.activeIndex)
      }}
      {...rest}
    >
      {items.map((item, index) => (
        <SwiperSlide className={cn(styles.slide, slideClassName)} key={index}>
          {renderItem(item, index)}
        </SwiperSlide>
      ))}
      {lastSlide && <SwiperSlide className={cn(styles.slide, slideClassName)}>{lastSlide}</SwiperSlide>}
    </Swiper>
  )
}

export const GenericSwiper = forwardRef(GenericSwiperInner) as <T>(
  props: GenericSwiperProps<T> & { ref?: React.Ref<SwiperType | null> }
) => ReturnType<typeof GenericSwiperInner>
