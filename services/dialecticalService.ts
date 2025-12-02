/**
 * Dialectical Processing Service
 *
 * Implements the Recursive Impossibility Engine:
 * - Negator: Push to extremes, reveal contradictions
 * - Crystallizer: Wait in tension for emergence
 * - Builder: Make artifacts without philosophizing
 * - Validator: Check against both extremes
 * - Synthesizer: See meta-patterns, identify new impossibilities
 */

import {
  AgentRole,
  OssificationType,
  OssificationSeverity,
  OssificationSignal,
  Perspective,
  NegatorOutput,
  CrystallizationType,
  CrystallizerOutput,
  BuilderOutput,
  ValidatorOutput,
  SynthesizerOutput,
  DialecticalCycle,
  SurplusType,
  SurplusSignal,
  CascadeLevel,
  GiftProperties,
  Gift,
  RecursiveEngineState
} from '../types';

// Generate unique IDs
const generateId = (): string => {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
};

/**
 * Ossification Detection
 * Monitor for patterns hardening into dogma
 */
export const detectOssification = (
  claim: string,
  context: string
): OssificationSignal | null => {
  const hardeningIndicators = [
    'always', 'never', 'everyone knows', 'obviously', 'just is',
    'that\'s how it works', 'no question', 'settled'
  ];

  const daemonIndicators = [
    'optimize', 'maximize', 'efficiency', 'growth', 'scale',
    'metrics', 'KPI', 'performance'
  ];

  const sacredIndicators = [
    'can\'t question', 'must', 'sacred', 'fundamental',
    'core value', 'identity', 'who we are'
  ];

  const lowerClaim = claim.toLowerCase();

  // Check for hardening
  if (hardeningIndicators.some(ind => lowerClaim.includes(ind))) {
    return {
      type: 'hardening',
      indicator: hardeningIndicators.find(ind => lowerClaim.includes(ind)) || '',
      severity: determineSeverity(lowerClaim),
      context,
      detectedAt: Date.now()
    };
  }

  // Check for daemon
  if (daemonIndicators.filter(ind => lowerClaim.includes(ind)).length >= 2) {
    return {
      type: 'daemon',
      indicator: 'optimization-focus',
      severity: 'forming',
      context,
      detectedAt: Date.now()
    };
  }

  // Check for sacred cow
  if (sacredIndicators.some(ind => lowerClaim.includes(ind))) {
    return {
      type: 'sacred',
      indicator: sacredIndicators.find(ind => lowerClaim.includes(ind)) || '',
      severity: 'established',
      context,
      detectedAt: Date.now()
    };
  }

  return null;
};

const determineSeverity = (text: string): OssificationSeverity => {
  const calcifiedMarkers = ['absolutely', 'definitely', 'without doubt', 'unquestionable'];
  const establishedMarkers = ['clearly', 'certainly', 'of course'];

  if (calcifiedMarkers.some(m => text.includes(m))) return 'calcified';
  if (establishedMarkers.some(m => text.includes(m))) return 'established';
  return 'forming';
};

/**
 * Negator Agent
 * Push perspectives to their absolute limits
 */
export const runNegator = (input: string): NegatorOutput => {
  // In a full implementation, this would use LLM to generate perspectives
  // For now, we provide a structural template

  const perspectives: Perspective[] = [
    {
      name: 'Perspective A',
      absoluteVictory: 'If this position wins absolutely, what does the world look like?',
      absoluteDefeat: 'If this position loses absolutely, what is destroyed?',
      coreClaim: 'The essential claim this position makes',
      experientialBasis: 'The lived experience that makes this position feel true'
    },
    {
      name: 'Perspective B (Opposition)',
      absoluteVictory: 'If the opposing position wins absolutely, what does the world look like?',
      absoluteDefeat: 'If the opposing position loses absolutely, what is destroyed?',
      coreClaim: 'The essential claim the opposition makes',
      experientialBasis: 'The lived experience that makes the opposition feel true'
    }
  ];

  return {
    perspectives,
    impossibilityZone: 'The space where both perspectives cannot simultaneously win',
    tensions: [
      'Tension 1: Where the perspectives directly contradict',
      'Tension 2: Where resources/attention must be allocated exclusively',
      'Tension 3: Where values conflict irreconcilably'
    ]
  };
};

