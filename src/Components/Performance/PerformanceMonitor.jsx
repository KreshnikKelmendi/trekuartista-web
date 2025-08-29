import React, { useState, useEffect, useCallback } from 'react';
import { FaTachometerAlt, FaVideo, FaImage, FaNetworkWired, FaMemory } from 'react-icons/fa';

const PerformanceMonitor = ({ isVisible = false }) => {
  const [metrics, setMetrics] = useState({
    pageLoadTime: 0,
    videoCount: 0,
    imageCount: 0,
    totalAssetsSize: 0,
    memoryUsage: 0,
    networkSpeed: 0
  });
  const [isExpanded, setIsExpanded] = useState(false);

  const calculatePageLoadTime = useCallback(() => {
    if (window.performance && window.performance.timing) {
      const timing = window.performance.timing;
      const loadTime = timing.loadEventEnd - timing.navigationStart;
      return Math.round(loadTime);
    }
    return 0;
  }, []);

  const countVideos = useCallback(() => {
    const videos = document.querySelectorAll('video');
    return videos.length;
  }, []);

  const countImages = useCallback(() => {
    const images = document.querySelectorAll('img');
    return images.length;
  }, []);

  const calculateTotalAssetsSize = useCallback(async () => {
    try {
      const videos = document.querySelectorAll('video');
      const images = document.querySelectorAll('img');
      
      let totalSize = 0;
      
      // Calculate video sizes (approximate)
      videos.forEach(video => {
        if (video.src) {
          // Estimate video size based on duration and quality
          // This is a rough estimate - actual size would need server-side calculation
          totalSize += 1024 * 1024 * 5; // Assume 5MB per video
        }
      });
      
      // Calculate image sizes
      for (let img of images) {
        if (img.src && img.complete) {
          try {
            const response = await fetch(img.src, { method: 'HEAD' });
            const contentLength = response.headers.get('content-length');
            if (contentLength) {
              totalSize += parseInt(contentLength);
            }
          } catch (error) {
            // Skip if can't get size
          }
        }
      }
      
      return Math.round(totalSize / (1024 * 1024)); // Convert to MB
    } catch (error) {
      return 0;
    }
  }, []);

  const getMemoryUsage = useCallback(() => {
    if (navigator.memory) {
      return Math.round(navigator.memory.usedJSHeapSize / (1024 * 1024));
    }
    return 0;
  }, []);

  const getNetworkSpeed = useCallback(() => {
    if (navigator.connection) {
      const connection = navigator.connection;
      if (connection.effectiveType) {
        return connection.effectiveType;
      }
      if (connection.downlink) {
        return `${connection.downlink} Mbps`;
      }
    }
    return 'Unknown';
  }, []);

  const updateMetrics = useCallback(async () => {
    const newMetrics = {
      pageLoadTime: calculatePageLoadTime(),
      videoCount: countVideos(),
      imageCount: countImages(),
      totalAssetsSize: await calculateTotalAssetsSize(),
      memoryUsage: getMemoryUsage(),
      networkSpeed: getNetworkSpeed()
    };
    
    setMetrics(newMetrics);
  }, [calculatePageLoadTime, countVideos, countImages, calculateTotalAssetsSize, getMemoryUsage, getNetworkSpeed]);

  useEffect(() => {
    if (isVisible) {
      updateMetrics();
      
      // Update metrics every 5 seconds
      const interval = setInterval(updateMetrics, 5000);
      
      return () => clearInterval(interval);
    }
  }, [isVisible, updateMetrics]);

  const getPerformanceScore = () => {
    let score = 100;
    
    // Deduct points for various performance issues
    if (metrics.pageLoadTime > 3000) score -= 20;
    if (metrics.videoCount > 10) score -= 15;
    if (metrics.totalAssetsSize > 50) score -= 15;
    if (metrics.memoryUsage > 100) score -= 10;
    
    return Math.max(0, score);
  };

  const getPerformanceColor = (score) => {
    if (score >= 80) return 'text-green-500';
    if (score >= 60) return 'text-yellow-500';
    return 'text-red-500';
  };

  const getPerformanceStatus = (score) => {
    if (score >= 80) return 'Excellent';
    if (score >= 60) return 'Good';
    if (score >= 40) return 'Fair';
    return 'Poor';
  };

  if (!isVisible) return null;

  const performanceScore = getPerformanceScore();
  const performanceColor = getPerformanceColor(performanceScore);
  const performanceStatus = getPerformanceStatus(performanceScore);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Collapsed View */}
      {!isExpanded && (
        <button
          onClick={() => setIsExpanded(true)}
          className="bg-black bg-opacity-80 text-white p-3 rounded-full shadow-lg hover:bg-opacity-90 transition-all duration-200"
          title="Performance Monitor"
        >
          <FaTachometerAlt size={20} />
        </button>
      )}

      {/* Expanded View */}
      {isExpanded && (
        <div className="bg-black bg-opacity-90 text-white p-4 rounded-lg shadow-lg max-w-sm">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Performance Monitor</h3>
            <button
              onClick={() => setIsExpanded(false)}
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              ×
            </button>
          </div>

          {/* Performance Score */}
          <div className="mb-4 p-3 bg-gray-800 rounded">
            <div className="flex items-center justify-between">
              <span>Performance Score:</span>
              <span className={`text-xl font-bold ${performanceColor}`}>
                {performanceScore}/100
              </span>
            </div>
            <div className={`text-sm ${performanceColor}`}>
              {performanceStatus}
            </div>
          </div>

          {/* Metrics */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <FaTachometerAlt size={14} />
                <span>Page Load:</span>
              </div>
              <span>{metrics.pageLoadTime}ms</span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <FaVideo size={14} />
                <span>Videos:</span>
              </div>
              <span>{metrics.videoCount}</span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <FaImage size={14} />
                <span>Images:</span>
              </div>
              <span>{metrics.imageCount}</span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <FaMemory size={14} />
                <span>Assets Size:</span>
              </div>
              <span>{metrics.totalAssetsSize} MB</span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <FaMemory size={14} />
                <span>Memory:</span>
              </div>
              <span>{metrics.memoryUsage} MB</span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <FaNetworkWired size={14} />
                <span>Network:</span>
              </div>
              <span>{metrics.networkSpeed}</span>
            </div>
          </div>

          {/* Refresh Button */}
          <button
            onClick={updateMetrics}
            className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition-colors duration-200"
          >
            Refresh Metrics
          </button>

          {/* Performance Tips */}
          {performanceScore < 80 && (
            <div className="mt-4 p-3 bg-yellow-900 bg-opacity-50 rounded text-sm">
              <h4 className="font-semibold mb-2">Performance Tips:</h4>
              <ul className="space-y-1 text-xs">
                {metrics.videoCount > 10 && (
                  <li>• Consider lazy loading videos</li>
                )}
                {metrics.totalAssetsSize > 50 && (
                  <li>• Optimize video/image sizes</li>
                )}
                {metrics.pageLoadTime > 3000 && (
                  <li>• Reduce initial bundle size</li>
                )}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default PerformanceMonitor;
