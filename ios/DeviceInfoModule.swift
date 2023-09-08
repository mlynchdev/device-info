import ExpoModulesCore

public class DeviceInfoModule: Module {
  public func definition() -> ModuleDefinition {
    Name("DeviceInfo")

    Function("getPermissions") {
      return "Hello world! 👋"
    }
  }
}
