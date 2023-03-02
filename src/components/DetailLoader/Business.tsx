import React from 'react'
import ContentLoader, { Rect, Circle } from "react-content-loader/native"

const BusinessDetailSkeleton = () => {
    return (
        <ContentLoader
            width={'100%'}
            height={260}
            viewBox="0 0 420 260"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb">
            <Rect x="100" y="93" rx="3" ry="3" width="214" height="12" />
            <Rect x="78" y="111" rx="3" ry="3" width="254" height="12" />
            <Rect x="150" y="129" rx="3" ry="3" width="118" height="12" />
            <Circle cx="50%" cy="47" r="42" />
            <Circle cx="181" cy="171" r="6" />
            <Circle cx="211" cy="171" r="6" />
            <Circle cx="241" cy="171" r="6" />
            <Rect x="40" y="209" rx="3" ry="3" width="334" height="42" />
            <Rect x="40" y="262" rx="3" ry="3" width="334" height="42" />

        </ContentLoader>
    )
}

export default BusinessDetailSkeleton


