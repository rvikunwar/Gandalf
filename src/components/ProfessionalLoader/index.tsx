import React from 'react'
import ContentLoader, { Rect, Circle } from "react-content-loader/native"

const ProfessionalLoader = () => (
    <ContentLoader viewBox="0 0 476 124">
        <Rect x="48" y="8" width="88" height="6" rx="3" />
        <Rect x="48" y="26" width="52" height="6" rx="3" />
        <Rect x="0" y="56" width="410" height="6" rx="3" />
        <Rect x="0" y="72" width="380" height="6" rx="3" />
        <Rect x="0" y="88" width="178" height="6" rx="3" />
        <Circle cx="20" cy="20" r="20" />
    </ContentLoader>
)


export default ProfessionalLoader