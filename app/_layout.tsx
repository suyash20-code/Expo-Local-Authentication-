import { Stack } from 'expo-router';
import { UserInactivityProvider } from '~/context/UserInactivity';
// add Stack inside the UserInactivityProvider for lock screen
export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name='(modals)/white'
        options={{
          headerShown:false,
          animation:'fade'
        }}
      >

      </Stack.Screen>
      <Stack.Screen name='(modals)/lock'
        options={{
          headerShown:false,
          animation:'fade'
        }}
      >

      </Stack.Screen>
    </Stack>
  )
    
  
  
}
