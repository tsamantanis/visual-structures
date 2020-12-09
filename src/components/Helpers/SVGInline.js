import React, { useEffect, useState } from "react";

const SVGInline = (props) => {
    const [svg, setSvg] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [isErrored, setIsErrored] = useState(false);

    useEffect(() => {
        fetch(props.url)
            .then((res) => res.text())
            .then(setSvg)
            .catch(setIsErrored)
            .then(() => setIsLoaded(true));
    }, [props.url]);

    return (
        <div
            className={`${props.className} svgInline svgInline--${
                isLoaded ? "loaded" : "loading"
            } ${isErrored ? "svgInline--errored" : ""}`}
            dangerouslySetInnerHTML={{ __html: svg }}
        />
    );
};

export default SVGInline;
