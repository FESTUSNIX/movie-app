'use client'

import React, { useEffect } from 'react'
import IconClose from '@/public/x.svg'
import OutsideClickHandler from 'react-outside-click-handler'
import Image from 'next/image'
import { useLightboxContext } from './hooks/useLightboxContext'
import { ImageSlider } from '@/app/components/elements/ImageSlider'
import { usePathname, useSearchParams } from 'next/navigation'
import useKeypress from '@/app//hooks/useKeypress'
import imagePrefix from '@/app/constants/imagePrefix'
import ReactPortal from '@/app/components/elements/ReactPortal'
const bodyScroll = require('body-scroll-toggle')

export const Lightbox = () => {
	const pathname = usePathname()
	const searchParams = useSearchParams()
	const { showLightbox, setShowLightbox, images, setImages, index: currentImage, setIndex } = useLightboxContext()

	useEffect(() => {
		handleClose()
	}, [pathname, searchParams])

	useEffect(() => {
		showLightbox ? bodyScroll.disable() : bodyScroll.enable()
	}, [showLightbox])

	useEffect(() => {
		if (images?.length) setShowLightbox(true)
	}, [images])

	const handleClose = () => {
		setIndex(0)
		setImages([])
		setShowLightbox(false)
	}

	useKeypress('Escape', () => {
		if (!showLightbox) return
		handleClose()
	})
	useKeypress('ArrowLeft', () => {
		if (!showLightbox || currentImage === 0) return
		setIndex(prevIndex => prevIndex - 1)
	})
	useKeypress('ArrowRight', () => {
		if (!showLightbox || currentImage === images.length - 1) return
		setIndex(prevIndex => prevIndex + 1)
	})

	if (!showLightbox) return null
	return (
		<ReactPortal wrapperId='lightbox-container'>
			<div className='fixed inset-0 z-50 grid max-h-screen place-items-center backdrop-blur-md'>
				<OutsideClickHandler onOutsideClick={() => handleClose()} display='contents'>
					<div className='wrapper z-30 flex h-full w-full flex-col items-center justify-center p-4 md:max-w-2xl'>
						<button className='absolute top-0 right-0 cursor-pointer p-4' onClick={() => handleClose()}>
							<Image src={IconClose} alt='close' />
						</button>
						<div className='relative h-full w-full'>
							<Image
								src={imagePrefix + images[currentImage].file_path}
								alt='Movie poster'
								fill={true}
								sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 640px'
								className='mx-auto h-full w-auto max-w-max rounded-xl'
							/>
						</div>

						<ImageSlider className='mt-10 w-full'>
							{images.map((image, index) => (
								<Image
									key={image.file_path}
									src={imagePrefix + image.file_path}
									alt='Movie poster'
									width={80}
									height={80}
									onClick={() => setIndex(index)}
									className={`aspect-[2/3] max-w-max cursor-pointer rounded border-2 duration-150 ${
										index === currentImage ? 'scale-110 border-white' : 'border-transparent'
									}`}
								/>
							))}
						</ImageSlider>
					</div>
				</OutsideClickHandler>
			</div>
		</ReactPortal>
	)
}
