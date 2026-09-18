import { createFileRoute } from "@tanstack/react-router";
import ContractorResourcesPage from "../../app/contractor-resources/page";
import { breadcrumbLd, jsonLdScript, pageMeta } from "@/lib/site";

const title = "Contractor Resources — Western Red Cedar Shingles for Siding Projects";
const description = "Spec sheet, bulk ordering info, installation reference, and client-facing talking points for contractors and remodelers using Western Red Cedar Shingles from Lowe's.";

export const Route = createFileRoute("/contractor-resources")({
  head: () => ({ ...pageMeta({ title, description, path: "/contractor-resources" }), scripts: [jsonLdScript({ "@context": "https://schema.org", "@type": "Service", name: "Western Red Cedar Shingles Contractor Resources", description }), jsonLdScript(breadcrumbLd([{ name: "Home", path: "/" }, { name: "Contractor Resources", path: "/contractor-resources" }]))] }),
  component: ContractorResourcesPage,
});