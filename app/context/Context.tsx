"use client"
import React, { createContext, useState, FC, ReactNode, useEffect } from "react";

interface LandingContextProps {
    coverOpen: boolean;
    setCoverOpen: React.Dispatch<React.SetStateAction<boolean>>;
    page1Open: boolean;
    setPage1Open: React.Dispatch<React.SetStateAction<boolean>>;
    page2Open: boolean;
    setPage2Open: React.Dispatch<React.SetStateAction<boolean>>;
    page3Open: boolean;
    setPage3Open: React.Dispatch<React.SetStateAction<boolean>>;
    zIndexPriority: string;
    setZIndexPriority: React.Dispatch<React.SetStateAction<string>>;
    playPageTurnSound: () => void;
}

export const LandingContext = createContext<LandingContextProps | undefined>(undefined);

export const LandingProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [coverOpen, setCoverOpen] = useState(false);
    const [page1Open, setPage1Open] = useState(false);
    const [page2Open, setPage2Open] = useState(false);
    const [page3Open, setPage3Open] = useState(false);
    const [zIndexPriority, setZIndexPriority] = useState<string>("0");
    const [audio, setAudio] = useState<HTMLAudioElement | null>(null);

    useEffect(() => {
        const newAudio = new Audio("/audio/pageTurn.mp3");
        newAudio.preload = "auto";
        setAudio(newAudio);
    }, []);

    const playPageTurnSound = () => {
        if (audio) {
            audio.play().catch((error) => console.error("Audio playback error:", error));
        }
    };

    return (
        <LandingContext.Provider
            value={{
                coverOpen,
                setCoverOpen,
                page1Open,
                setPage1Open,
                page2Open,
                setPage2Open,
                page3Open,
                setPage3Open,
                zIndexPriority,
                setZIndexPriority,
                playPageTurnSound,
            }}
        >
            {children}
        </LandingContext.Provider>
    );
};