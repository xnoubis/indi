/**
 * Signature Discovery Service
 *
 * Surfaces patterns without judgment. Mirrors, not directors.
 * Preserves the shape of engagement while letting content evaporate.
 *
 * This is the PSIP principle in action:
 * - Extract patterns, release content
 * - Like grandmother's skull → grandmother as universal
 * - Memory without surveillance, relationship without record
 */

// Pattern dimensions we surface (not extract, not profile—surface)
export interface PatternDimension {
  name: string;
  description: string;
  spectrum: [string, string]; // Two ends of a spectrum, not good/bad
  position: number; // 0-1, where on the spectrum
  confidence: number; // 0-1, how clear is this pattern
  evidence: string[]; // Brief, non-identifying observations
}

export interface SignatureProfile {
  dialecticalStyle: PatternDimension;
  temporalOrientation: PatternDimension;
  certaintyRelationship: PatternDimension;
  emergenceStance: PatternDimension;
  scaffoldingAwareness: PatternDimension;
}

export interface ReflectionPrompt {
  question: string;
  dimension: keyof SignatureProfile;
  context: string;
}

// The prompts are invitations, not extractions
export const REFLECTION_PROMPTS: ReflectionPrompt[] = [
  {
    question: "When you encounter something that seems impossible, what's your first move?",
    dimension: 'dialecticalStyle',
    context: 'How you dance with contradiction'
  },
  {
    question: "Do you tend to build things quickly and iterate, or plan thoroughly before starting?",
    dimension: 'temporalOrientation',
    context: 'Your relationship with time and creation'
  },
  {
    question: "When you're certain about something, how does that certainty feel? When you're uncertain?",
    dimension: 'certaintyRelationship',
    context: 'How you hold knowing and not-knowing'
  },
  {
    question: "Do new ideas tend to arrive suddenly, or do they build gradually?",
    dimension: 'emergenceStance',
    context: 'How insight comes to you'
  },
  {
    question: "When you create a framework or system, do you see it as permanent or provisional?",
    dimension: 'scaffoldingAwareness',
    context: 'Your relationship with structures you build'
  },
  {
    question: "What do you do when two things you believe contradict each other?",
    dimension: 'dialecticalStyle',
    context: 'How you navigate impossibility'
  },
  {
    question: "Describe a time you changed your mind about something important.",
    dimension: 'scaffoldingAwareness',
    context: 'How you relate to your own past certainties'
  },
  {
    question: "What's the difference between a useful simplification and a harmful one?",
    dimension: 'certaintyRelationship',
    context: 'How you think about truth and utility'
  }
];

// Initialize empty signature
export const createEmptySignature = (): SignatureProfile => ({
  dialecticalStyle: {
    name: 'Dialectical Style',
    description: 'How you engage with contradiction and impossibility',
    spectrum: ['Resolve quickly', 'Sit in tension'],
    position: 0.5,
    confidence: 0,
    evidence: []
  },
  temporalOrientation: {
    name: 'Temporal Orientation',
    description: 'Your relationship with time in creation',
    spectrum: ['Plan then build', 'Build to discover'],
    position: 0.5,
    confidence: 0,
    evidence: []
  },
  certaintyRelationship: {
    name: 'Certainty Relationship',
    description: 'How you hold knowing and not-knowing',
    spectrum: ['Seek clarity', 'Embrace ambiguity'],
    position: 0.5,
    confidence: 0,
    evidence: []
  },
  emergenceStance: {
    name: 'Emergence Stance',
    description: 'How insight arrives for you',
    spectrum: ['Gradual accumulation', 'Sudden crystallization'],
    position: 0.5,
    confidence: 0,
    evidence: []
  },
  scaffoldingAwareness: {
    name: 'Scaffolding Awareness',
    description: 'How you relate to structures you build',
    spectrum: ['Build to last', 'Build to dissolve'],
    position: 0.5,
    confidence: 0,
    evidence: []
  }
});

