/**
 * API client for making HTTP requests
 * 
 * This provides a centralized way to make API calls with consistent error handling and request formatting.
 */

import { getApiUrl } from './endpoints';

/**
 * Common HTTP request options
 */
interface RequestOptions {
  headers?: Record<string, string>;
  params?: Record<string, string | number | boolean>;
}

/**
 * Base options for all requests
 */
const defaultOptions: RequestInit = {
  headers: {
    'Content-Type': 'application/json',
  },
  credentials: 'same-origin',
};

/**
 * Format URL with query parameters
 */
function formatUrl(url: string, params?: Record<string, string | number | boolean>): string {
  if (!params) return url;
  
  const searchParams = new URLSearchParams();
  
  Object.entries(params).forEach(([key, value]) => {
    searchParams.append(key, String(value));
  });
  
  return `${url}?${searchParams.toString()}`;
}

/**
 * Generic fetch wrapper with error handling
 */
async function fetchWithErrorHandling<T>(
  url: string,
  options: RequestInit
): Promise<T> {
  try {
    const response = await fetch(url, options);
    
    if (!response.ok) {
      // Handle specific error statuses
      if (response.status === 401) {
        throw new Error('Unauthorized: Please log in and try again');
      }
      
      if (response.status === 403) {
        throw new Error('Forbidden: You do not have permission to access this resource');
      }
      
      if (response.status === 404) {
        throw new Error('Not found: The requested resource could not be found');
      }
      
      if (response.status >= 500) {
        throw new Error('Server error: Please try again later');
      }
      
      // Try to get error details from the response
      try {
        const errorData = await response.json();
        throw new Error(errorData.message || `Request failed with status ${response.status}`);
      } catch (e) {
        throw new Error(`Request failed with status ${response.status}`);
      }
    }
    
    // For 204 No Content responses, return empty object
    if (response.status === 204) {
      return {} as T;
    }
    
    return await response.json();
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
    throw new Error('Unknown error occurred');
  }
}

/**
 * API client methods
 */
export const apiClient = {
  /**
   * Make a GET request
   * 
   * @param endpoint - API endpoint path
   * @param options - Request options
   * @returns Promise with the response data
   */
  get: async <T>(endpoint: string, options?: RequestOptions): Promise<T> => {
    const url = formatUrl(getApiUrl(endpoint), options?.params);
    
    return fetchWithErrorHandling<T>(url, {
      ...defaultOptions,
      method: 'GET',
      headers: {
        ...defaultOptions.headers,
        ...options?.headers,
      },
    });
  },
  
  /**
   * Make a POST request
   * 
   * @param endpoint - API endpoint path
   * @param data - Request body data
   * @param options - Request options
   * @returns Promise with the response data
   */
  post: async <T, D = any>(endpoint: string, data: D, options?: RequestOptions): Promise<T> => {
    const url = formatUrl(getApiUrl(endpoint), options?.params);
    
    return fetchWithErrorHandling<T>(url, {
      ...defaultOptions,
      method: 'POST',
      headers: {
        ...defaultOptions.headers,
        ...options?.headers,
      },
      body: JSON.stringify(data),
    });
  },
  
  /**
   * Make a PUT request
   * 
   * @param endpoint - API endpoint path
   * @param data - Request body data
   * @param options - Request options
   * @returns Promise with the response data
   */
  put: async <T, D = any>(endpoint: string, data: D, options?: RequestOptions): Promise<T> => {
    const url = formatUrl(getApiUrl(endpoint), options?.params);
    
    return fetchWithErrorHandling<T>(url, {
      ...defaultOptions,
      method: 'PUT',
      headers: {
        ...defaultOptions.headers,
        ...options?.headers,
      },
      body: JSON.stringify(data),
    });
  },
  
  /**
   * Make a DELETE request
   * 
   * @param endpoint - API endpoint path
   * @param options - Request options
   * @returns Promise with the response data
   */
  delete: async <T>(endpoint: string, options?: RequestOptions): Promise<T> => {
    const url = formatUrl(getApiUrl(endpoint), options?.params);
    
    return fetchWithErrorHandling<T>(url, {
      ...defaultOptions,
      method: 'DELETE',
      headers: {
        ...defaultOptions.headers,
        ...options?.headers,
      },
    });
  },
}; 