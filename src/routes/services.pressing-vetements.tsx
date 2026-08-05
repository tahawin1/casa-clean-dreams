import { createFileRoute } from "@tanstack/react-router";

import { ServicePageLayout } from "@/components/ServicePageLayout";
import { getService, SITE_URL } from "@/data/services";
import { buildServiceHead } from "@/lib/service-head";

const service = getService("pressing-vetements");

export const Route = createFileRoute("/services/pressing-vetements")({
  head: () => buildServiceHead(service, SITE_URL),
  component: () => <ServicePageLayout service={service} />,
});
