/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Project {
  id: string;
  title: string;
  category: 'featured' | 'longform' | 'shortform' | 'motion' | 'grading' | 'freestyle';
  subcategory?: string; // Optional subsection routing (e.g. 'youtube', 'documentary')
  client: string;
  views: string;
  duration: string;
  tags: string[];
  thumbnailUrl: string;
  videoUrl: string; // Loop/preview video
  fullVideoUrl: string; // Video player source
  description: string;
  role: string;
  software: string[];
  timeline: string;
  beforeImage?: string; // For grading
  afterImage?: string;  // For grading
  btsImages?: string[]; // Behind the scenes
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatarUrl: string;
  quote: string;
  rating: number;
  videoReviewUrl?: string; // Optional video clip
}

export interface WorkflowStep {
  id: string;
  stepNumber: string;
  title: string;
  description: string;
  details: string[];
}

export interface Skill {
  name: string;
  percentage: number;
  iconName: string; // Map to Lucide icon or custom rendering
  glowColor: string;
}
