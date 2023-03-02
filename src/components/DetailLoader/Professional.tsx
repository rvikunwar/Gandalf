import React from 'react'
import ContentLoader, { Rect, Circle } from "react-content-loader/native"

const BusinessDetailSkeleton = () => {
    return (
        <ContentLoader 
        width={'100%'}
        height={770}
        viewBox="0 0 400 770"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        >
            <Rect x="108" y="28" rx="3" ry="3" width="108" height="16" /> 
            <Rect x="108" y="48" rx="3" ry="3" width="52" height="16" /> 
            <Rect x="20" y="106" rx="3" ry="3" width="310" height="16" /> 
            <Rect x="20" y="130" rx="3" ry="3" width="360" height="16" /> 
            <Rect x="20" y="154" rx="3" ry="3" width="178" height="16" /> 
            <Circle cx="60" cy="60" r="40" /> 
            
            {/* //skills heading */}
            <Rect x="20" y="188" rx="0" ry="0" width="77" height="15" /> 

            <Rect x="20" y="210" rx="0" ry="0" width="40" height="12" /> 
            <Rect x="80" y="210" rx="0" ry="0" width="20" height="12" /> 
            <Rect x="120" y="210" rx="0" ry="0" width="60" height="12" /> 
            <Rect x="200" y="210" rx="0" ry="0" width="40" height="12" /> 
            <Rect x="260" y="210" rx="0" ry="0" width="60" height="12" /> 
            <Rect x="340" y="210" rx="0" ry="0" width="40" height="12" /> 

            <Rect x="20" y="230" rx="0" ry="0" width="70" height="12" /> 
            <Rect x="110" y="230" rx="0" ry="0" width="10" height="12" /> 
            <Rect x="140" y="230" rx="0" ry="0" width="40" height="12" /> 
            <Rect x="200" y="230" rx="0" ry="0" width="60" height="12" /> 
            <Rect x="280" y="230" rx="0" ry="0" width="30" height="12" /> 
            <Rect x="310" y="230" rx="0" ry="0" width="40" height="12" />
            
            
            <Rect x="20" y="270" rx="0" ry="0" width="90" height="20" /> 
            <Rect x="20" y="300" rx="0" ry="0" width="120" height="20" /> 
            <Rect x="20" y="330" rx="0" ry="0" width="90" height="20" /> 
            <Rect x="300" y="270" rx="0" ry="0" width="60" height="20" /> 
            <Rect x="300" y="300" rx="0" ry="0" width="60" height="20" /> 
            <Rect x="280" y="330" rx="0" ry="0" width="80" height="20" /> 
            
            <Rect x="20" y="380" rx="0" ry="0" width="340" height="40" /> 
            <Rect x="20" y="440" rx="0" ry="0" width="340" height="40" /> 
            <Rect x="20" y="500" rx="0" ry="0" width="340" height="40" /> 
            <Rect x="20" y="560" rx="0" ry="0" width="340" height="40" /> 
            <Rect x="20" y="620" rx="0" ry="0" width="340" height="40" /> 
            <Rect x="20" y="680" rx="0" ry="0" width="340" height="40" /> 
            <Rect x="20" y="740" rx="0" ry="0" width="340" height="40" /> 

        </ContentLoader>
    )
}

export default BusinessDetailSkeleton