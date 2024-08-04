import 'fast-text-encoding'
import { createClient } from '@dynamic-labs/client'
import { ReactNativeExtension } from '@dynamic-labs/react-native-extension'
import { ViemExtension } from '@dynamic-labs/viem-extension'

// Hardcoded Environment ID
const environmentId = '46287282-64a2-4bc3-a169-f391acdb3151'

console.log('Environment ID:', environmentId)

export const client = createClient({
  environmentId,
  appLogoUrl: 'https://demo.dynamic.xyz/favicon-32x32.png',
  appName: 'RWA App',
})
  .extend(ReactNativeExtension())
  .extend(ViemExtension())

console.log('Client created successfully')