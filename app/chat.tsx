import { View, Text } from 'react-native'
import React from 'react'
import { WebView } from 'react-native-webview';

const chat = () => {
  return (
   
      <WebView source={{ uri: 'https://tawk.to/chat/662220dea0c6737bd12e058d/1hrql0pfh' }} style={{ flex: 1 }} />
    
  )
}

export default chat

// npx eas build --profile development --platform android
// npx eas update --branch preview --message "Updating the app"