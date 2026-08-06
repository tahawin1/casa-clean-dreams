import { createFileRoute } from "@tanstack/react-router";

import { ServicePageLayout } from "@/components/ServicePageLayout";
import { getService, SITE_URL } from "@/data/services";
import { buildServiceHead } from "@/lib/service-head";

const service = getService("cuir-chaussures", "fr");

export const Route = createFileRoute("/services/cuir-chaussures")({
  head: () => buildServiceHead(service, SITE_URL),
  component: () => <ServicePageLayout slug="cuir-chaussures" />,
});
