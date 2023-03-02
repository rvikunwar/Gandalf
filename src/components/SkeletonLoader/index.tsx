import React from 'react'
import ContentLoader, { Rect, Circle } from "react-content-loader/native"
import { View } from 'react-native'
import styles from './style'

const SkeletonThread = () => {
  return (
    <View style={styles.skeleton}>
        <ContentLoader
            height={84}
            width={400}
            viewBox="0 0 400 54"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb">
            <Circle cx="28" cy="34" r="28" />
            <Rect x="64" y="14" rx="3" ry="3" width="180" height="16" />
            <Rect x="64" y="34" rx="3" ry="3" width="13" height="15" />
            <Rect x="80" y="34" rx="3" ry="3" width="74" height="15" />
            <Circle cx="305" cy="23" r="12" />
           
        </ContentLoader>
    </View>

  )
}


export default SkeletonThread