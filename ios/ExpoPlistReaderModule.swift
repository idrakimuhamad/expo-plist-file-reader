import ExpoModulesCore

public class ExpoPlistReaderModule: Module {
  // Each module class must implement the definition function. The definition consists of components
  // that describes the module's functionality and behavior.
  // See https://docs.expo.dev/modules/module-api for more details about available components.
  public func definition() -> ModuleDefinition {
    // Sets the name of the module that JavaScript code will use to refer to the module. Takes a string as an argument.
    // Can be inferred from module's class name, but it's recommended to set it explicitly for clarity.
    // The module will be accessible from `requireNativeModule('ExpoPlistReader')` in JavaScript.
    Name("ExpoPlistReader")

    AsyncFunction("readFile") { (filePath: String, promise: Promise) in
        // Read the file from the path and return its content.
        let fileManager = FileManager.default
        
        guard let documentsPath = fileManager.urls(for: .libraryDirectory, in: .userDomainMask).first else {
            let error = NSError(domain: "", code: 200, userInfo: [NSLocalizedDescriptionKey: "Path not found"])
            promise.reject(error)
            return
        }
        
        let fullPath = documentsPath.appendingPathComponent(filePath)
        
        do {
            let data = try Data(contentsOf: fullPath)
            
            if let plist = try PropertyListSerialization.propertyList(from: data, options: [], format: nil) as? [String: Any] {
                promise.resolve(plist)
            } else {
                promise.reject("read_error", "Failed to parse plist")
            }
        } catch {
            promise.reject("read_error", "Failed to read file: \(error.localizedDescription)")
        }
    }
  }
}
