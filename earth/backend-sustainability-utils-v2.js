// Backend: Sustainability stats calculation utility
// File: src/utils/sustainability.js

/**
 * Calculate sustainability score (0-10 scale)
 * Formula: (total_rentals + water_saved_liters) / 100, capped at 10
 */
function calculateSustainabilityScore(totalRentals, waterSavedLiters) {
  const rawScore = (totalRentals + waterSavedLiters) / 100;
  return Math.min(Math.max(rawScore, 0), 10); // Cap between 0-10
}

/**
 * Format water savings for display
 * Converts to millions, thousands, or liters as appropriate
 */
function formatWater(liters) {
  if (liters >= 1000000) {
    return `${(liters / 1000000).toFixed(1)}M`;
  }
  if (liters >= 1000) {
    return `${(liters / 1000).toFixed(1)}K`;
  }
  return `${liters}L`;
}

/**
 * Calculate textile waste prevented (kg)
 * Assumes 0.5 kg per rental on average
 */
function calculateTextileWastePrevented(totalRentals) {
  return totalRentals * 0.5;
}

/**
 * Format textile waste for display
 */
function formatTextileWaste(kg) {
  if (kg >= 1000) {
    return `${(kg / 1000).toFixed(1)}T`;
  }
  return `${kg.toFixed(1)}kg`;
}

module.exports = {
  calculateSustainabilityScore,
  formatWater,
  calculateTextileWastePrevented,
  formatTextileWaste,
};
