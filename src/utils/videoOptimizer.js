// Video Optimization Utilities and Best Practices

/**
 * Video optimization configuration
 */
export const VIDEO_CONFIG = {
  // Recommended video formats and settings
  formats: {
    webm: {
      codec: 'vp9',
      quality: 'good',
      maxBitrate: '2M',
      maxWidth: 1920,
      maxHeight: 1080
    },
    mp4: {
      codec: 'h264',
      quality: 'good',
      maxBitrate: '2M',
      maxWidth: 1920,
      maxHeight: 1080
    }
  },
  
  // Thumbnail generation settings
  thumbnail: {
    width: 320,
    height: 180,
    quality: 0.8
  },
  
  // Lazy loading settings
  lazyLoading: {
    threshold: 0.1,
    rootMargin: '50px',
    triggerOnce: false
  }
};

/**
 * Generate video poster/thumbnail URL
 * @param {string} videoSrc - Video source URL
 * @param {string} posterSrc - Optional poster image URL
 * @returns {string} Poster image URL
 */
export const getVideoPoster = (videoSrc, posterSrc = null) => {
  if (posterSrc) return posterSrc;
  
  // If no poster, try to generate from video
  // This would require backend support or using video.js
  return null;
};

/**
 * Check if video format is supported
 * @param {string} format - Video format (mp4, webm, etc.)
 * @returns {boolean} Whether format is supported
 */
export const isVideoFormatSupported = (format) => {
  const supportedFormats = ['mp4', 'webm', 'ogg'];
  return supportedFormats.includes(format.toLowerCase());
};

/**
 * Get optimal video quality based on device capabilities
 * @param {Object} deviceInfo - Device information
 * @returns {string} Optimal quality setting
 */
export const getOptimalVideoQuality = (deviceInfo = {}) => {
  const { connection, deviceMemory, hardwareConcurrency } = deviceInfo;
  
  // Check network connection
  if (connection?.effectiveType === '4g' || connection?.effectiveType === '5g') {
    return 'high';
  }
  
  // Check device capabilities
  if (deviceMemory >= 4 && hardwareConcurrency >= 4) {
    return 'medium';
  }
  
  return 'low';
};

/**
 * Preload video metadata only
 * @param {HTMLVideoElement} videoElement - Video element
 */
export const preloadVideoMetadata = (videoElement) => {
  if (videoElement) {
    videoElement.preload = 'metadata';
    videoElement.load();
  }
};

/**
 * Pause all videos except the one in view
 * @param {HTMLVideoElement} currentVideo - Currently playing video
 */
export const pauseOtherVideos = (currentVideo) => {
  const allVideos = document.querySelectorAll('video');
  allVideos.forEach(video => {
    if (video !== currentVideo && !video.paused) {
      video.pause();
    }
  });
};

/**
 * Optimize video element for performance
 * @param {HTMLVideoElement} videoElement - Video element to optimize
 */
export const optimizeVideoElement = (videoElement) => {
  if (!videoElement) return;
  
  // Set performance attributes
  videoElement.preload = 'metadata';
  videoElement.playsInline = true;
  videoElement.muted = true;
  
  // Add performance event listeners
  videoElement.addEventListener('loadstart', () => {
    // Video loading started
  });
  
  videoElement.addEventListener('loadedmetadata', () => {
    // Metadata loaded, video ready
  });
  
  videoElement.addEventListener('canplay', () => {
    // Video can start playing
  });
  
  videoElement.addEventListener('error', (e) => {
    console.error('Video error:', e);
  });
};

/**
 * Generate video thumbnail using canvas
 * @param {HTMLVideoElement} video - Video element
 * @param {number} time - Time in seconds to capture
 * @returns {string} Data URL of thumbnail
 */
export const generateVideoThumbnail = (video, time = 0) => {
  return new Promise((resolve, reject) => {
    if (!video) {
      reject(new Error('No video element provided'));
      return;
    }
    
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    canvas.width = VIDEO_CONFIG.thumbnail.width;
    canvas.height = VIDEO_CONFIG.thumbnail.height;
    
    video.currentTime = time;
    
    video.addEventListener('seeked', () => {
      try {
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        const thumbnail = canvas.toDataURL('image/jpeg', VIDEO_CONFIG.thumbnail.quality);
        resolve(thumbnail);
      } catch (error) {
        reject(error);
      }
    }, { once: true });
    
    video.addEventListener('error', (error) => {
      reject(error);
    }, { once: true });
  });
};

/**
 * Check if device supports hardware acceleration
 * @returns {boolean} Whether hardware acceleration is supported
 */
export const supportsHardwareAcceleration = () => {
  const canvas = document.createElement('canvas');
  const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
  
  if (!gl) return false;
  
  const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
  if (debugInfo) {
    const renderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
    return renderer.toLowerCase().includes('gpu') || 
           renderer.toLowerCase().includes('radeon') ||
           renderer.toLowerCase().includes('nvidia');
  }
  
  return true; // Assume support if we can't determine
};

/**
 * Get recommended video settings based on device
 * @returns {Object} Recommended video settings
 */
export const getRecommendedVideoSettings = () => {
  const hasHardwareAccel = supportsHardwareAcceleration();
  const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
  
  return {
    preload: hasHardwareAccel ? 'metadata' : 'none',
    autoplay: hasHardwareAccel,
    muted: true,
    playsInline: true,
    controls: !hasHardwareAccel,
    poster: true,
    lazy: true
  };
};

/**
 * Debounce function for performance optimization
 * @param {Function} func - Function to debounce
 * @param {number} wait - Wait time in milliseconds
 * @returns {Function} Debounced function
 */
export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

/**
 * Throttle function for performance optimization
 * @param {Function} func - Function to throttle
 * @param {number} limit - Time limit in milliseconds
 * @returns {Function} Throttled function
 */
export const throttle = (func, limit) => {
  let inThrottle;
  return function() {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
};

export default {
  VIDEO_CONFIG,
  getVideoPoster,
  isVideoFormatSupported,
  getOptimalVideoQuality,
  preloadVideoMetadata,
  pauseOtherVideos,
  optimizeVideoElement,
  generateVideoThumbnail,
  supportsHardwareAcceleration,
  getRecommendedVideoSettings,
  debounce,
  throttle
};
