import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";
import pxToRem from "../utils/pxToRem";

export const GlobalStyles = createGlobalStyle`
	:root {
		--colour-white: ${theme.colours.white};
		--colour-black: ${theme.colours.black};
		--colour-off-white: ${theme.colours.offWhite};
		--colour-matcha: ${theme.colours.matcha};
		--colour-grey: ${theme.colours.grey};
		--colour-orange: ${theme.colours.orange};
		--font-times: ${theme.fonts.times};
		--font-suisse: ${theme.fonts.suisse};
		--transition-speed-default: ${theme.transitionSpeed.default};
		--transition-speed-fast: ${theme.transitionSpeed.fast};
		--transition-speed-extra-fast: ${theme.transitionSpeed.extraFast};
		--transition-speed-slow: ${theme.transitionSpeed.slow};
		--transition-speed-extra-slow: ${theme.transitionSpeed.extraSlow};
		--transition-ease: cubic-bezier(0.65, 0, 0.35, 1);
	}

	* {
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		box-sizing: border-box;
		margin: 0;
		padding: 0;
		border: none;
		list-style: none;
		background: none;
		outline: none;
		border-radius: 0;
		box-shadow: none;
	}

	-webkit-text-size-adjust: 100%;

	::selection {
		background-color: var(--colour-matcha);
		color: var(--colour-black);
	}

	html {
		background: var(--colour-off-white);
		font-size: 16px;

		&.no-scroll {
			overflow-y: hidden;
			
			body {
				overflow-y: hidden;
			}
		}
	}

	.uppercase {
		text-transform: uppercase;
	}

	body {
		position: relative;
		
		&.modal-open {
			.header {
				background: transparent !important;
			}
		}
	}

	input,
	textarea,
	select,
	button,
	label,
	body {
		font-family: var(--font-times);
		color: var(--colour-black);
		line-height: normal;
	}

	strong,
	b {
		font-weight: 900;
	}

	em {
		font-style: italic;
	}

	a {
		text-decoration: none;
		color: var(--colour-black);
	}

	button {
		cursor: pointer;
	}

	h1,
	.type-h1 {
		font-size: ${pxToRem(64)};
		line-height: 1.1;
		font-family: var(--font-suisse);
		font-weight: 400;
		letter-spacing: -1.28px;

		@media ${theme.mediaBreakpoints.tabletPortrait} {
			font-size: ${pxToRem(28)};
			line-height: 1.2;
			letter-spacing: -0.3px;
		}
	}

	h2,
	.type-h2 {
		font-size: ${pxToRem(64)};
		line-height: 1.1;
		font-family: var(--font-times);

		@media ${theme.mediaBreakpoints.tabletPortrait} {
			font-size: ${pxToRem(30)};
			line-height: 1.2;
		}
	}

	h3,
	.type-h3 {
		font-size: ${pxToRem(50)};
		line-height: 1.1;
		font-family: var(--font-suisse);
		font-weight: 400;

		@media ${theme.mediaBreakpoints.tabletPortrait} {
			font-size: ${pxToRem(26)};
			line-height: 1.2;
		}
	}

	h4,
	.type-h4 {
		font-size: ${pxToRem(40)};
		line-height: 1.1;
		font-family: var(--font-suisse);
		font-weight: 400;

		@media ${theme.mediaBreakpoints.tabletPortrait} {
			font-size: ${pxToRem(24)};
			line-height: 1.2;
		}
	}

	p,
	.type-p,
	a,
	button,
	div,
	.type-b1 {
		font-size: ${pxToRem(24)};
		line-height: 1.3;
		font-family: var(--font-times);

		@media ${theme.mediaBreakpoints.tabletPortrait} {
			font-size: ${pxToRem(18)};
			line-height: 1.2;
		}
	}

	.type-b2 {
		font-size: ${pxToRem(16)};
		line-height: 1.2;
		font-family: var(--font-times);

		@media ${theme.mediaBreakpoints.tabletPortrait} {
			font-size: ${pxToRem(14)};
			line-height: 1.2;
		}
	}

	.type-button {
		font-size: ${pxToRem(14)};
		line-height: 1.2;
		font-family: var(--font-suisse);
		text-transform: uppercase;

		@media ${theme.mediaBreakpoints.tabletPortrait} {
			font-size: ${pxToRem(12)};
			line-height: 1.2;
		}
	}

	.type-caption {
		font-size: ${pxToRem(12)};
		line-height: 1.1;
		font-family: var(--font-suisse);
		font-weight: 400;

		@media ${theme.mediaBreakpoints.tabletPortrait} {
			font-size: ${pxToRem(9)};
			line-height: 1.2;
		}
	}

	.type-super {
		font-size: ${pxToRem(128)};
		line-height: 1.1;
		font-family: var(--font-suisse);
		letter-spacing: -1.28px;

		@media ${theme.mediaBreakpoints.tabletPortrait} {
			font-size: ${pxToRem(72)};
			line-height: 1.2;
			letter-spacing: -0.48px;
		}

		@media ${theme.mediaBreakpoints.mobile} {
			font-size: ${pxToRem(48)};
			line-height: 1.2;
		}
	}

	.rich-text {
		h1,
		h2,
		h3,
		h4,
		h5,
		h6 {
			font-family: var(--font-suisse) !important;
			margin-bottom: ${pxToRem(24)};
			padding-top: ${pxToRem(32)};
			font-weight: 400;

			@media ${theme.mediaBreakpoints.tabletPortrait} {
				margin-bottom: ${pxToRem(16)};
			}
		}

		h2 {
			font-size: ${pxToRem(57)};
			line-height: 1.1;
			font-weight: 400;
		}

		h4, h5, h6 {
			font-size: ${pxToRem(14)} !important;
			line-height: 1.2 !important;
			font-family: var(--font-suisse) !important;
			text-transform: uppercase !important;

			@media ${theme.mediaBreakpoints.tabletPortrait} {
				font-size: ${pxToRem(12)};
				line-height: 1.2;
			}
		}

		p, a {
			font-size: ${pxToRem(16)};
			line-height: 1.2;
			font-family: var(--font-times);

			@media ${theme.mediaBreakpoints.tabletPortrait} {
				font-size: ${pxToRem(14)};
				line-height: 1.2;
			}
		}

		p:not(:last-child) {
			margin-bottom: ${pxToRem(16)};
		}

		a {
			text-decoration: underline;

			transition: all var(--transition-speed-default) var(--transition-ease);

			&:hover {
				opacity: 0.6;
			}
		}

		ul,
		ol {
			margin-bottom: ${pxToRem(24)};
			padding-left: ${pxToRem(48)};
		}

		ul li {
			list-style-type: disc;
		}

		ol li {
			list-style-type: decimal;
		}

		em {
			font-variant: small-caps;
			font-style: normal;
		}
	}

	.button-layout {
		display: inline-block;
	}

	.hover-link {
		transition: all var(--transition-speed-default) var(--transition-ease);

		&:hover {
			opacity: 0.7;
		}
	}

	mux-player {
		--media-object-fit: contain;
		--media-object-position: center;
		--controls: none;
		--media-object-fit: cover;
		--media-object-position: center;
	}

	.view-element-fade-in
	{
		opacity: 0;

		transition: opacity var(--transition-speed-default) ease;

		&--in-view
		{
			opacity: 1;
		}
	}

	.view-element-bottom-top
	{
		opacity: 0;
		transform: translateY(15px);

		transition: opacity var(--transition-speed-default) cubic-bezier(0.65, 0, 0.35, 1), transform var(--transition-speed-default) cubic-bezier(0.65, 0, 0.35, 1);

		&--in-view
		{
			opacity: 1;
			transform: translateY(0);
		}
	}

	.view-element-scale-up
	{
		transform: scale(0.95);
		opacity: 0;

		transition: opacity var(--transition-speed-default) ease, transform var(--transition-speed-default) ease;

		&--in-view
		{
			opacity: 1;
			transform: scale(1);
		}
	}

	.embla {
		overflow: hidden;
	}

	.embla__container {
		display: flex;
	}

	.embla__slide {
		min-width: 0;
		margin-right: 4px;

		&.flush {
			flex: 0 0 calc(25% - 3px);
		}

		&.overlay {
			flex: 0 0 26%;
		}
	}

	.performance {
		-webkit-transform: translateZ(0);
		backface-visibility: hidden;
		perspective: 1000;
		transform: translate3d(0,0,0);
		transform: translateZ(0);
	}

	::placeholder {
		color: currentcolor;
		opacity: 1;
	}

	input[type="search"]::-webkit-search-decoration,
	input[type="search"]::-webkit-search-cancel-button,
	input[type="search"]::-webkit-search-results-button,
	input[type="search"]::-webkit-search-results-decoration {
		-webkit-appearance: none;
	}

	input[type="hidden"] {
		display: none;
	}

	input,
	textarea,
	select {
		padding: 0.125rem 0;
		font-size: ${pxToRem(16)};
		width: 100%;
		appearance: none;
	}

	input::placeholder,
	textarea::placeholder {
		transition: all var(--transition-speed-default) var(--transition-ease);
	}

	textarea {
		min-height: 5rem;
	}

	label {
		display: inline-block;
	}

	.overflow-hidden {
		overflow: hidden;
	}

	img,
	video {
		max-width: 100%;
		display: block;
		height: auto;
	}

	iframe {
		max-width: 100%;
		display: block;
	}


	html.lenis {
		height: auto;
	}

	.lenis.lenis-smooth {
		scroll-behavior: auto !important;
	}

	.lenis.lenis-smooth [data-lenis-prevent] {
		overscroll-behavior: contain;
	}

	.lenis.lenis-stopped {
		overflow: hidden;
	}

	.lenis.lenis-scrolling iframe {
		pointer-events: none;
	}
`;
