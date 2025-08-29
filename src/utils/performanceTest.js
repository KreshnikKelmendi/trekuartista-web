// Performance Testing Utility
// Use this to measure performance improvements

export class PerformanceTester {
  constructor() {
    this.metrics = {};
    this.startTime = performance.now();
  }

  // Start measuring a specific metric
  startMeasure(name) {
    this.metrics[name] = {
      start: performance.now(),
      end: null,
      duration: null
    };
  }

  // End measuring a specific metric
  endMeasure(name) {
    if (this.metrics[name]) {
      this.metrics[name].end = performance.now();
      this.metrics[name].duration = this.metrics[name].end - this.metrics[name].start;
    }
  }

  // Get all metrics
  getMetrics() {
    return this.metrics;
  }

  // Get a specific metric
  getMetric(name) {
    return this.metrics[name];
  }

  // Calculate page load performance
  measurePageLoad() {
    if (window.performance && window.performance.timing) {
      const timing = window.performance.timing;
      
      return {
        domContentLoaded: timing.domContentLoadedEventEnd - timing.navigationStart,
        loadComplete: timing.loadEventEnd - timing.navigationStart,
        firstPaint: this.getFirstPaint(),
        firstContentfulPaint: this.getFirstContentfulPaint()
      };
    }
    return null;
  }

  // Get first paint time
  getFirstPaint() {
    if (window.performance && window.performance.getEntriesByType) {
      const paintEntries = window.performance.getEntriesByType('paint');
      const firstPaint = paintEntries.find(entry => entry.name === 'first-paint');
      return firstPaint ? firstPaint.startTime : null;
    }
    return null;
  }

  // Get first contentful paint time
  getFirstContentfulPaint() {
    if (window.performance && window.performance.getEntriesByType) {
      const paintEntries = window.performance.getEntriesByType('paint');
      const firstContentfulPaint = paintEntries.find(entry => entry.name === 'first-contentful-paint');
      return firstContentfulPaint ? firstContentfulPaint.startTime : null;
    }
    return null;
  }

  // Measure video loading performance
  measureVideoPerformance() {
    const videos = document.querySelectorAll('video');
    const videoMetrics = [];

    videos.forEach((video, index) => {
      const startTime = performance.now();
      
      video.addEventListener('loadeddata', () => {
        const loadTime = performance.now() - startTime;
        videoMetrics.push({
          index,
          src: video.src,
          loadTime: Math.round(loadTime),
          size: this.estimateVideoSize(video)
        });
      }, { once: true });
    });

    return videoMetrics;
  }

  // Estimate video size (rough calculation)
  estimateVideoSize(video) {
    if (video.duration && video.videoWidth && video.videoHeight) {
      // Rough estimate: duration * width * height * bitrate
      const bitrate = 0.1; // 100 kbps per pixel per second
      const size = (video.duration * video.videoWidth * video.videoHeight * bitrate) / (1024 * 1024);
      return Math.round(size);
    }
    return null;
  }

  // Measure memory usage
  measureMemoryUsage() {
    if (navigator.memory) {
      return {
        used: Math.round(navigator.memory.usedJSHeapSize / (1024 * 1024)),
        total: Math.round(navigator.memory.totalJSHeapSize / (1024 * 1024)),
        limit: Math.round(navigator.memory.jsHeapSizeLimit / (1024 * 1024))
      };
    }
    return null;
  }

  // Measure network performance
  measureNetworkPerformance() {
    if (navigator.connection) {
      const connection = navigator.connection;
      return {
        effectiveType: connection.effectiveType,
        downlink: connection.downlink,
        rtt: connection.rtt,
        saveData: connection.saveData
      };
    }
    return null;
  }

  // Run comprehensive performance test
  async runFullTest() {
    console.log('🚀 Starting Performance Test...');
    
    // Wait for page to fully load
    if (document.readyState !== 'complete') {
      await new Promise(resolve => {
        window.addEventListener('load', resolve);
      });
    }

    // Wait a bit more for videos to load
    await new Promise(resolve => setTimeout(resolve, 2000));

    const results = {
      pageLoad: this.measurePageLoad(),
      videoPerformance: this.measureVideoPerformance(),
      memoryUsage: this.measureMemoryUsage(),
      networkPerformance: this.measureNetworkPerformance(),
      totalTime: performance.now() - this.startTime
    };

    console.log('📊 Performance Test Results:', results);
    return results;
  }

  // Compare two performance results
  compareResults(before, after) {
    const comparison = {};
    
    if (before.pageLoad && after.pageLoad) {
      comparison.pageLoad = {
        domContentLoaded: {
          before: before.pageLoad.domContentLoaded,
          after: after.pageLoad.domContentLoaded,
          improvement: Math.round(((before.pageLoad.domContentLoaded - after.pageLoad.domContentLoaded) / before.pageLoad.domContentLoaded) * 100)
        },
        loadComplete: {
          before: before.pageLoad.loadComplete,
          after: after.pageLoad.loadComplete,
          improvement: Math.round(((before.pageLoad.loadComplete - after.pageLoad.loadComplete) / before.pageLoad.loadComplete) * 100)
        }
      };
    }

    if (before.memoryUsage && after.memoryUsage) {
      comparison.memoryUsage = {
        before: before.memoryUsage.used,
        after: after.memoryUsage.used,
        improvement: Math.round(((before.memoryUsage.used - after.memoryUsage.used) / before.memoryUsage.used) * 100)
      };
    }

    return comparison;
  }

  // Generate performance report
  generateReport(results) {
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        totalPageLoadTime: results.pageLoad?.loadComplete || 'N/A',
        memoryUsage: results.memoryUsage?.used || 'N/A',
        videoCount: results.videoPerformance?.length || 0,
        networkType: results.networkPerformance?.effectiveType || 'N/A'
      },
      recommendations: this.generateRecommendations(results),
      fullResults: results
    };

    console.log('📋 Performance Report:', report);
    return report;
  }

  // Generate optimization recommendations
  generateRecommendations(results) {
    const recommendations = [];

    if (results.pageLoad?.loadComplete > 3000) {
      recommendations.push('Page load time is slow. Consider implementing lazy loading and optimizing assets.');
    }

    if (results.memoryUsage?.used > 100) {
      recommendations.push('High memory usage. Consider implementing video lazy loading and cleanup.');
    }

    if (results.videoPerformance?.length > 10) {
      recommendations.push('Many videos detected. Implement intersection observer and progressive loading.');
    }

    if (results.networkPerformance?.effectiveType === 'slow-2g' || results.networkPerformance?.effectiveType === '2g') {
      recommendations.push('Slow network detected. Consider implementing adaptive quality and aggressive lazy loading.');
    }

    return recommendations;
  }
}

// Quick test function
export const quickPerformanceTest = async () => {
  const tester = new PerformanceTester();
  const results = await tester.runFullTest();
  const report = tester.generateReport(results);
  return { tester, results, report };
};

// Export for use in components
export default PerformanceTester;