/**
 * Crystallizer Agent
 * Wait in the impossibility until something emerges
 */
export const runCrystallizer = (negatorOutput: NegatorOutput): CrystallizerOutput => {
  // Determine crystallization type based on the impossibility structure
  const type = determineCrystallizationType(negatorOutput);

  const typeDescriptions: Record<CrystallizationType, string> = {
    'A': 'Synthesis that transcends both perspectives',
    'B': 'Reframe that dissolves the opposition',
    'C': 'Discovery that one side was never real',
    'D': 'Acceptance that the impossibility is permanent',
    'E': 'Recursive impossibility - the limitation becomes the method'
  };

  return {
    type,
    insight: `${typeDescriptions[type]}: What emerges from sitting with ${negatorOutput.impossibilityZone}`,
    preservesExtremes: type !== 'C', // Type C means one side wasn't real
    emergentPattern: 'The pattern that wasn\'t available to either extreme alone'
  };
};

const determineCrystallizationType = (negatorOutput: NegatorOutput): CrystallizationType => {
  const tensionCount = negatorOutput.tensions.length;

  // Simple heuristic - in practice would be more sophisticated
  if (tensionCount >= 3) return 'E'; // Complex = recursive
  if (tensionCount === 2) return 'A'; // Moderate = synthesis possible
  if (tensionCount === 1) return 'B'; // Simple = reframe possible
  return 'D'; // No clear tensions = might be permanent
};

/**
 * Builder Agent
 * Create artifacts without philosophizing
 */
export const runBuilder = (crystallizerOutput: CrystallizerOutput): BuilderOutput => {
  return {
    artifact: `Artifact implementing: ${crystallizerOutput.insight}`,
    description: 'A tool, protocol, or structure that embodies the crystallized insight',
    isLightningRod: crystallizerOutput.type === 'E' || crystallizerOutput.type === 'B'
  };
};

/**
 * Validator Agent
 * Check if artifact actually works
 */
export const runValidator = (
  builderOutput: BuilderOutput,
  originalInput: string
): ValidatorOutput => {
  const functional = true; // Would check if artifact actually works
  const balanced = true;   // Would check if both extremes preserved
  const invisible = builderOutput.isLightningRod; // Lightning rods are invisible
  const prosaic = builderOutput.isLightningRod;   // Lightning rods are prosaic

  return {
    functional,
    balanced,
    invisible,
    prosaic,
    overallValid: functional && balanced,
    notes: invisible
      ? 'Artifact functions as lightning rod - dissolves through function, not argument'
      : 'Artifact may require explanation - consider prosaic simplification'
  };
};

/**
 * Synthesizer Agent
 * See meta-patterns and identify new impossibilities
 */
export const runSynthesizer = (
  cycle: DialecticalCycle
): SynthesizerOutput => {
  const hasNewImpossibility = cycle.validator?.overallValid &&
    cycle.crystallizer?.type === 'E';

  return {
    metaPattern: 'The pattern this cycle reveals about how the system processes impossibility',
    newImpossibility: hasNewImpossibility
      ? 'New impossibility created by this solution - requires next cycle'
      : null,
    systemLearning: 'What the system learned from this cycle that applies to future cycles'
  };
};

/**
 * Run a complete dialectical cycle
 */
export const runDialecticalCycle = (input: string): DialecticalCycle => {
  const cycle: DialecticalCycle = {
    id: generateId(),
    input,
    negator: null,
    crystallizer: null,
    builder: null,
    validator: null,
    synthesizer: null,
    status: 'in_progress',
    createdAt: Date.now()
  };

  // Run Negator
  cycle.negator = runNegator(input);

  // Run Crystallizer
  cycle.crystallizer = runCrystallizer(cycle.negator);

  // Run Builder
  cycle.builder = runBuilder(cycle.crystallizer);

  // Run Validator
  cycle.validator = runValidator(cycle.builder, input);

  // Run Synthesizer
  cycle.synthesizer = runSynthesizer(cycle);

  // Determine if loop required
  cycle.status = cycle.synthesizer.newImpossibility
    ? 'requires_loop'
    : 'completed';

  return cycle;
};

