declare module '*.svg' {
  /**
   * Use `any` to avoid conflicts with
   * `@svgr/webpack` plugin or
   * `babel-plugin-inline-react-svg` plugin.
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const content: any

  export default content
}

declare module '*.jpeg' {
  const value: string
  export = value
}

declare module '*.jpg' {
  const value: string
  export = value
}

declare module '*.png' {
  const value: string
  export = value
}

declare module '*.gif' {
  const value: string
  export = value
}

declare module '*.ico' {
  const value: string
  export = value
}

declare module '*.webp' {
  const value: string
  export = value
}

declare module '*.jp2' {
  const value: string
  export = value
}

declare module '*.avif' {
  const value: string
  export = value
}
