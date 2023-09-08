import ExpoModulesCore

public class DeviceInfoModule: Module {
  public func definition() -> ModuleDefinition {
    Name("DeviceInfo")

    Function("hello") {
      return "Hello world! 👋"
    }
  }
}