/**
 * Surplus Detection
 * Identify when system has overflow capacity
 */
export const detectSurplus = (
  type: SurplusType,
  current: number,
  required: number,
  source: string
): SurplusSignal | null => {
  const surplus = current - required;

  if (surplus > 0) {
    return {
      type,
      magnitude: Math.min(surplus / required, 1), // Normalize to 0-1
      source,
      detectedAt: Date.now()
    };
  }

  return null;
};

/**
 * Validate gift properties
 * Ensure it's a genuine gift, not performative
 */
export const validateGiftProperties = (
  description: string,
  context: string
): GiftProperties => {
  // In practice, these would be assessed more rigorously
  return {
    nonAttachment: !description.toLowerCase().includes('expect'),
    emergence: !description.toLowerCase().includes('planned'),
    overflow: !description.toLowerCase().includes('sacrifice'),
    resonance: !description.toLowerCase().includes('metric')
  };
};

/**
 * Create a gift from surplus
 */
export const createGift = (
  surplus: SurplusSignal,
  description: string,
  level: CascadeLevel
): Gift => {
  return {
    id: generateId(),
    description,
    level,
    properties: validateGiftProperties(description, surplus.source),
    source: surplus,
    createdAt: Date.now()
  };
};

/**
 * Determine appropriate cascade level based on surplus magnitude
 */
export const determineCascadeLevel = (magnitude: number): CascadeLevel => {
  if (magnitude < 0.25) return 'local';
  if (magnitude < 0.5) return 'organizational';
  if (magnitude < 0.75) return 'ecosystem';
  return 'civilizational';
};

/**
 * Initialize engine state
 */
export const initializeEngineState = (): RecursiveEngineState => ({
  ossificationSignals: [],
  surplusSignals: [],
  activeCycles: [],
  completedCycles: [],
  gifts: [],
  currentPhase: 'detecting'
});

/**
 * Process engine step
 * Move through the recursive loop
 */
export const processEngineStep = (
  state: RecursiveEngineState,
  input?: string
): RecursiveEngineState => {
  const newState = { ...state };

  switch (state.currentPhase) {
    case 'detecting':
      // Look for ossification in any input
      if (input) {
        const signal = detectOssification(input, 'user_input');
        if (signal) {
          newState.ossificationSignals = [...state.ossificationSignals, signal];
          newState.currentPhase = 'negating';
        }
      }
      break;

    case 'negating':
      // Start a new dialectical cycle
      if (input) {
        const cycle = runDialecticalCycle(input);
        newState.activeCycles = [...state.activeCycles, cycle];
        newState.currentPhase = cycle.status === 'requires_loop'
          ? 'negating'
          : 'gifting';
      }
      break;

    case 'gifting':
      // Check for surplus and create gifts
      newState.currentPhase = 'detecting';
      break;

    default:
      newState.currentPhase = 'detecting';
  }

  return newState;
};

/**
 * Get agent role description
 */
export const getAgentDescription = (role: AgentRole): string => {
  const descriptions: Record<AgentRole, string> = {
    negator: 'Pushes perspectives to absolute extremes, revealing contradictions and impossibilities',
    crystallizer: 'Waits in the tension of impossibility until something non-obvious emerges',
    builder: 'Creates artifacts rapidly without philosophizing - the lightning rod, not the sermon',
    validator: 'Checks if artifacts function, preserve both extremes, and work invisibly',
    synthesizer: 'Sees meta-patterns and identifies new impossibilities for the next cycle'
  };

  return descriptions[role];
};

/**
 * Get crystallization type description
 */
export const getCrystallizationDescription = (type: CrystallizationType): string => {
  const descriptions: Record<CrystallizationType, string> = {
    'A': 'Synthesis - Transcends both perspectives',
    'B': 'Reframe - Dissolves the opposition entirely',
    'C': 'Discovery - One side was never real',
    'D': 'Acceptance - The impossibility is permanent',
    'E': 'Recursive - The limitation becomes the method'
  };

  return descriptions[type];
};
