import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title: string;
    description: string;
    canonical?: string;
    type?: string;
    name?: string;
    image?: string;
    keywords?: string;
}

export default function SEO({
    title,
    description,
    canonical,
    type = 'website',
    name = 'Qualiin',
    image = 'https://iili.io/fNsZDTN.md.webp',
    keywords = "Medical Device Regulation, CDSCO Registration, US FDA 510(k), CE Mark MDR IVDR, ISO 13485 QMS, SaMD Compliance, MedTech Regulatory Consultants"
}: SEOProps) {
    return (
        <Helmet>
            {/* Standard metadata tags */}
            <title>{title}</title>
            <meta name='description' content={description} />
            <meta name='keywords' content={keywords} />
            {canonical && <link rel="canonical" href={canonical} />}

            {/* End standard metadata tags */}

            {/* Facebook tags */}
            <meta property="og:site_name" content="Qualiin" />
            <meta property="og:type" content={type} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            {image && <meta property="og:image" content={image} />}
            {/* End Facebook tags */}

            {/* Twitter tags */}
            <meta name="twitter:creator" content={name} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            {/* End Twitter tags */}
        </Helmet>
    );
}
