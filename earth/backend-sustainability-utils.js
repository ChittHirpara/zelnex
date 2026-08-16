// Backend: Sustainability stats calculation utility
// File: src/utils/sustainability.js

/**
 * Calculate sustainability score (0-10 scale)
 * Formula: (total_rentals + co2_saved_kg + water_saved_liters) / 100, capped at 10
 */
function calculateSustainabilityScore(
  totalRentals,
  co2SavedKg,
  waterSavedLiters,
) {
  const rawScore = (totalRentals + co2SavedKg + waterSavedLiters) / 100;
  return Math.min(Math.max(rawScore, 0), 10); // Cap between 0-10
}

/**
 * Format CO₂ savings for display
 * Converts kg to tons if >= 1000, otherwise shows as kg
 */
function formatCo2(kg) {
  if (kg >= 1000) {
    return `${(kg / 1000).toFixed(2)}T`;
  }
  return `${kg.toFixed(1)}kg`;
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

module.exports = {
  calculateSustainabilityScore,
  formatCo2,
  formatWater,
  calculateTextileWastePrevented,
};
