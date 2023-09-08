package expo.modules.deviceinfo

import android.Manifest
import android.content.pm.PackageManager
import androidx.core.app.ActivityCompat
import androidx.core.content.ContextCompat
import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition

class DeviceInfoModule : Module() {
  val kRequestCode = 1
  override fun definition() = ModuleDefinition {
    Name("DeviceInfo")

    Function("requestPermissions") {
      val activity = appContext.activityProvider?.currentActivity
      val applicationContext = activity?.applicationContext
      if (activity != null && applicationContext != null) { // Ensure both are non-null
        val permissionCheck = ContextCompat.checkSelfPermission(
          applicationContext,
          Manifest.permission.READ_PHONE_STATE
        )

        if (permissionCheck != PackageManager.PERMISSION_GRANTED) {
          ActivityCompat.requestPermissions(
            activity,
            arrayOf(Manifest.permission.READ_PHONE_STATE),
            kRequestCode
          )
        }
      } else {
        // Handle the scenario where either activity or applicationContext is null, if needed
      }
    }
  }
}
