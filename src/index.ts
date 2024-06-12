import ExpoPlistReaderModule from "./ExpoPlistReaderModule"

export async function readFile(path: string): Promise<string> {
  return ExpoPlistReaderModule.readFile(path)
}