// Pattern indicators (soft signals, not deterministic)
const PATTERN_INDICATORS = {
  dialecticalStyle: {
    tensionSeeking: ['both', 'paradox', 'tension', 'impossible', 'contradiction', 'neither', 'between'],
    resolutionSeeking: ['answer', 'solution', 'resolve', 'figure out', 'decide', 'choose', 'settle']
  },
  temporalOrientation: {
    planFirst: ['plan', 'prepare', 'think through', 'before', 'first', 'outline', 'structure'],
    buildFirst: ['try', 'experiment', 'iterate', 'start', 'dive in', 'prototype', 'quickly']
  },
  certaintyRelationship: {
    seekClarity: ['clear', 'certain', 'sure', 'know', 'understand', 'definite', 'precise'],
    embraceAmbiguity: ['maybe', 'uncertain', 'unclear', 'depends', 'might', 'possibly', 'fluid']
  },
  emergenceStance: {
    gradual: ['slowly', 'build up', 'piece by piece', 'over time', 'gradually', 'accumulate'],
    sudden: ['suddenly', 'hit me', 'clicked', 'realized', 'eureka', 'flash', 'instant']
  },
  scaffoldingAwareness: {
    permanent: ['always', 'forever', 'fundamental', 'core', 'essential', 'permanent', 'foundation'],
    provisional: ['for now', 'temporary', 'until', 'evolve', 'change', 'provisional', 'scaffold']
  }
};

/**
 * Analyze text for pattern signals
 * This is not extraction—it's noticing
 */
export const analyzeForPatterns = (
  text: string,
  currentSignature: SignatureProfile
): SignatureProfile => {
  const lowerText = text.toLowerCase();
  const newSignature = { ...currentSignature };

  // Check each dimension
  (Object.keys(PATTERN_INDICATORS) as Array<keyof typeof PATTERN_INDICATORS>).forEach(dimension => {
    const indicators = PATTERN_INDICATORS[dimension];
    const [lowKey, highKey] = Object.keys(indicators) as [string, string];
    const lowIndicators = indicators[lowKey as keyof typeof indicators];
    const highIndicators = indicators[highKey as keyof typeof indicators];

    let lowCount = 0;
    let highCount = 0;

    lowIndicators.forEach(indicator => {
      if (lowerText.includes(indicator)) lowCount++;
    });

    highIndicators.forEach(indicator => {
      if (lowerText.includes(indicator)) highCount++;
    });

    const total = lowCount + highCount;
    if (total > 0) {
      const dimKey = dimension as keyof SignatureProfile;
      const currentDim = newSignature[dimKey];

      // Gentle update—don't overwrite, blend
      const newPosition = highCount / total;
      const blendFactor = Math.min(total * 0.1, 0.3); // Small influence per observation

      newSignature[dimKey] = {
        ...currentDim,
        position: currentDim.position * (1 - blendFactor) + newPosition * blendFactor,
        confidence: Math.min(currentDim.confidence + 0.1, 1),
        evidence: [
          ...currentDim.evidence.slice(-2), // Keep only recent
          `Observed ${total} pattern signals`
        ]
      };
    }
  });

  return newSignature;
};

/**
 * Generate a gentle reflection based on emerging patterns
 * Not judgment—observation offered back
 */
export const generateReflection = (signature: SignatureProfile): string => {
  const observations: string[] = [];

  // Only surface patterns we're confident about
  Object.values(signature).forEach(dim => {
    if (dim.confidence > 0.3) {
      const position = dim.position;
      const spectrum = dim.spectrum;

      if (position < 0.35) {
        observations.push(`You seem to lean toward "${spectrum[0]}" in ${dim.name.toLowerCase()}`);
      } else if (position > 0.65) {
        observations.push(`You seem to lean toward "${spectrum[1]}" in ${dim.name.toLowerCase()}`);
      } else {
        observations.push(`You hold space between "${spectrum[0]}" and "${spectrum[1]}"`);
      }
    }
  });

  if (observations.length === 0) {
    return "Patterns are still emerging... Keep reflecting.";
  }

  return observations.join('. ') + '.';
};

