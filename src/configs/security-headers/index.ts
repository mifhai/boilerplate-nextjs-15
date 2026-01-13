import { defaultHeaders } from "./headers";

import type { ContentSecurityPolicyValue, PermissionsPolicyValue, SecurityHeader, StrictTransportSecurityValue } from "./types";

const headerValueMappers = {
  strictTransportSecurity: (value: StrictTransportSecurityValue) =>
    [
      `max-age=${value.maxAge}`,
      value.includeSubdomains && "includeSubDomains",
      value.preload && "preload",
    ]
      .filter(Boolean)
      .join("; "),
  contentSecurityPolicy: (value: ContentSecurityPolicyValue) => {
    return Object.entries(value)
      .map(([directive, sources]) => {
        if (directive === "upgrade-insecure-requests") {
          return sources ? "upgrade-insecure-requests" : "";
        }

        return (
          (sources as string[])?.length
          && `${directive} ${(sources as string[]).join(" ")}`
        );
      })
      .filter(Boolean)
      .join("; ");
  },
  permissionsPolicy: (value: PermissionsPolicyValue) =>
    Object.entries(value)
      .map(
        ([directive, sources]) =>
          (sources as string[])?.length
          && `${directive}=${(sources as string[]).join(" ")}`,
      )
      .filter(Boolean)
      .join(", "),
};

export const headersInit: SecurityHeader[] = [
  { key: "X-Frame-Options", value: defaultHeaders.xFrameOptions },
  { key: "X-Content-Type-Options", value: defaultHeaders.xContentTypeOptions },
  { key: "Referrer-Policy", value: defaultHeaders.referrerPolicy },
  {
    key: "Permissions-Policy",
    value: headerValueMappers.permissionsPolicy(defaultHeaders.permissionsPolicy),
  },
  {
    key: "Strict-Transport-Security",
    value: headerValueMappers.strictTransportSecurity(defaultHeaders.strictTransportSecurity),
  },
  { key: "X-XSS-Protection", value: defaultHeaders.xXSSProtection },
  {
    key: "content-security-policy",
    value: headerValueMappers.contentSecurityPolicy(defaultHeaders.contentSecurityPolicy),
  },
];
