/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
/// <reference types="astro/content" />

// Add declaration for marked
declare module 'marked' {
  export const marked: {
    parse: (markdown: string, options?: any) => string;
    // Add other methods as needed
  };
}

// Define astro/types module
declare module 'astro/types' {
  export interface HTMLAttributes<Tag extends string> {
    [propName: string]: any;
  }
}

// Add JSX namespace for Astro
declare namespace JSX {
  interface IntrinsicElements {
    [elementName: string]: any;
  }
}

// Add missing Astro types
declare module 'astro' {
  export interface GetStaticPathsOptions {
    paginate: (data: any[], options: { pageSize: number }) => any[];
  }
  
  export interface Page<T = any> {
    data: T[];
    start: number;
    end: number;
    total: number;
    currentPage: number;
    size: number;
    lastPage: number;
    url: {
      current: string;
      prev: string | undefined;
      next: string | undefined;
    };
  }
}
