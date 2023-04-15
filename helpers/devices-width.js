import {useCallback, useLayoutEffect, useRef, useState} from "react";

const useDeviceWidth = () => {
    const [width, setWidth] = useState(typeof window !== "undefined" ? window.innerWidth : null);
    const devices = useRef({sm: 576, md: 768, lg: 992, xl: 1200, xxl: 1400});

    const getDevice = useCallback(() => {
        switch (true) {
            case width >= devices.current.xxl:
                return "xxl";
            case width >= devices.current.xl:
                return "xl";
            case width >= devices.current.lg:
                return "lg";
            case width >= devices.current.md:
                return "md";
            case width >= devices.current.sm:
                return "sm";
            default:
                return "sm"
        }
    }, [width]);

    useLayoutEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        handleResize();

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return {devices, getDevice, width};
};

export default useDeviceWidth;