import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";
const baseUrl="https://www.waanverse.com"
const Seo = ({
    children,
    title,
    description,
}: {
    children: React.ReactNode;
    title: string;
    description: string;
}) => {
    const location = useLocation();

    return (
        <>
            <Helmet>
                <title>{title}</title>
                <meta name="description" content={description} />
                <link rel="canonical" href={`${baseUrl}${location.pathname}`} />

                {/* Open Graph Tags */}
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta name="twitter:title" content={title} />
                <meta name="twitter:description" content={description} />
                <meta
                    property="og:url"
                    content={`${baseUrl}${location.pathname}`}
                />
                <meta
                    name="identifier-URL"
                    content={`${baseUrl}${location.pathname}`}
                />
                <meta name="url" content={`${baseUrl}${location.pathname}`} />
            </Helmet>
            {children}
        </>
    );
};

export default Seo;
