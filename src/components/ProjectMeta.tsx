export type ProjectDetails = { difficulty: string; time: string; tools: string; bundles: string };

export function ProjectMeta({ details }: { details: ProjectDetails }) {
  return (
    <div className="font-ui mt-4 border-t border-border pt-4 text-sm text-foreground/75">
      <dl className="grid gap-2">
        <div><dt className="inline font-semibold text-primary">Difficulty:</dt> <dd className="inline">{details.difficulty}</dd></div>
        <div><dt className="inline font-semibold text-primary">Time:</dt> <dd className="inline">{details.time}</dd></div>
        <div><dt className="inline font-semibold text-primary">Tools:</dt> <dd className="inline">{details.tools}</dd></div>
        <div><dt className="inline font-semibold text-primary">Bundles:</dt> <dd className="inline">approximately {details.bundles}</dd></div>
      </dl>
      <a href="/product#bundle-calculator" className="mt-4 inline-block font-semibold text-accent hover:underline">Estimate bundles for this project →</a>
    </div>
  );
}