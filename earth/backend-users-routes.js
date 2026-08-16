// Backend: User API routes with sustainability
// File: src/routes/users.js (relevant sections)

const express = require("express");
const { supabase } = require("../config/supabaseClient");
const { authenticate } = require("../middlewares/auth");
const {
  calculateSustainabilityScore,
  formatWater,
  calculateTextileWastePrevented,
  formatTextileWaste,
} = require("../utils/sustainability");

const router = express.Router();

/**
 * GET /api/users/me
 * Get current authenticated user's profile with sustainability stats
 */
router.get("/me", authenticate, async (req, res) => {
  try {
    const userId = req.user.id;

    // Fetch profile with sustainability stats
    const { data: profile, error: profileError } = await supabase
      .from("profiles")
      .select("*")
      .eq("user_id", userId)
      .single();

    if (profileError) throw profileError;

    if (!profile) {
      return res.status(404).json({ error: "Profile not found" });
    }

    // Compute sustainability score on-the-fly
    const sustainability_score = calculateSustainabilityScore(
      profile.total_rentals,
      profile.water_saved_liters,
    );

    // Calculate textile waste prevented
    const textile_waste_prevented = calculateTextileWastePrevented(
      profile.total_rentals,
    );

    // Fetch badges
    const { data: userBadges, error: badgesError } = await supabase
      .from("user_badges")
      .select("badges(slug, name)")
      .eq("user_id", userId);

    if (badgesError) console.error("Error fetching badges:", badgesError);

    const badges =
      userBadges?.map((ub) => ({
        slug: ub.badges.slug,
        name: ub.badges.name,
      })) || [];

    // Return profile with computed metrics
    res.json({
      success: true,
      profile: {
        user_id: profile.user_id,
        username: profile.username,
        avatar_url: profile.avatar_url,
        bio: profile.bio,
        total_rentals: profile.total_rentals,
        water_saved_liters: profile.water_saved_liters,
        textile_waste_prevented,
        sustainability_score,
        badges,
        created_at: profile.created_at,
        updated_at: profile.updated_at,
      },
    });
  } catch (error) {
    console.error("Error fetching user profile:", error);
    res.status(500).json({
      success: false,
      error: "Failed to fetch profile",
      message: error.message,
    });
  }
});

/**
 * GET /api/users/:username
 * Get public profile for any user (no auth required)
 */
router.get("/:username", async (req, res) => {
  try {
    const { username } = req.params;

    // Fetch public profile
    const { data: profile, error: profileError } = await supabase
      .from("profiles")
      .select("*")
      .eq("username", username)
      .single();

    if (profileError || !profile) {
      return res.status(404).json({
        success: false,
        error: "User not found",
      });
    }

    // Compute sustainability score on-the-fly
    const sustainability_score = calculateSustainabilityScore(
      profile.total_rentals,
      profile.water_saved_liters,
    );

    // Calculate textile waste prevented
    const textile_waste_prevented = calculateTextileWastePrevented(
      profile.total_rentals,
    );

    // Fetch badges
    const { data: userBadges } = await supabase
      .from("user_badges")
      .select("badges(slug, name)")
      .eq("user_id", profile.user_id);

    const badges =
      userBadges?.map((ub) => ({
        slug: ub.badges.slug,
        name: ub.badges.name,
      })) || [];

    // Return public profile
    res.json({
      success: true,
      profile: {
        username: profile.username,
        avatar_url: profile.avatar_url,
        bio: profile.bio,
        total_rentals: profile.total_rentals,
        water_saved_liters: profile.water_saved_liters,
        textile_waste_prevented,
        sustainability_score,
        badges,
        created_at: profile.created_at,
      },
    });
  } catch (error) {
    console.error("Error fetching public profile:", error);
    res.status(500).json({
      success: false,
      error: "Failed to fetch profile",
      message: error.message,
    });
  }
});

/**
 * GET /api/users/stats/:username
 * Get sustainability stats for a specific user
 */
router.get("/stats/:username", async (req, res) => {
  try {
    const { username } = req.params;

    const { data: profile, error } = await supabase
      .from("profiles")
      .select("total_rentals, water_saved_liters")
      .eq("username", username)
      .single();

    if (error || !profile) {
      return res.status(404).json({
        success: false,
        error: "User not found",
      });
    }

    const score = calculateSustainabilityScore(
      profile.total_rentals,
      profile.water_saved_liters,
    );

    const textileWaste = calculateTextileWastePrevented(profile.total_rentals);

    res.json({
      success: true,
      stats: {
        username,
        rentals: profile.total_rentals,
        water_saved_liters: profile.water_saved_liters,
        water_saved_formatted: formatWater(profile.water_saved_liters),
        textile_waste_kg: textileWaste,
        textile_waste_formatted: formatTextileWaste(textileWaste),
        sustainability_score: score,
      },
    });
  } catch (error) {
    console.error("Error fetching stats:", error);
    res.status(500).json({
      success: false,
      error: "Failed to fetch stats",
      message: error.message,
    });
  }
});

module.exports = router;
