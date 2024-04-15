import { Stack } from 'expo-router';
import { UserInactivityProvider } from '~/context/UserInactivity';

export default function Layout() {
  return <UserInactivityProvider>
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
  </UserInactivityProvider> 
  
}
