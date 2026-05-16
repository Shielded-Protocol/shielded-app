'use client';

type ProofStep = 
  | 'idle'
  | 'building_inputs'
  | 'generating_proof'
  | 'verifying_locally'
  | 'submitting'
  | 'confirmed';

const STEP_LABELS: Record<ProofStep, string> = {
  idle: 'Ready',
  building_inputs: 'Building proof inputs...',
  generating_proof: 'Generating ZK proof (this takes ~5 seconds)...',
  verifying_locally: 'Verifying proof locally...',
  submitting: 'Submitting to Stellar...',
  confirmed: 'Transaction confirmed',
};

const STEP_ORDER: ProofStep[] = [
  'building_inputs',
  'generating_proof', 
  'verifying_locally',
  'submitting',
  'confirmed',
];

interface ProofProgressProps {
  currentStep: ProofStep;
  error?: string;
}

export function ProofProgress({ currentStep, error }: ProofProgressProps) {
  const currentIndex = STEP_ORDER.indexOf(currentStep);

  return (
    <div style={{ padding: '1rem 0' }}>
      {STEP_ORDER.map((step, i) => {
        const done = i < currentIndex;
        const active = i === currentIndex;
        return (
          <div key={step} style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '10px',
            padding: '6px 0',
            opacity: i > currentIndex ? 0.4 : 1,
          }}>
            <span style={{ 
              width: 20, 
              height: 20, 
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 12,
              background: done ? '#1D9E75' : active ? '#7F77DD' : 'transparent',
              border: '1px solid currentColor',
              flexShrink: 0,
            }}>
              {done ? '✓' : i + 1}
            </span>
            <span style={{ fontSize: 14 }}>{STEP_LABELS[step]}</span>
          </div>
        );
      })}
      {error && (
        <p style={{ color: 'red', fontSize: 13, marginTop: 8 }}>{error}</p>
      )}
    </div>
  );
}
