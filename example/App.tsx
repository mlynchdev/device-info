import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { requestPermissions } from 'device-info'
import { useState } from 'react'

export default function App() {
  const [isPermitted, setIsPermitted] = useState(false)
  const [data, setData] = useState({})

  const requestPermissionsRN = () => {
    requestPermissions()
    setIsPermitted(true)
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        {isPermitted ? (
          <Text>I'm showing you the business!</Text>
        ) : (
          <>
            <Text>Not permitted</Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                // check shit
              }}
            >
              <Text style={{ color: 'white', paddingHorizontal: 20 }}>
                This does nothing.
              </Text>
            </TouchableOpacity>
          </>
        )}
        <TouchableOpacity style={styles.button} onPress={requestPermissionsRN}>
          <Text style={{ color: 'white', paddingHorizontal: 20 }}>
            {isPermitted ? 'Permissions given' : 'Request Permissions'}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    height: 50,
    borderRadius: 25,
    backgroundColor: 'black',
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5,
  },
})
