import { useState } from "react";

type ImageProps = {
	src: string;
	fallback: string;
	placeholder: string;
	alt: string;
	className?: string;
};

const Image = ({ src, fallback, placeholder, alt, className }: ImageProps) => {
	const [isLoading, setIsLoading] = useState<boolean>(true);

	return (
		<picture>
			<source srcSet={isLoading ? placeholder : src} type="image/webp" />
			<img
				srcSet={isLoading ? placeholder : fallback}
				alt={alt}
				loading="lazy"
				onLoad={() => setIsLoading(false)}
				className={className ? className : ""}
			/>
		</picture>
	);
};

export default Image;
