/// <reference types="@raycast/api">

/* 🚧 🚧 🚧
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 * 🚧 🚧 🚧 */

/* eslint-disable @typescript-eslint/ban-types */

type ExtensionPreferences = {
  /** API Key - Your S.EE API key */
  "apiKey": string,
  /** API Base URL - S.EE API base URL */
  "baseUrl": string,
  /** Default URL Domain - Default domain for short URLs (e.g. s.ee) */
  "defaultUrlDomain"?: string,
  /** Default Text Domain - Default domain for text shares (e.g. s.ee) */
  "defaultTextDomain"?: string,
  /** Default File Domain - Default domain for file uploads (e.g. s.ee) */
  "defaultFileDomain"?: string
}

/** Preferences accessible in all the extension's commands */
declare type Preferences = ExtensionPreferences

declare namespace Preferences {
  /** Preferences accessible in the `create-short-url` command */
  export type CreateShortUrl = ExtensionPreferences & {}
  /** Preferences accessible in the `create-text-share` command */
  export type CreateTextShare = ExtensionPreferences & {}
  /** Preferences accessible in the `upload-file` command */
  export type UploadFile = ExtensionPreferences & {}
  /** Preferences accessible in the `quick-share` command */
  export type QuickShare = ExtensionPreferences & {}
  /** Preferences accessible in the `manage-history` command */
  export type ManageHistory = ExtensionPreferences & {}
}

declare namespace Arguments {
  /** Arguments passed to the `create-short-url` command */
  export type CreateShortUrl = {}
  /** Arguments passed to the `create-text-share` command */
  export type CreateTextShare = {}
  /** Arguments passed to the `upload-file` command */
  export type UploadFile = {}
  /** Arguments passed to the `quick-share` command */
  export type QuickShare = {}
  /** Arguments passed to the `manage-history` command */
  export type ManageHistory = {}
}

