export { default } from "./Item"

export interface ItemMethods {
  onError(m: string): void
  onChange(f: File | Blob): void
}

export interface ItemProps {
  disabled?: boolean
}