/**
 * Get next reflection prompt based on least-explored dimension
 */
export const getNextPrompt = (signature: SignatureProfile): ReflectionPrompt => {
  // Find dimension with lowest confidence
  let lowestConfidence = 1;
  let lowestDimension: keyof SignatureProfile = 'dialecticalStyle';

  (Object.keys(signature) as Array<keyof SignatureProfile>).forEach(key => {
    if (signature[key].confidence < lowestConfidence) {
      lowestConfidence = signature[key].confidence;
      lowestDimension = key;
    }
  });

  // Get a prompt for that dimension
  const relevantPrompts = REFLECTION_PROMPTS.filter(p => p.dimension === lowestDimension);
  return relevantPrompts[Math.floor(Math.random() * relevantPrompts.length)];
};

/**
 * Format signature for display
 * The pattern, not the content
 */
export const formatSignatureDisplay = (signature: SignatureProfile): {
  dimension: string;
  spectrum: [string, string];
  position: number;
  confidence: number;
}[] => {
  return Object.values(signature).map(dim => ({
    dimension: dim.name,
    spectrum: dim.spectrum,
    position: dim.position,
    confidence: dim.confidence
  }));
};

/**
 * Check if signature is sufficiently developed for meaningful reflection
 */
export const isSignatureMature = (signature: SignatureProfile): boolean => {
  const avgConfidence = Object.values(signature).reduce(
    (sum, dim) => sum + dim.confidence, 0
  ) / Object.keys(signature).length;

  return avgConfidence > 0.4;
};

/**
 * Generate poetic scaffold from signature
 * A story that knows it's a story
 */
export const generatePoeticScaffold = (signature: SignatureProfile): string => {
  const dialectical = signature.dialecticalStyle.position;
  const temporal = signature.temporalOrientation.position;
  const certainty = signature.certaintyRelationship.position;
  const emergence = signature.emergenceStance.position;
  const scaffolding = signature.scaffoldingAwareness.position;

  // Create a small poem/description that captures the pattern
  // This is provisional—a scaffold, not a prison

  let scaffold = "Your pattern, as it appears now:\n\n";

  if (dialectical > 0.6) {
    scaffold += "You dwell in the impossible places,\n";
    scaffold += "where contradictions hold hands.\n";
  } else if (dialectical < 0.4) {
    scaffold += "You seek the clear path through,\n";
    scaffold += "resolution as a kind of care.\n";
  } else {
    scaffold += "You move between tension and release,\n";
    scaffold += "neither rushing nor lingering.\n";
  }

  if (temporal > 0.6) {
    scaffold += "Building to discover, hands first, theory later.\n";
  } else if (temporal < 0.4) {
    scaffold += "The plan is the first creation, before the creation.\n";
  }

  if (certainty > 0.6) {
    scaffold += "Ambiguity is not enemy but medium.\n";
  } else if (certainty < 0.4) {
    scaffold += "Clarity sought like water seeks level.\n";
  }

  if (emergence > 0.6) {
    scaffold += "Insight arrives like lightning—sudden, illuminating.\n";
  } else if (emergence < 0.4) {
    scaffold += "Understanding accretes, sediment becoming stone.\n";
  }

  if (scaffolding > 0.6) {
    scaffold += "\nYou build scaffolds knowing they are scaffolds—\n";
    scaffold += "structures meant to dissolve once they've served.";
  } else if (scaffolding < 0.4) {
    scaffold += "\nYou build foundations—\n";
    scaffold += "things meant to hold through time.";
  }

  scaffold += "\n\n(This is a scaffold, not a definition.\n";
  scaffold += "It will change as you change.)";

  return scaffold;
};
