export enum MessageRole {
  USER = 'user',
  MODEL = 'model'
}

export interface ChatMessage {
  role: MessageRole;
  text: string;
  timestamp: number;
}

export interface SectionProps {
  id: string;
  className?: string;
}

export interface MetricData {
  subject: string;
  Corporate: number;
  Independent: number;
  fullMark: number;
}

// Dialectical Engine Types

export type AgentRole = 'negator' | 'crystallizer' | 'builder' | 'validator' | 'synthesizer';

export type OssificationType = 'hardening' | 'daemon' | 'invisible' | 'sacred';
export type OssificationSeverity = 'forming' | 'established' | 'calcified';

export interface OssificationSignal {
  type: OssificationType;
  indicator: string;
  severity: OssificationSeverity;
  context: string;
  detectedAt: number;
}

export interface Perspective {
  name: string;
  absoluteVictory: string;
  absoluteDefeat: string;
  coreClaim: string;
  experientialBasis: string;
}

export interface NegatorOutput {
  perspectives: Perspective[];
  impossibilityZone: string;
  tensions: string[];
}

export type CrystallizationType = 'A' | 'B' | 'C' | 'D' | 'E';

export interface CrystallizerOutput {
  type: CrystallizationType;
  insight: string;
  preservesExtremes: boolean;
  emergentPattern: string;
}

export interface BuilderOutput {
  artifact: string;
  description: string;
  isLightningRod: boolean; // Functions without explaining
}

export interface ValidatorOutput {
  functional: boolean;
  balanced: boolean;
  invisible: boolean;
  prosaic: boolean;
  overallValid: boolean;
  notes: string;
}

export interface SynthesizerOutput {
  metaPattern: string;
  newImpossibility: string | null;
  systemLearning: string;
}

export interface DialecticalCycle {
  id: string;
  input: string;
  negator: NegatorOutput | null;
  crystallizer: CrystallizerOutput | null;
  builder: BuilderOutput | null;
  validator: ValidatorOutput | null;
  synthesizer: SynthesizerOutput | null;
  status: 'pending' | 'in_progress' | 'completed' | 'requires_loop';
  createdAt: number;
}

// Gift Cascade Types

export type SurplusType = 'computational' | 'attentional' | 'resource' | 'capability';
export type CascadeLevel = 'local' | 'organizational' | 'ecosystem' | 'civilizational';

export interface SurplusSignal {
  type: SurplusType;
  magnitude: number; // 0-1
  source: string;
  detectedAt: number;
}

export interface GiftProperties {
  nonAttachment: boolean; // Released, not binding
  emergence: boolean;     // Recognized, not manufactured
  overflow: boolean;      // Not sacrificial
  resonance: boolean;     // Valued by resonance, not metrics
}

export interface Gift {
  id: string;
  description: string;
  level: CascadeLevel;
  properties: GiftProperties;
  source: SurplusSignal;
  createdAt: number;
}

// Recursive Engine State

export interface RecursiveEngineState {
  ossificationSignals: OssificationSignal[];
  surplusSignals: SurplusSignal[];
  activeCycles: DialecticalCycle[];
  completedCycles: DialecticalCycle[];
  gifts: Gift[];
  currentPhase: 'detecting' | 'negating' | 'crystallizing' | 'building' | 'validating' | 'synthesizing' | 'gifting';
}
