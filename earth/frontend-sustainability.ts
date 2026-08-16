// Frontend: Sustainability utilities
// File: src/lib/sustainability.ts

/**
 * Calculate sustainability score (0-10 scale)
 * Formula: (total_rentals + water_saved_liters) / 100, capped at 10
 */
export function calcSustainabilityScore(
  totalRentals: number,
  waterSavedLiters: number,
): number {
  const rawScore = (totalRentals + waterSavedLiters) / 100;
  return Math.min(Math.max(rawScore, 0), 10);
}

/**
 * Format water savings for display
 * Converts to millions, thousands, or liters as appropriate
 */
export function fmtWater(liters: number): string {
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
export function calcTextileWastePrevented(totalRentals: number): number {
  return totalRentals * 0.5;
}

/**
 * Format textile waste for display
 */
export function fmtTextileWaste(kg: number): string {
  if (kg >= 1000) {
    return `${(kg / 1000).toFixed(1)}T`;
  }
  return `${kg.toFixed(1)}kg`;
}

/**
 * Get eco score label
 */
export function getEcoScoreLabel(score: number): string {
  if (score >= 8) return "Eco Champion";
  if (score >= 6) return "Eco Hero";
  if (score >= 4) return "Eco Warrior";
  if (score >= 2) return "Eco Conscious";
  return "Getting Started";
}

/**
 * Get eco score color (for UI)
 */
export function getEcoScoreColor(score: number): string {
  if (score >= 8) return "#00A86B"; // Dark green
  if (score >= 6) return "#32CD32"; // Lime green
  if (score >= 4) return "#90EE90"; // Light green
  if (score >= 2) return "#FFD700"; // Gold
  return "#FF6B6B"; // Red
}

/**
 * Profile sustainability stats type
 */
export interface SustainabilityStats {
  totalRentals: number;
  waterSavedLiters: number;
  sustainabilityScore: number;
  badges: string[];
}

/**
 * Calculate all sustainability metrics for a profile
 */
export function calculateAllMetrics(
  totalRentals: number,
  waterSavedLiters: number,
  badges: string[] = [],
): SustainabilityStats & {
  textileWastePrevented: number;
  scoreLabel: string;
  scoreColor: string;
} {
  const sustainabilityScore = calcSustainabilityScore(
    totalRentals,
    waterSavedLiters,
  );
  const textileWastePrevented = calcTextileWastePrevented(totalRentals);

  return {
    totalRentals,
    waterSavedLiters,
    sustainabilityScore,
    textileWastePrevented,
    scoreLabel: getEcoScoreLabel(sustainabilityScore),
    scoreColor: getEcoScoreColor(sustainabilityScore),
    badges,
  };
}
